import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white to-black">
      {/* judul */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black">Get In Touch</h2>
        <div className="w-16 h-1 bg-black mx-auto mt-2 rounded"/>
        <p className="text-gray-500 mt-2">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
      </div>

        {/* konten grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* info kontak */}
          <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:syawalanf@gmail.com"
                  className="hover:underline"
                >
                  syawalanf@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
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
              <li className="flex items-center gap-3">
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
          <form className="border rounded-lg p-6 shadow-sm">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-black transition"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-black transition"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-black transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-2 rounded hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
}
