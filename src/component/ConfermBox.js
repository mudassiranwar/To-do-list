import React, { Component } from 'react';

class ConfermBox extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container bg-white">
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