# Accessibility regression scan

Install Playwright and axe-core 4.10.3 in a separate tooling directory and expose it through NODE_PATH. Start a static preview, set AUDIT_URL to its index.html URL, then run `node tests/accessibility.cjs`. Requires installed Chrome. The scan blocks other origins and never submits forms. It checks 1440/390/320px, prints findings, and exits nonzero for violations or overflow. Manual and intercepted-form audit results are documented in AUDIT.md. Do not deploy this tests directory.
