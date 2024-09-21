const FlightCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Milano - Madrid</h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <i className="fas fa-plane-departure"></i>
            <span>Departure</span>
            <span>7:30 AM</span>
            <span>Airport: MXP</span>
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm text-gray-600">2h 25m (Nonstop)</span>
          <div className="text-lg font-semibold text-green-600">Alitalia</div>
        </div>
        <div>
          <div className="flex items-center space-x-2 text-gray-600">
            <i className="fas fa-plane-arrival"></i>
            <span>Arrival</span>
            <span>9:55 AM</span>
            <span>Airport: MAD</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-4">
          <a className="text-violet-900" href="#">
            Check the details
          </a>
        </div>
        <button className="bg-violet-900 text-white px-6 py-3 rounded-lg">
          Book Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
