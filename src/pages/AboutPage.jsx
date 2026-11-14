import PageLayout from "../layouts/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className='w-full flex flex-col gap-10 md:px-14 py-20 bg-emerald-950 text-white'>
        <div className='flex flex-col gap-10'>
          <h1 className='md:text-4xl font-bold'>Tentang Kami</h1>
          <div className='flex flex-col gap-3'>
            <h2 className='md:text-2xl font-medium'>
              Belanja Kebutuhan Sehari-hari Jadi Lebih Mudah
            </h2>
            <div className='flex flex-col gap-2.5 md:text-base max-w-4xl'>
              <p>
                Selamat datang di Toko Kelontong Kami, tempat untuk memenuhi
                berbagai kebutuhan sehari-hari Anda dengan mudah, praktis, dan
                harga yang bersahabat.
              </p>
              <p>
                Kami hadir untuk menyediakan beragam pilihan produk kebutuhan
                rumah tangga, mulai dari sembako, makanan ringan, minuman,
                perlengkapan dapur, hingga berbagai kebutuhan harian lainnya.
              </p>
              <p>
                Kami percaya bahwa mendapatkan kebutuhan berkualitas tidak harus
                mahal dan merepotkan. Oleh karena itu, kami selalu berusaha
                menghadirkan produk yang lengkap, harga yang terjangkau, serta
                pelayanan yang ramah untuk setiap pelanggan.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='md:text-2xl font-medium'>Visi Kami</h2>
            <div className='flex flex-col gap-2.5 md:text-base max-w-4xl'>
              <p>
                Menjadi toko kelontong pilihan masyarakat yang selalu dapat
                diandalkan dalam memenuhi kebutuhan sehari-hari dengan produk
                lengkap, harga bersahabat, dan pelayanan terbaik.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='md:text-2xl font-medium'>Misi Kami</h2>
            <div className='flex flex-col gap-2.5 md:text-base max-w-4xl'>
              <ul className='list-disc list-outside ml-10'>
                <li>
                  Menyediakan berbagai kebutuhan sehari-hari dalam satu tempat.
                </li>
                <li>
                  Menawarkan produk dengan harga yang terjangkau dan kompetitif.
                </li>
                <li>Menjaga kualitas dan ketersediaan produk.</li>
                <li>Memberikan pelayanan yang ramah, cepat, dan memuaskan.</li>
                <li>
                  Membangun hubungan baik dan kepercayaan dengan setiap
                  pelanggan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
