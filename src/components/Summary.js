import React from 'react';
import PropTypes from 'prop-types';

function Summary(props) {
  // let timeElapsed = props.time_played
  // console.log(timeElapsed);
  return (
    <section>
      <p>Great job!</p>
      <p>Notes played correctly: </p>
      <p>Notes skipped: </p>
      <p>Time played: {props.time_played}</p>
      <button className="button mt-1" onClick={props.restartGameCallback}>play again</button>
    </section>
  )
}

Summary.propTypes = {
  notesPlayedCorrectly: PropTypes.number.isRequired,
  notesSkipped: PropTypes.number.isRequired,
  timePlayed: PropTypes.string.isRequired,
  restartGameCallback: PropTypes.func.isRequired
}

export default Summary;
