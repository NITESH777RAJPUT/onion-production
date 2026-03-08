import { FaCheckCircle } from "react-icons/fa";

function WhyChoose() {

  const features = [
    "Creative + Strategic Approach",
    "Affordable Premium Quality Content",
    "End-to-End Support (Concept → Shoot → Edit → Delivery)",
    "Free Consultation on Brand Growth Strategy",
    "On-Time Delivery with Professional Touch"
  ];

  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Why <span className="text-yellow-400">Choose Us</span>
          </h2>

          <p className="text-zinc-500 mt-6 max-w-xl mx-auto">
            We combine creativity, strategy, and execution to deliver content
            that actually connects with your audience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="group flex items-start gap-5 p-7 rounded-2xl bg-zinc-900 border border-white/10 
              hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.03]"
            >

              <FaCheckCircle
                className="text-yellow-400 mt-1 flex-shrink-0"
                size={22}
              />

              <p className="text-zinc-300 leading-relaxed">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;