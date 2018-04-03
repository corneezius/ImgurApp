
// Import React
import React from 'react';
import ReactDOM from "react-dom";
// Create Component
const App = () => {
  return (
    <div>
      IMGUR APP
    </div>
  );
};
// Render Component
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
