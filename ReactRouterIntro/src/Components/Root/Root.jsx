import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header />
      {isNavigating && <span>Loading....</span>}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
