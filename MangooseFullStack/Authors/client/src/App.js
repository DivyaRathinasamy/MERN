import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import Form from './components/Form';
import OneAuthor from './components/OneAuthor';
import EditForm from './components/Edit';

function App() {
  let [submittedForm, setSubmittedForm] = useState(false);





  return (
    <div className="App container">
      <h1>Welcome To Authors Project!</h1>

     
      <Routes>
      <Route exact path="/" element={
        <>
          {/* <Form submittedForm ={submittedForm} setSubmittedForm={setSubmittedForm}></Form> */}
          {/* <hr></hr>  */}
          <AllAuthors submittedForm ={submittedForm}></AllAuthors>
        </>
      }>

      </Route>
      <Route exact path="/authors" element={
        <>
        <Form submittedForm ={submittedForm} setSubmittedForm={setSubmittedForm}></Form>


        </>
      }>
        </Route>
        <Route exact path="/authors/:id" element={<OneAuthor/>}></Route>

        <Route exact path="/authors/edit/:id" element ={<EditForm/>}></Route>

     
     </Routes>

    </div>
  );
}

export default App;
