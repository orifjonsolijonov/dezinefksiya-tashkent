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
     <ServiceTypeCard
            title="KLAPALAR"
            description={"Ular to‘shakda, yumshoq mebelda, to‘qimachilikda, yeshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og‘ir psixologik noqulaylikni qo‘zg‘atadi."}
            images={[klapa1, klapa2, klapa3]}
        />
  );
}

export default serviceTypeSection;
