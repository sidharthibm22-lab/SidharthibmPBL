import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const fruitIces = [
    {
      id: 1,
      name: 'Strawberry Bliss',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-200 to-rose-300'
    },
    {
      id: 2,
      name: 'Mango Sunset',
      image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-200 to-orange-300'
    },
    {
      id: 3,
      name: 'Watermelon Wave',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-200 to-pink-300'
    },
    {
      id: 4,
      name: 'Blueberry Dream',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-200 to-indigo-300'
    },
    {
      id: 5,
      name: 'Kiwi Breeze',
      image: 'https://images.pexels.com/photos/1536623/pexels-photo-1536623.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-200 to-emerald-300'
    },
    {
      id: 6,
      name: 'Passion Fruit Paradise',
      image: 'https://images.pexels.com/photos/1093838/pexels-photo-1093838.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-200 to-amber-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      <header className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-pink-500 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Chill Bliss
            </h1>
            <Sparkles className="w-10 h-10 text-blue-500 animate-pulse" />
          </div>
          <p className="text-xl sm:text-2xl text-gray-700 font-medium mt-4">
            Fresh. Fruity. Frozen Happiness!
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Our Delicious Flavors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Handcrafted with the freshest fruits, each frozen treat is a burst of natural flavor and pure joy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fruitIces.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                  <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.name}
                  </h3>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Visit Us Today!
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto px-4">
            Experience the perfect blend of refreshment and flavor. Every bite is a moment of pure bliss.
          </p>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-pink-600" />
              <span className="text-2xl font-bold text-gray-800">Chill Bliss</span>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-blue-500" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-sky-500" />
              </a>
            </div>

            <p className="text-gray-700 text-sm">
              &copy; 2025 Chill Bliss. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
