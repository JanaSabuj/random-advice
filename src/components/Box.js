import React from "react";
import { connect } from "react-redux";
import { getAdvice } from "../store/actions/getAdvice";

class Box extends React.Component {
  handleClick = e => {
    // console.log("Click me senpai");
    this.props.getAdvice("let us fetch advice from api");
  };

  render() {
    const { advice } = this.props;
    return (
      <div className="row">
        <div className="col s0 m3"> </div>
        <div className="col s12 m6">
          <div className="card grey lighten-5 hoverable">
            <div className="card-content black-text">
              <span className="card-title">
                <i className="material-icons">fingerprint</i>
              </span>
              <p style={{ fontFamily: "Cairo", fontSize: "20px" }}>{advice}</p>
            </div>
            <div className="card-action">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={this.handleClick}
              >
                ILLUMINATE
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
        <div className="col s0 m3"> </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    advice: state.adviceRoot.advice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdvice: dummy => dispatch(getAdvice(dummy))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Box);
