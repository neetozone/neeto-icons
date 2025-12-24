import React, { useEffect, useRef, useState } from "react";

import IconItem from "./IconItem";
import { DEFAULT_CLASS_NAME } from "./constants";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
const noop = () => {};

export default function IconsList({
  searchTerm,
  icons,
  listName,
  className = DEFAULT_CLASS_NAME,
  onIconSelect,
  selectedIcon,
  size,
}) {
  const ref = useRef();
  const onSelect = (name) => {
    copy(name);
    toast(`${name} has been copied to clipboard.`, {
      icon: "🎉",
      style: {
        borderRadius: "4px",
        background: "#1e1e20",
        color: "#fff",
        padding: "4px 8px",
        fontSize: 14,
      },
    });
    onIconSelect(`${listName}-${name}`);
  };

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const filteredIconsList = Object.keys(icons).filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredIconsList.length === 0 ? (
    <div className="px-8 text-sm text-gray-600 dark:text-gray-400">No {listName} found.</div>
  ) : (
    <div className={className}>
      {filteredIconsList.map((key) => {
        const isSelected = `${listName}-${key}` === selectedIcon;
        return (
          <IconItem
            ref={isSelected ? ref : noop}
            key={key}
            Icon={icons[key]}
            name={key}
            onSelect={onSelect}
            isSelected={isSelected}
            size={size}
          />
        );
      })}
    </div>
  );
}
