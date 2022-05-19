import React, { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../LoadState";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global/GlobalContext";

import { getUser } from "../Global/actions";
// import 'sweetalert2/src/sweetalert2.scss'
const Register = () => {

	const { handleShow } = useContext(GlobalContext);
	const hist = useNavigate();
	const [name, setName] = React.useState("");
	const [fName, setFName] = React.useState("jimoh");
	const [lName, setLName] = React.useState("samsondhdh");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [phonenumber, setPhoneNumber] = React.useState("87656776567");
	const [loading, setLoading] = React.useState(false);
	const [avatar, setAvatar] = React.useState(
		"https://i.stack.imgur.com/l60Hf.png",
	);
	const toggleLoad = () => {
		setLoading(true);
	};
	const [toggle, setToggle] = React.useState(false);

	const changeToggle = () => {
		setToggle(!toggle);
	};

	const postData = async () => {
		if (name === "" && email === "" && password === "") {
			Swal.fire({
				icon: "error",
				title: "Empty Fields",
				text: "All fields are Compulsory!",
				//   footer: '<a href="">Why do I have this issue?</a>'
			});
		} else {
			await axios
				.post("https://newqlinksbackapi.vercel.app/api/user/clientReg ", {
					name,
					email,
					password,
				})
				.then((response) => {
					hist("/dashboard");
					 window.location.reload()
			
					swal({
						title: " Success",
						text: "An email has been sent to your email address to confirm your account",
						icon: "success",
						button: "ok",
					}).then((value) => {
						swal(hist("/dashboard"));
					});
					window.localStorage.setItem(
						"dataUsers",
						JSON.stringify(response?.data?.data?.CreateUser),
					);
					

					//  console.log(response.data.data.CreateUser)
					handleShow();
					setLoading(false);
				})
				.catch((error) => {
					Swal.fire({
						icon: "error",
						title: "An error occured",
						text: "Server  or Network error",
						//   footer: '<a href="">Why do I have this issue?</a>'
					});

					setLoading(false);
				});
		}
	};

	const LoginData = async () => {
		if (email === "" && password === "") {
			Swal.fire({
				icon: "error",
				title: "Empty Fields",
				text: "All fields are Compulsory!",
				//   footer: '<a href="">Why do I have this issue?</a>'
			});
		} else {
			await axios
				.post("https://newqlinksbackapi.vercel.app/api/user/login", {
					email,
					password,
				})
				.then((response) => {
					window.localStorage.setItem(
						"dataUsers",
						JSON.stringify(response.data.data),
					);
					hist("/dashboard");
					window.location.reload();
					swal({
						title: " Success",
						text: "Click ok to redirect you to your Dashboard",
						icon: "success",
						button: "ok",
					}).then((value) => {
						swal(hist("/dashboard"));
						// window.location.replace('/dashboard')
						handleShow();
					});
				})
				.catch((error) => {
					if (error.response.status === 400) {
						swal({
							title: error.response.data.message,
							text: "",
							icon: "error",
							button: "ok",
						}).then((value) => {
							swal(hist(window.location.reload()));
						});
					}
				});
			setLoading(false);
			handleShow();
		}
	};

	let inputRef = "R905743646474";

	const SignupDeveloper = async () => {
		if (name === "" && email === "" && password === "") {
			Swal.fire({
				icon: "error",
				title: "Empty Fields",
				text: "All fields are Compulsory!",
				//   footer: '<a href="">Why do I have this issue?</a>'
			});
		} else {
			Swal.fire({
				title: "Submit your Qubators Reference Code",
				input: "text",
				inputAttributes: {
					autocapitalize: "off",
				},
				showCancelButton: true,
				confirmButtonText: "Submit",
				showLoaderOnConfirm: true,
				inputValidator: (value) => {
					if (value === inputRef) {
						return axios
							.post(
								"https://newqlinksbackapi.vercel.app/api/user/developerReg",
								{ name, email, password },
							)
							.then((response) => {
								window.localStorage.setItem(
									"dataUsers",
									JSON.stringify(response.data.data?.CreateUser),
								);
								hist("/mainprofile");
								window.location.reload();
								swal({
									title: " Successful",
									text: "click ok to redirect you to your dashboard",
									icon: "success",
									button: "ok",
								}).then((value) => {
									window.location.reload();
									swal(hist("/mainprofile"));
									window.localStorage.setItem(
										"dataUsers",
										JSON.stringify(response?.data?.data?.CreateUser),
									);
								});
								handleShow();
								setLoading(false);
								// window.location.reload("/mainprofile")

								window.localStorage.setItem(
									"dataUsers",
									JSON.stringify(response?.data?.data?.CreateUser),
								);
								hist("/mainprofile");
							})
							.catch((error) => {
								Swal.showValidationMessage(`Request failed: ${error}`);
							});
					} else if (value !== inputRef) {
						Swal.fire({
							icon: "error",
							title: "Refrence Code error",
							text: "",
							//   footer: '<a href="">Why do I have this issue?</a>'
						}).then((value) => {
							swal(setLoading(false));
						});
					}
				},

				allowOutsideClick: () => !Swal.isLoading(),
			});
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(0,0,0, 0.5)",
				minHeight: "90vh",
				position: "fixed",
				width: "100vw",
			}}
			class='model'>
			{toggle ? (
				<div style={{ width: "500px", zIndex: "100" }} id='login-modal'>
					<div class='login-form default-form'>
						<div class='form-inner'>
							<h3>Register to Qlink</h3>
							<p>Fill in the details required below</p>

							<form
								onSubmit={(e) => {
									e.preventDefault();
									toggleLoad();
								}}>
								<div class='form-group'>
									<label>FullName</label>
									<input
										onChange={(e) => {
											setName(e.target.value);
										}}
										type='text'
										name='FullName'
										placeholder='FullName'
										required
									/>
								</div>
								<div class='form-group'>
									<label>Email</label>
									<input
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										type='email'
										name='email'
										placeholder='email'
										required
									/>
								</div>
								<div class='form-group'>
									<label>Password</label>
									<input
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										type='text'
										name='password'
										placeholder='password'
										required
									/>
								</div>

								<div class='form-group'>
									<button
										onClick={SignupDeveloper}
										class='theme-btn btn-style-one'
										type='submit'
										name='log-in'>
										JOIN AS A DEVELOPER
									</button>
									<button
										onClick={() => {
											postData();
										}}
										style={{ background: "#21CDBF" }}
										class='theme-btn btn-style-one'
										type='submit'>
										JOIN AS A CLIENT/CONTRACTOR
									</button>
								</div>
							</form>

							<div class='bottom-box'>
								<div class='text'>
									Already have an account?{" "}
									<a onClick={changeToggle} class='call-modal signup'>
										Log In
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div style={{ width: "500px" }} id='login-modal'>
					<div class='login-form default-form'>
						<div class='form-inner'>
							<h3>Login to Qlink</h3>

							<form
								onSubmit={(e) => {
									e.preventDefault();
									toggleLoad();
								}}>
								<div class='form-group'>
									<label>Email</label>
									<input
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										type='email'
										name='email'
										placeholder='email'
										required
									/>
								</div>

								<div class='form-group'>
									<label>Password</label>
									<input
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										type='password'
										name='password'
										placeholder='Password'
									/>
								</div>

								<div class='form-group'>
									<div class='field-outer'>
										<div class='input-group checkboxes square'>
											<input
												type='checkbox'
												name='remember-me'
												value=''
												id='remember'
											/>
											<label for='remember' class='remember'>
												<span class='custom-checkbox'></span> Remember me
											</label>
										</div>
										<a href='#' class='pwd'>
											Forgot password?
										</a>
									</div>
								</div>

								<div class='form-group'>
									<button
										onClick={() => {
											LoginData();
										}}
										class='theme-btn btn-style-one'
										type='submit'
										name='log-in'>
										Log In
									</button>
								</div>
							</form>

							<div class='bottom-box'>
								<div class='text'>
									Don't have an account?{" "}
									<a onClick={changeToggle} class='call-modal signup'>
										Signup
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{loading ? <Loading loading={loading} /> : null}
		</div>
	);
};

export default Register;
