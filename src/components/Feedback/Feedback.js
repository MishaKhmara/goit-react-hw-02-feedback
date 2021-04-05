import React from 'react';
import Options from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Sections from '../Statistics/Statistics';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  hendleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  hendleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    } else return 0;
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Options
          onGood={this.hendleGood}
          onNeutral={this.hendleNeutral}
          onBad={this.hendleBad}
        />
        <Section
          title={'Statistics'}
          children={
            <Sections
              Good={this.state.good}
              Neutral={this.state.neutral}
              Bad={this.state.bad}
              Total={this.countTotalFeedback()}
              feedback={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </div>
    );
  }
}

export default Feedback;
