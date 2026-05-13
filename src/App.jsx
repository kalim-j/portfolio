import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Eye, EyeOff, Lock, X, Unlock } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      setIsAuthModalOpen(true);
      setLoginError('');
      setUsername('');
      setPassword('');
      setShowPassword(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (Date.now() < lockoutTime) {
      setLoginError('🔒 Too many attempts. Try again in 30 seconds.');
      return;
    }
    if (username === 'kalim-j' && password === 'Kalim@786777') {
      setIsEditMode(true);
      setIsAuthModalOpen(false);
      setWrongAttempts(0);
      setLoginError('');
    } else {
      const newAttempts = wrongAttempts + 1;
      setWrongAttempts(newAttempts);
      if (newAttempts >= 3) {
        setLockoutTime(Date.now() + 30000);
        setLoginError('🔒 Too many attempts. Try again in 30 seconds.');
      } else {
        setLoginError('❌ Incorrect credentials. Access denied.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
      
      <main>
        <Hero isEditMode={isEditMode} />
        <Skills />
        <Achievements isEditMode={isEditMode} />
        <Experience isEditMode={isEditMode} />
        <Education />
        <Projects isEditMode={isEditMode} />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>&copy; 2026 KALIM J. All rights reserved.</p>
      </footer>

      <button
        onClick={toggleEditMode}
        className={`fixed bottom-8 right-8 px-5 py-4 rounded-full shadow-2xl transition-all z-50 flex items-center gap-2 font-medium ${
          isEditMode 
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-red-500/25' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/25'
        }`}
        title={isEditMode ? "Exit Edit Mode" : "Toggle Edit Mode"}
      >
        {isEditMode ? (
          <>🔓 Exit Edit Mode</>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 15 3 3"/></svg>
            Edit Mode
          </>
        )}
      </button>

      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all duration-500">
          <div className="glass dark:glass-dark rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/30 animate-fade-in-up">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-500" /> 🔐 Owner Access
              </h3>
              <button onClick={() => setIsAuthModalOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="p-6 space-y-5">
              {loginError && (
                <div className={`p-3 rounded-lg text-sm font-medium ${loginError.includes('🔒') ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {loginError}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all pr-12" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsAuthModalOpen(false)} className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/25 flex justify-center items-center gap-2">
                  <Unlock className="w-4 h-4" /> Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
