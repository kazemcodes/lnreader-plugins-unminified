// Bundled plugin with all dependencies included
// Built for LNReader Android

"use strict";
var LNReaderPlugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/@protobufjs/aspromise/index.js
  var require_aspromise = __commonJS({
    "node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
      "use strict";
      module2.exports = asPromise;
      function asPromise(fn, ctx) {
        var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
        while (index < arguments.length)
          params[offset++] = arguments[index++];
        return new Promise(function executor(resolve, reject) {
          params[offset] = function callback(err) {
            if (pending) {
              pending = false;
              if (err)
                reject(err);
              else {
                var params2 = new Array(arguments.length - 1), offset2 = 0;
                while (offset2 < params2.length)
                  params2[offset2++] = arguments[offset2];
                resolve.apply(null, params2);
              }
            }
          };
          try {
            fn.apply(ctx || null, params);
          } catch (err) {
            if (pending) {
              pending = false;
              reject(err);
            }
          }
        });
      }
    }
  });

  // node_modules/@protobufjs/base64/index.js
  var require_base64 = __commonJS({
    "node_modules/@protobufjs/base64/index.js"(exports2) {
      "use strict";
      var base64 = exports2;
      base64.length = function length(string) {
        var p = string.length;
        if (!p)
          return 0;
        var n2 = 0;
        while (--p % 4 > 1 && string.charAt(p) === "=")
          ++n2;
        return Math.ceil(string.length * 3) / 4 - n2;
      };
      var b64 = new Array(64);
      var s64 = new Array(123);
      for (i2 = 0; i2 < 64; )
        s64[b64[i2] = i2 < 26 ? i2 + 65 : i2 < 52 ? i2 + 71 : i2 < 62 ? i2 - 4 : i2 - 59 | 43] = i2++;
      base64.encode = function encode(buffer, start, end) {
        var parts = null, chunk = [];
        var i3 = 0, j = 0, t2;
        while (start < end) {
          var b = buffer[start++];
          switch (j) {
            case 0:
              chunk[i3++] = b64[b >> 2];
              t2 = (b & 3) << 4;
              j = 1;
              break;
            case 1:
              chunk[i3++] = b64[t2 | b >> 4];
              t2 = (b & 15) << 2;
              j = 2;
              break;
            case 2:
              chunk[i3++] = b64[t2 | b >> 6];
              chunk[i3++] = b64[b & 63];
              j = 0;
              break;
          }
          if (i3 > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i3 = 0;
          }
        }
        if (j) {
          chunk[i3++] = b64[t2];
          chunk[i3++] = 61;
          if (j === 1)
            chunk[i3++] = 61;
        }
        if (parts) {
          if (i3)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i3)));
          return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i3));
      };
      var invalidEncoding = "invalid encoding";
      base64.decode = function decode(string, buffer, offset) {
        var start = offset;
        var j = 0, t2;
        for (var i3 = 0; i3 < string.length; ) {
          var c = string.charCodeAt(i3++);
          if (c === 61 && j > 1)
            break;
          if ((c = s64[c]) === void 0)
            throw Error(invalidEncoding);
          switch (j) {
            case 0:
              t2 = c;
              j = 1;
              break;
            case 1:
              buffer[offset++] = t2 << 2 | (c & 48) >> 4;
              t2 = c;
              j = 2;
              break;
            case 2:
              buffer[offset++] = (t2 & 15) << 4 | (c & 60) >> 2;
              t2 = c;
              j = 3;
              break;
            case 3:
              buffer[offset++] = (t2 & 3) << 6 | c;
              j = 0;
              break;
          }
        }
        if (j === 1)
          throw Error(invalidEncoding);
        return offset - start;
      };
      base64.test = function test(string) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
      };
      var i2;
    }
  });

  // node_modules/@protobufjs/eventemitter/index.js
  var require_eventemitter = __commonJS({
    "node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
      "use strict";
      module2.exports = EventEmitter;
      function EventEmitter() {
        this._listeners = {};
      }
      EventEmitter.prototype.on = function on(evt, fn, ctx) {
        (this._listeners[evt] || (this._listeners[evt] = [])).push({
          fn,
          ctx: ctx || this
        });
        return this;
      };
      EventEmitter.prototype.off = function off(evt, fn) {
        if (evt === void 0)
          this._listeners = {};
        else {
          if (fn === void 0)
            this._listeners[evt] = [];
          else {
            var listeners = this._listeners[evt];
            for (var i2 = 0; i2 < listeners.length; )
              if (listeners[i2].fn === fn)
                listeners.splice(i2, 1);
              else
                ++i2;
          }
        }
        return this;
      };
      EventEmitter.prototype.emit = function emit(evt) {
        var listeners = this._listeners[evt];
        if (listeners) {
          var args = [], i2 = 1;
          for (; i2 < arguments.length; )
            args.push(arguments[i2++]);
          for (i2 = 0; i2 < listeners.length; )
            listeners[i2].fn.apply(listeners[i2++].ctx, args);
        }
        return this;
      };
    }
  });

  // node_modules/@protobufjs/float/index.js
  var require_float = __commonJS({
    "node_modules/@protobufjs/float/index.js"(exports2, module2) {
      "use strict";
      module2.exports = factory(factory);
      function factory(exports3) {
        if (typeof Float32Array !== "undefined") (function() {
          var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
          function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
          }
          function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
          }
          exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
          exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
          function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
          }
          function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
          }
          exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
          exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
        })();
        else (function() {
          function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0)
              writeUint(1 / val > 0 ? (
                /* positive */
                0
              ) : (
                /* negative 0 */
                2147483648
              ), buf, pos);
            else if (isNaN(val))
              writeUint(2143289344, buf, pos);
            else if (val > 34028234663852886e22)
              writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 11754943508222875e-54)
              writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
            else {
              var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
              writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
          }
          exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
          exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
          function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
          }
          exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
          exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
        })();
        if (typeof Float64Array !== "undefined") (function() {
          var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
          function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
          }
          function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
          }
          exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
          exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
          function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
          }
          function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
          }
          exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
          exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
        })();
        else (function() {
          function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0) {
              writeUint(0, buf, pos + off0);
              writeUint(1 / val > 0 ? (
                /* positive */
                0
              ) : (
                /* negative 0 */
                2147483648
              ), buf, pos + off1);
            } else if (isNaN(val)) {
              writeUint(0, buf, pos + off0);
              writeUint(2146959360, buf, pos + off1);
            } else if (val > 17976931348623157e292) {
              writeUint(0, buf, pos + off0);
              writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
              var mantissa;
              if (val < 22250738585072014e-324) {
                mantissa = val / 5e-324;
                writeUint(mantissa >>> 0, buf, pos + off0);
                writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
              } else {
                var exponent = Math.floor(Math.log(val) / Math.LN2);
                if (exponent === 1024)
                  exponent = 1023;
                mantissa = val * Math.pow(2, -exponent);
                writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
              }
            }
          }
          exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
          exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
          function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
          }
          exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
          exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
        })();
        return exports3;
      }
      function writeUintLE(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }
      function writeUintBE(val, buf, pos) {
        buf[pos] = val >>> 24;
        buf[pos + 1] = val >>> 16 & 255;
        buf[pos + 2] = val >>> 8 & 255;
        buf[pos + 3] = val & 255;
      }
      function readUintLE(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
      }
      function readUintBE(buf, pos) {
        return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
      }
    }
  });

  // node_modules/@protobufjs/inquire/index.js
  var require_inquire = __commonJS({
    "node_modules/@protobufjs/inquire/index.js"(exports, module) {
      "use strict";
      module.exports = inquire;
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length))
            return mod;
        } catch (e2) {
        }
        return null;
      }
    }
  });

  // node_modules/@protobufjs/utf8/index.js
  var require_utf8 = __commonJS({
    "node_modules/@protobufjs/utf8/index.js"(exports2) {
      "use strict";
      var utf8 = exports2;
      utf8.length = function utf8_length(string) {
        var len = 0, c = 0;
        for (var i2 = 0; i2 < string.length; ++i2) {
          c = string.charCodeAt(i2);
          if (c < 128)
            len += 1;
          else if (c < 2048)
            len += 2;
          else if ((c & 64512) === 55296 && (string.charCodeAt(i2 + 1) & 64512) === 56320) {
            ++i2;
            len += 4;
          } else
            len += 3;
        }
        return len;
      };
      utf8.read = function utf8_read(buffer, start, end) {
        var len = end - start;
        if (len < 1)
          return "";
        var parts = null, chunk = [], i2 = 0, t2;
        while (start < end) {
          t2 = buffer[start++];
          if (t2 < 128)
            chunk[i2++] = t2;
          else if (t2 > 191 && t2 < 224)
            chunk[i2++] = (t2 & 31) << 6 | buffer[start++] & 63;
          else if (t2 > 239 && t2 < 365) {
            t2 = ((t2 & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
            chunk[i2++] = 55296 + (t2 >> 10);
            chunk[i2++] = 56320 + (t2 & 1023);
          } else
            chunk[i2++] = (t2 & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
          if (i2 > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i2 = 0;
          }
        }
        if (parts) {
          if (i2)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
          return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i2));
      };
      utf8.write = function utf8_write(string, buffer, offset) {
        var start = offset, c1, c2;
        for (var i2 = 0; i2 < string.length; ++i2) {
          c1 = string.charCodeAt(i2);
          if (c1 < 128) {
            buffer[offset++] = c1;
          } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
          } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i2 + 1)) & 64512) === 56320) {
            c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
            ++i2;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          }
        }
        return offset - start;
      };
    }
  });

  // node_modules/@protobufjs/pool/index.js
  var require_pool = __commonJS({
    "node_modules/@protobufjs/pool/index.js"(exports2, module2) {
      "use strict";
      module2.exports = pool;
      function pool(alloc, slice, size) {
        var SIZE = size || 8192;
        var MAX = SIZE >>> 1;
        var slab = null;
        var offset = SIZE;
        return function pool_alloc(size2) {
          if (size2 < 1 || size2 > MAX)
            return alloc(size2);
          if (offset + size2 > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
          }
          var buf = slice.call(slab, offset, offset += size2);
          if (offset & 7)
            offset = (offset | 7) + 1;
          return buf;
        };
      }
    }
  });

  // node_modules/protobufjs/src/util/longbits.js
  var require_longbits = __commonJS({
    "node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
      "use strict";
      module2.exports = LongBits;
      var util = require_minimal();
      function LongBits(lo, hi) {
        this.lo = lo >>> 0;
        this.hi = hi >>> 0;
      }
      var zero = LongBits.zero = new LongBits(0, 0);
      zero.toNumber = function() {
        return 0;
      };
      zero.zzEncode = zero.zzDecode = function() {
        return this;
      };
      zero.length = function() {
        return 1;
      };
      var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
      LongBits.fromNumber = function fromNumber(value) {
        if (value === 0)
          return zero;
        var sign = value < 0;
        if (sign)
          value = -value;
        var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
        if (sign) {
          hi = ~hi >>> 0;
          lo = ~lo >>> 0;
          if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
              hi = 0;
          }
        }
        return new LongBits(lo, hi);
      };
      LongBits.from = function from(value) {
        if (typeof value === "number")
          return LongBits.fromNumber(value);
        if (util.isString(value)) {
          if (util.Long)
            value = util.Long.fromString(value);
          else
            return LongBits.fromNumber(parseInt(value, 10));
        }
        return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
      };
      LongBits.prototype.toNumber = function toNumber(unsigned) {
        if (!unsigned && this.hi >>> 31) {
          var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
          if (!lo)
            hi = hi + 1 >>> 0;
          return -(lo + hi * 4294967296);
        }
        return this.lo + this.hi * 4294967296;
      };
      LongBits.prototype.toLong = function toLong(unsigned) {
        return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
      };
      var charCodeAt = String.prototype.charCodeAt;
      LongBits.fromHash = function fromHash(hash) {
        if (hash === zeroHash)
          return zero;
        return new LongBits(
          (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
          (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
        );
      };
      LongBits.prototype.toHash = function toHash() {
        return String.fromCharCode(
          this.lo & 255,
          this.lo >>> 8 & 255,
          this.lo >>> 16 & 255,
          this.lo >>> 24,
          this.hi & 255,
          this.hi >>> 8 & 255,
          this.hi >>> 16 & 255,
          this.hi >>> 24
        );
      };
      LongBits.prototype.zzEncode = function zzEncode() {
        var mask = this.hi >> 31;
        this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
        this.lo = (this.lo << 1 ^ mask) >>> 0;
        return this;
      };
      LongBits.prototype.zzDecode = function zzDecode() {
        var mask = -(this.lo & 1);
        this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
        this.hi = (this.hi >>> 1 ^ mask) >>> 0;
        return this;
      };
      LongBits.prototype.length = function length() {
        var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
        return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
      };
    }
  });

  // node_modules/protobufjs/src/util/minimal.js
  var require_minimal = __commonJS({
    "node_modules/protobufjs/src/util/minimal.js"(exports2) {
      "use strict";
      var util = exports2;
      util.asPromise = require_aspromise();
      util.base64 = require_base64();
      util.EventEmitter = require_eventemitter();
      util.float = require_float();
      util.inquire = require_inquire();
      util.utf8 = require_utf8();
      util.pool = require_pool();
      util.LongBits = require_longbits();
      util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
      util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
      util.emptyArray = Object.freeze ? Object.freeze([]) : (
        /* istanbul ignore next */
        []
      );
      util.emptyObject = Object.freeze ? Object.freeze({}) : (
        /* istanbul ignore next */
        {}
      );
      util.isInteger = Number.isInteger || /* istanbul ignore next */
      function isInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
      util.isString = function isString(value) {
        return typeof value === "string" || value instanceof String;
      };
      util.isObject = function isObject(value) {
        return value && typeof value === "object";
      };
      util.isset = /**
       * Checks if a property on a message is considered to be present.
       * @param {Object} obj Plain object or message instance
       * @param {string} prop Property name
       * @returns {boolean} `true` if considered to be present, otherwise `false`
       */
      util.isSet = function isSet(obj, prop) {
        var value = obj[prop];
        if (value != null && obj.hasOwnProperty(prop))
          return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
        return false;
      };
      util.Buffer = (function() {
        try {
          var Buffer2 = util.inquire("buffer").Buffer;
          return Buffer2.prototype.utf8Write ? Buffer2 : (
            /* istanbul ignore next */
            null
          );
        } catch (e2) {
          return null;
        }
      })();
      util._Buffer_from = null;
      util._Buffer_allocUnsafe = null;
      util.newBuffer = function newBuffer(sizeOrArray) {
        return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
      };
      util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      util.Long = /* istanbul ignore next */
      util.global.dcodeIO && /* istanbul ignore next */
      util.global.dcodeIO.Long || /* istanbul ignore next */
      util.global.Long || util.inquire("long");
      util.key2Re = /^true|false|0|1$/;
      util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
      util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
      util.longToHash = function longToHash(value) {
        return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
      };
      util.longFromHash = function longFromHash(hash, unsigned) {
        var bits = util.LongBits.fromHash(hash);
        if (util.Long)
          return util.Long.fromBits(bits.lo, bits.hi, unsigned);
        return bits.toNumber(Boolean(unsigned));
      };
      function merge(dst, src, ifNotSet) {
        for (var keys = Object.keys(src), i2 = 0; i2 < keys.length; ++i2)
          if (dst[keys[i2]] === void 0 || !ifNotSet)
            dst[keys[i2]] = src[keys[i2]];
        return dst;
      }
      util.merge = merge;
      util.lcFirst = function lcFirst(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
      };
      function newError(name) {
        function CustomError(message, properties) {
          if (!(this instanceof CustomError))
            return new CustomError(message, properties);
          Object.defineProperty(this, "message", { get: function() {
            return message;
          } });
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, CustomError);
          else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });
          if (properties)
            merge(this, properties);
        }
        CustomError.prototype = Object.create(Error.prototype, {
          constructor: {
            value: CustomError,
            writable: true,
            enumerable: false,
            configurable: true
          },
          name: {
            get: function get() {
              return name;
            },
            set: void 0,
            enumerable: false,
            // configurable: false would accurately preserve the behavior of
            // the original, but I'm guessing that was not intentional.
            // For an actual error subclass, this property would
            // be configurable.
            configurable: true
          },
          toString: {
            value: function value() {
              return this.name + ": " + this.message;
            },
            writable: true,
            enumerable: false,
            configurable: true
          }
        });
        return CustomError;
      }
      util.newError = newError;
      util.ProtocolError = newError("ProtocolError");
      util.oneOfGetter = function getOneOf(fieldNames) {
        var fieldMap = {};
        for (var i2 = 0; i2 < fieldNames.length; ++i2)
          fieldMap[fieldNames[i2]] = 1;
        return function() {
          for (var keys = Object.keys(this), i3 = keys.length - 1; i3 > -1; --i3)
            if (fieldMap[keys[i3]] === 1 && this[keys[i3]] !== void 0 && this[keys[i3]] !== null)
              return keys[i3];
        };
      };
      util.oneOfSetter = function setOneOf(fieldNames) {
        return function(name) {
          for (var i2 = 0; i2 < fieldNames.length; ++i2)
            if (fieldNames[i2] !== name)
              delete this[fieldNames[i2]];
        };
      };
      util.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
      };
      util._configure = function() {
        var Buffer2 = util.Buffer;
        if (!Buffer2) {
          util._Buffer_from = util._Buffer_allocUnsafe = null;
          return;
        }
        util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
        function Buffer_from(value, encoding) {
          return new Buffer2(value, encoding);
        };
        util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
          return new Buffer2(size);
        };
      };
    }
  });

  // node_modules/protobufjs/src/writer.js
  var require_writer = __commonJS({
    "node_modules/protobufjs/src/writer.js"(exports2, module2) {
      "use strict";
      module2.exports = Writer;
      var util = require_minimal();
      var BufferWriter;
      var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
      function Op(fn, len, val) {
        this.fn = fn;
        this.len = len;
        this.next = void 0;
        this.val = val;
      }
      function noop() {
      }
      function State(writer) {
        this.head = writer.head;
        this.tail = writer.tail;
        this.len = writer.len;
        this.next = writer.states;
      }
      function Writer() {
        this.len = 0;
        this.head = new Op(noop, 0, 0);
        this.tail = this.head;
        this.states = null;
      }
      var create = function create2() {
        return util.Buffer ? function create_buffer_setup() {
          return (Writer.create = function create_buffer() {
            return new BufferWriter();
          })();
        } : function create_array() {
          return new Writer();
        };
      };
      Writer.create = create();
      Writer.alloc = function alloc(size) {
        return new util.Array(size);
      };
      if (util.Array !== Array)
        Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
      Writer.prototype._push = function push(fn, len, val) {
        this.tail = this.tail.next = new Op(fn, len, val);
        this.len += len;
        return this;
      };
      function writeByte(val, buf, pos) {
        buf[pos] = val & 255;
      }
      function writeVarint32(val, buf, pos) {
        while (val > 127) {
          buf[pos++] = val & 127 | 128;
          val >>>= 7;
        }
        buf[pos] = val;
      }
      function VarintOp(len, val) {
        this.len = len;
        this.next = void 0;
        this.val = val;
      }
      VarintOp.prototype = Object.create(Op.prototype);
      VarintOp.prototype.fn = writeVarint32;
      Writer.prototype.uint32 = function write_uint32(value) {
        this.len += (this.tail = this.tail.next = new VarintOp(
          (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
          value
        )).len;
        return this;
      };
      Writer.prototype.int32 = function write_int32(value) {
        return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
      };
      Writer.prototype.sint32 = function write_sint32(value) {
        return this.uint32((value << 1 ^ value >> 31) >>> 0);
      };
      function writeVarint64(val, buf, pos) {
        while (val.hi) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
          val.hi >>>= 7;
        }
        while (val.lo > 127) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = val.lo >>> 7;
        }
        buf[pos++] = val.lo;
      }
      Writer.prototype.uint64 = function write_uint64(value) {
        var bits = LongBits.from(value);
        return this._push(writeVarint64, bits.length(), bits);
      };
      Writer.prototype.int64 = Writer.prototype.uint64;
      Writer.prototype.sint64 = function write_sint64(value) {
        var bits = LongBits.from(value).zzEncode();
        return this._push(writeVarint64, bits.length(), bits);
      };
      Writer.prototype.bool = function write_bool(value) {
        return this._push(writeByte, 1, value ? 1 : 0);
      };
      function writeFixed32(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }
      Writer.prototype.fixed32 = function write_fixed32(value) {
        return this._push(writeFixed32, 4, value >>> 0);
      };
      Writer.prototype.sfixed32 = Writer.prototype.fixed32;
      Writer.prototype.fixed64 = function write_fixed64(value) {
        var bits = LongBits.from(value);
        return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
      };
      Writer.prototype.sfixed64 = Writer.prototype.fixed64;
      Writer.prototype.float = function write_float(value) {
        return this._push(util.float.writeFloatLE, 4, value);
      };
      Writer.prototype.double = function write_double(value) {
        return this._push(util.float.writeDoubleLE, 8, value);
      };
      var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytes_for(val, buf, pos) {
        for (var i2 = 0; i2 < val.length; ++i2)
          buf[pos + i2] = val[i2];
      };
      Writer.prototype.bytes = function write_bytes(value) {
        var len = value.length >>> 0;
        if (!len)
          return this._push(writeByte, 1, 0);
        if (util.isString(value)) {
          var buf = Writer.alloc(len = base64.length(value));
          base64.decode(value, buf, 0);
          value = buf;
        }
        return this.uint32(len)._push(writeBytes, len, value);
      };
      Writer.prototype.string = function write_string(value) {
        var len = utf8.length(value);
        return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
      };
      Writer.prototype.fork = function fork() {
        this.states = new State(this);
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
        return this;
      };
      Writer.prototype.reset = function reset() {
        if (this.states) {
          this.head = this.states.head;
          this.tail = this.states.tail;
          this.len = this.states.len;
          this.states = this.states.next;
        } else {
          this.head = this.tail = new Op(noop, 0, 0);
          this.len = 0;
        }
        return this;
      };
      Writer.prototype.ldelim = function ldelim() {
        var head = this.head, tail = this.tail, len = this.len;
        this.reset().uint32(len);
        if (len) {
          this.tail.next = head.next;
          this.tail = tail;
          this.len += len;
        }
        return this;
      };
      Writer.prototype.finish = function finish() {
        var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
        while (head) {
          head.fn(head.val, buf, pos);
          pos += head.len;
          head = head.next;
        }
        return buf;
      };
      Writer._configure = function(BufferWriter_) {
        BufferWriter = BufferWriter_;
        Writer.create = create();
        BufferWriter._configure();
      };
    }
  });

  // node_modules/protobufjs/src/writer_buffer.js
  var require_writer_buffer = __commonJS({
    "node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
      "use strict";
      module2.exports = BufferWriter;
      var Writer = require_writer();
      (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
      var util = require_minimal();
      function BufferWriter() {
        Writer.call(this);
      }
      BufferWriter._configure = function() {
        BufferWriter.alloc = util._Buffer_allocUnsafe;
        BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos);
        } : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy)
            val.copy(buf, pos, 0, val.length);
          else for (var i2 = 0; i2 < val.length; )
            buf[pos++] = val[i2++];
        };
      };
      BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
        if (util.isString(value))
          value = util._Buffer_from(value, "base64");
        var len = value.length >>> 0;
        this.uint32(len);
        if (len)
          this._push(BufferWriter.writeBytesBuffer, len, value);
        return this;
      };
      function writeStringBuffer(val, buf, pos) {
        if (val.length < 40)
          util.utf8.write(val, buf, pos);
        else if (buf.utf8Write)
          buf.utf8Write(val, pos);
        else
          buf.write(val, pos);
      }
      BufferWriter.prototype.string = function write_string_buffer(value) {
        var len = util.Buffer.byteLength(value);
        this.uint32(len);
        if (len)
          this._push(writeStringBuffer, len, value);
        return this;
      };
      BufferWriter._configure();
    }
  });

  // node_modules/protobufjs/src/reader.js
  var require_reader = __commonJS({
    "node_modules/protobufjs/src/reader.js"(exports2, module2) {
      "use strict";
      module2.exports = Reader;
      var util = require_minimal();
      var BufferReader;
      var LongBits = util.LongBits, utf8 = util.utf8;
      function indexOutOfRange(reader, writeLength) {
        return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
      }
      function Reader(buffer) {
        this.buf = buffer;
        this.pos = 0;
        this.len = buffer.length;
      }
      var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
          return new Reader(buffer);
        throw Error("illegal buffer");
      } : function create_array2(buffer) {
        if (Array.isArray(buffer))
          return new Reader(buffer);
        throw Error("illegal buffer");
      };
      var create = function create2() {
        return util.Buffer ? function create_buffer_setup(buffer) {
          return (Reader.create = function create_buffer(buffer2) {
            return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
          })(buffer);
        } : create_array;
      };
      Reader.create = create();
      Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
      util.Array.prototype.slice;
      Reader.prototype.uint32 = /* @__PURE__ */ (function read_uint32_setup() {
        var value = 4294967295;
        return function read_uint32() {
          value = (this.buf[this.pos] & 127) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
          }
          return value;
        };
      })();
      Reader.prototype.int32 = function read_int32() {
        return this.uint32() | 0;
      };
      Reader.prototype.sint32 = function read_sint32() {
        var value = this.uint32();
        return value >>> 1 ^ -(value & 1) | 0;
      };
      function readLongVarint() {
        var bits = new LongBits(0, 0);
        var i2 = 0;
        if (this.len - this.pos > 4) {
          for (; i2 < 4; ++i2) {
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
          i2 = 0;
        } else {
          for (; i2 < 3; ++i2) {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
          bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i2 * 7) >>> 0;
          return bits;
        }
        if (this.len - this.pos > 4) {
          for (; i2 < 5; ++i2) {
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
        } else {
          for (; i2 < 5; ++i2) {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
        }
        throw Error("invalid varint encoding");
      }
      Reader.prototype.bool = function read_bool() {
        return this.uint32() !== 0;
      };
      function readFixed32_end(buf, end) {
        return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
      }
      Reader.prototype.fixed32 = function read_fixed32() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4);
      };
      Reader.prototype.sfixed32 = function read_sfixed32() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4) | 0;
      };
      function readFixed64() {
        if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 8);
        return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
      }
      Reader.prototype.float = function read_float() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        var value = util.float.readFloatLE(this.buf, this.pos);
        this.pos += 4;
        return value;
      };
      Reader.prototype.double = function read_double() {
        if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 4);
        var value = util.float.readDoubleLE(this.buf, this.pos);
        this.pos += 8;
        return value;
      };
      Reader.prototype.bytes = function read_bytes() {
        var length = this.uint32(), start = this.pos, end = this.pos + length;
        if (end > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
        if (Array.isArray(this.buf))
          return this.buf.slice(start, end);
        if (start === end) {
          var nativeBuffer = util.Buffer;
          return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
        }
        return this._slice.call(this.buf, start, end);
      };
      Reader.prototype.string = function read_string() {
        var bytes = this.bytes();
        return utf8.read(bytes, 0, bytes.length);
      };
      Reader.prototype.skip = function skip(length) {
        if (typeof length === "number") {
          if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
          this.pos += length;
        } else {
          do {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
          } while (this.buf[this.pos++] & 128);
        }
        return this;
      };
      Reader.prototype.skipType = function(wireType) {
        switch (wireType) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
              this.skipType(wireType);
            }
            break;
          case 5:
            this.skip(4);
            break;
          /* istanbul ignore next */
          default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
        }
        return this;
      };
      Reader._configure = function(BufferReader_) {
        BufferReader = BufferReader_;
        Reader.create = create();
        BufferReader._configure();
        var fn = util.Long ? "toLong" : (
          /* istanbul ignore next */
          "toNumber"
        );
        util.merge(Reader.prototype, {
          int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
          },
          uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
          },
          sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
          },
          fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
          },
          sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
          }
        });
      };
    }
  });

  // node_modules/protobufjs/src/reader_buffer.js
  var require_reader_buffer = __commonJS({
    "node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
      "use strict";
      module2.exports = BufferReader;
      var Reader = require_reader();
      (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
      var util = require_minimal();
      function BufferReader(buffer) {
        Reader.call(this, buffer);
      }
      BufferReader._configure = function() {
        if (util.Buffer)
          BufferReader.prototype._slice = util.Buffer.prototype.slice;
      };
      BufferReader.prototype.string = function read_string_buffer() {
        var len = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
      };
      BufferReader._configure();
    }
  });

  // node_modules/protobufjs/src/rpc/service.js
  var require_service = __commonJS({
    "node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
      "use strict";
      module2.exports = Service;
      var util = require_minimal();
      (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
      function Service(rpcImpl, requestDelimited, responseDelimited) {
        if (typeof rpcImpl !== "function")
          throw TypeError("rpcImpl must be a function");
        util.EventEmitter.call(this);
        this.rpcImpl = rpcImpl;
        this.requestDelimited = Boolean(requestDelimited);
        this.responseDelimited = Boolean(responseDelimited);
      }
      Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
        if (!request)
          throw TypeError("request must be specified");
        var self2 = this;
        if (!callback)
          return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
        if (!self2.rpcImpl) {
          setTimeout(function() {
            callback(Error("already ended"));
          }, 0);
          return void 0;
        }
        try {
          return self2.rpcImpl(
            method,
            requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {
              if (err) {
                self2.emit("error", err, method);
                return callback(err);
              }
              if (response === null) {
                self2.end(
                  /* endedByRPC */
                  true
                );
                return void 0;
              }
              if (!(response instanceof responseCtor)) {
                try {
                  response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
                } catch (err2) {
                  self2.emit("error", err2, method);
                  return callback(err2);
                }
              }
              self2.emit("data", response, method);
              return callback(null, response);
            }
          );
        } catch (err) {
          self2.emit("error", err, method);
          setTimeout(function() {
            callback(err);
          }, 0);
          return void 0;
        }
      };
      Service.prototype.end = function end(endedByRPC) {
        if (this.rpcImpl) {
          if (!endedByRPC)
            this.rpcImpl(null, null, null);
          this.rpcImpl = null;
          this.emit("end").off();
        }
        return this;
      };
    }
  });

  // node_modules/protobufjs/src/rpc.js
  var require_rpc = __commonJS({
    "node_modules/protobufjs/src/rpc.js"(exports2) {
      "use strict";
      var rpc = exports2;
      rpc.Service = require_service();
    }
  });

  // node_modules/protobufjs/src/roots.js
  var require_roots = __commonJS({
    "node_modules/protobufjs/src/roots.js"(exports2, module2) {
      "use strict";
      module2.exports = {};
    }
  });

  // node_modules/protobufjs/src/index-minimal.js
  var require_index_minimal = __commonJS({
    "node_modules/protobufjs/src/index-minimal.js"(exports2) {
      "use strict";
      var protobuf = exports2;
      protobuf.build = "minimal";
      protobuf.Writer = require_writer();
      protobuf.BufferWriter = require_writer_buffer();
      protobuf.Reader = require_reader();
      protobuf.BufferReader = require_reader_buffer();
      protobuf.util = require_minimal();
      protobuf.rpc = require_rpc();
      protobuf.roots = require_roots();
      protobuf.configure = configure;
      function configure() {
        protobuf.util._configure();
        protobuf.Writer._configure(protobuf.BufferWriter);
        protobuf.Reader._configure(protobuf.BufferReader);
      }
      configure();
    }
  });

  // node_modules/@protobufjs/codegen/index.js
  var require_codegen = __commonJS({
    "node_modules/@protobufjs/codegen/index.js"(exports2, module2) {
      "use strict";
      module2.exports = codegen;
      function codegen(functionParams, functionName) {
        if (typeof functionParams === "string") {
          functionName = functionParams;
          functionParams = void 0;
        }
        var body = [];
        function Codegen(formatStringOrScope) {
          if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose)
              console.log("codegen: " + source);
            source = "return " + source;
            if (formatStringOrScope) {
              var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
              while (scopeOffset < scopeKeys.length) {
                scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
              }
              scopeParams[scopeOffset] = source;
              return Function.apply(null, scopeParams).apply(null, scopeValues);
            }
            return Function(source)();
          }
          var formatParams = new Array(arguments.length - 1), formatOffset = 0;
          while (formatOffset < formatParams.length)
            formatParams[formatOffset] = arguments[++formatOffset];
          formatOffset = 0;
          formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch ($1) {
              case "d":
              case "f":
                return String(Number(value));
              case "i":
                return String(Math.floor(value));
              case "j":
                return JSON.stringify(value);
              case "s":
                return String(value);
            }
            return "%";
          });
          if (formatOffset !== formatParams.length)
            throw Error("parameter count mismatch");
          body.push(formatStringOrScope);
          return Codegen;
        }
        function toString(functionNameOverride) {
          return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
        }
        Codegen.toString = toString;
        return Codegen;
      }
      codegen.verbose = false;
    }
  });

  // node_modules/@protobufjs/fetch/index.js
  var require_fetch = __commonJS({
    "node_modules/@protobufjs/fetch/index.js"(exports2, module2) {
      "use strict";
      module2.exports = fetch2;
      var asPromise = require_aspromise(), inquire2 = require_inquire();
      var fs = inquire2("fs");
      function fetch2(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        } else if (!options)
          options = {};
        if (!callback)
          return asPromise(fetch2, this, filename, options);
        if (!options.xhr && fs && fs.readFile)
          return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined" ? fetch2.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
          });
        return fetch2.xhr(filename, options, callback);
      }
      fetch2.xhr = function fetch_xhr(filename, options, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function fetchOnReadyStateChange() {
          if (xhr.readyState !== 4)
            return void 0;
          if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));
          if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
              buffer = [];
              for (var i2 = 0; i2 < xhr.responseText.length; ++i2)
                buffer.push(xhr.responseText.charCodeAt(i2) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
          }
          return callback(null, xhr.responseText);
        };
        if (options.binary) {
          if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          xhr.responseType = "arraybuffer";
        }
        xhr.open("GET", filename);
        xhr.send();
      };
    }
  });

  // node_modules/@protobufjs/path/index.js
  var require_path = __commonJS({
    "node_modules/@protobufjs/path/index.js"(exports2) {
      "use strict";
      var path = exports2;
      var isAbsolute = (
        /**
         * Tests if the specified path is absolute.
         * @param {string} path Path to test
         * @returns {boolean} `true` if path is absolute
         */
        path.isAbsolute = function isAbsolute2(path2) {
          return /^(?:\/|\w+:)/.test(path2);
        }
      );
      var normalize = (
        /**
         * Normalizes the specified path.
         * @param {string} path Path to normalize
         * @returns {string} Normalized path
         */
        path.normalize = function normalize2(path2) {
          path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
          var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
          if (absolute)
            prefix = parts.shift() + "/";
          for (var i2 = 0; i2 < parts.length; ) {
            if (parts[i2] === "..") {
              if (i2 > 0 && parts[i2 - 1] !== "..")
                parts.splice(--i2, 2);
              else if (absolute)
                parts.splice(i2, 1);
              else
                ++i2;
            } else if (parts[i2] === ".")
              parts.splice(i2, 1);
            else
              ++i2;
          }
          return prefix + parts.join("/");
        }
      );
      path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
        if (!alreadyNormalized)
          includePath = normalize(includePath);
        if (isAbsolute(includePath))
          return includePath;
        if (!alreadyNormalized)
          originPath = normalize(originPath);
        return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
      };
    }
  });

  // node_modules/protobufjs/src/types.js
  var require_types = __commonJS({
    "node_modules/protobufjs/src/types.js"(exports2) {
      "use strict";
      var types = exports2;
      var util = require_util();
      var s2 = [
        "double",
        // 0
        "float",
        // 1
        "int32",
        // 2
        "uint32",
        // 3
        "sint32",
        // 4
        "fixed32",
        // 5
        "sfixed32",
        // 6
        "int64",
        // 7
        "uint64",
        // 8
        "sint64",
        // 9
        "fixed64",
        // 10
        "sfixed64",
        // 11
        "bool",
        // 12
        "string",
        // 13
        "bytes"
        // 14
      ];
      function bake(values, offset) {
        var i2 = 0, o2 = {};
        offset |= 0;
        while (i2 < values.length) o2[s2[i2 + offset]] = values[i2++];
        return o2;
      }
      types.basic = bake([
        /* double   */
        1,
        /* float    */
        5,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0,
        /* string   */
        2,
        /* bytes    */
        2
      ]);
      types.defaults = bake([
        /* double   */
        0,
        /* float    */
        0,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        0,
        /* sfixed32 */
        0,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        0,
        /* sfixed64 */
        0,
        /* bool     */
        false,
        /* string   */
        "",
        /* bytes    */
        util.emptyArray,
        /* message  */
        null
      ]);
      types.long = bake([
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1
      ], 7);
      types.mapKey = bake([
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0,
        /* string   */
        2
      ], 2);
      types.packed = bake([
        /* double   */
        1,
        /* float    */
        5,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0
      ]);
    }
  });

  // node_modules/protobufjs/src/field.js
  var require_field = __commonJS({
    "node_modules/protobufjs/src/field.js"(exports2, module2) {
      "use strict";
      module2.exports = Field;
      var ReflectionObject = require_object();
      ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
      var Enum = require_enum(), types = require_types(), util = require_util();
      var Type;
      var ruleRe = /^required|optional|repeated$/;
      Field.fromJSON = function fromJSON(name, json) {
        return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
      };
      function Field(name, id, type, rule, extend, options, comment) {
        if (util.isObject(rule)) {
          comment = extend;
          options = rule;
          rule = extend = void 0;
        } else if (util.isObject(extend)) {
          comment = options;
          options = extend;
          extend = void 0;
        }
        ReflectionObject.call(this, name, options);
        if (!util.isInteger(id) || id < 0)
          throw TypeError("id must be a non-negative integer");
        if (!util.isString(type))
          throw TypeError("type must be a string");
        if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
          throw TypeError("rule must be a string rule");
        if (extend !== void 0 && !util.isString(extend))
          throw TypeError("extend must be a string");
        if (rule === "proto3_optional") {
          rule = "optional";
        }
        this.rule = rule && rule !== "optional" ? rule : void 0;
        this.type = type;
        this.id = id;
        this.extend = extend || void 0;
        this.required = rule === "required";
        this.optional = !this.required;
        this.repeated = rule === "repeated";
        this.map = false;
        this.message = null;
        this.partOf = null;
        this.typeDefault = null;
        this.defaultValue = null;
        this.long = util.Long ? types.long[type] !== void 0 : (
          /* istanbul ignore next */
          false
        );
        this.bytes = type === "bytes";
        this.resolvedType = null;
        this.extensionField = null;
        this.declaringField = null;
        this._packed = null;
        this.comment = comment;
      }
      Object.defineProperty(Field.prototype, "packed", {
        get: function() {
          if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
          return this._packed;
        }
      });
      Field.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (name === "packed")
          this._packed = null;
        return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
      };
      Field.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "rule",
          this.rule !== "optional" && this.rule || void 0,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Field.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if ((this.typeDefault = types.defaults[this.type]) === void 0) {
          this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
          if (this.resolvedType instanceof Type)
            this.typeDefault = null;
          else
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
        } else if (this.options && this.options.proto3_optional) {
          this.typeDefault = null;
        }
        if (this.options && this.options["default"] != null) {
          this.typeDefault = this.options["default"];
          if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
        }
        if (this.options) {
          if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
            delete this.options.packed;
          if (!Object.keys(this.options).length)
            this.options = void 0;
        }
        if (this.long) {
          this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
          if (Object.freeze)
            Object.freeze(this.typeDefault);
        } else if (this.bytes && typeof this.typeDefault === "string") {
          var buf;
          if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
          else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
          this.typeDefault = buf;
        }
        if (this.map)
          this.defaultValue = util.emptyObject;
        else if (this.repeated)
          this.defaultValue = util.emptyArray;
        else
          this.defaultValue = this.typeDefault;
        if (this.parent instanceof Type)
          this.parent.ctor.prototype[this.name] = this.defaultValue;
        return ReflectionObject.prototype.resolve.call(this);
      };
      Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
        if (typeof fieldType === "function")
          fieldType = util.decorateType(fieldType).name;
        else if (fieldType && typeof fieldType === "object")
          fieldType = util.decorateEnum(fieldType).name;
        return function fieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
        };
      };
      Field._configure = function configure(Type_) {
        Type = Type_;
      };
    }
  });

  // node_modules/protobufjs/src/oneof.js
  var require_oneof = __commonJS({
    "node_modules/protobufjs/src/oneof.js"(exports2, module2) {
      "use strict";
      module2.exports = OneOf;
      var ReflectionObject = require_object();
      ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
      var Field = require_field(), util = require_util();
      function OneOf(name, fieldNames, options, comment) {
        if (!Array.isArray(fieldNames)) {
          options = fieldNames;
          fieldNames = void 0;
        }
        ReflectionObject.call(this, name, options);
        if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
          throw TypeError("fieldNames must be an Array");
        this.oneof = fieldNames || [];
        this.fieldsArray = [];
        this.comment = comment;
      }
      OneOf.fromJSON = function fromJSON(name, json) {
        return new OneOf(name, json.oneof, json.options, json.comment);
      };
      OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          this.options,
          "oneof",
          this.oneof,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      function addFieldsToParent(oneof) {
        if (oneof.parent) {
          for (var i2 = 0; i2 < oneof.fieldsArray.length; ++i2)
            if (!oneof.fieldsArray[i2].parent)
              oneof.parent.add(oneof.fieldsArray[i2]);
        }
      }
      OneOf.prototype.add = function add(field) {
        if (!(field instanceof Field))
          throw TypeError("field must be a Field");
        if (field.parent && field.parent !== this.parent)
          field.parent.remove(field);
        this.oneof.push(field.name);
        this.fieldsArray.push(field);
        field.partOf = this;
        addFieldsToParent(this);
        return this;
      };
      OneOf.prototype.remove = function remove(field) {
        if (!(field instanceof Field))
          throw TypeError("field must be a Field");
        var index = this.fieldsArray.indexOf(field);
        if (index < 0)
          throw Error(field + " is not a member of " + this);
        this.fieldsArray.splice(index, 1);
        index = this.oneof.indexOf(field.name);
        if (index > -1)
          this.oneof.splice(index, 1);
        field.partOf = null;
        return this;
      };
      OneOf.prototype.onAdd = function onAdd(parent) {
        ReflectionObject.prototype.onAdd.call(this, parent);
        var self2 = this;
        for (var i2 = 0; i2 < this.oneof.length; ++i2) {
          var field = parent.get(this.oneof[i2]);
          if (field && !field.partOf) {
            field.partOf = self2;
            self2.fieldsArray.push(field);
          }
        }
        addFieldsToParent(this);
      };
      OneOf.prototype.onRemove = function onRemove(parent) {
        for (var i2 = 0, field; i2 < this.fieldsArray.length; ++i2)
          if ((field = this.fieldsArray[i2]).parent)
            field.parent.remove(field);
        ReflectionObject.prototype.onRemove.call(this, parent);
      };
      OneOf.d = function decorateOneOf() {
        var fieldNames = new Array(arguments.length), index = 0;
        while (index < arguments.length)
          fieldNames[index] = arguments[index++];
        return function oneOfDecorator(prototype, oneofName) {
          util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
          Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
          });
        };
      };
    }
  });

  // node_modules/protobufjs/src/namespace.js
  var require_namespace = __commonJS({
    "node_modules/protobufjs/src/namespace.js"(exports2, module2) {
      "use strict";
      module2.exports = Namespace;
      var ReflectionObject = require_object();
      ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
      var Field = require_field(), util = require_util(), OneOf = require_oneof();
      var Type, Service, Enum;
      Namespace.fromJSON = function fromJSON(name, json) {
        return new Namespace(name, json.options).addJSON(json.nested);
      };
      function arrayToJSON(array, toJSONOptions) {
        if (!(array && array.length))
          return void 0;
        var obj = {};
        for (var i2 = 0; i2 < array.length; ++i2)
          obj[array[i2].name] = array[i2].toJSON(toJSONOptions);
        return obj;
      }
      Namespace.arrayToJSON = arrayToJSON;
      Namespace.isReservedId = function isReservedId(reserved, id) {
        if (reserved) {
          for (var i2 = 0; i2 < reserved.length; ++i2)
            if (typeof reserved[i2] !== "string" && reserved[i2][0] <= id && reserved[i2][1] > id)
              return true;
        }
        return false;
      };
      Namespace.isReservedName = function isReservedName(reserved, name) {
        if (reserved) {
          for (var i2 = 0; i2 < reserved.length; ++i2)
            if (reserved[i2] === name)
              return true;
        }
        return false;
      };
      function Namespace(name, options) {
        ReflectionObject.call(this, name, options);
        this.nested = void 0;
        this._nestedArray = null;
      }
      function clearCache(namespace) {
        namespace._nestedArray = null;
        return namespace;
      }
      Object.defineProperty(Namespace.prototype, "nestedArray", {
        get: function() {
          return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
        }
      });
      Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
        return util.toObject([
          "options",
          this.options,
          "nested",
          arrayToJSON(this.nestedArray, toJSONOptions)
        ]);
      };
      Namespace.prototype.addJSON = function addJSON(nestedJson) {
        var ns = this;
        if (nestedJson) {
          for (var names = Object.keys(nestedJson), i2 = 0, nested; i2 < names.length; ++i2) {
            nested = nestedJson[names[i2]];
            ns.add(
              // most to least likely
              (nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i2], nested)
            );
          }
        }
        return this;
      };
      Namespace.prototype.get = function get(name) {
        return this.nested && this.nested[name] || null;
      };
      Namespace.prototype.getEnum = function getEnum(name) {
        if (this.nested && this.nested[name] instanceof Enum)
          return this.nested[name].values;
        throw Error("no such enum: " + name);
      };
      Namespace.prototype.add = function add(object) {
        if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
          throw TypeError("object must be a valid nested object");
        if (!this.nested)
          this.nested = {};
        else {
          var prev = this.get(object.name);
          if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
              var nested = prev.nestedArray;
              for (var i2 = 0; i2 < nested.length; ++i2)
                object.add(nested[i2]);
              this.remove(prev);
              if (!this.nested)
                this.nested = {};
              object.setOptions(prev.options, true);
            } else
              throw Error("duplicate name '" + object.name + "' in " + this);
          }
        }
        this.nested[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      };
      Namespace.prototype.remove = function remove(object) {
        if (!(object instanceof ReflectionObject))
          throw TypeError("object must be a ReflectionObject");
        if (object.parent !== this)
          throw Error(object + " is not a member of " + this);
        delete this.nested[object.name];
        if (!Object.keys(this.nested).length)
          this.nested = void 0;
        object.onRemove(this);
        return clearCache(this);
      };
      Namespace.prototype.define = function define2(path, json) {
        if (util.isString(path))
          path = path.split(".");
        else if (!Array.isArray(path))
          throw TypeError("illegal path");
        if (path && path.length && path[0] === "")
          throw Error("path must be relative");
        var ptr = this;
        while (path.length > 0) {
          var part = path.shift();
          if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
              throw Error("path conflicts with non-namespace objects");
          } else
            ptr.add(ptr = new Namespace(part));
        }
        if (json)
          ptr.addJSON(json);
        return ptr;
      };
      Namespace.prototype.resolveAll = function resolveAll() {
        var nested = this.nestedArray, i2 = 0;
        while (i2 < nested.length)
          if (nested[i2] instanceof Namespace)
            nested[i2++].resolveAll();
          else
            nested[i2++].resolve();
        return this.resolve();
      };
      Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
        if (typeof filterTypes === "boolean") {
          parentAlreadyChecked = filterTypes;
          filterTypes = void 0;
        } else if (filterTypes && !Array.isArray(filterTypes))
          filterTypes = [filterTypes];
        if (util.isString(path) && path.length) {
          if (path === ".")
            return this.root;
          path = path.split(".");
        } else if (!path.length)
          return this;
        if (path[0] === "")
          return this.root.lookup(path.slice(1), filterTypes);
        var found = this.get(path[0]);
        if (found) {
          if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
              return found;
          } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;
        } else
          for (var i2 = 0; i2 < this.nestedArray.length; ++i2)
            if (this._nestedArray[i2] instanceof Namespace && (found = this._nestedArray[i2].lookup(path, filterTypes, true)))
              return found;
        if (this.parent === null || parentAlreadyChecked)
          return null;
        return this.parent.lookup(path, filterTypes);
      };
      Namespace.prototype.lookupType = function lookupType(path) {
        var found = this.lookup(path, [Type]);
        if (!found)
          throw Error("no such type: " + path);
        return found;
      };
      Namespace.prototype.lookupEnum = function lookupEnum(path) {
        var found = this.lookup(path, [Enum]);
        if (!found)
          throw Error("no such Enum '" + path + "' in " + this);
        return found;
      };
      Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
        var found = this.lookup(path, [Type, Enum]);
        if (!found)
          throw Error("no such Type or Enum '" + path + "' in " + this);
        return found;
      };
      Namespace.prototype.lookupService = function lookupService(path) {
        var found = this.lookup(path, [Service]);
        if (!found)
          throw Error("no such Service '" + path + "' in " + this);
        return found;
      };
      Namespace._configure = function(Type_, Service_, Enum_) {
        Type = Type_;
        Service = Service_;
        Enum = Enum_;
      };
    }
  });

  // node_modules/protobufjs/src/mapfield.js
  var require_mapfield = __commonJS({
    "node_modules/protobufjs/src/mapfield.js"(exports2, module2) {
      "use strict";
      module2.exports = MapField;
      var Field = require_field();
      ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
      var types = require_types(), util = require_util();
      function MapField(name, id, keyType, type, options, comment) {
        Field.call(this, name, id, type, void 0, void 0, options, comment);
        if (!util.isString(keyType))
          throw TypeError("keyType must be a string");
        this.keyType = keyType;
        this.resolvedKeyType = null;
        this.map = true;
      }
      MapField.fromJSON = function fromJSON(name, json) {
        return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
      };
      MapField.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "keyType",
          this.keyType,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      MapField.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if (types.mapKey[this.keyType] === void 0)
          throw Error("invalid key type: " + this.keyType);
        return Field.prototype.resolve.call(this);
      };
      MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
        if (typeof fieldValueType === "function")
          fieldValueType = util.decorateType(fieldValueType).name;
        else if (fieldValueType && typeof fieldValueType === "object")
          fieldValueType = util.decorateEnum(fieldValueType).name;
        return function mapFieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
        };
      };
    }
  });

  // node_modules/protobufjs/src/method.js
  var require_method = __commonJS({
    "node_modules/protobufjs/src/method.js"(exports2, module2) {
      "use strict";
      module2.exports = Method;
      var ReflectionObject = require_object();
      ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
      var util = require_util();
      function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
        if (util.isObject(requestStream)) {
          options = requestStream;
          requestStream = responseStream = void 0;
        } else if (util.isObject(responseStream)) {
          options = responseStream;
          responseStream = void 0;
        }
        if (!(type === void 0 || util.isString(type)))
          throw TypeError("type must be a string");
        if (!util.isString(requestType))
          throw TypeError("requestType must be a string");
        if (!util.isString(responseType))
          throw TypeError("responseType must be a string");
        ReflectionObject.call(this, name, options);
        this.type = type || "rpc";
        this.requestType = requestType;
        this.requestStream = requestStream ? true : void 0;
        this.responseType = responseType;
        this.responseStream = responseStream ? true : void 0;
        this.resolvedRequestType = null;
        this.resolvedResponseType = null;
        this.comment = comment;
        this.parsedOptions = parsedOptions;
      }
      Method.fromJSON = function fromJSON(name, json) {
        return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
      };
      Method.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "type",
          this.type !== "rpc" && /* istanbul ignore next */
          this.type || void 0,
          "requestType",
          this.requestType,
          "requestStream",
          this.requestStream,
          "responseType",
          this.responseType,
          "responseStream",
          this.responseStream,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0,
          "parsedOptions",
          this.parsedOptions
        ]);
      };
      Method.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        this.resolvedRequestType = this.parent.lookupType(this.requestType);
        this.resolvedResponseType = this.parent.lookupType(this.responseType);
        return ReflectionObject.prototype.resolve.call(this);
      };
    }
  });

  // node_modules/protobufjs/src/service.js
  var require_service2 = __commonJS({
    "node_modules/protobufjs/src/service.js"(exports2, module2) {
      "use strict";
      module2.exports = Service;
      var Namespace = require_namespace();
      ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
      var Method = require_method(), util = require_util(), rpc = require_rpc();
      function Service(name, options) {
        Namespace.call(this, name, options);
        this.methods = {};
        this._methodsArray = null;
      }
      Service.fromJSON = function fromJSON(name, json) {
        var service = new Service(name, json.options);
        if (json.methods)
          for (var names = Object.keys(json.methods), i2 = 0; i2 < names.length; ++i2)
            service.add(Method.fromJSON(names[i2], json.methods[names[i2]]));
        if (json.nested)
          service.addJSON(json.nested);
        service.comment = json.comment;
        return service;
      };
      Service.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          inherited && inherited.options || void 0,
          "methods",
          Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
          {},
          "nested",
          inherited && inherited.nested || void 0,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Object.defineProperty(Service.prototype, "methodsArray", {
        get: function() {
          return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
        }
      });
      function clearCache(service) {
        service._methodsArray = null;
        return service;
      }
      Service.prototype.get = function get(name) {
        return this.methods[name] || Namespace.prototype.get.call(this, name);
      };
      Service.prototype.resolveAll = function resolveAll() {
        var methods = this.methodsArray;
        for (var i2 = 0; i2 < methods.length; ++i2)
          methods[i2].resolve();
        return Namespace.prototype.resolve.call(this);
      };
      Service.prototype.add = function add(object) {
        if (this.get(object.name))
          throw Error("duplicate name '" + object.name + "' in " + this);
        if (object instanceof Method) {
          this.methods[object.name] = object;
          object.parent = this;
          return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
      };
      Service.prototype.remove = function remove(object) {
        if (object instanceof Method) {
          if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.methods[object.name];
          object.parent = null;
          return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
      };
      Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
        for (var i2 = 0, method; i2 < /* initializes */
        this.methodsArray.length; ++i2) {
          var methodName = util.lcFirst((method = this._methodsArray[i2]).resolve().name).replace(/[^$\w_]/g, "");
          rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
          });
        }
        return rpcService;
      };
    }
  });

  // node_modules/protobufjs/src/message.js
  var require_message = __commonJS({
    "node_modules/protobufjs/src/message.js"(exports2, module2) {
      "use strict";
      module2.exports = Message;
      var util = require_minimal();
      function Message(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i2 = 0; i2 < keys.length; ++i2)
            this[keys[i2]] = properties[keys[i2]];
      }
      Message.create = function create(properties) {
        return this.$type.create(properties);
      };
      Message.encode = function encode(message, writer) {
        return this.$type.encode(message, writer);
      };
      Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.$type.encodeDelimited(message, writer);
      };
      Message.decode = function decode(reader) {
        return this.$type.decode(reader);
      };
      Message.decodeDelimited = function decodeDelimited(reader) {
        return this.$type.decodeDelimited(reader);
      };
      Message.verify = function verify(message) {
        return this.$type.verify(message);
      };
      Message.fromObject = function fromObject(object) {
        return this.$type.fromObject(object);
      };
      Message.toObject = function toObject(message, options) {
        return this.$type.toObject(message, options);
      };
      Message.prototype.toJSON = function toJSON() {
        return this.$type.toObject(this, util.toJSONOptions);
      };
    }
  });

  // node_modules/protobufjs/src/decoder.js
  var require_decoder = __commonJS({
    "node_modules/protobufjs/src/decoder.js"(exports2, module2) {
      "use strict";
      module2.exports = decoder;
      var Enum = require_enum(), types = require_types(), util = require_util();
      function missing(field) {
        return "missing required '" + field.name + "'";
      }
      function decoder(mtype) {
        var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
          return field2.map;
        }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
        if (mtype.group) gen("if((t&7)===4)")("break");
        gen("switch(t>>>3){");
        var i2 = 0;
        for (; i2 < /* initializes */
        mtype.fieldsArray.length; ++i2) {
          var field = mtype._fieldsArray[i2].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
          gen("case %i: {", field.id);
          if (field.map) {
            gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
            if (types.defaults[field.keyType] !== void 0) gen("k=%j", types.defaults[field.keyType]);
            else gen("k=null");
            if (types.defaults[type] !== void 0) gen("value=%j", types.defaults[type]);
            else gen("value=null");
            gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
            if (types.basic[type] === void 0) gen("value=types[%i].decode(r,r.uint32())", i2);
            else gen("value=r.%s()", type);
            gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
            if (types.long[field.keyType] !== void 0) gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
            else gen("%s[k]=value", ref);
          } else if (field.repeated) {
            gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
            if (types.packed[type] !== void 0) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
            if (types.basic[type] === void 0) gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i2);
            else gen("%s.push(r.%s())", ref, type);
          } else if (types.basic[type] === void 0) gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i2);
          else gen("%s=r.%s()", ref, type);
          gen("break")("}");
        }
        gen("default:")("r.skipType(t&7)")("break")("}")("}");
        for (i2 = 0; i2 < mtype._fieldsArray.length; ++i2) {
          var rfield = mtype._fieldsArray[i2];
          if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
        }
        return gen("return m");
      }
    }
  });

  // node_modules/protobufjs/src/verifier.js
  var require_verifier = __commonJS({
    "node_modules/protobufjs/src/verifier.js"(exports2, module2) {
      "use strict";
      module2.exports = verifier;
      var Enum = require_enum(), util = require_util();
      function invalid(field, expected) {
        return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
      }
      function genVerifyValue(gen, field, fieldIndex, ref) {
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
            gen("break")("}");
          } else {
            gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
          }
        } else {
          switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
              break;
            case "float":
            case "double":
              gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
              break;
            case "bool":
              gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
              break;
            case "string":
              gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
              break;
            case "bytes":
              gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
              break;
          }
        }
        return gen;
      }
      function genVerifyKey(gen, field, ref) {
        switch (field.keyType) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
            break;
          case "bool":
            gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
            break;
        }
        return gen;
      }
      function verifier(mtype) {
        var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
        var oneofs = mtype.oneofsArray, seenFirstField = {};
        if (oneofs.length) gen("var p={}");
        for (var i2 = 0; i2 < /* initializes */
        mtype.fieldsArray.length; ++i2) {
          var field = mtype._fieldsArray[i2].resolve(), ref = "m" + util.safeProp(field.name);
          if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
          if (field.map) {
            gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
            genVerifyKey(gen, field, "k[i]");
            genVerifyValue(gen, field, i2, ref + "[k[i]]")("}");
          } else if (field.repeated) {
            gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
            genVerifyValue(gen, field, i2, ref + "[i]")("}");
          } else {
            if (field.partOf) {
              var oneofProp = util.safeProp(field.partOf.name);
              if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
              seenFirstField[field.partOf.name] = 1;
              gen("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i2, ref);
          }
          if (field.optional) gen("}");
        }
        return gen("return null");
      }
    }
  });

  // node_modules/protobufjs/src/converter.js
  var require_converter = __commonJS({
    "node_modules/protobufjs/src/converter.js"(exports2) {
      "use strict";
      var converter = exports2;
      var Enum = require_enum(), util = require_util();
      function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
        var defaultAlreadyEmitted = false;
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(d%s){", prop);
            for (var values = field.resolvedType.values, keys = Object.keys(values), i2 = 0; i2 < keys.length; ++i2) {
              if (values[keys[i2]] === field.typeDefault && !defaultAlreadyEmitted) {
                gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
                if (!field.repeated) gen("break");
                defaultAlreadyEmitted = true;
              }
              gen("case%j:", keys[i2])("case %i:", values[keys[i2]])("m%s=%j", prop, values[keys[i2]])("break");
            }
            gen("}");
          } else gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;
          switch (field.type) {
            case "double":
            case "float":
              gen("m%s=Number(d%s)", prop, prop);
              break;
            case "uint32":
            case "fixed32":
              gen("m%s=d%s>>>0", prop, prop);
              break;
            case "int32":
            case "sint32":
            case "sfixed32":
              gen("m%s=d%s|0", prop, prop);
              break;
            case "uint64":
              isUnsigned = true;
            // eslint-disable-next-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
              break;
            case "bytes":
              gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
              break;
            case "string":
              gen("m%s=String(d%s)", prop, prop);
              break;
            case "bool":
              gen("m%s=Boolean(d%s)", prop, prop);
              break;
          }
        }
        return gen;
      }
      converter.fromObject = function fromObject(mtype) {
        var fields = mtype.fieldsArray;
        var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!fields.length) return gen("return new this.ctor");
        gen("var m=new this.ctor");
        for (var i2 = 0; i2 < fields.length; ++i2) {
          var field = fields[i2].resolve(), prop = util.safeProp(field.name);
          if (field.map) {
            gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i2,
              prop + "[ks[i]]"
            )("}")("}");
          } else if (field.repeated) {
            gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i2,
              prop + "[i]"
            )("}")("}");
          } else {
            if (!(field.resolvedType instanceof Enum)) gen("if(d%s!=null){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i2,
              prop
            );
            if (!(field.resolvedType instanceof Enum)) gen("}");
          }
        }
        return gen("return m");
      };
      function genValuePartial_toObject(gen, field, fieldIndex, prop) {
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
          else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;
          switch (field.type) {
            case "double":
            case "float":
              gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
              break;
            case "uint64":
              isUnsigned = true;
            // eslint-disable-next-line no-fallthrough
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
              break;
            case "bytes":
              gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
              break;
            default:
              gen("d%s=m%s", prop, prop);
              break;
          }
        }
        return gen;
      }
      converter.toObject = function toObject(mtype) {
        var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
        if (!fields.length)
          return util.codegen()("return {}");
        var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
        var repeatedFields = [], mapFields = [], normalFields = [], i2 = 0;
        for (; i2 < fields.length; ++i2)
          if (!fields[i2].partOf)
            (fields[i2].resolve().repeated ? repeatedFields : fields[i2].map ? mapFields : normalFields).push(fields[i2]);
        if (repeatedFields.length) {
          gen("if(o.arrays||o.defaults){");
          for (i2 = 0; i2 < repeatedFields.length; ++i2) gen("d%s=[]", util.safeProp(repeatedFields[i2].name));
          gen("}");
        }
        if (mapFields.length) {
          gen("if(o.objects||o.defaults){");
          for (i2 = 0; i2 < mapFields.length; ++i2) gen("d%s={}", util.safeProp(mapFields[i2].name));
          gen("}");
        }
        if (normalFields.length) {
          gen("if(o.defaults){");
          for (i2 = 0; i2 < normalFields.length; ++i2) {
            var field = normalFields[i2], prop = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
            else if (field.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
            else if (field.bytes) {
              var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
              gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
            } else gen("d%s=%j", prop, field.typeDefault);
          }
          gen("}");
        }
        var hasKs2 = false;
        for (i2 = 0; i2 < fields.length; ++i2) {
          var field = fields[i2], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
          if (field.map) {
            if (!hasKs2) {
              hasKs2 = true;
              gen("var ks2");
            }
            gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop + "[ks2[j]]"
            )("}");
          } else if (field.repeated) {
            gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop + "[j]"
            )("}");
          } else {
            gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop
            );
            if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
          }
          gen("}");
        }
        return gen("return d");
      };
    }
  });

  // node_modules/protobufjs/src/wrappers.js
  var require_wrappers = __commonJS({
    "node_modules/protobufjs/src/wrappers.js"(exports2) {
      "use strict";
      var wrappers = exports2;
      var Message = require_message();
      wrappers[".google.protobuf.Any"] = {
        fromObject: function(object) {
          if (object && object["@type"]) {
            var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
            var type = this.lookup(name);
            if (type) {
              var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
              if (type_url.indexOf("/") === -1) {
                type_url = "/" + type_url;
              }
              return this.create({
                type_url,
                value: type.encode(type.fromObject(object)).finish()
              });
            }
          }
          return this.fromObject(object);
        },
        toObject: function(message, options) {
          var googleApi = "type.googleapis.com/";
          var prefix = "";
          var name = "";
          if (options && options.json && message.type_url && message.value) {
            name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            if (type)
              message = type.decode(message.value);
          }
          if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
            if (prefix === "") {
              prefix = googleApi;
            }
            name = prefix + messageName;
            object["@type"] = name;
            return object;
          }
          return this.toObject(message, options);
        }
      };
    }
  });

  // node_modules/protobufjs/src/type.js
  var require_type = __commonJS({
    "node_modules/protobufjs/src/type.js"(exports2, module2) {
      "use strict";
      module2.exports = Type;
      var Namespace = require_namespace();
      ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
      var Enum = require_enum(), OneOf = require_oneof(), Field = require_field(), MapField = require_mapfield(), Service = require_service2(), Message = require_message(), Reader = require_reader(), Writer = require_writer(), util = require_util(), encoder = require_encoder(), decoder = require_decoder(), verifier = require_verifier(), converter = require_converter(), wrappers = require_wrappers();
      function Type(name, options) {
        Namespace.call(this, name, options);
        this.fields = {};
        this.oneofs = void 0;
        this.extensions = void 0;
        this.reserved = void 0;
        this.group = void 0;
        this._fieldsById = null;
        this._fieldsArray = null;
        this._oneofsArray = null;
        this._ctor = null;
      }
      Object.defineProperties(Type.prototype, {
        /**
         * Message fields by id.
         * @name Type#fieldsById
         * @type {Object.<number,Field>}
         * @readonly
         */
        fieldsById: {
          get: function() {
            if (this._fieldsById)
              return this._fieldsById;
            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i2 = 0; i2 < names.length; ++i2) {
              var field = this.fields[names[i2]], id = field.id;
              if (this._fieldsById[id])
                throw Error("duplicate id " + id + " in " + this);
              this._fieldsById[id] = field;
            }
            return this._fieldsById;
          }
        },
        /**
         * Fields of this message as an array for iteration.
         * @name Type#fieldsArray
         * @type {Field[]}
         * @readonly
         */
        fieldsArray: {
          get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
          }
        },
        /**
         * Oneofs of this message as an array for iteration.
         * @name Type#oneofsArray
         * @type {OneOf[]}
         * @readonly
         */
        oneofsArray: {
          get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
          }
        },
        /**
         * The registered constructor, if any registered, otherwise a generic constructor.
         * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
         * @name Type#ctor
         * @type {Constructor<{}>}
         */
        ctor: {
          get: function() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
          },
          set: function(ctor) {
            var prototype = ctor.prototype;
            if (!(prototype instanceof Message)) {
              (ctor.prototype = new Message()).constructor = ctor;
              util.merge(ctor.prototype, prototype);
            }
            ctor.$type = ctor.prototype.$type = this;
            util.merge(ctor, Message, true);
            this._ctor = ctor;
            var i2 = 0;
            for (; i2 < /* initializes */
            this.fieldsArray.length; ++i2)
              this._fieldsArray[i2].resolve();
            var ctorProperties = {};
            for (i2 = 0; i2 < /* initializes */
            this.oneofsArray.length; ++i2)
              ctorProperties[this._oneofsArray[i2].resolve().name] = {
                get: util.oneOfGetter(this._oneofsArray[i2].oneof),
                set: util.oneOfSetter(this._oneofsArray[i2].oneof)
              };
            if (i2)
              Object.defineProperties(ctor.prototype, ctorProperties);
          }
        }
      });
      Type.generateConstructor = function generateConstructor(mtype) {
        var gen = util.codegen(["p"], mtype.name);
        for (var i2 = 0, field; i2 < mtype.fieldsArray.length; ++i2)
          if ((field = mtype._fieldsArray[i2]).map) gen("this%s={}", util.safeProp(field.name));
          else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
        return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
      };
      function clearCache(type) {
        type._fieldsById = type._fieldsArray = type._oneofsArray = null;
        delete type.encode;
        delete type.decode;
        delete type.verify;
        return type;
      }
      Type.fromJSON = function fromJSON(name, json) {
        var type = new Type(name, json.options);
        type.extensions = json.extensions;
        type.reserved = json.reserved;
        var names = Object.keys(json.fields), i2 = 0;
        for (; i2 < names.length; ++i2)
          type.add(
            (typeof json.fields[names[i2]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i2], json.fields[names[i2]])
          );
        if (json.oneofs)
          for (names = Object.keys(json.oneofs), i2 = 0; i2 < names.length; ++i2)
            type.add(OneOf.fromJSON(names[i2], json.oneofs[names[i2]]));
        if (json.nested)
          for (names = Object.keys(json.nested), i2 = 0; i2 < names.length; ++i2) {
            var nested = json.nested[names[i2]];
            type.add(
              // most to least likely
              (nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i2], nested)
            );
          }
        if (json.extensions && json.extensions.length)
          type.extensions = json.extensions;
        if (json.reserved && json.reserved.length)
          type.reserved = json.reserved;
        if (json.group)
          type.group = true;
        if (json.comment)
          type.comment = json.comment;
        return type;
      };
      Type.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          inherited && inherited.options || void 0,
          "oneofs",
          Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
          "fields",
          Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
            return !obj.declaringField;
          }), toJSONOptions) || {},
          "extensions",
          this.extensions && this.extensions.length ? this.extensions : void 0,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "group",
          this.group || void 0,
          "nested",
          inherited && inherited.nested || void 0,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Type.prototype.resolveAll = function resolveAll() {
        var fields = this.fieldsArray, i2 = 0;
        while (i2 < fields.length)
          fields[i2++].resolve();
        var oneofs = this.oneofsArray;
        i2 = 0;
        while (i2 < oneofs.length)
          oneofs[i2++].resolve();
        return Namespace.prototype.resolveAll.call(this);
      };
      Type.prototype.get = function get(name) {
        return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
      };
      Type.prototype.add = function add(object) {
        if (this.get(object.name))
          throw Error("duplicate name '" + object.name + "' in " + this);
        if (object instanceof Field && object.extend === void 0) {
          if (this._fieldsById ? (
            /* istanbul ignore next */
            this._fieldsById[object.id]
          ) : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
          if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
          if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);
          if (object.parent)
            object.parent.remove(object);
          this.fields[object.name] = object;
          object.message = this;
          object.onAdd(this);
          return clearCache(this);
        }
        if (object instanceof OneOf) {
          if (!this.oneofs)
            this.oneofs = {};
          this.oneofs[object.name] = object;
          object.onAdd(this);
          return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
      };
      Type.prototype.remove = function remove(object) {
        if (object instanceof Field && object.extend === void 0) {
          if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.fields[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }
        if (object instanceof OneOf) {
          if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.oneofs[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
      };
      Type.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      Type.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
      Type.prototype.create = function create(properties) {
        return new this.ctor(properties);
      };
      Type.prototype.setup = function setup() {
        var fullName = this.fullName, types = [];
        for (var i2 = 0; i2 < /* initializes */
        this.fieldsArray.length; ++i2)
          types.push(this._fieldsArray[i2].resolve().resolvedType);
        this.encode = encoder(this)({
          Writer,
          types,
          util
        });
        this.decode = decoder(this)({
          Reader,
          types,
          util
        });
        this.verify = verifier(this)({
          types,
          util
        });
        this.fromObject = converter.fromObject(this)({
          types,
          util
        });
        this.toObject = converter.toObject(this)({
          types,
          util
        });
        var wrapper = wrappers[fullName];
        if (wrapper) {
          var originalThis = Object.create(this);
          originalThis.fromObject = this.fromObject;
          this.fromObject = wrapper.fromObject.bind(originalThis);
          originalThis.toObject = this.toObject;
          this.toObject = wrapper.toObject.bind(originalThis);
        }
        return this;
      };
      Type.prototype.encode = function encode_setup(message, writer) {
        return this.setup().encode(message, writer);
      };
      Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
      };
      Type.prototype.decode = function decode_setup(reader, length) {
        return this.setup().decode(reader, length);
      };
      Type.prototype.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof Reader))
          reader = Reader.create(reader);
        return this.decode(reader, reader.uint32());
      };
      Type.prototype.verify = function verify_setup(message) {
        return this.setup().verify(message);
      };
      Type.prototype.fromObject = function fromObject(object) {
        return this.setup().fromObject(object);
      };
      Type.prototype.toObject = function toObject(message, options) {
        return this.setup().toObject(message, options);
      };
      Type.d = function decorateType(typeName) {
        return function typeDecorator(target) {
          util.decorateType(target, typeName);
        };
      };
    }
  });

  // node_modules/protobufjs/src/root.js
  var require_root = __commonJS({
    "node_modules/protobufjs/src/root.js"(exports2, module2) {
      "use strict";
      module2.exports = Root;
      var Namespace = require_namespace();
      ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
      var Field = require_field(), Enum = require_enum(), OneOf = require_oneof(), util = require_util();
      var Type, parse, common;
      function Root(options) {
        Namespace.call(this, "", options);
        this.deferred = [];
        this.files = [];
      }
      Root.fromJSON = function fromJSON(json, root) {
        if (!root)
          root = new Root();
        if (json.options)
          root.setOptions(json.options);
        return root.addJSON(json.nested);
      };
      Root.prototype.resolvePath = util.path.resolve;
      Root.prototype.fetch = util.fetch;
      function SYNC() {
      }
      Root.prototype.load = function load(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = void 0;
        }
        var self2 = this;
        if (!callback)
          return util.asPromise(load, self2, filename, options);
        var sync = callback === SYNC;
        function finish(err, root) {
          if (!callback)
            return;
          if (sync)
            throw err;
          var cb = callback;
          callback = null;
          cb(err, root);
        }
        function getBundledFileName(filename2) {
          var idx = filename2.lastIndexOf("google/protobuf/");
          if (idx > -1) {
            var altname = filename2.substring(idx);
            if (altname in common) return altname;
          }
          return null;
        }
        function process(filename2, source) {
          try {
            if (util.isString(source) && source.charAt(0) === "{")
              source = JSON.parse(source);
            if (!util.isString(source))
              self2.setOptions(source.options).addJSON(source.nested);
            else {
              parse.filename = filename2;
              var parsed = parse(source, self2, options), resolved2, i3 = 0;
              if (parsed.imports) {
                for (; i3 < parsed.imports.length; ++i3)
                  if (resolved2 = getBundledFileName(parsed.imports[i3]) || self2.resolvePath(filename2, parsed.imports[i3]))
                    fetch2(resolved2);
              }
              if (parsed.weakImports) {
                for (i3 = 0; i3 < parsed.weakImports.length; ++i3)
                  if (resolved2 = getBundledFileName(parsed.weakImports[i3]) || self2.resolvePath(filename2, parsed.weakImports[i3]))
                    fetch2(resolved2, true);
              }
            }
          } catch (err) {
            finish(err);
          }
          if (!sync && !queued)
            finish(null, self2);
        }
        function fetch2(filename2, weak) {
          filename2 = getBundledFileName(filename2) || filename2;
          if (self2.files.indexOf(filename2) > -1)
            return;
          self2.files.push(filename2);
          if (filename2 in common) {
            if (sync)
              process(filename2, common[filename2]);
            else {
              ++queued;
              setTimeout(function() {
                --queued;
                process(filename2, common[filename2]);
              });
            }
            return;
          }
          if (sync) {
            var source;
            try {
              source = util.fs.readFileSync(filename2).toString("utf8");
            } catch (err) {
              if (!weak)
                finish(err);
              return;
            }
            process(filename2, source);
          } else {
            ++queued;
            self2.fetch(filename2, function(err, source2) {
              --queued;
              if (!callback)
                return;
              if (err) {
                if (!weak)
                  finish(err);
                else if (!queued)
                  finish(null, self2);
                return;
              }
              process(filename2, source2);
            });
          }
        }
        var queued = 0;
        if (util.isString(filename))
          filename = [filename];
        for (var i2 = 0, resolved; i2 < filename.length; ++i2)
          if (resolved = self2.resolvePath("", filename[i2]))
            fetch2(resolved);
        if (sync)
          return self2;
        if (!queued)
          finish(null, self2);
        return void 0;
      };
      Root.prototype.loadSync = function loadSync(filename, options) {
        if (!util.isNode)
          throw Error("not supported");
        return this.load(filename, options, SYNC);
      };
      Root.prototype.resolveAll = function resolveAll() {
        if (this.deferred.length)
          throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
          }).join(", "));
        return Namespace.prototype.resolveAll.call(this);
      };
      var exposeRe = /^[A-Z]/;
      function tryHandleExtension(root, field) {
        var extendedType = field.parent.lookup(field.extend);
        if (extendedType) {
          var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
          if (extendedType.get(sisterField.name)) {
            return true;
          }
          sisterField.declaringField = field;
          field.extensionField = sisterField;
          extendedType.add(sisterField);
          return true;
        }
        return false;
      }
      Root.prototype._handleAdd = function _handleAdd(object) {
        if (object instanceof Field) {
          if (
            /* an extension field (implies not part of a oneof) */
            object.extend !== void 0 && /* not already handled */
            !object.extensionField
          ) {
            if (!tryHandleExtension(this, object))
              this.deferred.push(object);
          }
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name))
            object.parent[object.name] = object.values;
        } else if (!(object instanceof OneOf)) {
          if (object instanceof Type)
            for (var i2 = 0; i2 < this.deferred.length; )
              if (tryHandleExtension(this, this.deferred[i2]))
                this.deferred.splice(i2, 1);
              else
                ++i2;
          for (var j = 0; j < /* initializes */
          object.nestedArray.length; ++j)
            this._handleAdd(object._nestedArray[j]);
          if (exposeRe.test(object.name))
            object.parent[object.name] = object;
        }
      };
      Root.prototype._handleRemove = function _handleRemove(object) {
        if (object instanceof Field) {
          if (
            /* an extension field */
            object.extend !== void 0
          ) {
            if (
              /* already handled */
              object.extensionField
            ) {
              object.extensionField.parent.remove(object.extensionField);
              object.extensionField = null;
            } else {
              var index = this.deferred.indexOf(object);
              if (index > -1)
                this.deferred.splice(index, 1);
            }
          }
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name))
            delete object.parent[object.name];
        } else if (object instanceof Namespace) {
          for (var i2 = 0; i2 < /* initializes */
          object.nestedArray.length; ++i2)
            this._handleRemove(object._nestedArray[i2]);
          if (exposeRe.test(object.name))
            delete object.parent[object.name];
        }
      };
      Root._configure = function(Type_, parse_, common_) {
        Type = Type_;
        parse = parse_;
        common = common_;
      };
    }
  });

  // node_modules/protobufjs/src/util.js
  var require_util = __commonJS({
    "node_modules/protobufjs/src/util.js"(exports2, module2) {
      "use strict";
      var util = module2.exports = require_minimal();
      var roots = require_roots();
      var Type, Enum;
      util.codegen = require_codegen();
      util.fetch = require_fetch();
      util.path = require_path();
      util.fs = util.inquire("fs");
      util.toArray = function toArray(object) {
        if (object) {
          var keys = Object.keys(object), array = new Array(keys.length), index = 0;
          while (index < keys.length)
            array[index] = object[keys[index++]];
          return array;
        }
        return [];
      };
      util.toObject = function toObject(array) {
        var object = {}, index = 0;
        while (index < array.length) {
          var key = array[index++], val = array[index++];
          if (val !== void 0)
            object[key] = val;
        }
        return object;
      };
      var safePropBackslashRe = /\\/g, safePropQuoteRe = /"/g;
      util.isReserved = function isReserved(name) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
      };
      util.safeProp = function safeProp(prop) {
        if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
          return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
        return "." + prop;
      };
      util.ucFirst = function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      };
      var camelCaseRe = /_([a-z])/g;
      util.camelCase = function camelCase(str) {
        return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
          return $1.toUpperCase();
        });
      };
      util.compareFieldsById = function compareFieldsById(a2, b) {
        return a2.id - b.id;
      };
      util.decorateType = function decorateType(ctor, typeName) {
        if (ctor.$type) {
          if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
          }
          return ctor.$type;
        }
        if (!Type)
          Type = require_type();
        var type = new Type(typeName || ctor.name);
        util.decorateRoot.add(type);
        type.ctor = ctor;
        Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
        Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
        return type;
      };
      var decorateEnumIndex = 0;
      util.decorateEnum = function decorateEnum(object) {
        if (object.$type)
          return object.$type;
        if (!Enum)
          Enum = require_enum();
        var enm = new Enum("Enum" + decorateEnumIndex++, object);
        util.decorateRoot.add(enm);
        Object.defineProperty(object, "$type", { value: enm, enumerable: false });
        return enm;
      };
      util.setProperty = function setProperty(dst, path, value) {
        function setProp(dst2, path2, value2) {
          var part = path2.shift();
          if (part === "__proto__" || part === "prototype") {
            return dst2;
          }
          if (path2.length > 0) {
            dst2[part] = setProp(dst2[part] || {}, path2, value2);
          } else {
            var prevValue = dst2[part];
            if (prevValue)
              value2 = [].concat(prevValue).concat(value2);
            dst2[part] = value2;
          }
          return dst2;
        }
        if (typeof dst !== "object")
          throw TypeError("dst must be an object");
        if (!path)
          throw TypeError("path must be specified");
        path = path.split(".");
        return setProp(dst, path, value);
      };
      Object.defineProperty(util, "decorateRoot", {
        get: function() {
          return roots["decorated"] || (roots["decorated"] = new (require_root())());
        }
      });
    }
  });

  // node_modules/protobufjs/src/object.js
  var require_object = __commonJS({
    "node_modules/protobufjs/src/object.js"(exports2, module2) {
      "use strict";
      module2.exports = ReflectionObject;
      ReflectionObject.className = "ReflectionObject";
      var util = require_util();
      var Root;
      function ReflectionObject(name, options) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        if (options && !util.isObject(options))
          throw TypeError("options must be an object");
        this.options = options;
        this.parsedOptions = null;
        this.name = name;
        this.parent = null;
        this.resolved = false;
        this.comment = null;
        this.filename = null;
      }
      Object.defineProperties(ReflectionObject.prototype, {
        /**
         * Reference to the root namespace.
         * @name ReflectionObject#root
         * @type {Root}
         * @readonly
         */
        root: {
          get: function() {
            var ptr = this;
            while (ptr.parent !== null)
              ptr = ptr.parent;
            return ptr;
          }
        },
        /**
         * Full name including leading dot.
         * @name ReflectionObject#fullName
         * @type {string}
         * @readonly
         */
        fullName: {
          get: function() {
            var path = [this.name], ptr = this.parent;
            while (ptr) {
              path.unshift(ptr.name);
              ptr = ptr.parent;
            }
            return path.join(".");
          }
        }
      });
      ReflectionObject.prototype.toJSON = /* istanbul ignore next */
      function toJSON() {
        throw Error();
      };
      ReflectionObject.prototype.onAdd = function onAdd(parent) {
        if (this.parent && this.parent !== parent)
          this.parent.remove(this);
        this.parent = parent;
        this.resolved = false;
        var root = parent.root;
        if (root instanceof Root)
          root._handleAdd(this);
      };
      ReflectionObject.prototype.onRemove = function onRemove(parent) {
        var root = parent.root;
        if (root instanceof Root)
          root._handleRemove(this);
        this.parent = null;
        this.resolved = false;
      };
      ReflectionObject.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if (this.root instanceof Root)
          this.resolved = true;
        return this;
      };
      ReflectionObject.prototype.getOption = function getOption(name) {
        if (this.options)
          return this.options[name];
        return void 0;
      };
      ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (!ifNotSet || !this.options || this.options[name] === void 0)
          (this.options || (this.options = {}))[name] = value;
        return this;
      };
      ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
        if (!this.parsedOptions) {
          this.parsedOptions = [];
        }
        var parsedOptions = this.parsedOptions;
        if (propName) {
          var opt = parsedOptions.find(function(opt2) {
            return Object.prototype.hasOwnProperty.call(opt2, name);
          });
          if (opt) {
            var newValue = opt[name];
            util.setProperty(newValue, propName, value);
          } else {
            opt = {};
            opt[name] = util.setProperty({}, propName, value);
            parsedOptions.push(opt);
          }
        } else {
          var newOpt = {};
          newOpt[name] = value;
          parsedOptions.push(newOpt);
        }
        return this;
      };
      ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
        if (options)
          for (var keys = Object.keys(options), i2 = 0; i2 < keys.length; ++i2)
            this.setOption(keys[i2], options[keys[i2]], ifNotSet);
        return this;
      };
      ReflectionObject.prototype.toString = function toString() {
        var className = this.constructor.className, fullName = this.fullName;
        if (fullName.length)
          return className + " " + fullName;
        return className;
      };
      ReflectionObject._configure = function(Root_) {
        Root = Root_;
      };
    }
  });

  // node_modules/protobufjs/src/enum.js
  var require_enum = __commonJS({
    "node_modules/protobufjs/src/enum.js"(exports2, module2) {
      "use strict";
      module2.exports = Enum;
      var ReflectionObject = require_object();
      ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
      var Namespace = require_namespace(), util = require_util();
      function Enum(name, values, options, comment, comments, valuesOptions) {
        ReflectionObject.call(this, name, options);
        if (values && typeof values !== "object")
          throw TypeError("values must be an object");
        this.valuesById = {};
        this.values = Object.create(this.valuesById);
        this.comment = comment;
        this.comments = comments || {};
        this.valuesOptions = valuesOptions;
        this.reserved = void 0;
        if (values) {
          for (var keys = Object.keys(values), i2 = 0; i2 < keys.length; ++i2)
            if (typeof values[keys[i2]] === "number")
              this.valuesById[this.values[keys[i2]] = values[keys[i2]]] = keys[i2];
        }
      }
      Enum.fromJSON = function fromJSON(name, json) {
        var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
        enm.reserved = json.reserved;
        return enm;
      };
      Enum.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          this.options,
          "valuesOptions",
          this.valuesOptions,
          "values",
          this.values,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "comment",
          keepComments ? this.comment : void 0,
          "comments",
          keepComments ? this.comments : void 0
        ]);
      };
      Enum.prototype.add = function add(name, id, comment, options) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        if (!util.isInteger(id))
          throw TypeError("id must be an integer");
        if (this.values[name] !== void 0)
          throw Error("duplicate name '" + name + "' in " + this);
        if (this.isReservedId(id))
          throw Error("id " + id + " is reserved in " + this);
        if (this.isReservedName(name))
          throw Error("name '" + name + "' is reserved in " + this);
        if (this.valuesById[id] !== void 0) {
          if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id " + id + " in " + this);
          this.values[name] = id;
        } else
          this.valuesById[this.values[name] = id] = name;
        if (options) {
          if (this.valuesOptions === void 0)
            this.valuesOptions = {};
          this.valuesOptions[name] = options || null;
        }
        this.comments[name] = comment || null;
        return this;
      };
      Enum.prototype.remove = function remove(name) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        var val = this.values[name];
        if (val == null)
          throw Error("name '" + name + "' does not exist in " + this);
        delete this.valuesById[val];
        delete this.values[name];
        delete this.comments[name];
        if (this.valuesOptions)
          delete this.valuesOptions[name];
        return this;
      };
      Enum.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      Enum.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
    }
  });

  // node_modules/protobufjs/src/encoder.js
  var require_encoder = __commonJS({
    "node_modules/protobufjs/src/encoder.js"(exports2, module2) {
      "use strict";
      module2.exports = encoder;
      var Enum = require_enum(), types = require_types(), util = require_util();
      function genTypePartial(gen, field, fieldIndex, ref) {
        return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
      }
      function encoder(mtype) {
        var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
        var i2, ref;
        var fields = (
          /* initializes */
          mtype.fieldsArray.slice().sort(util.compareFieldsById)
        );
        for (var i2 = 0; i2 < fields.length; ++i2) {
          var field = fields[i2].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
          ref = "m" + util.safeProp(field.name);
          if (field.map) {
            gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === void 0) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
            else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen("}")("}");
          } else if (field.repeated) {
            gen("if(%s!=null&&%s.length){", ref, ref);
            if (field.packed && types.packed[type] !== void 0) {
              gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
            } else {
              gen("for(var i=0;i<%s.length;++i)", ref);
              if (wireType === void 0)
                genTypePartial(gen, field, index, ref + "[i]");
              else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
            }
            gen("}");
          } else {
            if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref);
            else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
          }
        }
        return gen("return w");
      }
    }
  });

  // node_modules/protobufjs/src/index-light.js
  var require_index_light = __commonJS({
    "node_modules/protobufjs/src/index-light.js"(exports2, module2) {
      "use strict";
      var protobuf = module2.exports = require_index_minimal();
      protobuf.build = "light";
      function load(filename, root, callback) {
        if (typeof root === "function") {
          callback = root;
          root = new protobuf.Root();
        } else if (!root)
          root = new protobuf.Root();
        return root.load(filename, callback);
      }
      protobuf.load = load;
      function loadSync(filename, root) {
        if (!root)
          root = new protobuf.Root();
        return root.loadSync(filename);
      }
      protobuf.loadSync = loadSync;
      protobuf.encoder = require_encoder();
      protobuf.decoder = require_decoder();
      protobuf.verifier = require_verifier();
      protobuf.converter = require_converter();
      protobuf.ReflectionObject = require_object();
      protobuf.Namespace = require_namespace();
      protobuf.Root = require_root();
      protobuf.Enum = require_enum();
      protobuf.Type = require_type();
      protobuf.Field = require_field();
      protobuf.OneOf = require_oneof();
      protobuf.MapField = require_mapfield();
      protobuf.Service = require_service2();
      protobuf.Method = require_method();
      protobuf.Message = require_message();
      protobuf.wrappers = require_wrappers();
      protobuf.types = require_types();
      protobuf.util = require_util();
      protobuf.ReflectionObject._configure(protobuf.Root);
      protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
      protobuf.Root._configure(protobuf.Type);
      protobuf.Field._configure(protobuf.Type);
    }
  });

  // node_modules/protobufjs/src/tokenize.js
  var require_tokenize = __commonJS({
    "node_modules/protobufjs/src/tokenize.js"(exports2, module2) {
      "use strict";
      module2.exports = tokenize;
      var delimRe = /[\s{}=;:[\],'"()<>]/g, stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
      var setCommentRe = /^ *[*/]+ */, setCommentAltRe = /^\s*\*?\/*/, setCommentSplitRe = /\n/g, whitespaceRe = /\s/, unescapeRe = /\\(.?)/g;
      var unescapeMap = {
        "0": "\0",
        "r": "\r",
        "n": "\n",
        "t": "	"
      };
      function unescape(str) {
        return str.replace(unescapeRe, function($0, $1) {
          switch ($1) {
            case "\\":
            case "":
              return $1;
            default:
              return unescapeMap[$1] || "";
          }
        });
      }
      tokenize.unescape = unescape;
      function tokenize(source, alternateCommentMode) {
        source = source.toString();
        var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
        var stack = [];
        var stringDelim = null;
        function illegal(subject) {
          return Error("illegal " + subject + " (line " + line + ")");
        }
        function readString() {
          var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
          re.lastIndex = offset - 1;
          var match = re.exec(source);
          if (!match)
            throw illegal("string");
          offset = re.lastIndex;
          push(stringDelim);
          stringDelim = null;
          return unescape(match[1]);
        }
        function charAt(pos) {
          return source.charAt(pos);
        }
        function setComment(start, end, isLeading) {
          var comment = {
            type: source.charAt(start++),
            lineEmpty: false,
            leading: isLeading
          };
          var lookback;
          if (alternateCommentMode) {
            lookback = 2;
          } else {
            lookback = 3;
          }
          var commentOffset = start - lookback, c;
          do {
            if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
              comment.lineEmpty = true;
              break;
            }
          } while (c === " " || c === "	");
          var lines = source.substring(start, end).split(setCommentSplitRe);
          for (var i2 = 0; i2 < lines.length; ++i2)
            lines[i2] = lines[i2].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
          comment.text = lines.join("\n").trim();
          comments[line] = comment;
          lastCommentLine = line;
        }
        function isDoubleSlashCommentLine(startOffset) {
          var endOffset = findEndOfLine(startOffset);
          var lineText = source.substring(startOffset, endOffset);
          var isComment = /^\s*\/\//.test(lineText);
          return isComment;
        }
        function findEndOfLine(cursor) {
          var endOffset = cursor;
          while (endOffset < length && charAt(endOffset) !== "\n") {
            endOffset++;
          }
          return endOffset;
        }
        function next() {
          if (stack.length > 0)
            return stack.shift();
          if (stringDelim)
            return readString();
          var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
          do {
            if (offset === length)
              return null;
            repeat = false;
            while (whitespaceRe.test(curr = charAt(offset))) {
              if (curr === "\n") {
                isLeadingComment = true;
                ++line;
              }
              if (++offset === length)
                return null;
            }
            if (charAt(offset) === "/") {
              if (++offset === length) {
                throw illegal("comment");
              }
              if (charAt(offset) === "/") {
                if (!alternateCommentMode) {
                  isDoc = charAt(start = offset + 1) === "/";
                  while (charAt(++offset) !== "\n") {
                    if (offset === length) {
                      return null;
                    }
                  }
                  ++offset;
                  if (isDoc) {
                    setComment(start, offset - 1, isLeadingComment);
                    isLeadingComment = true;
                  }
                  ++line;
                  repeat = true;
                } else {
                  start = offset;
                  isDoc = false;
                  if (isDoubleSlashCommentLine(offset - 1)) {
                    isDoc = true;
                    do {
                      offset = findEndOfLine(offset);
                      if (offset === length) {
                        break;
                      }
                      offset++;
                      if (!isLeadingComment) {
                        break;
                      }
                    } while (isDoubleSlashCommentLine(offset));
                  } else {
                    offset = Math.min(length, findEndOfLine(offset) + 1);
                  }
                  if (isDoc) {
                    setComment(start, offset, isLeadingComment);
                    isLeadingComment = true;
                  }
                  line++;
                  repeat = true;
                }
              } else if ((curr = charAt(offset)) === "*") {
                start = offset + 1;
                isDoc = alternateCommentMode || charAt(start) === "*";
                do {
                  if (curr === "\n") {
                    ++line;
                  }
                  if (++offset === length) {
                    throw illegal("comment");
                  }
                  prev = curr;
                  curr = charAt(offset);
                } while (prev !== "*" || curr !== "/");
                ++offset;
                if (isDoc) {
                  setComment(start, offset - 2, isLeadingComment);
                  isLeadingComment = true;
                }
                repeat = true;
              } else {
                return "/";
              }
            }
          } while (repeat);
          var end = offset;
          delimRe.lastIndex = 0;
          var delim = delimRe.test(charAt(end++));
          if (!delim)
            while (end < length && !delimRe.test(charAt(end)))
              ++end;
          var token = source.substring(offset, offset = end);
          if (token === '"' || token === "'")
            stringDelim = token;
          return token;
        }
        function push(token) {
          stack.push(token);
        }
        function peek() {
          if (!stack.length) {
            var token = next();
            if (token === null)
              return null;
            push(token);
          }
          return stack[0];
        }
        function skip(expected, optional) {
          var actual = peek(), equals = actual === expected;
          if (equals) {
            next();
            return true;
          }
          if (!optional)
            throw illegal("token '" + actual + "', '" + expected + "' expected");
          return false;
        }
        function cmnt(trailingLine) {
          var ret = null;
          var comment;
          if (trailingLine === void 0) {
            comment = comments[line - 1];
            delete comments[line - 1];
            if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
              ret = comment.leading ? comment.text : null;
            }
          } else {
            if (lastCommentLine < trailingLine) {
              peek();
            }
            comment = comments[trailingLine];
            delete comments[trailingLine];
            if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
              ret = comment.leading ? null : comment.text;
            }
          }
          return ret;
        }
        return Object.defineProperty({
          next,
          peek,
          push,
          skip,
          cmnt
        }, "line", {
          get: function() {
            return line;
          }
        });
      }
    }
  });

  // node_modules/protobufjs/src/parse.js
  var require_parse = __commonJS({
    "node_modules/protobufjs/src/parse.js"(exports2, module2) {
      "use strict";
      module2.exports = parse;
      parse.filename = null;
      parse.defaults = { keepCase: false };
      var tokenize = require_tokenize(), Root = require_root(), Type = require_type(), Field = require_field(), MapField = require_mapfield(), OneOf = require_oneof(), Enum = require_enum(), Service = require_service2(), Method = require_method(), types = require_types(), util = require_util();
      var base10Re = /^[1-9][0-9]*$/, base10NegRe = /^-?[1-9][0-9]*$/, base16Re = /^0[x][0-9a-fA-F]+$/, base16NegRe = /^-?0[x][0-9a-fA-F]+$/, base8Re = /^0[0-7]+$/, base8NegRe = /^-?0[0-7]+$/, numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/, typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
      function parse(source, root, options) {
        if (!(root instanceof Root)) {
          options = root;
          root = new Root();
        }
        if (!options)
          options = parse.defaults;
        var preferTrailingComment = options.preferTrailingComment || false;
        var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
        var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
        var ptr = root;
        var applyCase = options.keepCase ? function(name) {
          return name;
        } : util.camelCase;
        function illegal(token2, name, insideTryCatch) {
          var filename = parse.filename;
          if (!insideTryCatch)
            parse.filename = null;
          return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
        }
        function readString() {
          var values = [], token2;
          do {
            if ((token2 = next()) !== '"' && token2 !== "'")
              throw illegal(token2);
            values.push(next());
            skip(token2);
            token2 = peek();
          } while (token2 === '"' || token2 === "'");
          return values.join("");
        }
        function readValue(acceptTypeRef) {
          var token2 = next();
          switch (token2) {
            case "'":
            case '"':
              push(token2);
              return readString();
            case "true":
            case "TRUE":
              return true;
            case "false":
            case "FALSE":
              return false;
          }
          try {
            return parseNumber(
              token2,
              /* insideTryCatch */
              true
            );
          } catch (e2) {
            if (acceptTypeRef && typeRefRe.test(token2))
              return token2;
            throw illegal(token2, "value");
          }
        }
        function readRanges(target, acceptStrings) {
          var token2, start;
          do {
            if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'"))
              target.push(readString());
            else
              target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
          } while (skip(",", true));
          var dummy = { options: void 0 };
          dummy.setOption = function(name, value) {
            if (this.options === void 0) this.options = {};
            this.options[name] = value;
          };
          ifBlock(
            dummy,
            function parseRange_block(token3) {
              if (token3 === "option") {
                parseOption(dummy, token3);
                skip(";");
              } else
                throw illegal(token3);
            },
            function parseRange_line() {
              parseInlineOptions(dummy);
            }
          );
        }
        function parseNumber(token2, insideTryCatch) {
          var sign = 1;
          if (token2.charAt(0) === "-") {
            sign = -1;
            token2 = token2.substring(1);
          }
          switch (token2) {
            case "inf":
            case "INF":
            case "Inf":
              return sign * Infinity;
            case "nan":
            case "NAN":
            case "Nan":
            case "NaN":
              return NaN;
            case "0":
              return 0;
          }
          if (base10Re.test(token2))
            return sign * parseInt(token2, 10);
          if (base16Re.test(token2))
            return sign * parseInt(token2, 16);
          if (base8Re.test(token2))
            return sign * parseInt(token2, 8);
          if (numberRe.test(token2))
            return sign * parseFloat(token2);
          throw illegal(token2, "number", insideTryCatch);
        }
        function parseId(token2, acceptNegative) {
          switch (token2) {
            case "max":
            case "MAX":
            case "Max":
              return 536870911;
            case "0":
              return 0;
          }
          if (!acceptNegative && token2.charAt(0) === "-")
            throw illegal(token2, "id");
          if (base10NegRe.test(token2))
            return parseInt(token2, 10);
          if (base16NegRe.test(token2))
            return parseInt(token2, 16);
          if (base8NegRe.test(token2))
            return parseInt(token2, 8);
          throw illegal(token2, "id");
        }
        function parsePackage() {
          if (pkg !== void 0)
            throw illegal("package");
          pkg = next();
          if (!typeRefRe.test(pkg))
            throw illegal(pkg, "name");
          ptr = ptr.define(pkg);
          skip(";");
        }
        function parseImport() {
          var token2 = peek();
          var whichImports;
          switch (token2) {
            case "weak":
              whichImports = weakImports || (weakImports = []);
              next();
              break;
            case "public":
              next();
            // eslint-disable-next-line no-fallthrough
            default:
              whichImports = imports || (imports = []);
              break;
          }
          token2 = readString();
          skip(";");
          whichImports.push(token2);
        }
        function parseSyntax() {
          skip("=");
          syntax = readString();
          isProto3 = syntax === "proto3";
          if (!isProto3 && syntax !== "proto2")
            throw illegal(syntax, "syntax");
          root.setOption("syntax", syntax);
          skip(";");
        }
        function parseCommon(parent, token2) {
          switch (token2) {
            case "option":
              parseOption(parent, token2);
              skip(";");
              return true;
            case "message":
              parseType(parent, token2);
              return true;
            case "enum":
              parseEnum(parent, token2);
              return true;
            case "service":
              parseService(parent, token2);
              return true;
            case "extend":
              parseExtension(parent, token2);
              return true;
          }
          return false;
        }
        function ifBlock(obj, fnIf, fnElse) {
          var trailingLine = tn.line;
          if (obj) {
            if (typeof obj.comment !== "string") {
              obj.comment = cmnt();
            }
            obj.filename = parse.filename;
          }
          if (skip("{", true)) {
            var token2;
            while ((token2 = next()) !== "}")
              fnIf(token2);
            skip(";", true);
          } else {
            if (fnElse)
              fnElse();
            skip(";");
            if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
              obj.comment = cmnt(trailingLine) || obj.comment;
          }
        }
        function parseType(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "type name");
          var type = new Type(token2);
          ifBlock(type, function parseType_block(token3) {
            if (parseCommon(type, token3))
              return;
            switch (token3) {
              case "map":
                parseMapField(type, token3);
                break;
              case "required":
              case "repeated":
                parseField(type, token3);
                break;
              case "optional":
                if (isProto3) {
                  parseField(type, "proto3_optional");
                } else {
                  parseField(type, "optional");
                }
                break;
              case "oneof":
                parseOneOf(type, token3);
                break;
              case "extensions":
                readRanges(type.extensions || (type.extensions = []));
                break;
              case "reserved":
                readRanges(type.reserved || (type.reserved = []), true);
                break;
              default:
                if (!isProto3 || !typeRefRe.test(token3))
                  throw illegal(token3);
                push(token3);
                parseField(type, "optional");
                break;
            }
          });
          parent.add(type);
        }
        function parseField(parent, rule, extend) {
          var type = next();
          if (type === "group") {
            parseGroup(parent, rule);
            return;
          }
          while (type.endsWith(".") || peek().startsWith(".")) {
            type += next();
          }
          if (!typeRefRe.test(type))
            throw illegal(type, "type");
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          name = applyCase(name);
          skip("=");
          var field = new Field(name, parseId(next()), type, rule, extend);
          ifBlock(field, function parseField_block(token2) {
            if (token2 === "option") {
              parseOption(field, token2);
              skip(";");
            } else
              throw illegal(token2);
          }, function parseField_line() {
            parseInlineOptions(field);
          });
          if (rule === "proto3_optional") {
            var oneof = new OneOf("_" + name);
            field.setOption("proto3_optional", true);
            oneof.add(field);
            parent.add(oneof);
          } else {
            parent.add(field);
          }
          if (!isProto3 && field.repeated && (types.packed[type] !== void 0 || types.basic[type] === void 0))
            field.setOption(
              "packed",
              false,
              /* ifNotSet */
              true
            );
        }
        function parseGroup(parent, rule) {
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          var fieldName = util.lcFirst(name);
          if (name === fieldName)
            name = util.ucFirst(name);
          skip("=");
          var id = parseId(next());
          var type = new Type(name);
          type.group = true;
          var field = new Field(fieldName, id, name, rule);
          field.filename = parse.filename;
          ifBlock(type, function parseGroup_block(token2) {
            switch (token2) {
              case "option":
                parseOption(type, token2);
                skip(";");
                break;
              case "required":
              case "repeated":
                parseField(type, token2);
                break;
              case "optional":
                if (isProto3) {
                  parseField(type, "proto3_optional");
                } else {
                  parseField(type, "optional");
                }
                break;
              case "message":
                parseType(type, token2);
                break;
              case "enum":
                parseEnum(type, token2);
                break;
              /* istanbul ignore next */
              default:
                throw illegal(token2);
            }
          });
          parent.add(type).add(field);
        }
        function parseMapField(parent) {
          skip("<");
          var keyType = next();
          if (types.mapKey[keyType] === void 0)
            throw illegal(keyType, "type");
          skip(",");
          var valueType = next();
          if (!typeRefRe.test(valueType))
            throw illegal(valueType, "type");
          skip(">");
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          skip("=");
          var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
          ifBlock(field, function parseMapField_block(token2) {
            if (token2 === "option") {
              parseOption(field, token2);
              skip(";");
            } else
              throw illegal(token2);
          }, function parseMapField_line() {
            parseInlineOptions(field);
          });
          parent.add(field);
        }
        function parseOneOf(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var oneof = new OneOf(applyCase(token2));
          ifBlock(oneof, function parseOneOf_block(token3) {
            if (token3 === "option") {
              parseOption(oneof, token3);
              skip(";");
            } else {
              push(token3);
              parseField(oneof, "optional");
            }
          });
          parent.add(oneof);
        }
        function parseEnum(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var enm = new Enum(token2);
          ifBlock(enm, function parseEnum_block(token3) {
            switch (token3) {
              case "option":
                parseOption(enm, token3);
                skip(";");
                break;
              case "reserved":
                readRanges(enm.reserved || (enm.reserved = []), true);
                break;
              default:
                parseEnumValue(enm, token3);
            }
          });
          parent.add(enm);
        }
        function parseEnumValue(parent, token2) {
          if (!nameRe.test(token2))
            throw illegal(token2, "name");
          skip("=");
          var value = parseId(next(), true), dummy = {
            options: void 0
          };
          dummy.setOption = function(name, value2) {
            if (this.options === void 0)
              this.options = {};
            this.options[name] = value2;
          };
          ifBlock(dummy, function parseEnumValue_block(token3) {
            if (token3 === "option") {
              parseOption(dummy, token3);
              skip(";");
            } else
              throw illegal(token3);
          }, function parseEnumValue_line() {
            parseInlineOptions(dummy);
          });
          parent.add(token2, value, dummy.comment, dummy.options);
        }
        function parseOption(parent, token2) {
          var isCustom = skip("(", true);
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2, "name");
          var name = token2;
          var option = name;
          var propName;
          if (isCustom) {
            skip(")");
            name = "(" + name + ")";
            option = name;
            token2 = peek();
            if (fqTypeRefRe.test(token2)) {
              propName = token2.slice(1);
              name += token2;
              next();
            }
          }
          skip("=");
          var optionValue = parseOptionValue(parent, name);
          setParsedOption(parent, option, optionValue, propName);
        }
        function parseOptionValue(parent, name) {
          if (skip("{", true)) {
            var objectResult = {};
            while (!skip("}", true)) {
              if (!nameRe.test(token = next())) {
                throw illegal(token, "name");
              }
              if (token === null) {
                throw illegal(token, "end of input");
              }
              var value;
              var propName = token;
              skip(":", true);
              if (peek() === "{")
                value = parseOptionValue(parent, name + "." + token);
              else if (peek() === "[") {
                value = [];
                var lastValue;
                if (skip("[", true)) {
                  do {
                    lastValue = readValue(true);
                    value.push(lastValue);
                  } while (skip(",", true));
                  skip("]");
                  if (typeof lastValue !== "undefined") {
                    setOption(parent, name + "." + token, lastValue);
                  }
                }
              } else {
                value = readValue(true);
                setOption(parent, name + "." + token, value);
              }
              var prevValue = objectResult[propName];
              if (prevValue)
                value = [].concat(prevValue).concat(value);
              objectResult[propName] = value;
              skip(",", true);
              skip(";", true);
            }
            return objectResult;
          }
          var simpleValue = readValue(true);
          setOption(parent, name, simpleValue);
          return simpleValue;
        }
        function setOption(parent, name, value) {
          if (parent.setOption)
            parent.setOption(name, value);
        }
        function setParsedOption(parent, name, value, propName) {
          if (parent.setParsedOption)
            parent.setParsedOption(name, value, propName);
        }
        function parseInlineOptions(parent) {
          if (skip("[", true)) {
            do {
              parseOption(parent, "option");
            } while (skip(",", true));
            skip("]");
          }
          return parent;
        }
        function parseService(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "service name");
          var service = new Service(token2);
          ifBlock(service, function parseService_block(token3) {
            if (parseCommon(service, token3))
              return;
            if (token3 === "rpc")
              parseMethod(service, token3);
            else
              throw illegal(token3);
          });
          parent.add(service);
        }
        function parseMethod(parent, token2) {
          var commentText = cmnt();
          var type = token2;
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var name = token2, requestType, requestStream, responseType, responseStream;
          skip("(");
          if (skip("stream", true))
            requestStream = true;
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2);
          requestType = token2;
          skip(")");
          skip("returns");
          skip("(");
          if (skip("stream", true))
            responseStream = true;
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2);
          responseType = token2;
          skip(")");
          var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
          method.comment = commentText;
          ifBlock(method, function parseMethod_block(token3) {
            if (token3 === "option") {
              parseOption(method, token3);
              skip(";");
            } else
              throw illegal(token3);
          });
          parent.add(method);
        }
        function parseExtension(parent, token2) {
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2, "reference");
          var reference = token2;
          ifBlock(null, function parseExtension_block(token3) {
            switch (token3) {
              case "required":
              case "repeated":
                parseField(parent, token3, reference);
                break;
              case "optional":
                if (isProto3) {
                  parseField(parent, "proto3_optional", reference);
                } else {
                  parseField(parent, "optional", reference);
                }
                break;
              default:
                if (!isProto3 || !typeRefRe.test(token3))
                  throw illegal(token3);
                push(token3);
                parseField(parent, "optional", reference);
                break;
            }
          });
        }
        var token;
        while ((token = next()) !== null) {
          switch (token) {
            case "package":
              if (!head)
                throw illegal(token);
              parsePackage();
              break;
            case "import":
              if (!head)
                throw illegal(token);
              parseImport();
              break;
            case "syntax":
              if (!head)
                throw illegal(token);
              parseSyntax();
              break;
            case "option":
              parseOption(ptr, token);
              skip(";");
              break;
            default:
              if (parseCommon(ptr, token)) {
                head = false;
                continue;
              }
              throw illegal(token);
          }
        }
        parse.filename = null;
        return {
          "package": pkg,
          "imports": imports,
          weakImports,
          syntax,
          root
        };
      }
    }
  });

  // node_modules/protobufjs/src/common.js
  var require_common = __commonJS({
    "node_modules/protobufjs/src/common.js"(exports2, module2) {
      "use strict";
      module2.exports = common;
      var commonRe = /\/|\./;
      function common(name, json) {
        if (!commonRe.test(name)) {
          name = "google/protobuf/" + name + ".proto";
          json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
        }
        common[name] = json;
      }
      common("any", {
        /**
         * Properties of a google.protobuf.Any message.
         * @interface IAny
         * @type {Object}
         * @property {string} [typeUrl]
         * @property {Uint8Array} [bytes]
         * @memberof common
         */
        Any: {
          fields: {
            type_url: {
              type: "string",
              id: 1
            },
            value: {
              type: "bytes",
              id: 2
            }
          }
        }
      });
      var timeType;
      common("duration", {
        /**
         * Properties of a google.protobuf.Duration message.
         * @interface IDuration
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Duration: timeType = {
          fields: {
            seconds: {
              type: "int64",
              id: 1
            },
            nanos: {
              type: "int32",
              id: 2
            }
          }
        }
      });
      common("timestamp", {
        /**
         * Properties of a google.protobuf.Timestamp message.
         * @interface ITimestamp
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Timestamp: timeType
      });
      common("empty", {
        /**
         * Properties of a google.protobuf.Empty message.
         * @interface IEmpty
         * @memberof common
         */
        Empty: {
          fields: {}
        }
      });
      common("struct", {
        /**
         * Properties of a google.protobuf.Struct message.
         * @interface IStruct
         * @type {Object}
         * @property {Object.<string,IValue>} [fields]
         * @memberof common
         */
        Struct: {
          fields: {
            fields: {
              keyType: "string",
              type: "Value",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Value message.
         * @interface IValue
         * @type {Object}
         * @property {string} [kind]
         * @property {0} [nullValue]
         * @property {number} [numberValue]
         * @property {string} [stringValue]
         * @property {boolean} [boolValue]
         * @property {IStruct} [structValue]
         * @property {IListValue} [listValue]
         * @memberof common
         */
        Value: {
          oneofs: {
            kind: {
              oneof: [
                "nullValue",
                "numberValue",
                "stringValue",
                "boolValue",
                "structValue",
                "listValue"
              ]
            }
          },
          fields: {
            nullValue: {
              type: "NullValue",
              id: 1
            },
            numberValue: {
              type: "double",
              id: 2
            },
            stringValue: {
              type: "string",
              id: 3
            },
            boolValue: {
              type: "bool",
              id: 4
            },
            structValue: {
              type: "Struct",
              id: 5
            },
            listValue: {
              type: "ListValue",
              id: 6
            }
          }
        },
        NullValue: {
          values: {
            NULL_VALUE: 0
          }
        },
        /**
         * Properties of a google.protobuf.ListValue message.
         * @interface IListValue
         * @type {Object}
         * @property {Array.<IValue>} [values]
         * @memberof common
         */
        ListValue: {
          fields: {
            values: {
              rule: "repeated",
              type: "Value",
              id: 1
            }
          }
        }
      });
      common("wrappers", {
        /**
         * Properties of a google.protobuf.DoubleValue message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        DoubleValue: {
          fields: {
            value: {
              type: "double",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.FloatValue message.
         * @interface IFloatValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FloatValue: {
          fields: {
            value: {
              type: "float",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Int64Value message.
         * @interface IInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        Int64Value: {
          fields: {
            value: {
              type: "int64",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.UInt64Value message.
         * @interface IUInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        UInt64Value: {
          fields: {
            value: {
              type: "uint64",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Int32Value message.
         * @interface IInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        Int32Value: {
          fields: {
            value: {
              type: "int32",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.UInt32Value message.
         * @interface IUInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        UInt32Value: {
          fields: {
            value: {
              type: "uint32",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.BoolValue message.
         * @interface IBoolValue
         * @type {Object}
         * @property {boolean} [value]
         * @memberof common
         */
        BoolValue: {
          fields: {
            value: {
              type: "bool",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.StringValue message.
         * @interface IStringValue
         * @type {Object}
         * @property {string} [value]
         * @memberof common
         */
        StringValue: {
          fields: {
            value: {
              type: "string",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.BytesValue message.
         * @interface IBytesValue
         * @type {Object}
         * @property {Uint8Array} [value]
         * @memberof common
         */
        BytesValue: {
          fields: {
            value: {
              type: "bytes",
              id: 1
            }
          }
        }
      });
      common("field_mask", {
        /**
         * Properties of a google.protobuf.FieldMask message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FieldMask: {
          fields: {
            paths: {
              rule: "repeated",
              type: "string",
              id: 1
            }
          }
        }
      });
      common.get = function get(file) {
        return common[file] || null;
      };
    }
  });

  // node_modules/protobufjs/src/index.js
  var require_src = __commonJS({
    "node_modules/protobufjs/src/index.js"(exports2, module2) {
      "use strict";
      var protobuf = module2.exports = require_index_light();
      protobuf.build = "full";
      protobuf.tokenize = require_tokenize();
      protobuf.parse = require_parse();
      protobuf.common = require_common();
      protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
    }
  });

  // node_modules/protobufjs/index.js
  var require_protobufjs = __commonJS({
    "node_modules/protobufjs/index.js"(exports2, module2) {
      "use strict";
      module2.exports = require_src();
    }
  });

  // src/lib/fetch.ts
  async function fetchApi(url, init) {
    init = await makeInit(init);
    console.log(url, init);
    return await fetch(url, init);
  }
  var import_protobufjs, makeInit, fetchFile, fetchText, BYTE_MARK, fetchProto;
  var init_fetch = __esm({
    "src/lib/fetch.ts"() {
      "use strict";
      import_protobufjs = __toESM(require_protobufjs(), 1);
      makeInit = async (init) => {
        const defaultHeaders = {
          "Connection": "keep-alive",
          "Accept": "*/*",
          "Accept-Language": "*",
          "Sec-Fetch-Mode": "cors",
          "Accept-Encoding": "gzip, deflate"
        };
        if (init == null ? void 0 : init.headers) {
          if (init.headers instanceof Headers) {
            for (const [name, value] of Object.entries(defaultHeaders)) {
              if (!init.headers.get(name)) init.headers.set(name, value);
            }
          } else {
            init.headers = __spreadValues(__spreadValues({}, defaultHeaders), init.headers);
          }
        } else {
          init = __spreadProps(__spreadValues({}, init), {
            headers: defaultHeaders
          });
        }
        return init;
      };
      fetchFile = async function(url, init) {
        init = await makeInit(init);
        console.log(url, init);
        try {
          const res = await fetch(url, init);
          if (!res.ok) return "";
          const arrayBuffer = await res.arrayBuffer();
          return Buffer.from(arrayBuffer).toString("base64");
        } catch (e2) {
          return "";
        }
      };
      fetchText = async function(url, init, encoding) {
        init = await makeInit(init);
        console.log(url, init);
        try {
          const res = await fetch(url, init);
          if (!res.ok) return "";
          const arrayBuffer = await res.arrayBuffer();
          const decoder = new TextDecoder(encoding);
          return decoder.decode(arrayBuffer);
        } catch (e2) {
          return "";
        }
      };
      BYTE_MARK = BigInt((1 << 8) - 1);
      fetchProto = async function(protoInit, url, init) {
        const protoRoot = (0, import_protobufjs.parse)(protoInit.proto).root;
        const RequestMessge = protoRoot.lookupType(protoInit.requestType);
        if (RequestMessge.verify(protoInit.requestData)) {
          throw new Error("Invalid Proto");
        }
        const encodedrequest = RequestMessge.encode(protoInit.requestData).finish();
        const requestLength = BigInt(encodedrequest.length);
        const headers = new Uint8Array(
          Array(5).fill(0).map((v, idx) => {
            if (idx === 0) return 0;
            return Number(requestLength >> BigInt(8 * (5 - idx - 1)) & BYTE_MARK);
          })
        );
        init = await makeInit(init);
        const bodyArray = new Uint8Array(headers.length + encodedrequest.length);
        bodyArray.set(headers, 0);
        bodyArray.set(encodedrequest, headers.length);
        return fetch(url, __spreadProps(__spreadValues({
          method: "POST"
        }, init), {
          body: bodyArray
        })).then((r2) => r2.arrayBuffer()).then((arr) => {
          const payload = new Uint8Array(arr);
          const length = Number(
            BigInt(payload[1] << 24) | BigInt(payload[2] << 16) | BigInt(payload[3] << 8) | BigInt(payload[4])
          );
          const ResponseMessage = protoRoot.lookupType(protoInit.responseType);
          return ResponseMessage.decode(payload.slice(5, 5 + length));
        });
      };
    }
  });

  // src/libs/fetch.ts
  var fetch_exports = {};
  __export(fetch_exports, {
    fetchApi: () => fetchApi,
    fetchFile: () => fetchFile,
    fetchProto: () => fetchProto,
    fetchText: () => fetchText
  });
  var init_fetch2 = __esm({
    "src/libs/fetch.ts"() {
      "use strict";
      init_fetch();
    }
  });

  // src/types/constants.ts
  var NovelStatus, defaultCover;
  var init_constants = __esm({
    "src/types/constants.ts"() {
      "use strict";
      NovelStatus = {
        Unknown: "Unknown",
        Ongoing: "Ongoing",
        Completed: "Completed",
        Licensed: "Licensed",
        PublishingFinished: "Publishing Finished",
        Cancelled: "Cancelled",
        OnHiatus: "On Hiatus"
      };
      defaultCover = "https://github.com/LNReader/lnreader-plugins/blob/main/icons/src/coverNotAvailable.jpg?raw=true";
    }
  });

  // src/libs/novelStatus.ts
  var novelStatus_exports = {};
  __export(novelStatus_exports, {
    NovelStatus: () => NovelStatus
  });
  var init_novelStatus = __esm({
    "src/libs/novelStatus.ts"() {
      "use strict";
      init_constants();
    }
  });

  // src/types/filters.ts
  var FilterTypes;
  var init_filters = __esm({
    "src/types/filters.ts"() {
      "use strict";
      FilterTypes = /* @__PURE__ */ ((FilterTypes2) => {
        FilterTypes2["TextInput"] = "Text";
        FilterTypes2["Picker"] = "Picker";
        FilterTypes2["CheckboxGroup"] = "Checkbox";
        FilterTypes2["Switch"] = "Switch";
        FilterTypes2["ExcludableCheckboxGroup"] = "XCheckbox";
        return FilterTypes2;
      })(FilterTypes || {});
    }
  });

  // src/libs/filterInputs.ts
  var filterInputs_exports = {};
  __export(filterInputs_exports, {
    FilterTypes: () => FilterTypes
  });
  var init_filterInputs = __esm({
    "src/libs/filterInputs.ts"() {
      "use strict";
      init_filters();
    }
  });

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
      !(function(t2, e2) {
        "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e2();
      })(exports2, (function() {
        "use strict";
        var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u = "hour", a2 = "day", o2 = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
          var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
          return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
        } }, m = function(t3, e3, n3) {
          var r3 = String(t3);
          return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
        }, v = { s: m, z: function(t3) {
          var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
          return (e3 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i3, 2, "0");
        }, m: function t3(e3, n3) {
          if (e3.date() < n3.date()) return -t3(n3, e3);
          var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c), s3 = n3 - i3 < 0, u2 = e3.clone().add(r3 + (s3 ? -1 : 1), c);
          return +(-(r3 + (n3 - i3) / (s3 ? i3 - u2 : u2 - i3)) || 0);
        }, a: function(t3) {
          return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
        }, p: function(t3) {
          return { M: c, y: h, w: o2, d: a2, D: d, h: u, m: s2, s: i2, ms: r2, Q: f }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t3) {
          return void 0 === t3;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t3) {
          return t3 instanceof _ || !(!t3 || !t3[p]);
        }, w = function t3(e3, n3, r3) {
          var i3;
          if (!e3) return g;
          if ("string" == typeof e3) {
            var s3 = e3.toLowerCase();
            D[s3] && (i3 = s3), n3 && (D[s3] = n3, i3 = s3);
            var u2 = e3.split("-");
            if (!i3 && u2.length > 1) return t3(u2[0]);
          } else {
            var a3 = e3.name;
            D[a3] = e3, i3 = a3;
          }
          return !r3 && i3 && (g = i3), i3 || !r3 && g;
        }, O = function(t3, e3) {
          if (S(t3)) return t3.clone();
          var n3 = "object" == typeof e3 ? e3 : {};
          return n3.date = t3, n3.args = arguments, new _(n3);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t3, e3) {
          return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _ = (function() {
          function M2(t3) {
            this.$L = w(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t3) {
            this.$d = (function(t4) {
              var e3 = t4.date, n3 = t4.utc;
              if (null === e3) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e3)) return /* @__PURE__ */ new Date();
              if (e3 instanceof Date) return new Date(e3);
              if ("string" == typeof e3 && !/Z$/i.test(e3)) {
                var r3 = e3.match($);
                if (r3) {
                  var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                  return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
                }
              }
              return new Date(e3);
            })(t3), this.init();
          }, m2.init = function() {
            var t3 = this.$d;
            this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t3, e3) {
            var n3 = O(t3);
            return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
          }, m2.isAfter = function(t3, e3) {
            return O(t3) < this.startOf(e3);
          }, m2.isBefore = function(t3, e3) {
            return this.endOf(e3) < O(t3);
          }, m2.$g = function(t3, e3, n3) {
            return b.u(t3) ? this[e3] : this.set(n3, t3);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t3, e3) {
            var n3 = this, r3 = !!b.u(e3) || e3, f2 = b.p(t3), l2 = function(t4, e4) {
              var i3 = b.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
              return r3 ? i3 : i3.endOf(a2);
            }, $2 = function(t4, e4) {
              return b.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r3 ? l2(1, 0) : l2(31, 11);
              case c:
                return r3 ? l2(1, M3) : l2(0, M3 + 1);
              case o2:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
              case a2:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s2:
                return $2(v2 + "Seconds", 2);
              case i2:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t3) {
            return this.startOf(t3, false);
          }, m2.$set = function(t3, e3) {
            var n3, o3 = b.p(t3), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n3 = {}, n3[a2] = f2 + "Date", n3[d] = f2 + "Date", n3[c] = f2 + "Month", n3[h] = f2 + "FullYear", n3[u] = f2 + "Hours", n3[s2] = f2 + "Minutes", n3[i2] = f2 + "Seconds", n3[r2] = f2 + "Milliseconds", n3)[o3], $2 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
            if (o3 === c || o3 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t3, e3) {
            return this.clone().$set(t3, e3);
          }, m2.get = function(t3) {
            return this[b.p(t3)]();
          }, m2.add = function(r3, f2) {
            var d2, l2 = this;
            r3 = Number(r3);
            var $2 = b.p(f2), y2 = function(t3) {
              var e3 = O(l2);
              return b.w(e3.date(e3.date() + Math.round(t3 * r3)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r3);
            if ($2 === h) return this.set(h, this.$y + r3);
            if ($2 === a2) return y2(1);
            if ($2 === o2) return y2(7);
            var M3 = (d2 = {}, d2[s2] = e2, d2[u] = n2, d2[i2] = t2, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t3, e3) {
            return this.add(-1 * t3, e3);
          }, m2.format = function(t3) {
            var e3 = this, n3 = this.$locale();
            if (!this.isValid()) return n3.invalidDate || l;
            var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b.z(this), s3 = this.$H, u2 = this.$m, a3 = this.$M, o3 = n3.weekdays, c2 = n3.months, f2 = n3.meridiem, h2 = function(t4, n4, i4, s4) {
              return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
            }, d2 = function(t4) {
              return b.s(s3 % 12 || 12, t4, "0");
            }, $2 = f2 || function(t4, e4, n4) {
              var r4 = t4 < 12 ? "AM" : "PM";
              return n4 ? r4.toLowerCase() : r4;
            };
            return r3.replace(y, (function(t4, r4) {
              return r4 || (function(t5) {
                switch (t5) {
                  case "YY":
                    return String(e3.$y).slice(-2);
                  case "YYYY":
                    return b.s(e3.$y, 4, "0");
                  case "M":
                    return a3 + 1;
                  case "MM":
                    return b.s(a3 + 1, 2, "0");
                  case "MMM":
                    return h2(n3.monthsShort, a3, c2, 3);
                  case "MMMM":
                    return h2(c2, a3);
                  case "D":
                    return e3.$D;
                  case "DD":
                    return b.s(e3.$D, 2, "0");
                  case "d":
                    return String(e3.$W);
                  case "dd":
                    return h2(n3.weekdaysMin, e3.$W, o3, 2);
                  case "ddd":
                    return h2(n3.weekdaysShort, e3.$W, o3, 3);
                  case "dddd":
                    return o3[e3.$W];
                  case "H":
                    return String(s3);
                  case "HH":
                    return b.s(s3, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s3, u2, true);
                  case "A":
                    return $2(s3, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e3.$s);
                  case "ss":
                    return b.s(e3.$s, 2, "0");
                  case "SSS":
                    return b.s(e3.$ms, 3, "0");
                  case "Z":
                    return i3;
                }
                return null;
              })(t4) || i3.replace(":", "");
            }));
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r3, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e2, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o2:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a2:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n2;
                break;
              case s2:
                $2 = g2 / e2;
                break;
              case i2:
                $2 = g2 / t2;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t3, e3) {
            if (!t3) return this.$L;
            var n3 = this.clone(), r3 = w(t3, e3, true);
            return r3 && (n3.$L = r3), n3;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        })(), k = _.prototype;
        return O.prototype = k, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u], ["$W", a2], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t3) {
          k[t3[1]] = function(e3) {
            return this.$g(e3, t3[0], t3[1]);
          };
        })), O.extend = function(t3, e3) {
          return t3.$i || (t3(e3, _, O), t3.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t3) {
          return O(1e3 * t3);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      }));
    }
  });

  // .js/plugins/russian/NovelCool(RU)[novelcool].js
  var e = function(e2, t2, o2, n2) {
    return new (o2 || (o2 = Promise))((function(r2, a2) {
      function i2(e3) {
        try {
          p(n2.next(e3));
        } catch (e4) {
          a2(e4);
        }
      }
      function s2(e3) {
        try {
          p(n2.throw(e3));
        } catch (e4) {
          a2(e4);
        }
      }
      function p(e3) {
        var t3;
        e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof o2 ? t3 : new o2((function(e4) {
          e4(t3);
        }))).then(i2, s2);
      }
      p((n2 = n2.apply(e2, t2 || [])).next());
    }));
  }, t = function(e2, t2) {
    var o2, n2, r2, a2 = { label: 0, sent: function() {
      if (1 & r2[0]) throw r2[1];
      return r2[1];
    }, trys: [], ops: [] }, i2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i2.next = s2(0), i2.throw = s2(1), i2.return = s2(2), "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
      return this;
    }), i2;
    function s2(s3) {
      return function(p) {
        return (function(s4) {
          if (o2) throw new TypeError("Generator is already executing.");
          for (; i2 && (i2 = 0, s4[0] && (a2 = 0)), a2; ) try {
            if (o2 = 1, n2 && (r2 = 2 & s4[0] ? n2.return : s4[0] ? n2.throw || ((r2 = n2.return) && r2.call(n2), 0) : n2.next) && !(r2 = r2.call(n2, s4[1])).done) return r2;
            switch (n2 = 0, r2 && (s4 = [2 & s4[0], r2.value]), s4[0]) {
              case 0:
              case 1:
                r2 = s4;
                break;
              case 4:
                return a2.label++, { value: s4[1], done: false };
              case 5:
                a2.label++, n2 = s4[1], s4 = [0];
                continue;
              case 7:
                s4 = a2.ops.pop(), a2.trys.pop();
                continue;
              default:
                if (!(r2 = a2.trys, (r2 = r2.length > 0 && r2[r2.length - 1]) || 6 !== s4[0] && 2 !== s4[0])) {
                  a2 = 0;
                  continue;
                }
                if (3 === s4[0] && (!r2 || s4[1] > r2[0] && s4[1] < r2[3])) {
                  a2.label = s4[1];
                  break;
                }
                if (6 === s4[0] && a2.label < r2[1]) {
                  a2.label = r2[1], r2 = s4;
                  break;
                }
                if (r2 && a2.label < r2[2]) {
                  a2.label = r2[2], a2.ops.push(s4);
                  break;
                }
                r2[2] && a2.ops.pop(), a2.trys.pop();
                continue;
            }
            s4 = t2.call(e2, a2);
          } catch (e3) {
            s4 = [6, e3], n2 = 0;
          } finally {
            o2 = r2 = 0;
          }
          if (5 & s4[0]) throw s4[1];
          return { value: s4[0] ? s4[1] : void 0, done: true };
        })([s3, p]);
      };
    }
  }, o = function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  var n = (init_fetch2(), __toCommonJS(fetch_exports)), r = (init_novelStatus(), __toCommonJS(novelStatus_exports)), a = (init_filterInputs(), __toCommonJS(filterInputs_exports)), i = o(require_dayjs_min()), s = new ((function() {
    function o2(e2) {
      var t2, o3 = this;
      this.resolveUrl = function(e3, t3) {
        return o3.site + (t3 ? "/novel/" : "/chapter/") + e3.split("?id=")[0];
      }, this.id = e2.id, this.name = e2.sourceName, this.site = e2.sourceSite, this.icon = "multisrc/novelcool/novelcool/icon.png", this.mainUrl = "https://api.novelcool.com", this.version = "1.0.0", this.options = null !== (t2 = e2.options) && void 0 !== t2 ? t2 : {}, this.filters = { sortby: { label: "Order by", value: "hot", options: [{ label: "Hottest", value: "hot" }, { label: "Latest", value: "latest" }, { label: "New Books", value: "new_book" }], type: a.FilterTypes.Picker } };
    }
    return o2.prototype.popularNovels = function(o3, r2) {
      return e(this, arguments, void 0, (function(e2, o4) {
        var r3, a2, i2, s2, p = o4.filters, c = o4.showLatestNovels;
        return t(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return r3 = c ? "latest" : (null === (s2 = null == p ? void 0 : p.sortby) || void 0 === s2 ? void 0 : s2.value) || "hot", [4, (0, n.fetchApi)(this.mainUrl + "/elite/" + r3, { headers: { "User-Agent": this.options.app.userAgent, "Content-Type": "application/x-www-form-urlencoded" }, method: "post", body: new URLSearchParams({ appId: this.options.app.appId, secret: this.options.app.secret, package_name: this.options.app.package_name, lc_type: "novel", lang: this.options.langCode, page: e2.toString(), page_size: "20" }).toString() }).then((function(e3) {
                return e3.json();
              }))];
            case 1:
              return a2 = t2.sent().list, i2 = [], a2.forEach((function(e3) {
                return i2.push({ name: e3.name, cover: e3.cover, path: e3.visit_path + "?id=" + e3.id });
              })), [2, i2];
          }
        }));
      }));
    }, o2.prototype.parseNovel = function(o3) {
      return e(this, void 0, void 0, (function() {
        var e2, a2, s2, p;
        return t(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return e2 = o3.split("?id=")[1], [4, (0, n.fetchApi)(this.mainUrl + "/book/info/", { headers: { "User-Agent": this.options.app.userAgent, "Content-Type": "application/x-www-form-urlencoded" }, method: "post", body: new URLSearchParams({ book_id: e2, appId: this.options.app.appId, secret: this.options.app.secret, package_name: this.options.app.package_name, lang: this.options.langCode }).toString() }).then((function(e3) {
                return e3.json();
              }))];
            case 1:
              return a2 = t2.sent().info, s2 = { path: o3, name: a2.name, cover: a2.cover, genres: a2.category_list.join(","), summary: a2.intro, author: a2.author, artist: a2.artist, status: "YES" === a2.completed ? r.NovelStatus.Completed : r.NovelStatus.Ongoing, rating: a2.rate_star && parseFloat(a2.rate_star) || void 0 }, p = [], [4, (0, n.fetchApi)(this.mainUrl + "/chapter/book_list/", { headers: { "User-Agent": this.options.app.userAgent, "Content-Type": "application/x-www-form-urlencoded" }, method: "post", body: new URLSearchParams({ book_id: e2, appId: this.options.app.appId, secret: this.options.app.secret, package_name: this.options.app.package_name, lang: this.options.langCode }).toString() }).then((function(e3) {
                return e3.json();
              }))];
            case 2:
              return t2.sent().list.forEach((function(e3) {
                e3.is_locked || p.push({ name: e3.title, path: e3.book_id + "/" + e3.id, releaseTime: (0, i.default)(1e3 * parseInt(e3.last_modify, 10)).format("LLL"), chapterNumber: parseInt(e3.order_id, 10) });
              })), s2.chapters = p.reverse(), [2, s2];
          }
        }));
      }));
    }, o2.prototype.parseChapter = function(o3) {
      return e(this, void 0, void 0, (function() {
        var e2, r2;
        return t(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return e2 = o3.split("/"), r2 = e2[1], [4, (0, n.fetchApi)(this.mainUrl + "/chapter/info/", { headers: { "User-Agent": this.options.app.userAgent, "Content-Type": "application/x-www-form-urlencoded" }, method: "post", body: new URLSearchParams({ chapter_id: r2, appId: this.options.app.appId, secret: this.options.app.secret, package_name: this.options.app.package_name, lang: this.options.langCode }).toString() }).then((function(e3) {
                return e3.json();
              }))];
            case 1:
              return [2, t2.sent().info.content];
          }
        }));
      }));
    }, o2.prototype.searchNovels = function(o3, r2) {
      return e(this, void 0, void 0, (function() {
        var e2, a2;
        return t(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return [4, (0, n.fetchApi)(this.mainUrl + "/book/search/", { headers: { "User-Agent": this.options.app.userAgent, "Content-Type": "application/x-www-form-urlencoded" }, method: "post", body: new URLSearchParams({ appId: this.options.app.appId, secret: this.options.app.secret, package_name: this.options.app.package_name, keyword: o3, lc_type: "novel", lang: this.options.langCode, page: r2.toString(), page_size: "20" }).toString() }).then((function(e3) {
                return e3.json();
              }))];
            case 1:
              return e2 = t2.sent().list, a2 = [], e2.forEach((function(e3) {
                return a2.push({ name: e3.name, cover: e3.cover, path: e3.visit_path + "?id=" + e3.id });
              })), [2, a2];
          }
        }));
      }));
    }, o2;
  })())({ id: "novelcool-ru", sourceName: "NovelCool (RU)", sourceSite: "https://ru.novelcool.com", options: { lang: "Russian", langCode: "ru", app: { userAgent: "Android/Package:com.zuoyou.novel - Version Name:2.3 - Phone Info:sdk_gphone_x86_64(Android Version:13)", package_name: "com.zuoyou.novel", appId: "202201290625004", secret: "c73a8590641781f203660afca1d37ada" } } });
  exports.default = s;
})();

// Export for compatibility
if (typeof module !== "undefined" && module.exports) { module.exports = this; }

