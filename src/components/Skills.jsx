import React from 'react';
import { CheckCircle2, Clock, Calendar, Mail, FileSpreadsheet, Workflow, MessageSquare, Zap, Database } from 'lucide-react';

const skills = [
  {
    title: 'Operations & Admin',
    items: ['Inbox management', 'Calendar scheduling', 'Travel planning', 'Documentation'],
    icon: Clock,
  },
  {
    title: 'Project Coordination',
    items: ['Task tracking', 'SOP creation', 'Stakeholder updates', 'Resource planning'],
    icon: Workflow,
  },
  {
    title: 'Communication',
    items: ['Client support', 'Community moderation', 'Meeting notes', 'CRM updates'],
    icon: MessageSquare,
  },
  {
    title: 'Data & Reporting',
    items: ['Spreadsheets', 'Dashboards', 'Research', 'Process metrics'],
    icon: FileSpreadsheet,
  },
];

const toolstack = [
  { name: 'Google Workspace', icon: Mail },
  { name: 'Notion', icon: Database },
  { name: 'Asana', icon: Workflow },
  { name: 'Trello', icon: Workflow },
  { name: 'Slack', icon: MessageSquare },
  { name: 'Airtable', icon: Database },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-slate-950 text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-300 font-medium">Core Skills</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">What I bring to your team</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Systems thinking meets clear communication. I build repeatable processes that help
            teams move faster with less stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="w-5 h-5 text-amber-300" />
                <h3 className="text-xl font-medium">{group.title}</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h4 className="text-slate-200 font-medium mb-4">Tools I work with</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {toolstack.map((tool) => (
              <div key={tool.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <tool.icon className="w-4 h-4 text-amber-300" />
                <span className="text-sm text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
