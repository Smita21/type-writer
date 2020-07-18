import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
import Preview from "./Preview";
import Speed from "./Speed";
import { getText } from "../redux";

const initialState = {
  //   text: this.props.text,
  text: "",
  userInput: "",
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
  errorWords: 0,
};
export class ItemContainer extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  };

  componentDidMount() {
    this.setState({
      text: this.props.text,
    });
  }

  onUserInputChange = (e) => {
    const value = e.target.value;
    this.setTimer();
    this.onFinish(value);
    let errorWords = this.compareWords(this.state.text, value);
    this.setState({
      userInput: value,
      symbols: this.countCorrectSymbols(value),
      errorWords,
    });
  };

  compareWords = (userInput, originalText) => {
    let word1 = originalText.split(" ");
    let word2 = userInput.split(" ");
    let count = 0;
    word1.forEach(function (item, index) {
      if (item == word2[index]) {
        count++;
      }
    });
    let errorWords = word1.length - count - 1;
    return errorWords;
  };
  setTimer = () => {
    if (!this.state.started) {
      this.setState({ started: true });
      this.interval = setInterval(() => {
        this.setState((prevProps) => {
          return { sec: prevProps.sec + 1 }; //check
        });
      }, 1000);
    }
  };

  onFinish = (userInput) => {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({ finished: true });
    }
  };

  countCorrectSymbols = (userInput) => {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  };

  render() {
    return (
      <div>
        <Preview text={this.state.text} userInput={this.state.userInput} />
        <textarea
          value={this.state.userInput}
          onChange={this.onUserInputChange}
          readOnly={this.state.finished || this.state.sec > 60}
          placeholder="Start Typing"
        ></textarea>
        <span>Time : {this.state.sec}</span>
        <span>Error : {this.state.errorWords}</span>
        <Speed symbols={this.state.symbols} sec={this.state.sec} />
        <button onClick={this.onRestart}>Restart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.typewriter.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getText: () => dispatch(getText()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
