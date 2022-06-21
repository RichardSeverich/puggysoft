import { useHistory } from "react-router";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUsers, FaUsersCog, FaChartLine, FaTicketAlt, FaUserNurse } from 'react-icons/fa';
import { AiOutlineUserAdd, AiOutlineTable, AiOutlineIdcard } from 'react-icons/ai';
import { GrAddCircle, GrProductHunt, GrConfigure, GrDocumentConfig } from 'react-icons/gr';
import { BsCartCheckFill, BsFillBagCheckFill, BsFillBarChartFill } from 'react-icons/bs';
import { RiLoginCircleLine } from 'react-icons/ri';
import { MdOutlineSettingsSuggest, MdOutlineSick } from 'react-icons/md';
import { GoCalendar } from 'react-icons/go';
import enumRoles from "./../../models/users/enumRoles";

import i18n from "../../i18n/i18n";

import "./styles.css";

function NavBar() {

  const history = useHistory();
  const userRolesString = window.sessionStorage.getItem("roles");
  const userRolesObjects = JSON.parse(userRolesString);
  const userRoles = [];

  userRolesObjects.forEach((roleObject) => {
    userRoles.push(roleObject.name);
  })

  const navigateUsersForm = () => { history.push("/users-form"); }
  const navigateUsersTable = () => { history.push("/users-table"); }
  const navigateUsersTableFilter = () => { history.push("/users-table-filter"); }
  const navigateProductsForm = () => { history.push("/products-form"); }
  const navigateProductsTable = () => { history.push("/products-table"); }
  const navigateProductsTableFilter = () => { history.push("/products-table-filter"); }
  function navigateGeneric(event) { console.log({ event }) }

  const NavbarBackground = 'dark'; // dark, light, primary
  const NavbarVariant = 'dark puggysoft-navbar'; // dark, light

  // ******* ******* ******* USERS SYSTEM ******* ******* *******
  // USERS
  const userAdminLabel = (<><FaUsers /> {i18n.navBar.userAdmin}</>)
  const userRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.userRegistration}</>)
  const userShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTable}</>)
  const userShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.userShowTableFilter}</>)
  const userShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.userShowCard}</>)
  // ROLES
  const rolesAdminLabel = (<><FaUsersCog /> {i18n.navBar.roleAdmin}</>)
  const roleRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.roleRegistration}</>)
  const roleShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.roleShowTable}</>)
  const roleShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.roleShowCard}</>)

  // ******* ******* ******* SALES SYSTEM ******* ******* *******
  // PRODUCTS
  const productAdminLabel = (<><GrProductHunt /> {i18n.navBar.productAdmin}</>)
  const productRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.productRegistration}</>)
  const productShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.productShowTable}</>)
  const productShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.productShowTableFilter}</>)
  const productShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.productShowCard}</>)
  // ORDERS
  const orderAdminLabel = (<><FaTicketAlt /> {i18n.navBar.orderAdmin}</>)
  const orderRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.orderRegistration}</>)
  const orderShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.orderShowTable}</>)
  const orderShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.orderShowCard}</>)
  // DISPATCH
  const dispatchAdminLabel = (<><BsFillBagCheckFill /> {i18n.navBar.dispatchAdmin}</>)
  const dispatchRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.dispatchRegistration}</>)
  const dispatchShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.dispatchShowTable}</>)
  const dispatchShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.dispatchShowCard}</>)
  // SALES
  const salesAdminLabel = (<><BsCartCheckFill /> {i18n.navBar.salesAdmin}</>)
  const salesRegistrationLabel = (<><GrAddCircle /> {i18n.navBar.salesRegistration}</>)
  const salesShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.salesShowTable}</>)
  const salesShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.salesShowCard}</>)
  // REPORTS
  const reportAdminLabel = (<><BsFillBarChartFill /> {i18n.navBar.reportAdmin}</>)
  const reportByWeek = (<><FaChartLine /> {i18n.navBar.reportRevenueAnnual}</>)
  const reportByMonth = (<><FaChartLine /> {i18n.navBar.reportSalesAnnual}</>)
  const reportByDate = (<><FaChartLine /> {i18n.navBar.reportRevenueByDate}</>)

  // ******* ******* ******* HOSPITAL SYSTEM ******* ******* *******
  // DOCTORS
  const doctorAdminLabel = (<><FaUserNurse /> {i18n.navBar.doctorAdmin}</>)
  const doctorRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.doctorRegistration}</>)
  const doctorShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.doctorShowTable}</>)
  const doctorShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.doctorShowTableFilter}</>)
  const doctorShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.doctorShowCard}</>)
  // PATIENTS
  const patientAdminLabel = (<><MdOutlineSick /> {i18n.navBar.patientAdmin}</>)
  const patientRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.patientRegistration}</>)
  const patientShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.patientShowTable}</>)
  const patientShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.patientShowTableFilter}</>)
  const patientShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.patientShowCard}</>)
  // SCHEDULE
  const scheduleAdminLabel = (<><GoCalendar /> {i18n.navBar.scheduleAdmin}</>)
  const scheduleRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.scheduleRegistration}</>)
  const scheduleShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.scheduleShowTable}</>)
  const scheduleShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.scheduleShowTableFilter}</>)
  const scheduleShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.scheduleShowCard}</>)
  // BOOKINGS
  const bookingAdminLabel = (<><FaTicketAlt /> {i18n.navBar.bookingAdmin}</>)
  const bookingRegistrationLabel = (<><AiOutlineUserAdd /> {i18n.navBar.bookingRegistration}</>)
  const bookingShowTableLabel = (<><AiOutlineTable /> {i18n.navBar.bookingShowTable}</>)
  const bookingShowTableFilterLabel = (<><AiOutlineTable /> {i18n.navBar.bookingShowTableFilter}</>)
  const bookingShowCardLabel = (<><AiOutlineIdcard /> {i18n.navBar.bookingShowCard}</>)

  // ******* ******* ******* ALL SYSTEMS ******* ******* *******
  // CONFIG
  const configAdminLabel = (<><MdOutlineSettingsSuggest /> {i18n.navBar.configAdmin}</>)
  const configSystem = (<><GrDocumentConfig /> {i18n.navBar.configSystem}</>)
  const configLogout = (<><RiLoginCircleLine /> {i18n.navBar.configLogout}</>)

  return (
    <Navbar collapseOnSelect expand="sm" bg={NavbarBackground} variant={NavbarVariant}>
      <Navbar.Brand>
        <img src="/logo192.png" className="app-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {/* ******* ******* ******* USERS SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.ADMIN_USERS)
            && <NavDropdown title={userAdminLabel}>
              <NavDropdown.Item onClick={navigateUsersForm} >{userRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUsersTable}>{userShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateUsersTableFilter}>{userShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{userShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.ADMIN_USERS) && <NavDropdown title={rolesAdminLabel}>
            <NavDropdown.Item onClick={navigateGeneric}>{roleRegistrationLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateGeneric}>{roleShowTableLabel}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateGeneric}>{roleShowCardLabel}</NavDropdown.Item>
          </NavDropdown>}

          {/* ******* ******* ******* SALES SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.SALES_ADMIN) &&
            <NavDropdown title={productAdminLabel}>
              <NavDropdown.Item onClick={navigateProductsForm}>{productRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateProductsTable}>{productShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateProductsTableFilter}>{productShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{productShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.SALES_ADMIN) &&
            <NavDropdown title={orderAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{orderRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{orderShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{orderShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.SALES_ADMIN) &&
            <NavDropdown title={dispatchAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{dispatchRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{dispatchShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{dispatchShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.SALES_ADMIN) &&
            <NavDropdown title={salesAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{salesRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{salesShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{salesShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.SALES_ADMIN) &&
            <NavDropdown title={reportAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{reportByWeek}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{reportByMonth}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{reportByDate}</NavDropdown.Item>
            </NavDropdown>}

          {/* ******* ******* ******* HOSPITAL SYSTEM ******* ******* ********/}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={doctorAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{doctorRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{doctorShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{doctorShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{doctorShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={patientAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{patientRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{patientShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{patientShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{patientShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={scheduleAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{scheduleShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
          {userRoles.includes(enumRoles.HOSPITAL_ADMIN) &&
            <NavDropdown title={bookingAdminLabel}>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingRegistrationLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingShowTableLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingShowTableFilterLabel}</NavDropdown.Item>
              <NavDropdown.Item onClick={navigateGeneric}>{bookingShowCardLabel}</NavDropdown.Item>
            </NavDropdown>}
        </Nav>

        {/* ******* ******* ******* ALL SYSTEM ******* ******* ********/}
        <Nav variant={'puggysoft-nav-config'}>
          <NavDropdown title={configAdminLabel}>
            <NavDropdown.Item onClick={navigateGeneric}>{configSystem}</NavDropdown.Item>
            <NavDropdown.Item onClick={navigateGeneric}>{configLogout}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
