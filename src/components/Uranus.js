import React from 'react';
import { NavLink } from 'react-router-dom';
import { clickButton } from './Hooks'

const DATA = {
    homeContent: [
        {
            id: '1',
            img: './images/uranus.png',
            info: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            button: "overview"
        },
        {
            id: '2',
            img: './images/uranus-structure.png',
            info: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            button: "internal structure"
        },
        {
            id: '3',
            img: './images/uranus-geo.png',
            info: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            button: "surface geology"
        },
    ],
    footerContent: [
        {
            id: '1',
            title: 'rotation time',
            number: '17.2 DAYS'
        },
        {
            id: '2',
            title: 'revolution time',
            number: '84 DAYS'
        },
        {
            id: '3',
            title: 'radius',
            number: '25.362 KM'
        },
        {
            id: '4',
            title: 'average temp',
            number: '-195°C'
        },
    ]
}

const Uranus = () => {
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
                    <h1 className='lg:text-4xl lg:py-1 lg:flex lg:justify-start md:text-3xl md:py-1 md:flex md:justify-start  sm:flex sm:justify-center sm:text-5xl'>Saturn</h1>
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
                                        <NavLink key={arr.id} exact activeClassName="active" to={"/uranus"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
                                    )
                                } else {
                                    return (
                                        <NavLink key={arr.id} activeClassName="" to={"/uranus"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
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

export default Uranus;