
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function WorkSingle() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work-single section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										{/* <Link href="/#" className="btn btn-gradient d-inline-block text-uppercase">
											work details
										</Link> */}
										<h3 className="ds-3 mt-3 mb-4 text-gray">
											Web Programming | ERP Project
										</h3>
										{/* <p className="text-300 fs-5 mb-0">
											The project involved creating an intuitive and visually appealing user interface, ensuring that users can effortlessly book flights, hotels, and car rentals all within a single app.
										</p> */}
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									{/* <div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Client</p>
										<h6>Fushio Company</h6>
									</div> */}
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Start</p>
										<h6>Nov 2023</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Complete</p>
										<h6>Mar 2025</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Services</p>
										<h6>System ERP</h6>
									</div>
									{/* <div className="bg-6 px-5 py-3 rounded-2">
										<p className="text-300 mb-0">Website</p>
										<h6>fushion.wr</h6>
									</div> */}
								</div>
								<img src="/assets/imgs/work/erp.png" alt="" />
								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										Enterprise Resource Planning (ERP) system designed to help businesses manage their operations efficiently through a single integrated platform. The project involved developing an intuitive user interface and robust features to streamline finance, inventory, HR, sales, and reporting processes. The primary objective was to simplify business workflows and enhance overall productivity across departments.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Key Features</h5>
									<ul>
										<li>
											<p className="text-gray fw-bold">User-Centric Interface: <span className="text-300 fw-medium">Developed a clean and intuitive interface that allows users from various departments to access and manage system features easily and efficiently.</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Integrated Business Modules: <span className="text-300 fw-medium">Implemented fully integrated modules including Accounting, Inventory Management, Procurement, Sales, and Human Resources to support daily business operations.</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Process Automation: <span className="text-300 fw-medium">Designed automated workflows for inventory control, transaction processing, and document approvals, reducing manual workload and minimizing errors.</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Real-Time Reporting & Analytics: <span className="text-300 fw-medium">Provided dynamic and customizable reporting tools that enable management to make data-driven decisions in real-time.</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Data Security & Access Control: <span className="text-300 fw-medium">Equipped with role-based access control to ensure secure access to sensitive company data and protect against unauthorized use.</span></p>
										</li>
									</ul>
									<h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
									<ul>
										<li>
											<p className="text-gray fw-bold">Front-End: <span className="text-300 fw-medium">React JS</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Back-End: <span className="text-300 fw-medium">Golang.</span></p>
										</li>
										<li>
											<p className="text-gray fw-bold">Database: <span className="text-300 fw-medium">Mysql / Redis</span></p>
										</li>
										{/* <li>
											<p className="text-dark fw-bold">APIs: <span className="text-300 fw-medium">Integrated third-party APIs for flight, hotel, and car rental bookings to provide a wide range of options to users.</span></p>
										</li> */}
										{/* <li>
											<p className="text-dark fw-bold">Payment Integration: <span className="text-300 fw-medium">Stripe API for secure and reliable payment processing.</span></p>
										</li> */}
									</ul>
									{/* <h5 className="fs-5 fw-medium mt-4">Design Highlights</h5>
									<ul>
										<li>
											<p className="text-dark fw-bold">Visual Appeal: <span className="text-300 fw-medium">Focused on a visually appealing design with high-quality images and a modern color palette to enhance user engagement.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Usability: <span className="text-300 fw-medium">Ensured the app is user-friendly with clear icons, concise labels, and a straightforward navigation structure.</span></p>
										</li>
										<li>
											<p className="text-dark fw-bold">Responsive Design: <span className="text-300 fw-medium">Made the app responsive to different screen sizes and orientations, providing a consistent user experience across various devices.</span></p>
										</li>
									</ul> */}
								</div>
							</div>
						</div>
					</section>
					{/* Static 1
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
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
								have a project in mind or just want to chat about design, feel free to reach ouft! */}
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
										<Link href="/tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">rifai0245@gmail.com</h6>
										</div>
										<Link href="/mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									{/* <div className="d-flex align-items-center mb-4 position-relative d-inline-flex"> */}
										{/* <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-skype-fill text-primary fs-26" />
										</div> */}
										{/* <div className="ps-3">
											<span className="text-400 fs-5">Skype</span>
											<h6 className="mb-0">WilliamDesignUX</h6>
										</div> */}
										{/* <Link href="/skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
									</div> */}
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Address</span>
											<h6 className="mb-0">Tangerang Selatan, Banten</h6>
										</div>
										<Link href="/https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100" />
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