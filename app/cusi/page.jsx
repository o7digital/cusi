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
  "Entrega a domicilio en CDMX",
];

export default function CusiPage() {
  return (
    <div className="theme-12">
      <Header12 />
      <main>
        <Hero />
        <section className="py-5 py-md-6 bg-white">
          <div className="container d-flex justify-content-center">
            <div className="text-center" style={{ maxWidth: 800 }}>
              <p className="text-uppercase fw-medium letter-spacing-sm mb-2 theme-color">
                SOBRE CUSI
              </p>
              <h1 className="fw-bold mb-3">Quiénes Somos</h1>
              <p className="lead text-secondary mb-4">
                CUSI es la Floreria  de diseño floral en CDMX especializada en
                arreglos premium, orquídeas, decoración de hogares y oficinas,
                así como ambientación profesional para eventos sociales y
                corporativos. Combinamos flores seleccionadas, bases artesanales
                y más de 20 años de experiencia para crear piezas elegantes,
                armoniosas y memorables.
              </p>
              <ul className="list-unstyled d-inline-block text-start fs-5 mb-0">
                {points.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer11 />
    </div>
  );
}
