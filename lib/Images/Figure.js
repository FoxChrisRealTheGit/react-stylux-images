import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
/* Start of Figure Blocks */
export default class Figure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            figid: props.figid,
            figCapid: props.figCapid,
            figClassName: props.figClassName,
            figCapClassName: props.figCapClassName,
            childs: '',
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
        const CAPTION = StyleSheet.create({
            caption: {
                padding: '10px',
                color: 'gray',
                textAlign: 'center',
            },
            '@media screen and (max-width: 440px)': {
                caption: {
                    display: this.state.smDis,
                    fontSize: '6em'
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 1200px)': {
                caption: {
                    display: this.state.mdDis,
                    fontSize: '6em'
                }
            },
        })
        return (
            <figure id={this.state.figid} className={this.state.figClassName}>
                {this.state.childs[0]}
                <figcaption style={CAPTION.caption} id={this.state.figCapid} className={this.state.figCapClassName}>
                    {this.state.childs[1]}
                </figcaption>
            </figure>
        )
    }
}
