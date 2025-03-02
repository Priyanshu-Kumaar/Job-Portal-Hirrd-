import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="md:pl-10 pl-12">
      <div className="grid-background   "></div>
        <Header />
        <Outlet />
    </div>
  );
};

export default AppLayout;
