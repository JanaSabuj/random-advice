import React from "react";

const Version = () => {
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
              App version 1.0.0
            </p>
            <p style={{ fontFamily: "Cairo", fontSize: "20px" }}>
              Built by{" "}
              <span
                style={{ fontFamily: "Shadows Into Light", fontSize: "30px" }}
              >
                Sabuj Jana{" "}
              </span>
              <span>
                <i className="tiny material-icons">copyright</i>
              </span>
              2020
            </p>
          </div>
          <div className="card-action">
            <form
              action="https://github.com/JanaSabuj/random-advice"
              target="_blank"
            >
              <button className="btn waves-effect waves-light">
                GITHUB
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col s0 m3"> </div>
    </div>
  );
};

export default Version;
