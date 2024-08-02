import arrow from "../assets/icons/arrow_top-icon.svg";
function hero() {
  return (
    <div className="container 2xl mx-auto">
      <section className="hero mt-[2rem] p-5 sm:p-8 rounded-[16px] flex flex-col justify-start sm:justify-center items-start">
        <h1 className="text-[38px] md:text-[61px] w-10/12 text-white font-bold md:w-6/12 leading-[1.2]">
          10 yillik tajribaga ega ishonchli dezinfeksiya xizmatlari
        </h1>
        <p
        className="text-[#F5F5F5] mt-[1.3rem] w-12/12 sm:w-5/12"
        >
          Zararkunandalardan xalos bo'lib, sog'lom muhitda yashash uchun hoziroq
          bizga murojaat quling
        </p>
        <button className="hero-btn flex items-center gap-3
                         text-[#F5F5F5] sm:text-[21px] justify-center
                         bg-[#12C4FC] font-Gilroy font-medium
                         md:px-[3rem] px-[1.5rem] py-[1rem] rounded-full
                         mt-[3rem] text-[14px] sm:w-[auto] w-[90%] text-center "
        >Hoziroq murojaat qilish <img src={arrow} alt="arrow" /> </button>
      </section>
    </div>
  );
}
export default hero;
