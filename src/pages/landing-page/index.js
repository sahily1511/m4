import React from 'react';
import { ArrowSvg, ClockSvg } from '../../assets/svg';
import { IndustryExpertise, ServiceData, WhyUsData } from '../../utils/static-data';
import Advertisement from '../../assets/svg-images/landing-page/advertisement.svg';

const LandingPage = () => {

    return (
        <>
            {/* Banner Section Start */}
            <section className='bg-primary_black text-secondary_white px-[25rem] py-[7rem] pb-[10rem] flex items-center justify-center'>
                <article>
                    <main className='flex flex-col items-center bg-banner bg-no-repeat h-[78.7rem] w-[127.4rem] max-xl:w-[80vw] max-xl:h-[50rem] bg-cover'>
                        <div className='text-[9rem] max-xl:text-[7rem] font-[700] tracking-wide capitalize'>We give shape to your ideas</div>
                        <div className='text-[2rem] max-xl:text-[1.5rem] tracking-wide capitalize'>We help companies, startups and freelancers grow through digital!</div>
                    </main>
                </article>
            </section>
            {/* Banner Section End */}

            {/* About Us Section Start */}
            <section className='bg-primary_black text-secondary_white px-[20rem] py-[10rem]'>
                <article>
                    <main className='flex flex-wrap justify-between gap-5'>
                        <main className='basis-[50%] max-2xl:basis-full flex items-center max-2xl:justify-center gap-7'>
                            <img className='h-[30.5rem] w-[28.3rem] rounded-[2rem]' src='https://s3-alpha-sig.figma.com/img/009e/4619/429c430d83b314c1794b113ba45d5782?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H2vtFmI59wcoDt-GHISbnDAw8NyhU0OZ4EA7uN0FxYKR8zKfVU~XgndD1aop6s7jrAmAvrqzZsUBm2ssrdMO~zsWB881vPEj2piuZQrT-W0-5AvgbiQFpu-9JTuymfG9A7RXUV091nsY-qdawl~fbmAQvUEPnUt9YZbPklA0A9UEen6HS9Zok75qg8fPDOCxNPfu00S53pB6A1YDpA~nnUzMbkMq6v-zuNd1TGLgxFgTvvSv0ILmkzIUENQLeReG3QlzVErrNAOG2FMaF2R-fwx2Kp3LvPaD4u2RkMtL83~iLfn9n7EPvgvXwnXgWRVZdNoc6ahiZJ7yvjJ9xErS5g__' alt='deal' />
                            <img className='h-[60rem] w-[40.2rem] rounded-[2rem]' src='https://s3-alpha-sig.figma.com/img/a242/c756/64dc9d209a7bf31dd3b4338560cbe7c9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AyqH4cKvD-aCZDEdV8vDfgCFm2WvnX0YMfQYheqxn10vq1Fxybma0IrMVKMjItL~10h3M77~3ThhBF8MGn9J3X5RQnQN7Y17hIh1j30pr9ZeT5MWAzLzGICHHudJ4a4d6l5BjurYcZbFM6uzZbhlD1M7UnQOCOOTgYu7w1ph3Vh925rDXRB1~FqddMR1H0ixMJ5lSUgs3yCk66R6eTNTRJgHueMclhKWv~kwL~2xu2-2IM4sqUf9gffG5pqPj66GTozBU-uewxzw-Hb5QlYuX7yPzHdBptKigQ4PaH-616dpO7yWsgA1c3Zalyqka51rLUqIN7uyueH-XvTCAKuoUw__' alt='mobile' />
                        </main>
                        <main className='basis-[45%] max-2xl:basis-full flex flex-col gap-16'>
                            <div className='text-primary_yellow text-[1.8rem] tracking-wide'>About Us</div>
                            <div className='text-[4.6rem] font-[250] tracking-wide capitalize'>An award-winning full-service digital agency powered by the future itself. We create today for a better tomorrow.</div>
                            <div className='text-secondary_white text-[2rem] font-[200] tracking-wider ml-[35%]'>Lorem ipsum dolor sit amet consectetur. Sed mattis ullamcorper phasellus arcu pulvinar enim ac aenean vulputate. Massa dictumst purus cras justo aliquet placerat tellus ultrices. </div>
                        </main>
                    </main>
                </article>
            </section>
            {/* About Us Section End */}

            {/* M4Makers Section Start */}
            <section className='bg-primary_black text-primary_grey px-[23rem] py-[10rem]'>
                <article>
                    <div className='font-[100] text-[5.6rem] tracking-wide text-center capitalize'><span className='text-primary_yellow'>M4Makers</span> is a <span className='border rounded-[4rem] px-5'><span className='text-[3rem] font-[200]'>DIGITAL-FIRST</span></span> branding and technology agency, enabling compnies to connect with their audience, extend their reach and enjoy greater  <span className='border rounded-[4rem] px-5'><span className='text-[3rem] font-[200]'>COMMERCIAL</span></span> Success</div>
                </article>
            </section>
            {/* M4Makers Section End */}

            {/* Service Section Start */}
            <section className='bg-primary_black text-primary_grey px-[10rem] py-[10rem]'>
                <article>
                    <div className='text-[1.8rem] tracking-wide text-primary_yellow'>Services</div>
                    <main className='flex items-center justify-between gap-5'>
                        <div className='text-[11.6rem] tracking-wider'>What We Offer</div>
                        <div className='flex justify-center items-center gap-10 border border-primary_yellow rounded-[3rem] h-[6rem] w-[18.8rem]'>
                            <div className='text-primary_yellow text-[2.2rem]'>View All</div>
                            <div className='relative flex items-center justify-center'>
                                <div className='p-2 bg-primary_yellow rounded-full animate-ping absolute'></div>
                                <div className='h-[1.374rem] w-[1.374rem] bg-primary_yellow rounded-full relative z-10'></div>
                            </div>
                        </div>
                    </main>
                    <main className='ml-[50rem] text-secondary_white mt-[8rem]'>
                        {ServiceData.map((value, index) => (
                            <div key={index} className={`group/item flex justify-between pt-[5rem] hover:pb-[5rem] border-b transition-all duration-1000 ease-in-out ${index + 1 == 1 && 'border-t'}`}>
                                <div className='basis-[12%] pt-5'>
                                    <img className='h-[7.8rem] w-[7.8rem] rounded-[1.2rem] group-hover/item:w-[13rem] group-hover/item:h-[13rem] transition-all duration-1000 ease-in-out' src={value?.image} />
                                </div>
                                <div className='basis-[65%] flex gap-[1rem] items-baseline transition-all duration-1000 ease-in-out'>
                                    <div className='font-[100] text-white transition-all duration-1000 ease-in-out group-hover/item:translate-y-[4.6rem]'>0{index + 1}</div>
                                    <div>
                                        <div className='text-[7rem] font-[100] tracking-wider capitalize'>{value?.title}</div>
                                        <div className='pr-[20%] text-[1.6rem] font-[100] tracking-wide transition-all duration-1000 ease-in-out opacity-0 group-hover/item:opacity-100'>{value?.description}</div>
                                    </div>
                                </div>
                                <div className='mt-5 group-hover/item:mt-[initial] h-[7.8rem] w-[7.8rem] border rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:translate-y-1/2 transition-all ease-in-out duration-1000 flex items-center justify-center rotate-180'><ArrowSvg w='40' h='40' /></div>
                            </div>
                        ))}
                    </main>
                </article>
            </section>
            {/* Service Section End */}

            {/* Advertisment Section Start */}
            <section className='bg-primary_black text-primary_grey py-[5rem]'>
                <article className='overflow-hidden'>
                    <main className='font-[700] text-[12.156rem] flex gap-[10rem] advertisement'>
                        <div className='text-transparent text-stroke'>Business.</div><div>Marketing.</div><div className='text-transparent text-stroke'>Analysis.</div><div>Strategy.</div>
                        <div className='text-transparent text-stroke'>Business.</div><div>Marketing.</div><div className='text-transparent text-stroke'>Analysis.</div><div>Strategy.</div>
                    </main>
                </article>
            </section>
            {/* Advertisment Section End */}

            {/* Portfolio Section Start */}
            <section className='bg-primary_black text-primary_grey px-[10rem] py-[10rem]'>
                <article>
                    <main className='flex gap-10 justify-between'>
                        <main className=''>
                            <div className='text-[1.8rem] tracking-wide text-primary_yellow'>Portfolio</div>
                            <div className='text-[11.6rem] tracking-wider capitalize'>Why us</div>
                        </main>
                        <main className='h-[107.4rem] w-[100.1rem] flex justify-between content-between flex-wrap'>
                            {WhyUsData.map((value, index) => (
                                <div key={index} className={`${(index + 1) % 2 == 0 ? 'bg-glow-2' : 'bg-glow-1'} w-[48.9rem] h-[52.5rem] p-[3.5rem] rounded-[1.2rem] border-[0.1rem] border-[#1D1D1D] capitalize`}>
                                    <div>{value?.icon}</div>
                                    <div className='flex gap-[2rem] items-start mt-[6rem]'>
                                        <div className='text-[1.6rem] font-[200] tracking-wide text-primary_grey mt-[1rem]'>0{index + 1}</div>
                                        <div className='flex flex-col gap-[5rem]'>
                                            <div className='text-[4.6rem] font-[200] tracking-wide text-secondary_white'>{value?.title}</div>
                                            <div className='text-[1.8rem] font-[200] tracking-wide text-secondary_grey'>{value?.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </main>
                    </main>
                </article>
            </section>
            {/* Portfolio Section End */}

            {/* Industry Expertise Section Start */}
            <section className='bg-primary_black text-primary_white py-[10rem]'>
                <article>
                    <div className='text-[1.8rem] tracking-wide text-primary_yellow text-center'>Industry Expertise</div>
                    <div className='text-[11.6rem] tracking-wider capitalize text-center'>Industry Expertise</div>

                    <main className='flex justify-around gap-5 mt-[11rem]'>
                        {IndustryExpertise.map((value, index) => (
                            <div key={index} className={`group/card relative overflow-hidden h-[76.6rem] w-[48rem] flex flex-col transition-all duration-1000 ease-in-out bg-transparent`}>
                                <div className='flex-1 flex flex-col px-[5.5rem] transition-all duration-1000 ease-in-out group-hover/card:z-10'>
                                    <div className='flex gap-[1rem] z-50  group-hover/card:text-primary_black translate-y-[25.5rem] group-hover/card:translate-y-[10rem] transition-all duration-1000 ease-in-out'>
                                        <div className='text-[1.6rem] font-[200] tracking-wide mt-[1.5rem]'>0{index + 1}</div>
                                        <div className='text-[5.6rem] tracking-wide '>{value?.title}</div>
                                    </div>
                                    <div className='text-[1.6rem] font-[200] z-50 group-hover/card:text-primary_black opacity-0 group-hover/card:opacity-100 translate-y-[22rem] group-hover/card:translate-y-[15rem] tracking-wide pl-[2.5rem] transition-all duration-1000 ease-in-out'>{value?.description}</div>
                                </div>
                                <div className='absolute w-[100%] h-[51.1rem] top-0 bg-white opacity-0 group-hover/card:opacity-100 transition-all duration-1000 ease-in-out' ></div>

                                <div className='absolute z-10 bg-primary_black group-hover/card:-translate-x-full h-[76.6rem] w-[50%] transition-all duration-1000 ease-in-out'></div>
                                <div className='absolute z-10 bg-primary_black right-0 group-hover/card:translate-x-full h-[76.6rem] w-[50%] transition-all duration-1000 ease-in-out'></div>

                                {/* <div className='absolute z-10 bg-primary_black group-hover/card:-translate-x-full bottom-0 h-[25.5rem] w-[50%] transition-all duration-1000 ease-in-out'></div>
                                <div className='absolute z-10 bg-primary_black right-0 group-hover/card:translate-x-full bottom-0 h-[25.5rem] w-[50%] transition-all duration-1000 ease-in-out'></div> */}
                                <img src={value?.image} className='w-[100%] h-[25.5rem] opacity-0 group-hover/card:opacity-100 group-hover/card:scale-x-125 transition-all duration-1000 ease-in-out' />
                            </div>
                        ))}
                    </main>
                </article>
            </section>
            {/* Industry Expertise Section End */}

            <section className='bg-primary_black text-primary_white py-[10rem]'></section>
        </>
    )
}

export default LandingPage;