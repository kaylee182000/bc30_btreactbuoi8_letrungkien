import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  handleChange = (e) => {
    const action = {
      type: "HANDLE_CHANGE_INPUT",
      payload: {
        id: e.target.id,
        value: e.target.value,
        pattern: e.target.pattern,
      },
    };
    this.props.dispatch(action);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
      svInfo: { ...this.props.QLSVreducer.svInfo },
    };
    this.props.dispatch(action);
  };
  renderBtnSubmit = () =>{
    let {errors} = this.props.QLSVreducer
    let valid = true
    for(let key in errors){
      if(errors[key] !== ''){
        valid = false
      }
    }
    if(valid){
      return <button className='btn btn-primary mx-2'>Thêm Sinh Viên</button>
    }
    return <button className='btn btn-primary mx-2' disabled>Thêm Sinh Viên</button>
  }
  render() {
    let { svInfo,errors } = this.props.QLSVreducer;
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
                value={svInfo.id}
                pattern="^[0-9]+$"
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
              <span className="text-danger">{errors.id}</span>
            </div>
            <div className="form-group mt-3">
              <p>SDT</p>
              <input
                value={svInfo.tel}
                className="form-control"
                id="tel"
                name="tel"
                onChange={this.handleChange}
              />
              <span className="text-danger">{errors.tel}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mt-3">
              <p>Ten</p>
              <input
                value={svInfo.name}
                pattern="^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <span className="text-danger">{errors.name}</span>
            </div>
            <div className="form-group mt-3">
              <p>Email</p>
              <input
                value={svInfo.email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
              />
              <span className="text-danger">{errors.email}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {this.renderBtnSubmit()}
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
