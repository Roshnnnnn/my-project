import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllData,
  selectStores,
} from "../../redux/slices/allProductsSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import StoreCard from "./StoreCard";

const BookMark = () => {
  const dispatch = useDispatch();
  const allStores = useSelector(selectStores);
  const [bookmarkedStores, setBookmarkedStores] = useState([]);
  const [showAllStores, setShowAllStores] = useState(false);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  useEffect(() => {
    const bookmarkedStores =
      JSON.parse(localStorage.getItem("bookmarkedStores")) || [];
    setBookmarkedStores(
      allStores.filter((store) => bookmarkedStores.includes(store.name))
    );
  }, [allStores]);

  const handleShowMoreStores = () => {
    setShowAllStores(true);
  };

  const handleShowLessStores = () => {
    setShowAllStores(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Book Mark</h1>
        <div className="mb-8">
          {bookmarkedStores.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {showAllStores
                ? bookmarkedStores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                  ))
                : bookmarkedStores
                    .slice(0, 6)
                    .map((store) => <StoreCard key={store.id} store={store} />)}
            </div>
          )}
          {bookmarkedStores.length > 6 && (
            <div>
              {!showAllStores ? (
                <button
                  onClick={handleShowMoreStores}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition ease-in-out duration-300"
                >
                  Show More Stores
                </button>
              ) : (
                <button
                  onClick={handleShowLessStores}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition ease-in-out duration-300"
                >
                  Show Less Stores
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookMark;
