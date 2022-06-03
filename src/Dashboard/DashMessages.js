import React, { useContext } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Components/Global/GlobalContext";
import DashHeader from "./DashHeader";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../Components/Global/actions";
import { useThemeProps } from "@mui/material";
import OtherUser from "./OtherUser";
import moment from "moment";
import { io } from "socket.io-client";
const DashMessages = () => {
	const { current } = useContext(GlobalContext);
	const readData = useSelector((state) => state?.persistedReducer.MainUser);

	console.log("na me", readData);
	const readData2 = useSelector((state) => state?.persistedReducer?.otherUser);

	console.log("reading", readData);
	const dispatch = useDispatch();
	const [data, setData] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [show, setShow] = React.useState(false);
	const myId = current?._id;

	console.log("am getting the current user now", current);
	const [load, setLoad] = React.useState(true);
	const [holdData, setHoldData] = React.useState();
	const [dataFriend, setDataFriend] = React.useState([]);
	const [allFriend, setAllFriend] = React.useState([]);
	const [manyU, setManyU] = React.useState([]);
	const [ChatH, setChatH] = React.useState([]);

	const url = "https://qlinkappi.herokuapp.com/api/user/chat/user";
	const fetchDetails = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com/api/user/${myId}`)
			.then((response) => {
				// console.log("get the user", response);
				setData(response?.data?.data);
			});
		setLoad(false);
	};
	const fetchAllUsers = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com/api/user`)

			.then((response) => {
				// console.log("get the many", response);

				setManyU(response?.data?.data);
			});
		setLoad(false);
	};

	const pastData = {
		message: message,
		sendTo: readData?.addedID,
	};
	const pastData2 = {
		message: message,
		sendTo: readData2?._id,
	};

	const ChatMessage = async (e) => {
		e.preventDefault();
		await axios
			.post(
				`https://qlinkappi.herokuapp.com/api/user/${readData._id}/chat`,
				pastData,
			)

			.then((response) => {
				window.location.reload();
				// console.log("get users now", response);
			});
	};
	const ChatMessage2 = async (e) => {
		e.preventDefault();
		await axios
			.post(
				`https://qlinkappi.herokuapp.com/api/user/${readData._id}/chat`,
				pastData2,
			)
			.then((response) => {
				window.location.reload();
				// console.log("get users now", response);
			});
	};

	const GettAllChat = async () => {
		await axios
			.get(url)

			.then((response) => {
				console.log("geting all kk messages", response);
				setChatH(response?.data);
			});
	};
	const getFriends = async () => {
		if (readData) {
			await axios
				.get(`https://qlinkappi.herokuapp.com/${readData._id}`)

				.then((response) => {
					// console.log("AM GETTING FRIENDSr", response);

					setDataFriend(response?.data?.data?.conversation);
				});
			setLoad(false);
		} else {
			console.log("still loading");
		}
	};

	const toggleShow = () => {
		setShow(true);
	};
	const getAllFriends = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com`)

			.then((response) => {
				// console.log("this are the friends oooo", response?.data);

				setAllFriend(response?.data);
			});
		setLoad(false);
	};

	// socket.connect("observer", (data) => {
	// 	console.log("thia ia rhwebjdn", data);
	// 	// setChatH([...ChatH, data]);
	// });

	React.useEffect(() => {
		fetchDetails();

		const LocalData = JSON.parse(window.localStorage.getItem("deta"));
		console.log(LocalData?.userName);
		setHoldData(LocalData);
		getFriends();
		fetchAllUsers();
		getAllFriends();
		GettAllChat();

		const socket = io(`http://localhost:6905`);

		console.log("this is socked", socket);
	}, [myId, readData]);

	return (
		<div class='page-wrapper dashboard'>
			<DashHeader />

			<section style={{ marginTop: "50px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Messages</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='chat-widget'>
								<div class='widget-content'>
									<div class='row'>
										<div
											class='contacts_column col-xl-4 col-lg-5 col-md-12 col-sm-12 chat'
											id='chat_contacts'>
											<div class='card contacts_card'>
												<div class='card-header'>
													<div class='search-box-one'>
														<form method='post' action='#'>
															<div class='form-group'>
																<span class='icon flaticon-search-1'></span>
																<input
																	type='search'
																	name='search-field'
																	value=''
																	placeholder='Search'
																	required=''
																/>
															</div>
														</form>
													</div>
												</div>
												<div class='card-body contacts_body'>
													<ul class='contacts'>
														{load ? (
															<div style={{ marginLeft: "30px" }}>
																{" "}
																<ClipLoader size={30} />
															</div>
														) : null}
														{data?.friends?.map((props) => (
															<>
																<li>
																	<a
																		onClick={() => {
																			toggleShow();
																			dispatch(allUsers(props));
																			localStorage.setItem(
																				"deta",
																				JSON.stringify(props),
																			);
																		}}>
																		<div class='d-flex bd-highlight'>
																			<div class='img_cont'>
																				<img
																					style={{ objectFit: "cover" }}
																					src={props?.userImage}
																					class='rounded-circle user_img'
																					alt=''
																				/>
																			</div>
																			<div class='user_info'>
																				<span>{props?.userName}</span>
																				<p> Developer</p>
																			</div>
																			<span class='info'>35 mins</span>
																		</div>
																	</a>
																</li>
															</>
														))}

														{data?.isDeveloper ? (
															<>
																{allFriend?.map((props) => (
																	<>
																		{props?.addedID === current?._id ? (
																			<>
																				<OtherUser
																					dID={props?.userFriend}
																					allUsers={allUsers}
																					myProp={props}
																					toggleShow={toggleShow}
																				/>
																			</>
																		) : null}
																	</>
																))}
															</>
														) : null}
													</ul>
												</div>
											</div>
										</div>
										{show ? (
											<div class=' col-xl-8 col-lg-7 col-md-12 col-sm-12 chat'>
												<div class='card message-card'>
													<div class='card-header msg_head'>
														<div class='d-flex bd-highlight'>
															<div class='img_cont'>
																<img
																	src='images/resource/candidate-8.png'
																	alt=''
																	class='rounded-circle user_img'
																/>
															</div>
															<div class='user_info'>
																{data?.isDeveloper ? (
																	<span>{readData2?.name}</span>
																) : (
																	<span>{readData?.userName}</span>
																)}
																<p>Active</p>
															</div>
														</div>

														<div class='btn-box'>
															<button class='dlt-chat'>Ready To Pay</button>
															<button class='toggle-contact'>
																<span class='fa fa-bars'></span>
															</button>
														</div>
													</div>

													<div class='card-body msg_card_body'>
														<>
															{dataFriend?.map((props) => (
																<>
																	{props?.sendTo !== current?._id ? (
																		<div class='d-flex justify-content-start'>
																			<div class='img_cont_msg'>
																				<img
																					src='images/resource/candidate-3.png'
																					alt=''
																					class='rounded-circle user_img_msg'
																				/>
																				<div class='name'>
																					{current?.name}
																					<span class='msg_time'>
																						{moment(props?.createdAt).fromNow()}
																					</span>
																				</div>
																			</div>
																			<div class='msg_cotainer'>
																				{" "}
																				{props?.message}
																			</div>
																		</div>
																	) : (
																		<div class='d-flex justify-content-end mb-2 reply'>
																			<div class='img_cont_msg'>
																				<img
																					src='images/resource/candidate-6.png'
																					alt=''
																					class='rounded-circle user_img_msg'
																				/>
																				<div class='name'>
																					{data?.isDeveloper ? (
																						<>{readData2?.name}</>
																					) : (
																						<>{readData?.userName}</>
																					)}
																					<span class='msg_time'>
																						{" "}
																						{moment(props?.createdAt).fromNow()}
																					</span>
																				</div>
																			</div>
																			<div class='msg_cotainer'>
																				{props?.message}
																			</div>
																		</div>
																	)}
																</>
															))}
														</>
													</div>

													<div class='card-footer'>
														<div
															onSubmit={(e) => {
																e.preventDefault();
															}}
															class='form-group mb-0'>
															<textarea
																onChange={(e) => {
																	setMessage(e.target.value);
																}}
																class='form-control type_msg'
																placeholder='Type a message...'></textarea>
															{data?.isDeveloper ? (
																<button
																	onClick={ChatMessage2}
																	type='button'
																	class='theme-btn btn-style-one submit-btn'>
																	Send Message
																</button>
															) : (
																<button
																	onClick={ChatMessage}
																	type='button'
																	class='theme-btn btn-style-one submit-btn'>
																	Send Messagessss
																</button>
															)}
														</div>
													</div>
												</div>
											</div>
										) : (
											<div class=' col-xl-8 col-lg-7 col-md-12 col-sm-12 chat'>
												<div class='card message-card'>
													<div class='card-body msg_card_body'>
														<div
															style={{
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																height: "200px",
															}}>
															Your messages here!!
														</div>
													</div>

													<div class='card-footer'></div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DashMessages;
