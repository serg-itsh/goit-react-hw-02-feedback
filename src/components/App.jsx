import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

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

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => (acc += el), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          option={Object.keys(this.state)}
          onHandleClickGood={this.handleClickGood}
          onHandleClickNeutral={this.handleClickNeutral}
          onHandleClickBad={this.handleClickBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        >
          {/* <h1>Statistics</h1>
        <div className="text">
          <p> Good: {good}</p>
          <p> Neutral: {neutral}</p>
          <p> Bad: {bad}</p>
          <p> Total: {this.countTotalFeedback()}</p>
          <p> Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div> */}
        </Statistics>
      </>
    );
  }
}
