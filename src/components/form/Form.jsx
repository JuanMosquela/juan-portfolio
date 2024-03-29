import { useFormik } from "formik"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeProvider";
import * as yup from 'yup';
import emailjs, {send} from 'emailjs-com'
import './form.css'
import Title from "../title/Title";
import toast, { Toaster } from 'react-hot-toast';
import { Button, CircularProgress } from "@mui/material";

const Form = () => {   

  const [loading, setLoading] = useState(false)

  const { theme} = useContext(ThemeContext)

   const basicSchemas = yup.object().shape({
   
    firstName: yup.string().min(2, 'Mensaje muy corto!').max(50, 'Mensaje muy largo!').required('Este campo es requerido'),    
    email: yup.string().email('Debes ingresar un email valido').required('Este campo es requerido'),
    message: yup.string().min(2, 'Mensaje muy corto!').max(100, 'Mensaje muy largo!').required('Este campo es requerido')
  })

    const SendEmail = (object) => {
           
      
      let promise = emailjs.send("service_ijebytp", "template_sr0vrs4", object,"uOFt-AsEDNOS6pJPk" )
      
          .then((result) => {
            resetForm() 
          }, (error) => {
              console.log(error.text)
          })
          toast.promise(promise, {
            loading: 'Enviando...',
            success:'Mensaje enviado',
            error: 'Error'
          },
          {
            style:{              
              backgroundColor:'#FFF',
              padding:'5px 15px',
              boxShadow: '1px 5px 15px rgba(0,0,0,.2)' }
            }
          )
  }


  
  

  const {values, errors,handleSubmit, handleChange, handleBlur, touched, resetForm} = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      message:''
    },
    onSubmit: (values) => { 
      
      console.log(loading)
      
      try {
        SendEmail(values)
        
        
      } catch (error) {
         console.log(error)
         
        
      }finally{
        setLoading(false)
      }     
        
       
    },    
    validationSchema: basicSchemas  

  })  

  
  

  return (
    <section className="contact" style={{ backgroundColor: theme ? "var(--blue-dark-color)" : '#FFF' }}>
        <Title title='Contacto' span='¿te gusto mi trabajo?' />

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
              style={{backgroundColor: theme ? '#FFF' : '#e4e4e4'}}
               
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
              style={{backgroundColor: theme ? '#FFF' : '#e4e4e4'}} 
              placeholder='Ingresa tu email' />
              { touched.email && errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group textarea">
            <label htmlFor="message">Mensaje:</label>              
            <textarea 
              name="message"
              value={values.message}
              onChange={handleChange} 
              onBlur={handleBlur}
              type='text' 
              cols="10" 
              rows="7" 
              style={{backgroundColor: theme ? '#FFF' : '#e4e4e4'}} 
              placeholder='Ingresa tu mensaje'>
            </textarea>
              { touched.message && errors.message && <span className="error">{errors.message}</span>}
          </div>
          {
            loading 
            ? 
            <button type="submit" >
              Enviando
              <CircularProgress />
            </button> 
            : 
            <button onClick={() => setLoading(true)}  type="submit">Enviar</button>
          }
          
          
          
          
        </form>
        

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#f5f5f5',
              color: '#333',
              fontSize:'1.6rem',
              minWidth:'200px'
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        

          
    
    
    </section>
  )
}
export default Form