import "./Navbar.css";
import { Navbar as NavbarSuit, Dropdown } from "@suit-ui/react";

function Navbar() {
  const onCloseSession = () => {
    console.log("close session");
  };

  return (
    <NavbarSuit>
      <NavbarSuit.Brand className="font-semibold text-lg">
        <NavbarSuit.Link href="#">
          <img
            src="https://let.timebillingapp.com/images/logo-timebilling-x.svg"
            width={160}
          />
        </NavbarSuit.Link>
      </NavbarSuit.Brand>

      <NavbarSuit.Content className="justify-between">
        <NavbarSuit.Group>
          <NavbarSuit.Link href="#">Dashboard</NavbarSuit.Link>
          <NavbarSuit.Item>
            <Dropdown>
              <Dropdown.Button>Gestion ⬇️</Dropdown.Button>

              <Dropdown.List>
                <Dropdown.Item>Calendario</Dropdown.Item>
                <Dropdown.Item>Trabajos</Dropdown.Item>
                <Dropdown.Item>Gastos</Dropdown.Item>
                <Dropdown.Item>Proyectos</Dropdown.Item>
                <Dropdown.Item>Tareas</Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </NavbarSuit.Item>

          <NavbarSuit.Link href="#">Reportes</NavbarSuit.Link>
          <NavbarSuit.Link href="#">Facturacion</NavbarSuit.Link>
          <NavbarSuit.Link href="#">Configuracion</NavbarSuit.Link>
        </NavbarSuit.Group>

        <NavbarSuit.Group>
          <NavbarSuit.Button onClick={onCloseSession}>
            Cerrar sesión
          </NavbarSuit.Button>
        </NavbarSuit.Group>
      </NavbarSuit.Content>
    </NavbarSuit>
  );
}

export default Navbar;
