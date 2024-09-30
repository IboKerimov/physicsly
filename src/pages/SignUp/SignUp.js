import React from 'react'

const SignUp = () => {
  return (
    <div className='SignUp'>
        <div className='inner'>
            <h1>Sign Up</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type='text' placeholder='Full Name' />
            </form>
        </div>
    </div>
  )
}

export default SignUp