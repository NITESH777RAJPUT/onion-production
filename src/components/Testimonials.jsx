function Testimonials() {

  const testimonials = [
    {
      name: "PropOne Reality",
      text: "Onion Production turned our idea into reality and gave us a strong digital identity."
    },
    {
      name: "Obvi",
      text: "Professional team, great creativity and timely delivery."
    },
    {
      name: "Indie Soul",
      text: "Amazing storytelling and production quality."
    }
  ];

  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>

          <p className="text-zinc-500 mt-6 max-w-xl mx-auto">
            Hear what our clients say about working with our creative team.
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group p-8 rounded-2xl bg-zinc-900 border border-white/10 
              hover:border-yellow-400/40 transition-all duration-300 hover:scale-[1.03]"
            >

              <p className="text-zinc-400 leading-relaxed mb-6">
                "{item.text}"
              </p>

              <h3 className="font-bold text-yellow-400">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;