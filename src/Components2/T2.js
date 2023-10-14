import React, { Component } from "react";

class T2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleClick = (value) => {
    if (value === "=") {
      this.calculate();
    } else if (value === "C") {
      this.clear();
    } else if (value === "←") {
      this.backspace();
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  calculate = () => {
    try {
      const result = eval(this.state.input);
      this.setState({ output: result });
    } catch (error) {
      this.setState({ output: "Error" });
    }
  };

  clear = () => {
    this.setState({ input: "", output: "" });
  };

  backspace = () => {
    this.setState({ input: this.state.input.slice(0, -1) });
  };
  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input
            className="input"
            type="text"
            value={this.state.input}
            readOnly
          />
          <input
            className="output"
            type="text"
            value={this.state.output}
            readOnly
          />
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button onClick={() => this.handleClick("/")}>/</button>
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button onClick={() => this.handleClick("*")}>*</button>
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button onClick={() => this.handleClick("-")}>-</button>
          <button onClick={() => this.handleClick("0")}>0</button>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button onClick={() => this.handleClick("=")}>=</button>
          <button onClick={() => this.handleClick("+")}>+</button>
          <button onClick={() => this.handleClick("C")}>C</button>
          <button onClick={() => this.handleClick("←")}>←</button>
        </div>
      </div>
    );
  }
}

export default T2;