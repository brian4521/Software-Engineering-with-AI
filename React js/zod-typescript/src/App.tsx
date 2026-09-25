import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {email, z} from "zod";

const userSchema = z.object({
  firstName:z.string().nullish(),
  email:z.string().email(),
  profileUrl:z.string().url(),
  age:z.number().min(1),
  fruits:z.array(z.string()),
  settings: z.object({
    isLiked: z.boolean(),
  })
})

type UserForm = z.infer<typeof userSchema>



const App = () => {
  const form = useForm<UserForm>({
    resolver: zodResolver(userSchema)
  });

  return (
    <div>App</div>
  )
} 

export default App
