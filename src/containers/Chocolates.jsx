import Layout from '../hocs/Layout'  
import ItemLeading from '../components/ItemHome/ItemLeading'
import Items from '../data/db' 

const Chocolates = () => {
    return (
        <div>
            <Layout>
                <div className="flex gap-5 flex-col justify-center items-center">
                    <div className="w-[85%] ">
                        <h1 className="font-bold text-3xl py-3">CHOCOLATES</h1>
                            <div className="bg-red-600 h-1">
                            </div>
                    </div>
                    <div className="flex gap-5 w-[85%] flex-wrap justify-around mb-32">
                    {Items.map((item) => (
                        <ItemLeading key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Chocolates;