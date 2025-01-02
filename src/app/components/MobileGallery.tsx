const MobileGallery = ({ imgList }: { imgList: string[] }) => {
  return (
    <div className="flex flex-col w-full justify-between md:pl-16 items-center lg:flex-row lg:pl-4">
      {imgList.map((img, index) => (
        <div key={index} className=" h-full w-1/2 lg:w-1/4 pb-6 ">
          <div className=" border-red-500 border md:border-2 shadow-lg rounded-2xl lg:ml-4 ">
            <img
              src={`./assets/${img}.png`}
              alt={`project-${img}`}
              className="w-full h-full rounded-2xl object-fill "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileGallery;
