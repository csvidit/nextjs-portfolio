const LoadingPoem = () => {
  return (
    <div className="mt-7 mb-5 flex w-10/12 flex-row items-center justify-between space-x-2 rounded-md border border-sky-500 pt-1 pb-1 pl-2 pr-2 lg:w-1/3">
      <div className="flex flex-col items-start">
        <div className="text-xl font-semibold text-white">Fetching Poem</div>
      </div>
      <LoadingAnimation></LoadingAnimation>
    </div>
  );
};

export default LoadingPoem;
