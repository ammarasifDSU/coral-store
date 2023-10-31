import {ProductCategories} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/categories`

const getCategories = async (): Promise<ProductCategories>=>{
    const res = await fetch(URL)

    return res.json()
}

export default getCategories;