"use client";
import Star from "@/components/common/Star";
import { useContextElement } from "@/context/Context";
import { products25 } from "@/data/products/grocery";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const filterCategories = ["All", "Most Popular", "Best Rated"];
import Image from "next/image";

export default function Featured() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const decodeHTML = (value) => {
    if (!value) return "";
    if (typeof window === "undefined") return value;
    const doc = new DOMParser().parseFromString(value, "text/html");
    return doc.documentElement.textContent || value;
  };

  const getImage = (item) => {
    const apiImg = item.images?.[0]?.src;
    if (apiImg) return apiImg.replace("http://", "https://");
    if (item.description && typeof window !== "undefined") {
      const doc = new DOMParser().parseFromString(item.description, "text/html");
      const img = doc.querySelector("img")?.getAttribute("src");
      if (img) return img.replace("http://", "https://");
    }
    return "/assets/images/home/demo12/product-1.jpg";
  };

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("es-MX", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  useEffect(() => {
    let active = true;
    const loadProducts = async () => {
      try {
        const res = await fetch(
          "https://oliviers45.sg-host.com/wp-json/wc/store/products?per_page=50",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        const mapped = data
          .slice()
          .reverse()
          .map((item) => {
            const rating =
              Number.parseFloat(item.average_rating || "4.8") || 4.8;
            const priceRaw = item.prices?.price;
            const price =
              typeof priceRaw === "string"
                ? Number(priceRaw) / 100
                : Number(item.price || 0);
            return {
              id: item.id,
              imgSrc: getImage(item),
              title: decodeHTML(item.name),
              category:
                item.categories?.map((c) => c.name).join(", ") || "Bouquets",
              rating,
              reviews: item.review_count || 0,
              price,
              filterCategory: rating >= 4.8 ? "Best Rated" : "Most Popular",
            };
          });
        if (active) {
          setProducts(mapped);
        }
      } catch (error) {
        console.error("Failed to fetch WP products", error);
        if (active) {
          setProducts(products25);
        }
      }
    };
    loadProducts();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(products);
    } else {
      setFiltered([
        ...products.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory, products]);
  return (
    <section className="products-grid">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4 gap-4">
          <h2 className="section-title fw-normal">Nuestros Arreglos</h2>

          <ul
            className="nav nav-tabs justify-content-center"
            id="collections-1-tab"
            role="tablist"
          >
            {filterCategories.map((elm, i) => (
              <li
                onClick={() => setCurrentCategory(elm)}
                key={i}
                className="nav-item"
                role="presentation"
              >
                <a
                  className={`nav-link nav-link_underscore ${
                    currentCategory == elm ? "active" : ""
                  }`}
                >
                  {elm}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content pt-2" id="collections-2-tab-content">
          <div className="tab-pane fade show active">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
              {filtered.map((elm, i) => (
                <div key={i} className="product-card-wrapper mb-2">
                  <div className="product-card product-card_style9 border rounded-3 mb-3 mb-md-4">
                    <div className="position-relative pb-3">
                      <div className="pc__img-wrapper pc__img-wrapper_wide3">
                        <Link href={`/product1_simple/${elm.id}`}>
                          <Image
                            loading="lazy"
                            src={elm.imgSrc}
                            width="256"
                            height="201"
                            alt={elm.title}
                            className="pc__img"
                          />
                        </Link>
                      </div>
                      <div className="anim_appear-bottom position-absolute w-100 text-center">
                        <button
                          className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-add-cart js-open-aside"
                          onClick={() => addProductToCart(elm.id)}
                          title={
                            isAddedToCartProducts(elm.id)
                              ? "Already Added"
                              : "Add to Cart"
                          }
                        >
                          <svg
                            className="d-inline-block"
                            width="14"
                            height="14"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use
                              href={`${
                                isAddedToCartProducts(elm.id)
                                  ? "#icon_cart_added"
                                  : "#icon_cart"
                              }`}
                            />
                          </svg>
                        </button>
                        <button
                          className="btn btn-round btn-hover-red border-0 text-uppercase me-2 js-quick-view"
                          data-bs-toggle="modal"
                          data-bs-target="#quickView"
                          onClick={() => setQuickViewItem(elm)}
                          title="Quick view"
                        >
                          <svg
                            className="d-inline-block"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_view" />
                          </svg>
                        </button>
                        <button
                          className={`btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist ${
                            isAddedtoWishlist(elm.id) ? "active" : ""
                          }`}
                          onClick={() => toggleWishlist(elm.id)}
                          title="Add To Wishlist"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_heart" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="pc__info position-relative">
                      <p className="pc__category">{elm.category}</p>
                      <h6 className="pc__title">
                        <Link href={`/product1_simple/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </h6>
                      <div className="product-card__review d-sm-flex align-items-center">
                        <div className="reviews-group d-flex">
                          <Star stars={elm.rating} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-sm-1">
                          {elm.reviews}
                        </span>
                      </div>
                      <div className="product-card__price d-flex">
                        <span className="money price fs-5">
                          MXN ${formatPrice(elm.price)} + IVA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
