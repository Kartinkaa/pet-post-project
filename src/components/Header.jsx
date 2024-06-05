import React from 'react'

export default function Header() {
  return (
    <header className="relative p-10 mb-5">
      <div className="absolute inset-0 bg-gradient-to-b-slate -z-10"></div>
      <h1 className="text-5xl mb-7 font-bold">JSONPlaceholder API Dashboard</h1>
      <h3 className="text-3xl">Explore data from JSONPlaceholder API</h3>
    </header>
  )
}
