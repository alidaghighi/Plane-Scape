import { useEffect } from "react";
import Header from "../../components/Header";
import FlightCard from "../../components/Cards/FlightCard";
import SideCard from "../../components/Cards/SideCard";


const plane = <i className="fas fa-plane"></i>;


const Home = () => {
  useEffect(() => {
    document.title = "Plane Scape";
  }, []);



  return (
    <div className="p-6">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-lg font-bold mb-4">{plane} BOOK YOUR FLIGHT</h2>
            <div className="flex items-center space-x-4 mb-4 flex-wrap">
              <div className="flex items-center border rounded-lg p-2 flex-1">
                <i className="fas fa-plane-departure text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="From"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-2 flex-1">
                <i className="fas fa-plane-arrival text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="To"
                  className="flex-1 outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-2">
                <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Departure"
                  className="outline-none"
                />
              </div>
              <div className="flex items-center border rounded-lg p-2">
                <i className="fas fa-calendar-alt text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Return"
                  className="outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                Show flights
              </button>
            </div>
          </div>
          <section className="flex justify-between">
            <div className="lg:w-3/4">
              <FlightCard />
              <FlightCard />
              <FlightCard />
            </div>
            <aside className="lg:w-1/4">
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
            </aside>
          </section>
        </section>
        <aside className="lg:-col-start-1">
            <div className="space-y-6">
                <SideCard />
                <SideCard />
                <SideCard />
            </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
