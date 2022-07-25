import NavBar from './../../components-level-2/navbar/NavBar'
import UserTableFilterSelection from './../../components-level-2/users/UserTableFilterSelection';

function UserTableFilterSelectionPage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableFilterSelection></UserTableFilterSelection>
    </div>
  );
}

export default UserTableFilterSelectionPage;
