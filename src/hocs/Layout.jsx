/* eslint-disable react/prop-types */
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sticky from "../components/Sticky.jsx/"
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <ToastContainer autoClose={5000} />
            {props.children}
            <Sticky />
            <Footer /> 
        </div>
    )
}

export default Layout;