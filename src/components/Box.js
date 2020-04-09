import React from "react";

const Box = () => {
  return (
    <div className="row">
      <div className="col s0 m3"> </div>
      <div className="col s12 m6">
        <div className="card grey lighten-5 hoverable">
          <div className="card-content black-text">
            <span className="card-title">
              <i className="material-icons">fingerprint</i>
            </span>
            <p style={{ fontFamily: "Cairo", fontSize: "20px" }}>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
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
};

export default Box;
