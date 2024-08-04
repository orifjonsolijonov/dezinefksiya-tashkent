import arrowLeft from "../assets/icons/arrow-left.svg";
function ServiceTypeCard({ title, description, images }) {
  return (
    <section className="serviceType  border-solid border-[1px] border-[#7D7D7D] rounded-[32px] px-[28px] py-[37px] flex-grow">
      <h3 className="text-[24px] font-bold mb-6 text-[#333333]">{title}</h3>
      <p className="text-sm text-[#333333] mb-5 line-clamp-3">{description}</p>
      <span className="cta-txt">Mutaxassislarni band qiling!</span>
      <div className="img_ctabtn_wrapper flex justify-between items-center">
        <div className="serviceType-images_wrapper flex gap-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="service type"
              className="servicetypeimg w-[70px]"
            />
          ))}
        </div>
        <img
          src={arrowLeft}
          alt="arrowleft"
          className="px-[19px] py-7 bg-[#99D7E4] rounded-full cursor-pointer"
        />
      </div>
    </section>
  );
}

export default ServiceTypeCard;
