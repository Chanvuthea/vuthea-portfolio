import React from "react";

const Page = () => {
  return (
    <div className="bg-yellow-50 text-gray-800">
      <header className="sticky top-0 z-50 p-4 flex justify-between items-center bg-[#f1eee4] shadow-md">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600"
          style={{ fontFamily: '"Luxurious Script", serif' }}
        >
          Deo
        </h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#profile" className="hover:text-red-600">
                Profile
              </a>
            </li>
            <li>
              <a href="#work-experience" className="hover:text-red-600">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-red-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-4 md:p-14">
        <section id="profile" className="mb-16 pt-24">
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex flex-col flex-1 items-center justify-center rounded-2xl mr-2 md:mr-4 border-red-500 border-2 shadow-lg p-4 md:p-6">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600"
                style={{ fontFamily: '"Alfa Slab One", serif' }}
              >
                Eang Chanvuthea
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center px-4 sm:px-6 md:px-10 font-semibold">
                &quot;Hello! I&apos;m a software engineer driven to create
                exceptional user experiences. I have a proven record of
                successfully developing high-performance web and mobile
                applications. I have a passion for innovation.&quot;
              </p>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <img
                src="./assets/profile-1.png"
                alt="profile"
                className="w-full h-auto sm:w-96 sm:h-96 md:w-128 md:h-128 lg:w-160 lg:h-160 object-cover rounded-full mx-auto"
              />
            </div>
          </div>
        </section>

        <section id="work-experience" className="mb-16 pt-24">
          <h2
            className="text-4xl font-serif mb-4 text-red-600 uppercase"
            style={{ fontFamily: '"Alfa Slab One", serif' }}
          >
            Work Experience
          </h2>

          <div className="flex flex-col md:flex-row border-red-500 border-2 shadow-lg p-4 md:p-6 rounded-2xl">
            <div className="flex-1 md:w-1/2 mb-0 md:mb-6">
              <img
                src="./assets/experience-work.png"
                alt="experience-work"
                className="w-full h-full object-cover mx-auto rounded-2xl"
              />
            </div>
            <div className="flex-1 md:w-1/2 md:pl-6">
              <div className="border-b-2 border-black mt-6 md:mt-0">
                <h3
                  className="text-2xl font-semibold text-red-600 mb-6"
                  style={{ fontFamily: '"Alfa Slab One", serif' }}
                >
                  Experience
                </h3>
                <div className="flex flex-col md:flex-row mb-6 justify-between">
                  <div className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6">
                    <div className="flex flex-row pb-6 md:pb-12">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2018 - Present</p>
                        <p className="text-red-600">Freelance Developer</p>
                        <p>Various clients</p>
                      </div>
                    </div>
                    <div className="flex mb-6">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2020 - 2021</p>
                        <p className="text-red-600">Lead Mobile Developer</p>
                        <p>Cambodian Young Business Association (CYBA)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex flex-row pb-6 md:pb-12">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2018 - 2020</p>
                        <p className="text-red-600">Mobile Developer</p>
                        <p>BookMeBus</p>
                      </div>
                    </div>
                    <div className="flex mb-6">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2021 - Present</p>
                        <p className="text-red-600">Fullstack Developer</p>
                        <p>Bikay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-black">
                <h3
                  className="text-2xl font-semibold text-red-600 my-6"
                  style={{ fontFamily: '"Alfa Slab One", serif' }}
                >
                  Education
                </h3>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6">
                    <div className="flex flex-row pb-6 md:pb-12">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2014 - 2018</p>
                        <p className="text-red-600">Computer Science</p>
                        <p>Norton University</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex flex-row pb-6 md:pb-12">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <div>
                        <p>2016 - 2018</p>
                        <p className="text-red-600">Web Developer</p>
                        <p>IT Step Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-semibold text-red-600 my-6"
                  style={{ fontFamily: '"Alfa Slab One", serif' }}
                >
                  Skill
                </h3>
                <div className="flex flex-col md:flex-row mb-6 justify-between">
                  <div className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6">
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>JavaScript</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>TypeScript</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>NextJs</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 mb-0 md:mb-6">
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>NodeJs</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>React</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>PHP</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>React Native</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>SQL</p>
                    </div>
                    <div className="flex flex-row pb-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>Data Structures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16 pt-24">
          <h2
            className="text-4xl font-serif mb-4 text-red-600 uppercase"
            style={{ fontFamily: '"Alfa Slab One", serif' }}
          >
            Projects
          </h2>
          <div className="flex flex-col md:flex-row border-2 border-red-600 p-4 md:p-6 rounded-2xl mb-32">
            <div className="relative -top-12 md:-top-16 -right-full">
              <img
                src="./assets/star-red.svg"
                alt="star-red-icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="w-full md:w-1/4">
              <div className="h-auto">
                <h3
                  className="justify-center text-start pb-4 text-2xl"
                  style={{ fontFamily: '"Alfa Slab One", serif' }}
                >
                  BookMeBus App
                </h3>

                <div className="pb-8 pr-4 border-b border-black">
                  <div className="rounded-[90%] border border-black w-full h-[40px] flex mt-2">
                    <div className="flex flex-row items-center justify-center ml-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>React Native</p>
                    </div>
                  </div>
                  <div className="rounded-[90%] border border-black h-[40px] flex mt-2">
                    <div className="flex flex-row items-center justify-center ml-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>Redux</p>
                    </div>
                  </div>
                  <div className="rounded-[90%] border border-black h-[40px] flex mt-2">
                    <div className="flex flex-row items-center justify-center ml-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>Google Analytic</p>
                    </div>
                  </div>
                  <div className="rounded-[90%] border border-black h-[40px] flex mt-2">
                    <div className="flex flex-row items-center justify-center ml-4">
                      <img
                        src="./assets/star.png"
                        alt="star-icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p className="pr-2">Online Payment</p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <p>
                    BookMeBus App - A seamless bus, ferry, and taxi online
                    ticketing platform, where you can secure your ticket and
                    seat in a fast, easy and cost-effective way.
                  </p>
                </div>
                <div className="pt-16 flex flex-row justify-between items-center">
                  <p className="text-gray-400">2019</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-between md:pl-16 md:items-center lg:flex-row lg:pl-4">
              {["bmb-1", "bmb-2", "bmb-3", "bmb-4"].map((img, index) => (
                <div
                  key={index}
                  className="w-full h-full md:w-1/2 lg:w-1/4 pb-6 "
                >
                  <div className="h-full border-red-500 border md:border-2 shadow-lg rounded-2xl lg:ml-4 ">
                    <img
                      src={`./assets/${img}.png`}
                      alt={`project-${img}`}
                      className="w-full h-full rounded-2xl object-cover "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16 pt-20">
          <h2
            className="text-4xl font-serif mb-4 text-red-600 uppercase"
            style={{ fontFamily: '"Alfa Slab One", serif' }}
          >
            Contact
          </h2>
          <div className="flex flex-col justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <div className="bg-[#f1eee4] h-32"></div>
            </div>
            <div className="w-full md:w-1/2">
              <form>
                <h3 className="text-lg font-bold mb-2">
                  Thank you for visiting!
                </h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 mb-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 mb-2"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 mb-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-red-600 p-2 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-4 bg-[#f1eee4]">
        <p className="text-center mt-4">
          &copy; 2023 Deo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
