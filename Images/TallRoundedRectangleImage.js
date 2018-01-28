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

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Tall Rounded Rectangle Image */
var TallRoundedRectangleImage = function (_Component) {
    _inherits(TallRoundedRectangleImage, _Component);

    function TallRoundedRectangleImage(props) {
        _classCallCheck(this, TallRoundedRectangleImage);

        var _this = _possibleConstructorReturn(this, (TallRoundedRectangleImage.__proto__ || Object.getPrototypeOf(TallRoundedRectangleImage)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(TallRoundedRectangleImage, [{
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
            var TALLROUNDEDRECTANGLEIMG = _nestingstyles2.default.create({
                tallroundedrectangleimg: {
                    borderRadius: "30%",
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration
                },
                '@media screen and (max-width: 440px)': {
                    tallroundedrectangleimg: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                    tallroundedrectangleimg: {
                        display: this.state.mdDis
                    }
                }
            });
            return _react2.default.createElement('img', { style: TALLROUNDEDRECTANGLEIMG.tallroundedrectangleimg, id: this.state.id, className: 'tallrecimg-' + this.state.size + ' ' + this.state.className, src: this.state.childs[0], alt: this.state.childs[1] });
        }
    }]);

    return TallRoundedRectangleImage;
}(_react.Component);
/* End of Tall Rounded Rectangle Iage */


exports.default = TallRoundedRectangleImage;