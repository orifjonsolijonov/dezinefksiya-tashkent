import dezinfeksiyachi2 from "../assets/images/dezeinfeksiachi.jpg";
import iconImg from "/src/assets/images/3dicons.png";
import arrow from "../assets/icons/arrow_top-icon.svg";

function corporationCtaSection() {
  return (
    <div className="wrapper mt-[100px] px-5">
      <div className="corporationCtaSection container flex justify-between items-center gap-[5%] bg-[#33A9FF] rounded-xl p-[32px]">
        <img
          src={dezinfeksiyachi2}
          alt="dezinfeksiyachi"
          className="w-[32rem] rounded-lg"
        />
        <div className="ctasection_rightside_contents_wrapper">
          <img src={iconImg} alt="icon" className="max-w-[140px]" />
          <h3 className="text-[#FAFAFA] text-[32px] sm:text-[48px] font-bold leading-[1.2]">
            Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
            talaygina
          </h3>
          <button
            className="flex items-center gap-3
                     text-[#F5F5F5] sm:text-[21px] justify-center
                     bg-[#5DFB89] hover:bg-[#78E095] font-Gilroy font-medium
                       md:px-[3rem] px-[1.5rem] py-[1rem] rounded-full
                       mt-[2rem] text-[14px] sm:w-[auto] w-[70%] text-center "
          >
            Bog'lanish <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default corporationCtaSection;
