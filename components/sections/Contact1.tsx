import Link from "next/link"

export default function Contact1() {
	return (
		<>
			<section id="contact" className="section-contact-1  bg-dark position-relative pt-150 pb-lg-250 pb-150 overflow-hidden text-white">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-white-50 fw-bold">Get in touch</h3>
					<span className="fs-5 fw-medium text-white-50">
						I'm always excited to take on new projects and collaborate with innovative minds.
						{/* <br />
						have a project in mind or just want to chat about design, feel free to reach out! */}
					</span>

					<div className="row mt-8">
						<div className="col-lg-4 d-flex flex-column">
							{/* Phone */}
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 d-flex justify-content-center align-items-center">
									<i className="ri-phone-fill fs-26 text-white" />
								</div>
								<div className="ps-3">
									<span className="text-white-50 fs-5">Phone Number</span>
									<h6 className="mb-0 text-white-50 fw-bold">+62-851-5756-3477</h6>
								</div>
							</div>

							{/* Email */}
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 d-flex justify-content-center align-items-center">
									<i className="ri-mail-fill fs-26 text-white" />
								</div>
								<div className="ps-3">
									<span className="text-white-50 fs-5">Email</span>
									<h6 className="mb-0 text-white-50 fw-bold">rifai0245@gmail.com</h6>
								</div>
							</div>

							{/* Address */}
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 d-flex justify-content-center align-items-center">
									<i className="ri-map-2-fill fs-26 text-white" />
								</div>
								<div className="ps-3">
									<span className="text-white-50 fs-5">Address</span>
									<h6 className="mb-0 text-white-50 fw-bold">Tangerang Selatan, Banten</h6>
								</div>
							</div>
						</div>

						{/* Form */}
						{/* <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-white">Leave a message</h3>
									<form action="#">
										<div className="row mt-3">
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-white" htmlFor="name">Your name <span className="text-primary">*</span></label>
												<input type="text" className="form-control border rounded-3 bg-dark text-white" id="name" name="name" placeholder="John Doe" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-white" htmlFor="email">Email address <span className="text-primary">*</span></label>
												<input type="email" className="form-control border rounded-3 bg-dark text-white" id="email" name="email" placeholder="contact.john@gmail.com" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-white" htmlFor="phone">Your phone <span className="text-primary">*</span></label>
												<input type="text" className="form-control border rounded-3 bg-dark text-white" id="phone" name="phone" placeholder="Phone Number" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-white" htmlFor="subject">Subject <span className="text-primary">*</span></label>
												<input type="text" className="form-control border rounded-3 bg-dark text-white" id="subject" name="subject" placeholder="I want to contact for..." />
											</div>
											<div className="col-12">
												<label className="mb-1 mt-3 text-white" htmlFor="message">Message <span className="text-primary">*</span></label>
												<textarea className="form-control border rounded-3 bg-dark text-white" id="message" name="message" placeholder="Your message here..." rows={4} />
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

				{/* <div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-dark overflow-hidden">
					<div className="wow img-custom-anim-top">
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">ahmad rifai</h3>
					</div>
				</div> */}
			</section>
		</>
	)
}
