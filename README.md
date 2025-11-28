# test-workflows

This repository contains example GitHub Actions workflows demonstrating container usage and step-to-step variable passing.

Key changes:
- Added explicit "Step 1: Pull image" in workflows where container images are used.
- Added input validation for user-supplied input.
- Run containers as non-root users, with reduced capabilities and read-only filesystem where appropriate.
- Added a vulnerability scan step using `aquasecurity/trivy-action` to demonstrate a DevSecOps check.

Workflows updated:
- `.github/workflows/workflow2.yml`: now pulls `alpine:3.19`, validates inputs, scans the image, and runs the echo inside the container.
- `.github/workflows/my-workflow.yml`: Dockerfile pinned to `ubuntu:24.04`, creates non-root user, pulls base image, builds an image, scans it, and runs the container with security options.

Security notes:
- Avoid `latest` tags for repeatability; prefer pinned tags or digests.
- Avoid running containers as root; use a dedicated non-root user.
- Scan images for known vulnerabilities before using them in production.
- Avoid `chmod 777` and overly permissive file permissions.

How to run locally:
1. Run the workflows via GitHub Actions 'Run workflow' with the `workflow_dispatch` form inputs.
2. Or use Docker locally - for the `my-workflow.yml` example:

```bash
# Step 1: pull base image
docker pull ubuntu:24.04

# Build the example image
docker build -t hello-world-image .

# Run as a non-root user to print the message
docker run --rm --read-only --security-opt no-new-privileges --cap-drop ALL \
	--user 1000:1000 hello-world-image
```

