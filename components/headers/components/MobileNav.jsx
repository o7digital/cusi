"use client";

import { useEffect } from "react";
import {
  additionalShopPageitems,
  blogmenuItems,
  homePages,
  othersMenuItems,
  shopDetails,
  shopList,
} from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileNav() {
  const pathname = usePathname();
  const isMenuActive = (menu) => {
    return menu.split("/")[1] == pathname.split("/")[1];
  };
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (menu) => menu.href.split("/")[1] == pathname.split("/")[1]
    );
  };

  useEffect(() => {
    const selectors = {
      mobileMenuActivator: ".mobile-nav-activator",
      mobileMenu: ".navigation",
      mobileMenuActiveClass: "mobile-menu-opened",
      mobileSubNavOpen: ".js-nav-right",
      mobileSubNavClose: ".js-nav-left",
      mobileSubNavHiddenClass: "d-none",
    };

    const mobileMenuActivator = document.querySelector(
      selectors.mobileMenuActivator
    );
    const mobileDropdown = document.querySelector(selectors.mobileMenu);
    let transformLeft = 0;

    const toggleMobileMenu = (event) => {
      if (event) {
        event.preventDefault();
      }

      if (document.body.classList.contains(selectors.mobileMenuActiveClass)) {
        document.body.classList.remove(selectors.mobileMenuActiveClass);
        document.body.style.paddingRight = "";
        mobileDropdown.style.paddingRight = "";
      } else {
        document.body.classList.add(selectors.mobileMenuActiveClass);
        document.body.style.paddingRight = "scrollWidth"; // Replace with appropriate value
        mobileDropdown.style.paddingRight = "scrollWidth"; // Replace with appropriate value
      }
    };

    if (mobileDropdown) {
      mobileMenuActivator &&
        mobileMenuActivator.addEventListener("click", toggleMobileMenu);

      const mobileMenu = mobileDropdown.querySelector(".navigation__list");
      let menuMaxHeight = mobileMenu.offsetHeight;

      const openSubNav = (event, btn) => {
        event.preventDefault();
        btn.nextElementSibling.classList.remove(
          selectors.mobileSubNavHiddenClass
        );

        transformLeft -= 100;
        if (menuMaxHeight < btn.nextElementSibling.offsetHeight) {
          mobileMenu.style.transform = `translateX(${transformLeft}%)`;
          mobileMenu.style.minHeight = `${btn.nextElementSibling.offsetHeight}px`;
        } else {
          mobileMenu.style.transform = `translateX(${transformLeft}%)`;
          mobileMenu.style.minHeight = `${menuMaxHeight}px`;
        }
      };

      const closeSubNav = (event, btn) => {
        event.preventDefault();
        transformLeft += 100;
        mobileMenu.style.transform = `translateX(${transformLeft}%)`;
        btn.parentElement.classList.add(selectors.mobileSubNavHiddenClass);
        const wrapper = btn.closest(".sub-menu");
        if (wrapper) {
          const minHeight =
            menuMaxHeight < wrapper.offsetHeight
              ? wrapper.offsetHeight
              : menuMaxHeight;
          mobileMenu.style.minHeight = `${minHeight}px`;
        }
      };

      mobileMenu &&
        Array.from(
          mobileMenu.querySelectorAll(selectors.mobileSubNavOpen)
        ).forEach((btn) => {
          btn.addEventListener("click", (event) => openSubNav(event, btn));
        });

      mobileMenu &&
        Array.from(
          mobileMenu.querySelectorAll(selectors.mobileSubNavClose)
        ).forEach((btn) => {
          btn.addEventListener("click", (event) => closeSubNav(event, btn));
        });

      return () => {
        mobileMenuActivator &&
          mobileMenuActivator.removeEventListener("click", toggleMobileMenu);
        mobileMenu &&
          Array.from(
            mobileMenu.querySelectorAll(selectors.mobileSubNavOpen)
          ).forEach((btn) => {
            btn.removeEventListener("click", (event) => openSubNav(event, btn));
          });
        mobileMenu &&
          Array.from(
            mobileMenu.querySelectorAll(selectors.mobileSubNavClose)
          ).forEach((btn) => {
            btn.removeEventListener("click", (event) =>
              closeSubNav(event, btn)
            );
          });
      };
    }
  }, []);
  useEffect(() => {
    const selectors = {
      mobileMenuActivator: ".mobile-nav-activator",
      mobileMenu: ".navigation",
      mobileMenuActiveClass: "mobile-menu-opened",
      mobileSubNavOpen: ".js-nav-right",
      mobileSubNavClose: ".js-nav-left",
      mobileSubNavHiddenClass: "d-none",
    };

    const mobileDropdown = document.querySelector(selectors.mobileMenu);

    const removeMenu = (event) => {
      if (event) {
        event.preventDefault();
      }

      if (document.body.classList.contains(selectors.mobileMenuActiveClass)) {
        document.body.classList.remove(selectors.mobileMenuActiveClass);
        document.body.style.paddingRight = "";
        mobileDropdown.style.paddingRight = "";
      }
    };
    removeMenu();
  }, [pathname]);

  return (
    <>
      <li className="navigation__item">
        <Link
          href="/"
          className={`navigation__link ${
            pathname == "/" ? "menu-active" : ""
          }`}
        >
          Inicio
        </Link>
      </li>
      <li className="navigation__item">
        <Link
          href="/cusi"
          className={`navigation__link ${pathname === "/cusi" ? "menu-active" : ""}`}
        >
          CUSI
        </Link>
      </li>

      <li className="navigation__item">
        <Link
          href="/servicios"
          className={`navigation__link ${
            pathname.startsWith("/servicios") ? "menu-active" : ""
          }`}
        >
          Servicios
        </Link>
        <ul className="sub-menu__list list-unstyled mt-2">
          <li className="sub-menu__item">
            <Link href="/servicios/eventos-sociales" className="menu-link menu-link_us-s">
              Eventos Sociales
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/bodas" className="menu-link menu-link_us-s">
              Bodas
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/cumpleanos" className="menu-link menu-link_us-s">
              Cumpleaños
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/10-de-mayo" className="menu-link menu-link_us-s">
              10 de Mayo
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/dia-de-muertos" className="menu-link menu-link_us-s">
              Día de Muertos
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/navidad" className="menu-link menu-link_us-s">
              Navidad
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/hogar-y-oficina" className="menu-link menu-link_us-s">
              Hogar y Oficina
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/empresarial" className="menu-link menu-link_us-s">
              Empresarial
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/orquideas-premium" className="menu-link menu-link_us-s">
              Orquídeas Premium
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link href="/servicios/arreglos-personalizados" className="menu-link menu-link_us-s">
              Arreglos Personalizados
            </Link>
          </li>
        </ul>
      </li>
      <li className="navigation__item">
        <Link
          href="/contact"
          className={`navigation__link ${
            pathname == "/contact" ? "menu-active" : ""
          }`}
        >
          Contacto
        </Link>
      </li>
    </>
  );
}
