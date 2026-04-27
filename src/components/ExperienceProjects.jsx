import { useState } from 'react';
import { Briefcase, FolderGit2, Edit2, Trash2, X, Check, ExternalLink } from 'lucide-react';

const initialItems = [
  {
    id: 1,
    type: 'experience',
    title: 'Intern in Data Science (Python)',
    company: 'Micro Infotech, Coimbatore',
    date: 'Feb 2025',
    description: 'Developed and tested analytical scripts in Python, reducing manual analysis time by ~30%. Designed a feedback system that improved customer satisfaction by 10–15% and reduced repeated complaints by ~20%.',
    tags: ['Python', 'Data Science', 'Analytics'],
    icon: <Briefcase className="w-5 h-5 text-white" />
  },
  {
    id: 2,
    type: 'project',
    title: 'Online Car Buying & Inventory System',
    company: 'Full-Stack Web App',
    date: 'Dec 2025 – Mar 2026',
    description: 'Built a full-stack vehicle marketplace with secure authentication, role-based access, and admin dashboards. Integrated Node.js and PostgreSQL for scalable data handling. Developed a responsive UI with advanced search and filtering.',
    tags: ['Node.js', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/kalim-j',
    icon: <FolderGit2 className="w-5 h-5 text-white" />
  },
  {
    id: 3,
    type: 'project',
    title: 'Data Analyst Projects (Excel & Power BI)',
    company: 'Data Analytics',
    date: 'Nov 2025',
    description: 'Cleaned and organized sales data using advanced Excel techniques including pivot tables and What-If analysis. Automated reporting with macros and VBA. Designed an interactive Power BI dashboard using DAX to visualize Amazon Prime movie ratings and insights.',
    tags: ['Excel', 'Power BI', 'DAX', 'VBA', 'Data Visualization'],
    icon: <FolderGit2 className="w-5 h-5 text-white" />
  }
];

export default function ExperienceProjects({ isEditMode }) {
  const [items, setItems] = useState(initialItems);
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience & Projects</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-0 md:pl-0 md:space-y-12 space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative group md:w-1/2 md:ml-auto md:-left-[2px]" style={{ marginLeft: index % 2 === 0 ? '0' : 'auto', marginRight: index % 2 === 0 ? 'auto' : '0', paddingLeft: index % 2 === 0 ? '0' : '2rem', paddingRight: index % 2 === 0 ? '2rem' : '0' }}>
            <div className="md:hidden absolute -left-[21px] top-4 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-4 border-gray-50 dark:border-gray-900 z-10">
              {item.type === 'experience' ? <Briefcase className="w-4 h-4 text-white" /> : <FolderGit2 className="w-4 h-4 text-white" />}
            </div>

            <div className={`hidden md:flex absolute top-4 w-10 h-10 rounded-full bg-indigo-600 items-center justify-center shadow-lg border-4 border-gray-50 dark:border-gray-900 z-10 ${index % 2 === 0 ? '-right-[21px]' : '-left-[21px]'}`}>
              {item.type === 'experience' ? <Briefcase className="w-4 h-4 text-white" /> : <FolderGit2 className="w-4 h-4 text-white" />}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 ml-8 md:ml-0 relative transition-transform hover:-translate-y-1 hover:shadow-md">
              {isEditMode && editingId !== item.id && (
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.company} onChange={e => setEditFormData({...editFormData, company: e.target.value})} placeholder="Company / Type" />
                    <input className="flex-1 p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.date} onChange={e => setEditFormData({...editFormData, date: e.target.value})} placeholder="Date" />
                  </div>
                  <textarea className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none resize-none h-24" value={editFormData.description} onChange={e => setEditFormData({...editFormData, description: e.target.value})} placeholder="Description"></textarea>
                  <input className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.tagsString} onChange={e => setEditFormData({...editFormData, tagsString: e.target.value})} placeholder="Tags (comma separated)" />
                  {item.type === 'project' && (
                    <input className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.link || ''} onChange={e => setEditFormData({...editFormData, link: e.target.value})} placeholder="Project Link" />
                  )}
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
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.type === 'experience' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                    {item.type === 'experience' ? 'Experience' : 'Project'}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                    <span>{item.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{item.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" /> View Project
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
