"use client";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition flex flex-col">
      {/* Message */}
      <p className="text-gray-800 text-base mb-3">{message}</p>

      {/* Date */}
      <span className="text-sm text-gray-500 mb-4">
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </span>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <button
          onClick={() => onUpdate(_id)}
          className="flex-1 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="flex-1 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
