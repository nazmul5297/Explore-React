import React from "react";
export default class FirstClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nazmul",
      date: new Date(),
      clock: this.props.clockType ? this.props.clockType : "bn-BD",
    };
  }

  clockChanger = () => {
    this.setState({
      clock: this.state.clock === "bn-BD" ? "en-US" : "bn-BD",
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.clock);
    return (
      <>
        <div className="container">
          <div className="logoArea">
            <h3>logo</h3>
          </div>
          <div className="nameArea">
            <h1>
              welcome mr.nazmul,{" "}
              {this.state.date.toLocaleTimeString(this.state.clock)}{" "}
            </h1>
            <button onClick={this.clockChanger}>Change Clock</button>
          </div>
        </div>
      </>
    );

    // return (

    // ): return (
  }
}
