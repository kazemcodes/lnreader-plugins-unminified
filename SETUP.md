# Setup Instructions

## Step 1: Copy Files to New Repo

```bash
# Navigate to the new repo directory
cd C:\Users\PC\StudioProjects\lnreader-plugins-unminified

# Copy all files from setup directory
Copy-Item -Path "C:\Users\PC\StudioProjects\IReader\lnreader-plugins-unminified-setup\*" -Destination "." -Recurse -Force
```

## Step 2: Initialize Git (if not done)

```bash
git init
git add .
git commit -m "Initial commit: Setup unminified plugin builder"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `lnreader-plugins-unminified`
3. Description: `Unminified builds of LNReader plugins for IReader compatibility`
4. Public repository
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 4: Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/lnreader-plugins-unminified.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Enable GitHub Actions

1. Go to your repo on GitHub
2. Click "Actions" tab
3. Click "I understand my workflows, go ahead and enable them"

## Step 6: Run First Build

1. Go to Actions tab
2. Click "Build Unminified Plugins" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"

The workflow will:
- Clone LNReader plugins
- Disable minification
- Build all plugins
- Commit them to your repo
- Create a release

## Step 7: Download Plugins

After the workflow completes:
1. Go to "Releases" tab
2. Download the latest release
3. Extract plugins to IReader's plugin directory

## Troubleshooting

### Workflow fails at build step

The LNReader build process might have changed. Check:
- Their build scripts in package.json
- Their rollup/webpack config files
- Update the workflow accordingly

### No plugins in output

Check the workflow logs:
- Look for "Copied X plugin files"
- If 0, the find command might need adjustment

### Plugins still minified

The sed commands might not be working. Try:
- Manually check the rollup.config.js in the workflow
- Add more aggressive minification disabling

## Maintenance

### Update Frequency

The workflow runs automatically daily. To change:
```yaml
schedule:
  - cron: '0 */6 * * *'  # Every 6 hours
```

### Manual Trigger

You can always trigger manually from Actions tab.

## Next Steps

After plugins are built:
1. Update IReader to download from your repo
2. Test with the unminified plugins
3. Verify the converter works better
4. Iterate on the analyzer patterns
