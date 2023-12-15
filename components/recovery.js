import ButtonSubmit from "./button_submit";
import React from "react";
import axios from "axios";

const DoRecovery = ({ email , setEmail }) => {

	let confirm = "";

	const func = async (event) => {
		event.preventDefault();
		const getResponse = await axios.get(process.env.NEXT_PUBLIC_RECOVERY, {
			withCredentials :true,
		});
		try {
			let res = await axios.post(
				process.env.NEXT_PUBLIC_RECOVERY,
				{
					flowID: getResponse.data.flowID,
					csrf_token: getResponse.data.csrf_token,
					email: email,
					method:"link",
				},
				{
					withCredentials: true,
				}
			);

			if ( res.status == 200 ) {
				setEmail("");
				redirect();
			}
			else {
				console.log("error");
			}
		}
		catch (err) {
			console.log(err);
		}
	};
	const redirect = () => {
		confirm="mail sent";
	}

	return (
		<div>
			<p>Email address</p>
			<div className="form">
			<input
				type="text"
				className="input"
				vale={email}
				placeholder="Enter your email address"
				onChange={(e) => setEmail(e.target.value)}
			>
			</input>
			<p>{confirm}</p>
			</div>
			<ButtonSubmit
				text={"Send reset link"}
				func = {func}
			/>
		</div>
	);
};

export default DoRecovery;
