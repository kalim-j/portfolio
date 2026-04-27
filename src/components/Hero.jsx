import { useState } from 'react';
import { ArrowRight, Download, Edit3, Check } from 'lucide-react';

export default function Hero({ isEditMode }) {
  const defaultBio = "Passionate Computer Science student with strong interest in software development, data structures, and system design. Skilled in building real-world applications and solving problems using modern technologies. Seeking opportunities to apply technical knowledge and contribute to impactful projects.";
  
  const [bio, setBio] = useState(defaultBio);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState(bio);

  const handleSaveBio = () => {
    setBio(tempBio);
    setIsEditingBio(false);
  };

  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-1 mb-8 shadow-2xl animate-fade-in-up">
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
        {isEditingBio ? (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-900/30">
            <textarea
              value={tempBio}
              onChange={(e) => setTempBio(e.target.value)}
              className="w-full bg-transparent text-gray-600 dark:text-gray-300 outline-none resize-none min-h-[120px]"
              autoFocus
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSaveBio}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors"
              >
                <Check className="w-4 h-4" /> Save Bio
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
                  setIsEditingBio(true);
                }}
                className="absolute -top-4 -right-4 p-2 bg-white dark:bg-gray-800 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full shadow-md border border-gray-100 dark:border-gray-700 transition-all opacity-0 group-hover:opacity-100"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up animation-delay-400">
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#projects"
          className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium transition-all shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-8 py-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </div>
    </section>
  );
}
