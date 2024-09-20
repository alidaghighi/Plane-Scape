import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Plane Scape";
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-4xl font-bold">Welcome to Plane Scape</h1>
      <p className="mt-4">
        This is a simple web application that allows you to search for planes
      </p>
    </div>
  );
};

export default Home;
