import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  renderItem = () => {
    let {mangSinhVien} = this.props.QLSVreducer
    if(mangSinhVien.length === 0){
      return (
        <tr className="text-center">
          <td>__</td>
          <td>__</td>
          <td>__</td>
          <td>__</td>
          <td>__</td>
        </tr>
      )
    }else {
      return mangSinhVien.map((sv) => {
        return (
          <tr key={sv.id} className="text-center">
            <td>{sv.id}</td>
            <td>{sv.name}</td>
            <td>{sv.tel}</td>
            <td>{sv.email}</td>
            <td>
              <button className="btn btn-danger mx-2" onClick={() => {
                const action = {
                  type: "XOA_SINH_VIEN",
                  payload : {
                    id: sv.id
                  }
                }
                this.props.dispatch(action)
              }}>Xoa</button>
              <button className="btn btn-primary mx-2">Sua</button>
            </td>
          </tr>
        );
      })
    }
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="text-center bg-dark text-white">
              <th>Ma SV</th>
              <th>Ho va Ten</th>
              <th>SDT</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderItem()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        QLSVreducer: state.QLSVreducer
    }
}

export default connect(mapStateToProps)(Table);
