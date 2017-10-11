/**
 * Created by azlar on 02/10/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Ripple from "@/Ripple";

class App extends React.Component {
    constructor() {
        super();


        this.state = {
            ripples: new Map()
        };

        this.handleClick = this.handleClick.bind(this);
    }

    getChildContext() {
        return {
           clearRipple: id => {
               let ripples = this.state.ripples;
               ripples.delete(id);

               this.setState({
                   ripples: ripples
               })
           }
        };
    }


    handleClick(e) {
        let panelStyle = window.getComputedStyle(e.currentTarget),
            size = Math.max(parseInt(panelStyle.width), parseInt(panelStyle.height));

        let ripples = this.state.ripples,
            id = 'ripple-' + new Date().getTime();


        ripples.set(id, {
            id: id,
            style: {
                top: e.pageY - size / 2,
                left: e.pageX - size / 2,
                width: size,
                height: size,
                backgroundColor: "#" + (~~(Math.random()*(1<<24))).toString(16),
                opacity: Math.random()
            }
        });

        this.setState({
            ripples: ripples
        })
    }

    render() {
        let ripples = Array.from(this.state.ripples.values());
        return (
            <div className={ "panel" } onClick={ this.handleClick }>
                {
                    ripples.map(ripple => <Ripple { ...ripple } key={ "ripple-index-" + ripple.id } />)
                }


                <aside className={"control"}>
                    <svg width={60} height={40} viewBox={"0 0 60 40"} className={"prev"}>
                        <path d={"M5 20 L50 20 L30 9 M50 20 L30 31"} stroke={"rgba(0,0,255, .4)"} strokeWidth={5} fill={ "transparent" } strokeLinecap={"round"}/>
                    </svg>

                    <svg width={60} height={40} viewBox={"0 0 60 40"} className={"next"}>
                        <path d={"M5 20 L50 20 L30 9 M50 20 L30 31"} stroke={"rgba(0,0,255, .4)"} strokeWidth={5} fill={ "transparent" } strokeLinecap={"round"}/>
                    </svg>
                </aside>



            </div>
        );
    }

}

App.childContextTypes = {
    clearRipple: PropTypes.func
};


require('./css/main.scss');

ReactDOM.render(
    <App/>,
    document.getElementById('qwe')
);