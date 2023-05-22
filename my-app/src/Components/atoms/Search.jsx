import React, { useEffect } from "react";
import "./Search.css";
import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(
      "http://cdn-api.co-vin.in/api/v2/admin/location/states "
    );
    setSearchResult(res.data.states);
    setOriginalData(res.data.states);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === "") {
      setSearchResult([...originalData]);
      //getData();
    } else {
      const filteredData = originalData.filter((element) =>
        element.state_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(filteredData);
    }
  };

  return (
    <>
      <center>
        <header>
          <ul>
            <li>
              <a className="links" href="#user">
                <button className="signbutton" type="button">
                  Sign in
                </button>
              </a>
            </li>
            <li>
              <a href="#grid">
                <img
                  className="grid"
                  src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                  title="Google apps"
                />
              </a>
            </li>
            <li>
              <a href="#images">Images</a>
            </li>
            <li>
              <a href="#gmail">Gmail</a>
            </li>
          </ul>
        </header>
        <div className="logo">
          <img
            alt="Google"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
        </div>
        <div className="bar">
          <input
            className="searchbar"
            type="text"
            title="Search"
            onChange={handleSearch}
          />
          <a href="#">
            <img
              className="voice"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
              title="Search by Voice"
            />
          </a>
          {/* {searchResult.map((ele) => (
                <div className="list-items" key={ele.id}>
                  <span>{ele["state_name"]}</span>
                  {ele["state_name"]}
                </div>
              ))} */}
          <div className="search-results flex-column">
            {searchResult.map((ele) => (
              <div
                key={ele["state_id"]}
                className="list-items  d-flex justify-content-start align-items-center  flex-column"
              >
                <div className="list-items d-flex justify-content-start align-items-center">
                  <span>{ele["state_name"]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="buttons">
          <button className="button" type="button">
            Google Search
          </button>
          <button className="button" type="button">
            I'm Feeling Lucky
          </button>
        </div> */}
      </center>
    </>
  );
};

export default Search;
