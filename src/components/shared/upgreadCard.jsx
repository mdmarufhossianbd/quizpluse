import Image from "next/image";
import upgradLogo from "../../../public/assets/image/upgrade.webp";
const UpgreadCard = () => {
  return (
    <div class="top-20 product-card w-[220px]  rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div class="absolute  top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
        <div class="flex gap-1">
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1"
            fill="none"
            viewBox="0 0 24 24"
            class="fill-[#7556FF] rotate-[24deg]"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </div>
      <div class="absolute rounded-full bg-[#7556FF] z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
      <div class="para uppercase text-center leading-none z-40">
        <p class="text-black font-semibold text-xs font-serif">Best</p>
        <p class="font-bold text-xl tracking-wider text-gray-500">Quize</p>
      </div>
      <div class="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
        <Image src={upgradLogo}></Image>
      </div>
      <div class="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div class="btn">
          <button class="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800">
          Go Premier
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgreadCard;
