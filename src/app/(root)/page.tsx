import Card from '@/components/Card';
import { products } from '@/constants/products';
import { getCurrentUser } from '@/lib/auth/actions';
import heroShoe from '../../../public/hero-shoe.png';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

async function Home() {

  const user = await getCurrentUser();
  console.log({ user });

  return (
    <main className="mx-auto max-w-[1440px] font-jost">
      <section className="relative flex hero-bg w-full items-center overflow-hidden p-4 sm:p-6 lg:p-8">
        <div className="lg:w-1/2 text-dark-900">
          <span className='linear-gradient font-medium text-[20px] tracking-normal leading-7'>Atrevido & Deportivo</span>
          <h1 className='capitalize font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-2px] leading-[78px] my-5'>Estilo que se mueve contigo.</h1>
          <p className='text-[20px] md:text-2xl tracking-[-1px] leading-9'>No solo estilo. No solo comodidad. Calzado que se adapta a la perfección a cada uno de tus pasos.</p>
          <Button size="lg" className='mt-8 bg-dark-900 font-medium rounded-full text-light-100 cursor-pointer'>
            Encuentra tu par
          </Button>
        </div>
        <div className="hidden lg:w-1/2 lg:flex items-center justify-center aspect-square ">
          <Image
            width={360}
            height={360}
            src={heroShoe}
            alt="Hero Shoe"
            className="w-[688px] h-[461px] aspect-square bg-cover bg-center" />
        </div>
      </section>
      <section aria-labelledby="latest" className="pb-12 p-4 sm:p-6 lg:p-8">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Ultimos productos
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              meta={p.meta}
              imageSrc={p.imageSrc}
              price={p.price}
              badge={p.badge}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home