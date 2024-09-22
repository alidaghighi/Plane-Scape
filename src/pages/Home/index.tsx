import Header from "../../components/Header";
import FlightCard from "../../components/Cards/FlightCard";
import SideCard from "../../components/Cards/SideCard";
import SideFilter from "../../components/SideFilter";
import BookingPanel from "../../components/BookingPanel";


const Home = () => {

  return (
    <div className="mt-5">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-3">
          <BookingPanel />
          <section className="flex justify-between">
            <div className="lg:w-3/4 space-y-10 overflow-y-scroll overflow-x-hidden lg:max-h-[60vh]">
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
            </div>
            <aside className="lg:w-1/4">
              <SideFilter />
            </aside>
          </section>
        </section>
        <aside className="lg:-col-start-1">
            <div className="space-y-7">
                <SideCard
                  title="CAR RENTALS"
                  icon="fa-solid fa-car-rear text-4xl"
                  src="https://images.unsplash.com/photo-1521136095380-08fbd7be93c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <SideCard
                  title="HOTELS"
                  icon="fas fa-hotel text-4xl"
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <SideCard
                  title="TRAVEL PACKAGES"
                  icon="fa-solid fa-umbrella-beach text-4xl"
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  classNameOverlay="bg-lime-500 bg-opacity-15 absolute inset-0"
                />
            </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
