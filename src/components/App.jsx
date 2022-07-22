import React, { Component } from 'react';
import { FeedbackList } from './FeedbackList/FeedbackList';

export class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handleClick = () => {
  //   this.setState({ good: this.state.counter + 1 });
  // }

  handleClickGood = event => {
    console.log(event.target);
    // const { name } = event.target;
    this.setState(prevState => {
      return {
        // [name]: preVal[name] + 1
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = event => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBad = event => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        {/* <FeedbackList option={option} /> */}
        <FeedbackList
          option={Object.keys(this.state)}
          onHandleClickGood={this.handleClickGood}
          onHandleClickNeutral={this.handleClickNeutral}
          onHandleClickBad={this.handleClickBad}
        />
        {/* <Statistic> */}
        <h1>Statistics</h1>
        <div className="text">
          <p> Good: {good}</p>
          <p> Neutral: {neutral}</p>
          <p> Bad: {bad}</p>
        </div>
        {/* </Statistic> */}
      </>
    );
  }
}
