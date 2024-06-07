const Newsletter = () => {
  return (
    <div
      className="w-full bg-center  h-[300px] p-20 space-y-10 "
      style={{
        backgroundImage:
          'url("https://img.freepik.com/vector-premium/rojo-oriental-chino-patrones-fisuras-ilustracion_193606-43.jpg")'
      }}
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-white">¡MANTENTE AL DIA!</h1>
        <p className="text-sm font-medium text-white">
          Unete a nuestro boletin y se el primero en enterarte de ofertas
          exclusivas, descuenteos y las ultimas en golosinas japonesas
        </p>
      </div>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Correo electronico"
          className="w-1/2 rounded-3xl p-2 shadow-inner"
        />
        <div className="bg-black text-white px-7 py-2 rounded-3xl">
          Suscribirse
        </div>
      </div>
    </div>
  )
}

export default Newsletter
