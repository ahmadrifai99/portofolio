
import Link from "next/link"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text">👋 Hi there, I'm Ahmad Rifai</span>
							<h1 className="ds-2 mb-3">SOFTWARE DEVELOPER</h1>
							<h1 className="text">Fullstack Developer | Quality Assurance | Problem Solver | Tech Enthusiast</h1>
							<p className="text-300 mb-6">I build fast, responsive, and maintainable web applications using modern tech.
							Scroll down to see what I’ve built.
							</p>
							<Link href="/assets/folder/CV-Ahmad Rifai.pdf" className="btn btn-gradient me-2">
								Download CV
								<i className="ri-download-line ms-2" />
							</Link>
							<Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>Hire me</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link>
							<p className="text-400 mt-6 mb-3">professional programming</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/python.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/php.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/javascript.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/selenium.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/docker.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src=" assets/imgs/hero/hero-1/html.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src=" assets/imgs/hero/hero-1/java.png" alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img className="position-relative z-1 filter-gray"/>
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.jpg" />
			</section>

		</>
	)
}
