import { BotMessageSquare, MenuIcon, XIcon, SparkleIcon, FolderEditIcon, GalleryHorizontalEnd, DollarSignIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { PrimaryButton } from './Buttons'
import { useClerk, useUser, UserButton, useAuth } from '@clerk/clerk-react'
import api from '../configs/axios'
import toast from 'react-hot-toast'

export default function Navbar() {

  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn, openSignUp } = useClerk()
  const { getToken } = useAuth()
  const { pathname } = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [credits, setCredits] = useState(0)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Create', href: '/generate' },
    { name: 'Community', href: '/community' },
    { name: 'Plans', href: '/plans' },
  ]

  const getUserCredits = async () => {
    try {
      const token = await getToken()
      const { data } = await api.get('/api/user/credits', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setCredits(data.credits)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    if (user) getUserCredits()
  }, [user, pathname])

  return (

    <nav className='fixed top-5 left-0 right-0 z-50 px-4 animate-slideDown'>

      <div className='max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-3'>

        {/* Logo */}
        <Link to='/' className='flex items-center gap-1'>
          <BotMessageSquare size={28} />
          <p className='font-bold text-xl'>SnapAI</p>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
          {navLinks.map(link => (
            <Link key={link.name} to={link.href} className="hover:text-white transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Section */}
        {!user ? (

          <div className='hidden md:flex items-center gap-3'>
            <button
              onClick={() => openSignIn()}
              className='text-sm font-medium text-gray-300 hover:text-white transition'
            >
              Sign in
            </button>

            <PrimaryButton onClick={() => openSignUp()}>
              Get Started
            </PrimaryButton>
          </div>

        ) : (

          <div className='flex items-center gap-3'>

            <button
              onClick={() => navigate('/plans')}
              className='text-sm text-gray-300'
            >
              Credits: {credits}
            </button>

            <UserButton>
              <UserButton.MenuItems>

                <UserButton.Action
                  label='Generate'
                  labelIcon={<SparkleIcon size={14} />}
                  onClick={() => navigate('/generate')}
                />

                <UserButton.Action
                  label='My Generations'
                  labelIcon={<FolderEditIcon size={14} />}
                  onClick={() => navigate('/my-generations')}
                />

                <UserButton.Action
                  label='Community'
                  labelIcon={<GalleryHorizontalEnd size={14} />}
                  onClick={() => navigate('/community')}
                />

                <UserButton.Action
                  label='Plans'
                  labelIcon={<DollarSignIcon size={14} />}
                  onClick={() => navigate('/plans')}
                />

              </UserButton.MenuItems>
            </UserButton>

          </div>

        )}

        {/* Mobile Menu Button */}
        {!user && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden'
          >
            <MenuIcon className='size-6' />
          </button>
        )}

      </div>

      {/* Mobile Menu */}
      <div className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {navLinks.map(link => (
          <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => {
            setIsOpen(false)
            openSignIn()
          }}
          className='font-medium text-gray-300 hover:text-white transition'
        >
          Sign in
        </button>

        <PrimaryButton
          onClick={() => {
            setIsOpen(false)
            openSignUp()
          }}
        >
          Get Started
        </PrimaryButton>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800"
        >
          <XIcon />
        </button>

      </div>

    </nav>
  )
}