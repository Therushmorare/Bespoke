import { BookOpen, Users, Landmark, Terminal } from "lucide-react";

const industries = [
  { label: "Audit Firms", icon: BookOpen },
  { label: "Consulting", icon: Users },
  { label: "Finance", icon: Landmark },
  { label: "IT Services", icon: Terminal },
];

export default function IndustriesServed() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-[#0E0E13] px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-12">

        <h2
          id="industries-heading"
          className="text-white font-bold font-serif text-2xl md:text-3xl m-0 text-center"
        >
          Industries Served
        </h2>

        <div
          role="list"
          aria-label="Industries we serve"
          className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {industries.map(({ label, icon: Icon }) => (
            <div
              key={label}
              role="listitem"
              className="flex items-center gap-3 group"
            >
              <Icon
                size={22}
                className="text-violet-500 group-hover:text-violet-400 transition-colors duration-200"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-white/60 group-hover:text-white/90 text-xs font-semibold font-sans tracking-[0.18em] uppercase transition-colors duration-200">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}