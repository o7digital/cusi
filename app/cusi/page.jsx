import Footer11 from "@/components/footers/Footer11";
import Header12 from "@/components/headers/Header12";
import Hero from "@/components/homes/home-12/Hero";
import React from "react";

export const metadata = {
  title: "CUSI | Diseño floral en CDMX",
  description:
    "CUSI es una firma de diseño floral en CDMX especializada en arreglos premium, orquídeas y ambientación profesional para eventos.",
};

const points = [
  "Arreglos florales premium",
  "Orquídeas exclusivas",
  "Eventos sociales (bodas, 10 de mayo, Día de Muertos, Navidad)",
  "Decoración para empresas",
  "Entrega a domicilio",
];

export default function CusiPage() {
  return (
    <div className="theme-12">
      <Header12 />
      <main>
        <Hero />
        <section className="py-5 py-md-6 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p className="text-uppercase fw-medium letter-spacing-sm mb-2 theme-color">
                  Sobre CUSI
                </p>
                <h1 className="fw-bold mb-3">Quiénes Somos</h1>
                <p className="lead text-secondary mb-4">
                  CUSI es una firma de diseño floral en CDMX especializada en
                  arreglos premium, orquídeas, decoración de hogares y oficinas,
                  así como ambientación profesional para eventos sociales y
                  corporativos. Combinamos flores seleccionadas, bases
                  artesanales y más de 20 años de experiencia para crear piezas
                  elegantes, armoniosas y memorables.
                </p>
              </div>
            </div>

            <div className="row g-3 g-md-4 justify-content-center mt-2">
              {points.map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <div className="d-flex align-items-start gap-3 p-3 p-md-4 h-100 border rounded-3 shadow-sm bg-white">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center bg-grey-f7f5ee flex-shrink-0" style={{ width: 40, height: 40 }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_check" />
                      </svg>
                    </div>
                    <p className="mb-0 fw-medium text-start">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer11 />
    </div>
  );
}
