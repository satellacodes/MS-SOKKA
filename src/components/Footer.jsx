import logo from "/src/assets/images/logo.png";
import { Container } from "./Container";
import { Link } from "react-router-dom";

const linksSections = [
  {
    title: "SHOP",
    items: [
      { title: "Genteng bening", url: "./shop/category/pcmcat287600050002" },
      { title: "Genteng biasa", url: "./shop/category/pcmcat287600050003" },
      { title: "Genteng bata", url: "./shop/category/pcmcat304600050011" },
      { title: "Bata batako", url: "./shop/category/abcat0507000" },
      { title: "Genteng luar biasa", url: "./shop/category/pcmcat1476727552895" },
      { title: "Genteng tidak biasa", url: "./shop/category/pcmcat159700050051" },
    ],
  },
  {
    title: "NOMOR YANG BISA DIHUBUNGI",
    items: [
      { title: "0895323368030", url: "/" },
      // { title: "Shop", url: "./shop" },
      // {
      //   title: "Repository",
      //    url: "https://github.com/DarkWool/shopping-cart",
      //    target: "_blank",
      //  },
      //  {
      //     title: "DarkWool GitHub",
      //     url: "https://github.com/DarkWool",
      //     target: "_blank",
      //   },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white text-sm">
      <Container className="py-16 flex flex-col md:flex-row justify-between">
        <div className="md:max-w-xs mr-20 text-sm">
          <img src={logo} className="mb-5 w-64" />
          <p className="leading-tight">
            Jadikan rumah Anda kokoh dan elegan dengan genteng terpercaya warga Kebumen.
            Konsultasi GRATIS dengan ahli kami!
          </p>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-x-28 mt-10 md:mt-0">
          {linksSections.map((section, i) => {
            const links = section.items.map((link, i) => {
              const attrs = { to: link.url };
              attrs.target = link.target && link.target;

              return (
                <li key={i}>
                  <Link
                    {...attrs}
                    className="transition ease-in-out text-gray-400 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              );
            });

            return (
              <div className="w-36" key={i}>
                <span className="block text-2xl leading-none font-bold mb-5">
                  {section.title}
                </span>
                <ul className="flex flex-col gap-y-4">{links}</ul>
              </div>
            );
          })}
        </div>
      </Container>

      <div className="border-t border-gray-800">
        <Container className="py-5 text-sm flex flex-col gap-y-3 md:flex-row justify-between">
          <span className="text-gray-400">© 2025 ms-sokka Inc. All Rights Reserved.</span>
          <span className="font-medium">
            Project made by satellacodes using {"BestBuy's"} API.
          </span>
        </Container>
      </div>
    </footer>
  );
}
