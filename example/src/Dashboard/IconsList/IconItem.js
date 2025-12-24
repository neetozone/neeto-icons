import React, { forwardRef, useEffect, useRef } from "react";
import classNames from "classnames";

const IconItem = ({ name, Icon, onSelect, isSelected, size = 36 }, ref) => {
  return (
    <div
      ref={ref}
      onClick={() => onSelect(name)}
      className={classNames(
        "flex flex-col items-center justify-center col-span-1 p-2 transition-all transform bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 w-full h-20",
        {
          "border-blue-500 dark:border-blue-400": isSelected,
        }
      )}
    >
      <Icon {...{ size }} className="text-gray-700 dark:text-gray-300" />
      <div className="mt-3 text-xs text-gray-700 dark:text-gray-300 truncate w-full text-center">{name}</div>
    </div>
  );
};

export default forwardRef(IconItem);
