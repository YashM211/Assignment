import React from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="w-full flex flex-wrap md:flex-nowrap justify-between items-center gap-5">
      <div className="w-full md:max-w-[614px] flex justify-start items-center gap-[10px] bg-white px-[20px] rounded-[12px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 7.0357C0.5 3.42613 3.42613 0.5 7.0357 0.5C10.6453 0.5 13.5714 3.42613 13.5714 7.0357C13.5714 8.57027 13.0425 9.98131 12.1571 11.0965L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5125 15.5732 14.2196 15.2803L11.0964 12.1571C9.98126 13.0425 8.57024 13.5714 7.0357 13.5714C3.42613 13.5714 0.5 10.6453 0.5 7.0357ZM7.0357 2C4.25456 2 2 4.25456 2 7.0357C2 9.81684 4.25456 12.0714 7.0357 12.0714C9.81684 12.0714 12.0714 9.81684 12.0714 7.0357C12.0714 4.25456 9.81684 2 7.0357 2Z"
            fill="#808281"
          />
        </svg>

        <input
          type="text"
          placeholder="Search your course"
          className="w-full bg-transparent text-sm font-medium py-[14px] outline-none"
        />
      </div>

      <div className="w-full md:w-auto flex flex-wrap md:flex-nowrap justify-end items-center gap-[40px] md:gap-[30px] lg:gap-[40px] mt-4 md:mt-0">
        <Link href="#">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z"
              fill="#808281"
            />
          </svg>
        </Link>
        <Link href="#" className="relative">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            className="absolute -right-1 -top-1"
          >
            <circle cx="5.5" cy="5.5" r="5" fill="#FF4949" stroke="white" />
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M4.45455 16L0 19.5V1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1V15C20 15.5523 19.5523 16 19 16H4.45455ZM3.76282 14H18V2H2V15.3851L3.76282 14ZM9 7H11V9H9V7ZM5 7H7V9H5V7ZM13 7H15V9H13V7Z"
              fill="#808281"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M2 4C2 3.17157 2.67157 2.5 3.5 2.5C4.32843 2.5 5 3.17157 5 4C5 4.82843 4.32843 5.5 3.5 5.5C2.67157 5.5 2 4.82843 2 4ZM3.5 0.5C1.567 0.5 0 2.067 0 4C0 5.933 1.567 7.5 3.5 7.5C5.433 7.5 7 5.933 7 4C7 2.067 5.433 0.5 3.5 0.5ZM9 5H17V3H9V5ZM13 14C13 13.1716 13.6716 12.5 14.5 12.5C15.3284 12.5 16 13.1716 16 14C16 14.8284 15.3284 15.5 14.5 15.5C13.6716 15.5 13 14.8284 13 14ZM14.5 10.5C12.567 10.5 11 12.067 11 14C11 15.933 12.567 17.5 14.5 17.5C16.433 17.5 18 15.933 18 14C18 12.067 16.433 10.5 14.5 10.5ZM1 13V15H9V13H1Z"
              fill="#808281"
            />
          </svg>
        </Link>
        <Link href="#" className="relative">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            className="absolute -right-1 -top-1"
          >
            <circle cx="5.5" cy="5.5" r="5" fill="#FF4949" stroke="white" />
          </svg>
          <svg width="18" height="20" viewBox="0 0 18 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.10487 6.25198C2.10487 3.22293 4.89864 0 9 0C13.1014 0 15.8951 3.22293 15.8951 6.25198C15.8951 6.95001 15.9837 7.42413 16.0977 7.77788C16.2123 8.13348 16.3649 8.40892 16.5563 8.72961C16.5757 8.76217 16.5959 8.79577 16.6168 8.83042C16.7933 9.12386 17.0149 9.4922 17.1835 9.93378C17.3805 10.4499 17.5 11.0419 17.5 11.7957C17.5 11.8246 17.4988 11.8534 17.4963 11.8821C17.4278 12.6723 17.1909 13.3872 16.7256 13.9898C16.263 14.5888 15.6318 15.0029 14.8976 15.2908C13.4776 15.8476 11.4844 16 9 16C6.5171 16 4.52388 15.8501 3.10386 15.2947C2.36936 15.0075 1.73769 14.5936 1.27473 13.9936C0.809197 13.3903 0.57239 12.6741 0.503736 11.8821C0.501246 11.8534 0.5 11.8246 0.5 11.7957C0.5 11.0419 0.619516 10.4499 0.816507 9.93378C0.985059 9.4922 1.20666 9.12387 1.38321 8.83042C1.40406 8.79577 1.42427 8.76217 1.4437 8.72961C1.63507 8.40892 1.78771 8.13348 1.9023 7.77788C2.0163 7.42413 2.10487 6.95001 2.10487 6.25198ZM9 2C5.96272 2 4.10487 4.36755 4.10487 6.25198C4.10487 7.12655 3.99282 7.81127 3.80591 8.39131C3.61959 8.9695 3.37101 9.40279 3.16116 9.75446C3.14116 9.78799 3.12175 9.82041 3.10292 9.85188C2.91723 10.1621 2.78712 10.3795 2.68501 10.647C2.58401 10.9116 2.50458 11.2483 2.50019 11.7517C2.54698 12.2236 2.67913 12.5398 2.85815 12.7718C3.04503 13.014 3.34162 13.2402 3.83235 13.4321C4.86281 13.8352 6.50799 14 9 14C11.4914 14 13.137 13.8329 14.1675 13.4288C14.6586 13.2363 14.9555 13.0096 15.1426 12.7674C15.3216 12.5356 15.4533 12.2205 15.4998 11.7517C15.4954 11.2483 15.416 10.9116 15.315 10.647C15.2129 10.3795 15.0828 10.1621 14.8971 9.85188C14.8783 9.82041 14.8588 9.78799 14.8388 9.75446C14.629 9.40279 14.3804 8.9695 14.1941 8.39131C14.0072 7.81127 13.8951 7.12655 13.8951 6.25198C13.8951 4.36755 12.0373 2 9 2ZM6.35523 17.2356C6.77739 16.8795 7.40828 16.9331 7.76438 17.3552C8.15974 17.8239 8.60855 18.0011 9.00129 18C9.39561 17.9989 9.84457 17.8178 10.2363 17.3544C10.5929 16.9326 11.2239 16.8798 11.6456 17.2363C12.0674 17.5929 12.1202 18.2239 11.7637 18.6456C11.0348 19.5077 10.0495 19.9971 9.00675 20C7.96246 20.0028 6.97158 19.5172 6.23562 18.6448C5.87953 18.2226 5.93308 17.5917 6.35523 17.2356Z"
              fill="#808281"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-10 md:gap-[20px]">
          <Avatar className="rounded-[8px]">
            <AvatarImage src="/avatar-image.png" />
            <AvatarFallback>IS</AvatarFallback>
          </Avatar>
          <p className="hidden xl:block text-sm lg:text-lg font-medium text-[#05162E]">
            Adeline H. Dancy
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
