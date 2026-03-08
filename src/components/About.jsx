import { motion } from "framer-motion";

function About() {
  const values = [
    { title: "Scroll Stopper", icon: "🖱️" },
    { title: "Result Driven", icon: "📊" },
    { title: "Engagement First", icon: "📱" },
    { title: "Memorable", icon: "⭐" }
  ];

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Think of us as your <br/>
            <span className="text-green-500 italic">Secret Weapon</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="font-black uppercase tracking-widest text-sm">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;