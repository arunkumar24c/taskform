import React from "react";

const DisplayPage = ({ location }) => {
  // Parse the query parameters to get the form data
  const searchParams = new URLSearchParams(location.search);
  const formData = {
    name: searchParams.get("name"),
    email: searchParams.get("email"),
    phoneNumber: searchParams.get("phone"),
    image: searchParams.get("image"),
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Display Page</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      {formData.image && (
        <div>
          <p>Image:</p>
          <img src={formData.image} alt="Uploaded" className="max-w-full" />
        </div>
      )}
    </div>
  );
};

export default DisplayPage;
