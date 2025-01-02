import StarPointItem from "./StarPointItem";
import StarPoinItems from "./StarPointItems";

const WorkExperience = () => {
  const skills = {
    colOne: ["JavaScript", "TypeScript", "NextJs"],
    colTWo: ["NodeJs", "React", "React Native"],
    colThree: ["PHP", "SQL", "Data Structures"],
  };

  const experiences = {
    colOne: [
      {
        startYear: "2018",
        endYear: "Present",
        part: "Freelance Developer",
        place: "Various clients",
      },
      {
        startYear: "2018",
        endYear: "2020",
        part: "Mobile Developer",
        place: "BookMeBus",
      },
    ],
    colTWo: [
      {
        startYear: "2020",
        endYear: "2021",
        part: "Lead Mobile Developer",
        place: "CYBA",
      },
      {
        startYear: "2021",
        endYear: "Present",
        part: "FullStack Developer",
        place: "Bikay",
      },
    ],
  };

  const educations = {
    colOne: [
      {
        startYear: "2014",
        endYear: "2018",
        part: "Computer Science",
        place: "Norton University",
      },
    ],
    colTWo: [
      {
        startYear: "2016",
        endYear: "2018",
        part: "Web Development",
        place: "IT Step Academy",
      },
    ],
  };

  return (
    <div>
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
              {Object.entries(experiences).map(([column, skillList]) => (
                <div
                  className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6"
                  key={column}
                >
                  {skillList.map((item, index) => (
                    <StarPoinItems items={item} key={index} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="border-b-2 border-black">
            <h3
              className="text-2xl font-semibold text-red-600 my-6"
              style={{ fontFamily: '"Alfa Slab One", serif' }}
            >
              Education
            </h3>

            <div className="flex flex-col md:flex-row mb-6 justify-between">
              {Object.entries(educations).map(([column, skillList]) => (
                <div
                  className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6"
                  key={column}
                >
                  {skillList.map((item, index) => (
                    <StarPoinItems items={item} key={index} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="text-2xl font-semibold text-red-600 my-6"
              style={{ fontFamily: '"Alfa Slab One", serif' }}
            >
              Skill
            </h3>
            <div className="flex flex-col lg:flex-row mb-6 justify-between">
              {Object.entries(skills).map(([column, skillList]) => (
                <div
                  className="flex flex-col w-full md:w-1/2 md:pr-10 mb-0 md:mb-6"
                  key={column}
                >
                  {skillList.map((item, index) => (
                    <StarPointItem item={item} key={index} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
