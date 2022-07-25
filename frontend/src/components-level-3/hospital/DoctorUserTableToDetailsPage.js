import NavBar from './../../components-level-2/navbar/NavBar'
import DoctorUserDetailsTable from './../../components-level-2/hospital/DoctorUserDetailsTable';

function DoctorUserTablePage() {
  return (
    <div className="doctor-table-page">
      <NavBar></NavBar>
      <DoctorUserDetailsTable></DoctorUserDetailsTable>
    </div>
  );
}

export default DoctorUserTablePage;