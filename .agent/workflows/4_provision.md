---
description: Step 4 - Infrastructure Provisioning (Coolify)
---

# 4. Infrastructure Provisioning

**Objective**: Create a **ISOLATED** Project and Environment in Coolify for this new site.

## Rules
-   **New Project**: Every site gets a unique Project in Coolify.
-   **Environment**: Use 'production'.

## Steps

1.  **Execute Provisioner**:
    -   Run the factory script with the **exact** Business Name and Repo Path.
    -   Command: `python execution/provision_factory.py "[Business Name]" "[Repo/Path]"`

2.  **Validation**:
    -   Watch the script output.
    -   Ensure it says "Created Application: [UUID]" or finds the correct existing one.
    -   **Capture the Webhook URL** provided in the output (if manual configuration is needed, though code handles it).

3.  **Domain Handshake (Optional)**:
    -   If the user has a domain ready, run the handshake script immediately.

4.  **Checkpoint**:
    -   [ ] Coolify Project exists.
    -   [ ] Application is linked to GitHub Repo.

**Next Step**: Proceed to `5_verify.md`.
