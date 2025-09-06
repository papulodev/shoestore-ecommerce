import z from "zod";

export const formSchema = z.object({
  name_user: z.string().min(1, { message: "El nombre no puede estar vacio." }).max(30, { message: "Maximo 30 caracteres." }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  password: z
    .string()
    .min(1, { message: "La contraseña no puede estar vacia." })
    .max(20, { message: "Maximo 20 caracteres." })
    .regex(/^.{8,20}$/, {
      message: "Minimo 8 y maximo 20 caracteres.",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "Agregar al menos una mayuscula.",
    })
    .regex(/(?=.*[a-z])/, {
      message: "Agregar al menos una minuscula.",
    })
    .regex(/(?=.*\d)/, {
      message: "Agregar al menos un numero.",
    })
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
      message: "Agregar al menos un caracter especial.($&+,:;=?,etc.)",
    }),
});

export type FormValues = z.infer<typeof formSchema>;