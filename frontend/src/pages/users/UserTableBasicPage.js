import NavBar from './../../components/navbar/NavBar'
import UserTableBasic from './../../components/users/UserTableBasic';

function UserTableBasicPage() {
  return (
    <div className="users-table-page">
      <NavBar></NavBar>
      <UserTableBasic></UserTableBasic>
    </div>
  );
}

export default UserTableBasicPage;
