import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia';
// import { h1 } from 'framer-motion/dist/m';
import React, { useState } from 'react'

const create = () => {

  const [judul_buku, setJudul_buku] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Inertia.post('/books', {judul_buku, pengarang, penerbit, deskripsi});
  };




  return (
    <Authenticated>
    {/* <div>
      <h1>Add New Book</h1>
        <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="title">Title</label>
              <input type="text" value={judul_buku} onChange={(e) => setJudul_buku(e.target.value)} id="judul_buku" required/><br></br>
              
              <label htmlFor="title">Pengarang</label>
              <input type="text" value={pengarang} onChange={(e) => setPengarang(e.target.value)} id="pengarang" required/><br></br>
              
              <label htmlFor="title">Penerbit</label>
              <input type="text" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} id="penerbit" required/><br></br>
              
              <label htmlFor="title">Deskripsi</label>
              <input type="text" value={deskripsi} onChange={(e) => setdeskripsi(e.target.value)} id="deskripsi" required/><br></br>
            </div>
            <button type="submit" className="">Tambah Buku</button>
        </form>
    </div> */}



<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Tambah Buku</h2>
      <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="judul_buku" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul Buku</label>
                  <input type="text" name="judul_buku" value={judul_buku} onChange={(e) => setJudul_buku(e.target.value)} id="judul_buku"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Judul Buku" required />
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pengarang</label>
                  <input type="pengarang" name="pengarang" value={pengarang} onChange={(e) => setPengarang(e.target.value)} id="pengarang"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pengarang" required />
              </div>
              <div className="w-full">
                  <label htmlFor="penerbit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">penerbit</label>
                  <input type="text" name="penerbit" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} id="penerbit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Penerbit" required />
              </div> 
              <div className="sm:col-span-2">
                  <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                  <textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} id="deskripsi" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Tambah Buku
          </button>
      </form>
  </div>
</section>
    </Authenticated>
  )
};

export default create