# E3 Landing (Next.js + Tailwind)

## Despliegue rápido en Vercel
1. Crea un repo en GitHub y sube estos archivos, o sube el ZIP directamente en Vercel (Import Project → arrastra ZIP).
2. Variables en **Vercel → Settings → Environment Variables** (opcionales):
   - `SLACK_WEBHOOK_URL` = https://hooks.slack.com/services/...
   - `NOTION_API_KEY` = secret_xxx
   - `NOTION_DB_LEADS` = id de la base de datos de leads (Notion)
3. Deploy. Ve a `/contacto` y prueba el formulario.

## Desarrollo local
```
npm install
npm run dev
# http://localhost:3000
```

## Notas
- La API de Notion requiere una DB con propiedades: `Nombre` (title), `Email` (email), `Mensaje` (rich_text).
- Si no configuras variables, el formulario funciona sin registrar en Slack/Notion.
