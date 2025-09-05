const SKILLS = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'Git', category: 'Tools' }
];

export function Skills() {
  return (
    <div className="mt-14">
      <h2 className="mb-6 text-xl font-semibold text-gray-200">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SKILLS.map(skill => (
          <div
            key={skill.name}
            className="group rounded-lg border border-gray-700/20 bg-neutral-800/30 p-3 transition-all duration-300 hover:scale-105 hover:border-gray-600/40 hover:bg-neutral-800/60"
          >
            <div className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white">
              {skill.name}
            </div>
            <div className="text-xs text-gray-500 transition-colors group-hover:text-gray-400">
              {skill.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
