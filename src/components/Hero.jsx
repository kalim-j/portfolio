import { useState } from 'react';
import { ArrowRight, Download, Edit3, Check } from 'lucide-react';

export default function Hero({ isEditMode }) {
  const defaultBio = "Passionate Computer Science student with strong interest in software development, data structures, and system design. Skilled in building real-world applications and solving problems using modern technologies. Seeking opportunities to apply technical knowledge and contribute to impactful projects.";
  
  const [bio, setBio] = useState(defaultBio);
  const [resumeUrl, setResumeUrl] = useState('/resume.pdf');
  const [isEditingHero, setIsEditingHero] = useState(false);
  const [tempBio, setTempBio] = useState(bio);
  const [tempResumeUrl, setTempResumeUrl] = useState(resumeUrl);

  const handleSaveHero = () => {
    setBio(tempBio);
    setResumeUrl(tempResumeUrl);
    setIsEditingHero(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-1 mb-8 shadow-2xl animate-fade-in-up print:hidden">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
          <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            KJ
          </span>
        </div>
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 animate-fade-in-up animation-delay-200">
        KALIM J
      </h1>
      
      <div className="h-8 mb-8 animate-fade-in-up animation-delay-200">
        <div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-indigo-500 animate-typing animate-blink">
          <h2 className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-medium">
            Analytics-Driven Software Developer
          </h2>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-10 relative animate-fade-in-up animation-delay-400 group">
        {isEditingHero ? (
          <div className="glass-card p-6 rounded-3xl shadow-2xl space-y-4 text-left">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Bio Description</label>
              <textarea
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                className="w-full bg-white/50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 outline-none resize-none min-h-[120px]"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Resume URL (Google Drive/Dropbox link)</label>
              <input
                type="text"
                value={tempResumeUrl}
                onChange={(e) => setTempResumeUrl(e.target.value)}
                className="w-full bg-white/50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 outline-none"
                placeholder="https://drive.google.com/..."
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSaveHero}
                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25"
              >
                <Check className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {bio}
            </p>
            {isEditMode && (
              <button
                onClick={() => {
                  setTempBio(bio);
                  setTempResumeUrl(resumeUrl);
                  setIsEditingHero(true);
                }}
                className="absolute -top-4 -right-4 p-2 bg-white dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full shadow-md border border-gray-100 dark:border-gray-700 transition-all opacity-0 group-hover:opacity-100"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center animate-fade-in-up animation-delay-400 print:hidden">
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#projects"
          className="px-8 py-3 glass dark:glass-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full font-bold transition-all shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          View Projects
        </a>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 justify-center"
          >
            <Download className="w-4 h-4" /> Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
