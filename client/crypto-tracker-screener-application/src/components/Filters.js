import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import selectIcon from "../assets/select-icon.svg";
const Filters = () => {
  let { setCurrency, setSortBy } = useContext(CryptoContext);
  const currencyRef = useRef(null);
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.val = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };
  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      {/* <div>Search</div>
       */}
      <Search />
      <div className="flex mr-7">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-2 font-bold"
          >
            currency:
          </label>
          <input
            type="text"
            name="currency"
            placeholder="usd"
            ref={currencyRef}
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
          />
          {/* <input type="" /> */}
          <button type="submit" className="ml-1 cursor-pointer">
            <img src={submitIcon} alt="submit" className="w-full h-auto" />
          </button>
        </form>
      </div>
      {/* <div>Sorting</div>
       */}
      <label className="relative flex justify-center items-center ">
        <span className="font-bold mr-2">Sort By:</span>
        <select
          name="sortby"
          className="rounded bg-gray-200 text-base pl-2 pr-10 py-1.5 leading-4 capitalize focus:outline-0"
          onClick={handleSort}
        >
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="volume_desc">volume_desc</option>
          <option value="volume_asc">volume_asc</option>
          <option value="id_desc">id desc</option>
          <option value="id_asc">id asc</option>
          <option value="gecko_desc">gecko desc</option>
          <option value="gecko_asc">gecko asc</option>
        </select>
        {/* <img src={submitIcon} alt="submit" className="w-full h-"/>
         */}
        <img
          src={selectIcon}
          alt="submit"
          className="w-[1rem] absolute right-1 top-2 h-auto pointer-events-none"
        />
      </label>
    </div>
  );
};

export default Filters;
