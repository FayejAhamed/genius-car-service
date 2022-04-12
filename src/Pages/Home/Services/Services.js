import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='container'>
            <h2 className=' my-5 text-primary  text-center'>Our Services: {services.length}</h2>
           <div className='services-container'>
           {
                services.map(service =><Service
                key={service.id} service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;