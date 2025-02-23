import React from "react";

const skills = [
  { name: "html", icon: "/assets/icons8-html.svg" },
  { name: "css", icon: "/assets/icons8-css.svg" },
  { name: "javascript", icon: "/assets/icons8-javascript.svg" },
  { name: "php", icon: "/assets/php-svgrepo-com.svg" },
  { name: "laravel", icon: "/assets/laravel-svgrepo-com.svg" },
  { name: "react", icon: "/assets/react-svgrepo-com.svg" },
  { name: "tailwind", icon: "/assets/tailwindcss-icon-svgrepo-com.svg" },
  { name: "python", icon: "/assets/python-svgrepo-com.svg"}
];

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center text-white p-auto p-8"
    >
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

      <section className="grid md:grid-cols-1 mt-4 max-w-6xl w-full mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border broder-white/20 shadow-lg">
          <h3 className="text-xl font-bold">My Skills</h3>
          <div className="w-full mx-auto shadow-lg rounded-2xl overflow-hidden grid grid-cols-4 md:grid-cols-4 mt-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg flex items-center justify-center shadow-lg hover:scale-125 transition-transform duration-300"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
