"use client";

import { testimonialsFloral } from "@/data/testimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".testimonials-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    modules: [Autoplay, Pagination],
  };

  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase text-secondary mb-2 fw-medium letter-spacing-1">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="section-title fw-normal mb-0">
            Testimonios
          </h2>
        </div>

        <div className="position-relative">
          <Swiper {...swiperOptions} className="testimonials-swiper pb-5">
            {testimonialsFloral.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card bg-white p-4 p-md-5 h-100 shadow-sm border-radius-10">
                  <div className="testimonial-stars mb-3 d-flex justify-content-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#FFB800"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text text-center fst-italic mb-4 fs-16 lh-lg">
                    "{testimonial.text}"
                  </p>
                  <p className="testimonial-author text-center text-uppercase text-secondary mb-0 fs-13 fw-medium letter-spacing-1">
                    {testimonial.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonials-pagination d-flex justify-content-center mt-4"></div>
        </div>
      </div>
    </section>
  );
}
