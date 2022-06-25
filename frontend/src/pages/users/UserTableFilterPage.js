import NavBar from './../../components/navbar/NavBar'
import UserTableFilter from './../../components/users/UserTableFilter';

function UserTableFilterPage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilter></UserTableFilter>
    </div>
  );
}

export default UserTableFilterPage;
