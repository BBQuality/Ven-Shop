import React from "react";
import Head from "next/head";
import Header from "../Header";
import Hero from "../Hero";

interface Props {
  pageTitle?: string;
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <React.Fragment >
      {pageTitle && (
        <Head>
          <title className="text-5xl">{pageTitle}</title>
        </Head>
      )}
      <section className="bg-hero-pattern bg-cover bg-center text-white w-full">
        <Header />
        <Hero />
      </section>
      <section className="grid grid-cols-10 grid-rows-1 gap-1">
      <div className="col-span-1 col-start-1 row-start-1">SIDEBAR-LEFT</div>
        <main className="col-span-6 col-start-3 row-start-1">

        <div className="inline-flex flex-wrap rounded-md shadow-sm" role="group">
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Настольні ігри
            </button>
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 border-x border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Одежа
            </button>
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 border-x hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Аксесуари
            </button>
            <button type="button" className="px-2 py-1 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Книги
            </button>
        </div>
          <div>
            {children}
          </div>
          </main>

            <div className="col-span-1 col-start-9">SIDEBAR-RIGHT</div>
      </section>
    </React.Fragment>
  );
};
export default Layout;
