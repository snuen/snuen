# AWS Deployment Guide

## Phase 1: AWS Amplify Deployment

### Prerequisites Checklist

- [ ] AWS account created and configured
- [ ] AWS CLI installed and configured (optional but recommended)
- [ ] GitHub repository pushed with latest changes
- [ ] Resend API key obtained
- [ ] Target email address for contact form identified

### Step-by-Step Deployment

#### 1. Create AWS Amplify App

1. **Navigate to AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "Create new app" → "Host web app"

2. **Connect Repository**
   - Select "GitHub" as source
   - Authorize AWS Amplify to access your GitHub account
   - Select repository: `snuen`
   - Select branch: `v3` (or your main branch)

3. **Configure Build Settings**
   - Amplify should auto-detect the `amplify.yml` file
   - Verify the build configuration matches:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - corepack enable
             - corepack use pnpm@10.13.1
             - pnpm install
         build:
           commands:
             - pnpm run build
       artifacts:
         baseDirectory: build
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
           - .pnpm-store/**/*
     ```

#### 2. Configure Environment Variables

In the Amplify console, go to App Settings → Environment variables:

| Key               | Value                   | Notes                                     |
| ----------------- | ----------------------- | ----------------------------------------- |
| `RESEND_API_KEY`  | `re_xxxxxxxxxx`         | Your Resend API key                       |
| `EMAIL_RECIPIENT` | `your-email@domain.com` | Email to receive contact form submissions |

#### 3. Deploy and Test

1. **Initial Deployment**
   - Click "Save and deploy"
   - Monitor build logs for any issues
   - Wait for deployment to complete (usually 2-5 minutes)

2. **Test Basic Functionality**
   - [ ] Site loads correctly
   - [ ] All pages accessible (/, /projects, /work, /contact)
   - [ ] Theme switching works
   - [ ] Responsive design displays properly

3. **Test Contact Form**
   - [ ] Contact form displays
   - [ ] Form validation works (try submitting empty form)
   - [ ] Successfully submit test message
   - [ ] Verify email received via Resend
   - [ ] Check success message displays

### Troubleshooting Common Issues

#### Build Failures

**Issue**: `pnpm: command not found`

- **Solution**: Ensure `corepack enable` and `corepack use pnpm@10.13.1` are in preBuild commands

**Issue**: `Out of memory` during build

- **Solution**: In Amplify console → App Settings → Build settings → Environment variables, add:
  - `NODE_OPTIONS`: `--max-old-space-size=4096`

**Issue**: Module resolution errors

- **Solution**: Clear cache in Amplify console → App Settings → Build settings → Clear cache

#### Runtime Issues

**Issue**: Contact form returns 500 error

- **Solutions**:
  1. Verify `RESEND_API_KEY` is correctly set in environment variables
  2. Check Resend API key is valid and has sending permissions
  3. Verify `EMAIL_RECIPIENT` is a valid email address
  4. Check AWS CloudWatch logs for detailed error messages

**Issue**: Environment variables not loaded

- **Solutions**:
  1. Ensure variables are set in Amplify console (not in code)
  2. Redeploy the app after adding environment variables
  3. Check variable names match exactly (case-sensitive)

#### Performance Issues

**Issue**: Slow page loads

- **Solutions**:
  1. Enable Amplify's CDN acceleration
  2. Check if images are optimized
  3. Review bundle size analysis

### Post-Deployment Configuration

#### 4. Custom Domain (Optional)

1. **Add Domain**
   - Go to App Settings → Domain management
   - Click "Add domain"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - AWS automatically provisions SSL certificates
   - Wait for DNS verification (can take up to 24 hours)

#### 5. Branch-based Deployments

1. **Configure Branch Deployments**
   - Go to App Settings → General → Branches
   - Add branches you want to auto-deploy (e.g., `main`, `develop`)
   - Each branch gets its own preview URL

### Monitoring and Maintenance

#### Performance Monitoring

1. **AWS CloudWatch**
   - Navigate to CloudWatch in AWS Console
   - Check Amplify metrics for response times, error rates
   - Set up alarms for critical metrics

2. **Amplify Console Monitoring**
   - Check App Settings → Monitoring for:
     - Build success/failure rates
     - Deployment frequency
     - Traffic patterns

#### Regular Maintenance

- [ ] Monitor monthly AWS costs
- [ ] Review CloudWatch logs for errors
- [ ] Keep dependencies updated
- [ ] Regular backups of content and configuration

### Cost Estimation

**Expected Monthly Costs (Phase 1)**:

- AWS Amplify hosting: $5-15/month
- Data transfer: $1-5/month
- CloudWatch logs: $1-3/month
- **Total**: ~$7-23/month

### Next Steps

Once Phase 1 is stable and running well, future optimization opportunities include:

- Cost optimization with alternative AWS architectures
- Enhanced monitoring and alerting
- Performance optimization
- Custom domain and CDN configuration

For future migration planning, see the AWS Migration Strategy section in CLAUDE.md.
