import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/animations.css';
import Holder7 from '../../Holders/Holder7';
import Holder2 from '../../Holders/Holder2';

export class Hero5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
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
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder7>
                    {this.state.childs[0]}
                    <Holder2>
                        {this.state.childs[1]}
                        {this.state.childs[2]}
                        {this.state.childs[3]}
                    </Holder2>
                    <Holder2>
                        {this.state.childs[4]}
                        {this.state.childs[5]}
                        {this.state.childs[6]}
                    </Holder2>
                </Holder7>
            </div>
        )
    }
}