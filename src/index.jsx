import { render } from "react-dom";
import "./index.css";
import App from "./App";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => registration.unregister());
  });
}

render(<App />, document.getElementById("root"));
