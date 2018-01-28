'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/animations.css');

var _Holder = require('../../Holders/Holder5');

var _Holder2 = _interopRequireDefault(_Holder);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero2 = function (_Component) {
    _inherits(Hero2, _Component);

    function Hero2(props) {
        _classCallCheck(this, Hero2);

        var _this = _possibleConstructorReturn(this, (Hero2.__proto__ || Object.getPrototypeOf(Hero2)).call(this, props));

        _this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'contain 80%',
            width: props.width || '100%',
            height: props.height || 'inherit',
            bottomBoxWidth: props.bottomBoxWidth || '100%',
            bottomBoxHeight: props.bottomBoxHeight || '25%',
            bottomBoxPadding: props.bottomBoxPadding,
            bottomBoxBackgroundColor: props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)',
            heroid: props.heroid,
            bottomid: props.bottomid,
            heroClassName: props.heroClassName,
            bottomClassName: props.bottomClassName,
            childs: '',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(Hero2, [{
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
            var HEROSTYLE = {
                background: this.state.background,
                backgroundImage: this.state.backgroundImage,
                backgroundRepeat: this.state.backgroundRepeat,
                backgroundPosition: this.state.backgroundPosition,
                backgroundSize: this.state.backgroundSize,
                width: this.state.width,
                height: this.state.height,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
            };
            var BOTTOMBACKGROUND = {
                backgroundColor: this.state.bottomBoxBackgroundColor,
                width: this.state.bottomBoxWidth,
                height: this.state.bottomBoxHeight,
                padding: this.state.bottomBoxPadding,
                overflow: 'hidden'

            };
            return _react2.default.createElement(
                'div',
                { style: HEROSTYLE, id: this.state.heroid, className: this.state.heroClassName },
                _react2.default.createElement(
                    'div',
                    { style: BOTTOMBACKGROUND, id: this.state.bottomid, className: this.state.bottomClassName },
                    _react2.default.createElement(
                        _Holder2.default,
                        null,
                        this.state.childs[0]
                    )
                )
            );
        }
    }]);

    return Hero2;
}(_react.Component);

exports.default = Hero2;