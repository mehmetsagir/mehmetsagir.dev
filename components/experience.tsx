const EXPERIENCE = [
  {
    title: 'Senior Frontend Developer',
    company: 'Freelance',
    period: '2020 - Present',
    description:
      'Building modern web applications with React, Next.js, and TypeScript for various clients.'
  },
  {
    title: 'Frontend Developer',
    company: 'Previous Company',
    period: '2018 - 2020',
    description:
      'Developed user interfaces and improved user experience for web applications.'
  },
  {
    title: 'Junior Developer',
    company: 'Started Career',
    period: '2016 - 2018',
    description:
      'Learning and growing in web development, working with HTML, CSS, and JavaScript.'
  }
];

export function Experience() {
  return (
    <div className="mt-14">
      <h2 className="mb-8 text-xl font-semibold text-gray-200">Experience</h2>
      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-gray-400"></div>
            <div className="absolute left-[3px] top-4 h-full w-[2px] bg-gray-700/50 last:hidden"></div>

            <div className="group -m-4 rounded-lg p-4 transition-colors duration-300 hover:bg-neutral-800/20">
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-gray-200 transition-colors group-hover:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500 transition-colors group-hover:text-gray-400">
                  {exp.period}
                </span>
              </div>
              <div className="mb-2 text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-300">
                {exp.company}
              </div>
              <p className="text-sm text-gray-500 transition-colors group-hover:text-gray-400">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
