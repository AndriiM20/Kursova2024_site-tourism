import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import '../../globals.css';

export default function Contact() {
  return (
    <body>
    <div className="mainbody">
      <div className="main">
      <Head>
        <title>Контакти</title>
      </Head>
      <Navbar />
      <div className='text2'>
        <div className='Contact'>
          <h2>Контакти</h2>
          <p><strong>Адреса</strong>: м. Київ, вул. Володимирська, 15</p>
          <p><strong>Телефон</strong>: +38 (044) 123-45-67</p>
          <p><strong>Електронна пошта</strong>: <a href="mailto:test@tourukraine.ua">test@tourukraine.ua</a></p>
          <p><strong>Соціальні мережі</strong>: <a href="https://www.instagram.com/">Instagram</a></p>
        </div>
      </div>
      
      </div>
      <Footer />
    </div>
  </body>
  );
}