import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-2 border-primary/20 bg-white/5 backdrop-blur-sm">
            <img 
              src="https://picsum.photos/seed/boy-developer/800/800" 
              alt="Hemant" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 blur-3xl rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 blur-3xl rounded-full -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Hello! I'm Hemant, a passionate web developer based in India. I specialize in building high-performance, scalable web applications that solve real-world problems.
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            With a strong foundation in both frontend and backend technologies, I love turning complex requirements into simple, beautiful, and intuitive user interfaces. When I'm not coding, you'll find me exploring new 3D design trends or contributing to open-source projects.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">Experience</h4>
              <p className="text-gray-500">3+ Years</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Projects</h4>
              <p className="text-gray-500">50+ Completed</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Location</h4>
              <p className="text-gray-500">Remote / India</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Availability</h4>
              <p className="text-gray-500">Freelance / Full-time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
