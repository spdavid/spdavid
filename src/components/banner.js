import React, { Component } from "react";
import Img from "gatsby-image";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
    
         <Img
          fluid={data.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            <span>Welcome to the personal blog of</span>
            <h1>David Opdendries</h1>
            <ul className="sub-data">
            <li>Office Development MVP</li>
                <li>Microsoft 365 Expert</li>
                <li>Trainer</li>
                <li>Speaker</li>
            </ul>
            <ul className="social">
              {/* <li>
                <a
                  className="fab fa-facebook-f"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li> */}
              <li>
                <a
                  className="fab fa-twitter"
                  href={"https://twitter.com/SharePointDavid"}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              {/* <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li> */}
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={"https://www.linkedin.com/in/davidopdendries/"}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-github"
                  href={"https://github.com/spdavid"}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
