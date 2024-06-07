import ItemView from '../components/ItemShow/ItemView'
import Carrusel from '../components/ItemShow/Carrusel'
import Layout from '../hocs/Layout'

const ItemShow = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-20">
        <ItemView />
        <div className="bg-neutral-400 w-[80%] h-[3px] mt-24 m-5"></div>
        <Carrusel />
      </div>
    </Layout>
  )
}

export default ItemShow
