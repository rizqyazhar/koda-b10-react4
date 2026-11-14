import { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import Card from "../components/Card";

const URL = "https://dummyjson.com/products";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <PageLayout>
      <section className='flex flex-col justify-center items-center gap-10 px-14 py-30'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <span className='text-sm font-medium uppercase text-emerald-500 tracking-wide'>
            Belanja Mudah & Hemat
          </span>
          <h1 className='text-center md:text-4xl font-bold text-emerald-800'>
            Semua Kebutuhan Harian, Ada di Sini!
          </h1>
          <p className='md:text-base text-emerald-950 max-w-4xl text-center'>
            Temukan berbagai kebutuhan sehari-hari mulai dari sembako, makanan
            ringan, minuman, hingga perlengkapan rumah tangga. Belanja lebih
            mudah, lengkap, dan hemat tanpa harus keluar jauh dari rumah.
          </p>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <button className='bg-emerald-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:opacity-80'>
            Belanja Sekarang
          </button>
          <button className='rounded-lg bg-emerald-50 text-emerald-950 px-4 py-2 cursor-pointer hover:opacity-80'>
            Lihat Produk
          </button>
        </div>
      </section>
      <section className='flex flex-col gap-10 w-11/12 px-10 py-20 rounded-t-4xl bg-emerald-950'>
        <div>
          <h2 className='text-2xl text-emerald-50 font-medium'>
            Produk kita ada
          </h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {products.slice(15).map((product) => {
            return (
              <Card
                key={product.id}
                data={product}
                imgPlaceH={"/src/assets/image-placeholder.svg"}
              />
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
