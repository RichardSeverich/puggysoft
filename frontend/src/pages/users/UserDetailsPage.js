import NavBar from './../../components/navbar/NavBar'
import UserDetails from './../../components/users/UserDetails';

function UserDetailsPage() {

  return (
    <div className="user-details-page">
      <NavBar></NavBar>
      <UserDetails></UserDetails>
    </div>
  );
}

export default UserDetailsPage;