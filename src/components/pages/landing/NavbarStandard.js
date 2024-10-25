import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import handleNavbarTransparency from "helpers/handleNavbarTransparency";
import LandingRightSideNavItem from "./LandingRightSideNavItem";
import { topNavbarBreakpoint } from "config";
import { useAppContext } from "providers/AppProvider";
import ThemeControlDropdown from "components/navbar/top/ThemeControlDropdown";
import Flex from "components/common/Flex";

const NavbarStandard = () => {
  const {
    config: { isDark },
  } = useAppContext();
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarTransparency);
    return () => window.removeEventListener("scroll", handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      variant={isDark ? "light" : "dark"}
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames("navbar-standard navbar-theme", {
        "bg-100": !navbarCollapsed && isDark,
        "bg-dark": !navbarCollapsed && !isDark,
      })}
    >
      <Container>
        <Navbar.Brand className="text-white" as={Link} to="/">
          Almared Bulk Payments &nbsp;&nbsp;&nbsp;
        </Navbar.Brand>

          <Flex alignItems="center" className="gap-2">
          <ThemeControlDropdown dropdownClassName="d-lg-none" />
          <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        </Flex>

        <Navbar.Collapse className="scrollbar">
          
          <LandingRightSideNavItem />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
