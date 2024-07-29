export const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-700">{title}</div>
      <div className="flex justify-between">
        <div>₹ {amount}</div>
        {orderCount ? (
          <div className="flex items-center">
            <div>{orderCount} order(s)</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
