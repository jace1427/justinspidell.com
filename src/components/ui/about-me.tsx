import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="flex">
      {/* Sticky About Me Card */}
      <div className="w-64 p-6 bg-white shadow-lg rounded-xl border border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-4 left-0">
        {/* Profile Image */}
        {/* <Image */}
        {/*   src="/images/profile.jpg" */}
        {/*   alt="Profile" */}
        {/*   className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500" */}
        {/* /> */}

        {/* Name */}
        <h2 className="mt-4 text-xl font-bold text-center text-gray-800 dark:text-white">
          Justin Spidell
        </h2>

        {/* Short Bio */}
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Engineer | Developer | Designer Passionate about building innovative
          projects!
        </p>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-all" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
