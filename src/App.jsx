import CreateAccount from "./Components/CreateAccount.jsx";
import Forget from "./Components/Forget.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Verification from "./Components/Verification.jsx";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ChangeAddress from "./Components/homecomponents/ChangeAddress.jsx";
import Fashion from "./Components/homecomponents/Fashion.jsx";
import Mobile from "./Components/homecomponents/Mobile.jsx";
import MyCart from "./Components/homecomponents/MyCart.jsx";
import MyOrder from "./Components/homecomponents/MyOrder.jsx";
import MyWhistle from "./Components/homecomponents/MyWhistle.jsx";
import OrderHistory from "./Components/homecomponents/OrderHistory.jsx";
import Privacy from "./Components/homecomponents/Privacy.jsx";
import Support from "./Components/homecomponents/Support.jsx";
import Terms from "./Components/homecomponents/Terms.jsx";
import ViewMore from "./Components/homecomponents/ViewMore.jsx";

function App() {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				limit={4}
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
				theme="light"
			/>
			<Router>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/forget" element={<Forget />}></Route>
					<Route path="/create" element={<CreateAccount />}></Route>
					<Route path="/forget/Verify" element={<Verification />}></Route>
					<Route path="Login/Home" element={<Home />}></Route>
					<Route path="image" element={<Mobile />}></Route>
					<Route path="whistle" element={<MyWhistle />}></Route>
					<Route path="fashion" element={<Fashion />}></Route>
					<Route path="viewmore" element={<ViewMore />}></Route>
					<Route path="myorder" element={<MyOrder />}></Route>
					<Route path="orderhistory" element={<OrderHistory />}></Route>
					<Route path="cart" element={<MyCart />}></Route>
					<Route path="address" element={<ChangeAddress />}></Route>
					<Route path="policy" element={<Privacy />}></Route>
					<Route path="terms" element={<Terms />}></Route>
					<Route path="support" element={<Support />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
