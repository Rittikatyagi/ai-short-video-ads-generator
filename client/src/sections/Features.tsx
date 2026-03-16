import { featuresData } from '../assets/dummy-data';
import Title from '../components/Title';

export default function Features() {
    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Features"
                    heading="Built for modern brands"
                    description="Our AI instantly produces professional lifestyle imagery and short-form videos optimized for commercials & Reels."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeUp ">
                    {featuresData.map((feature,i) => (
                        <div key={i}
                            className="rounded-2xl p-6 bg-white/3 border border-white/6 mar hover:border-white/50 transition-colors "
                        >
                            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};