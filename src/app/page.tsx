import { BlogPosts } from "@/components/posts";
import AboutMe from "@/components/ui/about-me";

export default function Page() {
  return (
    <section>
      <div className="flex">
        <AboutMe />
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-gradient" />

            {/* Main Title */}
            <h1 className="relative pb-4 text-6xl md:text-8xl font-bold text-center w-full max-w-[1000px] tracking-wide bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300">
              Justin Spidell
            </h1>
          </div>

          {/* Animated Underline */}
          <div className="mt-4 pt-2 h-1.5 w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full animate-underline" />

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Engineer | Developer | Designer
          </p>
        </div>
        <div className="mt-8 mb-12 text-center items-center">
          Hello! I am a software engineer based in Seattle. Please enjoy my
          ramblings.
        </div>
        <BlogPosts />
      </div>
    </section>
  );
}
