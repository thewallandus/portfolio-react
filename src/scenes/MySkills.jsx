import React from 'react';
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";

function MySkills() {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
    return (
        <section id='skills' className='pt-10 pb-24'>
            {/* HEADER AND IMAGE SECTION */}
            <div className='md:flex md:justify-between md:gap-16 mt-32 '>
                <motion.div
                    className='md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className='font-playfair font-semibold text-4xl mb-5'>
                        MY <span className='text-red'>SKILLS</span>
                    </p>
                    <LineGradient width='w-1/3' />
                    <p className='mt-10 mb-7'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </motion.div>

                <div className='mt-16 md:mt-0'>
                    {isAboveMediumScreens ? (
                        <div
                            className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
                        >
                            <img 
                                alt='skills'
                                className='z-10'
                                src='assets/skills-image.png'
                            />
                        </div>
                    ) : (
                    <img 
                        alt='skills'
                        className='z-10'
                        src='assets/skills-image.png'
                    />    
                )}
                </div>
            </div>

            {/* SKILLS */}
            <div className='md:flex md:justify-between mt-16 gap-32'>
                {/* EXPERIENCE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-semibold text-5xl font-playfair'>01</p>
                            <p className='font-semibold text-3xl font-playfair mt-3'>Experience</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt reiciendis molestias vero numquam pariatur consequatur.
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-semibold text-5xl font-playfair'>02</p>
                            <p className='font-semibold text-3xl font-playfair mt-3'>Innovative</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                        Facilis non quae, ad sequi ea asperiores hic necessitatibus excepturi saepe, vel dolor magnam? Capische.
                    </p>
                </motion.div>

                 {/* IMAGINATIVE */}
                 <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-semibold text-5xl font-playfair'>03</p>
                            <p className='font-semibold text-3xl font-playfair mt-3'>Imaginative</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]'></div>
                    </div>
                    <p className='mt-5'>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, inventore optio, libero repellat vel hic nihil error labore molestias.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;