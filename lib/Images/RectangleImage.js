import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
/* Start of Regular Rectangle Image */
export default class RectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: '',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
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
        const IMAGE = StyleSheet.create({
            rectangleimg: {
                margin: '0 auto',
                animationIterationCount: this.state.animationIterationCount,
                animationTimingFunction: this.state.animationTimingFunction,
                animationName: this.state.animationName,
                animationDuration: this.state.animationDuration,
            },
            '@media screen and (max-width: 440px)': {
                rectangleimg: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                rectangleimg: {
                    display: this.state.mdDis,
                }
            },
        })
        return (
            <img style={IMAGE} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Regular Rectangle Image */