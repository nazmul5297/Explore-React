import React from "react";
export default class FirstClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nazmul",
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="logoArea">
            <h3>logo</h3>
          </div>
          <div className="nameArea">
            <h1>
              welcome mr.nazmul,{" "}
              {this.state.date.toLocaleTimeString(this.props.timerName)}{" "}
            </h1>
          </div>
        </div>
      </>
    );
  }
}
