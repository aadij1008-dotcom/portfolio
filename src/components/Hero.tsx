import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Globe2,
  Info,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { OperationsNetworkBg } from './OperationsNetworkBg';

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialPlaceholder = (platform: string) => {
    setSocialNotice(
      `${platform} profile link is a placeholder and has not been configured yet.`
    );
    setTimeout(() => {
      setSocialNotice((current) =>
        current?.includes(platform) ? null : current
      );
    }, 4500);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70 bg-[#060B16] pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      {/* Ambient Radial Gradients & Global Operations Network Canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/5 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <OperationsNetworkBg />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Primary Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Quiet Unboxed Location & Domain Kicker */}
            <p className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-cyan-300/90">
              <span>{portfolioData.profile.location}</span>
              <span aria-hidden="true" className="text-slate-600">
                ·
              </span>
              <span className="text-slate-300">
                International Operations &amp; Support
              </span>
            </p>

            {/* Main Heading */}
            <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {portfolioData.hero.heading}
            </h1>

            {/* Professional Headline */}
            <p className="mt-4 font-display text-balance text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-slate-100 bg-clip-text text-transparent sm:text-2xl">
              {portfolioData.hero.headline}
            </p>

            {/* Supporting Text */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {portfolioData.hero.supportingText}
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/50 transition-all duration-150 hover:from-blue-500 hover:to-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 whitespace-nowrap shrink-0"
              >
                <span>Explore My Experience</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/90 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition-colors duration-150 hover:border-cyan-400/60 hover:bg-slate-800/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap shrink-0"
              >
                <Mail className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Placeholders */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <span className="text-xs font-medium text-slate-400">
                Connect:
              </span>
              <button
                type="button"
                onClick={() => handleSocialPlaceholder('LinkedIn')}
                aria-label="LinkedIn profile placeholder"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
              >
                <Linkedin className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>LinkedIn (Placeholder)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialPlaceholder('GitHub')}
                aria-label="GitHub profile placeholder"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer whitespace-nowrap"
              >
                <Github className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                <span>GitHub (Placeholder)</span>
              </button>
            </div>

            {socialNotice && (
              <div
                role="status"
                aria-live="polite"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs text-slate-300"
              >
                <Info className="h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                <span>{socialNotice}</span>
              </div>
            )}
          </motion.div>

          {/* Right Column: Global Operations Visual Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 backdrop-blur-md">
              {!imageError ? (
                <img
                  src={portfolioData.hero.visualPath}
                  alt="Abstract visualization of interconnected global operations and logistics routes"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#0A162E] to-slate-950 p-8 text-center">
                  <Globe2 className="mb-3 h-12 w-12 text-cyan-400/80" aria-hidden="true" />
                  <p className="font-display text-base font-medium text-slate-200">
                    Global Operations &amp; Vendor Network
                  </p>
                </div>
              )}

              {/* Subtle Measured Gradient Scrim for Caption Contrast */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B16]/90 via-[#060B16]/25 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-cyan-300">
                  Cross-Border Service Delivery
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Vendor Operations · SLA Governance · Bilingual Coordination
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Core Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {portfolioData.hero.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-800/80 bg-slate-900/55 p-5 backdrop-blur-md transition-colors duration-150 hover:border-cyan-500/40"
            >
              <p className="font-display text-base font-semibold text-white">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {item.sublabel}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
