import arrow from "../assets/images/circle_arrow.svg";
import { useState } from "react";
import { ModalComponent } from "./modal";

function serviceCard(data) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={data.classname} onClick={() => setOpenModal(true)}>
        <img src={arrow} alt="arrow" />
        <h4>{data.txt}</h4>
      </div>
      <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default serviceCard;
