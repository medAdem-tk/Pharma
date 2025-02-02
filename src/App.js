// ********************** REDUX ************************
import { Provider } from "react-redux";
import { store } from "./store/reducers/reducers";
// ********************** REDUX ************************

// ********************** COMPONENTS ************************
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/Login/SignIn/SignIn";
import Register from "./pages/Login/Register/Register";
import NumValidation from "./pages/Login/NumValidation/NumValidation";
// ********************** COMPONENTS ************************

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Theme from "./theme/Theme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Theme>
          <Router>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/registration" element={<Register />} />
              <Route path="/validation" element={<NumValidation />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/signin" />} />
              {/* <Route path="/*" element={<Navigate to="/dashboard/main" />} /> */}
            </Routes>
          </Router>
        </Theme>
      </Provider>
    </div>
  );
}

export default App;
