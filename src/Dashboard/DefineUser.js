import axios from "axios";
import React from "react";


const DefineUser = ({id}) => {
    	const [data, setData] = React.useState([]);

			const getUser = async () => {
				const res = await axios
					.get(`https://qlinkappi.herokuapp.com/api/user/${id}`)
					.then((response) => {
						console.log("hdjfkkdeuhjfjjf", response?.data?.data);
						setData(response?.data?.data);
					});
			};


React.useEffect(()=>{
getUser()
},[id])


	return <>
    	<figure class='image'>
			<img

                                                                        style = {{height : '100%', objectFit : 'cover', width : '100%'}}
																			src={data?.avatar}
																			alt=''
																		/>
																	</figure>
																	<h4 class='name'>
																		<a href='#'>{data?.name}</a>
																	</h4>
																	<ul class='candidate-info'>
																		<li class='designation'>{data?.jobTitle}</li>
																		<li>
																			<span class='icon flaticon-map-locator'></span>{" "}
																			{data?.location}
																		</li>
																		<li>
																			<span class='icon flaticon-money'></span>{" "}
																			$99 / hour
																		</li>
																	</ul>
    </>;
};

export default DefineUser;
