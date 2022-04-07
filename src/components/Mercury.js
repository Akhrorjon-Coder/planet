import React, {useState} from 'react';
import img1 from './images/mercuriy.png'
import img2 from './images/mercuriy-structure.png'
import img3 from './images/mercuriy-geo.png'

const DATA = {
    footerContent: [
        {
            id: '1',
            title: 'rotation time',
            number: '58.6 days'
        },
        {
            id: '2',
            title: 'revolution time',
            number: '87.97 days'
        },
        {
            id: '3',
            title: 'radius',
            number: '2,439.7 km'
        },
        {
            id: '4',
            title: 'average temp',
            number: '430°C'
        },
    ]
}

const PlanetImg = ({src}) => {
    return(
        <img src={src} alt=""/>
    )
}

const Mercury = () => {
    const [item, setItem] = useState(DATA.footerContent);
    const btnText = ['01 overview','02 internal structure','03 surface geology'];
    const [text, setText] = useState();
    const [active, setActive] = useState(false);
    const ToggleSwitch = ()=>{
        active ? setActive(false) : setActive(true);
    }
    return (
       <section>
           <div className='planetSection flex justify-between px-40 py-0'>
               <div className='planetImg w-1/2 pt-12'>
                   <span>
                       {
                           text === '01 overview' && (<PlanetImg src={img1} />)
                       }
                       {
                           text === '02 internal structure' && (<PlanetImg src={img2} />)
                       }
                       {
                           text === '03 surface geology' && (<PlanetImg src={img3} />)
                       }
                   </span>
               </div>
               <div className='planetText text-white w-1/2'>
                    <h1 className='text-5xl py-3'>Mercury</h1>
                   <div className='info tracking-wide font-medium'>
                       <p>{text === '01 overview'  && <p>Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.</p>
                       }</p>
                       <p>{text === '02 internal structure'  && <p>Mercuriy's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.</p>
                       }</p>
                       <p>{text === '03 surface geology'  && <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                       }</p>
                   </div>
                   <div className="wiki">
                       <a href="https://wikipedia.com/">Source: Wikipedia <img className='inline-block' src="./images/Shape.png" alt=""/></a>
                   </div>
                   <div className='btns'>
                       {
                           btnText.map(btn=>(
                               <button onClick={()=> setText(btn)}  key={btn} className={`btn ${btn}`}>{btn}</button>
                           ))
                       }
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

export default Mercury;