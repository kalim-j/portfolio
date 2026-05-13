import React from 'react';
import { GraduationCap, ScrollText } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E) – Computer Science & Engineering",
    institution: "Rathinam Technical Campus, Coimbatore",
    score: "CGPA 6.98",
    period: "2023 – Present",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    type: 'college'
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Kendriya Vidyalaya, Dharmapuri",
    score: "66%",
    period: "2022 – 2023",
    icon: <ScrollText className="w-5 h-5 text-white" />,
    type: 'school'
  },
  {
    id: 3,
    degree: "Senior Secondary Certificate (Class X)",
    institution: "Kendriya Vidyalaya, Dharmapuri",
    score: "72%",
    period: "2020 – 2021",
    icon: <ScrollText className="w-5 h-5 text-white" />,
    type: 'school'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-6 space-y-12">
        {educationData.map((item) => (
          <div key={item.id} className="relative pl-10 group">
            <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-4 border-gray-50 dark:border-gray-900 z-10 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            
            <div className="glass-card rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {item.degree}
                </h3>
                <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-xs font-bold whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.institution}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  Score: {item.score}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
