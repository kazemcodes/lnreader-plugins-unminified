# LNReader Plugins - Unminified Build

This repository automatically builds **unminified versions** of LNReader plugins for better compatibility with IReader's plugin converter.

## Why This Exists

The official LNReader plugins are minified/compiled, making it impossible to extract their logic through pattern matching. This repo:

1. ✅ Clones the official LNReader plugins repo
2. ✅ Modifies the build configuration to disable minification
3. ✅ Builds unminified versions of all plugins
4. ✅ Publishes them for IReader to use

## How It Works

A GitHub Actions workflow runs daily to:
1. Clone https://github.com/LNReader/lnreader-plugins
2. Disable minification in the build config
3. Build all plugins
4. Commit the unminified `.js` files to this repo
5. Create a release with all plugins

## Usage

### For IReader App

Download plugins from the [Releases](../../releases) page.

### For Development

```bash
# Clone this repo
git clone https://github.com/YOUR_USERNAME/lnreader-plugins-unminified

# Plugins are in the /plugins directory
ls plugins/
```

## Plugin List

Plugins are automatically synced from the official repo. See the [plugins](./plugins) directory for available plugins.

## Updates

- **Automatic**: Workflow runs daily at midnight UTC
- **Manual**: Trigger the workflow manually from the Actions tab

## Credits

- Original plugins: [LNReader/lnreader-plugins](https://github.com/LNReader/lnreader-plugins)
- Built for: [IReader](https://github.com/IReaderorg/IReader)

## License

Same as the original LNReader plugins repository.
