import ServiceTypeCard from "./serviceTypeCard";
import klapa1 from "../assets/images/serviceTypeImages/klapa1.png";
import klapa2 from "../assets/images/serviceTypeImages/klapa2.png";
import klapa3 from "../assets/images/serviceTypeImages/klap3.png";
import tarakan1 from "../assets/images/serviceTypeImages/tarakan1.png";
import tarakan2 from "../assets/images/serviceTypeImages/tarakan2.png";
import tarakan3 from "../assets/images/serviceTypeImages/tarakan3.png";
import chayon1 from "../assets/images/serviceTypeImages/chayon1.png";
import chayon2 from "../assets/images/serviceTypeImages/chayon2.png";
import chayon3 from "../assets/images/serviceTypeImages/chayon3.png";
import kemiruvchilar1 from "../assets/images/serviceTypeImages/kemiruvchilar1.png";
import kemiruvchilar2 from "../assets/images/serviceTypeImages/kemiruvchilar2.png";
import kemiruvchilar3 from "../assets/images/serviceTypeImages/kemiruvchilar3.png";
import burgalar1 from "../assets/images/serviceTypeImages/burgalar1.png";
import burgalar2 from "../assets/images/serviceTypeImages/burgalar2.png";
import burgalar3 from "../assets/images/serviceTypeImages/burgalar3.png";

function serviceTypeSection() {
  return (
    <div className="mt-[75px]">
      <div className="container flex justify-center items-start flex-wrap gap-[3vw]">
        <ServiceTypeCard
          title="KLAPALAR"
          description={
            "Ular to'shakda, yumshoq mebelda, to'qimachilikda, yeshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og‘ir psixologik noqulaylikni qo‘zg‘atadi."
          }
          images={[klapa1, klapa2, klapa3]}
        />
        <ServiceTypeCard
          title="TARAKANLAR"
          description={
            "Ular patogenlarni olib yuradilar. Ular yoriqlarda, taglik tagida, mebel orqasida, hammom ostida, shkaflar ostida va hokazolarda yashaydilar. Ular oziq-ovqat, maishiy chiqindilar, charm buyumlar va qog‘oz bilan oziqlanadilar."
          }
          images={[tarakan1, tarakan2, tarakan3]}
        />
        <ServiceTypeCard
          title="CHAYON"
          description={
            "Hasharotlar va araxnidlar bilan oziqlanadigan issiqlikni yaxshi ko‘radigan jonzotlar. Ular omborlarda va uylarda yashashlari mumkin, lekin ko‘pincha ular yog‘och binolarda topiladi, ular inson salomatligi uchun xavfli hissoblanadi..."
          }
          images={[chayon1, chayon2, chayon3]}
        />

        <ServiceTypeCard
          title="KEMIRUVCHILAR"
          description={
            "Yeng keng tarqalgan kalamushlar va sichqonlar. Ular patogenlarni olib yuradi, barcha sirtlarda ishlaydi, devor va shiftlarda o‘tish joylarini yaratadi, strukturaning ishonchliligini pasaytiradi. Ular oziq-ovqat va maishiy chiqindilar bilan oziqlanadi..."
          }
          images={[kemiruvchilar1, kemiruvchilar2, kemiruvchilar3]}
        />

        <ServiceTypeCard
          title="BURGALAR"
          description={
            "Ular uy hayvonlari tanasiga kirib, qo‘shnilardan ko‘chib ketishadi. Ular yumshoq mebellar, ko‘rpa-to‘shaklar, gilamlar, yumshoq o‘yinchoqlar, taglik tagida va deraza va yeshik romlarida yashaydilar. Ular odamlar va hayvonlarning qoni bilan oziqlanadi. Ular kasalliklarga olib keladi ..."
          }
          images={[burgalar1, burgalar2, burgalar3]}
        />
      </div>
    </div>
  );
}

export default serviceTypeSection;
