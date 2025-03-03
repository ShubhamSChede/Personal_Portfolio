import Image from "next/image";
import SocialLinks from "./Socials";

export default function AboutMe() {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-16">
      {/* Left Section */}
      <div className="max-w-2xl text-center md:text-left md:mr-12">
        <h3 className="text-gray-400 text-sm tracking-wider mb-2">
          MORE ABOUT ME
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold">
          Full-Stack Developer and <br />
          a little bit of{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            everything
          </span>
        </h1>
        <p className="mt-4 text-gray-300">
          I'm Aayush Bharti, a proactive full-stack developer passionate about
          creating dynamic web experiences. From frontend to backend, I thrive
          on solving complex problems with clean, efficient code. My expertise
          spans React, Next.js, and Node.js, and I'm always eager to learn more.
        </p>
        <p className="mt-4 text-gray-300">
          When I'm not coding, I'm exploring new ideas and staying curious.
          Life's about balance, and I love embracing every part of it.
        </p>
        <p className="mt-4 text-gray-300">
          I believe in waking up each day eager to make a difference!
        </p>
        <p className="mt-4 text-gray-300">
            You can find me here
        </p>
        <SocialLinks 
      linkedinUrl="https://www.linkedin.com/in/shubham-chede-2957bb278"
      githubUrl="https://github.com/ShubhamSChede"
      instagramUrl="https://www.instagram.com/shubham.dark/"
    />
      </div>

      {/* Right Section (Profile Image) */}
      <div className="mt-8 md:mt-0">
        <Image
          src="/profile.jpg"
          alt="Aayush Bharti"
          width={250}
          height={250}
          className="rounded-full border-4 border-gray-800 shadow-lg"
        />
      </div>
    </section>
  );
}
