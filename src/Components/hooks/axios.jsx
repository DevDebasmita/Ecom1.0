import axios from "axios";


const Instance = axios.create({
	
	//baseURL: "http://localhost:3039/api",
    baseURL: "https://ecom1-0-be.vercel.app/",
	//headers: {
		//Authorization: token,
	//},
});

export default Instance;