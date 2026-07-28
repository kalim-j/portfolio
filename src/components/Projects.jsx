import React, { useState } from 'react';
import { ExternalLink, Github, Edit2, Trash2, Check, X } from 'lucide-react';

const initialProjects = [
  {
    id: 1,
    title: 'Online Car Buying & Inventory System',
    subtitle: 'Online Vehicle Marketplace',
    date: 'Dec 2025 – Mar 2026',
    description: 'Built a full-stack vehicle marketplace with secure authentication, role-based access, and admin dashboards. Integrated Node.js and PostgreSQL for scalable data handling. Developed a responsive UI with advanced search and filtering.',
    tags: ['Node.js', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jsk-car-body-shop.vercel.app/',
    githubUrl: 'https://github.com/kalim-j',
    imgUrl: 'https://image.thum.io/get/width/1280/crop/720/https://jsk-car-body-shop.vercel.app/'
  },
  {
    id: 2,
    title: 'CollegeMatch-AI',
    subtitle: 'AI-Powered College Recommendation Platform',
    date: '2025',
    description: 'Built an AI-powered college admission web app using Next.js, Groq API, Firebase, and Vercel with smart college matching. Integrated Groq LLM to provide recommendations for 500+ Indian colleges based on marks, quota, stream, and location.',
    tags: ['Next.js', 'Groq API', 'Firebase', 'Vercel', 'AI'],
    liveUrl: 'https://collegematch-ai.vercel.app/',
    githubUrl: 'https://github.com/kalim-j',
    imgUrl: 'https://image.thum.io/get/width/1280/crop/720/https://collegematch-ai.vercel.app/'
  },
  {
    id: 3,
    title: 'Data Analyst Projects',
    subtitle: 'Excel & Power BI',
    date: 'Nov 2025',
    description: 'Cleaned and organized sales data using advanced Excel techniques including pivot tables and What-If analysis. Automated reporting with macros and VBA. Designed an interactive Power BI dashboard using DAX to visualize Amazon Prime movie ratings.',
    tags: ['Excel', 'Power BI', 'DAX', 'VBA', 'Data Visualization'],
    liveUrl: 'https://github.com/kalim-j',
    githubUrl: 'https://github.com/kalim-j',
    imgUrl: null // Use placeholder
  }
];

export default function Projects({ isEditMode }) {
  const [projects, setProjects] = useState(initialProjects);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const startEdit = (project) => {
    setEditingId(project.id);
    setEditFormData({ ...project, tagsString: project.tags.join(', ') });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const saveEdit = () => {
    const updatedProject = {
      ...editFormData,
      tags: editFormData.tagsString.split(',').map(t => t.trim()).filter(t => t)
    };
    delete updatedProject.tagsString;
    setProjects(projects.map(p => p.id === editingId ? updatedProject : p));
    setEditingId(null);
    setEditFormData({});
  };

  return (
    <section id="projects" className="py-16 md:py-[clamp(3rem,6vh,6rem)] bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-[0.875rem] tracking-[0.15em] uppercase font-[800] mb-2">▸ MY WORK</p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-[800] tracking-[-0.02em] bg-gradient-to-br from-[#ffffff] via-[#a5b4fc] to-[#818cf8] text-transparent bg-clip-text mb-4">Featured Projects</h2>
          <div className="gradient-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative glass-card overflow-hidden ">
              
              {/* Project Image / Preview */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 cursor-pointer" onClick={() => window.open(project.liveUrl, '_blank')}>
                {project.imgUrl ? (
                  <img loading="lazy" loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    📊
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-[clamp(1rem,2vw,1.5rem)]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-[800] tracking-[-0.02em] text-gray-900 dark:text-white line-clamp-1">{project.title}</h3>
                    <p className="text-indigo-400 text-[0.875rem] tracking-[0.15em] uppercase font-[800]">{project.subtitle}</p>
                  </div>
                  {isEditMode && (
                    <div className="flex gap-2">
                      <button onClick={(e) => { e.stopPropagation(); startEdit(project); }} className="p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:text-indigo-600">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(project.id); }} className="p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:text-red-600">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3  leading-relaxed text-[clamp(0.875rem,1.1vw,1rem)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-[800] tracking-[-0.02em]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl btn-shimmer text-sm font-[800] tracking-[-0.02em] transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <ExternalLink className="w-4 h-4" /> 🚀 Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl text-sm font-[800] tracking-[-0.02em] transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Edit Modal / Form overlay */}
              {editingId === project.id && (
                <div className="absolute inset-0 z-20 bg-white dark:bg-gray-800 p-4 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-[800] tracking-[-0.02em] text-gray-900 dark:text-white">Edit Project</h4>
                    <button onClick={cancelEdit} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="space-y-3">
                    <input className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.title} onChange={e => setEditFormData({...editFormData, title: e.target.value})} placeholder="Title" />
                    <input className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.subtitle} onChange={e => setEditFormData({...editFormData, subtitle: e.target.value})} placeholder="Subtitle" />
                    <textarea className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none resize-none h-20" value={editFormData.description} onChange={e => setEditFormData({...editFormData, description: e.target.value})} placeholder="Description"></textarea>
                    <input className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.tagsString} onChange={e => setEditFormData({...editFormData, tagsString: e.target.value})} placeholder="Tags (comma separated)" />
                    <input className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.liveUrl} onChange={e => setEditFormData({...editFormData, liveUrl: e.target.value})} placeholder="Live URL" />
                    <input className="w-full p-2 text-sm rounded border dark:bg-gray-700 dark:border-gray-600 outline-none" value={editFormData.imgUrl || ''} onChange={e => setEditFormData({...editFormData, imgUrl: e.target.value})} placeholder="Image URL (screenshot API)" />
                    <button onClick={saveEdit} className="w-full py-2 bg-indigo-600 text-white rounded-lg font-[800] tracking-[-0.02em] flex items-center justify-center gap-2">
                      <Check className="w-4 h-4" /> Save Changes
                    </button>
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
