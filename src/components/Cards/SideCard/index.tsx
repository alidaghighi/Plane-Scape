const SideCard = () => {
  return (
    <div className="relative">
      <img
        alt="Car rentals image"
        className="rounded-lg"
        width={300}
        height={300}
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1521136095380-08fbd7be93c8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
        CAR RENTALS
      </div>
    </div>
  );
};

export default SideCard;
