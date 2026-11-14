import { useEffect, useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import RowTable from "../components/RowTable";
import Table from "../components/Table";
import PageLayout from "../layouts/PageLayout";

export default function ContactPage() {
  const [dataMessage, setDataMessage] = useState(
    () => JSON.parse(localStorage.getItem("message-lists")) || [],
  );

  useEffect(() => {
    localStorage.setItem("message-lists", JSON.stringify(dataMessage));
  }, [dataMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const date = new Date().toLocaleDateString("id-ID");

    const temp = { name, email, message, date };

    setDataMessage((prev) => [...prev, temp]);

    e.target.reset();
  };

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
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 w-1/2 p-10 border-2 border-emerald-950 rounded-xl bg-emerald-50'>
          <Label htmlFor='name' labelText='Nama Lengkap'>
            <Input
              type='text'
              placeholder='Masukkan nama lengkap anda'
              id='name'
              name='name'
              required
            />
          </Label>
          <Label htmlFor='email' labelText='Email'>
            <Input
              type='email'
              placeholder='Masukkan alamat email anda'
              id='email'
              name='email'
              required
            />
          </Label>
          <Label htmlFor='message' labelText='Pesan'>
            <textarea
              name='message'
              id='message'
              placeholder='Tuliskan pertanyaan atau pesan Anda di sini.'
              className='w-full h-40 px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'
              required></textarea>
          </Label>
          <button
            type='submit'
            className='bg-emerald-900 rounded-lg px-4 py-2 text-white cursor-pointer'>
            Kirim Pesan
          </button>
        </form>
      </section>
      <section className='w-full flex flex-col gap-10 md:px-14 py-10 text-emerald-950'>
        <Table>
          {dataMessage.map((item, index) => {
            return (
              <RowTable
                key={index}
                order={index + 1}
                name={item.name}
                email={item.email}
                message={item.message}
                date={item.date}
              />
            );
          })}
        </Table>
      </section>
    </PageLayout>
  );
}
