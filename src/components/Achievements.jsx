import { useState } from 'react';
import { Edit2, Trash2, X, Check } from 'lucide-react';

const initialAchievements = [
  {
    id: 1,
    emoji: "🏅",
    title: "Associate Data Analyst in SQL",
    issuer: "DataCamp",
    date: "Nov 2025 – Dec 2025",
    description: "Completed hands-on data analyst certification covering SQL querying, data manipulation, and analytics workflows."
  },
  {
    id: 2,
    emoji: "☁️",
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2025 – Jan 2026",
    description: "Gained foundational knowledge in machine learning concepts, AWS ML services, and model deployment basics."
  },
  {
    id: 3,
    emoji: "🎨",
    title: "UI/UX Design",
    issuer: "Coursera",
    date: "",
    description: "Learned user interface and user experience design principles, wireframing, and prototyping techniques."
  },
  {
    id: 4,
    emoji: "💻",
    title: "Data Science Internship",
    issuer: "Micro Infotech, Coimbatore",
    date: "Feb 2025",
    description: "Developed analytical Python scripts reducing manual analysis time by ~30%. Designed a feedback system improving customer satisfaction by 10–15%."
  }
];

export default function Achievements({ isEditMode }) {
  const [achievements, setAchievements] = useState(initialAchievements);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleDelete = (id) => {
    setAchievements(achievements.filter(a => a.id !== id));
  };

  const startEdit = (achievement) => {
    setEditingId(achievement.id);
    setEditFormData(achievement);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const saveEdit = () => {
    setAchievements(achievements.map(a => a.id === editingId ? editFormData : a));
    setEditingId(null);
    setEditFormData({});
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div key={item.id} className="relative group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
              {isEditMode && editingId !== item.id && (
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => startEdit(item)} className="p-2 bg-white dark:bg-gray-700 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 bg-white dark:bg-gray-700 text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              {editingId === item.id ? (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input className="w-16 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.emoji} onChange={e => setEditFormData({...editFormData, emoji: e.target.value})} placeholder="Emoji" />
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.title} onChange={e => setEditFormData({...editFormData, title: e.target.value})} placeholder="Title" />
                  </div>
                  <div className="flex gap-2">
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.issuer} onChange={e => setEditFormData({...editFormData, issuer: e.target.value})} placeholder="Issuer" />
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.date} onChange={e => setEditFormData({...editFormData, date: e.target.value})} placeholder="Date" />
                  </div>
                  <textarea className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none resize-none h-24" value={editFormData.description} onChange={e => setEditFormData({...editFormData, description: e.target.value})} placeholder="Description"></textarea>
                  <div className="flex gap-2 justify-end">
                    <button onClick={cancelEdit} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                    <button onClick={saveEdit} className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="text-4xl">{item.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                      {item.issuer} {item.date && <span className="text-gray-400 dark:text-gray-500">| {item.date}</span>}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
