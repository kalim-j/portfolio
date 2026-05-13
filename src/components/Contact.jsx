import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 glass dark:glass-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="lg:col-span-2 bg-indigo-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-indigo-100 mb-10 leading-relaxed">
                Fill up the form and I will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-indigo-200" />
                  <a href="mailto:kalim.offic@gmail.com" className="hover:text-indigo-200 transition-colors">
                    kalim.offic@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-indigo-200" />
                  <a href="tel:+919363554551" className="hover:text-indigo-200 transition-colors">
                    +91 9363554551
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-indigo-200" />
                  <a href="https://wa.me/919363554551" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition-colors">
                    WhatsApp: +91 9363554551
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-indigo-200" />
                  <span>Tamil Nadu, Dharmapuri</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://wa.me/919363554551" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition-colors" title="WhatsApp">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kalim-j" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/kalim-j" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-full transition-colors" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="How can I help you?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
