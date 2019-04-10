import React, { Component } from "react";
import AUX from "./../HOC/AUX";
import fire from "./../config/firebase";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.
import "font-awesome/css/font-awesome.css";

import FroalaEditor from "react-froala-wysiwyg";

class Createpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      status: "",
      error: ""
    };
  }

  onChangeTrigger = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, content, status, error } = this.state;
    return (
      <AUX>
        <form>
          <h1>Create Page</h1>
          {error ? (
            <div>
              <p>{error.message}</p>
            </div>
          ) : null}
          <label htmlFor="title"> Title : </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={this.onChangeTrigger}
          />
          <br />
          <label htmlFor="content"> Content : </label>
          <FroalaEditor tag="textarea" />
          />
          <br />
          <label htmlFor="status"> Status : </label>
          <input
            type="text"
            name="status"
            placeholder="status"
            value={status}
            onChange={this.onChangeTrigger}
          />
          <br />
          <button onClick={this.onSubmitCreatepage}>Create Page</button>
        </form>
      </AUX>
    );
  }
}

export default Createpage;
