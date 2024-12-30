interface items {
  startYear: string;
  endYear: string;
  part: string;
  place: string;
}

const StarPoinItems = ({ items }: { items: items }) => {
  return (
    <div className="flex flex-row pb-6 md:pb-12">
      <img src="./assets/star.png" alt="star-icon" className="w-6 h-6 mr-2" />
      <div>
        <p>
          {items.startYear} - {items.endYear}
        </p>
        <p className="text-red-600">{items.part}</p>
        <p>{items.place}</p>
      </div>
    </div>
  );
};

export default StarPoinItems;
