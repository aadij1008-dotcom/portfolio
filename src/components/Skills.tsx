import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Handshake,
  Settings2,
  ShieldCheck,
  Workflow,
  Users,
  Target,
  HeartHandshake,
  Headset,
  Ticket,
  AlertCircle,
  MessageSquareText,
  FileSpreadsheet,
  Cpu,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIconMap = {
  Handshake,
  Settings2,
  ShieldCheck,
  Workflow,
  Users,
  Target,
  HeartHandshake,
  Headset,
  Ticket,
  AlertCircle,
  MessageSquareText,
  FileSpreadsheet,
  Cpu,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? portfolioData.competencies
      : portfolioData.competencies.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative border-b border-slate-800/70 bg-[#080F1E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-cyan-400">Capabilities</p>
            <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core Competencies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Domain capabilities built across vendor operations, bilingual customer service, SLA management, and administrative workflows.
            </p>
          </motion.div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter competencies by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/70 p-1 self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Areas
            </button>
            {portfolioData.competencies.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skill Cards */}
        <div className="mt-12 space-y-12">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.4,
                delay: catIndex * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-5 flex flex-col gap-1 border-b border-slate-800/80 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => {
                  const Icon = skillIconMap[skill.iconName];
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/55 p-5 backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-500/45 hover:bg-slate-900/85"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-blue-400 transition-colors group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-display text-base font-medium text-slate-100 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
