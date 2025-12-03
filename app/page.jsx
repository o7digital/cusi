import HomePage12 from "./(homes)/home-12/page";

export const metadata = {
  title: "CUSI FLORES | Sitio oficial",
  description:
    "Venta de flores y arreglos florales para bodas, cumpleaños, 10 de mayo, Día de Muertos, Navidad y todo tipo de eventos especiales.",
  openGraph: {
    type: "website",
    url: "https://cusi.vercel.app/",
    title: "CUSI FLORES | Sitio oficial",
    description:
      "Venta de flores y arreglos florales para bodas, cumpleaños, 10 de mayo, Día de Muertos, Navidad y todo tipo de eventos especiales.",
    siteName: "CUSI FLORES",
    images: [
      {
        url: "https://cusi.vercel.app/images/cusi-og.jpg",
        width: 1200,
        height: 630,
        alt: "CUSI FLORES - Arreglos florales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUSI FLORES | Sitio oficial",
    description:
      "Venta de flores y arreglos florales para bodas, cumpleaños, 10 de mayo, Día de Muertos, Navidad y todo tipo de eventos especiales.",
    images: ["https://cusi.vercel.app/images/cusi-og.jpg"],
  },
};
export default function Home() {
  return (
    <>
      <HomePage12 />
    </>
  );
}
