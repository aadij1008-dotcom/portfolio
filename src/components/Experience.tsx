import { motion } from 'motion/react';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  return (
    <section
      id="experience"
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
          <p className="text-sm font-medium text-cyan-400">Career Trajectory</p>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400">
            Progressive experience spanning international export logistics, bilingual customer support, catalog operations, and vendor mentoring.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative mt-14">
          {/* Continuous Vertical Line */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-5 w-px bg-gradient-to-b from-cyan-500/70 via-blue-500/40 to-slate-800 sm:left-6"
          />

          <div className="space-y-10">
            {portfolioData.experience.map((role, index) => (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Company Monogram Node on Timeline */}
                <div
                  aria-hidden="true"
                  className="absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-[#0B152B] font-display text-xs font-bold tracking-wider text-cyan-300 shadow-sm shadow-cyan-950/50 sm:h-12 sm:w-12 sm:text-sm"
                >
                  {role.companyInitials}
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md transition-colors duration-150 hover:border-blue-500/40 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {role.position}
                      </h3>

                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
                        <span className="inline-flex items-center gap-1.5 font-medium text-cyan-300">
                          <Building2 className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                          <span>{role.company}</span>
                        </span>

                        {role.location && (
                          <>
                            <span aria-hidden="true" className="text-slate-600">
                              ·
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-slate-400">
                              <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                              <span>{role.location}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 font-mono-tabular shrink-0 sm:pt-1">
                      <Calendar className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                      <span>{role.duration}</span>
                    </div>
                  </div>

                  {/* Subtle Hairline Divider */}
                  <div className="my-5 h-px w-full bg-slate-800/80" />

                  {/* Responsibilities List */}
                  <ul className="space-y-2.5">
                    {role.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-cyan-400/85"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
