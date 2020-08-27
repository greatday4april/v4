import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import config from '@config';
import favicon from '@images/favicons/favicon-73x73.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="http://april-li.com" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />

    <link rel="icon" type="image/png" sizes="73x73" href={favicon} />

    <meta name="theme-color" content={config.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
