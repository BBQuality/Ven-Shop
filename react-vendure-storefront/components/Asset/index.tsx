import Image from "next/image";
import React from "react";
import { Asset as AssetType } from "../../contracts/common/asset.type";

interface Props {
  asset: AssetType | null; // Додано `| null`, щоб врахувати можливість null
  classes?: string;
}

const Asset: React.FC<Props> = ({ asset, classes }) => {
  if (!asset) {
    return null;
  }

  const { width, height, preview, name } = asset;

  // Перетворюємо всі зворотні слеші на прямі
  const formattedPreview = preview.replace(/\\/g, "/");

  return (
    <Image
      height={height}
      width={width}
      src={formattedPreview}
      alt={name || ""}
      className={`${classes}`}
    />
  );
};

export default Asset; // Додаємо експорт за замовчуванням
