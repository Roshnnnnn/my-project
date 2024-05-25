import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

const StoreCard = ({ store }) => {
  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/1160/1160358.png";
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarkedStores =
      JSON.parse(localStorage.getItem("bookmarkedStores")) || [];
    setIsBookmarked(bookmarkedStores.includes(store.name));
  }, [store.name]);

  const toggleBookmark = () => {
    const bookmarkedStores =
      JSON.parse(localStorage.getItem("bookmarkedStores")) || [];
    if (isBookmarked) {
      const updatedBookmarks = bookmarkedStores.filter(
        (name) => name !== store.name
      );
      localStorage.setItem(
        "bookmarkedStores",
        JSON.stringify(updatedBookmarks)
      );
    } else {
      localStorage.setItem(
        "bookmarkedStores",
        JSON.stringify([...bookmarkedStores, store.name])
      );
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
        <img
          className="w-full h-48 object-cover object-center"
          src={store.logo || defaultImage}
          alt={store.name}
        />
        <button
          className={`absolute top-2 right-2 bg-transparent border-none focus:outline-none ${
            isBookmarked ? "text-red-500" : "text-gray-500"
          }`}
          onClick={toggleBookmark}
        >
          <FaBookmark
            className={`text-lg ${
              isBookmarked ? "text-red-500" : "text-gray-500"
            }`}
          />
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{store.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Visits: {store.visits} | Cashback Percent: {store.cashback_percent}%
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Cashback Amount: ${store.cashback_amount} | Cashback Type:{" "}
            {store.cashback_type}
          </p>
          <a
            href={store.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
