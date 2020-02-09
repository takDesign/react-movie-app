import React, { Component } from "react";
import { connect } from "react-redux";

class SecondPage extends Component {
    render() {
        return (
            <div>
                <p>Second page with your input below.</p>
                <p>{this.props.text.text}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text
});

export default connect(mapStateToProps)(SecondPage);
