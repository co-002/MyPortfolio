import React, { useEffect, useRef } from "react";
import pdf from "../pdf/AniketCV.pdf";
import Typed from "typed.js";

function Home() {
  const myName = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Aniket Pandit",
        "I'm Associate Software Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const type = new Typed(myName.current, options);
    return () => {
      type.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="container d-flex justify-content-between mt-5 section-padding"
        id="home"
      >
        <div className="row w-100">
          <div className="col-lg-6 col-12 d-flex align-items-center justify-content-lg-start justify-content-center">
            <div
              className="left-content d-flex flex-column"
              style={{ gap: "30px" }}
            >
              <h1 className="m-0 text-lg-start text-center" ref={myName}></h1>
              <p className="fs-5 m-0 text-lg-start text-center">
                I am an Associate Software Developer skilled in the MERN stack
                (MongoDB, Express, React, Node.js), with experience in core
                Java, PHP, and data structures. Currently, I am working on
                developing and maintaining real estate applications tailored to
                client-specific requirements.
              </p>
              <div className="resume-div text-lg-start text-center">
                <a href={pdf} download="AniketResume.pdf">
                  <button className="btn btn-outline-warning">
                    Download Resume
                  </button>
                </a>
                <a href={pdf} target="_blank" className="ms-3">
                  <button className="btn btn-outline-warning">
                    View Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-lg-0 mt-5 d-flex justify-content-center align-items-center">
            <div className="profile-img-div">
              <img
                src="/assets/images/profileImg.jpg"
                alt="profile image"
                className=" profile-img h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
