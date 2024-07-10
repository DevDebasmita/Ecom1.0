import axios from "axios";

let token = "";
const Instance = axios.create({
	//baseURL: "http://localhost:3079/api",
	baseURL: "https://ecommerce-p6pg.onrender.com/api",

	headers: {
		Authorization: token,
	},
});

export default Instance;
