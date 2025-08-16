# Hi, [Sungjoon](https://snuen.dev/) here 🎐

<img src="./concept-image.jpg" alt="concept image" width="240" height="192" align="right" />

- 💻 Freelance front-end developer building a internal operations support SasS for travel industry
- ⚛️ Uses declarative UI frameworks like React, Vue, Svelte
- 📷 Logs his life with compact digital camera
- 🌱 Seeks a right sized life
- 😄 Pronouns: he/him

## Development

See [CLAUDE.md](./CLAUDE.md) for comprehensive development documentation.

## Deployment

This project is deployed on Vercel. To set up your own deployment:

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_RECIPIENT=your_email@example.com
```

### Deploy to Vercel

1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The build uses `@sveltejs/adapter-auto` which automatically detects Vercel for optimal deployment.
