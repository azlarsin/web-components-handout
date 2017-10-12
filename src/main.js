/**
 * Created by azlar on 02/10/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Ripple from "@/Ripple";

import pages from "@/pages/Pages";

class App extends React.Component {
    constructor() {
        super();


        this.state = {
            ripples: new Map()
        };

        this.createRipple = this.createRipple.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
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


    createRipple(e) {

        e = arguments[1] || arguments[0];
        e.persist();

        let ripples = this.state.ripples,
            id = 'ripple-' + Date.now(),
            size = 50,
            rippleStyle = {};

        if(!arguments[1]) {

            if(this.context.router.route.location.pathname !== '/') {
                return ;
            }
            size = window.screen.width; // max(container.size)

            rippleStyle.backgroundColor = "#" + (~~(Math.random()*(1<<24))).toString(16);
            rippleStyle.opacity = Math.random();
        }else {

            rippleStyle.backgroundColor = "rgba(0, 0, 255, .2)";
            rippleStyle.opacity = .3;
        }

        ripples.set(id, {
            id: id,
            style: {
                top: e.pageY - size / 2,
                left: e.pageX - size / 2,
                width: size,
                height: size,
                ...rippleStyle
            }
        });

        this.setState({
            ripples: ripples
        });
    }

    handleRoute(action, e) {
        e.preventDefault();

        if(action === 'next'){
            let allNext = this.refs.content.querySelectorAll("section.next:not(.show)");
            if(allNext.length === 0) {
                let { router } = this.context,
                    { history, route } = router;

                if(route.location.pathname === '/') {

                    history.push("/1");
                }else {
                    let currentPageIndex = Number(route.location.pathname.slice(1));

                    currentPageIndex++;

                    // last page, maybe could route to a specify path like '/end'
                    if(currentPageIndex > pages.length) {

                        return ;
                    }

                    history.push("/" + currentPageIndex);
                }
            }else {
                allNext[0].classList.add("show");
            }
        }

        if(action === 'prev') {
            let allPrev = this.refs.content.querySelectorAll("section.next.show");
            if(allPrev.length === 0) {
                let { router } = this.context,
                    { history, route } = router;

                if(route.location.pathname === '/') {

                    return ;
                }else {
                    let currentPageIndex = Number(route.location.pathname.slice(1));

                    if(currentPageIndex === 1) {
                        history.push("/");
                    }else {

                        currentPageIndex--;

                        history.push("/" + currentPageIndex);
                    }
                }
            }else {
                allPrev[allPrev.length - 1].classList.remove("show");
            }
        }

        // // clear all ripple
        // setTimeout(() => {
        //     this.setState({
        //         ripples: new Map()
        //     })
        // }, 2000);
    }

    render() {
        let ripples = Array.from(this.state.ripples.values());
        return (

            <div className={ "panel" } onMouseDown={ this.createRipple } >
                {
                    ripples.map(ripple => <Ripple { ...ripple } key={ "ripple-index-" + ripple.id } />)
                }

                <div className={ "content" } ref={ "content" }>
                    <Route exact={ true } path={ '/' } render={ () => (
                        <h1>~~</h1>
                    ) } />

                    {
                        pages.map((page, index) => <Route path={ '/' + (index + 1) } key={ "route-page-" + index } component={ page } />)
                    }
                </div>

                <aside className={ "control" } onMouseMove={ this.createRipple.bind("move", this) }>
                    <svg width={60} height={40} viewBox={ "0 0 60 40" } onClick={ this.handleRoute.bind(this, 'prev') }>
                        <path d={ "M5 20 L50 20 L30 9 M50 20 L30 31" } stroke={ "rgba(0,0,255, .4)" } strokeWidth={5} fill={ "transparent" } strokeLinecap={ "round" }/>
                    </svg>

                    <svg width={60} height={40} viewBox={ "0 0 60 40" } onClick={ this.handleRoute.bind(this, 'next') }>
                        <path d={ "M5 20 L50 20 L30 9 M50 20 L30 31" } stroke={ "rgba(0,0,255, .4)" } strokeWidth={5} fill={ "transparent" } strokeLinecap={ "round" }/>
                    </svg>
                </aside>
            </div>
        );
    }

}

App.childContextTypes = {
    clearRipple: PropTypes.func
};

App.contextTypes = {
    router: PropTypes.object
};

require('./css/main.scss');

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('qwe')
);