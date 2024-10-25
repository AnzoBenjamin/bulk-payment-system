import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import NavbarTop from "components/navbar/top/NavbarTop";
import NavbarVertical from "components/navbar/vertical/NavbarVertical";
import Footer from "components/footer/Footer";
import ProductProvider from "providers/ProductProvider";
import CourseProvider from "providers/CourseProvider";
import ModalAuth from "components/authentication/modal/ModalAuth";

import { useAppContext } from "providers/AppProvider";
import { useAuthWizardContext } from "providers/AuthWizardProvider";

const MainLayout = () => {
  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes("kanban");
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition },
  } = useAppContext();

  const { accessToken } = useAuthWizardContext();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    }, 0);
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   if (accessToken === '') {
  //     navigate(paths.cardLogin, { replace: true });
  //   }
  // }, []);

  return (
    <div className={isFluid ? "container-fluid" : "container"}>
      {(navbarPosition === "vertical" || navbarPosition === "combo") && (
        <NavbarVertical />
      )}
      <ProductProvider>
        <CourseProvider>
          <div className={classNames("content", { "pb-0": isKanban })}>
            <NavbarTop />
            {/*------ Main Routes ------*/}
            <Outlet />
            {!isKanban && <Footer />}
          </div>
        </CourseProvider>
      </ProductProvider>
      <ModalAuth />
    </div>
  );
};

export default MainLayout;