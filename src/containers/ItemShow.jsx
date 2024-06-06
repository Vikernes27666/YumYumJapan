import ItemView from '../components/ItemShow/ItemView'
import Carrusel from '../components/ItemShow/Carrusel'

const ItemShow = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <ItemView />
      <div className="bg-neutral-400 w-[80%] h-[3px] mt-24 m-5"></div>
      <Carrusel />
    </div>
  )
}

export default ItemShow
