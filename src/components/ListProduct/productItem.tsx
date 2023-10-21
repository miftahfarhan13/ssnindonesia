import './productItem.css';

interface Props {
  image: string;
  title: string;
  latinName: string;
}

export default function ProductItem({ image, title, latinName }: Props) {
  return (
    <div className="card-product-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="detail">
        <div className="detail-info">
          <div className="fs-5 fw-bold">{title}</div>
          <div className="fs-6 fst-italic">{latinName}</div>
        </div>
        <button type="button" className="btn btn-success btn-lg">
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
