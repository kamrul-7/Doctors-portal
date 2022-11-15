import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))


    }
    return (
        <div className='h[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center'> SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: "Name is Required!!" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email is required!!" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'Password is requirer!!', minLength: { value: 6, message: 'Password must be 6 Character long !!' },
                            pattern: { value: /^(?=.*[A-Z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])(?=.*[0-9])/, message: 'Password must be uppercase ,lowercase number and special character!!' }
                        })} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='sign Up' type="submit" />
                </form>
                <p className='mt-6'>Already have an Account? <Link className='text-primary' to='/login'> Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Signup;