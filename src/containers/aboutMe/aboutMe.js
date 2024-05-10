import React, {useContext} from "react";
import "./aboutMe.scss";
import Button from "../../components/button/Button";
import {aboutMeSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);
  if (aboutMeSection.display) {
    return (
        <Fade left duration={1000}>
            <div className="aboutme-container" id="aboutMe">
                <h1 className="aboutme-heading">About Me</h1>
                <div className="aboutme-cards-flex">
                    <div className="aboutme-cards-div">
                        <p
                            className={
                            isDark
                                ? "dark-mode aboutme-text-p"
                                : "aboutme-text-p subTitle"
                            }
                        >
                            {aboutMeSection.title}
                        </p>
                        <p
                            className={
                            isDark
                                ? "dark-mode aboutme-text-p"
                                : "aboutme-text-p subTitle"
                            }
                        >
                            {aboutMeSection.subTitle}
                        </p>
                        <p
                            className={
                            isDark
                                ? "dark-mode aboutme-text-p"
                                : "aboutme-text-p subTitle"
                            }
                        >
                            {aboutMeSection.text}
                        </p>
                        <p
                            className={
                            isDark
                                ? "dark-mode aboutme-text-p"
                                : "aboutme-text-p subTitle"
                            }
                        >
                            {aboutMeSection.body}
                        </p>
                        <div className="aboutme-contact-div">
                            <Button text="Contact me" href="#contact" />
                            {aboutMeSection.resumeLink && (
                            <Button
                                text="See my resume"
                                newTab={true}
                                href={aboutMeSection.resumeLink}
                            />
                            )}
                        </div>
                    </div>
                    <div className="aboutme-cards-img-div">
                        <img
                            alt=""
                            className="aboutme-cards-img"
                            src={require("../../assets/images/zion.jpg")}
                        ></img>
                    </div>
                </div>
            </div>
        </Fade>
    );
  }
  return null;
}
