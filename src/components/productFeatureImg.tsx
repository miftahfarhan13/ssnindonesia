interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProductGallery({ images }: Props) {
  return (
    <>
      <div className="d-block d-md-flex">
        <img
          className="w-100 rounded-3 mb-4 mb-md-0"
          src={images[0].src}
          alt={images[0].alt}
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <img
            className="w-100 rounded-3"
            src={images[1].src}
            alt={images[1].alt}
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-6">
          <img
            className="w-100 rounded-3"
            src={images[2].src}
            alt={images[2].alt}
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
}
