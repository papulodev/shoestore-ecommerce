import Card from '@/components/Card';
import { products } from '@/constants/products';
import { getCurrentUser } from '@/lib/auth/actions';

async function Home() {

  const user = await getCurrentUser();
  console.log({ user });

  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <section aria-labelledby="latest" className="pb-12">
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