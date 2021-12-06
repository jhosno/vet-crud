import React, { useState, useEffect } from "react";
import Card from "./Card";

const List = ({ pacients, setpacient, deletePacient }) => {
  useEffect(() => {
    if(pacients.length > 0){
      console.log('Nuevo paciente');
    }
  }, [pacients])
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="text-center font-black text-3xl">Pacients</h2>
      {pacients.length !== 0 ? (
        <div className="h-2/3 overflow-y-auto">
          {pacients.map((pacient) => (
            <Card key={pacient.id} pacient={pacient} setpacient={setpacient} deletePacient ={deletePacient} />
          ))}
        </div>
      ) : (
        <div className="bg-yellow-600 bg-opacity-60 text-gray-100 p-4 my-2 rounded-xl m-6">
          <span className="py-2 px-3 bg-yellow-600 rounded-3xl mr-3">🧐</span>
          You don't have any record yet
        </div>
      )}
    </div>
  );
};

export default List;
