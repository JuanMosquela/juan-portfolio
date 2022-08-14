import { useFormik } from "formik"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeProvider";
import * as yup from 'yup';
import emailjs, {send} from 'emailjs-com'
import './form.css'
import Title from "../title/Title";

const Form = () => { 

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState(false)

   

  const { theme} = useContext(ThemeContext)

   const basicSchemas = yup.object().shape({
   
    firstName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),    
    email: yup.string().email('Debes ingresar un email valido').required('Este campo es requerido'),
    message: yup.string().min(2, 'Mensaje muy corto!').max(100, 'Mensaje muy largo!').required('Este campo es requerido')
  })

    const SendEmail = (object) => {
      console.log(object)
      setLoading(true)
      
      emailjs.send("service_ijebytp", "template_sr0vrs4", object,"uOFt-AsEDNOS6pJPk" )
      
          .then((result) => {
            setTimeout(() => {
              
              setLoading(false)
              resetForm()
              setForm(true)
              setInterval(() => {
                setForm(false)
                
              }, 3000);
              
              
            }, 1000);
          }, (error) => {
              console.log(error.text)
          })
  }
  

  const {values, errors,handleSubmit, handleChange, handleBlur, touched, resetForm} = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      message:''
    },
    onSubmit: (values) => {
      setLoading(true)
      SendEmail(values)     
       
    },    
    validationSchema: basicSchemas  

  })  
  

  return (
    <section className="contact">
        <Title title='Contacto :' span='¿Te gusto mi trabajo?' />

        <form         
          className="form-container" 
          onSubmit={handleSubmit}>                   
          
          <div className="input-group">
            <label htmlFor="firstName">Nombre:</label>
            <input 
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text" 
              style={{backgroundColor: theme ? '#FFF' : '#e2e1e1'}}
               
              placeholder='Ingresa tu nombre' />
              { touched.firstName && errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email" 
              style={{backgroundColor: theme ? '#FFF' : '#e2e1e1'}} 
              placeholder='Ingresa tu email' />
              { touched.email && errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="message">Mensaje:</label>              
            <textarea 
              name="message"
              value={values.message}
              onChange={handleChange} 
              onBlur={handleBlur}
              type='text' 
              cols="10" 
              rows="7" 
              style={{backgroundColor: theme ? '#FFF' : '#e2e1e1'}} 
              placeholder='Ingresa tu mensaje'>
            </textarea>
              { touched.message && errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Enviar</button>
          
        </form>
        {form ? <span className="success">Mensaje enviado exitosamente</span> : null}
        

          
    
    
    </section>
  )
}
export default Form