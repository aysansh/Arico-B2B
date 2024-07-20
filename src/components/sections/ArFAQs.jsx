import React, { useRef, useState } from "react";
import ArSocialMedia from "../aricoSocialMedia/ArSocialMedia";
import ArAccordionMenu from "../aricoAccordionMenu/ArAccordionMenu";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FAQsDatas } from "../../data/datasConfig";
import ArButton from "../aricoButton/ArButton";
import emailjs from "@emailjs/browser";

const ArFAQs = () => {
  const [showMore, setShowMore] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const handleShowMore = () => {
    setShowMore(!showMore);
    setItemsToShow(showMore ? 3 : FAQsDatas.length);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_myq4inn", "template_243uemk", form.current, {
        publicKey: "PQYEK5b6yYcUGEjyT",
      })
      .then(
        () => {
          
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="fqa" className=" bg-gray-50 w-full my-28 scroll-mt-20  pb-10">
      <div className="w-[70%] mx-auto">
        <h3 className="font-bold text-center text-4xl py-10">
          Find the answers to your questions
        </h3>
        <div>
          {FAQsDatas.slice(0, itemsToShow).map((item) => (
            <ArAccordionMenu
              key={item.id}
              answer={item.answer}
              question={item.question}
            />
          ))}

          <div
            onClick={handleShowMore}
            className="flex items-center text-blue-500 font-bold cursor-pointer"
          >
            <span> {showMore ? "Show less" : "Show more"}</span>
            {showMore ? <MdExpandLess /> : <MdExpandMore />}
          </div>
        </div>
        <div className="h-4 w-full  border-dotted border-gray-300 border-b-2 my-5"></div>

        <div id="contact" className=" scroll-mt-28">
          <form ref={form} onSubmit={sendEmail}>
            <textarea
              name="message"
              placeholder="Your question..."
              className="border rounded-lg w-full h-[180px] p-4 resize-none focus:outline-gray-300"
            ></textarea>
            <div className="w-full flex gap-3">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="border rounded-lg w-full p-3  focus:outline-gray-300"
              />
              <ArButton
                type={"submit"}
                btnName={"SEND"}
                btnClassName="!w-[170px] !font-light"
              />
            </div>
          </form>
        </div>

        <div className="h-4 w-full  border-dotted border-gray-300 border-b-2 my-5"></div>

        <ArSocialMedia />
      </div>
    </div>
  );
};

export default ArFAQs;
