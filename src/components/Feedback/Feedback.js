import { Component } from 'react';
import PropTypes from 'prop-types';
import Options from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Sections from '../Statistics/Statistics';

class Feedback extends Component {
  static propTypes = {
    valueGood: PropTypes.number,
    valueNeutral: PropTypes.number,
    valueBad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
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
        <Section title={'Please leave feedback'}>
          <Options handleIncrement={this.handleIncrement} />
        </Section>

        <Section title={'Statistics'} />
        <Sections
          Good={this.state.good}
          Neutral={this.state.neutral}
          Bad={this.state.bad}
          Total={this.countTotalFeedback()}
          feedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;

// hendleGood = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };
// hendleNeutral = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };
// hendleBad = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };
