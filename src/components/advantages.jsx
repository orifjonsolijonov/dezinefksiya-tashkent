import Advantage from "./advantage";
import adv1 from "../assets/icons/mind-icon.svg";
import adv2 from "../assets/icons/diploma-icon.svg";
import adv3 from "../assets/icons/hand_shake-icon.svg";
function Advantages() {
  return (
    <section className="advantages mt-[3rem]">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        <Advantage
          imgsrc={adv1}
          title="Tezda xizmat ko'rsatish"
          description="ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSHILINCH BO'LSA, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BO'LIB QOLADI."
        />
        <Advantage
          imgsrc={adv2}
          title="Yetuk mutahasislaimiz"
          description="BIZNING XODIMLARIMIZ HAMMA NARSAGA G'AMXO'RLIK QILADI: HISOB-KITOBLAR, XONANI TAYYORLASH, QAYTA ISHLASH, YAKUNIY TOZALASH, VENTILYATSIYA VA NAZORAT TEKSHIRUVI."
        />
        <Advantage
          imgsrc={adv3}
          title="Tezda xizmat ko'rsatish"
          description="SIZ O'ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TANLANG VA BIZGA MUROJAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ"
        />
      </div>
    </section>
  );
}

export default Advantages;
