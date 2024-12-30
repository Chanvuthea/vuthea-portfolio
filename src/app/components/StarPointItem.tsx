const StarPointItem = ({ item }: { item: string }) => {
  return (
    <div className="flex flex-row pb-4">
      <img src="./assets/star.png" alt="star-icon" className="w-6 h-6 mr-2" />
      <p>{item}</p>
    </div>
  );
};

export default StarPointItem;
