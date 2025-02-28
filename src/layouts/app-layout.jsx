import Footer from "@/components/footer";
import Header from "@/components/header";
import { useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background "></div>
      <main className='min-h-screen container pl-14'>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
