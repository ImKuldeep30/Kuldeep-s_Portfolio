import React from 'react'
import Certificate_card from './Certificate_card'
import cert1 from '../assets/Screenshot 2025-12-27 211219.png'
import cert2 from '../assets/Screenshot 2025-12-27 211117.png'
import cert3 from '../assets/Screenshot 2025-12-27 175218.png'


const Certificate_tab = () => {
    const data = [
        {
            name: 'Introduction to internet of things',
            image: cert1,
            link: 'https://drive.google.com/file/d/1xJvbEL1_1_LH8cHmIG70qZydYFoy0rZ1/view?usp=sharing'
        },
        {
            name: 'Google cloud computing',
            image: cert2,
            link: 'https://drive.google.com/file/d/19pXjKsrm9PmswgqhYqADqZRyiKnEkJZV/view?usp=sharing'
        },
        {
            name: 'Data base management system',
            image: cert3,
            link: 'https://drive.google.com/file/d/17Q_GZ7G0FdHaYFhC3MgOrsWeds6r4nqz/view?usp=sharing'
        }
    ]

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
        {data.map((item, key)=>(
            <Certificate_card value={item} key={key}/>
        ))}
    </div>
  )
}

export default Certificate_tab