import React from 'react';

const today = new Date();

function Today() {
  return (
    <div className="today">
      {today.toLocaleDateString('en-gb', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </div>
  );
}

export default Today;
