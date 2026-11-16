import { motion } from 'motion/react';
import { Handshake, ShieldCheck, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Handshake,
  ShieldCheck,
  Globe,
};

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-slate-800/70 bg-[#080F1E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Heading & Summary */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-cyan-400">About Me</p>
            <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Nine Years of Structured Operations &amp; Multilingual Stakeholder Support
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
              {portfolioData.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Highlight Cards */}
          <div className="flex flex-col justify-center gap-4 lg:col-span-5">
            {portfolioData.about.highlights.map((card, idx) => {
              const Icon = iconMap[card.iconName];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group rounded-xl border border-slate-800/80 bg-slate-900/55 p-6 backdrop-blur-md transition-all duration-150 hover:border-cyan-500/45 hover:bg-slate-900/80"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-cyan-400 transition-colors group-hover:border-cyan-500/40 group-hover:text-cyan-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
