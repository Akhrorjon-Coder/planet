import React, {useState} from 'react';

const DATA = {
    homeContent: [
        {
            id: '1',
            img: './images/mercuriy.png',
            info: "Mercuriy appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        },
        {
            id: '2',
            img: './images/mercuriy-structure.png',
            info: "Mercuriy's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        },
        {
            id: '3',
            img: './images/mercuriy-geo.png',
            info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        },
    ],
    footerContent: [
        {
            id: '1',
            title: 'rotation time',
            number: '1.03 days'
        },
        {
            id: '2',
            title: 'revolution time',
            number: '1.88 days'
        },
        {
            id: '3',
            title: 'radius',
            number: '3,389.5 km'
        },
        {
            id: '4',
            title: 'average temp',
            number: '-28°C'
        },
    ]
}

const Mars = () => {
    const [item, setItem] = useState(DATA.footerContent);
    return (
        <section>
            <div className='planetSection flex justify-between px-40 py-0'>
                <div className='planetImg w-1/2 pt-12'>
                    <img src="./images/mars.png" alt=""/>
                </div>
                <div className='planetText text-white w-1/2'>
                    <h1 className='text-5xl py-3'>Mars</h1>
                    <div className='info tracking-wide font-medium'>
                        <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the</p>
                    </div>
                    <div className="wiki">
                        <a href="https://wikipedia.com/">Source: Wikipedia <img className='inline-block' src="./images/Shape.png" alt=""/></a>
                    </div>
                    <div className='btns'>
                        <button className="btn">01 overview</button>
                        <button className="btn">02 internal structure</button>
                        <button className="btn">03 surface geology</button>
                    </div>
                </div>
            </div>
            <div className="footer flex justify-center px-40 py-5">
                <div className="cards">
                    {
                        item.map((elem)=>{
                            const {id,title,number} = elem;
                            return(
                                <div className="card mr-10" key={id}>
                                    <p className='text-sm font-bold uppercase'>{title}</p>
                                    <span className='uppercase font-medium text-xl'>{number}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Mars;