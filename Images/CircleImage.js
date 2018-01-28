'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleImage = function (_Component) {
    _inherits(CircleImage, _Component);

    function CircleImage(props) {
        _classCallCheck(this, CircleImage);

        var _this = _possibleConstructorReturn(this, (CircleImage.__proto__ || Object.getPrototypeOf(CircleImage)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur
        };
        return _this;
    }

    _createClass(CircleImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'render',
        value: function render() {
            var _CIRCLEIMG;

            var CIRCLEIMG = (_CIRCLEIMG = {
                borderRadius: "100%",
                overflowX: 'hidden',
                overflowY: 'hidden'
            }, _defineProperty(_CIRCLEIMG, 'borderRadius', "100%"), _defineProperty(_CIRCLEIMG, 'animationIterationCount', this.state.animationIterationCount), _defineProperty(_CIRCLEIMG, 'animationTimingFunction', this.state.animationTimingFunction), _defineProperty(_CIRCLEIMG, 'animationName', this.state.animationName), _defineProperty(_CIRCLEIMG, 'animationDuration', this.state.animationDuration), _CIRCLEIMG);
            return _react2.default.createElement('img', { style: CIRCLEIMG, id: this.state.id, className: 'img-' + this.state.size + ' ' + this.state.className, src: this.state.childs[0], alt: this.state.childs[1] });
        }
    }]);

    return CircleImage;
}(_react.Component);

exports.default = CircleImage;