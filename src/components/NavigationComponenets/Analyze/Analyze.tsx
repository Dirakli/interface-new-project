import { useContext, useState } from "react";
import { AppContext } from "../../../App";

function Analyze() {

    const { formArray } = useContext(AppContext)
    const [sum, setSum] = useState(formArray.length);

    const ageSum = formArray.reduce((total: any, person: any) => total + Number(person.age), 0);

    const amountSum = formArray.reduce((total: any, person: any) => total + Number(person.amount), 0)

    const avAge = Math.round((ageSum / sum));
    const avPerUser = Math.round((amountSum / sum));
    const income = Math.round((amountSum * 0.8));
    const tax = Math.round((amountSum * 0.2))

    const avPerUserInPercentage = (avPerUser / 10000) * 100;
    const dynamicStyle = {
        height: `${avPerUserInPercentage}%`,
    };

    const avAgeInPercentage = (avAge / 150) * 100;

    const ageDynamicStyle = {
        height: `${avAgeInPercentage}%`,
    };

    const headingItems = [
        { name: ["Timeframe: ", "People: ", "Topic: "] },
        { headings: ["Active Users", "tax", "Av. Age", "Amount Sum", "Av. Per User", "Income"] },
        { numbers: [sum, tax, avAge, amountSum, avPerUser, income] },
    ];

    return (
        <div className="w-full bg-slate-100 rounded p-4 sm:h-full">
            <h1 className="text-lg font-bold font-mono text-blue-900">Analyze section</h1>
            <div className="flex justify-between items-center">
                {(headingItems[0]?.name || []).map((item, index) => {
                    return (
                        <div key={index} className="shadow-xl col-span-2 border-zinc-600 w-44 flex justify-between items-center border-none rounded-lg">
                            <h3 className="border-none border-opacity-70 font-inter font-medium font-mono text-blue-900 text-base text-opacity-70">{item}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="md:grid grid-cols-2 mt-8 gap-4 flex flex-col">
                <div className="grid grid-cols-3 gap-4 h-64 rounded-3xl">
                    {(headingItems[1]?.headings || []).map((heading, index) => {
                        const numbersValue = (headingItems[2]?.numbers || [])[index];
                        return (
                            <div key={index} className="flex flex-col justify-start items-center  shadow-xl bg-white rounded-xl pt-4">
                                <h2 className="text-base font-medium leading-5 tracking-tighter font-mono text-blue-900">
                                    {heading}
                                </h2>
                                <span className="mt-5" >{numbersValue ? numbersValue : 0}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="bg-white h-72 p-5 rounded-3xl flex flex-col justify-start items-center">
                    <div className="border-b-2 w-full flex justify-start items-start" >
                        <h1 className="font-medium text-base leading-normal tracking-tighter font-mono text-blue-900" >Activity</h1>
                    </div>
                    <div className="flex items-end justify-between w-full h-full mt-2" >
                        <ul className="flex h-full flex-col-reverse justify-between items-start" >
                            <li className="font-mono text-blue-900">25</li>
                            <li className="font-mono text-blue-900">50</li>
                            <li className="font-mono text-blue-900">75</li>
                            <li className="font-mono text-blue-900">100</li>
                            <li className="font-mono text-blue-900">125</li>
                            <li className="font-mono text-blue-900">150</li>
                        </ul>
                        <div style={ageDynamicStyle} className="w-16 bg-blue-400 rounded-t-xl" ></div>

                        <ul className="flex h-full flex-col-reverse justify-between items-start" >
                            <li className="font-mono text-blue-900">0</li>
                            <li className="font-mono text-blue-900">2000</li>
                            <li className="font-mono text-blue-900">4000</li>
                            <li className="font-mono text-blue-900">6000</li>
                            <li className="font-mono text-blue-900">8000</li>
                            <li className="font-mono text-blue-900">10000</li>
                        </ul>
                        <div style={dynamicStyle} className="w-16 bg-green-400 rounded-t-xl" ></div>
                    </div>
                    <div className="border-t-2 w-full flex justify-between items-center" >
                        <span className="font-medium text-base leading-normal tracking-tighter font-mono text-blue-900" >Average Age</span>
                        <span className="font-medium text-base leading-normal  ml-16 tracking-tighter font-mono text-blue-900" >Av.Amount Per Person</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analyze;
