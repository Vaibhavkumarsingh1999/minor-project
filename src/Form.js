import React, { useContext, useState } from "react";
import { ProductContext } from "./App";
import "./style.css";

const Form = () => {
  const productContext = useContext(ProductContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contact: "",
    productDetails: "",
    size: "",
    type: "",
    file: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const {
    firstName,
    lastName,
    address,
    contact,
    productDetails,
    file,
    size,
    type,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      type: type,
      name: firstName + lastName,
      contact: contact,
      address: address,
      size: size,
      discription: productDetails,
      imgUrl: URL.createObjectURL(file),
    };
    let newProductArr = [...productContext.productList];
    newProductArr.push(obj);
    console.log(newProductArr);
    productContext.setProductList(newProductArr);
  };

  return (
    <div
      style={{
        backgroundColor: "#ECF0F1",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <button onClick={() => console.log(productContext)}>SHOW</button> */}
      <div
        style={{
          padding: "40px",
          margin: "25px",
          width: "600px",
          height: "500px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(
          https://thumbs.dreamstime.com/z/people-charity-family-care-concept-close-up-woman-hands-holding-girl-hands-blue-background-59071781.jpg
        )`,
          backgroundRepeat: "no-repeat",
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
            name="address"
            required
          />
          <input
            value={contact}
            onChange={(e) => updateFormData(e)}
            placeholder="Contact No."
            type="text"
            name="contact"
            required
          />
          <input
            value={productDetails}
            onChange={(e) => updateFormData(e)}
            placeholder="Product details"
            type="text"
            name="productDetails"
            required
          />

          <input
            value={size}
            onChange={(e) => updateFormData(e)}
            placeholder="Enter the Size"
            type="text"
            name="size"
            required
          />

          <input
            value={type}
            onChange={(e) => updateFormData(e)}
            placeholder="Enter Dress Type"
            type="text"
            name="type"
            required
          />

          <input
            type="file"
            // value={file}
            onChange={(e) => {
              setFormData({
                ...formData,
                file: e.target.files[0],
              });
            }}
          />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
