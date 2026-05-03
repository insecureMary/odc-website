'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const WHATSAPP_NUMBER = '2347039181821';
const WHATSAPP_MSG = encodeURIComponent("Hello ODC Ventures, I'd like to make an enquiry.");

const inquiryTypes = [
  'Tiles',
  'Bathroom Finishings',
  'Kitchen Finishings',
  'Electrical Services',
  'Other / General',
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'Plaza C5, STI Building Material Market, Second Rainbow Bus-stop, Amuo-odofin Lagos.',
  },
  {
    icon: Phone,
    label: 'Phone Numbers',
    value: '+234 703 918 1821\n+234 803 537 6467',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'info@odcventures.ng',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Fri: 8:00am – 6:00pm\nSaturday: 9:00am – 4:00pm\nSunday: Closed',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact ODC Ventures</h1>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Need a price? Our team typically responds within a few hours — fastest via WhatsApp.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form — 2 columns wide */}
            <div className="lg:col-span-2">
              <AnimateIn direction="left">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                        <CheckCircle size={32} className="text-green-500" />
                      </div>
                      <h2 className="text-2xl font-black text-navy-900 mb-2">Message Sent!</h2>
                      <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                        Thank you for reaching out. A member of our team will be in touch with you shortly. For faster response, feel free to WhatsApp us directly.
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                      >
                        <MessageCircle size={17} />
                        Continue on WhatsApp
                      </a>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black text-navy-900 mb-1">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm mb-7">All fields marked * are required.</p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Full Name <span className="text-gold-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              placeholder="e.g. Adeola Martins"
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Phone Number <span className="text-gold-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              required
                              placeholder="e.g. 0801 234 5678"
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="e.g. adeola@example.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">
                            Inquiry Type <span className="text-gold-500">*</span>
                          </label>
                          <select
                            name="inquiry"
                            value={form.inquiry}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition bg-white"
                          >
                            <option value="" disabled>Select an inquiry type</option>
                            {inquiryTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">
                            Message <span className="text-gold-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your project — type of work, location, timeline, quantities needed, etc."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-gold-500 hover:bg-gold-400 disabled:bg-gold-300 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* WhatsApp CTA */}
              <AnimateIn direction="right">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1ebe5a] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-0.5">Chat on WhatsApp</div>
                    <div className="text-white/85 text-xs leading-snug">Fastest response — most of our enquiries are handled here. Available during business hours.</div>
                  </div>
                </a>
              </AnimateIn>

              {/* Contact details */}
              <AnimateIn direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                  <h3 className="font-bold text-navy-900 text-base">Contact Information</h3>
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={16} className="text-gold-500" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
                        <div className="text-sm text-navy-900 font-medium whitespace-pre-line">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              {/* Map placeholder */}
              <AnimateIn direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-gray-100 h-48 flex items-center justify-center relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sng!4v1777803715845!5m2!1sen!2sng!6m8!1m7!1sVjljBPI2UTAJaY_Q5JAKSQ!2m2!1d6.470132187849194!2d3.32784633849697!3f94.83823064866048!4f-0.42836239338083715!5f0.7820865974627469"
                      width="100%"
                      height="192"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ODC Ventures location — Plaza C5, STI Building Material Market, Second Rainbow Bus-stop, Amuo-odofin Lagos."
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <MapPin size={12} className="text-gold-500 shrink-0" />
                      Plaza C5, STI Building Material Market, Second Rainbow Bus-stop, Amuo-odofin Lagos.a
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
