import React from "react";
import PageContent from "./components/PageContent";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationIndex: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <PageContent></PageContent>
      </div>
    );
  }
}

export default App;
