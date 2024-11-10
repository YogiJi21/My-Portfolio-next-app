"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (value: string, name: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedSubject, setIsFocusedSubject] = useState(false);
  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] rounded-2xl p-8 md:p-10 shadow-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Input
                  type="text"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onValueChange={(value) => handleChange(value, 'name')}
                  required
                  classNames={{
                    input: "bg-transparent text-white",
                    inputWrapper: "bg-[#1a1a1a] border-gray-800 hover:border-gray-700"
                  }}
                  style={{ color: isFocusedName ? 'rgba(0, 0, 0, .7)' : 'rgba(255, 255, 255, .5)' }}
                  onFocus={() => setIsFocusedName(true)} // Handle focus
                  onBlur={() => setIsFocusedName(false)} // Handle blur
                />

                <Input
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onValueChange={(value) => handleChange(value, 'email')}
                  required
                  placeholder="yogi@example.com"
                  classNames={{
                    input: "bg-transparent text-white",
                    inputWrapper: "bg-[#1a1a1a] border-gray-800 hover:border-gray-700"
                  }}
                  style={{ color: isFocusedEmail ? 'rgba(0, 0, 0, .7)' : 'rgba(255, 255, 255, .5)' }}
                  onFocus={() => setIsFocusedEmail(true)} // Handle focus
                  onBlur={() => setIsFocusedEmail(false)} // Handle blur
                />
              </div>

              <Input
                type="text"
                label="Subject"
                name="subject"
                value={formData.subject}
                onValueChange={(value) => handleChange(value, 'subject')}
                required
                // placeholder="Project Discussion"
                classNames={{
                  input: "bg-transparent text-white",
                  inputWrapper: "bg-[#1a1a1a] border-gray-800 hover:border-gray-700"
                }}
                style={{ color: isFocusedSubject ? 'rgba(0, 0, 0, .7)' : 'rgba(255, 255, 255, .5)' }}
                onFocus={() => setIsFocusedSubject(true)} // Handle focus
                onBlur={() => setIsFocusedSubject(false)} // Handle blur
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onValueChange={(value) => handleChange(value, 'message')}
                required
                // placeholder="Tell me about your project..."
                minRows={6}
                classNames={{
                  input: "bg-transparent text-white",
                  inputWrapper: "bg-[#1a1a1a] border-gray-800 hover:border-gray-700"
                }}
                style={{ color: isFocusedMessage ? 'rgba(0, 0, 0, .7)' : 'rgba(255, 255, 255, .5)' }}
                onFocus={() => setIsFocusedMessage(true)} // Handle focus
                onBlur={() => setIsFocusedMessage(false)} // Handle blur
              />

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 
                           hover:to-violet-700 rounded-lg text-white font-medium tracking-wide 
                           min-w-[160px] transition duration-200 disabled:opacity-70 
                           disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Email', value: 'yogi.hingorani21@gmail.com' },
              { title: 'Location', value: 'Bengaluru, India' },
              { title: 'Follow', value: 'https://www.instagram.com/yogesh_hingorani/ ' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#111111] rounded-xl border border-gray-800
                         hover:border-gray-700 transition-colors duration-200"
              >
                <h3 className="text-sm uppercase tracking-wider font-medium text-gray-400 mb-2">
                  {item.title}
                </h3>
                {item.title === 'Follow' ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white inline-flex items-center"
                  >
                    {/* SVG Icon for Instagram */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="url(#instagram-gradient)"
                      className="w-6 h-6"
                    >
                      <defs>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#feda75', stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: '#d62976', stopOpacity: 1 }} />
                          <stop offset="75%" style={{ stopColor: '#962fbf', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#4f5bd5', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-6.5 2a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>

                    Instagram
                  </a>
                ) : (
                  <p className="text-white">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}