import React from "react";

function Inputfield({label, amount = 0, onAmountChange, amountDisabled = false, selectCurrency = "usd", onCurrencyChange, currencyOptions = []}){

    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label className="mb-2 text-black/40 inline-block">{label}</label>
                <input type="number" value={amount} onChange={(e) => onAmountChange && onAmountChange(e.target.value)} className="border-l-rose-400 border-2 py-1 bg-transparent w-full px-1 focus:outline-none" disabled = {amountDisabled}/>
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency</p>

                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                    {currencyOptions.map((curr) => (
                        <option keys ={curr} value={curr}>{curr}</option>
                    ))}
                    
                </select>
            </div>
        </div>
    )
}

export default Inputfield;