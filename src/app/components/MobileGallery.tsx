const MobileGallery = () => {
  return (
    <div className="flex flex-col w-full justify-between md:pl-16 md:items-center lg:flex-row lg:pl-4">
      {["bmb-1", "bmb-2", "bmb-3", "bmb-4"].map((img, index) => (
        <div key={index} className="w-full h-full md:w-1/2 lg:w-1/4 pb-6 ">
          <div className="h-[540px] border-red-500 border md:border-2 shadow-lg rounded-2xl lg:ml-4 ">
            <img
              src={`./assets/${img}.png`}
              alt={`project-${img}`}
              className="w-full h-full rounded-2xl object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileGallery;
