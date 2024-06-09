import Head from 'next/head';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Destinations from './components/DestinationCard/DestinationCard';
import FormTicket from './components/FormTicket/formticket';
import './globals.css';

const Home: React.FC = () => {
  return (
  <body>
    <div className="mainbody">
      <div className="main">
      <Head>
        <title>Головна сторінка</title>
      </Head>
      <Navbar />

      <Destinations />
      <FormTicket />
      <div className='text2'>
        <p><strong>FAQ</strong></p>
        <ul className='text3'>
          <li><strong>Чи можна змінити дату поїздки після бронювання?:</strong>
            <p>Так, ви можете змінити дату поїздки, але це може залежати від наявності місць та умов туроператора. Ми рекомендуємо зв'язатися з нами якнайшвидше для уточнення деталей.</p>
          </li>
          <li><strong>Як забронювати місце?</strong>
            <p>Ви можете забронювати тур через наш вебсайт, заповнивши форму бронювання. Впродовж 1-2 днів, Вам зателефонує менеджер для підтвердження даних та подальших інструкцій. Також можете зв'язатися з нами по телефону або електронній пошті для особистої консультації та допомоги з бронюванням.</p>
          </li>
          <li><strong>Чи можу я замовити індивідуальний тур?</strong>
            <p>Так, ми пропонуємо індивідуальні тури, які можна адаптувати під ваші інтереси та потреби. Зв'яжіться з нами, щоб обговорити ваші побажання та отримати персоналізовану пропозицію.</p>
          </li>
        </ul>
      </div>
      </div>
      <Footer />
    </div>
  </body>
  );
};

export default Home;
