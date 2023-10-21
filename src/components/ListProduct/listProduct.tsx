import { useState } from 'react';
import './listProduct.css';
import ProductItem from './productItem';
import { categories } from '../../data/category';

export default function ListProduct() {
  const tabs = ['Shrimp', 'Lobster', 'Crab', 'Fish'];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    console.log('running');
    setActiveTab(index);
  };

  const productList = [];

  for (let index = 0; index < 6; index++) {
    productList.push(
      <div className="col-sm-12 col-md-3">
        <ProductItem
          image={'/images/img-1.jpg'}
          title={'English Name | Indonesian Name'}
          latinName={'Latin Name'}
        ></ProductItem>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }}
    >
      <div className="tab-menu">
        {categories.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.nameId}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="row">
          {categories[activeTab].products.map((product) => (
            <div className="col-sm-12 col-md-3">
              <ProductItem
                image={'/images/img-1.jpg'}
                title={product?.name}
                latinName={product?.scientificName}
              ></ProductItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
