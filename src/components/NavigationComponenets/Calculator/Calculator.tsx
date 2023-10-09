import React, { useEffect, useState } from 'react';

function Calculator() {
  const [bill, setBill] = useState<any>('');
  const [tip, setTip] = useState<any>('10%');
  const [split, setSplit] = useState<any>(1);
  const [splitTotal, setSplitTotal] = useState<any>(0);

  function handleTipChange(e: any) {
    let value = e.target.value.replace('%', '');
    if (value.indexOf('%') === -1) {
      value = value + '%';
    }
    setTip(value);
  }

  function handleBillChange(e: any) {
    setBill(e.target.value);
  }

  function splitMinus() {
    setSplit((oldValue: any) => Math.max(oldValue - 1, 1));
  }

  function splitPlus() {
    setSplit((oldValue: any) => oldValue + 1);
  }

  function calculate() {
    const percentage = 1 + parseInt(tip.replace('%', '')) / 100;
    const result = (bill * percentage / split).toFixed(2);
    setSplitTotal(result);
  }

  useEffect(() => {
    calculate();
  }, [bill, tip, split]);

  return (
    <main className="bg-gray-900 w-full rounded p-4 h-full">
      <label className="block uppercase mb-1 text-white text-lg">Bill total</label>
      <input
        type="text"
        placeholder="0.00"
        value={bill}
        onChange={handleBillChange}
        className="w-full sm:w-96 border p-2 mb-4 bg-transparent text-white text-lg"
      />


      <label className="block uppercase mb-1 text-white text-lg">Tip</label>
      <input
        type="text"
        placeholder="0.00"
        value={tip}
        onChange={handleTipChange}
        className="border w-full sm:w-96 p-2 mb-4 bg-transparent text-white text-lg"
      />

      <div className="summary w-full sm:w-96 bg-blue-500 p-4 rounded flex justify-between text-lg">
        <div className="split">
          <label className="block mb-1">Split</label>
          <div className="split-control flex items-center">
            <button
              onClick={splitMinus}
              className="bg-blue-700 w-10 text-white p-2 rounded-md mr-2"
            >
              -
            </button>
            <span className="font-bold mr-2">{split}</span>
            <button
              onClick={splitPlus}
              className="bg-blue-700 w-10 text-white p-2 rounded-md"
            >
              +
            </button>
          </div>
        </div>

        <div className="result text-right">
          <label className="block mb-1">Split total</label>
          <span className="font-bold">{splitTotal}</span>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
