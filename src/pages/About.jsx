export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">Wisteria Chalet</span>
          </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wisteria Chalet is a luxury nature getaway crafted for those who
              seek peace, comfort, and breathtaking surroundings. Nestled in the
              heart of serene landscapes, our resort blends modern elegance with
              warm hospitality.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From private cottages to scenic walking trails, every corner of
              Wisteria Chalet is designed to help you unwind and reconnect with
              nature. Whether it’s a romantic escape or a family vacation, we
              promise a memorable stay.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Resort"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
