import { useForm } from "react-hook-form";
import { R } from "./component/controlledFrom";
import z from "zod";

const schema = z
  .object({
    name: z.string().min(5),
    age: z.coerce.number().max(100),
    status: z.enum(["active", "inactive"]),
  })
  .refine((data) => data.age >= 18, {
    message: "Age must be at least 18",
    path: ["age"],
  });

const output = schema.safeParse({
  name: "abcde",
  age: "15",
  status: "active",
});

console.log(output);

if (output.success) {
  console.log("output", output.data);
} else {
  console.log("err", output.error.issues);
}
