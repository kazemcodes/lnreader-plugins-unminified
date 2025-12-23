# LNReader Plugins - Bundled & Unminified (GraalVM/J2V8)

**Modern JavaScript plugins for LNReader/IReader (GraalVM & J2V8 compatible)**

Built from: https://github.com/LNReader/lnreader-plugins

## Features
- ✅ All dependencies bundled (cheerio, dayjs, etc.)
- ✅ Non-minified for easy debugging
- ✅ ES2020 target (full ES6+ support)
- ✅ ICU-free polyfills included (fixes GraalVM TimeZone errors)
- ✅ Self-contained - no external modules needed

## ICU-Free Polyfills
Each plugin includes polyfills that override Intl and Date.toLocaleString()
to prevent GraalVM ICU dependency errors:
- NoClassDefFoundError: org/graalvm/shadowed/com/ibm/icu/util/TimeZone
- Date formatting issues with dayjs

**Total: 496 plugins**
