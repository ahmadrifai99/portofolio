
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Work() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										{/* <Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> recent Project </Link> */}
										<h3 className="ds-3 mt-3 mb-4 text-gray">Explore <span className="text-300">My Latest Project</span></h3>
										<p className="text-300 fs-5">
											Simple, scalable, and smart.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{/* prettier-ignore */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/erp-login.png" alt="" style={{ width: "522px", height: "547", objectFit: "contain" }}/>
													<Link href="/erp" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/erp" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">Web Developer</p>
															<h3 className="fw-semibold">Erp Project</h3>
														</Link>
														<Link href="/erp" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed and implemented a comprehensive ERP system to streamline business operations across multiple departments. This included developing intuitive dashboards, automated workflows, and integrated modules that enhance productivity, improve data accuracy, and support better decision-making throughout the organization.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															ERP System
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1.5 years
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Html, Css, Golang, React Js, Redis
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/laundry.png" alt="" style={{ width: "522px", height: "547", objectFit: "contain" }}/>
													<Link href="/laundry" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/laundry" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">APP Frontend</p>
															<h3 className="fw-semibold">Laundry Website</h3>
														</Link>
														<Link href="/laundry" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed an intuitive and visually appealing frontend interface for a modern laundry service website. This included developing user-friendly navigation, real-time order tracking, and seamless booking forms to enhance user experience. Focused on responsiveness, clarity, and convenience to ensure customers can easily schedule pickups, track progress, and manage their laundry orders online</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Launder Woman
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															1 week
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Next JS
														</p>
													</div>
												</div>
											</div>
										</div>
										{/*<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-3.png" alt="" />
													<Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/work-single" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">WEB DEVELOPMENT</p>
															<h3 className="fw-semibold">Travel Booking Platform</h3>
														</Link>
														<Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed an interactive and engaging educational platform aimed at improving online learning experiences. This included developing intuitive navigation, interactive course materials, and features that support student engagement and participation, making learning more accessible and enjoyable.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Conceptual JSC
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															6 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, Sketch, Photoshop, Framer
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-4.png" alt="" />
													<Link href="/work-single" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/work-single" className="card_title_link">
															<p className="text-primary mb-0 mb-md-2">VISUAL DESIGN</p>
															<h3 className="fw-semibold">Educational Platform UI/UX</h3>
														</Link>
														<Link href="/work-single" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Designed an interactive and engaging educational platform aimed at improving online learning experiences. This included developing intuitive navigation, interactive course materials, and features that support student engagement and participation, making learning more accessible and enjoyable.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Client
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Conceptual JSC
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															6 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, Sketch, Photoshop, Framer
														</p>
													</div>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*Static 1*/}
					{/* <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">12</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">250</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Projects</p>
													<p className="fs-5 mb-0 fw-bold">Completed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">680</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">18</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Awards</p>
													<p className="fs-5 mb-0 fw-bold">Won Received</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds.
								{/* <br />
								have a project in mind or just want to chat about design, feel free to reach out! */}
							</span>
							<div className="row mt-8">
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+62-851-5756-3477</h6>
										</div>
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">rifai0245@gmail.com</h6>
										</div>
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Address</span>
											<h6 className="mb-0">Tangerang Selatan, Banten</h6>
										</div>
									</div>
								</div>
								{/* <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a messge</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="Phone Number" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
									</div>
								</div> */}
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">ahmad rifai</h3>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}