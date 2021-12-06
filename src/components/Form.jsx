import React, { useState, useEffect, useImperativeHandle } from "react";
import Error from "./Error";

const Form = ({ pacients, setpacients, pacient, setpacient }) => {
  //useStates
  const [petname, setpetname] = useState("");
  const [species, setspecies] = useState("");
  const [ownername, setownername] = useState("");
  const [owneremail, setowneremail] = useState("");
  const [checkin, setcheckin] = useState("");
  const [symptoms, setsymptoms] = useState("");

  const [error, seterror] = useState(false);

  //genera un id único sin necesidad de liberías externas
  const idgenerate = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  useEffect(() => {
    if( Object.keys(pacient).length > 0){  
    setpetname(pacient.petname);
    setspecies(pacient.species);
    setownername(pacient.ownername);
    setowneremail(pacient.owneremail);
    setcheckin(pacient.checkin);
    setsymptoms(pacient.symptoms);
    }
  }, [pacient]);

  //maneja el envío del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [petname, species, ownername, owneremail, checkin, symptoms].includes("")
    ) {
      seterror(true);
      return;
    }

    seterror(false);

    //objeto paciente
    const addPacient = {
      petname,
      species,
      ownername,
      owneremail,
      checkin,
      symptoms,
    };
    //valida si se está editando
    if (pacient.id) {
      //edit
      console.log("update");
      addPacient.id = pacient.id;
      const updatePacients = pacients.map((pacientState) =>
        pacientState.id === addPacient.id ? addPacient : pacientState
      );
      setpacients(updatePacients);
      setpacient({})
    } else {
      //ADD
      console.log("add");
      addPacient.id = idgenerate();
      //agrega el nuevo registro a los registros existentes
      setpacients([...pacients, addPacient]);
    }

    //resetea el form
    setpetname("");
    setspecies("");
    setownername("");
    setowneremail("");
    setcheckin("");
    setsymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-5">
      <h2 className="text-center font-black text-3xl">Add</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 rounded-lg mt-5 mx-auto shadow-lg py-4 px-7"
      >
        <div className="my-6">
          <label
            htmlFor="petName"
            className="block text-gray-700 font-semibold uppercase"
          >
            Pet's name
          </label>
          <input
            type="text"
            name="petName"
            id="petName"
            placeholder="Set pet name"
            className="w-full  p-2 border-2 rounded-lg"
            value={petname}
            onChange={(e) => setpetname(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="petspecies"
            className="block text-gray-700 font-semibold uppercase"
          >
            Pet's name
          </label>
          <select
            type="text"
            name="petName"
            id="petspecies"
            placeholder="Set pet name"
            className="w-full  p-2 border-2 rounded-lg"
            value={species}
            onChange={(e) => setspecies(e.target.value)}
          >
            <option value="">Select a species</option>
            <option value="cat">🐱 Cat</option>
            <option value="dog">🐶 Dog</option>
            <option value="turtle">🐢 Turtle</option>
            <option value="lizard">🦎 Lizard</option>
            <option value="hamster">🐹 Hamster</option>
            <option value="rabbit">🐰 Rabbit</option>
            <option value="bird">🦜 Bird</option>
            value={ownername}
          </select>
        </div>
        <div className="my-6">
          <label
            htmlFor="ownerName"
            className="block text-gray-700 font-semibold uppercase"
          >
            Owner's name
          </label>
          <input
            type="text"
            name="ownerName"
            id="ownerName"
            placeholder="Set owner name"
            className="w-full p-2 border-2 rounded-lg"
            value={ownername}
            onChange={(e) => setownername(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="ownerEmail"
            className="block text-gray-700 font-semibold uppercase"
          >
            Owner's email
          </label>
          <input
            type="email"
            name="ownerEmail"
            id="ownerEmail"
            placeholder="Set owner Email"
            className="w-full p-2 border-2 rounded-lg"
            value={owneremail}
            onChange={(e) => setowneremail(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="checkinDate"
            className="block text-gray-700 font-semibold uppercase"
          >
            Checkin Date
          </label>
          <input
            type="date"
            name="checkinDate"
            id="checkinDate"
            className="w-full p-2 border-2 rounded-lg"
            value={checkin}
            onChange={(e) => setcheckin(e.target.value)}
          />
        </div>
        <div className="my-6">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 font-semibold uppercase"
          >
            symptoms
          </label>
          <textarea
            type="date"
            name="symptoms"
            id="symptoms"
            className="w-full p-2 border-2 rounded-lg"
            placeholder="Describe symptoms"
            value={symptoms}
            onChange={(e) => setsymptoms(e.target.value)}
          ></textarea>
          {error ? <Error mensaje="You must be fill all inputs" /> : null}
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={pacient.id ? "✏ Edit" : "➕ add"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
