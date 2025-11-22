# LNReader Plugins - Bundled & Unminified (J2V8)

**Modern JavaScript plugins for LNReader (J2V8 - V8 JavaScript Engine)**

Built from: https://github.com/LNReader/lnreader-plugins

## Features
- ✅ All dependencies bundled (cheerio, dayjs, etc.)
- ✅ Non-minified for easy debugging
- ✅ ES2020 target (full ES6+ support)
- ✅ Native async/await and Promises
- ✅ Arrow functions, classes, template literals
- ✅ Self-contained - no external modules needed

## JavaScript Engine

These plugins are optimized for **J2V8** (V8 JavaScript engine), which provides:
- ✅ Full ES6+ compatibility
- ✅ Native Promise/async/await support
- ✅ Same engine as Chrome and Node.js
- ✅ No ES5 transpilation needed

## Structure

```
plugins/
├── plugins.json          # Plugin manifest
├── plugins.min.json      # Minified manifest
├── english/              # English plugins
├── chinese/              # Chinese plugins
├── spanish/              # Spanish plugins
└── ...                   # Other languages
```

## Usage

1. Download the plugins for your language
2. Copy `.js` files to your LNReader plugins directory
3. Restart LNReader
4. Enjoy native V8 performance!

**Total: 494 plugins**
