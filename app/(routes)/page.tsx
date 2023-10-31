import Banner from "@/components/banner"
import NewArrivals from "@/components/new-arrivals"
import OrderStatusPrompt from "@/components/order-status-prompt"
import { PromptMxg } from "@/lib/constants"

const HomePage = () => {
  return (
    <div>
      <OrderStatusPrompt mxg={PromptMxg}/>
      <Banner/>
      <NewArrivals/>
    </div>
  )
}

export default HomePage
