import React, { FC, useState } from 'react';
import PlyniumLogo from '../icons/PlyniumLogo';

interface NavUnoggedWebProps {
  pestanaSelected: string;
  setPestanaSelected: any;
}

const NavUnlogggedWeb: FC<NavUnoggedWebProps> = ({ pestanaSelected, setPestanaSelected }) => {


  const cambiarpestana = (nuevaPestana: string) => {
    setPestanaSelected(nuevaPestana)
  }

  return (
    <div className=' fixed top-0 left-0 right-0 z-10 flex flex-col h-50 w-full  bg-zinc-900 bg-opacity-90 '>
      <div className='flex flex-row h-full text-gray-100 justify-between items-center py-4 px-6'>
        <div className='flex flex-row items-center p-1 rounded pr-5 hover:opacity-90 hover-shadow pl-6'>
          <div className='h-full w-10 '>
            <PlyniumLogo />
          </div>
          <div className='flex flex-row items-center'>
            <p className='text-5xl ml-8 text-3xl text-gray-200 font-gruppo'>Plynium</p>
            <p className='font-gruppo mt-4 ml-3 text-2xl bg-gray-100 bg-opacity-5 px-2 rounded-xl pb-1'>BACKOFFICE</p>
          </div>
        </div>
        <div className='flex flex-row '>
          <p>Log in, Sign Up, LINK TO OTHER PLINIUM SITES</p>
        </div>
      </div>
      <div className='flex flex-row bg-gray-200 bg-opacity-5 pl-24 pl-24 text-lg mt-1 '>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 pb-1 ${pestanaSelected === 'home' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("home")}>Home</p>
        <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'publish' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("publish")}>Publicar</p>
                <p className={`p-4 mr-4 hover:bg-opacity-50 hover:bg-gray-200 ${pestanaSelected === 'news' ? 'bg-gray-100 bg-opacity-10' : ''}`}
        onClick={()=>cambiarpestana("news")}>Noticias</p>
         

      </div>


    </div>
  );
};

export default NavUnlogggedWeb;
