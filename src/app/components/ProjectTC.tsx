const ProjectTC = ({ name }: { name: string }) => {
  return (
    <div className="rounded-[90%] border border-black w-full h-[40px] flex mt-2">
      <div className="flex flex-row items-center justify-center ml-4">
        <img src="./assets/star.png" alt="star-icon" className="w-6 h-6 mr-2" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProjectTC;
