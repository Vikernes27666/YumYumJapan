import items from '../../data/db'
import './style.css'

const ItemCarrusel = () => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="border-2 min-w-[17%] h-[411px] ">
          <div
            className="h-[45%] bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          ></div>
          <div className="h-[55%] space-y-5 flex flex-col justify-center items-center">
            <p>{item.name}</p>
            <p className="font-bold">$XXX</p>
            <div className="bg-neutral-400 px-5 w-4/5 py-1">Ver producto??</div>
            <div className="bg-neutral-400 px-5 w-4/5 py-1">
              Agregar al carrito
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ItemCarrusel
