import foto from "../gua.jpeg";

export default function Hero() {
  return (
    <div className="container mx-auto px-8 py-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-xl max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">CV ONLINE</h1>
      <h2 className="text-3xl font-medium text-gray-700 mb-6">Dandi Muhamad Ramdan</h2>

      {/* Profile Section */}
      <Profile />

      {/* Description */}
      <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto px-4 opacity-75">
      Sebagai mahasiswa Sistem Informasi semester 5, cita-cita saya sederhana namun penuh makna: lulus dengan baik untuk membahagiakan orang tua yang telah berkorban banyak untuk pendidikan saya, meraih kesuksesan dunia dan akhirat dengan mengikuti jalan yang diridhai Allah, serta menjadi suami yang dapat memberikan cinta, kasih sayang, dan kebahagiaan bagi keluarga saya. Setiap langkah yang saya ambil, baik dalam studi maupun kehidupan, saya upayakan untuk selalu bermanfaat, berdoa, dan menjaga niat tulus untuk meraih tujuan mulia ini.
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div className="inline-block mt-8 relative">
      <img
        src={foto.src}
        alt="Dandi"
        className="w-52 h-52 rounded-full border-8 border-white shadow-2xl mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      />
      {/* Subtle shadow and overlay text */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 rounded-b-full">
        <p className="text-center text-white font-semibold text-xl opacity-90">Dandi Muhamad</p>
      </div>
    </div>
  );
}
