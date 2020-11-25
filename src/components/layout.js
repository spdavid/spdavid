import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "../css/font-awesome.css";


if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        logo: file(relativePath: {eq: "SPDavid.png"}) {
          publicURL
        }
      }
    `}
    
    render={data => (
      <>
        <Header
          data={data.logo}
          siteTitle={"SPdavid"}
          header={header}
        />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={"SPDavid"} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;


// if (typeof window !== "undefined") {
//   require("smooth-scroll")('a[href*="#"]');
// }

// const Layout = ({ children, header }) => (
//   <>
//   <Header
//   // data={}
//   siteTitle={"SPDavid"}
//   header={header}
// />
// <div>
//   <main id="home">{children}</main>
// </div>
// <Footer siteName={"David Opdendries"} />
// </>
//   // <StaticQuery
//   //   query={graphql`
//   //     query SiteTitleQuery {
//   //       contentfulSiteInformation {
//   //         siteName
//   //         siteDescription
//   //         logo {
//   //           file {
//   //             url
//   //           }
//   //         }
//   //         menus
//   //       }
//   //     }
//   //   `}
    
//   //   render={data => (
//   //     <>
      
//   //     </>
//   //   )}
//   // />
// );

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default Layout;
