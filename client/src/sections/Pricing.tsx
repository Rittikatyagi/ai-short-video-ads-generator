import { Check } from "lucide-react";
import Title from "../components/Title";
import { plansData } from "../assets/dummy-data";
import { useRef, useEffect } from "react";
import { GhostButton, PrimaryButton } from "../components/Buttons";

export default function Pricing() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-12", "opacity-0");
            entry.target.classList.add("translate-y-0", "opacity-100");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Pricing"
          heading="Pricing Plans"
          description="Our Pricing Plans are simple, transparent and flexible. Choose the plan that best suits your needs."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plansData.map((plan, i) => (
            <div
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`relative p-6 rounded-xl border backdrop-blur 
              transform translate-y-12 opacity-0
              transition-all duration-700 ease-out hover:scale-105
              ${
                plan.popular
                  ? "border-indigo-500/50 bg-indigo-900/30"
                  : "border-white/8 bg-indigo-950/30"
              }`}
            >
              {plan.popular && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-md text-xs">
                  Most popular
                </p>
              )}

              <div className="mb-6">
                <p>{plan.name}</p>

                <div className="flex items-end gap-3">
                  <span className="text-3xl font-extrabold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">
                    / {plan.credits}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mt-2">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-indigo-400" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div>
                {plan.popular ? (
                  <PrimaryButton className="w-full">
                    Buy Now
                  </PrimaryButton>
                ) : (
                  <GhostButton className="w-full justify-center">
                    Buy Now
                  </GhostButton>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}