import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import { DiscussionEmbed } from "disqus-react";
// import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

export default class blogPost extends Component {
  render() {
    const data = this.props;
    const postData = data.data.allMdx.edges[0].node.frontmatter;
    console.log(postData);
    console.log(this);
    const disqusShortname = "spdavid";
    const disqusConfig = {
      identifier: data.data.allMdx.edges[0].node.id,
      title: postData.title
    };

     const siteurl = "https://spdavid.com/";

    const twiteerhandle = "@SPDavid"
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twiteerhandle }
      },
      title: postData.title,
      slug: "/post/" + data.data.allMdx.edges[0].node.slug
    };

    return (
     
        <Layout>
        <SEO
          title={postData.title}
          keywords={[
            `David Opdendries`,
            `Microsoft 365`,
            `Developer`,
            postData.title
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            {postData.banner ? (
              <Img
                className="feature-img"
                fluid={postData.banner.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            
            ) : (
              <div className="no-image"></div>
            )}

            <div className="details">
              <h1 className="title">{postData.title}</h1>
              <span className="date">
                <i className="fas fa-calendar-alt"></i>{" "}
                {moment(postData.date).format("LL")}
              </span>
              <MDXRenderer>{data.data.allMdx.edges[0].node.body}</MDXRenderer>
            </div>
            <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twiteerhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`
                }
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery($id: String) {
    allMdx(filter: {id: {eq: $id}}) {
      edges {
        node {
          slug
          id
          body
          frontmatter {
            title
            date
            banner {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
