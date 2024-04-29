import React from "react";
import data from "./data";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-400">
      <Cards data={data} />
    </div>
  );
};

export default App;
