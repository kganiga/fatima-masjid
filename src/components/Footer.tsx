import { Heart, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center space-y-2 px-6">
        
        {/* Made with Love (Centered) */}
        <p className="flex items-center gap-1 text-lg">
          Made with <Heart className="text-red-500 animate-pulse" size={18} /> by
          <a
            href="https://khalilganiga.in/about"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-yellow-400 transition duration-300"
          >
            Khalil
          </a>
        </p>

        {/* Copyright (Below) */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Masjid-E-Fatima. All rights reserved.
        </p>

        {/* Social Icons (Below Everything)
        <div className="flex gap-4 mt-2">
          {[
            { href: "https://github.com/khalilganiga", icon: Github },
            { href: "https://linkedin.com/in/khalilganiga", icon: Linkedin },
            { href: "https://twitter.com/khalilganiga", icon: Twitter },
          ].map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
