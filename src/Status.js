import React from 'react';
import PropTypes from 'prop-types';

export default  function Status(props) {
  const {status} = props;

  if (status === 'work') {
    return (
      <h2 className='Status'>{"It's time to work!!!"}</h2>
    );
  }

  if (status=== 'stoppedWork') {
    return (
      <h2 className='Status'>Work Paused</h2>
    );
  }

  if (status === 'break') {
    return (
      <h2 className='Status'>{"It's Time for a Break!!"}</h2>
    );
  }

  if (status === 'stopppedBreak') {
    return (
      <h2 className='Status'>Break Pause</h2>
    );
  }
}


Status.PropTypes = {
  status: PropTypes.string.isRequired,
};