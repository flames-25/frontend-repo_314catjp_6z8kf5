import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Creator Launch Support',
    description:
      'Coordinated a 4-week content and email schedule, prepared assets, and automated reminders to ensure an on-time, low-stress launch.',
    results: ['42% faster prep time', 'Zero missed deadlines', 'Centralized assets in Notion'],
    link: '#',
  },
  {
    title: 'Ops System for a Micro-Agency',
    description:
      'Built an operating system with Asana + Notion: sprint board, weekly review ritual, and clients dashboard for visibility.',
    results: ['Reduced context switching', 'Weekly status clarity', 'Templates for repeat work'],
    link: '#',
  },
  {
    title: 'Inbox + Calendar Revamp',
    description:
      "Set up filters, canned responses, and scheduling rules. Freed up founder's mornings for deep work.",
    results: ['Inbox to zero daily', '3 hours saved per week', 'Fewer scheduling back-and-forths'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="work" className="bg-slate-950 text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-300 font-medium">Selected Work</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Recent wins for clients</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Practical outcomes from real engagements. I focus on creating systems that last.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-amber-300/40 transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <a href={p.link} className="text-slate-300 hover:text-amber-300" aria-label="View project">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <ul className="mt-4 space-y-2">
                {p.results.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
