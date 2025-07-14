'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Skills1() {
  return (
    <section className="section-skills-1 position-relative section-padding bg-900">
      <div className="container">
        <div className="text-center mb-7">
          <h3 className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
          <span className="fs-5 fw-medium text-200">
            I thrive on turning complex problems into simple, beautiful
            <br className="d-md-block d-none" />
            solutions that enhance user satisfaction.
          </span>
        </div>

        <div className="row justify-content-center gy-4">
          {/* Python */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/python.png" alt="Python" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">Python</p>
              </div>
            </div>
          </div>

          {/* PHP */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/php.png" alt="PHP" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={85} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">PHP</p>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/javascript.png" alt="JavaScript" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={81} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">JavaScript</p>
              </div>
            </div>
          </div>

          {/* Selenium */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/selenium.png" alt="Selenium" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={88} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">Selenium</p>
              </div>
            </div>
          </div>

          {/* Docker */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/docker.png" alt="Docker" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={75} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">Docker</p>
              </div>
            </div>
          </div>

          {/* HTML */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/html.png" alt="HTML" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={86} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">HTML</p>
              </div>
            </div>
          </div>

          {/* Java */}
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <div className="skills">
              <div className="skills-icon mb-4">
                <img src="/assets/imgs/skills/skills-1/java.png" alt="Java" width="90" height="90" />
              </div>
              <div className="skills-ratio">
                <h3 className="count fw-semibold my-0">
                  <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%
                </h3>
                <p className="text-400 fw-medium text-uppercase">Java</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
