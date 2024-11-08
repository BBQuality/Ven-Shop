import { useLazyQuery } from "@apollo/client";
import { GetStaticProps } from "next";
import { useEffect, useRef, useState } from "react";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { IFacetValueItem } from "../components/ProductFilters/product-filter.interface";
import { ProductItem } from "../contracts/products.type";
import { filterProductsQuery } from "../queries/filter-products.query";
import { searchProductQuery } from "../queries/search-product.query";
import { VendureService } from "../services/vendure.service";

interface Props {
  productProps: Array<ProductItem>;
}

const ProductsPage: React.FC<Props> = ({ productProps }) => {
  const pageTopRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Array<ProductItem>>();
  const [getIds, { loading, error, data }] = useLazyQuery(searchProductQuery);
  const [getProducts, {}] = useLazyQuery(filterProductsQuery);

  useEffect(() => {
    setProducts(productProps);
  }, [productProps]);

  const handleFilterPageData = async (data: IFacetValueItem[]) => {
    const ids: number[] = [];
    data.forEach((value) => ids.push(value.id));

    const queryData = await getIds({ variables: { ids } });

    const uniqueResult: Array<{ id: string; __typename: string }> =
      queryData.data.search?.items.filter(
        (value: any, index: any, arrData: any) =>
          arrData.indexOf(value) == index
      );

    const prodIds: string[] = uniqueResult.map((value) => value.id.toString());
    const newProductData = await getProducts({ variables: { ids: prodIds } });
    setProducts(newProductData.data?.products?.items);
    const pageTop = pageTopRef.current;
    pageTop &&
      pageTop.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <div className="">
      <Layout pageTitle="Каталог Товарів">
        <div className="grid grid-cols-3 mx-auto my-0 gap-1">
          <div className="col-span-1 w-fit h-full">
            {/* <Sidebar handleFilter={(data) => handleFilterPageData(data)} /> */}
          </div>
          <div className="col-span-5 px-3" ref={pageTopRef}>
            <div className="grid grid-cols-4 gap-4">
              {products &&
                products.length > 0 &&
                products.map((product) => {
                  return <ProductCard product={product} key={product.id} />;
                })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const gqService = new VendureService();
  const { data } = await gqService.fetchProducts();
  return {
    props: {
      productProps: data.products.items,
    },
  };
};
