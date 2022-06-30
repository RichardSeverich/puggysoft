import NavBar from './../../components/navbar/NavBar'
import UserTableFilterSelection from './../../components/users/UserTableFilterSelection';

function UserTableFilterSelectionPage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterSelection></UserTableFilterSelection>
    </div>
  );
}

export default UserTableFilterSelectionPage;
