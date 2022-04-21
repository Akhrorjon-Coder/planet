import React from 'react';
import { NavLink } from 'react-router-dom';
import { clickButton } from './Hooks'
const DATA = {
    homeContent: [
        {
            id: '1',
            img: './images/mercuriy.png',
            info: "Mercuriy appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            button: "overview"
        },
        {
            id: '2',
            img: './images/mercuriy-structure.png',
            info: "Mercuriy's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            button: "internal structure",
        },
        {
            id: '3',
            img: './images/mercuriy-geo.png',
            info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            button: "surface geology"
        },
    ],
    footerContent: [
        {
            id: '1',
            title: 'rotation time',
            number: '17.2 days'
        },
        {
            id: '2',
            title: 'revolution time',
            number: '84 days'
        },
        {
            id: '3',
            title: 'radius',
            number: '25.362 km'
        },
        {
            id: '4',
            title: 'average temp',
            number: '-195°C'
        },
    ]
}


const Mercury = () => {
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
                    <h1 className='lg:text-4xl lg:py-1 lg:flex lg:justify-start md:text-3xl md:py-1 md:flex md:justify-start  sm:flex sm:justify-center sm:text-5xl'>Mercuriy</h1>
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
                                        <NavLink key={arr.id} exact activeClassName="active" to={"/mercury"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
                                    )
                                } else {
                                    return (
                                        <NavLink key={arr.id} activeClassName="" to={"/mercury"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
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

export default Mercury;