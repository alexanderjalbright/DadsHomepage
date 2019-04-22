import React, { Component } from "react";

export default class Add extends Component {
  onChange = event => this.props.change(event);

  cancel = () => this.props.addOff();

  save = () => this.props.saveLink();

  render() {
    const { adding, addOn, newName, newLink } = this.props;
    return (
      <div>
        {adding || (
          <button className="big-btn" onClick={addOn}>
            ADD NEW LINK
          </button>
        )}
        {adding && (
          <div className="form">
            <div>
              <label className="link-label">NAME:</label>
              <input
                className="link-input"
                name="newName"
                value={newName}
                onChange={this.onChange}
              />
            </div>
            <div>
              <label className="link-label">URL:</label>
              <input
                className="link-input"
                name="newLink"
                value={newLink}
                onChange={this.onChange}
              />
            </div>
            <div className="form-btns">
              <button onClick={this.cancel}>CANCEL</button>
              <button onClick={this.save}>SAVE</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
