import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import IconsList from "./IconsList";
import { Toaster } from "react-hot-toast";
import * as icons from "../../../generate/icons";
import * as logos from "../../../generate/logos";
import * as appIcons from "../../../generate/app-icons";
import * as typefaceLogos from "../../../generate/typeface-logos";
import * as miscIcons from "../../../generate/misc";
import * as elements from "../../../generate/elements";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIcon = searchParams.get("selectedIcon");

  const searchInputRef = useRef(null);

  const onIconSelect = (selectedIconName) => {
    setSearchParams({ selectedIcon: selectedIconName });
  };

  const commonProps = {
    searchTerm,
    onIconSelect,
    selectedIcon,
  };

  useEffect(() => {
    const handleFocusSearchTerm = (event) => {
      if (event.key === "/") {
        event.preventDefault();

        document.activeElement === searchInputRef.current
          ? searchInputRef.current.blur()
          : searchInputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleFocusSearchTerm);
    return () => {
      document.removeEventListener("keydown", handleFocusSearchTerm);
    };
  }, []);

  return (
    <div className="min-h-screen neeto-ui-bg-gray-50">
      <Toaster position="bottom-center" />
      <Header {...{ searchTerm, setSearchTerm, searchInputRef }} />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">Icons</h2>
      <IconsList size={24} icons={icons} listName="icons" {...commonProps} />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">Logos</h2>
      <IconsList icons={logos} listName="logos" {...commonProps} />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">App Icons</h2>
      <IconsList icons={appIcons} listName="appIcons" {...commonProps} />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">Typeface Logos</h2>
      <IconsList
        icons={typefaceLogos}
        listName="typefaceLogos"
        className="grid w-full grid-cols-2 gap-4 px-8 py-4 md:grid-cols-2 lg:grid-cols-4"
        {...commonProps}
      />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">Misc Icons</h2>
      <IconsList icons={miscIcons} listName="miscIcons" {...commonProps} />
      <h2 className="px-8 pt-4 neeto-ui-text-gray-800 font-semibold">Elements</h2>
      <IconsList icons={elements} listName="elements" {...commonProps} />
    </div>
  );
}

export default Dashboard;
