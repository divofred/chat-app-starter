import React from 'react';
import Head from 'next/head';

import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBIcon,
	MDBBtn,
	MDBTypography,
	MDBTextArea,
	MDBCardHeader,
} from 'mdb-react-ui-kit';

export default function App() {
	return (
		<>
			<Head>
				<title>Chat Application</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link
					href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<MDBContainer
				fluid
				className="py-5"
				style={{ backgroundColor: '#eee' }}
			>
				<MDBRow>
					<MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
						<h5 className="font-weight-bold mb-3 text-center text-lg-start">
							Active Users
						</h5>

						<MDBCard>
							<MDBCardBody>
								<MDBTypography listUnStyled className="mb-0">
									<li
										className="p-2 border-bottom"
										style={{ backgroundColor: '#eee' }}
									>
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														John Doe
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2 border-bottom">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Danny Smith
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2 border-bottom">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Alex Steward
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2 border-bottom">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Ashley Olsen
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2 border-bottom">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Kate Moss
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2 border-bottom">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Lara Croft
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
									<li className="p-2">
										<a
											href="#!"
											className="d-flex justify-content-between"
										>
											<div className="d-flex flex-row">
												<img
													src="https://i.postimg.cc/85nKtgFz/user.png"
													alt="avatar"
													className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
													width="60"
												/>
												<div className="pt-1">
													<p
														className="fw-bold mb-0"
														style={{
															color: '#e7653d',
														}}
													>
														Brad Pitt
													</p>
												</div>
											</div>
											<div className="pt-1">
												<p className="small text-muted mb-1">
													Active
												</p>
											</div>
										</a>
									</li>
								</MDBTypography>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol md="6" lg="7" xl="8">
						<MDBTypography listUnStyled>
							<li className="d-flex justify-content-between mb-4">
								<img
									src="https://i.postimg.cc/85nKtgFz/user.png"
									alt="avatar"
									className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
									width="60"
								/>
								<MDBCard>
									<MDBCardHeader className="d-flex justify-content-between p-3">
										<p
											className="fw-bold mb-0"
											style={{ color: '#e7653d' }}
										>
											Brad Pitt
										</p>
										<p className="text-muted small mb-0">
											<MDBIcon far icon="clock" /> 12 mins
											ago
										</p>
									</MDBCardHeader>
									<MDBCardBody>
										<p className="mb-0">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua.
										</p>
									</MDBCardBody>
								</MDBCard>
							</li>
							<li className="d-flex justify-content-between mb-4">
								<img
									src="https://i.postimg.cc/85nKtgFz/user.png"
									alt="avatar"
									className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
									width="60"
								/>
								<MDBCard>
									<MDBCardHeader className="d-flex justify-content-between p-3">
										<p
											className="fw-bold mb-0"
											style={{ color: '#e7653d' }}
										>
											Brad Pitt
										</p>
										<p className="text-muted small mb-0">
											<MDBIcon far icon="clock" /> 12 mins
											ago
										</p>
									</MDBCardHeader>
									<MDBCardBody>
										<p className="mb-0">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua.
										</p>
									</MDBCardBody>
								</MDBCard>
							</li>
							<li className="d-flex justify-content-between mb-4">
								<img
									src="https://i.postimg.cc/85nKtgFz/user.png"
									alt="avatar"
									className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
									width="60"
								/>
								<MDBCard>
									<MDBCardHeader className="d-flex justify-content-between p-3">
										<p
											className="fw-bold mb-0"
											style={{ color: '#e7653d' }}
										>
											Brad Pitt
										</p>
										<p className="text-muted small mb-0">
											<MDBIcon far icon="clock" /> 12 mins
											ago
										</p>
									</MDBCardHeader>
									<MDBCardBody>
										<p className="mb-0">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua.
										</p>
									</MDBCardBody>
								</MDBCard>
							</li>
							<li className="d-flex justify-content-between mb-4">
								<MDBCard className="w-100">
									<MDBCardHeader className="d-flex justify-content-between p-3">
										<p
											className="fw-bold mb-0"
											style={{ color: '#e7653d' }}
										>
											Lara Croft
										</p>
										<p className="text-muted small mb-0">
											<MDBIcon far icon="clock" /> 13 mins
											ago
										</p>
									</MDBCardHeader>
									<MDBCardBody>
										<p className="mb-0">
											Sed ut perspiciatis unde omnis iste
											natus error sit voluptatem
											accusantium doloremque laudantium.
										</p>
									</MDBCardBody>
								</MDBCard>
								<img
									src="https://i.postimg.cc/85nKtgFz/user.png"
									alt="avatar"
									className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
									width="60"
								/>
							</li>
							<li className="d-flex justify-content-between mb-4">
								<img
									src="https://i.postimg.cc/85nKtgFz/user.png"
									alt="avatar"
									className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
									width="60"
								/>
								<MDBCard>
									<MDBCardHeader className="d-flex justify-content-between p-3">
										<p
											className="fw-bold mb-0"
											style={{ color: '#e7653d' }}
										>
											Brad Pitt
										</p>
										<p className="text-muted small mb-0">
											<MDBIcon far icon="clock" /> 10 mins
											ago
										</p>
									</MDBCardHeader>
									<MDBCardBody>
										<p className="mb-0">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua.
										</p>
									</MDBCardBody>
								</MDBCard>
							</li>
							<li className="bg-white mb-3">
								<MDBTextArea
									label="Message"
									id="textAreaExample"
									rows={4}
								/>
							</li>
							<MDBBtn
								rounded
								className="float-end"
								style={{
									backgroundColor: '#e7653d',
								}}
							>
								Send
							</MDBBtn>
						</MDBTypography>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}
