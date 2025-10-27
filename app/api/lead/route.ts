import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, mensaje } = body || {}
    if (!nombre || !email) return NextResponse.json({ ok: false, error: 'Faltan campos' }, { status: 400 })

    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `Nuevo lead E3:\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje||''}` })
      })
    }

    if (process.env.NOTION_API_KEY && process.env.NOTION_DB_LEADS) {
      const payload = {
        parent: { database_id: process.env.NOTION_DB_LEADS },
        properties: {
          Nombre: { title: [{ text: { content: nombre } }] },
          Email: { email },
          Mensaje: { rich_text: [{ text: { content: mensaje || '' } }] }
        }
      }
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify(payload)
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
