import { footerLinks, socialLinks } from "../assets/dummy-data";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-20">

            <div className="w-full px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">

                    {/* Left Section */}
                    <div className="lg:col-span-3 space-y-6">
                        <a href="#" className="block w-fit">
                            <h2 className="text-2xl font-semibold">SnapAI</h2>
                        </a>

                        <p className="text-lg text-neutral-400 max-w-md">
                            Create high converting short video ads in seconds using AI powered automation designed for modern brands and creators.
                        </p>

                        <div className="flex gap-5 text-sm text-neutral-400">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="hover:text-primary text-md transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-md font-medium mb-4 text-neutral-200">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3 text-sm text-neutral-400">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.url}
                                                className="hover:text-white transition"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 p-2 flex flex-col md:flex-row justify-center gap-3 text-md text-neutral-500">
                    <p>Copyright © 2026 <span className="font-semibold">SnapAI</span> . All rights reserved</p>
                </div>

            </div>

        </footer>
    );
}