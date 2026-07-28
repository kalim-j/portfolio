export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["JAVA", "MySQL", "Python", "HTML", "CSS", "Excel"],
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"
    },
    {
      title: "Soft Skills",
      skills: ["Adaptability", "Time Management", "Teamwork"],
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800"
    },
    {
      title: "Languages",
      skills: ["Tamil", "English", "Urdu"],
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-[clamp(3rem,6vh,6rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-indigo-400 text-[0.875rem] tracking-[0.15em] uppercase font-[800] mb-2">▸ WHAT I DO</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[800] tracking-[-0.02em] bg-gradient-to-br from-[#ffffff] via-[#a5b4fc] to-[#818cf8] text-transparent bg-clip-text mb-4">Skills & Expertise</h2>
        <div className="gradient-divider"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card p-[clamp(1rem,2vw,1.5rem)]  group">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${category.color} transition-transform hover:scale-105 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
