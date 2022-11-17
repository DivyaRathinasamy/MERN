import logo from './logo.svg';
import './App.css';
import NameList from './components/Namelist';

function App() {
  return (
    <div className="App">
      <h1>Welcome To My Page!!!</h1>
      <NameList firstname= {"Jane"} lastname = {"Doe"} age = {45} haircolor ={"Black"}></NameList>
      <NameList firstname= {"Smith"} lastname = {"John"} age ={88} haircolor ={ "Brown"}></NameList>
      <NameList firstname= {"Fillmore"} lastname = {"Millard"} age ={50} haircolor ={ "Brown"}></NameList>
      <NameList firstname= {"Smith"} lastname = {"Maria"} age ={62} haircolor ={ "Brown"}></NameList>
    </div>
  );
}

export default App;
