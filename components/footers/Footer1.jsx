"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer className="footer footer_type_1" style={{backgroundColor: '#1a1a1a', color: '#fff', paddingTop: '40px', paddingBottom: '20px'}}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <div className="logo mb-3">
                <Link href="/">
                  <span style={{fontSize: '28px', fontWeight: 'bold', color: '#fff'}}>CUSI</span>
                </Link>
              </div>
              <p style={{color: '#aaa', marginBottom: '15px'}}>
                Flores premium y productos de estilo de vida activo para todos.
              </p>
              <p className="footer-address" style={{color: '#aaa', fontSize: '14px'}}>
                Calle Monte Carpatos 990 Int 2<br />
                Colonia Lomas de Virreyes<br />
                CP 11000 CDMX México
              </p>
              <p className="m-0" style={{color: '#aaa', fontSize: '14px'}}>
                <strong className="fw-medium">ventas@cusiflores.com</strong>
              </p>
              <p style={{color: '#aaa', fontSize: '14px'}}>
                <strong className="fw-medium">+52 15521092665</strong>
              </p>
              <ul className="social-links list-unstyled d-flex flex-wrap mb-0 mt-3">
                {socialLinks.map((link, index) => (
                  <li key={index} style={{marginRight: '15px'}}>
                    <a href={link.href} className="footer__social-link d-block" style={{color: '#fff', fontSize: '20px'}}>
                      <svg
                        className={link.className}
                        width={link.width}
                        height={link.height}
                        viewBox={link.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        {typeof link.icon === "string" ? (
                          <use href={link.icon} />
                        ) : (
                          link.icon
                        )}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-widget">
              <h6 className="text-uppercase mb-3" style={{color: '#fff', fontSize: '14px', fontWeight: '600'}}>EMPRESA</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/about" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Quiénes Somos</Link>
                </li>
                <li className="mb-2">
                  <Link href="/about" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Servicios</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Contacto</Link>
                </li>
                <li className="mb-2">
                  <Link href="/terms" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Aviso de Privacidad</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Contáctanos</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-widget">
              <h6 className="text-uppercase mb-3" style={{color: '#fff', fontSize: '14px', fontWeight: '600'}}>TIENDA</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/shop-1" style={{color: '#aaa', textDecoration: 'none', fontSize: '14px'}}>Nuevos Productos</Link>
                </li>
              </ul>
            </div>
          </div>



          <div className="col-lg-2 col-md-6">
            <div className="footer-widget">
              <h6 className="text-uppercase mb-3" style={{color: '#fff', fontSize: '14px', fontWeight: '600'}}>SUSCRÍBETE</h6>
              <p style={{color: '#aaa', fontSize: '13px', marginBottom: '15px'}}>
                ¡Sé el primero en recibir las últimas noticias sobre tendencias, promociones y mucho más!
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="position-relative"
              >
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  style={{
                    backgroundColor: '#2a2a2a',
                    border: '1px solid #444',
                    color: '#fff',
                    padding: '10px',
                    fontSize: '14px'
                  }}
                />
                <button
                  className="btn btn-sm position-absolute"
                  type="submit"
                  style={{
                    top: '5px',
                    right: '5px',
                    backgroundColor: '#fff',
                    color: '#000',
                    border: 'none',
                    padding: '5px 15px',
                    fontWeight: '600'
                  }}
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4" style={{borderTop: '1px solid #333'}}>
          <div className="col-12 d-flex flex-md-row flex-column align-items-center justify-content-between">
            <div className="footer-copyright" style={{color: '#aaa', fontSize: '14px'}}>
              ©{new Date().getFullYear()} CUSI | Diseño por <a href="https://o7digital.com/" style={{color: '#fff', textDecoration: 'none'}}>o7Digital</a>
            </div>
            <div className="d-flex align-items-center mt-3 mt-md-0">
              <Image
                loading="lazy"
                width={40}
                height={25}
                src="/assets/images/payment-options.png"
                alt="Visa"
                className="me-2"
                style={{filter: 'brightness(0.8)'}}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
