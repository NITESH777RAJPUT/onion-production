import { motion } from "framer-motion";

function Services() {
  const services = ["Film Production", "Brand Strategy", "Social Content", "Photography"];

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-7xl font-black uppercase mb-16"
        >
          What we <span className="text-green-500">Do.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 p-12 border border-white/5 hover:border-green-500 transition-colors"
            >
              <h3 className="text-3xl font-black uppercase">{s}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;