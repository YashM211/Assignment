"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const Sidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = searchParams.get("page");

  useEffect(() => {
    if (!pathname) {
      router.push("/?page=dashboard");
    }
  }, [router, pathname]);

  return (
    <aside className="sm:w-[248px] max-w-[248px] h-full bg-white py-[30px] px-[12px] flex flex-col justify-start items-start gap-[30px]">
      <Image src="/logo.png" alt="Quyl" width={98} height={42} priority />

      <ul className="w-full flex flex-col justify-start items-start gap-[8px]">
        <SidebarItems page="dashboard">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={`fill-[${
              pathname === "dashboard" ? "#000000" : "#6F767E"
            }]`}
          >
            <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM13.8329 5.33748C14.0697 5.17128 14.3916 5.19926 14.5962 5.40381C14.8002 5.60784 14.8267 5.92955 14.6587 6.16418C12.479 9.2095 11.2796 10.8417 11.0607 11.0607C10.4749 11.6464 9.5251 11.6464 8.9393 11.0607C8.3536 10.4749 8.3536 9.5251 8.9393 8.9393C9.3126 8.5661 10.9438 7.36549 13.8329 5.33748ZM15.5 9C16.0523 9 16.5 9.4477 16.5 10C16.5 10.5523 16.0523 11 15.5 11C14.9477 11 14.5 10.5523 14.5 10C14.5 9.4477 14.9477 9 15.5 9ZM4.5 9C5.05228 9 5.5 9.4477 5.5 10C5.5 10.5523 5.05228 11 4.5 11C3.94772 11 3.5 10.5523 3.5 10C3.5 9.4477 3.94772 9 4.5 9ZM6.81802 5.40381C7.20854 5.79433 7.20854 6.4275 6.81802 6.81802C6.4275 7.20854 5.79433 7.20854 5.40381 6.81802C5.01328 6.4275 5.01328 5.79433 5.40381 5.40381C5.79433 5.01328 6.4275 5.01328 6.81802 5.40381ZM10 3.5C10.5523 3.5 11 3.94772 11 4.5C11 5.05228 10.5523 5.5 10 5.5C9.4477 5.5 9 5.05228 9 4.5C9 3.94772 9.4477 3.5 10 3.5Z" />
          </svg>
          Dashboard
        </SidebarItems>
        <SidebarItems page="students">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`fill-[${
              pathname === "students" ? "#000000" : "#6F767E"
            }]`}
          >
            <path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM12 5V19H20V5H12ZM13 7H19V9H13V7ZM13 10H19V12H13V10Z" />
          </svg>
          Students
        </SidebarItems>
        <SidebarItems page="chapter">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`fill-[${
              pathname === "chapter" ? "#000000" : "#6F767E"
            }]`}
          >
            <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM10 4H6C5.44772 4 5 4.44772 5 5V15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H17V12L13.5 10L10 12V4Z" />
          </svg>
          Chapter
        </SidebarItems>
        <SidebarItems page="help">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={`fill-[${pathname === "help" ? "#000000" : "#6F767E"}]`}
          >
            <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM11 11.3551V12H9V10.5C9 9.9477 9.4477 9.5 10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.2723 6.5 8.6656 7.01823 8.5288 7.70577L6.56731 7.31346C6.88637 5.70919 8.302 4.5 10 4.5C11.933 4.5 13.5 6.067 13.5 8C13.5 9.5855 12.4457 10.9248 11 11.3551Z" />
          </svg>
          Help
        </SidebarItems>
        <SidebarItems page="reports">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={`fill-[${
              pathname === "reports" ? "#000000" : "#6F767E"
            }]`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.83788 5.33541C6.81082 5.31638 6.76979 5.30633 6.72791 5.31646C4.20685 5.92448 1.86976 8.69541 1.86976 11.662C1.86976 15.2553 4.84425 18.1687 8.5143 18.1687C11.8371 18.1687 14.5819 15.833 15.0773 12.6904C15.0774 12.6897 15.0775 12.6888 15.0776 12.6884C15.0763 12.6859 15.0731 12.6811 15.0668 12.6746C15.0433 12.6506 14.9969 12.6258 14.9374 12.6258C13.8652 12.6258 12.9999 12.6448 12.2892 12.664C12.1338 12.6682 11.9845 12.6724 11.8411 12.6765C11.337 12.6908 10.9067 12.7031 10.5459 12.7034C9.62464 12.7041 8.89799 12.6372 8.21854 12.1442C7.52352 11.6398 7.20423 10.9364 7.04245 9.91464C6.88732 8.93488 6.85218 7.49936 6.85218 5.3499M6.83788 5.33541C6.84632 5.34134 6.8505 5.34618 6.85217 5.3484L6.83788 5.33541ZM6.28028 3.53845C7.42009 3.26319 8.72195 4.03529 8.72195 5.3499C8.72195 7.52993 8.76111 8.81913 8.89013 9.63401C9.01251 10.4069 9.18723 10.568 9.33164 10.6728C9.49161 10.7889 9.67819 10.8728 10.5443 10.8721C10.8763 10.8719 11.2701 10.8607 11.7674 10.8465C11.9147 10.8423 12.0711 10.8379 12.2377 10.8334C12.9577 10.814 13.8417 10.7945 14.9374 10.7945C16.0336 10.7945 17.1248 11.7054 16.9252 12.9698C16.2889 17.0058 12.7591 20 8.5143 20C3.81176 20 0 16.2669 0 11.662C0 7.87428 2.90297 4.35329 6.28028 3.53845Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5147 2.81228C19.0095 4.37309 20.0302 6.40872 19.9993 8.12097L19.0646 8.10479L19.9994 8.11906C19.9993 8.11969 19.9993 8.12033 19.9993 8.12097C19.9866 8.86096 19.4371 9.51632 18.6573 9.63178C16.2503 9.98852 13.0277 9.87394 11.6158 9.79481C10.7153 9.74389 10.0017 9.04445 9.9496 8.16283C9.86878 6.81699 9.72122 3.812 9.83091 1.47313C9.86672 0.701976 10.5001 0.0164574 11.3576 0.0011352M17.5147 2.81228C16.0013 1.23205 13.8289 -0.0434679 11.3576 0.0011352L17.5147 2.81228ZM16.1509 4.0651C14.9408 2.80154 13.3587 1.90378 11.687 1.83546C11.6071 3.9824 11.7333 6.65246 11.8111 7.97141C13.1994 8.04641 15.9977 8.13303 18.1234 7.85645C18.0484 6.79677 17.3597 5.32722 16.1509 4.0651ZM11.6988 1.5561C11.6987 1.55645 11.6987 1.5568 11.6987 1.55716L11.6988 1.5561Z"
            />
          </svg>
          Reports
        </SidebarItems>
        <SidebarItems page="settings">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            className={`fill-[${
              pathname === "settings" ? "#000000" : "#6F767E"
            }]`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8448 0.468291C10.8456 0.468805 10.8465 0.469321 10.8474 0.469836L15.7316 3.36089C15.7517 3.37282 15.7715 3.38545 15.7907 3.39876L15.8209 3.41959C16.2396 3.70893 16.5998 3.95782 16.8799 4.18501C17.1739 4.42344 17.4491 4.6915 17.6486 5.04474C17.8529 5.40666 17.9322 5.77658 17.9676 6.1452C18.0001 6.48274 18 6.88415 18 7.32873V12.6713C18 13.1158 18.0001 13.5173 17.9676 13.8548C17.9322 14.2234 17.8529 14.5933 17.6486 14.9553C17.4491 15.3085 17.1739 15.5766 16.8799 15.815C16.5998 16.0422 16.2396 16.2911 15.8209 16.5804L15.7907 16.6012C15.7715 16.6146 15.7517 16.6272 15.7316 16.6391L10.8474 19.5302C10.8465 19.5307 10.8455 19.5313 10.8446 19.5318C10.2882 19.8644 9.6177 20 9.00333 20C8.38739 20 7.71611 19.8638 7.15729 19.5329C7.15726 19.5329 7.15732 19.533 7.15729 19.5329L2.2684 16.6391C2.24826 16.6272 2.22853 16.6146 2.20927 16.6012L2.17907 16.5804C1.7604 16.2911 1.40007 16.0421 1.11982 15.8146C0.825531 15.5758 0.550206 15.3072 0.35083 14.953C0.146749 14.5906 0.0676414 14.2199 0.0323185 13.8505C-5.96158e-05 13.5119 -3.2317e-05 13.109 -1.91859e-06 12.6621V7.3287C-3.27938e-05 6.88413 -6.05695e-05 6.48274 0.0323585 6.1452C0.0677633 5.77658 0.147086 5.40666 0.351436 5.04474C0.550879 4.6915 0.826107 4.42344 1.12009 4.18501C1.40021 3.95781 1.76041 3.70892 2.17915 3.41957L2.20927 3.39876C2.22853 3.38545 2.24826 3.37282 2.2684 3.36089L7.15721 0.467109C7.15718 0.467126 7.15724 0.467092 7.15721 0.467109C7.71602 0.136285 8.38739 0 9.00333 0C9.61776 0 10.2883 0.135613 10.8448 0.468291ZM9.00333 2C8.65264 2 8.35507 2.08215 8.17613 2.1881L3.31739 5.06408C2.87648 5.36881 2.58857 5.56911 2.37991 5.73834C2.17389 5.90543 2.11579 5.98772 2.09301 6.02806C2.07514 6.05972 2.04335 6.12661 2.0232 6.33641C2.00106 6.56686 2 6.87106 2 7.37007V12.6208C2 13.122 2.00105 13.4282 2.02324 13.6602C2.04347 13.8718 2.07547 13.9397 2.09361 13.9719C2.11646 14.0125 2.17447 14.0948 2.38018 14.2617C2.58869 14.431 2.87644 14.6312 3.3174 14.9359L8.17604 17.8118C8.35498 17.9178 8.65264 18 9.00333 18C9.35462 18 9.64742 17.9176 9.81929 17.8146L9.82396 17.8118L14.6826 14.9359C15.1235 14.6312 15.4114 14.4309 15.6201 14.2617C15.8261 14.0946 15.8842 14.0123 15.907 13.9719C15.9249 13.9403 15.9567 13.8734 15.9768 13.6636C15.9989 13.4331 16 13.1289 16 12.6299V7.37007C16 6.87106 15.9989 6.56686 15.9768 6.33641C15.9567 6.12661 15.9249 6.05972 15.907 6.02806C15.8842 5.98772 15.8261 5.90543 15.6201 5.73834C15.4114 5.5691 15.1235 5.36881 14.6826 5.06408L9.81929 2.18538C9.64741 2.08238 9.35462 2 9.00333 2ZM9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12C10.1046 12 11 11.1046 11 10C11 8.89543 10.1046 8 9 8ZM5 10C5 7.79086 6.79086 6 9 6C11.2091 6 13 7.79086 13 10C13 12.2091 11.2091 14 9 14C6.79086 14 5 12.2091 5 10Z"
            />
          </svg>
          Settings
        </SidebarItems>
      </ul>
    </aside>
  );
};

export default Sidebar;

const SidebarItems = ({
  page,
  children,
}: {
  page: string;
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const pathname = searchParams.get("page");

  return (
    <li
      className={`w-full rounded-[6px] p-[12px] ${
        pathname === page && "bg-[#EEEEEE]"
      }`}
    >
      <Link
        href={`/?page=${page}`}
        className={`${
          pathname === page ? "text-[#000000]" : "text-[#6F767E]"
        } text-[16px] font-bold flex items-center gap-[12px]`}
      >
        {children}
      </Link>
    </li>
  );
};