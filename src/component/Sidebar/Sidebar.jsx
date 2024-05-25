import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filters, setFiltersState] = useState({
    cats: "",
    cashback_enabled: "",
    is_promoted: "",
    is_shareable: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = async () => {
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

      dispatch(setData(filteredData));

      console.log("hlo", filteredData);

      const queryParams = new URLSearchParams();
      for (const key in filters) {
        if (filters[key]) {
          queryParams.append(key, filters[key]);
        }
      }
      const queryString = queryParams.toString();
      navigate(`filter?${queryString}`);
    } catch (error) {
      console.error("Error applying filters:", error.message);
    }
  };

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

  return (
    <div className="bg-gray-100 p-6 w-full sm:w-[20rem] h-full border-r border-gray-200">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Stores</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Cats</label>
          <input
            type="number"
            name="cats"
            value={filters.cats}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Cashback Enabled</label>
          <select
            name="cashback_enabled"
            value={filters.cashback_enabled}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Is Promoted</label>
          <select
            name="is_promoted"
            value={filters.is_promoted}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Is Shareable</label>
          <select
            name="is_shareable"
            value={filters.is_shareable}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
            <option value="trash">Trash</option>
          </select>
        </div>

        {/* Apply Button */}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleApplyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
