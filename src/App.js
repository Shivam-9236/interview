import "./App.css";
import BookAppointmentForm from "./components/BookAppointmentForm";
import MakeAppointmentForm from "./components/MakeAppointmentForm";
import "./components/AppointmentForm.css";
function App() {
  return (
    <div className="container">
      <MakeAppointmentForm />
      <BookAppointmentForm />
    </div>
  );
}

export default App;
