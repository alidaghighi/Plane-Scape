const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6 w-full lg:w-[63.5vw]">
      <div className="flex items-center">
        <i className="fas fa-plane-departure text-violet-900 text-2xl mr-2"></i>
        <h1 className="text-xl font-bold">PLANE SCAPE</h1>
      </div>
      <nav className="flex items-center space-x-10">
        <div className="space-x-2">
        <i className="fa-solid fa-ticket-simple text-violet-900" />
        <a href="/" className="text-gray-600">
          Book a Flight
        </a>
        </div>
        <div className="space-x-2">
        <i className="fa-solid fa-plane-up text-violet-900" />
        <a href="/MyFlights" className="text-gray-600">
          My Flights
        </a>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/30x30"
            alt="User profile picture"
            className="rounded-full"
          />
          <span className="text-gray-600">User</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
