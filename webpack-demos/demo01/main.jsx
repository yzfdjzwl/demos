const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./app.css');
const big = require('./big.png');
const small = require('./small.png');

class App extends React.Component {
  componentWillMount() {
    if (__DEV__) {
      console.log('This is development environment...');
    }
  }

  render() {
    return (
      <div>
        <div className={style.color}>Hello, World</div>
        <div className="color-test">Hello, World</div>
        <div>
          <img src={big} />
          <img src={small} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#warpper'),
);
