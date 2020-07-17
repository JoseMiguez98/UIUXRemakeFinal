import React, { Component } from 'react';
import { connect } from 'react-redux';
import { times } from 'lodash';
import { fetchHighScoresRequest } from '../../redux/actions';
import LoaderBox from '../LoaderBox';

const HighScore = ({ img, user, rank }) => (
  <div className="highscore">
    <div className="highscore__rank">
      <h3>#{rank}</h3>
    </div>
    <div className="highscore__avatar">
      <img src={img} alt="user-avatar"/>
    </div>
    <div className="highscore__username">
      <h3 className="highscore__username__text">{user}</h3>
    </div>
  </div>
);

class HighScores extends Component {
  componentDidMount() {
    const { fetchRequest, amount } = this.props;
    fetchRequest(amount);
  }

  buildHighscores() {
    const { elems, amount, SUCCESS, PENDING, ERROR } = this.props;

    return SUCCESS ?
    elems.map((score, index) => (
        <HighScore key={index} img={score.picture} user={score.user} rank={index+1}/>
    )) : PENDING ?
      times(amount, () => <LoaderBox/>) : ERROR ?
      <center><h4>Se produjo un error intente de nuevo mas tarde...</h4></center>:""
  }

  render() {
    return (
      <div className="highscores-wrapper">
        <h2 className="highscores-wrapper__title col-12">High-Scores</h2>
        <div className="highscores-wrapper__scores col-12">
          { this.buildHighscores() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ highScores }) => {
  const { elems, PENDING, SUCCESS, ERROR } = highScores;
  return { elems, PENDING, SUCCESS, ERROR };
};

const mapDispatchToProps = dispatch => ({
  fetchRequest: amount => dispatch(fetchHighScoresRequest(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);
