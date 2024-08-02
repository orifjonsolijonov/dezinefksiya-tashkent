import arrow from "../assets/icons/arrow_top-icon.svg";

function ctaSection() {
  return (
    <section className="ctaSection px-5 md:px-8">
      <div className="container flex justify-end flex-col items-center pb-[2rem]">
        <h2 className="text-white text-[40px] font-bold">Klapa va zararli hashorot endi yo'q deb hisoblang !!!</h2>
        <p className="text-white">
          Bizning ko'p yillardan beri o'z faoliyatini olib kelayotgan
          kompaniyamiz Mijozlarimiz bizdan mamnun
        </p>
        <button className="flex items-center gap-3
                         text-[#F5F5F5] sm:text-[21px] justify-center
                         bg-[#12C4FC] font-Gilroy font-medium
                         md:px-[3rem] px-[1.5rem] py-[1rem] rounded-full
                         mt-[2rem] text-[14px] sm:w-[auto] w-[90%] text-center ">
        Bog'lanish <img src={arrow} alt="arrow" /> 
        </button>
      </div>
    </section>
  );
}

export default ctaSection;
