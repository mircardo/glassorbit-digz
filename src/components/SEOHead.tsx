interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({ 
  title = "Global Digz - Your Gateway to Global Opportunities",
  description = "Explore global opportunities, scholarships, remote work, relocation guides, and more. Your ultimate resource for international education and career growth.",
  image = "/og-image.jpg",
  url = "https://globaldigz.com",
  type = "website"
}: SEOHeadProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </>
  );
}