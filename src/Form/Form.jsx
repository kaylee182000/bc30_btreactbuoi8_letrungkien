import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      svInfo: {...this.props.QLSVreducer.svInfo},
    };
    this.props.dispatch(action);
  };
  render() {
    let { id, name, tel, email } = this.props.QLSVreducer.svInfo;
    return (
      <form className="card mb-5 mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark">
          <h3 className="text-center text-white">Thong tin sinh vien</h3>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group mt-3">
              <p>Ma SV</p>
              <input
                value={id}
                className="form-control"
                id="id"
                name="id"
                onChange={(e) => {
                  const action = {
                    type: "HANDLE_CHANGE_INPUT",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <p>SDT</p>
              <input
                value={tel}
                className="form-control"
                id="tel"
                name="tel"
                onChange={(e) => {
                  const action = {
                    type: "HANDLE_CHANGE_INPUT",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3">
              <p>Ten</p>
              <input
                value={name}
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => {
                  const action = {
                    type: "HANDLE_CHANGE_INPUT",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <p>Email</p>
              <input
                value={email}
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => {
                  const action = {
                    type: "HANDLE_CHANGE_INPUT",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary mx-2">Submit</button>
          <button className="btn btn-success mx-2">Update</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  QLSVreducer: state.QLSVreducer,
});

export default connect(mapStateToProps)(Form);
