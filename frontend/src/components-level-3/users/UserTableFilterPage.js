import NavBar from './../../components-level-2/navbar/NavBar'
import UserTableFilter from './../../components-level-2/users/UserTableFilter';

function UserTableFilterPage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilter></UserTableFilter>
    </div>
  );
}

export default UserTableFilterPage;
