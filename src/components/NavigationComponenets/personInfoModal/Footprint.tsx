import React, { useState } from "react";

function Footprint() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState();
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState();

  const [modalName, setModalName] = useState(name);
  const [modalSurname, setModalSurname] = useState(surname);
  const [modalAge, setModalAge] = useState(age);
  const [modalMobileNumber, setModalMobileNumber] = useState(mobileNumber);
  const [modalAmount, setModalAmount] = useState(amount);

  const handleNameChange = (event: any) => {
    setModalName(event.target.value);
  };

  const handleSurnameChange = (event: any) => {
    setModalSurname(event.target.value);
  };

  const handleAgeChange = (event: any) => {
    setModalAge(Number(event.target.value));
  };

  const handleMobileNumberChange = (event: any) => {
    setModalMobileNumber(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    setModalAmount(Number(event.target.value));
  };

  const handleSaveChanges = () => {
    setName(modalName);
    setSurname(modalSurname);
    setAge(modalAge);
    setMobileNumber(modalMobileNumber);
    setAmount(modalAmount);
    setShowModal(false);
  };

  return (
    <div className="w-full bg-slate-100 rounded p-4 h-full">
      <div className="bg-white rounded-xl p-6 border border-gray-300 shadow-lg hover:transform hover:scale-105 hover:shadow-xl transition-transform duration-700 h-64 hover:cursor-pointer w-64">
        <h1 className="text-xl font-bold mb-2 text-blue-900" >Name: {name}</h1>
        <h2 className="text-xl font-bold  mb-4 text-blue-900">Surname: {surname}</h2>
        <ul className="mb-4">
          <li className="text-sm font-mono text-blue-900">Age: {age}</li>
          <li className="text-sm font-mono text-blue-900">Amount: ${amount}</li>
          <li className="text-sm font-mono text-blue-900">Mobile Number: {mobileNumber}</li>
        </ul>
        <button
          className="bg-blue-600 text-white font-semibold  uppercase text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 active-bg-pink-600 transition duration-300 ease-in-out"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Fill The Information
        </button>
      </div>

      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-2xl font-semibold ">FILL THE INFORMATION</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold  outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="mb-4 flex justify-between">
                  <label className="text-base font-semibold ">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="border border-gray-300 p-2 rounded"
                    value={modalName}
                    onChange={handleNameChange}
                  />
                </div>

                <div className="mb-4 flex justify-between">
                  <label className="text-base font-semibold ">Surname:</label>
                  <input
                    type="text"
                    placeholder="Enter Surname"
                    className="border border-gray-300 p-2 rounded"
                    value={modalSurname}
                    onChange={handleSurnameChange}
                  />
                </div>

                <div className="mb-4 flex justify-between">
                  <label className="text-base font-semibold ">Age:</label>
                  <input
                    type="number"
                    placeholder="Enter Age"
                    className="border border-gray-300 p-2 rounded"
                    value={modalAge}
                    onChange={handleAgeChange}
                  />
                </div>

                <div className="mb-4 flex justify-between">
                  <label className="text-base font-semibold ">Mobile Number:</label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="border border-gray-300 p-2 rounded"
                    value={modalMobileNumber}
                    onChange={handleMobileNumberChange}
                  />
                </div>

                <div className="flex justify-between">
                  <label className="text-base font-semibold ">Amount:</label>
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="border border-gray-300 p-2 rounded"
                    value={modalAmount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-amber-400 text-white active:bg-amber-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-36"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Footprint;
