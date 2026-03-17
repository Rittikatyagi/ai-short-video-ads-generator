import { ArrowRightIcon } from "lucide-react";
import { GhostButton } from "../components/Buttons";


export default function CTA() {
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">

          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10 animate-fadeUp">
            
            <h2 className="text-2xl sm:text-4xl font-semibold mb-6">
              Grow Your Brand With Smart Content
            </h2>

            <p className="max-sm:text-sm text-slate-400 mb-10 max-w-xl mx-auto">
              Create engaging short form content for your brand using powerful
              AI tools. Faster production, better reach, and zero complexity.
            </p>

            <GhostButton className="px-8 py-3 gap-2 hover:scale-105 transition-transform">
              Try It Free <ArrowRightIcon size={20} />
            </GhostButton>


          </div>
        </div>
      </div>
    </section>
  );
}