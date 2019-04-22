import React, { Component } from "react";
import Links from "./Links";
import Add from "./Add";
import Delete from "./Delete";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newLink: "https://",
      newName: "",
      links: [
        { name: "Draft Kings", url: "https://draftkings.com" },
        { name: "Email", url: "https://gmail.com" },
        { name: "google", url: "https://google.com" }
      ],
      adding: false,
      deleting: false
    };
  }

  componentDidMount() {
    const loadedLinks = localStorage.getItem("dadLinks");
    if (loadedLinks != null) {
      const data = JSON.parse(loadedLinks);
      this.setState({ links: data });
    }
  }

  addOn = () => this.setState({ adding: true });

  addOff = () =>
    this.setState({ adding: false, newLink: "https://", newName: "" });

  change = event => this.setState({ [event.target.name]: event.target.value });

  delOn = () => this.setState({ deleting: true });

  delOff = () => this.setState({ deleting: false });

  saveLink = () => {
    const addedLink = {
      name: this.state.newName,
      url: this.state.newLink
    };
    const newLinks = [...this.state.links];
    newLinks.push(addedLink);
    this.setState({ links: newLinks });
    localStorage.setItem("dadLinks", JSON.stringify(newLinks));
    this.addOff();
  };

  delLink = index => {
    let newLinks = [...this.state.links];
    newLinks.splice(index, 1);
    this.setState({ links: newLinks });
    localStorage.setItem("dadLinks", JSON.stringify(newLinks));
  };

  render() {
    return (
      <div className="App">
        <Links
          links={this.state.links}
          adding={this.state.adding}
          newLink={this.state.newLink}
          newName={this.state.newName}
          deleting={this.state.deleting}
          delLink={this.delLink}
        />
        <Add
          change={this.change}
          addOn={this.addOn}
          addOff={this.addOff}
          adding={this.state.adding}
          saveLink={this.saveLink}
          newLink={this.state.newLink}
          newName={this.state.newName}
        />
        <Delete
          deleting={this.state.deleting}
          delOn={this.delOn}
          delOff={this.delOff}
        />
      </div>
    );
  }
}

export default App;
