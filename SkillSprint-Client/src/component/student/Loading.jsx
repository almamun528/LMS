import React from 'react'

const Loading = () => {
  return (
    <section className="max-h-screen w-full">
      <main className='space-x-4'>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </main>
    </section>
  );
}

export default Loading
