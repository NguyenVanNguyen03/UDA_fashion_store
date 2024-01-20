import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "../pages/client";
import { screenUrl } from "../constants/screenUrls";
import LayoutContainer from "../components/common/LayoutContainer";
import RegisterPage from "../pages/client/RegisterPage";
import SalePage from "../pages/client/SalePage";
import DescriptionPage from "../pages/client/DescriptionPage";
// D:\Năm 3\Project React\UDA_fashion_store\client\src\pages\client\RegisterPage.tsx

const routerconfig = [
  {
    url: screenUrl.HOME,
    component: HomePage,
    title: "Trang chủ",
    isHeader: true,
    isFooter: true,
  },
  {
    url: screenUrl.LOGIN,
    component: LoginPage,
    title: "Trang đăng nhập",
    isHeader: true,
    isFooter: true,
  },
  {
    url: screenUrl.REGISTER,
    component: RegisterPage,
    title: "Trang đăng ký",
    isHeader: true,
    isFooter: true,
  },
  {
    url: screenUrl.SALE,
    component: SalePage,
    title: "Trang sale",
    isHeader: true,
    isFooter: true,
  },
  {
    url: `${screenUrl.PRODUCT}/:productName`,
    component: DescriptionPage,
    title: "Trang sale",
    isHeader: true,
    isFooter: true,
  },
];

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route>
          {routerconfig.map((el, index) => {
            return (
              <Route
                key={index}
                path={el.url}
                element={
                  <LayoutContainer
                    title={el.title}
                    component={el.component}
                    isFooter={el.isFooter}
                    isHeader={el.isHeader}
                  />
                }
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
