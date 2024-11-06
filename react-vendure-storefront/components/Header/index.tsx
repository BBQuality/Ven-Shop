import Link from "next/link";
import Navigation from "../Navigation";
import React, { useState } from 'react';


export const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (

    <header className="grid grid-cols-10 grid-rows-1 gap-2">

      <div className="relative col-span-3 col-start-1">
        <span className="absolute flex flex-nowrap flex-row justify-center p-1 mx-1.5 my-0.5">
        <svg width="100" height="100" viewBox="0 0 169 169" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1621 122.995H27.259L30.9519 113.434H29.0898V110.695H35.2082L39.9183 122.979H41.9369V125.718H35.2865V122.995H36.8513L36.2097 121.289H30.8893L30.2321 122.995H31.8282V125.733H25.1778V122.995H25.1621ZM35.2082 118.645L33.9094 115.139L33.6591 113.981H33.4869L33.2366 115.139L31.8908 118.645H35.2082Z" fill="white"/>
            <path d="M55.1598 123.167H56.5838V125.733H51.2008V123.167H52.2023L51.3104 117.925H49.949L47.7895 123.167H49.2448V125.733H43.502V123.167H44.9259L47.101 117.878H45.6458V115.312H53.8141L55.1598 123.167Z" fill="white"/>
            <path d="M57.835 120.522C57.835 117.534 59.8223 115.515 63.1084 115.061V113.888H61.6531V111.321H66.0033V115.061C69.2894 115.515 71.2767 117.534 71.2767 120.522C71.2767 123.511 69.2894 125.53 66.0033 125.984V128.691H63.1084V125.984C59.8223 125.53 57.835 123.511 57.835 120.522ZM63.1084 123.339V117.706C61.6218 118.097 60.7455 119.098 60.7455 120.522C60.7455 121.946 61.6062 122.948 63.1084 123.339ZM68.3818 120.522C68.3818 119.098 67.5055 118.097 66.0189 117.706V123.339C67.5055 122.948 68.3818 121.946 68.3818 120.522Z" fill="white"/>
            <path d="M78.5691 115.312V117.878H77.1139V118.472H79.9775C82.3247 118.472 83.9834 119.959 83.9834 122.15C83.9834 124.278 82.356 125.733 79.9775 125.733H72.7637V123.167H74.2189V117.878H72.7637V115.312H78.5691ZM80.0244 123.167C80.5408 123.167 81.0885 122.744 81.0885 122.103C81.0885 121.383 80.5408 120.945 80.0244 120.945H77.1295V123.167H80.0244Z" fill="white"/>
            <path d="M85.877 120.522C85.877 117.283 88.2242 114.967 91.5885 114.967C94.9529 114.967 97.3001 117.268 97.3001 120.522C97.3001 123.762 94.9529 126.077 91.5885 126.077C88.2242 126.077 85.877 123.762 85.877 120.522ZM91.5885 123.511C93.2472 123.511 94.4052 122.275 94.4052 120.522C94.4052 118.77 93.2472 117.534 91.5885 117.534C89.9298 117.534 88.7719 118.77 88.7719 120.522C88.7719 122.275 89.9298 123.511 91.5885 123.511Z" fill="white"/>
            <path d="M98.583 127.955H100.038V117.878H98.583V115.312H102.589V116.25H102.761C103.528 115.437 104.686 114.967 105.875 114.967C109.036 114.967 111.258 117.268 111.258 120.522C111.258 123.762 109.036 126.077 105.875 126.077C104.686 126.077 103.543 125.624 102.839 124.888H102.667L102.918 126.422V127.955H104.373V130.506H98.583V127.955ZM105.546 123.511C107.205 123.511 108.363 122.275 108.363 120.522C108.363 118.77 107.205 117.534 105.546 117.534C103.888 117.534 102.73 118.77 102.73 120.522C102.73 122.275 103.888 123.511 105.546 123.511Z" fill="white"/>
            <path d="M112.964 120.522C112.964 117.283 115.311 114.967 118.675 114.967C122.04 114.967 124.387 117.268 124.387 120.522C124.387 123.762 122.04 126.077 118.675 126.077C115.311 126.077 112.964 123.762 112.964 120.522ZM118.691 123.511C120.35 123.511 121.508 122.275 121.508 120.522C121.508 118.77 120.35 117.534 118.691 117.534C117.032 117.534 115.874 118.77 115.874 120.522C115.874 122.275 117.032 123.511 118.691 123.511Z" fill="white"/>
            <path d="M125.905 123.167H127.361V117.878H125.905V115.312H133.244C135.372 115.312 136.828 116.203 136.828 117.956C136.828 119.067 136.358 119.787 135.169 120.178V120.35C136.577 120.694 137.219 121.805 137.219 122.776C137.219 124.309 135.811 125.718 133.463 125.718H125.905V123.167ZM133.119 119.239C133.714 119.239 133.98 118.848 133.98 118.425C133.98 118.034 133.761 117.659 133.166 117.659H130.177V119.239H133.119ZM133.416 123.386C134.058 123.386 134.308 122.963 134.308 122.494C134.308 122.025 134.011 121.602 133.322 121.602H130.162V123.402H133.416V123.386Z" fill="white"/>
            <path d="M67.3809 70.1193L83.561 79.6959L74.3599 58.8213L67.3809 70.1193Z" fill="#1F49EF"/>
            <path d="M77.4268 43.502L95.0153 83.3891H97.6911L79.7896 43.502H77.4268Z" fill="#1F49EF"/>
            <path d="M43.2822 27.9946V104.076H119.364V27.9946H43.2822ZM110.96 91.1662H88.5836L63.218 76.8794L59.1338 83.3891H68.8669L62.4356 91.1662H45.2382L56.3797 73.1082L52.0608 70.6671L56.3797 63.6724L60.6986 66.1918L70.5882 50.2463L67.6151 43.5019H58.7426L64.7828 36.1943H86.3772L88.568 41.2956L107.502 83.3891H117.392L110.96 91.1662Z" fill="#1F49EF"/>
        </svg>
      </span>
      </div>
      <div className="col-span-3 col-start-5">
        <Navigation />
      </div>
      <div className="col-span-2 col-start-8">
          <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className="flex flex-wrap flex-row items-center justify-end ">
              <span>
                <Link href="/user/my-cart">
                  <a className="inline-block justify-center w-auto h-fit p-1 mx-auto m-0">
                  <svg width="30" height="31" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.03571 16.2579H5.82611L6.8524 20.2931C6.86049 20.325 6.86926 20.3564 6.87865 20.3875L9.50848 33.959C9.51505 34.0321 9.52542 34.1055 9.53967 34.179L10.6797 40.0621L10.6812 40.0703C10.8377 40.8611 11.2541 41.5721 11.86 42.0826C12.4658 42.593 13.2238 42.8717 14.0058 42.8717H30.5358C31.6601 42.8717 32.5716 41.931 32.5716 40.7706C32.5716 39.6102 31.6601 38.6695 30.5358 38.6695H14.5618L13.8833 35.1677H32.8468L32.875 35.1681C32.9706 35.1699 33.2428 35.1748 33.4922 35.1327C34.4018 34.9793 35.1805 34.341 35.5431 33.4852C35.6911 33.1363 35.7638 32.6963 35.7877 32.5525L35.7948 32.5107L37.9431 21.6938L37.9491 21.6647C38.0205 21.2617 38.005 20.8473 37.9046 20.4509C37.5946 19.2294 36.5121 18.3636 35.2888 18.3589H35.2837H10.5698L9.66148 14.7875C9.49485 14.0245 9.0853 13.3402 8.49722 12.8448C7.89143 12.3343 7.13341 12.0556 6.3514 12.0557H2.03571C0.911415 12.0557 0 12.9964 0 14.1568C0 15.3172 0.911415 16.2579 2.03571 16.2579Z" fill="#BFCBFB"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.9937 47.9153C17.9937 46.1381 16.5979 44.6973 14.876 44.6973C13.1541 44.6973 11.7583 46.1381 11.7583 47.9153C11.7583 49.6923 13.1541 51.1331 14.876 51.1331C16.5979 51.1331 17.9937 49.6923 17.9937 47.9153ZM31.5653 47.9153C31.5653 46.1381 30.1693 44.6973 28.4477 44.6973C26.7257 44.6973 25.3298 46.1381 25.3298 47.9153C25.3298 49.6925 26.7257 51.1331 28.4477 51.1331C30.1693 51.1331 31.5653 49.6925 31.5653 47.9153Z" fill="#1F49EF"/>
<circle cx="37.5" cy="12.5" r="12.5" fill="#1F49EF"/>
</svg>

                    <span className="sr-only">Кошик</span>
                  </a>
                </Link>
              </span>


              <div className="relative inline-block text-left">

  <button
    onClick={toggleDropdown}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    aria-expanded="true"
    aria-haspopup="true"
  >
    Особистий кабінет
  </button>

  <div className={`${isDropdownOpen ? "block" : "hidden"} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <span>
                      <Link href="/user/login">
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Авторизуватись
                        </a>
                      </Link>
                    </span>
                    <span className="hidden sm:block">
                      <Link href="/user/register">
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                          Реєстрація
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;