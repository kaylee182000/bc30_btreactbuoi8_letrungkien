import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    
  }
  render() {
    let { id, name, tel, email } = this.props.svInfo;
    return (
      <form className="card mb-5 mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark">
          <h3 className="text-center text-white">Thong tin sinh vien</h3>
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group mt-3">
              <p>Ma SV</p>
              <input value={id} className="form-control" id="id" name="id" />
            </div>
            <div className="form-group mt-3">
              <p>SDT</p>
              <input value={tel} className="form-control" id="tel" name="tel" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3">
              <p>Ten</p>
              <input value={name} className="form-control" id="name" name="name" />
            </div>
            <div className="form-group mt-3">
              <p>Email</p>
              <input value={email} className="form-control" id="email" name="email" />
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
  svInfo: state.QLSVreducer.svInfo,
});

export default connect(mapStateToProps)(Form);
