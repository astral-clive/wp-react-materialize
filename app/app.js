// don't forget to run preprocessor
// https://reactjs.org/docs/add-react-to-a-website.html#run-jsx-preprocessor
// npx babel --watch app/src --out-dir app/prod --presets react-app/prod 
// on root of theme

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleNameChange = function (e) {
      if (_this.state.name !== 'Octavia') {
        _this.setState({ name: 'Octavia' });
      } else {
        _this.setState({ name: 'Flint' });
      }
    };

    _this.state = {
      name: 'Click'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      // if (this.state.liked) {
      //   return 'You liked this.';
      // }

      return React.createElement(
        'button',
        {
          className: 'waves-effect waves-light btn',
          onClick: this.handleNameChange },
        this.state.name
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);