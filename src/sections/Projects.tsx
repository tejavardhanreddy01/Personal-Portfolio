import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import patriotWebLandingPage from "@/assets/images/patriot-web-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "GMU",
    year: "2024",
    title: "Patriot Web Redesign",
    results: [
      { title: "Improved usability" },
      { title: "Achieved WCAG compliance" },
      { title: "Boosted user satisfaction by 35%" },
    ],
    link: "https://patriot-web-redesign-production.up.railway.app/",
    image: patriotWebLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Campus Survey Application",
    results: [
      { title: "Built using Angular & Spring Boot" },
      { title: "AWS EC2 & S3 optimization" },
      { title: "Form validation & routing" },

    ],
    link: "https://github.com/orgs/Campus-Survey-Project/repositories", // Replace with actual project link if available
    image: lightSaasLandingPage, // Replace with a relevant image variable or path
  },
  // {
  //   company: "IQVIA",
  //   year: "2022",
  //   title: "OCE Platform Enhancements",
  //   results: [
  //     { title: "30% error reduction" },
  //     { title: "20% performance boost" },
  //     { title: "Saved 12 hours weekly" },

  //   ],
  //   //link: "https://www.linkedin.com/in/teja/", // Replace with actual project link if available
  //   image: aiStartupLandingPage, // Replace with a relevant image variable or path
  // },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how i transformed concepts into engaging digital experience" />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
