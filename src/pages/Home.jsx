import blinkG from "/src/assets/images/blink-genteng.jpg";
import lipsImg from "/src/assets/images/lips.png";
import arrow from "/src/assets/images/arrow.svg";
import textBackground from "/src/assets/images/innovate-text-gradient.png";
import lokasiG from "/src/assets/images/apaya.jpg";
import { Link } from "react-router-dom";
import { Marquee } from "../components/Marquee";
import { Container } from "../components/Container";

export function Home() {
  return (
    <>
      <section>
        <div className="-mt-20 absolute -z-10">
          <img src={textBackground} />
        </div>

        <Container className="flex flex-col md:flex-row items-center mt-9">
          <div className="md:w-1/2 max-w-full shrink-0">
            <div className="flex gap-4 mb-5 [&>img]:w-4 [&>img]:md:w-8">
              <img
                src={arrow}
                className="animate-opacity-pulse"
                style={{ "--order": 0 }}
              />
              <img
                src={arrow}
                className="animate-opacity-pulse [animation-delay:calc(var(--order)*100ms)]"
                style={{ "--order": 1 }}
              />
              <img
                src={arrow}
                className="animate-opacity-pulse [animation-delay:calc(var(--order)*100ms)]"
                style={{ "--order": 2 }}
              />
              <img
                src={arrow}
                className="animate-opacity-pulse [animation-delay:calc(var(--order)*100ms)]"
                style={{ "--order": 3 }}
              />
            </div>

            <h1 className="text-4xl md:text-7xl font-headings mb-7 md:mb-9 font-medium tracking-tighter text-black">
              <span className="ml-8 md:ml-14">mencari genteng?</span> <br />
              <span className="font-extrabold text-5xl md:text-8xl">
                MS-sokka, <br />
              </span>
              <span className="ml-20 md:ml-40">the best genteng.</span>
            </h1>

            <p className="leading-5 max-w-prose">
              Genteng Ms sokka berletak di kedawung merupakan revolusi{" "}
              <b>Gendeng terbaik</b>.<br></br>
              mewakili berbagai genteng di kebumen
            </p>

            <Link
              to="/shop"
              className="btn-primary mt-12 mb-10 inline-flex align-middle gap-x-3"
            >
              START SHOPPING
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* second col */}
          <div className="mt-10 md:mt-0 grow relative">
            <img
              src={lipsImg}
              alt=""
              className="max-w-[7rem] md:max-w-full absolute top-0 left-0"
            />
            <img src={blinkG} alt="" />
          </div>
        </Container>
      </section>

      <Marquee
        className="bg-black text-white text-4xl md:text-7xl font-headings tracking-tighter font-medium whitespace-nowrap"
        content="Genteng MS-Sokka Kebumen: Kokoh, Estetis, dan Tahan Lama! "
      />

      <Container
        as="section"
        className="mt-14 md:mt-24 mb-14 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-36"
      >
        <div className="max-w-lg w-full shrink-0 flex flex-col items-center">
          <img src={lokasiG} alt="" className="max-w-xs md:max-w-lg" />
          <Link to="/shop" className="btn-primary my-5">
            MEET THE NEW AGE
          </Link>
        </div>

        <div>
          <h2 className="text-4xl mb-9 tracking-tight">
            Kekuatan <span className="font-extrabold">Teruji</span>
          </h2>

          <div className="text-gray-700 text-sm leading-snug">
            <p>
              Genteng MS-Sokka merupakan produk kebanggaan asli Kedawung, Kebumen yang
              telah dipercaya masyarakat Jawa Tengah selama puluhan tahun. Dibuat dengan
              bahan tanah liat pilihan khas Kebumen melalui proses pembakaran presisi,
              menghasilkan genteng berkualitas tinggi. Setiap genteng mewakili kearifan
              lokal dan dedikasi pengrajin terampil daerah Kedawung. Kami memprioritaskan
              kualitas orisinal sebagai warisan turun-temurun. Produk ini menjadi simbol
              kekuatan industri kerajinan tradisional Kebumen.
            </p>
            <p>
              Dengan ketebalan premium 5-6 mm, genteng kami memiliki kapasitas beban
              hingga 200 kg/m² dan tahan terhadap cuaca ekstrem. Struktur padatnya
              menjamin ketahanan terhadap benturan, rembesan air, serta perubahan suhu.
              Proses produksi menggunakan teknologi press modern memastikan presisi bentuk
              dan kerapatan sempurna. Hasilnya adalah atap yang anti bocor dan berumur
              panjang. Kualitas ini telah teruji di ribuan rumah di wilayah Kebumen dan
              sekitarnya.
            </p>
          </div>
        </div>
      </Container>

      <Container
        as="section"
        className="flex flex-col md:flex-row items-center my-10 md:my-32"
      >
        <div className="grow text-center md:text-left">
          <span className="text-gray-600 tracking-wider mb-2 block">
            Kekuatan Teruji.
          </span>

          <h2 className="text-4xl md:text-5xl tracking-tight">
            Anti Bocor & <span className="font-extrabold">Tahan Lama.</span>
          </h2>

          <span className="w-0.5 h-20 mx-auto mt-4 md:mt-1 md:w-full md:h-1 bg-black block"></span>
        </div>
        <Link
          to="./shop/category/pcmcat287600050002"
          className="bg-black w-full md:w-96 h-96 bg-[url('/src/assets/images/handG.jpg')] bg-center bg-[length:100%] bg-no-repeat transition-all duration-300 ease-in-out hover:bg-[length:120%]"
        />
      </Container>

      <Container as="section" className="py-10 md:py-20">
        <h2 className="text-4xl md:text-5xl mb-10 tracking-tight">
          Ramah Lingkungan <span className="font-extrabold">Harga Terjangkau.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-x-16 text-gray-700 text-sm leading-snug">
          <div className="md:w-1/2 shrink-0">
            <p>
              Tersedia dalam pilihan warna klasik seperti merah bata alami, coklat tanah,
              dan hitam elegan yang cocok untuk berbagai desain arsitektur. Permukaan
              genteng yang halus dan bertekstur alami memberikan kesan anggun pada atap
              rumah Anda. Warna yang stabil tidak mudah pudar meskipun terpapar matahari
              bertahun-tahun. Kombinasi keindahan visual dan kekuatan ini menjadikannya
              solusi sempurna untuk hunian tradisional maupun kontemporer. Setiap genteng
              menciptakan pola atap yang harmonis dan memikat mata.
            </p>
            <p>
              Sebagai produsen langsung dari pabrik Kedawung, kami menawarkan harga lebih
              terjangkau tanpa melalui distributor. Biaya pengiriman juga lebih ekonomis
              untuk wilayah Jawa Tengah dan DIY. Kualitas premium yang setara dengan merek
              ternama bisa Anda dapatkan dengan investasi lebih efisien. Kami memberikan
              konsultasi gratis untuk menghitung kebutuhan genteng sesuai luas atap Anda.
              Keuntungan ganda: produk berkualitas plus dukungan untuk UMKM lokal Kebumen.{" "}
            </p>
            <p>
              Segera wujudkan atap idaman yang kokoh dan indah dengan Genteng MS-Sokka
              asli Kedawung! Hubungi tim ahli kami via WhatsApp di 0895323368030 untuk
              pemesanan atau kunjungi pabrik di Jl. Raya Kedawung, Kebumen. Dapatkan
              penawaran spesial dan perkiraan biaya akurat tanpa biaya konsultasi. Ikuti
              Instagram @GentengMSSokka_Kebumen untuk inspirasi desain dan promo terbaru.
              Percayakan perlindungan rumah Anda pada genteng warisan kebanggaan warga
              Kebumen!{" "}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
