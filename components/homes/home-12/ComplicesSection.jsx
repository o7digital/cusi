import Image from "next/image";
import Link from "next/link";

export default function ComplicesSection() {
  return (
    <section className="complices-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="pe-0 pe-lg-4">
              <h2 className="section-title fw-normal mb-3 mb-md-4">
                Seremos tus cómplices
              </h2>
              <p className="text-secondary mb-4 fs-16 lh-lg">
                Nos encargaremos de hacer la atmósfera perfecta para el evento de tus sueños.
              </p>
              <Link
                href="/contact"
                className="btn btn-complices text-white px-4 py-3"
              >
                Cotiza con nosotros
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="complices-image-wrapper border-radius-10 overflow-hidden">
              <Image
                src="/assets/images/home/florial/complices-event.jpg"
                width={600}
                height={450}
                alt="Seremos tus cómplices - CUSI Flores"
                className="w-100 h-auto"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
