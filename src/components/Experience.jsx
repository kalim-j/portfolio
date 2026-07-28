import React, { useState } from 'react';
import { Briefcase, Edit2, Trash2, X, Check } from 'lucide-react';

const initialExperience = [
  {
    id: 1,
    title: 'Intern – Data Analytics using Python',
    company: 'Micro Infotech, Coimbatore',
    date: 'Feb 2025',
    description: 'Developed and tested Python-based analytical scripts, reducing manual analysis time by ~30%. Built a Python-powered feedback system that boosted customer satisfaction by 10–15% and cut repeated complaints by ~20%.',
    tags: ['Python', 'Data Analytics', 'Feedback Systems'],
    icon: <Briefcase className="w-5 h-5 text-white" />
  }
];

export default function Experience({ isEditMode }) {
  const [items, setItems] = useState(initialExperience);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleDelete = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditFormData({ ...item, tagsString: item.tags.join(', ') });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const saveEdit = () => {
    const updatedItem = {
      ...editFormData,
      tags: editFormData.tagsString.split(',').map(t => t.trim()).filter(t => t)
    };
    delete updatedItem.tagsString;
    setItems(items.map(i => i.id === editingId ? updatedItem : i));
    setEditingId(null);
    setEditFormData({});
  };

  return (
    <section id="experience" className="py-16 md:py-[clamp(3rem,6vh,6rem)] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-indigo-400 text-[0.875rem] tracking-[0.15em] uppercase font-[800] mb-2">▸ CAREER</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[800] tracking-[-0.02em] bg-gradient-to-br from-[#ffffff] via-[#a5b4fc] to-[#818cf8] text-transparent bg-clip-text mb-4">Professional Experience</h2>
        <div className="gradient-divider"></div>
      </div>

      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-6 space-y-12">
        {items.map((item) => (
          <div key={item.id} className="relative pl-10 group">
            <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-4 border-gray-50 dark:border-gray-900 z-10">
              <Briefcase className="w-4 h-4 text-white" />
            </div>

            <div className="glass-card p-[clamp(1rem,2vw,1.5rem)]  relative">
              {isEditMode && editingId !== item.id && (
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <button onClick={() => startEdit(item)} className="p-2 bg-gray-50 dark:bg-gray-700 text-gray-600 hover:text-indigo-600 dark:text-gray-300 rounded-lg shadow-sm">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 bg-gray-50 dark:bg-gray-700 text-gray-600 hover:text-red-600 dark:text-gray-300 rounded-lg shadow-sm">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              {editingId === item.id ? (
                <div className="space-y-4">
                  <input className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.title} onChange={e => setEditFormData({...editFormData, title: e.target.value})} placeholder="Title" />
                  <div className="flex gap-2">
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.company} onChange={e => setEditFormData({...editFormData, company: e.target.value})} placeholder="Company" />
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.date} onChange={e => setEditFormData({...editFormData, date: e.target.value})} placeholder="Date" />
                  </div>
                  <textarea className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none resize-none h-24" value={editFormData.description} onChange={e => setEditFormData({...editFormData, description: e.target.value})} placeholder="Description"></textarea>
                  <input className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.tagsString} onChange={e => setEditFormData({...editFormData, tagsString: e.target.value})} placeholder="Tags (comma separated)" />
                  <div className="flex gap-2 justify-end">
                    <button onClick={cancelEdit} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                      <X className="w-4 h-4" />
                    </button>
                    <button onClick={saveEdit} className="p-2 bg-indigo-600 text-white rounded-lg">
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-[800] tracking-[-0.02em] text-gray-900 dark:text-white">{item.title}</h3>
                    <span className="text-indigo-600 dark:text-indigo-400 font-[800] tracking-[-0.02em] text-sm whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm  leading-relaxed text-[clamp(0.875rem,1.1vw,1rem)] mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-md text-xs font-[800] tracking-[-0.02em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
