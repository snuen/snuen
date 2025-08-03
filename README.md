# Hi, [Sungjoon](https://snuen.dev/) here 🎐

<img src="./concept-image.jpg" alt="concept image" width="240" height="192" align="right" />

- 💻 Freelance front-end developer building a internal operations support SasS for travel industry
- ⚛️ Uses declarative UI frameworks like React, Vue, Svelte
- 📷 Logs his life with compact digital camera
- 🌱 Seeks a right sized life
- 😄 Pronouns: he/him

## Development

See [CLAUDE.md](./CLAUDE.md) for comprehensive development documentation.

## AWS Deployment

This project is configured for AWS Amplify deployment with hybrid rendering:

### Prerequisites

- AWS account with Amplify access
- Resend API key for contact form functionality

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
RESEND_API_KEY=your_resend_api_key_here
EMAIL_RECIPIENT=your_email@example.com
```

### Deployment Steps

1. Connect repository to AWS Amplify
2. Configure environment variables in Amplify console
3. Deploy using the included `amplify.yml` build configuration

The build uses Node.js adapter for server-side contact form processing while prerendering static pages for optimal performance.
