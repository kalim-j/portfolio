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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
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
