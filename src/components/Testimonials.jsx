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
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Client <span className="text-green-600">Testimonials</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm"
            >

              <p className="text-gray-600 mb-4">
                "{item.text}"
              </p>

              <h3 className="font-semibold text-green-600">
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