import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUsers, FaUsersCog, FaChartLine, FaTicketAlt } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineTable, AiOutlineIdcard } from 'react-icons/ai';
import { GrAddCircle, GrProductHunt, GrConfigure, GrDocumentConfig } from 'react-icons/gr';
import { BsCartCheckFill, BsFillBagCheckFill, BsFillBarChartFill } from 'react-icons/bs';
import { RiLoginCircleLine } from 'react-icons/ri';
import { MdOutlineSettingsSuggest } from 'react-icons/md';


import "./styles.css";

function NavBar() {

  const NavbarBackground = 'dark'; // dark, light, primary
  const NavbarVariant = 'dark puggysoft-navbar'; // dark, light

  // USERS
  const userAdminLabel = (<><FaUsers /> Adm. Usuarios</>)
  const userRegistrationLabel = (<><AiOutlineUserAdd /> Registrar Usuarios</>)
  const userShowTableLabel = (<><AiOutlineTable /> Mostar Usuarios (Tabla)</>)
  const userShowCardLabel = (<><AiOutlineIdcard /> Mostrar Usuarios (Tarjetas)</>)
  // ROLES
  const rolesAdminLabel = (<><FaUsersCog /> Adm. Roles</>)
  const rolRegistrationLabel = (<><GrAddCircle /> Registrar Role</>)
  const rolShowTableLabel = (<><AiOutlineTable /> Mostar Roles (Tabla)</>)
  const rolShowCardLabel = (<><AiOutlineIdcard /> Mostrar Roles (Tarjetas)</>)
  // PRODUCTS
  const productAdminLabel = (<><GrProductHunt /> Adm. Productos</>)
  const productRegistrationLabel = (<><GrAddCircle /> Registrar Producto</>)
  const productShowTableLabel = (<><AiOutlineTable /> Mostar Productos (Tabla)</>)
  const productShowCardLabel = (<><AiOutlineIdcard /> Mostrar Productos (Tarjetas)</>)
  // ORDERS
  const orderAdminLabel = (<><FaTicketAlt /> Adm. Pedidos</>)
  const orderRegistrationLabel = (<><GrAddCircle /> Registrar Pedido</>)
  const orderShowTableLabel = (<><AiOutlineTable /> Mostar Pedidos (Tabla)</>)
  const orderShowCardLabel = (<><AiOutlineIdcard /> Mostrar Pedidos (Tarjetas)</>)
  // DISPATCH
  const dispatchAdminLabel = (<><BsFillBagCheckFill /> Adm. Despachos</>)
  const dispatchRegistrationLabel = (<><GrAddCircle /> Registrar Despacho</>)
  const dispatchShowTableLabel = (<><AiOutlineTable /> Mostar Despachos (Tabla)</>)
  const dispatchShowCardLabel = (<><AiOutlineIdcard /> Mostrar Despachos (Tarjetas)</>)
  // SALES
  const salesAdminLabel = (<><BsCartCheckFill /> Adm. Ventas</>)
  const salesRegistrationLabel = (<><GrAddCircle /> Registrar Venta</>)
  const salesShowTableLabel = (<><AiOutlineTable /> Mostar Ventas (Tabla)</>)
  const salesShowCardLabel = (<><AiOutlineIdcard /> Mostrar Ventas (Tarjetas)</>)
  // REPORTS
  const reportAdminLabel = (<><BsFillBarChartFill /> Reportes</>)
  const reportByWeek = (<><FaChartLine /> Reporte de Ingresos semanales</>)
  const reportByMonth = (<><FaChartLine /> Reporte de Ingresos mensuales</>)
  const reportByDate = (<><FaChartLine /> Reporte de Ingresos por fecha</>)
  // REPORTS
  const configAdminLabel = (<><MdOutlineSettingsSuggest /> Config</>)
  const configLogout = (<><GrDocumentConfig /> Parametros del sistema</>)
  const configSystem = (<><RiLoginCircleLine /> Cerrar sesion</>)

  function navigateToUserForm(event) {
    console.log({ event })
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg={NavbarBackground} variant={NavbarVariant}>
      <Navbar.Brand>
        <img src="/logo192.png" className="app-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavDropdown title={userAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm} >{userRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{userShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{userShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={rolesAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{rolRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{rolShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{rolShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={productAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{productRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{productShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{productShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={orderAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{orderRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{orderShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{orderShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={dispatchAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{dispatchRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{dispatchShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{dispatchShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={salesAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{salesRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{salesShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{salesShowCardLabel}</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={reportAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{reportByWeek}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{reportByWeek}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{reportByMonth}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{reportByDate}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav variant={'puggysoft-nav-config'}>
          <NavDropdown title={configAdminLabel}>
            <NavDropdown.Item onClick={navigateToUserForm}>{configSystem}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateToUserForm}>{configLogout}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
