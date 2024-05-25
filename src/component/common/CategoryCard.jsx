// import { useState, useEffect } from "react";
// import { FaBookmark } from "react-icons/fa";

// const CategoryCard = ({ category }) => {
//   const defaultIcon = "https://cdn-icons-png.flaticon.com/512/1160/1160358.png";
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   useEffect(() => {
//     const bookmarkedCategories =
//       JSON.parse(localStorage.getItem("bookmarkedCategories")) || [];
//     setIsBookmarked(bookmarkedCategories.includes(category.name));
//   }, [category.name]);

//   const toggleBookmark = () => {
//     const bookmarkedCategories =
//       JSON.parse(localStorage.getItem("bookmarkedCategories")) || [];
//     if (isBookmarked) {
//       const updatedBookmarks = bookmarkedCategories.filter(
//         (name) => name !== category.name
//       );
//       localStorage.setItem(
//         "bookmarkedCategories",
//         JSON.stringify(updatedBookmarks)
//       );
//     } else {
//       localStorage.setItem(
//         "bookmarkedCategories",
//         JSON.stringify([...bookmarkedCategories, category.name])
//       );
//     }
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     <div className="p-4">
//       <div className="flex flex-wrap">
//         <div className="bg-white rounded-lg overflow-hidden shadow-md w-full relative">
//           <img
//             className="w-full h-48 object-cover object-center"
//             src={category.icon || defaultIcon}
//             alt={category.name}
//           />
//           <button
//             className={`absolute top-2 right-2 bg-transparent border-none focus:outline-none ${
//               isBookmarked ? "text-red-500" : "text-gray-500"
//             }`}
//             onClick={toggleBookmark}
//           >
//             <FaBookmark
//               className={`text-lg ${
//                 isBookmarked ? "text-red-500" : "text-gray-500"
//               }`}
//             />
//           </button>
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               {category.name}
//             </h2>
//             <p className="text-sm text-gray-600 mt-1">
//               Visits: {category.visits} | Store Count: {category.store_count}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
