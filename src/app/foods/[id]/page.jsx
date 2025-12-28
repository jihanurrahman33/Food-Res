import { redirect } from "next/navigation";
import React from "react";

/* ---------------- API CALL ---------------- */
const getFoodById = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details || null;
};
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );
  const { details = {} } = await res.json();
  return {
    title: details.title,
    description: `Details and reviews for ${details.title}`,
  };
}
/* ---------------- PAGE ---------------- */
const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodById(id);

  if (!food.title) {
    redirect("/foods");
    //return <h1 className="text-center text-2xl mt-10">Food Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-white-800 mb-2">
            {food.title}
          </h1>

          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              {food.category}
            </span>

            <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
              {food.area}
            </span>
          </div>

          <p className="text-2xl font-semibold text-orange-600 mb-6">
            ৳ {food.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition">
              Add to Cart
            </button>

            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
