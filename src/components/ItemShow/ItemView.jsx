const ItemView = () => {
  return (
    <div className="w-[50%] h-[50vh] p-5 flex flex-row gap-10">
      <div
        className="w-[40%] h-full bg-cover bg-center "
        style={{
          backgroundImage:
            'url("https://fabricadesuenos.com.mx/cdn/shop/products/Personaliza-Kit-Dulces-Surtido-Sabrosito-03_ca24a0c9-0593-40ec-aa3d-b19e4e06d44e.jpg?v=1675899141&width=1946")'
        }}
      ></div>
      <div className="flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-3xl">TITULO PRODUCTO</p>
          <p className="text-3xl">$XXXXXXX</p>
          <div className="space-y-1">
            <p>Pequeña Descripcion</p>
            <p>Info Ingredientes y nutriconal</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between w-full gap-10">
            <div className="flex ">
              <div className="w-[30px] h-[30px] bg-neutral-400 text-center">
                -
              </div>
              <input
                className="w-[60px] h-[30px] p-2 text-center no-arrows"
                type="number"
              />
              <div className="w-[30px] h-[30px] bg-neutral-400 text-center">
                +
              </div>
            </div>

            <button className="px-5 bg-neutral-400">AGREGAR AL CARRITO</button>
          </div>
          <p>Envios gratis desde $XXXXX</p>
        </div>
      </div>
    </div>
  )
}

export default ItemView
