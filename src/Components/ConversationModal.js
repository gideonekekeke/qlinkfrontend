import axios from "axios";
import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./LoadState";

const ConversationModal = ({ toggleShows, data }) => {
	const hist = useNavigate();
	const [message, setMessage] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const readData = useSelector(
		(state) => state?.persistedReducer?.AddingFriends,
	);
	console.log("hello reader", readData);
	const pastData = {
		message: message,
		sendTo: readData?.addedID,
	};

	const toggleLoad = () => {
		setLoading(true);
	};
	const ChatMessage = async (e) => {
		// e.preventDefault();
		await axios
			.post(`https://qlinkappi.herokuapp.com/${readData._id}/chat`, pastData)

			.then((response) => {
				hist("/messages");
				window.location.reload();
				setLoading(false);
				// console.log("get users now", response);
			});
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "rgba(0,0,0, 0.5)",
				minHeight: "100vh",
				position: "fixed",
				width: "100vw",
				zIndex: "1000",
			}}
			class='model'>
			<div style={{ width: "500px" }} id='login-modal'>
				<div class='login-form default-form'>
					<div class='form-inner'>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div style={{ display: "flex" }}>
								<img
									src={data?.avatar}
									style={{
										height: "50px",
										width: "50px",
										background: "silver",
										borderRadius: "50%",
										fontWeight: "bold",
										objectFit: "cover",
									}}
								/>
								<div
									style={{
										display: "flex",
									}}>
									<div
										style={{
											margin: "10px",
											fontSize: "20px",
											fontWeight: "bold",
										}}>
										{data?.name}
										<br />
										<div
											style={{
												fontSize: "13px",
											}}>
											Online . Avg. response time: 2 Hrs
										</div>
									</div>
								</div>
							</div>
							<div>
								<ImCancelCircle
									onClick={toggleShows}
									style={{ fontSize: "20px", cursor: "pointer" }}
								/>
							</div>
						</div>

						<form
							onSubmit={(e) => {
								e.preventDefault();
								toggleLoad();
								ChatMessage();
							}}>
							<div class='form-group'>
								<label>Message</label>
								<textarea
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									placeholder='Type your message here...'
									required
								/>
							</div>

							<div class='form-group'>
								<button
									class='theme-btn btn-style-one'
									type='submit'
									name='log-in'>
									Submit
								</button>
							</div>
						</form>
						{loading ? <Loading loading={loading} /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConversationModal;
