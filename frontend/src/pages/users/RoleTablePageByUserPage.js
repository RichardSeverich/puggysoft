import NavBar from './../../components/navbar/NavBar'
import RoleTableFilterByUsers from './../../components/users/RoleTableFilterByUsers';

function RoleTablePage() {
  return (
    <div className="role-table-page">
      <NavBar></NavBar>
      <RoleTableFilterByUsers></RoleTableFilterByUsers>
    </div>
  );
}

export default RoleTablePage;
