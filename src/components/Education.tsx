import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Education() {
  return (
    <section
      id="education"
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
          <p className="text-sm font-medium text-cyan-400">Academic Background</p>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Foundational academic credentials in banking and health care administration.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-5 w-px bg-gradient-to-b from-blue-500/60 to-slate-800 sm:left-6"
          />

          <div className="grid grid-cols-1 gap-6">
            {portfolioData.education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-14 sm:pl-16"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/40 bg-[#0B152B] text-cyan-400 sm:h-12 sm:w-12"
                >
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md transition-colors hover:border-cyan-500/40 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {item.qualification}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-slate-300">
                      <span className="font-medium text-cyan-300">
                        {item.institution}
                      </span>
                      {item.location && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-400">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{item.location}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 font-mono-tabular shrink-0">
                    <Calendar className="h-4 w-4 text-blue-400" aria-hidden="true" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
