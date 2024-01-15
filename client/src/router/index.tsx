import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "../pages/client";
import { screenUrl } from "../constants/screenUrls";

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path={screenUrl.HOME} element={<HomePage />} />
          <Route path={screenUrl.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
