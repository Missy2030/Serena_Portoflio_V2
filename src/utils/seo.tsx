import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = ['portfolio', 'développeur', 'React', 'Serena'],
  image = '/social-preview.jpg',
  children
}) => {
  const fullTitle = `${title} | Portfolio Serena`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
      </Helmet>
      {children}
    </>
  );
};