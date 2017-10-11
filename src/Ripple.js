/**
 * Created by azlar on 11/10/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Ripple extends React.Component {
    constructor(props) {
        super(props);

        this.handleRippleTransitionEnd = this.handleRippleTransitionEnd.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.refs.d.classList.add("ripple-animate");
        }, 0);
    }

    handleRippleTransitionEnd(e) {
        let { clearRipple } = this.context;

        clearRipple(this.props.id);
    }

    render() {
        let style = {
            ...this.props.style,
            transitionDuration: 1.5 + Math.random() + 's'
        };
        return (
            <div className={ "ripple" } style={ style } onTransitionEnd={ this.handleRippleTransitionEnd } ref={"d"} />
        );
    }
}

Ripple.contextTypes = {
    clearRipple: PropTypes.func
};

export default Ripple;