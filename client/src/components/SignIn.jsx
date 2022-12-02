// import { useState } from 'react'

// //SignInUser accepts one argument of data. Similar to Register, data is an object containing the following information:
// //email
// //password
// import { SignInUser } from '../services/Auth'

// // Finally, we'll redirect the user to a protected page with a URL of /feed. We'll need to import useNavigate again as well:
// import { useNavigate } from 'react-router-dom'

// export default function SignIn (props) {
export default function SignIn () {
    
            // let navigate = useNavigate()
        
            // const [formValues, setFormValues] = useState({ email: '', password: '' })
        
            // const handleChange = (e) => {
            // setFormValues({ ...formValues, [e.target.name]: e.target.value })
            // }
        
            // const handleSubmit = async (e) => {
            // e.preventDefault()
        
            // //In the handleSubmit, we'll invoke the SignInUser function, provide the formValues state as an argument, and capture the return value with a variable called payload:
            // const payload = await SignInUser(formValues)
            // //Next we'll reset the form once the request completes successfully:
            // setFormValues({ email: '', password: '' })
            // //We then take the payload and use it to update our user state in App.js with the setUser method we passed in as props:
            // props.setUser(payload)
            // //Once our user has been set, we'll toggle the authenticated state using toggleAuthenticated:
            // props.toggleAuthenticated(true)
            // navigate('/Feed')
            // }
        










    return (
        <div id='SignInContent'>

        <div id="SignInInfo">

            <div id="SignInInfoLogo">
            <h1>❄️Holly-Gram❄️</h1>
            </div>

            <div id="SignInInfoInput">
                <form id="SignInInfoForm" 
                // onSubmit={handleSubmit}
                >
                    <div>
                        <label>
                            Email
                        </label>

                        <input
                            // onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                            // value={formValues.email}
                            required
                            />
                    </div>

                    <div>
                        <label>
                            Password
                        </label>

                        <input
                        // onChange={handleChange}
                        type="password"
                        name="password"
                        // value={formValues.password}
                        required
                        />

                    </div>

                    <button 
                    // disabled={!formValues.email || !formValues.password}
                    >
                        Sign In
                    </button>

                </form>
            </div>

        </div>


    </div>
)}