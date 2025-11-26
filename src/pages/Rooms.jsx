import React from "react";

const rooms = [
  {
    title: "Deluxe Mountain View Room",
    price: "₹7,999 / night",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Premium Suite with Balcony",
    price: "₹12,500 / night",
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
  },
  {
    title: "Luxury Chalet Cottage",
    price: "₹18,000 / night",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
  },
];

export default function Rooms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Rooms & Suites at <span className="text-indigo-600">Wisteria Chalet</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img src={room.img} alt={room.title} className="w-full h-60 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-indigo-600 font-medium mb-4">{room.price}</p>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
