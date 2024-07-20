import React from "react";
import logo from "../../assets/ARICO-B2B-EPS.svg";
import CheckMark from "../../assets/CheckMark";
const ArTable = () => {
  return (
    <table className="w-full">
      <thead className="flex  place-items-center justify-between space-x-0.5">
        <th className="flex-[1.75] px-[26px]">
          <div className="w-32 self-center mx-auto">
            <img src={logo} alt="" className="w-full" />
          </div>
        </th>
        <th className="flex-1 bg-green-500 text-white p-[1rem] rounded-t-xl">
          FREE
        </th>
        <th className="flex-1 bg-blue-600 text-white p-[1rem] rounded-t-xl">
          BUSINESS
        </th>
        <th className="flex-1 bg-yellow-600 text-white p-[1rem] rounded-t-xl">
          PREMIUM
        </th>
        <th className="flex-1 bg-black text-white p-[1rem] rounded-t-xl">
          VIP
        </th>
      </thead>
      <tbody className="flex flex-col">
        {/* first Row */}
        <tr className="w-full flex-row flex h-14 bg-gray-100 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">Ad related functions</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
        </tr>
        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">Demand ads</td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">Offer ads</td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Number of included ads/month
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base font-bold">2 Ads</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base font-bold">7 Ads</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base font-bold">20 Ads</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base font-bold">50 Ads</span>
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Price per extra ad/month
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base ">-</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base ">2.99€</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base ">0.99€</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base ">0.50€</span>
          </td>
        </tr>
        {/* sec Row */}
        <tr className="w-full flex-row flex h-14 bg-gray-100 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Trade fair related functions
          </td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Exhibitor of the trade fair
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Visitors of the trade fair
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Category notifications about offers
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Category notifications about demands
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>
        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Participation in Arico Deals
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>
        {/* 3rd row */}
        <tr className="w-full flex-row flex h-14 bg-gray-100 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">User profile features</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
          <td className="flex-1 text-center text-gray-100">-</td>
        </tr>

        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Overview of all your company's ads
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">-</td>

          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
          <td className="flex-1 flex justify-center text-green-500 text-2xl">
            <CheckMark />
          </td>
        </tr>
        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">Contact persons</td>

          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">1</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">2</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">10</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">20</span>
          </td>
        </tr>
        <tr className="w-full flex-row flex h-14 bg-gray-50 items-center justify-between">
          <td className="flex-[1.75] pl-4 font-bold">
            Custom domain for user profile
          </td>

          <td className="flex-1 flex justify-center text-black text-2xl">-</td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">On request</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">On request</span>
          </td>
          <td className="flex-1 flex justify-center text-black text-2xl">
            <span className="text-base">On request</span>
          </td>
        </tr>
        {/* tr advantages vip */}
      </tbody>
    </table>
  );
};

export default ArTable;
