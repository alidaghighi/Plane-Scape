import Header from "../../components/Header";
import FlightCard from "../../components/Cards/FlightCard";
import SideCard from "../../components/Cards/SideCard";
import SideFilter from "../../components/SideFilter";
import BookingPannel from "../../components/BookingPannel";


const Home = () => {

  return (
    <div className="p-6">
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-3">
          <BookingPannel />
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
            <div className="space-y-10">
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
