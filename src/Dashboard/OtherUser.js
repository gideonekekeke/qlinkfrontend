import axios from 'axios';
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { otherUsers } from '../Components/Global/actions';
import { GlobalContext } from '../Components/Global/GlobalContext';

const OtherUser = ({ dID, toggleShow, allUsers, myProp }) => {
    const dispatch = useDispatch()
	const [load, setLoad] = React.useState(true);
	const current = useContext(GlobalContext);
	const myId = current?._id;
	const [data, setData] = React.useState([]);
	const fetchDetails = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com/api/user/${dID}`)

			.then((response) => {
				console.log("get the user", response);
				setData(response?.data?.data);
			});
		setLoad(false);
	};

	React.useEffect(() => {
		fetchDetails();
		console.log("dxhjdkfdhdjkf", dID);
	}, []);

	return (
		<>
			<>
				<li>
					<a
						onClick={() => {
							toggleShow();
							dispatch(allUsers(myProp));
							dispatch(otherUsers(data));
							localStorage.setItem("deta", JSON.stringify(myProp));
						}}>
						<div class='d-flex bd-highlight'>
							<div class='img_cont'>
								<img
									style={{ objectFit: "cover" }}
									src={data?.avatar}
									class='rounded-circle user_img'
									alt=''
								/>
							</div>
							<div class='user_info'>
								<span>{data?.name}</span>
								<p> Developer</p>
							</div>
							<span class='info'>35 mins</span>
						</div>
					</a>
				</li>
			</>

         
		</>
	);
};

export default OtherUser