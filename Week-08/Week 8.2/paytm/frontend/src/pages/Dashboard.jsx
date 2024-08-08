export const Dashboard = () => {
  const value = 234;
  return (
    <div>
      <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
          PayTM App
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4">Hello</div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">U</div>
          </div>
        </div>
      </div>
      {/* Balance Component*/}
      <div className="m8">
        <div className="flex">
          <div className="font-bold text-lg">Your Balance is </div>
          <div className="font-semibold ml-4 text-lg">Rs {value}</div>
        </div>
      </div>
    </div>
  );
};
