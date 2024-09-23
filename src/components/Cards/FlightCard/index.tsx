const FlightCard = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm relative">
        <h3 className="text-lg font-semibold">Milano - Madrid</h3>
        <div className="flex justify-between items-center mb-4 mt-4">
          <div>
            <div className="flex-col items-center space-y-0 text-gray-600">
              <div className="font-light">
                <i className="fas fa-plane-departure mr-2 text-sm" />
                <span>Departure</span>
              </div>
              <div className="font-bold">7:30 AM</div>
              <div className="font-light">Airport: MXP</div>
            </div>
          </div>
          <div className="border-t border-gray-900 w-12" />
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600">Alitalia</div>
            <i className="fas fa-plane text-violet-800" />
            <div className="text-sm font-light text-gray-600">2h 25m</div>
          </div>
          <div className="border-t border-gray-900 w-12" />
          <div>
            <div className="flex-col items-center space-x-2 text-gray-600">
              <div className="font-light">
                <i className="fa fa-plane-arrival mr-2 text-sm" />
                <span>Departure</span>
              </div>
              <div className="font-bold">9:55 AM</div>
              <div className="font-light">Airport: MAD</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-20">
          <button
            className="h-16 absolute bottom-0 right-0 transition ease-in-out duration-100 
            bg-violet-900 text-white px-6 py-3 rounded-tl-lg rounded-br-lg 
            hover:bg-violet-600 hover:shadow-md active:bg-violet-700"
          >
            Book Flight
          </button>
        </div>
      </div>
      <button
        className="
          w-1/4 flex justify-center items-center bg-violet-100 text-violet-900
          p-3 rounded-b-lg text-sm transition ease-in-out duration-100
        hover:bg-violet-500 hover:shadow-md hover:text-violet-50
        active:bg-violet-600"
      >
        Check the details
      </button>
    </div>
  );
};

export default FlightCard;
