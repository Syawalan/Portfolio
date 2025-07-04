import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4 md:px-10 to-white">
      {/* judul */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-white" data-aos="fade-up">Get In Touch</h2>
        <div className="w-16 h-1 bg-white mx-auto mt-2 rounded"/>
        <p className="text-white mt-2">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
      </div>

        {/* konten grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* info kontak */}
          <div className="border border-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4" data-aos="fade-right" data-aos-delay="100">Contact Information</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="150">
                <Mail size={18} />
                <a
                  href="mailto:syawalanf@gmail.com"
                  className="hover:underline"
                >
                  syawalanf@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="150">
                <Linkedin size={18} />
                <a
                  href="https://linkedin.com/syawalan"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/syawalan
                </a>
              </li>
              <li className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="150">
                <Github size={18} />
                <a
                  href="https://github.com/Syawalan"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >Github.com/Syawalan</a>
              </li>
            </ul>
          </div>

          {/* form kontak */}
          <form className="border border-white rounded-lg p-6 shadow-sm">
            <div className="mb-4" data-aos="fade-left" data-aos-delay="150">
              <label className="block text-white text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-white rounded px-3 py-2 outline-none focus:ring-2 focus:ring-white transition"
                required
              />
            </div>
            <div className="mb-4" data-aos="fade-left" data-aos-delay="150">
              <label className="block text-white text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-white rounded px-3 py-2 outline-none focus:ring-2 focus:ring-white transition"
                required
              />
            </div>
            <div className="mb-6" data-aos="fade-left" data-aos-delay="150">
              <label className="block text-white text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full border border-white rounded px-3 py-2 outline-none focus:ring-2 focus:ring-white transition"
                required
              />
            </div>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              type="submit"
              className="w-full bg-[#F97A00] text-white font-medium py-2 rounded hover:bg-[#FED16A] transition"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
}
