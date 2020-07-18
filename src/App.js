import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
