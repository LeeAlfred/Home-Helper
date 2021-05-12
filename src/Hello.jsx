import React from 'react';

const year = new Date();
const currentTime = year.getHours();

let greeting;

const customStyles = {
  color: ' ',
};

if (currentTime < 12) {
  greeting = 'Good Morning';
  customStyles.color = 'yellow';
} else if (currentTime < 18) {
  greeting = 'Good Afternoon';
  customStyles.color = 'green';
} else {
  greeting = 'Good Evening';
  customStyles.color = 'blue';
}

function Hello() {
  return (
    <div className="hello">
      <h1 style={customStyles}>{greeting}</h1>
      <h2>Welcome to Orpa's Home Helper App</h2>
    </div>
  );
}
export default Hello;
