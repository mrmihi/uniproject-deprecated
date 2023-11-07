import React from "react";
import { linkData } from "./data";
import LinkCard from "@/components/common/linkCard";

const ItemGrid = ({ module }) => {
  const moduleLinkData = linkData[module];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {moduleLinkData.map((item, index) => (
        <LinkCard
          key={index}
          title={item.title}
          description={item.description}
          module={module}
          date={"24th April 2023"}
        />
      ))}
    </div>
  );
};

export default ItemGrid;
