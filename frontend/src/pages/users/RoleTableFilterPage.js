import NavBar from './../../components/navbar/NavBar'
import RoleTableFilter from './../../components/users/RoleTableFilter';

function RoleTableFilterPage() {
  return (
    <div className="role-table-page">
      <NavBar></NavBar>
      <RoleTableFilter></RoleTableFilter>
    </div>
  );
}

export default RoleTableFilterPage;