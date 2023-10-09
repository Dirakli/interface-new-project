import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";


function Launchpad() {

    const { formArray, setFormArray } = useContext(AppContext)
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [editIndex, setEditIndex] = useState<number | null>(null);
    useEffect(() => {
        const savedData = localStorage.getItem("formArray");
        if (savedData) {
            setFormArray(JSON.parse(savedData));
        }

    }, []);

    const inputField = [
        { name: "customer", label: "Customer", placeholder: "Customer" },
        { name: "invoice", label: "Invoice", placeholder: "Invoice" },
        { name: "age", label: "Age", placeholder: "Age" },
        { name: "amount", label: "Amount", placeholder: "Amount" }
    ];

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === "customer" && (value !== "" && !/^[a-zA-Z]+$/.test(value))) {
            return;
        }

        if (name === "invoice" && value.length > 5) {
        return; 
    }

        if (name === "age" && (isNaN(value) || parseInt(value) > 150 || parseInt(value) < 0)) {
            return;
        }

        if (name === "amount" && (isNaN(value) || parseInt(value) > 10000 || parseInt(value) < 0)) {
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setFormData(formArray[index]);
    };

    const handleSubmit = (e: any) => {
        const nonEmptyFieldCount = Object.values(formData).filter(
            (value) => value !== ""
        ).length;

        e.preventDefault();
        if (nonEmptyFieldCount > 3) {
            if (editIndex !== null) {
                const updatedFormArray = [...formArray];
                updatedFormArray[editIndex] = formData;
                setFormArray(updatedFormArray);
                setEditIndex(null);

                localStorage.setItem("formArray", JSON.stringify(updatedFormArray));
            } else {
                const newFormArray = [...formArray, formData];
                setFormArray(newFormArray);

                localStorage.setItem("formArray", JSON.stringify(newFormArray));
            }

            setFormData({});
        } else {
            alert("Please fill empty input/inputs");
        }
    };


    const handleReset = () => {
        localStorage.removeItem("formArray");
        setFormArray([]);
        setFormData({});
        setEditIndex(null);
    };

    const handleDelete = (index: number) => {
        const updatedFormArray = [...formArray];
        updatedFormArray.splice(index, 1);

        setFormArray(updatedFormArray);

        localStorage.setItem("formArray", JSON.stringify(updatedFormArray));
    };



    return (
        <div className="w-full bg-slate-100 rounded p-4 h-full">
            <h1 className="text-lg font-bold font-mono text-blue-900" >Sales Information</h1>
            <form className="flex flex-col md:flex-row md:justify-start md:items-end mt-4 max-w-4xl" onSubmit={handleSubmit}>
                {inputField.map((field, index) => {
                    return (
                        <div key={index} className="md:mr-4" >
                            <label className=" font-mono text-blue-900 block  text-md font-bold mb-2">
                                {field.label}
                            </label>
                            <input
                                type="text"
                                name={field.name}
                                placeholder={field.placeholder}
                                onChange={handleChange}
                                value={formData[field.name] || ""}
                                className=" font-mono text-blue-900 border border-gray-300 p-2 rounded-lg shadow-lg  md:w-20  w-full"
                            />
                        </div>
                    );
                })}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg border-none shadow-lg mt-4 md:mt-0 mr-4 md:w-20  w-full"
                >
                    {editIndex !== null ? "Save" : "Submit"}
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4  rounded-lg border-none shadow-lg  mt-4 md:mt-0 mr-4 md:w-20   w-full"
                >
                    Reset
                </button>
            </form>
            <div className="max-h-64 md:max-h-96 overflow-y-auto overflow-x-auto sm:w-[35rem]" >

                <div className="flex mt-4 sm:w-[23.75rem] w-[40rem]"> {/* here is the width problem/ width პრობლემის სათავე ეს */}
                    <p className=" font-mono text-blue-900 flex justify-start text-lg font-bold w-40">Customer: </p>
                    <p className=" font-mono text-blue-900 flex justify-start text-lg font-bold w-40">Invoice: </p>
                    <p className=" font-mono text-blue-900 flex justify-start text-lg font-bold w-40">Age: </p>
                    <p className=" font-mono text-blue-900 flex justify-start text-lg font-bold w-40">Amount: </p>
                </div>
                {formArray.map((item: any, index: any) => (
                    <div key={index} className="flex max-h-16 mt-1 w-fit sm:w-[35rem]">
                        <p className=" font-mono text-blue-900 flex justify-start items-center w-40">{item.customer}</p>
                        <p className=" font-mono text-blue-900 flex justify-start items-center w-40">#{item.invoice}</p>
                        <p className=" font-mono text-blue-900 flex justify-start items-center w-40">{item.age}</p>
                        <p className=" font-mono text-blue-900 flex justify-start items-center w-40">${item.amount}</p>
                        <button className="bg-amber-400 h-10 w-24 hover:bg-amber-400 rounded-lg text-white flex justify-center items-center border-none font-mono " onClick={() => handleEdit(index)}>
                            Edit
                        </button>
                        <button className="bg-red-500 h-10 w-24 hover:bg-red-600 rounded-lg text-white flex justify-center items-center border-none font-mono ml-4" onClick={() => { handleDelete(index) }}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Launchpad;
