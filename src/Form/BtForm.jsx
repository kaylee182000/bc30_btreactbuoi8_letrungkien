import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Table from "./Table";

class BtForm extends Component {
  render() {
    return (
      <div>
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BtForm);
