import scrollIcon from "../assets/icons/scroll.png";
import contentIcon from "../assets/icons/content.png";
import engagementIcon from "../assets/icons/engagement.png";
import brandIcon from "../assets/icons/brand.png";

function Services() {

  const services = [
    {
      img: scrollIcon,
      text: "Knows how to make people stop scrolling"
    },
    {
      img: contentIcon,
      text: "Gets what content actually works"
    },
    {
      img: engagementIcon,
      text: "Creates engaging content, not forced ads."
    },
    {
      img: brandIcon,
      text: "Makes your brand fun, memorable, and worth following"
    }
  ];

  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-black uppercase text-yellow-400 mb-20"
        >
          THINK OF US AS YOUR BRAND'S <br /> BEST FRIEND WHO
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-14">

          {services.map((service, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex flex-col items-center text-center"
            >

              {/* Icon */}
              <img
                src={service.img}
                alt="icon"
                className="w-28 mb-6"
              />

              {/* Text */}
              <p className="text-lg text-zinc-200 font-semibold max-w-[220px]">
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;