'use client'
import Image from 'next/image';
import styles from './Destination.module.css'
import { useEffect, useState } from 'react';
import '../../globals.css';


export function Desti() {
  const [formData, setDest] = useState([]);

  useEffect(() => {
     console.log("now using useEffect!!")
    fetch('/api/Destination')
    .then(res => res.json())
    .then(res => {
      console.log({res})
      setDest(res.results);
    })
      
  }, [])
  return (
    <section className={styles.section}>
      <h3 className='text2'>Відкрийте для себе найкраще з України: Незабутній тур по країні</h3>
      <div className={styles.destinations}>
        {formData.map((dest:any) => (
          <div key={dest} className={styles.destination}>
            <Image src={dest.Picture} alt={dest.NameTour} width={300} height={200} />
            <h3>{dest.NameTour}</h3>
            <p>{dest.Description}</p>
            <p>{dest.Days} днів</p>
            <p>{dest.Location}</p>
            <h3>{dest.Price} грн</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Desti;