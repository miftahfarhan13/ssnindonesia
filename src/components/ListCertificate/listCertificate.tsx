// "use client";

import React, { useState } from "react";
import "./certificateItem";
import CertificateItem from "./certificateItem";
import FsLightbox from "fslightbox-react";

export default function ListCertificate() {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const listCertificate = [
    {
      image: "../../public/images/cert-3.jpg",
      title: 'Certificate of "Good Manufacturing Practices" Milkfish Frozen',
    },
    {
      image: "../../public/images/cert-1.jpg",
      title: "Good Quarantine Practices Certificate",
    },
    {
      image: "../../public/images/cert-4.jpg",
      title: 'Certificate of "Good Manufacturing Practices" Soka Crab',
    },
    {
      image: "../../public/images/cert-2.jpg",
      title: "Fish Quarantine Installation Certificate",
    },
    {
      image: "../../public/images/cert-5.jpg",
      title: 'Certificate of "Good Manufacturing Practices" Shrimp Frozen',
    },
  ];

  const certificateImage = [
    "../../public/images/cert-3.jpg",
    "../../public/images/cert-1.jpg",
    "../../public/images/cert-4.jpg",
    "../../public/images/cert-2.jpg",
    "../../public/images/cert-5.jpg",
  ];

  const handleClick = (index) => {
    setToggler(!toggler);
    setProductIndex(index);
    console.log(toggler)
  };

  return (
    <div className="row">
      {listCertificate.map((data, index) => (
        <div
          onClick={() => setToggler(!toggler)}
          className="col-sm-12 col-md"
          key={index}
        >
          <CertificateItem image={data.image} title={data.title} />
        </div>
      ))}
      <FsLightbox
        toggler={toggler}
        sources={certificateImage}
        key={productIndex}
      />
    </div>
  );
}
