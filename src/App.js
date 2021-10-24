import React, { useState } from "react";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent.js";
import PageFooter from "./components/PageFooter.js";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationIndex: 0,
    };
  }
  goToProductList() {
    this.setState({ navigationIndex: 1 });
  }
  goToHomePage() {
    this.setState({ navigationIndex: 0 });
  }
  render() {
    return (
      <div className="App">
        <PageHeader
          prop_goToHomePage={this.goToHomePage.bind(this)}
        ></PageHeader>
        <PageContent
          prop_navigationIndex={this.state.navigationIndex}
          prop_goToProductList={this.goToProductList.bind(this)}
        ></PageContent>
        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default App;
