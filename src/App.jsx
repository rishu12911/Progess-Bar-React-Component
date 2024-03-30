// // Create a component called ProgressBar which displays a progress bar. The progress bar should have the following styling applied:

// // A width of 100%
// // A height of 20px
// // A border radius of 5px
// // The completed bit should be green
// // The remaining bit should be lightgrey
// // You add the CSS to the component using Styled Components or using Inline CSS or adding identifiers and using the css file. It's totally up to you

// // The component should accept a percent prop which is used to determine how many percentage of the progress bar to fill with green colour.


import React, { useState } from 'react'
import ProgessBar from './ProgessBar'


const App = () => {
  const [progress,setProgess]=useState(0);

  const increaseProgress=()=>{
    if(progress<=90){
    setProgess(prevProgress=>prevProgress+20)}
  }
  return (
    <div>
      
      <ProgessBar percentage={progress}/>
      <button onMouseEnter={increaseProgress}> Progress</button>
    </div>
  )
}

export default App



// //name
// //age
//email
// //language checkbox
// //profesion dropdown
// //description

// import React, { useState } from 'react'

// const App = () => {
//   const [formData,setFormData]= useState({
//     name:"",
//     age:"",
//     email:"",
    
//   })
//   const [language,setLanguage]=useState([]);
//   const handleSubmit=(e)=>{
//   e.preventDefault()
//   setDataBase([...dataBase,formData]);
//   setFormData({
//     name:"",
//     age:"",
//     email:"",
//   })
//   console.log("submited")

//   }

//   const handleChange=(e)=>{
//     const {value,name}=e.target;
//     setFormData({...formData,[name]:value})

//   }
//   const handleLang=()=>{

//   }

//   const [dataBase,setDataBase]= useState([]);
//   const [errors,setErrors]= useState({})
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type='text' placeholder='name' name='name' value={formData.name} onChange={handleChange}/>
//         <input type='number' placeholder='age' name='age'value={formData.age} pattern='[0-9]{2}' onChange={handleChange}/>
//         <input type='email' placeholder='name' name='email' value={formData.email} onChange={handleChange}/>
        
//           <input type='checkbox' value="Hindi" onChange={handleLang}/>
//           <input type='checkbox' value="Hindi" onChange={handleLang}/>
          
        

//         <button type='submit'> Submit</button>

//       </form>
//     </div>
//   )
// }

// export default App