import {Product} from "@/types"

const getSingleProduct  = async (id:string): Promise<Product>=>{
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    const res = await fetch(URL)

    return res.json()
}

export default getSingleProduct;