import "./App.css";
import ComponentA from "./Components/ComponentA";

// Mobx Provider same as Context Provider
import { Provider } from "mobx-react";

// Inject Store
import rootStore from "./Store/RootStore";

function App() {
  return (
    <Provider {...rootStore}>
      <div className="App">
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;
