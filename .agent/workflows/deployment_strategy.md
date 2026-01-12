---
description: Deployment Architecture and Coolify Integration
---

# Deployment Strategy

The website uses a **GitOps** deployment model, where pushing code to GitHub triggers an automated build and deployment on a self-hosted Coolify instance.

## Workflow

1.  **Development**: Code changes are made locally.
2.  **Push**: `git push origin main` sends changes to GitHub.
3.  **Webhook**: GitHub sends a webhook to the Coolify server.
4.  **Build**: Coolify pulls the latest code and runs:
    ```bash
    npm install
    npx astro build
    ```
5.  **Serve**: The static output (`dist/`) is served via Nginx.
6.  **Refresh**: The live site (`https://landscaperspakenham.com.au`) updates automatically (typically 1-2 mins).

## Key Configurations

- **Build Command**: `npx astro build`
- **Output Directory**: `dist` (Static Adapter)
- **Node Version**: LTS (v18+)

## Secrets & Security

- **Service Account**: `execution/service_account.json` is **ignored** (`.gitignore`) and only exists locally for the GSC scripts. It is *not* required for the production build.
- **Environment Variables**: Managed within the Coolify UI.
