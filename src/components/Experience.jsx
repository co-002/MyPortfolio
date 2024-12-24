import React from "react";
import exp from "../data/experience.json";

function Experience() {
  return (
    <>
      <div className="container section-padding" id="Experience" data-aos="flip-up" data-aos-duration="1000">
        <h1 className="text-center">EXPERIENCE</h1>
        <div className="experience-container d-flex flex-column align-items-center">
          {exp.map((data) => {
            return (
              <div
                key={data.id}
                className="exp-container d-flex align-items-center mt-4 border border-3"
              >
                <div className="row">
                  <div className="col-lg-2 col-12 d-flex align-items-center">
                    <img
                      src={data.imgSrc}
                      className="img-fluid company-img mb-lg-0 mb-3"
                    />
                  </div>
                  <div className="col-lg-10 col-12">
                    <h2>{data.role}</h2>
                    <div className="d-flex flex-lg-row flex-column justify-content-between">
                      <h5>{data.organization + ", " + data.location}</h5>
                      <h5>{data.startDate + " - " + data.endDate}</h5>
                    </div>
                    <ul>
                      {data.task.map((taskList) => {
                        return <li>{taskList}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Experience;
