"use client";
import {
  additionalShopPageitems,
  blogmenuItems,
  homePages,
  othersMenuItems,
  shopDetails,
  shopList,
} from "@/data/menu";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
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
    function setBoxMenuPosition(menu) {
      const scrollBarWidth = 17; // You might need to calculate or define this value
      const limitR = window.innerWidth - menu.offsetWidth - scrollBarWidth;
      const limitL = 0;
      const menuPaddingLeft = parseInt(
        window.getComputedStyle(menu, null).getPropertyValue("padding-left")
      );
      const parentPaddingLeft = parseInt(
        window
          .getComputedStyle(menu.previousElementSibling, null)
          .getPropertyValue("padding-left")
      );
      const centerPos =
        menu.previousElementSibling.offsetLeft -
        menuPaddingLeft +
        parentPaddingLeft;

      let menuPos = centerPos;
      if (centerPos < limitL) {
        menuPos = limitL;
      } else if (centerPos > limitR) {
        menuPos = limitR;
      }

      menu.style.left = `${menuPos}px`;
    }
    document.querySelectorAll(".box-menu").forEach((el) => {
      setBoxMenuPosition(el);
    });
  }, []);
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
          href="/shop-1"
          className={`navigation__link ${
            pathname.includes("/shop") || pathname.includes("/product") ? "menu-active" : ""
          }`}
        >
          Nuestras Flores
        </Link>
      </li>
      <li className="navigation__item navigation__item_has-sub">
        <Link
          href="/servicios"
          className={`navigation__link ${pathname.startsWith("/servicios") ? "menu-active" : ""}`}
        >
          Servicios
        </Link>
        <ul className="sub-menu simple-submenu list-unstyled">
          <li><Link href="/servicios/eventos-sociales">Eventos Sociales</Link></li>
          <li><Link href="/servicios/bodas">Bodas</Link></li>
          <li><Link href="/servicios/cumpleanos">Cumpleaños</Link></li>
          <li><Link href="/servicios/10-de-mayo">10 de Mayo</Link></li>
          <li><Link href="/servicios/dia-de-muertos">Día de Muertos</Link></li>
          <li><Link href="/servicios/navidad">Navidad</Link></li>
          <li><Link href="/servicios/hogar-y-oficina">Hogar y Oficina</Link></li>
          <li><Link href="/servicios/empresarial">Empresarial</Link></li>
          <li><Link href="/servicios/orquideas-premium">Orquídeas Premium</Link></li>
          <li><Link href="/servicios/arreglos-personalizados">Arreglos Personalizados</Link></li>
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
