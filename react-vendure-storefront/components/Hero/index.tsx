import Famous from './famous-hero.png';
import Image from 'next/image';


export default function Hero() {
  return (
  <div className='block w-full'>

            <div className="grid grid-cols-8 grid-rows-1 gap-3">
              <div className='col-span-2 col-start-2'>
                    <h1 className='mb-1 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white'>Alf’orov Shop</h1>
                    <p className="mb-1 text-lg font-normal text-white lg:text-xl sm:px-4 xl:px-4">Одяг для справжніх любителів історії</p>

  <button
  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
  Обрати одежину
  </button>
              </div>

            <div className="col-span-3 col-start-5">

                    <Image src={Famous} alt="Famous figure" className="hero-image" />

            </div>
        </div>
        </div>

  );
}
