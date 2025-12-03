import Footer11 from "@/components/footers/Footer11";
import Header12 from "@/components/headers/Header12";
import Link from "next/link";
import { notFound } from "next/navigation";

const servicePages = {
  "eventos-sociales": {
    title: "Diseño Floral para Eventos Sociales en CDMX",
    paragraph:
      "Creamos ambientaciones florales elegantes para eventos sociales de todos los tamaños, desde reuniones íntimas hasta grandes celebraciones. Utilizamos flores frescas y bases artesanales para transformar cualquier espacio.",
    items: [
      "Centros de mesa",
      "Arreglos focales",
      "Decoración de entrada",
      "Ambientación de mesas",
      "Montaje profesional",
    ],
    cta: "Cotizar evento social",
  },
  bodas: {
    title: "Decoración Floral para Bodas en CDMX",
    paragraph:
      "Diseñamos arreglos florales para bodas civiles, religiosas y en jardín, asegurando un ambiente romántico y elegante.",
    items: [
      "Ramos de novia",
      "Centros de mesa premium",
      "Arco floral / altar",
      "Boutonnieres",
      "Caminos florales",
    ],
    cta: "Agendar reunión de boda",
  },
  cumpleanos: {
    title: "Arreglos Florales para Cumpleaños",
    paragraph:
      "Decoración floral personalizada para cumpleaños de todas las edades, con arreglos vibrantes y temáticos.",
    items: [
      "Centros de mesa",
      "Arreglos de bienvenida",
      "Decoración de mesa de regalos",
      "Arreglos con iniciales",
      "Orquídeas premium de regalo",
    ],
    cta: "Cotizar cumpleaños",
  },
  "10-de-mayo": {
    title: "Arreglos Especiales para el 10 de Mayo",
    paragraph:
      "Colección exclusiva para celebrar a mamá con flores premium. Pedidos confirmados 10 días antes para garantizar disponibilidad.",
    items: [
      "Arreglos especiales",
      "Orquídeas premium",
      "Bouquets temáticos",
      "Entrega a domicilio",
    ],
    cta: "Reservar para 10 de mayo",
  },
  "dia-de-muertos": {
    title: "Arreglos y Ofrendas para Día de Muertos",
    paragraph:
      "Realizamos arreglos con cempasúchil, nube y terciopelo para altares, ofrendas y espacios conmemorativos.",
    items: [
      "Ofrendas completas",
      "Arreglos de cempasúchil",
      "Centros de mesa temáticos",
      "Decoración de entrada",
    ],
    cta: "Cotizar ofrenda",
  },
  navidad: {
    title: "Decoración Navideña Profesional",
    paragraph:
      "Diseño y montaje de ambientes navideños elegantes para casas, oficinas y empresas.",
    items: [
      "Decoración de árbol",
      "Coronas y guirnaldas",
      "Centros de mesa",
      "Ambientación corporativa",
    ],
    cta: "Agendar proyecto navideño",
  },
  "hogar-y-oficina": {
    title: "Arreglos Semanales para Hogar y Oficina",
    paragraph:
      "Programas de arreglos florales semanales o quincenales para espacios residenciales y empresariales.",
    items: [
      "Arreglos semanales",
      "Retiro del arreglo anterior",
      "Diseños personalizados",
      "Orquídeas de larga duración",
    ],
    cta: "Solicitar suscripción",
  },
  empresarial: {
    title: "Diseño Floral Empresarial",
    paragraph:
      "Ambientación profesional para oficinas, recepciones, lobbies y eventos corporativos.",
    items: [
      "Arreglos semanales",
      "Decoración de salas de juntas",
      "Eventos corporativos",
      "Fiestas de fin de año",
    ],
    cta: "Contacto empresarial",
  },
  "orquideas-premium": {
    title: "Orquídeas Premium",
    paragraph:
      "Orquídeas de 2 a 8 varas en bases de cerámica, espejo o piedra.",
    items: [
      "Mini orquídeas",
      "Orquídeas de 2–8 varas",
      "Presentaciones individuales",
      "Entrega a domicilio",
    ],
    cta: "Ver orquídeas",
  },
  "arreglos-personalizados": {
    title: "Arreglos Personalizados",
    paragraph:
      "Diseños florales hechos a medida según ocasión, estilo y presupuesto.",
    items: [
      "Consulta inicial",
      "Propuesta personalizada",
      "Ajustes según presupuesto",
      "Entrega a domicilio",
    ],
    cta: "Crear arreglo personalizado",
  },
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((service) => ({ service }));
}

export function generateMetadata({ params }) {
  const service = servicePages[params.service];
  if (!service) return {};
  return {
    title: `${service.title} | CUSI`,
    description: service.paragraph,
  };
}

export default function ServiceDetail({ params }) {
  const service = servicePages[params.service];
  if (!service) return notFound();

  return (
    <div className="theme-12">
      <Header12 />
      <main>
        <section className="py-5 py-md-6 bg-white">
          <div className="container d-flex justify-content-center">
            <div className="text-center" style={{ maxWidth: 800 }}>
              <h1 className="fw-bold mb-3">{service.title}</h1>
              <p className="lead text-secondary mb-4">{service.paragraph}</p>
              <ul className="text-start d-inline-block fs-5 mb-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <Link href="/contact" className="btn btn-dark px-4 py-2">
                  {service.cta}
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
