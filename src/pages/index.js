import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
 import SEO from "../components/seo";

import Banner from "../components/banner";
// import About from "../components/about";
// import Service from "../components/service";
// import Work from "../components/work";
import Blogs from "../components/blogs";
// import Testimonial from "../components/testimonial";
// import Contact from "../components/contact";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title="SPDavid"
      keywords={[`David Opdendries`, `SPDavid`, `Developer`, `Microsoft 365`]}
    />
    <Banner data={data.banner}></Banner>
    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About data={data.contentfulAboutMe}></About>;
      })} */}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service data={data.allContentfulService}></Service>;
      })} */}

    
   <Blogs data={data.allMdx.edges}></Blogs>
      
    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work data={data.allContentfulWorks}></Work>;
      })} */}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })} */}

   

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })} */}
  </Layout>
);

export default IndexPage;

 export const pageQuery = graphql`
{
  allMdx (sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        slug
        id
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
  banner: file(relativePath: {eq: "Banner.jpg"}) {
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
`