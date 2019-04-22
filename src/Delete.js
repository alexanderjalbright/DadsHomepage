import React, { Component } from "react";

export default class Delete extends Component {
  render() {
    const { delOn, delOff, deleting } = this.props;
    return (
      <div>
        {deleting || (
          <button className="big-btn" onClick={delOn}>
            DELETE LINK
          </button>
        )}
        {deleting && (
          <button className="big-btn" onClick={delOff}>
            CANCEL DELETE
          </button>
        )}
      </div>
    );
  }
}
