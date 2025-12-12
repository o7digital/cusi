import Header12 from "@/components/headers/Header12";
import Featured from "@/components/homes/home-12/Featured";
import Features from "@/components/homes/home-12/Features";
import Hero from "@/components/homes/home-12/Hero";
import TopCategoriesFlorial from "@/components/homes/home-12/TopCategoriesFlorial";
import Offers from "@/components/homes/home-12/Offers";
import Testimonials from "@/components/homes/home-12/Testimonials";
import ComplicesSection from "@/components/homes/home-12/ComplicesSection";
import React from "react";

export const metadata = {
  title: "Home 12 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage12() {
  return (
    <>
      <div className="theme-12">
        <Header12 />
        <main>
          <Hero />
          <Features />
          <TopCategoriesFlorial />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Featured />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-5"></div>
          <Offers />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Testimonials />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-5"></div>
          <ComplicesSection />
        </main>
      </div>
    </>
  );
}
