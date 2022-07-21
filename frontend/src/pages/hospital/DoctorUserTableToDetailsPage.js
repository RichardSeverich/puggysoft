import NavBar from './../../components/navbar/NavBar'
import DoctorUserDetailsTable from './../../components/hospital/DoctorUserDetailsTable';

function DoctorUserTablePage() {
  return (
    <div className="doctor-table-page">
      <NavBar></NavBar>
      <DoctorUserDetailsTable></DoctorUserDetailsTable>
    </div>
  );
}

export default DoctorUserTablePage;