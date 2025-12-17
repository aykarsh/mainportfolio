import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Email sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to send email.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send email. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      ref={ref}
      className="py-20 border-t-2 border-gray-300"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-12 font-serif leading-relaxed">
          I'd love to hear from you. Send me an email and let's connect.
        </p>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name (optional)"
              className="w-full px-8 py-4 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors font-serif text-lg bg-white shadow-sm mb-4"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Your Email Address"
              className="w-full px-8 py-4 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors font-serif text-lg bg-white shadow-sm mb-4"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Type your message here..."
              rows="8"
              className="w-full px-8 py-6 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors font-serif text-lg resize-none bg-white shadow-sm"
            />
          </motion.div>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-12 py-4 bg-gray-900 text-white font-serif text-lg rounded-lg hover:bg-gray-800 transition-colors shadow-md ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={!isSubmitting ? { scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Email'}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
