import React, { useState } from "react";
import "./listProduct.css";
import ProductItem from "./productItem";

export default function ListProduct() {
  const tabs = ["Shrimp", "Lobster", "Crab", "Fish"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    console.log("running");
    setActiveTab(index);
  };

  const productList = [];

  for (let index = 0; index < 6; index++) {
    productList.push(
      <div className="col-sm-12 col-md-3">
        <ProductItem
          image={"../../public/images/img-1.jpg"}
          title={"English Name | Indonesian Name"}
          latinName={"Latin Name"}
        ></ProductItem>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <div className="tab-menu">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="row">{productList}</div>
      </div>
    </div>
  );
}
