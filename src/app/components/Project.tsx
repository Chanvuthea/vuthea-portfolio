import MobileGallery from "./MobileGallery";
import ProjectTC from "./ProjectTC";
import WebGallery from "./WebGallery";

interface Project {
  title: string;
  description: string;
  projectType: string;
  projectTc: string[];
  projectYear: string;
  projectImg: string[];
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div>
      <div className="flex justify-end -mr-2">
        <img
          src="./assets/star-red.svg"
          alt="star-red-icon"
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      <div className="flex flex-col md:flex-row border-2 border-red-600 p-4 md:p-6 rounded-2xl mb-32">
        <div className="w-full md:w-2/4 lg:w-1/4">
          <div className="h-auto">
            <h3
              className="justify-center text-start pb-4 text-2xl"
              style={{ fontFamily: '"Alfa Slab One", serif' }}
            >
              {project.title}
            </h3>

            <div className="pb-8 pr-4 border-b border-black">
              {project.projectTc.map((name, index) => (
                <ProjectTC name={name} key={index} />
              ))}
            </div>
            <div className="py-4">
              <p>{project.description}</p>
            </div>
            <div className="pb-16 flex flex-row justify-between items-center">
              <p className="text-gray-400">{project.projectYear}</p>
            </div>
          </div>
        </div>

        {project.projectType === "Web" ? (
          <WebGallery imgList={project.projectImg} />
        ) : (
          <MobileGallery imgList={project.projectImg} />
        )}
      </div>
    </div>
  );
};

export default Project;
