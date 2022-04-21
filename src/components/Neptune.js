// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { clickButton } from './Hooks'
// const DATA = {
//     homeContent: [
//         {
//             id: '1',
//             img: './images/neptune.png',
//             info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
//             button: "overview"
//         },
//         {
//             id: '2',
//             img: './images/neptune-structure.png',
//             info: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
//             button: "internal structure"
//         },
//         {
//             id: '3',
//             img: './images/neptune-geo.png',
//             info: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
//             button: "surface geology"
//         },
//     ],
//     footerContent: [
//         {
//             id: '1',
//             title: 'rotation time',
//             number: '16.08 DAYS'
//         },
//         {
//             id: '2',
//             title: 'revolution time',
//             number: '164.79 DAYS'
//         },
//         {
//             id: '3',
//             title: 'radius',
//             number: '24.622 KM'
//         },
//         {
//             id: '4',
//             title: 'average temp',
//             number: '-201°C'
//         },
//     ]
// }


// const Neptune = () => {
//     return (
//         <section>
//             <div className='planetSection flex justify-between px-36 py-0'>
//                 <div className='planetImg w-1/2 pt-12'>
//                     {
//                         DATA.homeContent.map((arr) => (
//                             <img key={arr.id} src={arr.img} alt="" className={`image image-${arr.id}`} />
//                         ))
//                     }
//                 </div>
//                 <div className='planetText text-white w-1/2'>
//                     <h1 className='text-4xl py-1'>Neptune</h1>
//                     <div className='tracking-wide font-medium'>
//                         {
//                             DATA.homeContent.map((arr) => (
//                                 <p key={arr.id} className={`info info-${arr.id}`}>{arr.info}</p>
//                             ))
//                         }
//                     </div>
//                     <div className="wiki">
//                         <a href="https://wikipedia.com/">Source: Wikipedia <img className='inline-block' src="./images/Shape.png" alt="" /></a>
//                     </div>
//                     <div className='btns'>
//                         {
//                             DATA.homeContent.map((arr) => {
//                                 if (arr.id === "1") {
//                                     return (
//                                         <NavLink key={arr.id} exact activeClassName="active" to={"/neptune"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
//                                     )
//                                 } else {
//                                     return (
//                                         <NavLink key={arr.id} activeClassName="" to={"/neptune"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
//                                     )
//                                 }
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//             <div className="footer flex justify-center px-40 py-5">
//                 <div className="cards">
//                     {
//                         DATA.footerContent.map((elem) => {
//                             const { id, title, number } = elem;
//                             return (
//                                 <div className="card mr-10" key={id}>
//                                     <p className='text-sm font-bold uppercase'>{title}</p>
//                                     <span className='uppercase font-medium text-xl'>{number}</span>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Neptune;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { clickButton } from './Hooks'

const DATA = {
        homeContent: [
            {
                id: '1',
                img: './images/neptune.png',
                info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
                button: "overview"
            },
            {
                id: '2',
                img: './images/neptune-structure.png',
                info: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
                button: "internal structure"
            },
            {
                id: '3',
                img: './images/neptune-geo.png',
                info: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
                button: "surface geology"
            },
        ],
        footerContent: [
            {
                id: '1',
                title: 'rotation time',
                number: '16.08 DAYS'
            },
            {
                id: '2',
                title: 'revolution time',
                number: '164.79 DAYS'
            },
            {
                id: '3',
                title: 'radius',
                number: '24.622 KM'
            },
            {
                id: '4',
                title: 'average temp',
                number: '-201°C'
            },
        ]
    }
const Neptune = () => {
    return (
        <section>
            <div className='planetSection flex justify-between flex-wrap lg:px-36 py-0 md:px-10'>
                <div className='planetImg lg:w-1/2 pt-12 md:w-1/2 sm:w-full sm:flex sm:justify-center sm:mt-4'>
                    {
                        DATA.homeContent.map((arr) => (
                            <img key={arr.id} src={arr.img} alt="" className={`image image-${arr.id}`} />
                        ))
                    }
                </div>
                <div className='planetText text-white lg:w-1/2 md:w-1/2'>
                    <h1 className='lg:text-4xl lg:py-1 lg:flex lg:justify-start md:text-3xl md:py-1 md:flex md:justify-start  sm:flex sm:justify-center sm:text-5xl'>Neptune</h1>
                    <div className='lg:tracking-wide lg:font-medium lg:block lg:text-left lg:px-0 md:tracking-wide md:font-medium md:block md:text-left md:px-0 sm:text-center sm:px-10'>
                        {
                            DATA.homeContent.map((arr) => (
                                <p key={arr.id} className={`info info-${arr.id}`}>{arr.info}</p>
                            ))
                        }
                    <div className="wiki">
                        <a href="https://wikipedia.com/">Source: Wikipedia <img className='inline-block' src="./images/Shape.png" alt="" /></a>
                    </div>
                    </div>
                    <div className='btns'>
                        {
                            DATA.homeContent.map((arr) => {
                                if (arr.id === "1") {
                                    return (
                                        <NavLink key={arr.id} exact activeClassName="active" to={"/neptune"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
                                    )
                                } else {
                                    return (
                                        <NavLink key={arr.id} activeClassName="" to={"/neptune"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="footer flex justify-center lg:px-40  py-5 md:px-10">
                <div className="cards lg:flex lg:justify-between lg:w-full md:flex md:justify-between md:w-full sm:w-full sm:px-6">
                    {
                        DATA.footerContent.map((elem) => {
                            const { id, title, number } = elem;
                            return (
                                <div className="card lg:w-1/5 md:w-1/5 sm:mb-1" key={id}>
                                    <div className='cardInfo lg:block md:block sm:flex sm:justify-between'>
                                    <p className='text-sm font-bold uppercase'>{title}</p>
                                    <span className='uppercase font-medium text-xl'>{number}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Neptune;