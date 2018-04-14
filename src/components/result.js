import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  getTotal = () => {
    if (this.store.getState().react) {
      const angular = this.store.getState().angular;
      const react = this.store.getState().react;
      const vuejs = this.store.getState().vuejs;

      const total = angular + react + vuejs;

      return total;
    }

    return 1;
  };

  percentageVote = () => {
    let key = this.props.dataKey;

    if (this.store.getState()[key]) {
      return this.store.getState()[key] / this.getTotal() * 100;
    }

    return 0;
  };

  render() {
    return (
      <div>
        <span className="label label-danger">
          {this.props.label}: {this.percentageVote().toFixed(0) + "%"}
        </span>
        <div className="progress">
          <div
            className={
              "progress-bar progress-bar-striped bg-" + this.props.color
            }
            style={{ width: this.percentageVote().toFixed(0) + "%" }}
          />
        </div>
      </div>
    );
  }
}

export default Result;
