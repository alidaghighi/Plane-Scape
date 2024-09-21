const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <i className="fas fa-plane-departure text-violet-900 text-2xl mr-2"></i>
        <h1 className="text-xl font-bold">PLANE SCAPE</h1>
      </div>
      <nav className="flex items-center space-x-10">
        <div className="space-x-2">
        <i className="fa fa-tag text-violet-900" />
        <a href="#" className="text-gray-600">
          Deals
        </a>
        </div>
        <div className="space-x-2">
        <i className="fa fa-globe text-violet-900" />
        <a href="#" className="text-gray-600">
          Discover
        </a>
        </div>
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
