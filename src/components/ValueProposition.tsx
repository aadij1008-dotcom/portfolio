import { motion } from 'motion/react';
import {
  ShieldCheck,
  Languages,
  Users,
  TrendingUp,
  Globe,
  Award,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valueIconMap = {
  ShieldCheck,
  Languages,
  Users,
  TrendingUp,
  Globe,
  Award,
};

export function ValueProposition() {
  return (
    <section
      id="value-proposition"
      className="relative border-b border-slate-800/70 bg-[#060B16] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-cyan-400">
            Professional Value Proposition
          </p>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {portfolioData.valueProposition.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Practical operational strengths grounded in multi-year vendor management, logistics coordination, and bilingual customer service.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.valueProposition.items.map((item, idx) => {
            const Icon = valueIconMap[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-500/45 hover:bg-slate-900/85"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-cyan-400 transition-colors group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono-tabular text-xs font-medium text-slate-500">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
