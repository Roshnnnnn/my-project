import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

const Filter = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filters = {
    cats: queryParams.get("cats") || "",
    cashback_enabled: queryParams.get("cashback_enabled") || "",
    is_promoted: queryParams.get("is_promoted") || "",
    is_shareable: queryParams.get("is_shareable") || "",
    status: queryParams.get("status") || "",
  };
  const [filteredData, setFilteredData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/stores`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        let filteredData = [...data];

        for (const key of Object.keys(filters)) {
          if (filters[key] !== "") {
            filteredData = filteredData.filter((item) =>
              applyFilter(item, key, filters[key])
            );
          }
        }

        setFilteredData(filteredData);
      } catch (error) {
        console.error("Error fetching filtered data:", error.message);
      }
    };

    fetchData();
  }, [filters]);

  const applyFilter = (item, filterKey, filterValue) => {
    switch (filterKey) {
      case "cats":
        return item.cats == filterValue;
      case "cashback_enabled":
        return item.cashback_enabled == filterValue;
      case "is_promoted":
        return item.is_promoted == filterValue;
      case "is_shareable":
        return item.is_shareable == filterValue;
      case "status":
        return item.status == filterValue;
      default:
        return true;
    }
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const visibleData = showAll ? filteredData : filteredData.slice(0, 6);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {visibleData.map((item, index) => (
          <div className="p-4 w-full md:w-1/2 lg:w-1/3" key={index}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
              <img
                className="w-full h-48 object-cover object-center"
                src={item.logo}
                alt={item.name}
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Visits: {item.visits} | Cashback Percent:{" "}
                  {item.cashback_percent}%
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Cashback Amount: ${item.cashback_amount} | Cashback Type:{" "}
                  {item.cashback_type}
                </p>
                <a
                  href={item.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredData.length > 6 && (
        <div className="flex justify-center m-4">
          {showAll ? (
            <button
              onClick={handleShowLess}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={handleShowMore}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Show More
            </button>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Filter;
