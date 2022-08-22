import React, { Component } from "react";
import { connect } from "react-redux";

class Table extends Component {
  render() {
    let { mangSinhVien } = this.props.QLSVreducer;
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="text-center bg-dark text-white">
              <th>Ma SV</th>
              <th>Ho va Ten</th>
              <th>SDT</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {mangSinhVien.map((sv) => {
              return (
                <tr key={sv.maSV} className="text-center">
                  <td>{sv.maSV}</td>
                  <td>{sv.hoTen}</td>
                  <td>{sv.soDienThoai}</td>
                  <td>{sv.email}</td>
                </tr>
              );
            })}
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
