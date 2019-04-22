import React, { Component } from "react";

export default class Links extends Component {
  delete = index => this.props.delLink(index);

  render() {
    const { links, newLink, newName, adding, deleting } = this.props;
    const linksMap = links.map((link, index) => (
      <li key={index}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
        &nbsp;
        {deleting && (
          <button className="delete" onClick={() => this.delete(index)}>
            &times;
          </button>
        )}
        {index < links.length - 1 && <span>&nbsp;-&nbsp; </span>}
      </li>
    ));
    return (
      <div className="link-group">
        <ul className="link-list">
          {linksMap}
          {adding && (
            <li>
              <span>&nbsp;-&nbsp;</span>
              <a href={newLink} target="_blank" rel="noopener noreferrer">
                {newName}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
