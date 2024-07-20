import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import ArButton from "../components/aricoButton/ArButton";
import ArHeader from "../components/aricoHeader/ArHeader";
import ArIFrameVideos from "../components/aricoIFrame/ArIFrameVideos";
import ArInfoSection from "../components/sections/ArInfoSection";
import ArListSections from "../components/sections/ArListSections";
import {
  aboutUsDatas,
  advantagesDatas,
  helpDatas,
  helpedMrJonesDatas,
  helpedMsGomezDatas,
  producerDatas,
  regGuideDatas,
  registerDatas,
  serviceProviderDatas,
  wholesalerDatas,
} from "../data/datasConfig";
import ArContainer from "../layout/ArContainer";
import ArBoxTitle from "../components/aricoBoxTitle/ArBoxTitle";
import ArTextList from "../components/aricoTextBox/ArTextList";
import ArPicBox from "../components/aricoPicBox/ArPicBox";
import ArNumberTitle from "../components/aricoTitleNumber/ArNumberTitle";
import ArPricingSection from "../components/sections/ArPricingSection";
import ArFAQs from "../components/sections/ArFAQs";
import ArSmallContainer from "../layout/ArSmallContainer";
import ArSwiperSection from "../components/sections/ArSwiperSection";
import ArSlideCards from "../components/aricoSlidCards/ArSlideCards";
import ArPreLaunch from "../components/sections/ArPreLaunch";
import ArSoftlaunch from "../components/sections/ArSoftlaunch";
import ArProduct from "../components/sections/ArProduct";
import ArFooter from "../components/aricoFooter/ArFooter";

const HomePage = () => {
  return (
    <>
      <ArHeader />
      <ArInfoSection sectionClassName={"bg-[#f3f4f6]"}>
        <ArBoxTitle
          title={"What is Arico B2B?"}
          subTitle={"Simply find and be found"}
        />
        <div className="flex  max-w-[896px] gap-4">
          <ArTextList
            Texts={aboutUsDatas}
            icon={<FaCheck className="text-[#22c55e]" />}
          />
          <ArPicBox
            contentClassName={"relative w-1/2"}
            content={
              <>
                <iframe
                  className="rounded-2xl"
                  width="500"
                  height="270"
                  src="https://www.youtube.com/embed/VxwLuM8TcCo?si=EElc7igTA6omMUoJ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div className="w-56 absolute -right-44">
                  <img
                    src="/bee-leaning.png"
                    alt="bee picture"
                    width={"100%"}
                    height={"420px"}
                  />
                </div>
              </>
            }
          />
        </div>
      </ArInfoSection>

      <ArListSections
        data={advantagesDatas}
        title={"Your advantages at a glance"}
        classNamesUl={"gap-y-14"}
      />

      <ArContainer>
        <ArInfoSection sectionClassName={"bg-[#212b36] rounded-lg !p-0"}>
          <div
            className={`flex gap-8 items-center max-w-[64rem] w-full flex-row-reverse !p-[80px]`}
          >
            <ArTextList
              textClassName={" text-2xl"}
              UlClassName={"text-white"}
              Texts={registerDatas}
              icon={<FaCheck className="text-[#22c55e]" />}
            />
            <ArPicBox
              contentClassName={"relative w-1/2"}
              content={
                <>
                  <ArButton
                    btnName={"REGISTER NOW"}
                    btnIcon={<FaChevronRight />}
                  />
                </>
              }
            />
          </div>
        </ArInfoSection>
      </ArContainer>

      <ArListSections
        data={regGuideDatas}
        classNamesUl={"gap-8 gap-y-20"}
        title={"How to set up your Arico B2B account"}
      />

      <ArInfoSection sectionClassName={"bg-[#f3f4f6] my-32"}>
        <ArSmallContainer>
          <ArBoxTitle title={"Who benefits from Arico B2B?"} />
          <div
            id="manufacturers"
            className={`flex gap-8 items-center mb-10 w-full max-w-[55rem] scroll-mt-20`}
          >
            <div className="w-1/2">
              <ArNumberTitle
                headNum={"1"}
                numTitle={
                  <span>
                    Mr. Smart,
                    <br />
                    <span className="text-[#144fa9] text-xl font-extrabold">
                      Producer
                    </span>
                    <br />
                    of wooden furniture
                  </span>
                }
              />
              <ArTextList
                Texts={producerDatas}
                icon={<FaTimes className="text-[#c52222]" />}
              />
            </div>
            <ArPicBox
              contentClassName={"relative w-1/2"}
              content={
                <>
                  <div className=" -mr-12  ">
                    <img
                      className=""
                      src="/1.webp"
                      alt="bee picture"
                      width={"80%"}
                      height={"320px"}
                    />
                  </div>
                </>
              }
            />
          </div>
          <ArIFrameVideos
            videoBoxClassName={
              "flex flex-col items-center max-w-[55rem] w-full"
            }
            className={" md:h-[480px] rounded-2xl"}
            videoTitle={"Arico B2B - Optimize supply chains digitally"}
            src={
              "https://www.youtube.com/embed/Ih0zcEW7TEE?si=kDydeJJ3gXCg_uhD"
            }
            title={"YouTube video player"}
          />
          <div
            className={`flex gap-8 items-center max-w-[64rem] w-full flex-row-reverse !p-[80px]`}
          >
            <div>
              <ArBoxTitle
                title={"How Arico B2B helped Mr. Smart."}
                titleClassName={"!items-start mb-4"}
              />
              <ArTextList
                Texts={helpDatas}
                icon={<FaCheck className="text-[#22c55e]" />}
              />
            </div>

            <ArPicBox
              contentClassName={"relative w-1/2"}
              content={
                <>
                  <div className=" -ml-16  ">
                    <img
                      className=""
                      src="/2.webp"
                      alt="bee picture"
                      width={"80%"}
                      height={"320px"}
                    />
                  </div>
                </>
              }
            />
          </div>
        </ArSmallContainer>
      </ArInfoSection>

        <ArInfoSection>
      <ArSmallContainer>
          <div
            id="service-provider"
            className={`flex gap-8 items-center w-full max-w-[55rem] scroll-mt-20`}
          >
            <div className="w-1/2">
              <ArNumberTitle
                headNum={"2"}
                numTitle={
                  <span>
                    Mr. Jones,
                    <br />
                    <span className="text-[#144fa9] text-xl font-extrabold">
                      Service provider
                    </span>
                    <br />
                    for security
                  </span>
                }
              />
              <ArTextList
                Texts={serviceProviderDatas}
                icon={<FaTimes className="text-[#c52222]" />}
              />
            </div>
            <ArPicBox
              contentClassName={"relative w-1/2"}
              content={
                <>
                  <div className=" -mr-12  ">
                    <img
                      className=""
                      src="/3.webp"
                      alt="bee picture"
                      width={"80%"}
                      height={"320px"}
                    />
                  </div>
                </>
              }
            />
          </div>
          <ArIFrameVideos
            videoBoxClassName={
              "flex flex-col items-center max-w-[55rem] w-full mt-20"
            }
            className={" md:h-[480px] rounded-2xl"}
            videoTitle={"Arico B2B online expo - permanent & international"}
            src={
              "https://www.youtube.com/embed/Oqj4if5AUPg?si=jqenEONM7LSGkzhc"
            }
            title={"YouTube video player"}
          />
          <div
            className={`flex gap-8 items-center max-w-[64rem] w-full flex-row-reverse !p-[80px]`}
          >
            <div>
              <ArBoxTitle
                title={"How Arico B2B helped Mr. Jones."}
                titleClassName={"!items-start mb-4"}
              />
              <ArTextList
                Texts={helpedMrJonesDatas}
                icon={<FaCheck className="text-[#22c55e]" />}
              />
            </div>

            <ArPicBox
              contentClassName={"relative w-1/2"}
              content={
                <>
                  <div className=" -ml-16  ">
                    <img
                      className=""
                      src="/4.webp"
                      alt="bee picture"
                      width={"80%"}
                      height={"320px"}
                    />
                  </div>
                </>
              }
            />
          </div>
      </ArSmallContainer>
        </ArInfoSection>

      <ArInfoSection sectionClassName={"bg-[#f3f4f6] mb-20"}>
        <div
          id="distributor"
          className={`flex gap-8 items-center w-full max-w-[55rem] scroll-mt-20`}
        >
          <div className="w-1/2">
            <ArNumberTitle
              headNum={"3"}
              numTitle={
                <span>
                  Ms. Gomez,
                  <br />
                  <span className="text-[#144fa9] text-xl font-extrabold">
                    Wholesaler
                  </span>
                  <br />
                  for laboratory equipment
                </span>
              }
            />
            <ArTextList
              Texts={wholesalerDatas}
              icon={<FaTimes className="text-[#c52222]" />}
            />
          </div>
          <ArPicBox
            contentClassName={"relative w-1/2"}
            content={
              <>
                <div className=" -mr-12  ">
                  <img
                    className=""
                    src="/5.webp"
                    alt="bee picture"
                    width={"80%"}
                    height={"320px"}
                  />
                </div>
              </>
            }
          />
        </div>
        <ArIFrameVideos
          videoBoxClassName={"flex flex-col items-center max-w-[55rem] w-full"}
          className={" md:h-[480px] rounded-2xl"}
          videoTitle={"Arico B2B - the worldwide showcase for your products"}
          src={"https://www.youtube.com/embed/dr2MhCqVlJ0?si=MhktN-dzzNpMOA8V"}
          title={"YouTube video player"}
        />
        <div
          className={`flex gap-8 items-center max-w-[64rem] w-full flex-row-reverse !p-[80px]`}
        >
          <div>
            <ArBoxTitle
              title={"How Arico B2B helped Mr. Smart."}
              titleClassName={"!items-start mb-4"}
            />
            <ArTextList
              Texts={helpedMsGomezDatas}
              icon={<FaCheck className="text-[#22c55e]" />}
            />
          </div>

          <ArPicBox
            contentClassName={"relative w-1/2"}
            content={
              <>
                <div className=" -ml-16  ">
                  <img
                    className=""
                    src="/6.webp"
                    alt="bee picture"
                    width={"80%"}
                    height={"320px"}
                  />
                </div>
              </>
            }
          />
        </div>
      </ArInfoSection>
      <ArPreLaunch />
      <ArSoftlaunch />
      <ArPricingSection />
      <ArFAQs />
      <ArSwiperSection />
      <ArProduct />
      <ArFooter />
    </>
  );
};

export default HomePage;
