const SideCard = () => {
  return (
    <div className="relative">
      <img
        alt="Car rentals image"
        className="rounded-lg"
        src="https://placehold.co/300x300"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
        CAR RENTALS
      </div>
    </div>
  );
};

export default SideCard;
