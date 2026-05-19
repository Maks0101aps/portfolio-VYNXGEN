# VYNXGEN Portfolio

Портфоліо українською мовою на Next.js App Router, React, Turbopack за замовчуванням у `next dev`, GSAP-анімаціях і адаптації під Vercel.

## Запуск

```bash
npm install
npm run dev
```

## Vercel

1. Імпортуй репозиторій у Vercel.
2. Framework Preset: `Next.js`.
3. Build command: `npm run build`.
4. Output directory залишити стандартним.

## SSH deploy

Workflow `.github/workflows/ssh-deploy.yml` запускається вручну через GitHub Actions і очікує secrets:

- `SSH_HOST`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_PORT`
- `SSH_APP_PATH`

На сервері потрібні Node.js, npm, git і pm2.
