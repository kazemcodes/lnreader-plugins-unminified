# LNReader Plugins - Bundled & Unminified (GraalVM/J2V8)

**Modern JavaScript plugins for LNReader/IReader (GraalVM & J2V8 compatible)**

Built from: https://github.com/LNReader/lnreader-plugins

## Features
- ✅ All dependencies bundled (cheerio, dayjs, etc.)
- ✅ Non-minified for easy debugging
- ✅ ES2020 target (full ES6+ support)
- ✅ Comprehensive polyfills included
- ✅ Self-contained - no external modules needed

## Included Polyfills
Each plugin includes polyfills for maximum compatibility:
- **Intl** - ICU-free DateTimeFormat, NumberFormat, Collator, etc.
- **Date** - toLocaleString, toLocaleDateString, toLocaleTimeString
- **URLSearchParams** - append, set, get, getAll, has, delete, keys, entries, forEach
- **atob/btoa** - Base64 encoding/decoding
- **Object** - assign, entries, values, fromEntries
- **Array** - from, find, findIndex, includes, flat, flatMap
- **String** - includes, startsWith, endsWith, padStart, padEnd, repeat, trimStart, trimEnd
- **Number** - isNaN, isFinite, isInteger

**Total: 525 plugins**
