import React, { forwardRef, useEffect, useRef } from "react";
import classNames from "classnames";

const IconItem = ({ name, Icon, onSelect, isSelected, size = 36 }, ref) => {
  return (
    <div
      ref={ref}
      onClick={() => onSelect(name)}
      className={classNames(
        "flex flex-col items-center justify-center col-span-1 p-2 transition-all transform neeto-ui-bg-white neeto-ui-border-gray-300 border rounded cursor-pointer hover:neeto-ui-bg-gray-100 w-full h-20",
        {
          "neeto-ui-border-primary-500": isSelected,
        }
      )}
    >
      <Icon {...{ size }} className="neeto-ui-text-gray-700" />
      <div className="mt-3 text-xs neeto-ui-text-gray-700 truncate w-full text-center">{name}</div>
    </div>
  );
};

export default forwardRef(IconItem);
