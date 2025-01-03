import React from "react";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";

const Page = () => {
  const projects = [
    {
      title: "BookMeBus App",
      description: `BookMeBus App - A seamless bus, ferry, and taxi online ticketing
                platform, where you can secure your ticket and seat in a fast,
                easy and cost-effective way.`,
      projectType: "Mobile",
      projectTc: ["React Native", "Redux", "Google Analytic", "Online Payment"],
      projectYear: "2019",
      projectImg: ["bmb-1", "bmb-2", "bmb-3", "bmb-4"],
    },
    {
      title: "Phumic",
      description: `Phumic is a mobile application platform that allows customers to shop
                    and purchase organic, safe, and natural groceries from various reliable
                    suppliers and have them delivered to customers' doorstep`,
      projectType: "Mobile",
      projectTc: ["React Native", "Redux", "Google Analytic", "Firebase"],
      projectYear: "2020",
      projectImg: ["phumic-1", "phumic-2", "phumic-3", "phumic-4"],
    },
    {
      title: "Oakas",
      description: `OAKAS (employment) app is developed to contribute to ensure inclusive employment 
                    in Cambodia and tailored for the needs of people with different types of disabilities. 
                    This app is an official app managed by Department Welfare of Person with Disabilities 
                    (DWPD) of Ministry of Social Affairs, Veterans and Youth Rehabilitation (MOSVY) 
                    supported by Australian Government through Australia-Cambodia Cooperation 
                    for Equitable Sustainable Services (ACCESS).`,
      projectType: "Mobile",
      projectTc: [
        "React Native",
        "Redux",
        "Google Analytic",
        "Firebase",
        "Deep Link",
      ],
      projectYear: "2020",
      projectImg: ["oakas-1", "oakas-2", "oakas-3", "oakas-4"],
    },
    {
      title: "KT APP",
      description: `KT APP is an application under East West Seed Foundation, this app is in house appliction 
                    purpose mangement of Farmers and Homegarden moreover Market size. `,
      projectType: "Mobile",
      projectTc: ["React Native", "Mobx", "Offline Mode"],
      projectYear: "2022",
      projectImg: ["kt-1", "kt-2", "kt-3", "kt-4"],
    },
    {
      title: "NCSD Website",
      description: `The Cambodian NCSD, established in 2015, brings together government 
                    entities to promote sustainable development. Led by the Environment Minister, 
                    it aims to coordinate climate action, develop strategic plans, and create a policy 
                    framework for a more sustainable and climate-resilient Cambodia.`,
      projectType: "Web",
      projectTc: ["Larravel", "Data portal"],
      projectYear: "2024",
      projectImg: ["ncsd"],
    },
    {
      title: "Toothsmile Clinic Website",
      description: `The Toothsmile Clinic Website, purpose to manage customer, create service, print invoice,
                     make report more over sending daily report via telegram.`,
      projectType: "Web",
      projectTc: ["Node", "Type Script"],
      projectYear: "2022",
      projectImg: ["toothsmile-1"],
    },
  ];

  return (
    <div className="bg-yellow-50 text-gray-800">
      <header className="sticky top-0 z-50 p-4 flex justify-between items-center bg-[#f1eee4] shadow-md">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600"
          style={{ fontFamily: '"Luxurious Script", serif' }}
        >
          Deo
        </h1>
        <Nav />
      </header>

      <main className="p-4 md:p-14">
        <section id="profile" className="mb-16 pt-28">
          <Profile />
        </section>

        <section id="experience" className="mb-16 pt-28">
          <WorkExperience />
        </section>

        <section id="projects" className="mb-16 pt-28">
          <h2
            className="text-4xl font-serif mb-4 text-red-600 uppercase"
            style={{ fontFamily: '"Alfa Slab One", serif' }}
          >
            Project
          </h2>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </section>

        <section id="contact" className="mb-16 pt-28">
          <h2
            className="text-4xl font-serif mb-4 text-red-600 uppercase"
            style={{ fontFamily: '"Alfa Slab One", serif' }}
          >
            Contact
          </h2>
          <div className="flex flex-col justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full lg:w-1/2">
              <div className="h-auto p-4 border-red-600 border-2 rounded-2xl shadow-lg flex flex-col md:flex-row">
                <div className="flex-1 border-b md:border-b-0 md:border-r border-black">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-center"
                    style={{ fontFamily: '"Alfa Slab One", serif' }}
                  >
                    Scan Me Here!
                  </h3>
                  <div className="flex flex-row py-4 justify-evenly">
                    <div className="flex items-center flex-col justify-center pr-8 ">
                      <img
                        src="./assets/tl-qr.png"
                        alt="thea-telegram-qr"
                        className="w-[80px] h-[80px] object-fill border-red-600 border-2 rounded-2xl"
                      />
                      <p className="text-lg">Telegram</p>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                      <img
                        src="./assets/linkedin-qr.png"
                        alt="thea-linkedin-qr"
                        className="w-[80px] h-[80px] object-fill border-red-600 border-2 rounded-2xl"
                      />
                      <p className="text-lg">LinkedIn</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="pl-4 text-center pt-4 md:pt-0">
                    <h3
                      className="text-3xl md:text-4xl font-bold text-red-600"
                      style={{ fontFamily: '"Alfa Slab One", serif' }}
                    >
                      Thank
                    </h3>
                    <h3
                      className="text-3xl md:text-4xl font-bold"
                      style={{ fontFamily: '"Alfa Slab One", serif' }}
                    >
                      You!
                    </h3>
                    <p className="text-lg">Let&apos;s work together!</p>
                  </div>
                  <div className="p-4 text-center md:text-left">
                    <i className="fas fa-envelope mr-2 text-red-600"></i>
                    <a href="mailto:deochanvuthea@gmail.com">
                      deochanvuthea@gmail.com
                    </a>
                    <p>
                      <i className="fas fa-phone mr-2 text-red-600"></i>
                      <a href="tel:0968847438">+(855) 96-884-7438</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-52"></div>
          </div>
        </section>
      </main>

      <footer className="p-4 bg-[#f1eee4]">
        <p className="text-center mt-4">
          &copy; 2024 Deo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
