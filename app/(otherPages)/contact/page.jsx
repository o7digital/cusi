import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Contact from "@/components/otherPages/Contact/Contact";

import React from "react";

export const metadata = {
  title: "Contacto || CUSI",
  description:
    "Ponte en contacto con CUSI para arreglos florales y servicios en CDMX.",
};
export default function ContactPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="contact-us container">
          <div className="mw-930">
            <h2 className="page-title">CONTÁCTANOS</h2>
          </div>
        </section>

        <Contact />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
