import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsSubmitting(true);

    try {

      const response = await fetch("http://localhost:5000/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

        setIsSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    } finally {

      setIsSubmitting(false);

    }

  };

  const offices = [
    {
      country: 'U.S Office',
      address: '330 W Armory Dr, South Holland, IL 60473, USA',
      phones: ['+1 (732) 218-9902'],
      whatsapp: '+1 (732) 218-9902',
    },

  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-navy-dark to-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about rates, routes, or custom clearance? Contact our support desk. We are here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-navy-dark">Office Contacts</h2>
            <p className="text-gray-500 text-xs">Reach out directly to our regional representatives.</p>
          </div>

          <div className="space-y-6">
            {offices.map((office) => (
              <div key={office.country} className="bg-white p-6 rounded-2xl border border-gray-150/50 shadow-md space-y-4">
                <h3 className="font-bold text-navy-dark text-base border-b border-gray-100 pb-2">{office.country}</h3>
                <ul className="space-y-3 text-xs text-gray-600">
                  <li className="flex gap-2">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{office.address}</span>
                  </li>
                  <li className="flex gap-2">
                    <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      {office.phones.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>WhatsApp: {office.whatsapp}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Email Support */}
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-navy-dark text-sm">General Inquiries</h4>
              <a href="mailto:info@prplogistic.com" className="text-primary font-semibold text-xs hover:underline mt-1 block">
                info@prplogistic.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (7 columns) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-xl border border-white/30">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-navy-dark">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm mx-auto text-sm">
                  Your message has been successfully transmitted. Our customer success team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-navy-dark">Send a Message</h3>
                  <p className="text-gray-500 text-xs">Fill in your information and we will reply to you.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Wagon transit rates, general request, etc."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message details here..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-5 rounded-lg text-white font-bold text-xs tracking-wide shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
