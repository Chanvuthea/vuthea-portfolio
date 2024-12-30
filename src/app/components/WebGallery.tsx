const WebGallery = ({ imgList }: { imgList: string[] }) => {
  return (
    <div className="flex flex-col w-full justify-between pl-4">
      {imgList.map((img, index) => (
        <div key={index} className="w-full h-full pb-6 ">
          <div className="h-[540px]w-full border-red-500 border md:border-2 shadow-lg rounded-2xl lg:ml-4 ">
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

export default WebGallery;
