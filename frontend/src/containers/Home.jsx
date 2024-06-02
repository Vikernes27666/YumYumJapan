import Layout from "../hocs/Layout";
import SwiperSlideComponent from '../components/SwiperSlide';


const Home = () => {
    return (
        <Layout>
            <div>
                <SwiperSlideComponent />
            <div className="text-red-500">
                Home
            </div>
        </Layout>
    );
    }

export default Home;