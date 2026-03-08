function Brands() {
  const brands = ["Edgewise Digital", "PropOne Reality", "MG Reality", "RRB Realtor", "Elite Properties", "Indie Soul"];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-2xl font-medium text-gray-500 uppercase tracking-widest mb-12">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-70">
          {brands.map((brand, index) => (
            <div key={index} className="text-white font-bold text-lg hover:text-green-500 transition cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;