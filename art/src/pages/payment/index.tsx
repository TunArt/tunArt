import React from 'react';

const Payment = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{maxWidth: '600px'}}>
        <div className="w-full pt-1 pb-5">
          <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <i className="mdi mdi-credit-card-outline text-3xl"></i>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="type1" />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="type2" />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1" htmlFor="name">Name on card</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" id="name" />
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardNumber">Card number</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" id="cardNumber" />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1" htmlFor="expirationDate">Expiration date</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" id="expirationDate">
                <option value="01">01 - January</option>
                <option value="02">test</option>
                </select>
</div>
</div>
</div>
</div>
<div/>
</div>
)}
export default Payment