"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

interface SidebarItemInterface {
  label: string;
  subItems?: any[];
  active?: Boolean | undefined;
  icon?: React.ReactNode;
  key: string;
}

export interface SidebarSubItemInterface {
  label: string;
  icon?: React.ReactNode;
}

const SidebarItem = (props: SidebarItemInterface) => {
  const [active, setactive] = useState(props.active);

  return (
    <div
      className={`collapse hover:bg-base-100 bg-primary-focus hover:text-base-content my-1 ${
        props.subItems ? "collapse-plus" : ""
      } ${active ? "bg-green-300" : ""}
			 `}
    >
      <input type="radio" name="sidebar-item"/>
      <div className="collapse-title">
        <div className="flex flex-row items-center " >
          {props.icon} <span className="ml-2">{props.label}</span>
        </div>
      </div>
      {props.subItems && (
        <div className="collapse-content">
          {props.subItems.map((item: SidebarSubItemInterface, i: number) => (
            <button
              key={`sbsi-${i}`}
              className="btn btn-sm btn-ghost w-full justify-start hover:bg-primary hover:text-primary-content font-normal normal-case text-sm"
            >
              {item.icon || <BsArrowReturnRight />}
              <p className="ml-2">{item.label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
