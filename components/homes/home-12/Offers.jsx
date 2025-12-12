"use client";
import Image from "next/image";
import Link from "next/link";

import { offersFlowers } from "@/data/offers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Offers() {
  const sliderConfig = {
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".offers-next",
      prevEl: ".offers-prev",
    },
    pagination: {
      el: ".offers-pagination",
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 1.6 },
      768: { slidesPerView: 2.2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 22 },
      1280: { slidesPerView: 3.4, spaceBetween: 24 },
    },
  };

  return (
    <section className="offers-flowers py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4">
          <div>
            <p className="offers-eyebrow mb-1 text-uppercase">
              Promociones y ofertas
            </p>
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

        <div className="offers-carousel position-relative">
          <div className="offers-nav offers-prev">
            <span aria-hidden="true">‹</span>
          </div>
          <div className="offers-nav offers-next">
            <span aria-hidden="true">›</span>
          </div>
          <Swiper {...sliderConfig} className="offers-swiper">
            {offersFlowers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="offer-card-modern h-100 d-flex flex-column">
                  <div className="offer-card-modern__media position-relative overflow-hidden">
                    <Image
                      src={offer.imageSrc}
                      alt={offer.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      className="offer-card-modern__img"
                    />
                    <span className="offer-card-modern__pill">{offer.tag}</span>
                  </div>
                  <div className="offer-card-modern__body d-flex flex-column gap-1">
                    <h3 className="offer-card-modern__title mb-0">
                      {offer.title}
                    </h3>
                    <p className="offer-card-modern__subtitle text-secondary mb-0">
                      {offer.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <span className="offer-card-modern__price">
                        {offer.price}
                      </span>
                      <Link
                        href={offer.href}
                        className="btn btn-offer-cta px-3 py-2"
                      >
                        Comprar
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="offers-pagination d-flex justify-content-center mt-3"></div>
        </div>
      </div>
    </section>
  );
}
