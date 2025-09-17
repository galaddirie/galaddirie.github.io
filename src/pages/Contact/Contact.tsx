import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      name: 'Email',
      icon: <MdEmail />,
      href: 'mailto:hello@galad.ca',
      color: 'text-rose-600',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/galaddirie',
      color: 'text-white',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/galad-dirie/',
      color: 'text-[#0A66C2]',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your User ID
      emailjs.init({
        publicKey: 'vLPZXF95UrpDhddUr',
      });

      // Send the email using EmailJS
      const result = await emailjs.send(
        'service_ipgso3e', // EmailJS service ID
        'template_llefb5m', // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='text-white pt-36 pb-12 relative mb-64'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="uppercase mb-6 text-4xl md:text-6xl font-bold font-['lores-9-plus-wide']">
              LET'S WORK TOGETHER
            </h2>

            <p className="text-white/80 mb-8 font-['lores-12']">
              Interested in working together? We should queue up a chat. I'll
              buy the coffee.
            </p>

            <div className='space-y-3'>
              {socialLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className='flex items-center gap-3 text-white hover:text-rose-600 transition-colors'
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-sm bg-black/60 border border-white/20 ${link.color}`}
                  >
                    {link.icon}
                  </span>
                  <span className="font-['lores-9-plus-wide'] uppercase text-sm tracking-wide">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='bg-black/70 border border-white/20 rounded-sm p-6 md:p-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-sm p-3 text-sm font-['lores-12']">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-sm p-3 text-sm font-['lores-12']">
                    There was an error sending your message. Please try again or
                    email me directly.
                  </div>
                )}

                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className="block text-xs font-['lores-9-plus-wide'] uppercase tracking-wide text-white/90"
                  >
                    Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required
                    className='w-full px-3 py-2 bg-black/60 border border-white/30 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600/50 focus:border-rose-600/50 transition-colors'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className="block text-xs font-['lores-9-plus-wide'] uppercase tracking-wide text-white/90"
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your.email@example.com'
                    required
                    className='w-full px-3 py-2 bg-black/60 border border-white/30 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600/50 focus:border-rose-600/50 transition-colors'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='message'
                    className="block text-xs font-['lores-9-plus-wide'] uppercase tracking-wide text-white/90"
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project or inquiry...'
                    rows={4}
                    required
                    className='w-full px-3 py-2 bg-black/60 border border-white/30 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-600/50 focus:border-rose-600/50 transition-colors resize-none'
                  />
                </div>

                <button
                  className="w-full mt-6 px-6 py-3 bg-black border-2 border-rose-600 text-white font-['lores-9-plus-wide'] uppercase tracking-wide rounded-sm transition-colors duration-200 hover:bg-rose-600 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  type='submit'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  ) : (
                    <motion.span
                      className='inline-block'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </button>

                <p className="text-xs text-white/60 text-center mt-4 font-['lores-12']">
                  I'll respond to your message as soon as possible.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
