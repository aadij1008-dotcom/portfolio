import { motion } from 'motion/react';
import { Languages as LanguagesIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Languages() {
  return (
    <section
      id="languages"
      className="relative border-b border-slate-800/70 bg-[#080F1E] py-20 sm:py-24"
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
            Multilingual Communication
          </p>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Language Proficiency
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Supporting international vendors, customers, and cross-border operations across English, German, and Hindi.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {portfolioData.languages.map((lang, idx) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md transition-all duration-150 hover:border-cyan-500/45"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {lang.language}
                  </h3>
                  <LanguagesIcon
                    className="h-5 w-5 text-cyan-400/80"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-2 text-sm font-medium text-cyan-300">
                  {lang.levelLabel}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {lang.detail}
                </p>
              </div>

              {/* Clean Proficiency Indicator Bar */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Proficiency Scale</span>
                  <span className="font-mono-tabular text-slate-300">
                    {lang.levelLabel.split(' ')[0]}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-label={`${lang.language} proficiency: ${lang.levelLabel}`}
                  aria-valuenow={lang.proficiencyPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-2 w-full overflow-hidden rounded-full bg-slate-800"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.1 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      width: `${lang.proficiencyPercent}%`,
                      transformOrigin: 'left',
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
