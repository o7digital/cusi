"use client";
import Image from "next/image";
import Link from "next/link";

import { topCategoriesFlorial } from "@/data/topCategories";

export default function TopCategoriesFlorial() {
  return (
    <section className="top-categories py-5">
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <p className="text-uppercase fw-medium mb-1 theme-color-secondary">
            Top Categories
          </p>
          <h2 className="section-title fw-normal">Filtres par occasions</h2>
          <div className="top-categories__underline mx-auto"></div>
        </div>

        <div className="row g-4 justify-content-center">
          {topCategoriesFlorial.map((category) => (
            <div
              key={category.id}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            >
              <Link
                href={category.href || "/shop-1"}
                className="top-category-card text-center text-decoration-none d-block"
              >
                <div className="top-category-card__media mx-auto mb-3">
                  <Image
                    loading="lazy"
                    src={category.imageSrc}
                    width="220"
                    height="220"
                    alt={category.name}
                    style={{
                      objectFit: "cover",
                      objectPosition: category.objectPosition || "center",
                    }}
                  />
                </div>
                <span className="top-category-card__label fw-medium">
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
