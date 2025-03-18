import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords?: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          keywords ||
          "Fatima Masjid, Proddatur, Mosque, Namaz,Masjid,BuddayaPalli, Prayer"
        }
      />
      <meta name="author" content="Fatima Masjid Proddatur" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://fatimamasjidproddatur.vercel.app/your-image.jpg"
      />
      <meta
        property="og:url"
        content="https://fatimamasjidproddatur.vercel.app/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://fatimamasjidproddatur.vercel.app/" />
    </Helmet>
  );
};

export default SEO;
