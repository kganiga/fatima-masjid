export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1920")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Masjid-E-Fatima</h1>
        <p className="text-xl md:text-2xl">Peace, Tranquility, and Community</p>
      </div>
    </div>
  );
}
