import React from "react";

export default function About() {
  return (
    <div className="min-h-screen text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* short bio card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border broder-white/20 shadow-lg">
          <h3 className="text-xl font-bold flex items-center">
            Short Bio <span className="ml-2">🚀</span>
          </h3>
          <p className="mt-4 text-gray-300">
            Saya adalah seorang Fullstack Web Developer, berfokus pada
            pengembangan aplikasi web menggunakan ReactJs di sisi Frontend dan
            Laravel di sisi Backend.
          </p>
          <p className="mt-4 text-gray-300">
            Saya memiliki minat dalam membangun sistem yang efisien, responsif,
            dan scaleble. Selain itu, saya selalu berusaha untuk meningkatkan
            keterampilan saya dengan mempelajari teknologi terbaru dan
            menerapkan praktik pengembangan perangkat lunak yang baik.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 4v16h18V4H3zm16 14H5V6h14v12z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">
              Univeristas Pahlawan Tuanku Tambusai
            </h3>
            <p className="text-gray-300 mt-2 text-sm">April 2024 - Mei 2024</p>
            <p className="mt-2 text-gray-300 text-sm">
              Saya membangun website Company Profile untuk prodi Teknik
              Informatika, dimana saya bertanggung jawab dalam pengembangan
              Backend. Saya menggunakan Laravel sebagai Framework utama. Dalam
              Proyek ini saya menangani manajemen database, autentikasi
              pengguna, serta pengelolaan data dinamis untuk meningkatkan
              funtsionalitas dan pengalaman pengguna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
