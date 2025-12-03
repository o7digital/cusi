export default function Head() {
  const title = "CUSI FLORES | Sitio oficial";
  const description =
    "Venta de flores y arreglos florales para bodas, cumpleaños, 10 de mayo, Día de Muertos, Navidad y todo tipo de eventos especiales.";
  const image = "https://cusi.vercel.app/images/cusi-og.jpg";
  const url = "https://cusi.vercel.app/";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="CUSI FLORES" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
