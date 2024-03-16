// AddressForm.js
import React from 'react';

const AddressForm = ({ address, onAddressChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onAddressChange(name, value);
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Street</label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">City</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>
    </form>
  );
};

export default AddressForm;
