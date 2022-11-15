import React, { Component } from 'react';

import classes from "./ConfermBox.module.css";

class ConfermBox extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`container-fluid position-fixed top-0 start-0 w-100 h-100 ${classes.back}`}></div>
                <div className={`w-75 px-5 py-3 bg-white position-fixed top-50 start-50 ${classes.card}`}>
                <header>Conferm</header>
                    <p className="p5">{this.props.massage}</p>
                    <footer>
                        <button onClick={this.props.confermTrue} className="btn btn-primary">Yes</button>
                        <button onClick={this.props.confermFalse} className="btn btn-primary">No</button>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}

export default ConfermBox;