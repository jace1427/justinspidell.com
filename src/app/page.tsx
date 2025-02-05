import { BlogPosts } from "@/components/posts";
import { Carousel } from "@/components/ui/carousel";

export const metadata = {
  title: "Blog",
  description: "Read it.",
};

export default function Page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          {/* Background Shape */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-orange-400 rounded-full blur-2xl opacity-30 animate-gradient" />

          {/* Main Title */}
          <h1 className="relative text-6xl md:text-8xl font-bold text-center w-full max-w-[1000px] tracking-wide bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300">
            Justin Spidell
          </h1>
        </div>

        {/* Animated Underline */}
        <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-purple-600 to-orange-400 rounded-full animate-underline" />

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 font-medium">
          Engineer | Developer | Designer
        </p>
      </div>
      Hello!
      <Carousel></Carousel>
      <BlogPosts />
    </section>
  );
}
