import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { triggerResumeDownload } from '../utils/resumeGenerator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#050912] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {portfolioData.profile.name}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {portfolioData.profile.title} · {portfolioData.profile.location}
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-slate-400 transition-colors hover:text-cyan-300 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={triggerResumeDownload}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300 whitespace-nowrap cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download Resume</span>
          </button>
          <span aria-hidden="true" className="text-slate-700">
            ·
          </span>
          <p className="text-xs text-slate-500 font-mono-tabular">
            © {currentYear} {portfolioData.profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
