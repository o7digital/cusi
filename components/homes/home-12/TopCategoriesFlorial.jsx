"use client";
import Image from "next/image";
import Link from "next/link";

import { topCategoriesFlorial } from "@/data/topCategories";

export default function TopCategoriesFlorial() {
  return (
    <section className="top-categories py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-normal mb-3">
            Seleccionar su Preferencia
          </h2>
          <div className="top-categories__underline mx-auto mb-2"></div>
          <p className="text-secondary fs-16">
            Encuentra el arreglo perfecto para cada ocasión especial
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {topCategoriesFlorial.map((category) => (
            <div
              key={category.id}
              className="col-6 col-sm-4 col-md-4 col-lg-2"
            >
              <Link
                href={category.href || "/shop-1"}
                className="top-category-card-modern text-center text-decoration-none d-block h-100"
              >
                <div className="top-category-card-modern__wrapper position-relative overflow-hidden border-radius-10 mb-3 shadow-sm">
                  <div className="top-category-card-modern__overlay"></div>
                  <Image
                    loading="lazy"
                    src={category.imageSrc}
                    width={240}
                    height={240}
                    alt={category.name}
                    className="w-100 h-auto"
                    style={{
                      objectFit: "cover",
                      objectPosition: category.objectPosition || "center",
                      aspectRatio: "1 / 1",
                    }}
                  />
                </div>
                <span className="top-category-card-modern__label fw-semibold d-block text-dark">
                  {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
