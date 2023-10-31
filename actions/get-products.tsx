import { ProductResponse} from "@/types"

interface getProductProps {
    url:string,
    limit:number
}

const getProducts  = async ({url,limit=5}:getProductProps): Promise<ProductResponse[]>=>{
    const URL = `${process.env.NEXT_PUBLIC_API_URL}${url}?limit=${limit}`
    const res = await fetch(URL)

    return res.json()
}

export default getProducts;