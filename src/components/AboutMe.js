import Image from "next/image";
import SocialLinks from "./Socials";

export default function AboutMe() {
  return (
    <section className="text-white flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full md:max-w-2xl text-center md:text-left lg:pr-12">
        <h3 className="text-gray-400 text-sm tracking-wider mb-2">
          MORE ABOUT ME
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold">
          Full-Stack Developer and{" "}
          <span className="inline-block md:hidden">
            <br />
          </span>
          <span className="hidden md:inline-block">
            <br />
          </span>
          a little bit of{" "}
          <span className="bg-green-600 text-transparent bg-clip-text">
            everything
          </span>
        </h1>
        <p className="mt-4 text-gray-300">
  I'm Shubham Chede, a proactive full-stack developer passionate about
  creating dynamic web experiences. From frontend to backend, I thrive
  on solving complex problems with clean, efficient code. My expertise
  spans React Native, Next.js, and Node.js, and I have a keen eye for UI/UX design.
</p>
<p className="mt-4 text-gray-300">
  When I'm not coding, I'm exploring new ideas and staying curious. I also enjoy
  working on design and digital art, adding a creative touch to my projects.
  Life's about balance, and I love embracing every part of it.
</p>
<p className="mt-4 text-gray-300">
  I believe in waking up each day eager to make a difference!
</p>

        <p className="mt-4 text-gray-300 font-serif">
          You can find me here
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <SocialLinks 
            linkedinUrl="https://www.linkedin.com/in/shubham-chede-2957bb278"
            githubUrl="https://github.com/ShubhamSChede"
            instagramUrl="https://www.instagram.com/shubham.dark/"
          />
          <a 
            href="/shubham_chede_resume_final.pdf" 
            download
            className="inline-flex items-center border border-green-600 text-green-500 font-medium py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600/10"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="mt-12 md:mt-0 flex justify-center">
        <div className="relative">
          {/* Background effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Image container */}
          <div className="relative">
            <Image
              src="/images/shubham.jpg"
              alt="Shubham Chede"
              width={280}
              height={280}
              className="rounded-2xl border-2 border-gray-800 shadow-2xl object-cover w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
