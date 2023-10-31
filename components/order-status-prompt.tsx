interface PromptMsgProps {
  mxg: string;
}

const OrderStatusPrompt: React.FC<PromptMsgProps> = ({ mxg }) => {
  return (
    <div className="flex bg-sescondaryGray">
      <div className="m-2 lg:mx-auto">
        <p className="text-xs lg:text-base">
          {mxg} <span className="text-blue-600 cursor-pointer">here</span>
        </p>
      </div>
    </div>
  );
};

export default OrderStatusPrompt;
