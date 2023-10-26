import './productItem.css';

interface Props {
  slug: string;
  image: string;
  title: string;
  latinName: string;
}

export default function ProductItem({ slug, image, title, latinName }: Props) {
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
        <a href={`/produk/${slug}`} className="w-100">
          <button type="button" className="btn btn-success btn-lg w-100">
            Lihat Detail
          </button>
        </a>
      </div>
    </div>
  );
}
