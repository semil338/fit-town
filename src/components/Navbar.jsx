import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import styles from "../style";
import { navigation } from "../constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`${scroll ? "bg-gray-800" : "bg-transparent"}  ${
        styles.paddingX
      } ${styles.flexCenter} fixed z-10 w-full`}
    >
      <div className={`${styles.boxWidth} `}>
        <header className="text-white py-3">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex sm:flex-1">
              <Link to="/" className="">
                <span className="sr-only">Your Company</span>
                <img className="w-[130px] h-[50px]" src={logo} alt="" />
              </Link>
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden sm:flex sm:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-semibold leading-6 `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog
            as="div"
            className="sm:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50 " />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-3  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="w-[130px] h-[50px]" src={logo} alt="" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
