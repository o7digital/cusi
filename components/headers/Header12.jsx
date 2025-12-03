"use client";
import Link from "next/link";
import CartLength from "./components/CartLength";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import Image from "next/image";
import User from "./components/User";
import CategorySelect from "./components/CategorySelect";

export default function Header12() {
  return (
    <header id="header" className="header header_sticky">
      <div className="header-desk_type_7">
        <div className="header-top theme-bg-color-secondary">
          <div className="container d-flex align-items-center">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo-cusi.jpg"
                  width={140}
                  height={140}
                  alt="CUSI"
                  className="logo__image d-block"
                  priority
                />
              </Link>
            </div>
            {/* <!-- /.logo --> */}

            <div className="header-tools d-flex align-items-center ms-auto">
              <div className="header-tools__item hover-container">
                <a className="header-tools__item js-open-aside" href="#">
                  <User />
                </a>
              </div>

              <Link className="header-tools__item" href="/account_wishlist">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
              </Link>

              <a
                onClick={() => openCart()}
                className="header-tools__item header-tools__cart js-open-aside"
              >
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_cart" />
                </svg>
                <span className="cart-amount d-block position-absolute js-cart-items-count theme-bg-color">
                  <CartLength />
                </span>
              </a>
            </div>
            {/* <!-- /.header__tools --> */}
          </div>
        </div>
        {/* <!-- /.header-top --> */}

        <div className="header-bottom theme-bg-color">
          <div className="container d-flex align-items-center">
            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                <Nav />
              </ul>
              {/* <!-- /.navigation__list --> */}
            </nav>
            {/* <!-- /.navigation --> */}
          </div>
        </div>
        {/* <!-- /.header-bottom --> */}
      </div>
      {/* <!-- /.header-desk header-desk_type_7 --> */}
    </header>
  );
}
