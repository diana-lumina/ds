'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

exports.cn = cn;
//# sourceMappingURL=chunk-RXYRFJ65.cjs.map
//# sourceMappingURL=chunk-RXYRFJ65.cjs.map