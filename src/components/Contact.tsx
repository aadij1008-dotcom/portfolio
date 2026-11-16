import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Linkedin,
  Github,
  Send,
  Info,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'draft' | null>(null);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formNotice, setFormNotice] = useState<string | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2500);
    } catch {
      // Clipboard API unavailable in restricted context
    }
  };

  const handleSocialPlaceholder = (platform: string) => {
    setSocialNotice(
      `${platform} profile link is currently a placeholder and not yet linked to an external URL.`
    );
    setTimeout(() => {
      setSocialNotice((curr) => (curr?.includes(platform) ? null : curr));
    }, 4500);
  };

  const buildFormattedBody = () => {
    return [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      '',
      formState.message,
    ].join('\n');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    );
    const body = encodeURIComponent(buildFormattedBody());
    const mailtoUrl = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormNotice(
      'Prepared your inquiry as a draft in your default email client. Note: direct server-side form submission is not configured.'
    );
  };

  const handleCopyDraft = () => {
    const fullText = `To: ${portfolioData.contact.email}\nSubject: ${
      formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`
    }\n\n${buildFormattedBody()}`;
    handleCopy(fullText, 'draft');
  };

  return (
    <section
      id="contact"
      className="relative bg-[#080F1E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-cyan-400">Get in Touch</p>
          <h2 className="mt-2 font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {portfolioData.contact.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {portfolioData.contact.supportingText}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Direct Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            {/* Email Card */}
            <div className="rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-cyan-400">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <p className="mt-1 break-all font-medium text-white">
                      {portfolioData.contact.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white transition-all hover:from-blue-500 hover:to-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.contact.email, 'email')}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-slate-600 hover:text-white cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-cyan-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Phone</p>
                  <p className="mt-1 font-mono-tabular font-medium text-white">
                    {portfolioData.contact.phone}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-blue-500/50 bg-blue-950/40 px-4 py-2 text-xs font-semibold text-blue-200 transition-colors hover:border-cyan-400/60 hover:bg-blue-900/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                  <span>Call Phone</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.contact.phone, 'phone')}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-slate-600 hover:text-white cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Social Placeholders */}
            <div className="rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/70 text-cyan-400">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Location</p>
                  <p className="mt-1 font-medium text-white">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-slate-800/80" />

              <p className="text-xs font-medium text-slate-400">
                Professional Profiles (Placeholders)
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialPlaceholder('LinkedIn')}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white cursor-pointer"
                >
                  <Linkedin className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span>LinkedIn Placeholder</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialPlaceholder('GitHub')}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white cursor-pointer"
                >
                  <Github className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span>GitHub Placeholder</span>
                </button>
              </div>

              {socialNotice && (
                <p
                  role="status"
                  className="mt-3 flex items-start gap-2 text-xs text-slate-300"
                >
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>{socialNotice}</span>
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Form with Transparent Backend Notice */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-slate-800/85 bg-slate-900/55 p-6 backdrop-blur-md sm:p-8 lg:col-span-7"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl font-semibold text-white">
                Compose an Inquiry
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Fill out your message details below to prepare a pre-addressed email draft or copy it directly.
              </p>
            </div>

            {/* Honest disclosure regarding backend email integration */}
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4 text-xs leading-relaxed text-slate-300">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
              <span>
                Note: Server-side form email delivery is not configured on this site. Submitting this form opens a pre-filled draft in your email client, or you can copy your message directly.
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="mt-2 block w-full rounded-lg border border-slate-700/80 bg-[#060B16]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@company.com"
                    className="mt-2 block w-full rounded-lg border border-slate-700/80 bg-[#060B16]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-slate-200"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Operations / Vendor Management Opportunity"
                  className="mt-2 block w-full rounded-lg border border-slate-700/80 bg-[#060B16]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Share details regarding the role, team, or collaboration..."
                  className="mt-2 block w-full resize-y rounded-lg border border-slate-700/80 bg-[#060B16]/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Open Email Draft</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                >
                  {copiedField === 'draft' ? (
                    <>
                      <Check className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                      <span>Message Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

              {formNotice && (
                <p
                  role="status"
                  className="rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-4 py-3 text-xs leading-relaxed text-cyan-200"
                >
                  {formNotice}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
