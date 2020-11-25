import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, data }) {
  return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${"SPDavid"}`}
            meta={[
              {
                name: `description`,
                content: "Personal Blog of David Opdendries"
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: "Personal Blog of David Opdendries"
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: "@SPDavid"
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: "Personal Blog of David Opdendries"
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;


