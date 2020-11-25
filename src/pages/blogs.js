import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Blogs"
          keywords={[`David Opdendries`, `MVP`, `Developer`, `Blogs`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Blogs</h1>
            </div>
            <ul
              className={`blogs-list ${
                data.allMdx.edges.length < 5 ? "few-blogs" : ""
              }`}
            >
              {data.allMdx.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={"/post/" + item.node.slug} />
                      {item.node.frontmatter.banner ? (
                      <Img
                      fluid={item.node.frontmatter.banner.childImageSharp.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.frontmatter.title}</h3>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.frontmatter.date).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}


export const pageQuery = graphql`
  query BlogsQuery {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
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
          slug
        }
      }
    }
  }
`;

