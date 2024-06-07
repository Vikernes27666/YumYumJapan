import Layout from '../hocs/Layout'
import SwiperSlideComponent from '../components/SwiperSlide'
import Leading from '../components/ItemHome/Leading'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <Layout>
      <div>
        <SwiperSlideComponent />
      </div>
      <Leading />
      <Newsletter />
    </Layout>
  )
}

export default Home
