const SideFilter = () => {
  return (
    <div className="p-6 rounded-lg  mb-6">
      <h2 className="text-lg font-bold mb-4">Sort by:</h2>
      <select className="w-full border rounded-lg p-2 mb-4">
        <option>Earliest Departure</option>
        <option>Latest Departure</option>
      </select>
      <h2 className="text-lg font-bold mb-4">Direction</h2>
      <div className="flex flex-col space-y-2 mb-4">
        <label className="flex items-center">
          <input type="radio" name="arrival-time" className="mr-2" />
          Departure
        </label>
        <label className="flex items-center">
          <input type="radio" name="arrival-time" className="mr-2" />
          Arrival
        </label>
      </div>
    </div>
  );
};

export default SideFilter;
