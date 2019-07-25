import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, createState } from "./Actions";

function mapStateToProps(state) {
  return {
    count: state.count,
    text: state.text,
    stateArr: state.stateArr
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  createState
};

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  handleAdd = () => {
    console.log(this.props.stateArr);
    const num = this.props.count;
    const text = this.props.text;
    let newState = {
      num: num,
      text: text
    };
    this.props.createState(newState);
  };

  render() {
    return (
      <div>
        <div className="counter">
          <h2>Counter</h2>
          <div>
            <button onClick={this.handleAdd}>A</button>
            <button onClick={this.decrement}>-</button>
            <span className="count">{this.props.count}</span>
            <button onClick={this.increment}>+</button>
            <button onClick={this.reset}>R</button>
          </div>
          <div>
            <h1>{this.props.text}</h1>
          </div>
        </div>
        {!this.props.stateArr.length == 0 ? (
          <h1>{this.props.stateArr[this.props.stateArr.length - 1].num}</h1>
        ) : null}
        {!this.props.stateArr.length == 0 ? (
          <h1>{this.props.stateArr[this.props.stateArr.length - 1].text}</h1>
        ) : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
