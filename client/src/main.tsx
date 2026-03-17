import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from "@clerk/themes"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')! as HTMLElement).render(
    <React.StrictMode>
        <ClerkProvider appearance={{
            theme: dark, variables: {
                colorPrimary: '#14b8a6',
            }
        }} publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ClerkProvider>
    </React.StrictMode >
)