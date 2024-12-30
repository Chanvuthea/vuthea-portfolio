const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex flex-col flex-1 items-center justify-center rounded-2xl mr-2 md:mr-4 border-red-600 border-2 shadow-lg p-4 md:p-6">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600"
          style={{ fontFamily: '"Alfa Slab One", serif' }}
        >
          Eang Chanvuthea
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center px-4 sm:px-6 md:px-10 font-semibold">
          &quot;Hello! I&apos;m a software engineer driven to create exceptional
          user experiences. I have a proven record of successfully developing
          high-performance web and mobile applications. I have a passion for
          innovation.&quot;
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
  );
};

export default Profile;
