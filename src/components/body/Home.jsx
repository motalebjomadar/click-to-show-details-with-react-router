import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Dear all viewers, our service is temporary closing now</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;