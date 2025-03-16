import React from 'react';
import { Link } from 'react-router-dom';
import { ShoeData } from '../shoeAssets/shoeAssets';
import Card from '../Card/Card';

export default function Shoes() {
    return (
        <div className='m-16 ml-28'>
            <div className='grid grid-cols-4 gap-5'>
                {ShoeData.map((shoe, index) => (
                    <React.Fragment key={index}>
                        <Card {...shoe} />
                        {index === 11 && (
                            <div className='col-span-4 uppercase w-full 
                            bg-yellow-500 flex justify-center 
                            items-center font-bold
                            flex-col h-96'>
                                <p className='mb-14 text-4xl'>festive offer : extra 20% off* on
                                orders <br /> above inr 5499</p>
                                <p className='mb-7 text-sm'>*Max discount INR 2000</p>
                                <button
                                className="relative font-sans text-sm tracking-widest uppercase 
                              text-white bg-black cursor-pointer border-2 px-3 py-2 md:px-4 
                                shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] 
                                select-none active:shadow-none active:translate-x-1 active:translate-y-1"
                                >
                                Shop Now</button>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className='mt-16 flex justify-end mr-11'>
                <button className='bg-black text-white p-3 pr-12 pl-12 hover:text-gray-400'>NEXT</button>
            </div>
            <div className='mt-16 flex flex-col mr-72 ml-24 text-left'>
                <h1 className='uppercase mb-5 font-bold text-lg'>Quality sports shoes</h1>
                <p>
                    As the most important piece of equipment you’ll wear during 
                    exercise, finding the right pair of sports shoes will make or 
                    break your workout. High-quality sports shoes not only help with 
                    your performance, they also prevent injuries from getting the
                    better of you. With the huge range of adidas sports shoes, we 
                    can equip you with the right footwear for your chosen activity. 
                    From tennis to winter sports and everything in between, our 
                    sports shoes are designed for durability and comfort.
                </p>
                <h2 className='mt-7 text-lg mb-3'>Designed to support</h2>
                <p>
                    Featuring superior cushioning from Adiprene, your shoe takes 
                    the impact when you exercise rather than your foot. Offering 
                    flexibility in the right places, our sports shoes will provide 
                    your feet with the stability they need. If you’re looking for 
                    traction on the golf course, our collection of golf shoes will 
                    deliver grip. When you need night-time visibility during your 
                    runs, reflective detailing will ensure you’re seen in low 
                    light. Whether you’re keeping fit indoors or outdoors, 
                    technology like an OrthoLite® sockliner supports your 
                    feet and protects your sports shoes from bacteria growth 
                    and odours, as well as being moisture-wicking.
                </p>
                <h2 className='mt-7 text-lg mb-3'>A high-performance shoe</h2>
                <p>
                    Choosing the correct pair of adidas shoes for your sport is 
                    crucial. Along with protecting you from injury, a specific 
                    sport shoe will support your feet during activity and deliver
                     high performance. If you tend to play a lot of sports like
                      football on astro-turf, you’ll need sports shoes that take
                       the pressure off your feet. For racquet sports, shoes 
                       should offer the correct stability when you move from 
                       side to side. When you choose running shoes they need 
                       to be extremely flexible, so your feet can bend and flex 
                       during each step. Lightweight sports shoes with a Primeknit
                        upper are ideal for aerobic classes and gym workouts, and 
                        it’s good to look for a Bounce midsole which provides 
                        cushioning on impact.
                </p>
            </div>

        </div>
    );
}
