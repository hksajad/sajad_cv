const Degree = () => {
  return (
    <div>
      <div className="my-8 px-8">
        <div className="content_degree flex justify-between items-center flex-wrap max-md:justify-center max-md:gap-5">
          <div className="boxes_degree border-2 border-[#505050] rounded-lg hover:border-orange-300 cursor-pointer p-5">
            <h1>گواهینامه web programmer</h1>
          </div>
          <div className="boxes_degree border-2 border-[#505050] rounded-lg hover:border-orange-300 cursor-pointer p-5">
            <h1>گواهینامه python</h1>
          </div>
          <div className="boxes_degree border-2 border-[#505050] rounded-lg hover:border-orange-300 cursor-pointer p-5">
            <h1>گواهینامه ICDL</h1>
          </div>
        </div>
      </div>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>

    </div>
  );
};

export default Degree;
