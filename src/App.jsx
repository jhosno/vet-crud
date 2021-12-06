import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [pacients, setpacients] = useState([]);
  const [pacient, setpacient] = useState([]);

  //Los useEffect se ejecutan en el orden en el que se definan
  useEffect(() => {
    const getLocalStore =()=>{
      const pacientsLocalStore = JSON.parse(localStorage.getItem('pacients'))

      setpacients(pacientsLocalStore)
    }
    getLocalStore();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients))
    
  }, [pacients])
  const deletePacient = (id) =>{
    const pacientsAfterDelete = pacients.filter(
      pacient => pacient.id !== id
    )
    setpacients(pacientsAfterDelete)
  }

  return (
    <div className="App container mx-auto mt-10 ">
      <Header />
      <div className="flex mt-12  xs:flex-col  md:flex-row">
        <Form pacients={pacients} setpacients={setpacients} pacient = {pacient} setpacient={setpacient}/>
        <List pacients={pacients} setpacient={setpacient} deletePacient={deletePacient} />
      </div>
    </div>
  );
}

export default App;
