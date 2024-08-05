import ServiceCard from "./serviceCard";

function servicesSection() {

  return (
    <section className="services mt-[3rem]" id="Xizmlatlar">
      <div className="container mx-auto flex justify-center gap-5">
        <ServiceCard
          classname={"dezinfeksiyaCard"}
          txt={"Dezinfeksiya - zararli mikroorganizmlarni yo'q qilish"}
        />
        <ServiceCard
          classname={"deziseksiyaCard"}
          txt={"Dezinseksiya - hasharotlarni yo'q qilish"}
        />
        <ServiceCard
          classname={"deratizatsiyaCard"}
          txt={"Deratizatsiya - kemiruvchilarni yo'q qilish."}
        />
      </div>
    </section>
  );
}

export default servicesSection;
