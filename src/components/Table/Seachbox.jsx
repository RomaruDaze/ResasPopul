import React, { useState, useEffect } from "react";
import fetchCityOptions from "../../constants/CityOptions";
import prefOptions from "../../constants/prefOptions";

function Searchbox({ setCityCode, setPrefCode, setCategory }) {
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCityCode, setSelectedCityCode] = useState("");
  const [selectedPrefCode, setSelectedPrefCode] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showPrefDropdown, setShowPrefDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = [
    { code: "老年人口", name: "老年人口" },
    { code: "生産年齢人口", name: "生産年齢人口" },
    { code: "年少人口", name: "年少人口" },
    { code: "総人口", name: "総人口" },
  ];

  useEffect(() => {
    async function loadCityOptions() {
      if (selectedPrefCode) {
        const options = await fetchCityOptions(selectedPrefCode);
        setCityOptions(options);
      }
    }
    loadCityOptions();
  }, [selectedPrefCode]);

  const handleCategoryChange = (event) => {
    const code = event.target.value;
    setSelectedCategory(code);
    setCategory(code);
    setShowCategoryDropdown(false);
  };

  const handleCityChange = (event) => {
    const code = event.target.value;
    setSelectedCityCode(code);
    setCityCode(code);
    setShowCityDropdown(false);
  };

  const handlePrefChange = (event) => {
    const code = event.target.value;
    setSelectedPrefCode(code);
    setPrefCode(code);
    setShowPrefDropdown(false);
  };

  const handleDropdownBlur = (event, closeDropdown) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        closeDropdown(false);
      }
    }, 0);
  };

  const getCityName = (code) =>
    cityOptions.find((option) => option.code === code)?.name || "Select City";
  const getPrefName = (code) =>
    prefOptions.find((option) => option.code === code)?.name ||
    "Select Prefecture";

  return (
    <div>
      <div className="searchbox-title">
        <h1>検索条件</h1>
      </div>
      <div className="searchbox">
        <div
          className="dropdown"
          onBlur={(event) => handleDropdownBlur(event, setShowPrefDropdown)}
          tabIndex="0"
        >
          <button
            className="dropbtn"
            onClick={() => setShowPrefDropdown(!showPrefDropdown)}
          >
            {getPrefName(selectedPrefCode)}
          </button>
          {showPrefDropdown && (
            <div className="dropdown-content">
              {prefOptions.map((option) => (
                <label key={option.code}>
                  <input
                    type="radio"
                    name="prefecture"
                    value={option.code}
                    checked={selectedPrefCode === option.code}
                    onChange={handlePrefChange}
                  />
                  {option.name}
                </label>
              ))}
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onBlur={(event) => handleDropdownBlur(event, setShowCityDropdown)}
          tabIndex="0"
        >
          <button
            className="dropbtn"
            onClick={() => setShowCityDropdown(!showCityDropdown)}
          >
            {getCityName(selectedCityCode)}
          </button>
          {showCityDropdown && (
            <div className="dropdown-content">
              {cityOptions.map((option) => (
                <label key={option.code}>
                  <input
                    type="radio"
                    name="city"
                    value={option.code}
                    checked={selectedCityCode === option.code}
                    onChange={handleCityChange}
                  />
                  {option.name}
                </label>
              ))}
            </div>
          )}
        </div>
        <div
          className="dropdown"
          onBlur={(event) => handleDropdownBlur(event, setShowCategoryDropdown)}
          tabIndex="0"
        >
          <button
            className="dropbtn"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            {categories.find((option) => option.code === selectedCategory)
              ?.name || "Select Category"}
          </button>
          {showCategoryDropdown && (
            <div className="dropdown-content-cat">
              {categories.map((option) => (
                <label key={option.code}>
                  <input
                    type="radio"
                    name="category"
                    value={option.code}
                    checked={selectedCategory === option.code}
                    onChange={handleCategoryChange}
                  />
                  {option.name}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
