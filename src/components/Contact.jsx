import React, { useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to the backend. For now, show a confirmation.
    setSent(true);
  };

  return (
    <section id="contact" className="bg-slate-950 text-slate-100 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-amber-300 font-medium">Get in touch</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold">Let’s make your week lighter</h2>
          <p className="mt-3 text-slate-400">Share what you need help with and I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
              <User className="w-4 h-4 text-amber-300" />
              <input
                className="bg-transparent w-full outline-none placeholder:text-slate-500"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>
            <label className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
              <Mail className="w-4 h-4 text-amber-300" />
              <input
                className="bg-transparent w-full outline-none placeholder:text-slate-500"
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <label className="mt-4 flex items-start gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
            <MessageSquare className="w-4 h-4 mt-2 text-amber-300" />
            <textarea
              className="bg-transparent w-full outline-none placeholder:text-slate-500 min-h-[120px]"
              name="message"
              placeholder="What do you need help with?"
              value={form.message}
              onChange={onChange}
              required
            />
          </label>

          <button type="submit" className="mt-5 w-full md:w-auto rounded-lg bg-amber-400 text-slate-900 font-medium px-5 py-3 hover:bg-amber-300 transition">
            Send message
          </button>

          {sent && (
            <p className="mt-4 text-emerald-400">Thanks! Your message has been noted. I’ll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
