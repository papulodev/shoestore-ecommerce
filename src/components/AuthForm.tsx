"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import SocialProviders from './SocialProviders';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from 'lucide-react';
import { formSchema, FormValues } from '@/lib/form-schema/schema';
import { Input } from './ui/input';
import { Button } from './ui/button';

type Props = {
  mode: "sign-in" | "sign-up";
  onSubmit: (formData: FormData) => Promise<{ ok: boolean; userId?: string } | void>;
};

function AuthForm({ mode, onSubmit }: Props) {

  const [show, setShow] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_user: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleSubmit = async (data: FormValues) => {
    // Convert FormValues to FormData
    const formData = new FormData();
    formData.append("name_user", data.name_user);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const result = await onSubmit(formData);

      if (result?.ok) router.push("/");
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="mt-3 text-heading-3 text-dark-900">
          {mode === "sign-in" ? "¡Bienvenido de nuevo!" : "¡Únete a Nike hoy!"}
        </h1>
        <p className="mt-1 text-body text-dark-700">
          {mode === "sign-in"
            ? "Inicia sesión para continuar tu viaje"
            : "Crea tu cuenta para comenzar tu viaje de fitness"}
        </p>
      </div>

      <SocialProviders variant={mode} />

      <div className="flex items-center gap-4">
        <hr className="h-px w-full border-0 bg-light-300" />
        <span className="shrink-0 text-caption text-dark-700">
          ó {mode === "sign-in" ? "iniciar sesión" : "registrarse"} con
        </span>
        <hr className="h-px w-full border-0 bg-light-300" />
      </div>

      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          {mode === "sign-up" && (
            <FormField
              control={form.control}
              name="name_user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='name_user'>Nombre</FormLabel>
                  <FormControl>
                    <Input id='name_user' type='text' autoComplete="name_user" placeholder="Ingresa tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='email'>Correo electrónico</FormLabel>
                <FormControl>
                  <Input id='email' type='email' autoComplete="email" placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='password'>Contraseña</FormLabel>
                <FormControl className='relative'>
                  <div className="relative">
                    <Input
                      id='password'
                      type={show ? "text" : "password"}
                      className="pr-10"
                      placeholder="Ingrese su contraseña"
                      minLength={6}
                      maxLength={20}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShow(!show)}
                      aria-label={
                        show
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {show ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {show
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-dark-900 rounded-full w-full px-6 py-3 cursor-pointer">
            {mode === "sign-in" ? "Iniciar sesión" : "Registrarse"}
          </Button>

          {mode === "sign-up" && (
            <p className="text-center text-footnote text-dark-700">
              Con su registro, usted acepta nuestros{" "}
              <a href="#" className="underline">
                Términos de Servicio
              </a>{" "}
              y{" "}
              <a href="#" className="underline">
                Política de Privacidad
              </a>
            </p>
          )}
        </form>
      </Form>
      <p className="text-center text-caption text-dark-700">
        {mode === "sign-in" ? "¿No estás registrado? " : "¿Ya tienes una cuenta? "}
        <Link href={mode === "sign-in" ? "/sign-up" : "/sign-in"} className="underline">
          {mode === "sign-in" ? "Registrarse" : "Iniciar Sesión"}
        </Link>
      </p>
    </div>
  )
}

export default AuthForm