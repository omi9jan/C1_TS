import React,{useState} from 'react'

const initialState = {
  email:"",
  password :""
}

// should receive the handleSubmit callback function through props
const LoginForm = () => {
  // create a form, to take the user email, and password
  
  const [formState, setFormstate] = useState<String>(initialState);

  const handleEmailChange = (e : any) => {
    const {name, value} = e.target
      // console.log(name,value)
      setFormstate({...formState, [name]: value})
  }

  const handlePasswordChange = (e : any) => {
    const {name, value} = e.target
      // console.log(name,value)
      setFormstate({...formState, [name]: value})
  }

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = () => {}

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log(e.target.value)
}

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <form onSubmit={handleSubmit}>
      <input placeholder='Email'
                    name="email" 
                    type="text" 
                    onChange={handleEmailChange}
                    value={formState.email} 
                  />
              <br/>
              <input placeholder='Password'
                    name="password" 
                    type="password" 
                    value={formState.password}
                    onChange={handlePasswordChange} 
                  />
              <br/>
              <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
