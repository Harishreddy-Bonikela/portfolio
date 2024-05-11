import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  aboutMeSection,
  workExperiences,
  skillsSection,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  testimonialSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewAboutMe = aboutMeSection.display;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = testimonialSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewBigProjects = bigProjects.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu dark-menu-header header" : "light-menu-header header"}>
        <a href="/portfolio/" className="logo">
          <label className="logo-name">{greeting.username}</label>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAboutMe && (
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewBigProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
