import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    Contact: "",
    Productdetails: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, address, Contact, Productdetails } = formData;

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(
          https://amymhaddad.s3.amazonaws.com/morocco-blue.png
        )`,
      }}
    >
      <form>
        <input
          value={firstName}
          onChange={(e) => updateFormData(e)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={(e) => updateFormData(e)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          value={address}
          onChange={(e) => updateFormData(e)}
          placeholder=" address"
          type="Text"
          name="Address"
          required
        />
        <input
          value={Contact}
          onChange={(e) => updateFormData(e)}
          placeholder="Contact No."
          type="text"
          name="Contact no."
          required
        />
        <input
          value={Productdetails}
          onChange={(e) => updateFormData(e)}
          placeholder="Product details"
          type="text"
          name="Product details"
          required
        />

        <input type="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
