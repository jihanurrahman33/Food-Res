"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FeedbackForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      message: e.target.message.value,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("Feedback added successfully!");
      e.target.reset();
      router.push("/feedbacks");
    } else {
      alert("Failed to add feedback.");
    }
    console.log({ data });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center">
        <textarea
          className="w-xl border-dashed mx-auto p-3"
          name="message"
          id=""
          cols={30}
          rows={10}
          required
        ></textarea>
        <hr />
        <button className="btn">Add Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
