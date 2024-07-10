import axios from "axios";

let token = "";
const Instance = axios.create({
	//baseURL: "http://localhost:3079/api",
	 baseURL: "https://http://ecommerce-be-mu.vercel.app",
	headers: {
		Authorization: token,
	},
});

export default Instance;
