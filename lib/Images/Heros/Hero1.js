import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/animations.css';
import Holder7 from '../../Holders/Holder7';

export default class Hero1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height || 'inherit',
            id: props.id,
            className: props.className,
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
            alignItems: 'center',
            justifyContent: 'center',

        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder7>
                    {this.state.childs[0]}
                    {this.state.childs[2]}
                    {this.state.childs[1]}
                </Holder7>
            </div>
        )
    }
}