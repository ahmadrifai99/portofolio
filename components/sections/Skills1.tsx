'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
		<>

			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								I thrive on turning complex problems into simple, beautiful
								<br className="d-md-block d-none" />
								solutions that enhance user satisfaction.
							</span>
						</div>
							<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
								<div className="skills">
									<div className="skills-icon mb-5">
										<img src="/assets/imgs/skills/skills-1/python.png" alt="" width="90" height="90" />
									</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={80} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Python</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/php.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={85} />%</h3>
									<p className="text-400 fw-medium text-uppercase">PHP</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/javascript.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={81} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Javascript</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/selenium.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={88} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Selenium</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/docker.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={75} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Docker</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/html.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={86} />%</h3>
									<p className="text-400 fw-medium text-uppercase">HTML</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/java.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={70} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Java</p>
								</div>
							</div>
						</div>
						{/* <div className="text-center">
							<p className="fs-5 text-200 mb-0">In addition, I have some programming knowledge such as: </p>
							<div className="d-flex justify-content-center gap-1">
								<Link href="/#" className="fs-5 fw-bold">HTML,</Link>
								<Link href="/#" className="fs-5 fw-bold">CSS,</Link>
								<Link href="/#" className="fs-5 fw-bold">Javascript,</Link>
								<Link href="/#" className="fs-5 fw-bold">Bootstrap,</Link>
								<Link href="/#" className="fs-5 fw-bold">TailwindCSS</Link>
							</div>
						</div> */}
					</div>
				</div>
			</section>

		</>
	)
}
