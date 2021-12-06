const Card = ({ pacient, setpacient, deletePacient }) => {
  const { petname, species, ownername, owneremail, checkin, symptoms, id } =
    pacient;

    const handleDelete = () =>{
      const answer = confirm('Are you sure do you want delete?')

      if(answer){
        deletePacient(id)
      }
    }
  return (
    <div className="bg-gray-50 rounded-lg mt-5 shadow-lg py-4 px-7 mx-4">
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        Pet's Name: <span className="font-normal  capitalize ">{petname}</span>
      </p>
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        Species: <span className="font-normal capitalize">{species}</span>
      </p>
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        Owner's Name:{" "}
        <span className="font-normal capitalize">{ownername}</span>
      </p>
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        Owner's Email:{" "}
        <span className="font-normal capitalize">{owneremail}1</span>
      </p>
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        checkin date: <span className="font-normal capitalize">{checkin}1</span>
      </p>
      <p className=" text-gray-700 font-semibold uppercase my-2 ">
        SYMPTOMS: <span className="font-normal capitalize">{symptoms}</span>
      </p>

      <div className="mt-4 flex justify-between">
        <button
          type="button"
          className="cursor-pointer rounded-xl mx-4 bg-indigo-600 hover:bg-opacity-75 text-gray-100 font-bold px-5 py-3"
          onClick={() => setpacient(pacient)}
        >
          ✏ Edit
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-xl mx-4 text-indigo-600 hover:text-opacity-75  font-bold px-5 py-3"
  /*sin parentesís porque inicia la función automáticamente*/
          onClick={handleDelete}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
