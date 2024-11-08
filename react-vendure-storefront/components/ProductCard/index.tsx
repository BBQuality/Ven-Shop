import Link from "next/link";
import React from "react";
import { ProductItem } from "../../contracts/products.type";
import { numberToCurrency } from "../../services/utils";
import Asset from "../Asset";

interface Props {
  product: ProductItem;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/view/${product.slug}`}>
      <a className="block">
        <div className="flex justify-center">
          <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
            НОВИНКА
          </strong>
        </div>

        {product.featuredAsset && <Asset asset={product.featuredAsset} />}

        <h5 className="mt-1 text-sm text-gray-700">{product.name}</h5>

        <div className="flex items-center justify-between mt-1 font-medium">
          <p>{numberToCurrency(product.variants[0].price)}</p>
          {product.variants.length > 1 && (
            <p className="text-xs tracking-wide uppercase">
              {product.variants.length} variants
            </p>
          )}
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
