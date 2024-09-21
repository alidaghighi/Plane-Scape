const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <i className="fas fa-plane-departure text-purple-600 text-2xl mr-2"></i>
        <h1 className="text-xl font-bold">PLANE SCAPE</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-600">
          Deals
        </a>
        <a href="#" className="text-gray-600">
          Discover
        </a>
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/30x30"
            alt="User profile picture"
            className="rounded-full"
          />
          <span className="text-gray-600">Joane Smith</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
