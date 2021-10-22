import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent.js";
import PageFooter from "./components/PageFooter.js";
import "./App.css";
function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <PageContent></PageContent>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
