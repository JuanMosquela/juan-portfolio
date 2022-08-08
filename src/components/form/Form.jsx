import { Formik, useFormik } from "formik"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider";
import * as yup from 'yup';
import emailjs, {send} from 'emailjs-com'
import './form.css'

const Form = () => { 

   

  const { theme} = useContext(ThemeContext)

   const basicSchemas = yup.object().shape({
   
    firstName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),    
    email: yup.string().email('Debes ingresar un email valido').required('Este campo es requerido'),
    message: yup.string().min(2, 'Mensaje muy corto!').max(100, 'Mensaje muy largo!').required('Este campo es requerido')
  })

  function SendEmail(object) {
    console.log(object)
    emailjs.send("service_ijebytp", "template_sr0vrs4", object,"uOFt-AsEDNOS6pJPk" )
        .then((result) => {
            console.log(result.text)
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
       console.log(values)
       SendEmail(values)
       resetForm()
    },    
    validationSchema: basicSchemas  

  })   
  

  return (
    <section className="contact">

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
              style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} 
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
              style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} 
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
              style={{backgroundColor: theme ? '#FFF' : '#e4dede'}} 
              placeholder='Ingresa tu mensaje'>
            </textarea>
              { touched.message && errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Enviar</button>
          
        </form>

          
    
    
    </section>
  )
}
export default Form