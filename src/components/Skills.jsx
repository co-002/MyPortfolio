import React from "react";
import skills from "../data/skills.json";

function Skills() {
  return (
    <div className="container section-padding" id="skills">
      <h1 className="text-center">Skills</h1>
      <div className="skills-images d-flex justify-content-center mt-4">
        {skills.map((mySkill, index) => {
          return (
            <div
              className="grid-item d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index*150}
            >
              <a
                href={mySkill.link}
                target="_blank"
                title={"Learn " + mySkill.language}
              >
                <img src={mySkill.imgSrc} height={70} width={70} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
