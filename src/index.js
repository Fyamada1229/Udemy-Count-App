import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import CounterContext from "./contexts/counter";
import Counter from "./components/counter";
import { render } from "@testing-library/react";

class App extends React.Component {
  // 初期値設定
  constructor(props) {
    super(props);

    // increment（インクリメント)は数の増加を意味する言葉
    // decrement(デクリメント)は数の減少を意味する言葉
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    <CounterContext.Provoider value={this.state}>
      <Counter></Counter>
    </CounterContext.Provoider>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
