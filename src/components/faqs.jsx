import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../assets/icons/chevron-down.svg";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter ? "rotate-180" : ""
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className=""
    buttonProps={{
      className: ({ isEnter }) =>
        `flex items-center w-full p-4 text-left hover:bg-[#f5f5f5] border-b ${
          isEnter ? "" : ""
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export default function Faqs() {
  return (
    <div className="flex justify-center mx-2 my-4" id="Savollar">
      <div className="w-full max-w-[100%] sm:max-w-[60%]">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={200}>
          <AccordionItem
            header="Zararkunandalarni yo'q qilish qanday amalga oshiriladi?"
            initialEntered
          >
            Maxsus asbob-uskunalar yordamida insektitsidlar ayerozolli tumanga
            aylanadi va devor qog'ozi, devorlar va taxta plitalari orasidagi
            yeng kichik bo'shliqlarga, kozga korinmas hasharotlar uchun
            potentsial yashirish joylariga kiradi.
          </AccordionItem>

          <AccordionItem header="Siz foydalanadigan dorilar xavflimi?">
            Preparatlar odamlar, uy hayvonlari va o'simliklar uchun xavfli
            yemas. Ammo davolanishdan keyin xonani 40 daqiqa davomida
            ventilyatsiya qilish kerak.
          </AccordionItem>

          <AccordionItem header="Menga uyimni davolanishga tayyorlashning qandaydir usuli kerakmi?">
            Asosan, idish-tovoq va shaxsiy gigiyena vositalarini izolyatsiya
            qilishingiz kerak. Davolash paytida uy hayvonlari ham izolyatsiya
            qilinishi kerak. Mebel yoki maishiy texnikani ko'chirishga hojat
            yo'q
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
