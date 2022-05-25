import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const OtpVerificationInput = () => {
	const hist = useNavigate();
	const [OTP, setOTP] = React.useState("");

	const { id, token } = useParams();

	const onSubmit = async () => {
		const main = "http://localhost:1222";
		const online = "https://qlinkappi.herokuapp.com";

		const url = `${online}/api/user/dev/${id}/${token}`;

		const res = await axios
			.post(url, { developerToken: OTP })
			.then((res) => {
				if (res) {
					
						console.log("seudfjdjdjdjdjdj", res);
						hist("/register");
						window.location.reload();
						swal({
							title: " Success",
							text: "You will be redirected to your dashboard",
							icon: "success",
						});
					
				}
			})
			.catch((error) => {
				if (error.response.status === 404) {
					swal({
						title: error.response.data.message,
						text: "",
						icon: "error",
						button: "ok",
					}).then((value) => {
							hist("/register");
							window.location.reload();
					});
				}
			});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: "100vh",
				background: "#f9fbfa",
			}}>
			<div
				style={{
					fontSize: "25px",
					fontWeight: "bold",
					paddingBottom: "20px",
					textAlign: "center",
				}}>
				Enter Refrence Code that was Sent to You
			</div>
			<OTPInput
				value={OTP}
				onChange={setOTP}
				title='Input styling with inputStyles prop'
				inputClassName='bottom__border'
				// autoFocus
				OTPLength={8}
				otpType='any'
				disabled={false}
				inputStyles={{
					border: 0,
					border: "1px solid #cbcbcb",
				}}
			/>
			{OTP.length >= 8 ? (
				<button
					onClick={onSubmit}
					style={{ marginTop: "10px" }}
					class='theme-btn btn-style-one'
					type='submit'
					name='log-in'>
					Submit code
				</button>
			) : (
				<button
					style={{ marginTop: "10px", cursor: "not-allowed" }}
					class='theme-btn btn-style-one'
					type='submit'
					name='log-in'>
					Submit code
				</button>
			)}
		</div>
	);
};

export default OtpVerificationInput;
