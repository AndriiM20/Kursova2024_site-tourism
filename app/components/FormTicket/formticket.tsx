'use client'
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import style from './formticket.module.css';

function FormTicket() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    tour: '',
    numh: '',
    date: ''
  })

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log("Submit ", [formData])
    try{
      const res = await fetch('/api/bickets', {
        method:"POST",
        body:JSON.stringify({formData})
      })
      if (!res.ok) {
        throw new Error(await res.text())
      } else {
        alert("Ваша форма відправлена.")
        return
      }
    }catch (e:any){
      console.error(e)
    }
  }

  const [formOut, setOut] = useState([]);
  useEffect(() => {
     console.log("now using useEffect!!")
    fetch('/api/Destination')
    .then(res => res.json())
    .then(res => {
      console.log({res})
      setOut(res.results);
    })
      
  }, [])

  const handleFormChange = async ({target} : {target:any}) => {
    console.log("formChange ", target.name , target.value)
    setFormData((prev) => ({...prev, [target.name]:target.value}))
  }

  console.log([formData])
  return (
    <div className={style.text2}>
    <Form onSubmit={handleSubmit}>
      <h3 className={style.h3}>Забронюйте свій тур вже сьогодні!</h3>
      
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Ім'я</Form.Label>
          <Form.Control type="text" name='name' placeholder="Веведіть ім'я" onChange={handleFormChange} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Прізвище</Form.Label>
          <Form.Control type="text" name='lastname' placeholder="Введіть прізвище" onChange={handleFormChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' placeholder="Веведіть Email" onChange={handleFormChange}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Номер телефону</Form.Label>
          <Form.Control type="text" name='phone' placeholder="Введіть номер телефону" onChange={handleFormChange}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Тур</Form.Label>
          <Form.Select  name='tour' onChange={handleFormChange}>
            <option>Оберіть тур</option>
          {formOut.map((fOut:any) => (
            <option value={fOut.ID_Tour}>{fOut.NameTour}</option>
          ))}
          </Form.Select>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>К-сть людей</Form.Label>
          <Form.Control type="number" name='numh' placeholder="Введіть кількість людей" onChange={handleFormChange}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>На яку дату бажаєте тур?</Form.Label>
          <Form.Control type="date" name='date' onChange={handleFormChange}/>
        </Form.Group>
      </Row>

      <Button variant="success" type="submit">
        Відправити
      </Button>
    </Form>
    </div>
  );
}

export default FormTicket;