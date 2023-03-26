import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";
const SearchInput = ({ handleSearch }) => {
  //separating searchInput will not lead to three or multiple times debounce func calls, we will pass debounce func as prop to ensure result are fetched for once.
  const [searchText, setSearchText, setSearchData] = useState("");
  // const [searchData, setSearchData] = useState();
  let { searchData, setCoinSearch } = useContext(CryptoContext);
  //   let { searchData } = useContext(CryptoContext);
  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    console.log(query);
    setSearchText(query);
    //debounce will allow us to finish writing valid keywords first by waiting for sometime, then fetching will happen.
    handleSearch(query);
  };
  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    // setSearchData();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };
  return (
    <>
      <form
        className="w-96 relative flex items-center ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder: text-gray-100 pl-2
          required outline-0 border border-transparent focus:border-cyan"
          placeholder="search here..."
        />
        <button type="submit" className="absolute right-1">
          <img src={searchIcon} className="w-full h-auto" alt="Search" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {/* <li>bitcoin</li>
          <li>bitcoin</li>
          <li>bitcoin</li> */}
          {searchData ? (
            searchData.map((ele) => {
              //   return <li>{ele.id}</li>;
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={ele.id}
                  onClick={() => selectCoin(ele.id)}
                >
                  <img
                    className="w-[1.2rem] h-[1.2rem] mx-1.5"
                    src={ele.thumb}
                    alt={ele.name}
                  ></img>
                  <span>{ele.name}</span>
                </li>
              );
            })
          ) : (
            // <h2>Wait, We are fetching the data!</h2>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin "
                role="status"
              />
              <span className="ml-2">wait, fetching the data!</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};
const Search = () => {
  //   const [searchText, setSearchText] = useState("");
  let { getSearchResult } = useContext(CryptoContext);
  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);
  //   let handleInput = (e) => {
  //     e.preventDefault();
  //     let query = e.target.value;
  //     console.log(query);
  //     setSearchText(query);
  //     //debounce will allow us to finish writing valid keywords first by waiting for sometime, then fetching will happen.
  //     debounceFunc(query);
  //   };
  return (
    <>
      {/* <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder: text-gray-100 pl-2
          required outline-0 border border-transparent focus:border-cyan"
          placeholder="search here..."
        />
        <button type="submit" className="absolute right-1">
          <img src={searchIcon} className="w-full h-auto" alt="Search" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>bitcoin</li>
          <li>bitcoin</li>
          <li>bitcoin</li>
        </ul>
      ) : null} */}
      <div className="relative">
        <SearchInput handleSearch={debounceFunc} />
      </div>
    </>
  );
};

export default Search;
