import React from 'react';
import { HamburgerSvg } from '../../assets/svg';
import Logo from '../../assets/images/logo/logo.png';

const Header = () => {
    return (
        <>
            <header className='bg-primary_black text-primary_white px-[10rem] py-[2.4rem]'>
                <article>
                    <main className='flex justify-between'>
                        <div><img src={Logo} alt='logo' className='w-[4.8rem] h-[5.2rem]' /></div>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center items-center gap-10 border border-primary_yellow rounded-[3rem] h-[6rem] w-[18.8rem]'>
                                <div className='text-primary_yellow text-[1.8rem]'>Let’s Talk</div>
                                <div className='relative flex items-center justify-center'>
                                    <div className='p-3 bg-primary_yellow rounded-full animate-ping absolute'></div>
                                    <div className='h-[1.374rem] w-[1.374rem] bg-primary_yellow rounded-full relative z-10'></div>
                                </div>
                            </div>
                            <div><HamburgerSvg h={60} w={60} /></div>
                        </div>
                    </main>
                </article>
            </header>
        </>
    )
}

export default Header;