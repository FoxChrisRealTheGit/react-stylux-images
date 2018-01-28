import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/animations.css';
import Holder5 from '../../Holders/Holder5';

export default class Hero2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
        const BOTTOMBACKGROUND = {
            backgroundColor: this.state.bottomBoxBackgroundColor,
            width: this.state.bottomBoxWidth,
            height: this.state.bottomBoxHeight,
            padding: this.state.bottomBoxPadding,
            overflow: 'hidden',

        }
        return (
            <div style={HEROSTYLE} id={this.state.heroid} className={this.state.heroClassName}>
                <div style={BOTTOMBACKGROUND} id={this.state.bottomid} className={this.state.bottomClassName}>
                    <Holder5>
                        {this.state.childs[0]}
                    </Holder5>
                </div>
            </div>
        )
    }
}