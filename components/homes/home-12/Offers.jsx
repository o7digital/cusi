import Image from "next/image";
import Link from "next/link";

import { offersFlowers } from "@/data/offers";

export default function Offers() {
  return (
    <section className="offers-flowers py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4">
          <div>
            <p className="offers-eyebrow mb-1 text-uppercase">Promociones y ofertas</p>
            <h2 className="section-title fw-normal mb-2">
              Ofertas florales de la semana
            </h2>
            <p className="text-secondary mb-0">
              Ramos listos para sorprender, con descuentos y entrega rápida.
            </p>
          </div>
          <Link href="/shop-1" className="btn btn-offers-flash">
            Ver todas las ofertas
          </Link>
        </div>

        <div className="row g-4">
          {offersFlowers.map((offer) => (
            <div
              key={offer.id}
              className={
                offer.variant === "wide"
                  ? "col-12 col-lg-6"
                  : "col-12 col-md-6 col-lg-3"
              }
            >
              <Link
                href={offer.href}
                className={`offer-card ${
                  offer.variant === "wide" ? "offer-card--wide" : ""
                } d-block position-relative overflow-hidden`}
              >
                <div className="offer-card__bg position-absolute top-0 start-0 w-100 h-100">
                  <Image
                    src={offer.imageSrc}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="offer-card__img"
                    priority={offer.id === 1}
                  />
                </div>
                <div className="offer-card__overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="offer-card__content position-relative">
                  <span className="offer-card__tag d-inline-flex align-items-center">
                    <span className="offer-card__dot"></span>
                    {offer.tag}
                  </span>
                  <h3 className="offer-card__title mb-1">{offer.title}</h3>
                  <p className="offer-card__promo mb-2">{offer.promo}</p>
                  <p className="offer-card__description text-secondary mb-0">
                    {offer.description}
                  </p>
                  <span className="offer-card__cta d-inline-flex align-items-center mt-3">
                    Ver oferta
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
