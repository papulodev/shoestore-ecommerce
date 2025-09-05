import Image from "next/image";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <section className="hidden lg:flex flex-col justify-between bg-dark-900 text-light-100 p-10">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-md inline-flex items-center justify-center">
            <Image src="/logo.svg" alt="Nike" width={35} height={35} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-heading-2">Solo hazlo</h2>
          <p className="max-w-md text-lead text-light-300">
            Únete a millones de atletas y entusiastas del fitness que confían en Nike para mejorar su rendimiento.
          </p>
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-light-100/90" />
            <span className="h-2 w-2 rounded-full bg-light-100/50" />
            <span className="h-2 w-2 rounded-full bg-light-100/50" />
          </div>
        </div>

        <p className="text-footnote text-light-400">© 2025 PapuloDev. Todos los derechos reservados.</p>
      </section>

      <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}

export default AuthLayout