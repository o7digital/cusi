import Footer11 from "@/components/footers/Footer11";
import Header12 from "@/components/headers/Header12";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Servicios florales profesionales en CDMX | CUSI",
  description:
    "Servicios florales premium para eventos sociales, fechas especiales, hogares, oficinas y empresas en CDMX.",
};

const services = [
  "Eventos Sociales",
  "Bodas",
  "Cumpleaños",
  "10 de Mayo",
  "Día de Muertos",
  "Navidad",
  "Hogar y Oficina",
  "Empresarial",
  "Orquídeas Premium",
  "Arreglos Personalizados",
];

export default function ServiciosPage() {
  return (
    <div className="theme-12">
      <Header12 />
      <main>
        <section className="py-5 py-md-6 bg-white">
          <div className="container d-flex justify-content-center">
            <div className="text-center" style={{ maxWidth: 800 }}>
              <h1 className="fw-bold mb-3">Servicios Florales Profesionales en CDMX</h1>
              <p className="lead text-secondary mb-4">
                En CUSI ofrecemos servicios florales premium para eventos sociales, fechas especiales, hogares, oficinas y empresas. Cada servicio está diseñado con flores seleccionadas y un estilo elegante que garantiza resultados memorables.
              </p>
              <ul className="text-start d-inline-block fs-5 mb-4">
                {services.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <Link href="/servicios" className="btn btn-dark px-4 py-2">
                  Explorar servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer11 />
    </div>
  );
}
