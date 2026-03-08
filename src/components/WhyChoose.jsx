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
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-green-600">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border rounded-lg shadow-sm"
            >

              <FaCheckCircle className="text-green-600 mt-1" size={20} />

              <p className="text-gray-700">
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