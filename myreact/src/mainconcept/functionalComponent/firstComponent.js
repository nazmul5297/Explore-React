import React, { useEffect, useState } from "react";

export default function FirstFunctionalComponent(props) {
  const [date, setDate] = useState(new Date());
  const [clock, setClock] = useState(
    props.clockType ? props.clockType : "bn-BD"
  );

  const clockChanger = () => {
    console.log(clock);
    setClock(clock === "bn-BD" ? "en-US" : "bn-BD");
  };

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    });
  }, [clock]);

  return (
    <>
      <div className="container">
        <div className="logoArea">
          <h3>logo</h3>
        </div>
        <div className="nameArea">
          <h1>welcome mr.nazmul, {date.toLocaleTimeString(clock)} </h1>
          <button onClick={clockChanger}>Change Clock</button>
        </div>
      </div>
    </>
  );
}
