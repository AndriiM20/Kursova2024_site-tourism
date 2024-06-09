import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import '../../globals.css';


export default function Contact() {
  return (
    <body className='mMainbody'>
    <div className="mainbody">
      <div className="main">
      <Head>
        <title>Головна сторінка</title>
      </Head>
      <Navbar />
      <div className='text2'>
        <h3>Про нас</h3>
        <p className='pp'>Ми — провідний туристичний оператор, що спеціалізується на організації турів по Україні. Наша мета — показати вам усю красу, історію та культуру нашої неймовірної країни. З нами ви відчуєте справжній український колорит та створите незабутні спогади.</p>
        <h3>Чому обирають нас:</h3>
        <ul>
            <li><strong>Досвід та професіоналізм</strong>: Багаторічний досвід роботи на туристичному ринку.</li>
            <li><strong>Індивідуальний підхід</strong>: Підбираємо тури з урахуванням ваших побажань та потреб.</li>
            <li><strong>Висока якість обслуговування</strong>: Турбота про клієнтів на кожному етапі подорожі.</li>
            <li><strong>Гнучкість та адаптивність</strong>: Можливість зміни маршрутів та програм турів відповідно до ваших побажань.</li>
        </ul>
      </div>
      </div>
      <Footer />
    </div>
  </body>
  );
}
