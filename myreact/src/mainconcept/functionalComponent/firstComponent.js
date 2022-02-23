import React, { useEffect, useState } from "react";

export default function FirstFunctionalComponent(props) {
  const [date, setDate] = useState(new Date());
  const [clock, setClock] = useState(
    props.clockType ? props.clockType : "bn-BD"
  );

  //component did mount
  // component did update
  // component will unmount

  const clockChanger = () => {
    console.log(clock);
    setClock(clock === "bn-BD" ? "en-US" : "bn-BD");
  };

  // uncomment this to see the effect of componentDidUpdate

  // useEffect(() => {
  //   setInterval(() => {
  //     setDate(new Date());
  //   });
  // }, [clock]);

  // uncomment this to see the effect of componentDidMount
  // useEffect(() => {
  //   setInterval(() => {
  //     setDate(new Date());
  //   });
  // }, []);

  // This section is to show the componentDidUpdate with componentwillUnmount

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      console.log(`the time is : ${date.toLocaleTimeString(clock)}`);
    }, 1000);

    return () => {
      console.log("clearing interval");
      clearInterval(interval);
    };
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
