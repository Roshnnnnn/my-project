import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllData,
  selectStores,
} from "../../redux/slices/allProductsSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import StoreCard from "../common/StoreCard.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

const Store = () => {
  const dispatch = useDispatch();
  const allStores = useSelector(selectStores);

  const [displayedStores, setDisplayedStores] = useState([]);
  const [showAllStores, setShowAllStores] = useState(false);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    if (!showAllStores) {
      setDisplayedStores(allStores.slice(0, 12));
    } else {
      setDisplayedStores(allStores);
    }
  }, [allStores, showAllStores]);

  const handleShowMoreStores = () => {
    setShowAllStores(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold mt-6 mb-2">Stores</h2>
        <div className="flex">
          <Sidebar />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
        {!showAllStores && allStores.length > 12 && (
          <button
            onClick={handleShowMoreStores}
            className="m-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition ease-in-out duration-300"
          >
            Show More Stores
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
