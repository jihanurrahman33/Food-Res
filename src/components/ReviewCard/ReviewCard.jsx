"use client";

import React, { useState } from "react";

const ReviewCard = ({ review }) => {
  const {
    user,
    email,
    photo,
    rating,
    review: reviewText,
    likes,
    date,
  } = review;

  const [likeCount, setLikeCount] = useState(likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-4">{reviewText}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            liked ? "text-blue-600" : "text-gray-500"
          } hover:text-blue-600 transition`}
        >
          👍 {likeCount}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
