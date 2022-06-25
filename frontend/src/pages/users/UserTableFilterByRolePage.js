import NavBar from './../../components/navbar/NavBar'
import UserTableFilterByRoles from './../../components/users/UserTableFilterByRoles';

function UserTableFilterByRolePage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterByRoles></UserTableFilterByRoles>
    </div>
  );
}

export default UserTableFilterByRolePage;
