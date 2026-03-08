import CountUp from "react-countup";

function Stats() {
  return (
    <section className="py-20 bg-black text-white text-center">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-4xl font-bold text-green-500">
            <CountUp end={50} duration={3} />+
          </h2>
          <p>Projects Completed</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-500">
            <CountUp end={20} duration={3} />+
          </h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-500">
            <CountUp end={5} duration={3} />+
          </h2>
          <p>Years Experience</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;