// first example

export const FirstComponent = () => {
  const date = new Date();
  return (
    <>
      <div className="container">
        <div className="logoArea">
          <h3>logo</h3>
        </div>
        <div className="nameArea">
          <h1>welcome mr.nazmul, {date.toLocaleTimeString()} </h1>
        </div>
      </div>
    </>
  );
};

export const FirstComponentWithProps = (props) => {
  console.log(props);
  const date = new Date();
  return (
    <>
      <div className="container">
        <div className="logoArea">
          <h3>logo</h3>
        </div>
        <div className="nameArea">
          <h1>
            welcome mr.nazmul, {date.toLocaleTimeString(props.timerName)}{" "}
          </h1>
        </div>
      </div>
    </>
  );
};
