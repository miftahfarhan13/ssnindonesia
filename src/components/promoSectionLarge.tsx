export default function TestimonialsFade() {
  return (
    <section className="mb-8">
      <div className="cta-card">
        <div className="container d-flex flex-column align-items-center gap-3 px-md-5">
          <h3
            className="text-white text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Temukan Kualitas Terbaik dari Lautan: Produk Ekspor Laut Kami
            Menanti Anda!
          </h3>
          <p className="text-white text-center">
            Jelajahi kekayaan laut dalam produk ekspor unggulan kami yang segar,
            bermutu, dan terjamin keamanannya. Dari seafood hingga hasil laut
            berkualitas tinggi, kami hadirkan yang terbaik untuk Anda. Dapatkan
            pengalaman kuliner yang memukau dan sehat dengan memilih produk kami
            yang berkualitas.
          </p>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6281246059191&text=Halo%20PT.%20Samudra%20Sukses%20Nusantara%21%20Saya%20tertarik%20untuk%20memesan%20produk%20laut%20dari%20Anda."
          >
            <button className="btn btn-light btn-lg">
              Pesan Sekarang dan Nikmati Kelezatan Laut!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="container py-8">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-9 text-center mx-auto">
              <h3
                className="text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Temukan Kualitas Terbaik dari Lautan: Produk Ekspor Laut Kami
                Menanti Anda!
              </h3>
              <p className="lead text-white mb-sm-6 mb-4">
                Jelajahi kekayaan laut dalam produk ekspor unggulan kami yang
                segar, bermutu, dan terjamin keamanannya. Dari seafood hingga
                hasil laut berkualitas tinggi, kami hadirkan yang terbaik untuk
                Anda. Dapatkan pengalaman kuliner yang memukau dan sehat dengan
                memilih produk kami yang berkualitas.
              </p>
              <button className="btn btn-white btn-lg">
                Pesan Sekarang dan Nikmati Kelezatan Laut!
              </button>
            </div>
          </div>
        </div> */
}

// interface Props {
//   title: string;
//   full_description: string;
//   pageHeaderBgImg: string;
//   pageHeaderMinVh: string;
//   pageHeaderRadius: string;
// }

// export default function TestimonialsFade({
//   title,
//   full_description,
//   pageHeaderBgImg,
//   pageHeaderMinVh,
//   pageHeaderRadius
// }: Props) {
//   const styles = {
//     pageHeader: {
//       backgroundImage: 'url(' + pageHeaderBgImg + ')',
//       minHeight: pageHeaderMinVh,
//       borderRadius: pageHeaderRadius
//     }
//   } as const;

//   return (
//     <>
//       <section className="mb-8">
//         <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
//           <span className="mask bg-black opacity-6"></span>
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8 col-sm-9 text-center mx-auto">
//                 <h3
//                   className="text-white mb-4"
//                   style={{ fontFamily: 'Playfair Display, serif' }}
//                 >
//                   {title}
//                 </h3>
//                 <p className="lead text-white mb-sm-6 mb-4">
//                   {full_description}
//                 </p>
//                 <button className="btn btn-white btn-lg">
//                   Pesan Sekarang dan Nikmati Kelezatan Laut!
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
