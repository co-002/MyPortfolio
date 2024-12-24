import React from "react";

function Projects() {
  return (
    <div className="container section-padding" id="projects">
      <section class="dark">
        <div class="container py-4">
          <h1 class="text-center mb-4">
            My Projects
          </h1>

          <article class="postcard dark blue" data-aos="flip-left" data-aos-duration="1000">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="assets/images/project-1.jpg"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                <a href="#">E-Commerce</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>April, 2023
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                This E-commerce is a web based applications, which selling
                computer assessories. It is developed in PHP, so I have used
                session for user authentication. In backend, admin will handle
                all the products like adding or manipulating and also he can
                manage the users. <br />
                <h5 className="fw-bold d-inline-block me-2">Technologies:</h5>
                MySql, PHP, HTML, CSS, JavaScript
              </div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <a href="#">
                    <button className="btn btn-outline-warning" style={{"cursor": "not-allowed"}} title="Demo present in my local PC">Demo</button>
                  </a>
                </li>
                <li class="tag__item ms-3">
                  <a
                    href="#"
                  >
                    <button className="btn btn-outline-warning" style={{"cursor": "not-allowed"}} title="Code present in my local PC">Code</button>
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark red" data-aos="flip-right" data-aos-duration="1000">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="assets/images/project-2.jpg"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title red">
                <a href="#">Perfect House Finding & Price Prediction</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  February, 2023
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                It is web-based applications for those who are looking for a new
                house. This system will keep track record of housing properties
                available on rent or for sale. This will work as connecting
                bridge between customer and property seller. <br />
                <h5 className="fw-bold d-inline-block me-2">Technologies:</h5>
                Asp.net, HTML, CSS, Bootstrap, MySql
              </div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <a href="#">
                    <button className="btn btn-outline-warning" style={{"cursor": "not-allowed"}} title="Demo present in my local PC">Demo</button>
                  </a>
                </li>
                <li class="tag__item ms-3">
                  <a href="" target="_blank">
                    <a href="">
                      <button className="btn btn-outline-warning">Code</button>
                    </a>
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark blue" data-aos="flip-left" data-aos-duration="1000">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="assets/images/project-3.jpg"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                <a href="#">iDoc</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>December, 2024
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                This project is mini project build in react and I will make it
                full stack project on future, for now I am loading docs data
                statically and here I added drag and drop feature, this feature
                make it more cool and good looking. <br />
                <h5 className="fw-bold d-inline-block me-2">Technologies:</h5>
                React, Tailwind
              </div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <a href="https://musical-dragon-0a9bf7.netlify.app/">
                    <button className="btn btn-outline-warning">Demo</button>
                  </a>
                </li>
                <li class="tag__item ms-3">
                  <a href="#">
                    <button className="btn btn-outline-warning" style={{"cursor": "not-allowed"}} title="Code present in my local PC">Code</button>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Projects;
