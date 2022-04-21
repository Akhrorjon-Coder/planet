import React from 'react';
import { NavLink } from 'react-router-dom';
import { clickButton } from './Hooks'
const DATA = {
    homeContent: [
        {
            id: '1',
            img: './images/venus.png',
            info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            button: "overview"
        },
        {
            id: '2',
            img: './images/venus-structure.png',
            info: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            button: "internal structure",
        },
        {
            id: '3',
            img: './images/venus-geo.png',
            info: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            button: "surface geology"
        },
    ],
    footerContent: [
        {
            id: '1',
            title: 'rotation time',
            number: '243 DAYS'
        },
        {
            id: '2',
            title: 'revolution time',
            number: '224.7 DAYS'
        },
        {
            id: '3',
            title: 'radius',
            number: '6,051.8 KM'
        },
        {
            id: '4',
            title: 'average temp',
            number: '471°C'
        },
    ]
}


const Venus = () => {
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
                    <h1 className='lg:text-4xl lg:py-1 lg:flex lg:justify-start md:text-3xl md:py-1 md:flex md:justify-start  sm:flex sm:justify-center sm:text-5xl'>Venus</h1>
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
                                        <NavLink key={arr.id} exact activeClassName="active" to={"/venus"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
                                    )
                                } else {
                                    return (
                                        <NavLink key={arr.id} activeClassName="" to={"/venus"} className={`btn`} onClick={(e) => clickButton(e, `image-${arr.id}`, `info-${arr.id}`, "active")}>0{arr.id}  {arr.button}</NavLink>
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

export default Venus;