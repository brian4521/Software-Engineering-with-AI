import {useForm, type SubmitHandler} from 'react-hook-form'

type FormValues = {
  email: string;
  password: string;
};

const App = () => {
  const { register, handleSubmit,setError, formState:{errors, isSubmitting}  } = useForm<FormValues>({
    defaultValues:{
      email: "test@email.com",
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async(data) =>{
    try{
      await new Promise((resolve) => setTimeout(resolve,1000))
      throw new Error()
      console.log(data)

    }
    catch(error){
      setError("root",{
        message:"This email is already taken"
      })

    }
   
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <input {...register("email",{
        required: "email is required",
        validate: (value)=> {
          if(!value.includes("@")){
            return "Email must include @"
          }
          return true;
        },
      })} type="text" placeholder='email' />
      {errors.email && <div>{errors.email.message}</div> }
      <input {...register("password",{
        required:"password is required",
        minLength:{
          value:8,
          message:"at least 8 character is required"
        },  
      })} type="password" placeholder='password' />
      {errors.password && <div>{errors.password.message}</div> }
      <button disabled={isSubmitting} type='submit'>{isSubmitting ? "wait until submits..." : "Submit"}</button>
      {errors.root && <div>{errors.root.message}</div> }
    </form>
  )
}

export default App