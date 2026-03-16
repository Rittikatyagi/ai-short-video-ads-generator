import { ArrowRightIcon, CheckIcon, PlayIcon, ZapIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "../components/Buttons";

export default function Hero() {

    const trustedUserImages = [
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
    ];

    const mainImageUrl =
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop";

    const productHighlights = [
        "AI lifestyle visuals",
        "Short form video ads",
        "Reels & TikTok ready",
        "Commercial usage rights",
        "No technical skills needed"
    ];

    return (
        <>
            <section
                id="home"
                className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center"
                style={{ backgroundImage: `url(${mainImageUrl})` }}
            >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16 mt-16 animate-fadeUp">

                    {/* Community badge */}
                    <div className="flex items-center justify-center gap-3 p-1.5 pr-4 rounded-full border border-white/10 bg-white/10 mb-6 w-fit mx-auto">

                        <div className="flex -space-x-2">
                            {trustedUserImages.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt="user"
                                    className="size-7 rounded-full border border-black/40"
                                />
                            ))}
                        </div>

                        <p className="text-xs text-gray-300">
                            Join community of creators
                        </p>

                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Generate Viral Ads
                        <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-300 to-emerald-400">
                            in seconds
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-white max-w-xl mx-auto mb-8 text-2xl font-semibold">
                        Upload product and model photos and instantly create
                        polished lifestyle visuals and short video ads ready for social platforms.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

                        <PrimaryButton className="py-3 px-7 hover:scale-105 transition-transform">
                            Get started
                            <ArrowRightIcon className="size-4" />
                        </PrimaryButton>

                        <GhostButton className="py-3 px-6 hover:bg-white/10">
                            <PlayIcon className="size-4" />
                            Watch demo
                        </GhostButton>

                    </div>

                    <div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                    >
                        <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                            <ZapIcon className="size-4 text-sky-500" />
                            <div>
                                <div>Seconds to create</div>
                                <div className="text-xs text-gray-400">
                                    Optimized social formats
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:block h-6 w-px bg-white/6" />

                        <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                            <CheckIcon className="size-4 text-cyan-500" />
                            <div>
                                <div>Commercial rights</div>
                                <div className="text-xs text-gray-400">
                                    Use anywhere, no fuss
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Product highlights strip */}
            <section className="border-y border-white/10 bg-black">

                <div className="mx-auto px-6 py-6 overflow-hidden">

                    <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">

                        {Array(10)
                            .fill(productHighlights)
                            .flat()
                            .map((item, i) => (
                                <span
                                    key={i}
                                    className="text-sm font-semibold text-gray-400 hover:text-gray-200 transition"
                                >
                                    {item}
                                </span>
                            ))}

                    </div>

                </div>

            </section>
        </>
    );
}