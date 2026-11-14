import PageLayout from "../layouts/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <section className='w-full flex flex-col gap-10 md:px-14 py-20 text-emerald-950'>
        <h1 className='md:text-4xl font-bold'>Hubungi Kami</h1>
        <div className='flex flex-col gap-3'>
          <h2 className='md:text-2xl font-medium'>Ada yang Bisa Kami Bantu?</h2>
          <div className='flex flex-col gap-2.5 md:text-base max-w-4xl'>
            <p>
              Punya pertanyaan atau ingin mengetahui informasi produk kami?
              Silakan kirim pesan melalui formulir di bawah ini. Kami siap
              membantu Anda!
            </p>
          </div>
        </div>
        <form className='flex flex-col gap-5 w-1/2 p-10 border-2 border-emerald-950 rounded-xl bg-emerald-50'>
          <label
            htmlFor='name'
            className='w-full flex flex-col gap-1 text-xs font-medium uppercase'>
            Nama Lengkap
            <input
              type='text'
              placeholder='Masukkan nama lengkap anda'
              id='name'
              name='name'
              className='w-full px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'
            />
          </label>
          <label
            htmlFor='email'
            className='w-full flex flex-col gap-1 text-xs font-medium uppercase'>
            Email
            <input
              type='email'
              placeholder='Masukkan alamat email anda'
              id='email'
              name='email'
              className='w-full px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'
            />
          </label>
          <label
            htmlFor='message'
            className='w-full flex flex-col gap-1 text-xs font-medium uppercase'>
            Pesan
            <textarea
              name='message'
              id='message'
              placeholder='Tuliskan pertanyaan atau pesan Anda di sini.'
              className='w-full h-40 px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'></textarea>
          </label>
          <button
            type='submit'
            className='bg-emerald-900 rounded-lg px-4 py-2 text-white cursor-pointer'>
            Kirim Pesan
          </button>
        </form>
      </section>
    </PageLayout>
  );
}
