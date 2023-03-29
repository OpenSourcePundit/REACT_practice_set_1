import "./styles.css";
const employee = {name:"Shashank",designation:"Intern Developer",experience:8}
const employeeCard=({name,designation,experience})=>{
  return(
    <h5>Name: {name}</h5>
    <h5><span style={{color:"green"}}>Designation:</span> {designation}</h5>
    <h5><span style={{color:"blue"}}>Experience:</span> {experience} Years</h5>
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
