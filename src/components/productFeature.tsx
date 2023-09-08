import ProductFeatureImg from "./productFeatureImg";
import ProductFeatureDetails from "./productFeatureDetails";

interface Props {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  full_description: string;
  featuresDetails: Map<string, string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {
  return (
    <>
      <div className="card card-product card-plain">
        {/* <div className="row">
          <div className="col-12 col-lg-7 mx-auto text-center">
            {title.length != 0 && <h2 className="mb-3">{title}</h2>}
            {full_description.length != 0 && (
              <p className="mb-5">{full_description}</p>
            )}
          </div>
        </div> */}
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 pe-5">
            <div className="row">
              <h2 className="mb-3">Mengapa Harus Memilih Kami?</h2>
              <p className="mb-5">
                Kami adalah pilihan utama Anda untuk produk laut berkualitas
                tinggi yang lebih dari sekadar makanan. Temukan alasan mengapa
                kami dianggap sebagai mitra eksportir terpercaya.
              </p>
              <ProductFeatureDetails featuresDetails={featuresDetails} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ProductFeatureImg images={images} />
          </div>
        </div>
      </div>
    </>
  );
}