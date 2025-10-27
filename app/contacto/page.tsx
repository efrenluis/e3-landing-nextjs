'use client'
import { useState } from 'react'

export default function Page() {
  const [status, setStatus] = useState<string|undefined>()

  async function onSubmit(e: any) {
    e.preventDefault()
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      mensaje: e.target.mensaje.value
    }
    setStatus('Enviando...')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Error API')
      setStatus('Enviado. Te contactaremos pronto.')
      e.target.reset()
    } catch (err) {
      setStatus('Error al enviar. Revisa configuración.')
    }
  }

  return (
    <section className="container pt-16 max-w-2xl">
      <h1>Contacto</h1>
      <p className="mt-4 text-gray-700">Déjanos tus datos y agenda, te contactamos.</p>
      <form onSubmit={onSubmit} className="card mt-6 space-y-4">
        <div>
          <label className="block text-sm">Nombre</label>
          <input name="nombre" required className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" name="email" required className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm">Mensaje</label>
          <textarea name="mensaje" rows={4} className="w-full border rounded-lg p-2" />
        </div>
        <button className="btn-primary">Enviar</button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </section>
  )
}
