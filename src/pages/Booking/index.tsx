import FlightCard from "../../components/Cards/FlightCard";
import SideCard from "../../components/Cards/SideCard";
import SideFilter from "../../components/SideFilter";
import BookingPanel from "../../components/BookingPanel";
import { instance } from "../../api";
import axios from 'axios';
import { useEffect, useState } from "react";

const Booking = () => {
  const [sort, setSort] = useState("+scheduleTime");
  const [page, setPage] = useState(0);
  const [fromDateTime, setFromDateTime] = useState("2024-01-01T00:00:00");
  const [toDateTime, setToDateTime] = useState("2024-01-02T00:00:00");
  
  // curl -X GET --header "Accept: application/json" --header "app_id: 59790048" --header "app_key: daf451acbc820d87d1e9bf7d57618f82" --header "ResourceVersion: v4" "https://api.schiphol.nl/public-flights/flights?flightDirection=A&includedelays=true&page=0&sort=%2BscheduleTime&fromDateTime=2024-01-01T00%3A00%3A00&toDateTime=2024-01-02T00%3A00%3A00"


  useEffect(() => {
    // instance
    //   .get(
    //     // `/flights?flightDirection=A&includedelays=true&page=${page}&sort=${sort}&fromDateTime=${fromDateTime}&toDateTime=${toDateTime}`
    //     "https://api.schiphol.nl/public-flights/flights?flightDirection=A&includedelays=true&page=0&sort=%2BscheduleTime&fromDateTime=2024-01-01T00%3A00%3A00&toDateTime=2024-01-02T00%3A00%3A00"
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    

axios.get('https://api.schiphol.nl/public-flights/flights', {
  params: {
    flightDirection: 'A',
    includedelays: true,
    page: 0,
    sort: '+scheduleTime',
    fromDateTime: '2024-01-01T00:00:00',
    toDateTime: '2024-01-02T00:00:00'
  },
  headers: {
    Accept: 'application/json',
    app_id: '59790048',
    app_key: 'daf451acbc820d87d1e9bf7d57618f82',
    ResourceVersion: 'v4'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
    
  }, [sort, page, fromDateTime, toDateTime]);

  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-3">
          <BookingPanel />
          <section className="flex justify-between">
            <div className="lg:w-3/4 space-y-10 overflow-y-scroll overflow-x-hidden lg:max-h-[60vh] pr-2">
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
    </>
  );
};

export default Booking;
