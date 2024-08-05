import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useRef, useState, useEffect } from "react";
import swal from "sweetalert";

export function ModalComponent({ openModal, setOpenModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const userName = useRef(null);
  const userPhone = useRef(null);
  const userMessage = useRef(null);

  const [inputStatus, setInputStatus] = useState("");

  useEffect(() => {
    const resetInputStatus = () => setInputStatus("");

    const nameElement = userName.current;
    const phoneElement = userPhone.current;
    const messageElement = userMessage.current;

    if (inputStatus === "failure") {
      nameElement.addEventListener("click", resetInputStatus);
      phoneElement.addEventListener("click", resetInputStatus);
      messageElement.addEventListener("click", resetInputStatus);

      return () => {
        nameElement.removeEventListener("click", resetInputStatus);
        phoneElement.removeEventListener("click", resetInputStatus);
        messageElement.removeEventListener("click", resetInputStatus);
      };
    }
  }, [inputStatus]);

  const submitHandle = () => {
    if (!name || !phone || !message) {
      setInputStatus("failure");
    } else {
      // Send form data to server
      const bot_api = "7108659404:AAHZbEMvLOJVAKLpBHWv5Whel6zHGHk-oNY";
      const bot_token = `https://api.telegram.org/bot${bot_api}/sendMessage`;
      const chat_id = 6257473604;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id,
          parse_mode: "HTML",
          text: `<b>Ariza qoldirilgan ma'lumotlar:</b>\nIsm: ${name}\nTelefon raqami: ${phone}\nXabar: ${message}\n\nhttps://dezinfeksiya-toshkent.netlify.app/\n---------`,
        }),
      };

      fetch(bot_token, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            swal({
                icon: "success",
                text: "Arizangiz muvaffaqiyatli yozib olindi, iltimos mutaxassislarimiz javobini kuting!",
                button: "OK",
            })
        })
        .catch((error) => console.error("Error:", error));
      // Send form data to server

      // Reset form inputs
      setOpenModal(false);
      setName("");
      setPhone("");
      setMessage("");
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setPhone("");
    setMessage("");
    setInputStatus("");
  }

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-5">
          <h3 className="text-2xl text-center text-gray-900 dark:text-white font-Gilroy font-bold">
            Ariza qoldirish
          </h3>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
            O'z ma'lumotlaringiz va murojaatingiz haqida batafsil yozib
            qoldiring va mutaxassislarimiz siz bilan tez orada bog'lanadi.
          </p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="F.I.SH" />
            </div>
            <TextInput
              id="name"
              placeholder="Ismingizni kiriting"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              ref={userName}
              color={inputStatus}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Aloqa uchun" />
            </div>
            <TextInput
              id="phone"
              required
              placeholder="+998"
              ref={userPhone}
              value={phone}
              color={inputStatus}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Murojaatingiz haqida" />
          </div>
          <Textarea
            id="comment"
            placeholder="Xabaringiz uchun joy..."
            required
            rows={5}
            value={message}
            color={inputStatus}
            onChange={(event) => setMessage(event.target.value)}
            ref={userMessage}
          />
          {inputStatus === "failure" && (
            <div className="text-red-500">Barcha bo'limlarni to'ldiring!</div>
          )}
          <div className="w-full">
            <Button
              className="w-full bg-[#12C4FC] hover:bg-[#a6c6d0]"
              onClick={submitHandle}
            >
              Xabar qoldirish
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
