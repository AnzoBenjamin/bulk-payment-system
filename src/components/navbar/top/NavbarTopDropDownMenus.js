import NavbarDropdown from "./NavbarDropdown";
import {
  appRoutes,
  documentationRoutes,
} from "routes/siteMaps";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { flatRoutes } from "helpers/utils";
import NavbarDropdownApp from "./NavbarDropdownApp";
import NavbarDropdownPages from "./NavbarDropdownPages";
import NavbarDropdownModules from "./NavbarDropdownModules";
import { useAppContext } from "providers/AppProvider";
import NavbarNavLink from "./NavbarNavLink";

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig,
  } = useAppContext();

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig("navbarCollapsed", !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig("showBurgerMenu", !showBurgerMenu);
    }
  };
  return (
    <>
      <NavbarNavLink title="dashboard">

      </NavbarNavLink>

      <NavbarDropdown title="app">
        <NavbarDropdownApp items={appRoutes.children} />
      </NavbarDropdown>



      <NavbarDropdown title="documentation">
        {flatRoutes(documentationRoutes.children).map((route) => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? "link-600" : "text-500"}
            to={route.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
