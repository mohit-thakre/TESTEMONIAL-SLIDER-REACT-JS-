import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = ({ data }) => {
  const [item, setitem] = useState(0);

  function handleleftslide() {
    if (item - 1 < 0) {
      setitem(data.length - 1);
    } else {
      setitem(item - 1);
    }
  }
  function handlerightslide() {
    if (item + 1 >= data.length) {
      setitem(0);
    } else {
      setitem(item + 1);
    }
  }
  function surprice() {
    let random = Math.floor(Math.random() * data.length);
    setitem(random);
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className=" font-extrabold text-4xl text-violet-500 text-center">
          OUR TESTEMONIAL
        </h1>
        <div className="w-[40%] h-2 bg-violet-800"></div>
      </div>

      <Card
        data={data[item]}
        key={data.id}
        left={handleleftslide}
        right={handlerightslide}
        surprice={surprice}
      />
    </div>
  );
};

export default Cards;
