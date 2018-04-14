import React from "react"
import { voteAngular, voteReact, voteVuejs } from "./actions"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular())
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact())
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs())
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <h2>What is your Favourite Front-end framework</h2>
          <br />
          <button
            className="btn btn-lg btn-default"
            onClick={this.handleVoteAngular}
          >
            Angular
          </button>
          <button
            className="btn btn-lg btn-primary"
            onClick={this.handleVoteReact}
          >
            React
          </button>
          <button
            className="btn btn-lg btn-danger"
            onClick={this.handleVoteVuejs}
          >
            VueJS
          </button>
        </div>
      </div>
    );
  }
}

export default App;
