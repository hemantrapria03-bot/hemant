import { motion } from 'motion/react';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'Go', 'GraphQL', 'REST APIs'] },
  { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma'] },
  { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Vercel', 'Linux'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My toolkit for building modern, scalable, and high-performance web applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.name}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((skill, index) => (
                <li key={skill} className="flex items-center gap-2 text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
