// This is the first page
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/action";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleClick() {
        this.props.onClick(this.state.text);
        this.props.history.push("/second");
    }

    render() {
        return (
            <div>
                First page
                <br />
                <input
                    type='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                ></input>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}>Move to second page</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text.text
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(text) {
            dispatch(actions.inputText(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
