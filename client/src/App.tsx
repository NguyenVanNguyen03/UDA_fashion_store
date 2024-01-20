import AppRouter from "./router";
import { Provider } from "react-redux";
import store from "./store/store.toolkit";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
