/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* ===================================================================
 * Philosophy - Main JS
 *
 * ------------------------------------------------------------------- */
(function ($) {
  "use strict";

  var cfg = {
    scrollDuration: 800,
    // smoothscroll duration
    mailChimpURL: 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc' // mailchimp url

  },
      $WIN = $(window); // Add the User Agent to the <html>
  // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))

  var doc = document.documentElement;
  doc.setAttribute('data-useragent', navigator.userAgent); // svg fallback

  if (!Modernizr.svg) {
    $(".header__logo img").attr("src", "images/logo.png");
  }
  /* Preloader
   * ----------------------------------------------------- */


  var clPreloader = function clPreloader() {
    $("html").addClass('cl-preload');
    $WIN.on('load', function () {
      //force page scroll position to top at page refresh
      // $('html, body').animate({ scrollTop: 0 }, 'normal');
      // will first fade out the loading animation 
      $("#loader").fadeOut("slow", function () {
        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");
      }); // for hero content animations 

      $("html").removeClass('cl-preload');
      $("html").addClass('cl-loaded');
    });
  };
  /* mediaelement
   * ------------------------------------------------------ */


  var clMediaElement = function clMediaElement() {
    $('audio').mediaelementplayer({
      pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
      shimScriptAccess: 'always'
    });
  };
  /* FitVids
   ------------------------------------------------------ */


  var clFitVids = function clFitVids() {
    $(".video-container").fitVids();
  };
  /* pretty print
   * -------------------------------------------------- */


  var clPrettyPrint = function clPrettyPrint() {
    $('pre').addClass('prettyprint');
    $(document).ready(function () {
      prettyPrint();
    });
  };
  /* search
   * ------------------------------------------------------ */


  var clSearch = function clSearch() {
    var searchWrap = $('.header__search'),
        searchField = searchWrap.find('.search-field'),
        closeSearch = searchWrap.find('.header__overlay-close'),
        searchTrigger = $('.header__search-trigger'),
        siteBody = $('body');
    searchTrigger.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);
      siteBody.addClass('search-is-visible');
      setTimeout(function () {
        searchWrap.find('.search-field').focus();
      }, 100);
    });
    closeSearch.on('click', function (e) {
      var $this = $(this);
      e.stopPropagation();

      if (siteBody.hasClass('search-is-visible')) {
        siteBody.removeClass('search-is-visible');
        setTimeout(function () {
          searchWrap.find('.search-field').blur();
        }, 100);
      }
    });
    searchWrap.on('click', function (e) {
      if (!$(e.target).is('.search-field')) {
        closeSearch.trigger('click');
      }
    });
    searchField.on('click', function (e) {
      e.stopPropagation();
    });
    searchField.attr({
      placeholder: 'Type Keywords',
      autocomplete: 'off'
    });
  };
  /* Mobile Menu
   * ---------------------------------------------------- */


  var clMobileMenu = function clMobileMenu() {
    var navWrap = $('.header__nav-wrap'),
        closeNavWrap = navWrap.find('.header__overlay-close'),
        menuToggle = $('.header__toggle-menu'),
        siteBody = $('body');
    menuToggle.on('click', function (e) {
      var $this = $(this);
      e.preventDefault();
      e.stopPropagation();
      siteBody.addClass('nav-wrap-is-visible');
    });
    closeNavWrap.on('click', function (e) {
      var $this = $(this);
      e.preventDefault();
      e.stopPropagation();

      if (siteBody.hasClass('nav-wrap-is-visible')) {
        siteBody.removeClass('nav-wrap-is-visible');
      }
    }); // open (or close) submenu items in mobile view menu. 
    // close all the other open submenu items.

    $('.header__nav .has-children').children('a').on('click', function (e) {
      e.preventDefault();

      if ($(".close-mobile-menu").is(":visible") == true) {
        $(this).toggleClass('sub-menu-is-open').next('ul').slideToggle(200).end().parent('.has-children').siblings('.has-children').children('a').removeClass('sub-menu-is-open').next('ul').slideUp(200);
      }
    });
  };
  /* Masonry
   * ---------------------------------------------------- */


  var clMasonryFolio = function clMasonryFolio() {
    var containerBricks = $('.masonry');
    containerBricks.imagesLoaded(function () {
      containerBricks.masonry({
        itemSelector: '.masonry__brick',
        percentPosition: true,
        resize: true
      });
    }); // layout Masonry after each image loads

    containerBricks.imagesLoaded().progress(function () {
      containerBricks.masonry('layout');
    });
  };
  /* slick slider
   * ------------------------------------------------------ */


  var clSlickSlider = function clSlickSlider() {
    var $gallery = $('.slider__slides').slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      pauseOnFocus: false,
      fade: true,
      cssEase: 'linear'
    });
    $('.slider__slide').on('click', function () {
      $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide')) + 1);
    });
  };
  /* Smooth Scrolling
   * ------------------------------------------------------ */


  var clSmoothScroll = function clSmoothScroll() {
    $('.smoothscroll').on('click', function (e) {
      var target = this.hash,
          $target = $(target);
      e.preventDefault();
      e.stopPropagation();
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, cfg.scrollDuration, 'swing').promise().done(function () {
        // check if menu is open
        if ($('body').hasClass('menu-is-open')) {
          $('.header-menu-toggle').trigger('click');
        }

        window.location.hash = target;
      });
    });
  };
  /* Placeholder Plugin Settings
   * ------------------------------------------------------ */


  var clPlaceholder = function clPlaceholder() {
    $('input, textarea, select').placeholder();
  };
  /* Alert Boxes
   * ------------------------------------------------------ */


  var clAlertBoxes = function clAlertBoxes() {
    $('.alert-box').on('click', '.alert-box__close', function () {
      $(this).parent().fadeOut(500);
    });
  };
  /* Animate On Scroll
   * ------------------------------------------------------ */


  var clAOS = function clAOS() {
    AOS.init({
      offset: -400,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
      disable: 'mobile'
    });
  };
  /* AjaxChimp
   * ------------------------------------------------------ */


  var clAjaxChimp = function clAjaxChimp() {
    $('#mc-form').ajaxChimp({
      language: 'es',
      url: cfg.mailChimpURL
    }); // Mailchimp translation
    //
    //  Defaults:
    //	 'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.es = {
      'submit': 'Submitting...',
      0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    };
  };
  /* Back to Top
   * ------------------------------------------------------ */


  var clBackToTop = function clBackToTop() {
    var pxShow = 500,
        goTopButton = $(".go-top"); // Show or hide the button

    if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= pxShow) {
        if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible');
      } else {
        goTopButton.removeClass('link-is-visible');
      }
    });
  };
  /* Map
   * ------------------------------------------------------ */
  // add custom buttons for the zoom-in/zoom-out on the map


  var clCustomZoomControl = function clCustomZoomControl(controlDiv, map) {
    // grap the zoom elements from the DOM and insert them in the map 
    var controlUIzoomIn = document.getElementById('map-zoom-in'),
        controlUIzoomOut = document.getElementById('map-zoom-out');
    controlDiv.appendChild(controlUIzoomIn);
    controlDiv.appendChild(controlUIzoomOut); // Setup the click event listeners and zoom-in or out according to the clicked element

    google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
      map.setZoom(map.getZoom() + 1);
    });
    google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
      map.setZoom(map.getZoom() - 1);
    });
  };

  var clGoogleMap = function clGoogleMap() {
    if ((typeof google === "undefined" ? "undefined" : _typeof(google)) === 'object' && _typeof(google.maps) === 'object') {
      // 37.422424, -122.085661
      var latitude = 37.422424,
          longitude = -122.085661,
          map_zoom = 14,
          main_color = '#0054a5',
          saturation_value = -30,
          brightness_value = 5,
          marker_url = null,
          winWidth = $(window).width(); // show controls

      $("#map-zoom-in, #map-zoom-out").show(); // marker url

      if (winWidth > 480) {
        marker_url = 'images/icon-location@2x.png';
      } else {
        marker_url = 'images/icon-location.png';
      } // map style


      var style = [{
        // set saturation for the labels on the map
        elementType: "labels",
        stylers: [{
          saturation: saturation_value
        }]
      }, {
        // poi stands for point of interest - don't show these lables on the map 
        featureType: "poi",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }, {
        // don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{
          visibility: "off"
        }]
      }, {
        // don't show local road lables on the map
        featureType: "road.local",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        // don't show arterial road lables on the map
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        // don't show road lables on the map
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
          visibility: "off"
        }]
      }, // style different elements on the map
      {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "poi.government",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "poi.sport_complex",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "poi.attraction",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "poi.business",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "transit.station",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "landscape",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          hue: main_color
        }, {
          visibility: "on"
        }, {
          lightness: brightness_value
        }, {
          saturation: saturation_value
        }]
      }]; // map options

      var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 14,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style
      }; // inizialize the map

      var map = new google.maps.Map(document.getElementById('map-container'), map_options); // add a custom marker to the map				

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        visible: true,
        icon: marker_url
      });
      var zoomControlDiv = document.createElement('div');
      var zoomControl = new clCustomZoomControl(zoomControlDiv, map); // insert the zoom div on the top right of the map

      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);
    }
  };
  /* Initialize
   * ------------------------------------------------------ */


  (function ssInit() {
    clPreloader();
    clMediaElement();
    clPrettyPrint();
    clSearch();
    clMobileMenu();
    clMasonryFolio();
    clSlickSlider();
    clSmoothScroll();
    clPlaceholder();
    clAlertBoxes();
    clAOS();
    clAjaxChimp();
    clBackToTop();
    clGoogleMap();
  })();
})(jQuery);

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** 
 * ===================================================================
 * javascript plugins
 *
 * ------------------------------------------------------------------- 
 */

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
(function ($) {
  "use strict";

  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    },
    translations: {
      en: null
    },
    init: function init(selector, options) {
      $(selector).ajaxChimp(options);
    }
  };

  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend({
        url: form.attr("action"),
        language: "en"
      }, options);
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;

        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;

            try {
              var parts = resp.msg.split(" - ", 2);

              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);

                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }

          if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
            msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]];
          }

          label.html(msg);
          label.show(2e3);

          if (settings.callback) {
            settings.callback(resp);
          }
        }

        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function error(resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          }
        });
        var submitMsg = "Submitting...";

        if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }

        label.html(submitMsg).show(2e3);
        return false;
      });
    });
    return this;
  };
})(jQuery);
/* jshint browser:true 
 * !
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */


!function (a) {
  "use strict";

  a.fn.fitVids = function (b) {
    var c = {
      customSelector: null,
      ignore: null
    };

    if (!document.getElementById("fit-vids-style")) {
      var d = document.head || document.getElementsByTagName("head")[0],
          e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
          f = document.createElement("div");
      f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1]);
    }

    return b && a.extend(c, b), this.each(function () {
      var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
      c.customSelector && b.push(c.customSelector);
      var d = ".fitvidsignore";
      c.ignore && (d = d + ", " + c.ignore);
      var e = a(this).find(b.join(","));
      e = e.not("object object"), e = e.not(d), e.each(function (b) {
        var c = a(this);

        if (!(c.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && c.parent("object").length || c.parent(".fluid-width-video-wrapper").length)) {
          c.css("height") || c.css("width") || !isNaN(c.attr("height")) && !isNaN(c.attr("width")) || (c.attr("height", 9), c.attr("width", 16));
          var e = "object" === this.tagName.toLowerCase() || c.attr("height") && !isNaN(parseInt(c.attr("height"), 10)) ? parseInt(c.attr("height"), 10) : c.height(),
              f = isNaN(parseInt(c.attr("width"), 10)) ? c.width() : parseInt(c.attr("width"), 10),
              g = e / f;

          if (!c.attr("id")) {
            var h = "fitvid" + b;
            c.attr("id", h);
          }

          c.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * g + "%"), c.removeAttr("height").removeAttr("width");
        }
      });
    });
  };
}(window.jQuery || window.Zepto);
/* HTML5 Placeholder jQuery Plugin - v2.1.2
 * Copyright (c)2015 Mathias Bynens
 * 2015-06-09
 */

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  function b(b) {
    var c = {},
        d = /^jQuery\d+$/;
    return a.each(b.attributes, function (a, b) {
      b.specified && !d.test(b.name) && (c[b.name] = b.value);
    }), c;
  }

  function c(b, c) {
    var d = this,
        f = a(d);
    if (d.value == f.attr("placeholder") && f.hasClass(m.customClass)) if (f.data("placeholder-password")) {
      if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
      f.focus();
    } else d.value = "", f.removeClass(m.customClass), d == e() && d.select();
  }

  function d() {
    var d,
        e = this,
        f = a(e),
        g = this.id;

    if ("" === e.value) {
      if ("password" === e.type) {
        if (!f.data("placeholder-textinput")) {
          try {
            d = f.clone().prop({
              type: "text"
            });
          } catch (h) {
            d = a("<input>").attr(a.extend(b(this), {
              type: "text"
            }));
          }

          d.removeAttr("name").data({
            "placeholder-password": f,
            "placeholder-id": g
          }).bind("focus.placeholder", c), f.data({
            "placeholder-textinput": d,
            "placeholder-id": g
          }).before(d);
        }

        f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show();
      }

      f.addClass(m.customClass), f[0].value = f.attr("placeholder");
    } else f.removeClass(m.customClass);
  }

  function e() {
    try {
      return document.activeElement;
    } catch (a) {}
  }

  var f,
      g,
      h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
      i = "placeholder" in document.createElement("input") && !h,
      j = "placeholder" in document.createElement("textarea") && !h,
      k = a.valHooks,
      l = a.propHooks;
  if (i && j) g = a.fn.placeholder = function () {
    return this;
  }, g.input = g.textarea = !0;else {
    var m = {};
    g = a.fn.placeholder = function (b) {
      var e = {
        customClass: "placeholder"
      };
      m = a.extend({}, e, b);
      var f = this;
      return f.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
        "focus.placeholder": c,
        "blur.placeholder": d
      }).data("placeholder-enabled", !0).trigger("blur.placeholder"), f;
    }, g.input = i, g.textarea = j, f = {
      get: function get(b) {
        var c = a(b),
            d = c.data("placeholder-password");
        return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value;
      },
      set: function set(b, f) {
        var g = a(b),
            h = g.data("placeholder-password");
        return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass(m.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f;
      }
    }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function () {
      a(document).delegate("form", "submit.placeholder", function () {
        var b = a("." + m.customClass, this).each(c);
        setTimeout(function () {
          b.each(d);
        }, 10);
      });
    }), a(window).bind("beforeunload.placeholder", function () {
      a("." + m.customClass).each(function () {
        this.value = "";
      });
    });
  }
});
/*!
 * Masonry PACKAGED v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i) {
    return e(t, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function (t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o,
          r = "$()." + i + '("' + e + '")';
      return t.each(function (t, h) {
        var u = a.data(h, i);
        if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
        var l = d.apply(u, n);
        o = void 0 === o ? l : o;
      }), void 0 !== o ? o : t;
    }

    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
      });
    }

    a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return h(this, t, e);
      }

      return u(this, t), this;
    }, n(a));
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i);
  }

  var o = Array.prototype.slice,
      r = t.console,
      s = "undefined" == typeof r ? function () {} : function (t) {
    r.error(t);
  };
  return n(e || t.jQuery), i;
}), function (t, e) {
   true ? !(__WEBPACK_LOCAL_MODULE_1__factory = (e), (__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)) : undefined;
}("undefined" != typeof window ? window : this, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          n = i[t] = i[t] || {};
      return n[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      i = i.slice(0), e = e || [];

      for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
        var r = i[o],
            s = n && n[r];
        s && (this.off(t, r), delete n[r]), r.apply(this, e);
      }

      return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_2__ = ((function () {
    return e();
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e;
  }

  function e() {}

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0; u > e; e++) {
      var i = h[e];
      t[i] = 0;
    }

    return t;
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e);
    }
  }

  function r(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == _typeof(e) && e.nodeType) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;

      for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
        var c = h[l],
            f = r[c],
            m = parseFloat(f);
        a[c] = isNaN(m) ? 0 : m;
      }

      var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);

      b !== !1 && (a.width = b + (E ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a;
    }
  }

  var s,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      u = h.length,
      d = !1;
  return r;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_LOCAL_MODULE_3__factory = (e), (__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)) : undefined;
}(window, function () {
  "use strict";

  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
          o = n + "MatchesSelector";
      if (t[o]) return o;
    }
  }();

  return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = ((function (i) {
    return e(t, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];
    if (Array.isArray(t)) e = t;else if (t && "object" == _typeof(t) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);
    return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    -1 != i && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);

        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) {
          o.push(i[r]);
        }
      }
    }), o;
  }, i.debounceMethod = function (t, e, i) {
    var n = t.prototype[e],
        o = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[o];
      t && clearTimeout(t);
      var e = arguments,
          r = this;
      this[o] = setTimeout(function () {
        n.apply(r, e), delete r[o];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var n = t.console;
  return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var r = i.toDashed(o),
          s = "data-" + r,
          a = document.querySelectorAll("[" + s + "]"),
          h = document.querySelectorAll(".js-" + r),
          u = i.makeArray(a).concat(i.makeArray(h)),
          d = s + "-options",
          l = t.jQuery;
      u.forEach(function (t) {
        var i,
            r = t.getAttribute(s) || t.getAttribute(d);

        try {
          i = r && JSON.parse(r);
        } catch (a) {
          return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + a));
        }

        var h = new e(t, i);
        l && l.data(t, o, h);
      });
    });
  }, i;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)) : undefined;
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) {
      return !1;
    }

    return e = null, !0;
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  }[s],
      u = {
    transform: a,
    transition: s,
    transitionDuration: s + "Duration",
    transitionProperty: s + "Property",
    transitionDelay: s + "Delay"
  },
      d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      var n = u[i] || i;
      e[n] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = t[e ? "left" : "right"],
        o = t[i ? "top" : "bottom"],
        r = this.layout.size,
        s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
        a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);

    s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        r = i ? "left" : "right",
        s = i ? "right" : "left",
        a = this.position.x + t[o];

    e[r] = this.getXValue(a), e[s] = "";
    var h = n ? "paddingTop" : "paddingBottom",
        u = n ? "top" : "bottom",
        d = n ? "bottom" : "top",
        l = this.position.y + t[h];
    e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        n = this.position.y,
        o = parseInt(t, 10),
        r = parseInt(e, 10),
        s = o === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
        h = e - n,
        u = {};
    u.transform = this.getTranslate(a, h), this.transition({
      to: u,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop");

    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;

    for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }

    for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }

    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null;
    }

    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };
  var l = "opacity," + o(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(h, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var c = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          n = c[t.propertyName] || t.propertyName;

      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n];
      }

      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var f = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(f);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, n;
}), function (t, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = ((function (i, n, o, r) {
    return e(t, i, n, o, r);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))) : undefined;
}(window, function (t, e, i, n, o) {
  "use strict";

  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, c[o] = this, this._create();

    var r = this._getOption("initLayout");

    r && this.layout();
  }

  function s(t) {
    function e() {
      t.apply(this, arguments);
    }

    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o;
  }

  var h = t.console,
      u = t.jQuery,
      d = function d() {},
      l = 0,
      c = {};

  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var f = r.prototype;
  n.extend(f, e.prototype), f.option = function (t) {
    n.extend(this.options, t);
  }, f._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, f._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);

    var t = this._getOption("resize");

    t && this.bindResize();
  }, f.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, f._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var r = e[o],
          s = new i(r, this);
      n.push(s);
    }

    return n;
  }, f._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }, f.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, f.layout = function () {
    this._resetLayout(), this._manageStamps();

    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, f._init = f.layout, f._resetLayout = function () {
    this.getSize();
  }, f.getSize = function () {
    this.size = i(this.element);
  }, f._getMeasurement = function (t, e) {
    var n,
        o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
  }, f.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, f._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, f._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var n = this._getItemLayoutPosition(t);

        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
      }, this), this._processLayoutQueue(i);
    }
  }, f._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, f._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, f.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, f._positionItem = function (t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
  }, f._postLayout = function () {
    this.resizeContainer();
  }, f.resizeContainer = function () {
    var t = this._getOption("resizeContainer");

    if (t) {
      var e = this._getContainerSize();

      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, f._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e]);
    }

    function n() {
      s++, s == r && i();
    }

    var o = this,
        r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function (e) {
      e.once(t, n);
    });
  }, f.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) {
      var o = u.Event(e);
      o.type = t, this.$element.trigger(o, i);
    } else this.$element.trigger(t, i);
  }, f.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, f.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, f.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, f.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      n.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, f._find = function (t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
  }, f._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, f._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, f._manageStamp = d, f._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(t),
        r = {
      left: e.left - n.left - o.marginLeft,
      top: e.top - n.top - o.marginTop,
      right: n.right - e.right - o.marginRight,
      bottom: n.bottom - e.bottom - o.marginBottom
    };
    return r;
  }, f.handleEvent = n.handleEvent, f.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, f.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, f.onresize = function () {
    this.resize();
  }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, f.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }, f.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, f.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, f.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, f.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, f.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, f.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, f.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, f.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }, f.getItems = function (t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }, f.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), n.removeFrom(this.items, t);
    }, this);
  }, f.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
  }, r.data = function (t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e];
  }, r.create = function (t, e) {
    var i = s(r);
    return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return r.Item = o, r;
}), function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var n = i.prototype;
  return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

    for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }

    this.maxY = 0, this.horizontalColIndex = 0;
  }, n.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        r = o / n,
        s = n - o % n,
        a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1);
  }, n.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        n = e(i);

    this.containerWidth = n && n.innerWidth;
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        i = e && 1 > e ? "round" : "ceil",
        n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);

    for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
      x: this.columnWidth * r.col,
      y: r.y
    }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) {
      this.colYs[u] = a;
    }

    return s;
  }, n._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);

    return {
      col: e.indexOf(i),
      y: i
    };
  }, n._getTopColGroup = function (t) {
    if (2 > t) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
      e[n] = this._getColGroupY(n, t);
    }

    return e;
  }, n._getColGroupY = function (t, e) {
    if (2 > e) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }, n._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
        n = t > 1 && i + t > this.cols;
    i = n ? 0 : i;
    var o = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }, n._manageStamp = function (t) {
    var i = e(t),
        n = this._getElementOffset(t),
        o = this._getOption("originLeft"),
        r = o ? n.left : n.right,
        s = r + i.outerWidth,
        a = Math.floor(r / this.columnWidth);

    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);

    for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, n._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, n.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }, i;
});
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof window ? window : this, function () {
  function e() {}

  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
          n = i[e] = i[e] || [];
      return n.indexOf(t) == -1 && n.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
          n = i[e] = i[e] || {};
      return n[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];

    if (i && i.length) {
      var n = i.indexOf(t);
      return n != -1 && i.splice(n, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];

    if (i && i.length) {
      i = i.slice(0), t = t || [];

      for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
            s = n && n[r];
        s && (this.off(e, r), delete n[r]), r.apply(this, t);
      }

      return this;
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, e;
}), function (e, t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (i) {
    return t(e, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof window ? window : this, function (e, t) {
  function i(e, t) {
    for (var i in t) {
      e[i] = t[i];
    }

    return e;
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == _typeof(e) && "number" == typeof e.length;
    return t ? d.call(e) : [e];
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e));
  }

  function r(e) {
    this.img = e;
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }

  var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;

    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o);
      }

      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);

        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s);
        }
      }
    }
  };
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);
    if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
      var o = n && n[2];
      o && this.addBackground(o, e), n = i.exec(t.backgroundImage);
    }
  }, o.prototype.addImage = function (e) {
    var t = new r(e);
    this.images.push(t);
  }, o.prototype.addBackground = function (e, t) {
    var i = new s(e, t);
    this.images.push(i);
  }, o.prototype.check = function () {
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n);
      });
    }

    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : void this.complete();
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t);
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this);
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, r.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
  }, r.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e);
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this));
    });
  }, o.makeJQueryPlugin(), o;
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function (a) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  "use strict";

  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f,
          e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
    }

    var b = 0;
    return c;
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      },
      complete: function complete() {
        c && c.call();
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.getNavTarget = function () {
    var b = this,
        c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c;
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.getNavTarget();
    null !== d && "object" == _typeof(d) && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;

    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      }

      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;

    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");

        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");

          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k));
          }

          i.appendChild(j);
        }

        e.appendChild(i);
      }

      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();

    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;

      for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }

      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);

    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;

      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;

      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;

      default:
        return;
    }
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;
        break;
      }

      d = c[e];
    }
    return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
      }, 0);
    });
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;
    if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];

    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }

    return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b);
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }));
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
        e.onload = function () {
          c.animate({
            opacity: 0
          }, 100, function () {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading");
            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
          });
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
        }, e.src = d;
      });
    }

    var c,
        d,
        e,
        f,
        b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    });
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;

    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";

      for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }

          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }

      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      });
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    });
  }, b.prototype.setHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c,
        d,
        e,
        f,
        h,
        b = this,
        g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c;
    });else if ("responsive" === h) for (d in f) {
      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
        for (c = b.options.responsive.length - 1; c >= 0;) {
          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
        }

        b.options.responsive.push(f[d]);
      }
    }
    g && (b.unload(), b.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;

    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }

      for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }

      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a;
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        d,
        b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;

    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;

        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;
      }

      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;

      case "move":
        b.swipeMove(a);
        break;

      case "end":
        b.swipeEnd(a);
    }
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;

    for (f = 0; e > f; f++) {
      if ("object" == _typeof(c) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }

    return a;
  };
});
/*
 * google code-prettify
 */

!function () {
  var q = null;
  window.PR_SHOULD_USE_CONTINUATION = !0;

  (function () {
    function S(a) {
      function d(e) {
        var b = e.charCodeAt(0);
        if (b !== 92) return b;
        var a = e.charAt(1);
        return (b = r[a]) ? b : "0" <= a && a <= "7" ? parseInt(e.substring(1), 8) : a === "u" || a === "x" ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
      }

      function g(e) {
        if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
        e = String.fromCharCode(e);
        return e === "\\" || e === "-" || e === "]" || e === "^" ? "\\" + e : e;
      }

      function b(e) {
        var b = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),
            e = [],
            a = b[0] === "^",
            c = ["["];
        a && c.push("^");

        for (var a = a ? 1 : 0, f = b.length; a < f; ++a) {
          var h = b[a];
          if (/\\[bdsw]/i.test(h)) c.push(h);else {
            var h = d(h),
                l;
            a + 2 < f && "-" === b[a + 1] ? (l = d(b[a + 2]), a += 2) : l = h;
            e.push([h, l]);
            l < 65 || h > 122 || (l < 65 || h > 90 || e.push([Math.max(65, h) | 32, Math.min(l, 90) | 32]), l < 97 || h > 122 || e.push([Math.max(97, h) & -33, Math.min(l, 122) & -33]));
          }
        }

        e.sort(function (e, a) {
          return e[0] - a[0] || a[1] - e[1];
        });
        b = [];
        f = [];

        for (a = 0; a < e.length; ++a) {
          h = e[a], h[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : b.push(f = h);
        }

        for (a = 0; a < b.length; ++a) {
          h = b[a], c.push(g(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && c.push("-"), c.push(g(h[1])));
        }

        c.push("]");
        return c.join("");
      }

      function s(e) {
        for (var a = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), c = a.length, d = [], f = 0, h = 0; f < c; ++f) {
          var l = a[f];
          l === "(" ? ++h : "\\" === l.charAt(0) && (l = +l.substring(1)) && (l <= h ? d[l] = -1 : a[f] = g(l));
        }

        for (f = 1; f < d.length; ++f) {
          -1 === d[f] && (d[f] = ++x);
        }

        for (h = f = 0; f < c; ++f) {
          l = a[f], l === "(" ? (++h, d[h] || (a[f] = "(?:")) : "\\" === l.charAt(0) && (l = +l.substring(1)) && l <= h && (a[f] = "\\" + d[l]);
        }

        for (f = 0; f < c; ++f) {
          "^" === a[f] && "^" !== a[f + 1] && (a[f] = "");
        }

        if (e.ignoreCase && m) for (f = 0; f < c; ++f) {
          l = a[f], e = l.charAt(0), l.length >= 2 && e === "[" ? a[f] = b(l) : e !== "\\" && (a[f] = l.replace(/[A-Za-z]/g, function (a) {
            a = a.charCodeAt(0);
            return "[" + String.fromCharCode(a & -33, a | 32) + "]";
          }));
        }
        return a.join("");
      }

      for (var x = 0, m = !1, j = !1, k = 0, c = a.length; k < c; ++k) {
        var i = a[k];
        if (i.ignoreCase) j = !0;else if (/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
          m = !0;
          j = !1;
          break;
        }
      }

      for (var r = {
        b: 8,
        t: 9,
        n: 10,
        v: 11,
        f: 12,
        r: 13
      }, n = [], k = 0, c = a.length; k < c; ++k) {
        i = a[k];
        if (i.global || i.multiline) throw Error("" + i);
        n.push("(?:" + s(i) + ")");
      }

      return RegExp(n.join("|"), j ? "gi" : "g");
    }

    function T(a, d) {
      function g(a) {
        var c = a.nodeType;

        if (c == 1) {
          if (!b.test(a.className)) {
            for (c = a.firstChild; c; c = c.nextSibling) {
              g(c);
            }

            c = a.nodeName.toLowerCase();
            if ("br" === c || "li" === c) s[j] = "\n", m[j << 1] = x++, m[j++ << 1 | 1] = a;
          }
        } else if (c == 3 || c == 4) c = a.nodeValue, c.length && (c = d ? c.replace(/\r\n?/g, "\n") : c.replace(/[\t\n\r ]+/g, " "), s[j] = c, m[j << 1] = x, x += c.length, m[j++ << 1 | 1] = a);
      }

      var b = /(?:^|\s)nocode(?:\s|$)/,
          s = [],
          x = 0,
          m = [],
          j = 0;
      g(a);
      return {
        a: s.join("").replace(/\n$/, ""),
        d: m
      };
    }

    function H(a, d, g, b) {
      d && (a = {
        a: d,
        e: a
      }, g(a), b.push.apply(b, a.g));
    }

    function U(a) {
      for (var d = void 0, g = a.firstChild; g; g = g.nextSibling) {
        var b = g.nodeType,
            d = b === 1 ? d ? a : g : b === 3 ? V.test(g.nodeValue) ? a : d : d;
      }

      return d === a ? void 0 : d;
    }

    function C(a, d) {
      function g(a) {
        for (var j = a.e, k = [j, "pln"], c = 0, i = a.a.match(s) || [], r = {}, n = 0, e = i.length; n < e; ++n) {
          var z = i[n],
              w = r[z],
              t = void 0,
              f;
          if (typeof w === "string") f = !1;else {
            var h = b[z.charAt(0)];
            if (h) t = z.match(h[1]), w = h[0];else {
              for (f = 0; f < x; ++f) {
                if (h = d[f], t = z.match(h[1])) {
                  w = h[0];
                  break;
                }
              }

              t || (w = "pln");
            }
            if ((f = w.length >= 5 && "lang-" === w.substring(0, 5)) && !(t && typeof t[1] === "string")) f = !1, w = "src";
            f || (r[z] = w);
          }
          h = c;
          c += z.length;

          if (f) {
            f = t[1];
            var l = z.indexOf(f),
                B = l + f.length;
            t[2] && (B = z.length - t[2].length, l = B - f.length);
            w = w.substring(5);
            H(j + h, z.substring(0, l), g, k);
            H(j + h + l, f, I(w, f), k);
            H(j + h + B, z.substring(B), g, k);
          } else k.push(j + h, w);
        }

        a.g = k;
      }

      var b = {},
          s;

      (function () {
        for (var g = a.concat(d), j = [], k = {}, c = 0, i = g.length; c < i; ++c) {
          var r = g[c],
              n = r[3];
          if (n) for (var e = n.length; --e >= 0;) {
            b[n.charAt(e)] = r;
          }
          r = r[1];
          n = "" + r;
          k.hasOwnProperty(n) || (j.push(r), k[n] = q);
        }

        j.push(/[\S\s]/);
        s = S(j);
      })();

      var x = d.length;
      return g;
    }

    function v(a) {
      var d = [],
          g = [];
      a.tripleQuotedStrings ? d.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : d.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);
      a.verbatimStrings && g.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
      var b = a.hashComments;
      b && (a.cStyleComments ? (b > 1 ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), g.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, q])) : d.push(["com", /^#[^\n\r]*/, q, "#"]));
      a.cStyleComments && (g.push(["com", /^\/\/[^\n\r]*/, q]), g.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));

      if (b = a.regexLiterals) {
        var s = (b = b > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";
        g.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + b + "])(?:[^/\\x5B\\x5C" + b + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + b + "]|\\x5C" + s + ")*(?:\\x5D|$))+/") + ")")]);
      }

      (b = a.types) && g.push(["typ", b]);
      b = ("" + a.keywords).replace(/^ | $/g, "");
      b.length && g.push(["kwd", RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), q]);
      d.push(["pln", /^\s+/, q, " \r\n\t\xA0"]);
      b = "^.[^\\s\\w.$@'\"`/\\\\]*";
      a.regexLiterals && (b += "(?!s*/)");
      g.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", RegExp(b), q]);
      return C(d, g);
    }

    function J(a, d, g) {
      function b(a) {
        var c = a.nodeType;
        if (c == 1 && !x.test(a.className)) {
          if ("br" === a.nodeName) s(a), a.parentNode && a.parentNode.removeChild(a);else for (a = a.firstChild; a; a = a.nextSibling) {
            b(a);
          }
        } else if ((c == 3 || c == 4) && g) {
          var d = a.nodeValue,
              i = d.match(m);
          if (i) c = d.substring(0, i.index), a.nodeValue = c, (d = d.substring(i.index + i[0].length)) && a.parentNode.insertBefore(j.createTextNode(d), a.nextSibling), s(a), c || a.parentNode.removeChild(a);
        }
      }

      function s(a) {
        function b(a, c) {
          var d = c ? a.cloneNode(!1) : a,
              e = a.parentNode;

          if (e) {
            var e = b(e, 1),
                g = a.nextSibling;
            e.appendChild(d);

            for (var i = g; i; i = g) {
              g = i.nextSibling, e.appendChild(i);
            }
          }

          return d;
        }

        for (; !a.nextSibling;) {
          if (a = a.parentNode, !a) return;
        }

        for (var a = b(a.nextSibling, 0), d; (d = a.parentNode) && d.nodeType === 1;) {
          a = d;
        }

        c.push(a);
      }

      for (var x = /(?:^|\s)nocode(?:\s|$)/, m = /\r\n?|\n/, j = a.ownerDocument, k = j.createElement("li"); a.firstChild;) {
        k.appendChild(a.firstChild);
      }

      for (var c = [k], i = 0; i < c.length; ++i) {
        b(c[i]);
      }

      d === (d | 0) && c[0].setAttribute("value", d);
      var r = j.createElement("ol");
      r.className = "linenums";

      for (var d = Math.max(0, d - 1 | 0) || 0, i = 0, n = c.length; i < n; ++i) {
        k = c[i], k.className = "L" + (i + d) % 10, k.firstChild || k.appendChild(j.createTextNode("\xA0")), r.appendChild(k);
      }

      a.appendChild(r);
    }

    function p(a, d) {
      for (var g = d.length; --g >= 0;) {
        var b = d[g];
        F.hasOwnProperty(b) ? D.console && console.warn("cannot override language handler %s", b) : F[b] = a;
      }
    }

    function I(a, d) {
      if (!a || !F.hasOwnProperty(a)) a = /^\s*</.test(d) ? "default-markup" : "default-code";
      return F[a];
    }

    function K(a) {
      var d = a.h;

      try {
        var g = T(a.c, a.i),
            b = g.a;
        a.a = b;
        a.d = g.d;
        a.e = 0;
        I(d, b)(a);
        var s = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
            s = s && +s[1] <= 8,
            d = /\n/g,
            x = a.a,
            m = x.length,
            g = 0,
            j = a.d,
            k = j.length,
            b = 0,
            c = a.g,
            i = c.length,
            r = 0;
        c[i] = m;
        var n, e;

        for (e = n = 0; e < i;) {
          c[e] !== c[e + 2] ? (c[n++] = c[e++], c[n++] = c[e++]) : e += 2;
        }

        i = n;

        for (e = n = 0; e < i;) {
          for (var p = c[e], w = c[e + 1], t = e + 2; t + 2 <= i && c[t + 1] === w;) {
            t += 2;
          }

          c[n++] = p;
          c[n++] = w;
          e = t;
        }

        c.length = n;
        var f = a.c,
            h;
        if (f) h = f.style.display, f.style.display = "none";

        try {
          for (; b < k;) {
            var l = j[b + 2] || m,
                B = c[r + 2] || m,
                t = Math.min(l, B),
                A = j[b + 1],
                G;

            if (A.nodeType !== 1 && (G = x.substring(g, t))) {
              s && (G = G.replace(d, "\r"));
              A.nodeValue = G;
              var L = A.ownerDocument,
                  o = L.createElement("span");
              o.className = c[r + 1];
              var v = A.parentNode;
              v.replaceChild(o, A);
              o.appendChild(A);
              g < l && (j[b + 1] = A = L.createTextNode(x.substring(t, l)), v.insertBefore(A, o.nextSibling));
            }

            g = t;
            g >= l && (b += 2);
            g >= B && (r += 2);
          }
        } finally {
          if (f) f.style.display = h;
        }
      } catch (u) {
        D.console && console.log(u && u.stack || u);
      }
    }

    var D = window,
        y = ["break,continue,do,else,for,if,return,while"],
        E = [[y, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        M = [E, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        N = [E, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
        O = [N, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
        E = [E, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        P = [y, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        Q = [y, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        W = [y, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
        y = [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        R = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        V = /\S/,
        X = v({
      keywords: [M, O, E, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", P, Q, y],
      hashComments: !0,
      cStyleComments: !0,
      multiLineStrings: !0,
      regexLiterals: !0
    }),
        F = {};
    p(X, ["default-code"]);
    p(C([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    p(C([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    p(C([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    p(v({
      keywords: M,
      hashComments: !0,
      cStyleComments: !0,
      types: R
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    p(v({
      keywords: "null,true,false"
    }), ["json"]);
    p(v({
      keywords: O,
      hashComments: !0,
      cStyleComments: !0,
      verbatimStrings: !0,
      types: R
    }), ["cs"]);
    p(v({
      keywords: N,
      cStyleComments: !0
    }), ["java"]);
    p(v({
      keywords: y,
      hashComments: !0,
      multiLineStrings: !0
    }), ["bash", "bsh", "csh", "sh"]);
    p(v({
      keywords: P,
      hashComments: !0,
      multiLineStrings: !0,
      tripleQuotedStrings: !0
    }), ["cv", "py", "python"]);
    p(v({
      keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
      hashComments: !0,
      multiLineStrings: !0,
      regexLiterals: 2
    }), ["perl", "pl", "pm"]);
    p(v({
      keywords: Q,
      hashComments: !0,
      multiLineStrings: !0,
      regexLiterals: !0
    }), ["rb", "ruby"]);
    p(v({
      keywords: E,
      cStyleComments: !0,
      regexLiterals: !0
    }), ["javascript", "js"]);
    p(v({
      keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
      hashComments: 3,
      cStyleComments: !0,
      multilineStrings: !0,
      tripleQuotedStrings: !0,
      regexLiterals: !0
    }), ["coffee"]);
    p(v({
      keywords: W,
      cStyleComments: !0,
      multilineStrings: !0
    }), ["rc", "rs", "rust"]);
    p(C([], [["str", /^[\S\s]+/]]), ["regex"]);
    var Y = D.PR = {
      createSimpleLexer: C,
      registerLangHandler: p,
      sourceDecorator: v,
      PR_ATTRIB_NAME: "atn",
      PR_ATTRIB_VALUE: "atv",
      PR_COMMENT: "com",
      PR_DECLARATION: "dec",
      PR_KEYWORD: "kwd",
      PR_LITERAL: "lit",
      PR_NOCODE: "nocode",
      PR_PLAIN: "pln",
      PR_PUNCTUATION: "pun",
      PR_SOURCE: "src",
      PR_STRING: "str",
      PR_TAG: "tag",
      PR_TYPE: "typ",
      prettyPrintOne: D.prettyPrintOne = function (a, d, g) {
        var b = document.createElement("div");
        b.innerHTML = "<pre>" + a + "</pre>";
        b = b.firstChild;
        g && J(b, g, !0);
        K({
          h: d,
          j: g,
          c: b,
          i: 1
        });
        return b.innerHTML;
      },
      prettyPrint: D.prettyPrint = function (a, d) {
        function g() {
          for (var b = D.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity; i < p.length && c.now() < b; i++) {
            for (var d = p[i], j = h, k = d; k = k.previousSibling;) {
              var m = k.nodeType,
                  o = (m === 7 || m === 8) && k.nodeValue;
              if (o ? !/^\??prettify\b/.test(o) : m !== 3 || /\S/.test(k.nodeValue)) break;

              if (o) {
                j = {};
                o.replace(/\b(\w+)=([\w%+\-.:]+)/g, function (a, b, c) {
                  j[b] = c;
                });
                break;
              }
            }

            k = d.className;

            if ((j !== h || e.test(k)) && !v.test(k)) {
              m = !1;

              for (o = d.parentNode; o; o = o.parentNode) {
                if (f.test(o.tagName) && o.className && e.test(o.className)) {
                  m = !0;
                  break;
                }
              }

              if (!m) {
                d.className += " prettyprinted";
                m = j.lang;

                if (!m) {
                  var m = k.match(n),
                      y;
                  if (!m && (y = U(d)) && t.test(y.tagName)) m = y.className.match(n);
                  m && (m = m[1]);
                }

                if (w.test(d.tagName)) o = 1;else var o = d.currentStyle,
                    u = s.defaultView,
                    o = (o = o ? o.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(d, q).getPropertyValue("white-space") : 0) && "pre" === o.substring(0, 3);
                u = j.linenums;
                if (!(u = u === "true" || +u)) u = (u = k.match(/\blinenums\b(?::(\d+))?/)) ? u[1] && u[1].length ? +u[1] : !0 : !1;
                u && J(d, u, o);
                r = {
                  h: m,
                  c: d,
                  j: u,
                  i: o
                };
                K(r);
              }
            }
          }

          i < p.length ? setTimeout(g, 250) : "function" === typeof a && a();
        }

        for (var b = d || document.body, s = b.ownerDocument || document, b = [b.getElementsByTagName("pre"), b.getElementsByTagName("code"), b.getElementsByTagName("xmp")], p = [], m = 0; m < b.length; ++m) {
          for (var j = 0, k = b[m].length; j < k; ++j) {
            p.push(b[m][j]);
          }
        }

        var b = q,
            c = Date;
        c.now || (c = {
          now: function now() {
            return +new Date();
          }
        });
        var i = 0,
            r,
            n = /\blang(?:uage)?-([\w.]+)(?!\S)/,
            e = /\bprettyprint\b/,
            v = /\bprettyprinted\b/,
            w = /pre|xmp/i,
            t = /^code$/i,
            f = /^(?:pre|code|xmp)$/i,
            h = {};
        g();
      }
    };
     true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Y;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  })();
}();
/*! 
 * AOS.js 
 * https://michalsnik.github.io/aos/
 */

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var i = o[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var o = {};
    return t.m = e, t.c = o, t.p = "dist/", t(0);
  }([function (e, t, o) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];

        for (var n in o) {
          Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
      }

      return e;
    },
        a = o(1),
        r = (n(a), o(5)),
        c = n(r),
        u = o(6),
        s = n(u),
        d = o(7),
        f = n(d),
        l = o(8),
        m = n(l),
        p = o(9),
        b = n(p),
        v = o(10),
        g = n(v),
        y = o(13),
        w = n(y),
        h = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded"
    },
        O = function O() {
      var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
      return e && (k = !0), k ? (h = (0, g["default"])(h, j), (0, b["default"])(h, j.once), h) : void 0;
    },
        _ = function _() {
      h = (0, w["default"])(), O();
    },
        z = function z() {
      h.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        A = function A(e) {
      return e === !0 || "mobile" === e && m["default"].mobile() || "phone" === e && m["default"].phone() || "tablet" === e && m["default"].tablet() || "function" == typeof e && e() === !0;
    },
        E = function E(e) {
      return j = i(j, e), h = (0, w["default"])(), A(j.disable) || x ? z() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function () {
        O(!0);
      }) : document.addEventListener(j.startEvent, function () {
        O(!0);
      }), window.addEventListener("resize", (0, s["default"])(O, 50, !0)), window.addEventListener("orientationchange", (0, s["default"])(O, 50, !0)), window.addEventListener("scroll", (0, c["default"])(function () {
        (0, b["default"])(h, j.once);
      }, 99)), document.addEventListener("DOMNodeRemoved", function (e) {
        var t = e.target;
        t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, s["default"])(_, 50, !0);
      }), (0, f["default"])("[data-aos]", _), h);
    };

    e.exports = {
      init: E,
      refresh: O,
      refreshHard: _
    };
  }, function (e, t) {},,,, function (e, t, o) {
    "use strict";

    function n(e, t, o) {
      var n = !0,
          a = !0;
      if ("function" != typeof e) throw new TypeError(c);
      return i(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), r(e, t, {
        leading: n,
        maxWait: t,
        trailing: a
      });
    }

    function i(e) {
      var t = "undefined" == typeof e ? "undefined" : a(e);
      return !!e && ("object" == t || "function" == t);
    }

    var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : _typeof(e);
    },
        r = o(6),
        c = "Expected a function";
    e.exports = n;
  }, function (e, t) {
    "use strict";

    function o(e, t, o) {
      function n(t) {
        var o = b,
            n = v;
        return b = v = void 0, O = t, y = e.apply(n, o);
      }

      function a(e) {
        return O = e, w = setTimeout(d, t), _ ? n(e) : y;
      }

      function r(e) {
        var o = e - h,
            n = e - O,
            i = t - o;
        return z ? x(i, g - n) : i;
      }

      function u(e) {
        var o = e - h,
            n = e - O;
        return !h || o >= t || 0 > o || z && n >= g;
      }

      function d() {
        var e = j();
        return u(e) ? f(e) : void (w = setTimeout(d, r(e)));
      }

      function f(e) {
        return clearTimeout(w), w = void 0, A && b ? n(e) : (b = v = void 0, y);
      }

      function l() {
        void 0 !== w && clearTimeout(w), h = O = 0, b = v = w = void 0;
      }

      function m() {
        return void 0 === w ? y : f(j());
      }

      function p() {
        var e = j(),
            o = u(e);

        if (b = arguments, v = this, h = e, o) {
          if (void 0 === w) return a(h);
          if (z) return clearTimeout(w), w = setTimeout(d, t), n(h);
        }

        return void 0 === w && (w = setTimeout(d, t)), y;
      }

      var b,
          v,
          g,
          y,
          w,
          h = 0,
          O = 0,
          _ = !1,
          z = !1,
          A = !0;

      if ("function" != typeof e) throw new TypeError(s);
      return t = c(t) || 0, i(o) && (_ = !!o.leading, z = "maxWait" in o, g = z ? k(c(o.maxWait) || 0, t) : g, A = "trailing" in o ? !!o.trailing : A), p.cancel = l, p.flush = m, p;
    }

    function n(e) {
      var t = i(e) ? h.call(e) : "";
      return t == f || t == l;
    }

    function i(e) {
      var t = "undefined" == typeof e ? "undefined" : u(e);
      return !!e && ("object" == t || "function" == t);
    }

    function a(e) {
      return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
    }

    function r(e) {
      return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || a(e) && h.call(e) == m;
    }

    function c(e) {
      if ("number" == typeof e) return e;
      if (r(e)) return d;

      if (i(e)) {
        var t = n(e.valueOf) ? e.valueOf() : e;
        e = i(t) ? t + "" : t;
      }

      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(p, "");
      var o = v.test(e);
      return o || g.test(e) ? y(e.slice(2), o ? 2 : 8) : b.test(e) ? d : +e;
    }

    var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : _typeof(e);
    },
        s = "Expected a function",
        d = NaN,
        f = "[object Function]",
        l = "[object GeneratorFunction]",
        m = "[object Symbol]",
        p = /^\s+|\s+$/g,
        b = /^[-+]0x[0-9a-f]+$/i,
        v = /^0b[01]+$/i,
        g = /^0o[0-7]+$/i,
        y = parseInt,
        w = Object.prototype,
        h = w.toString,
        k = Math.max,
        x = Math.min,
        j = Date.now;
    e.exports = o;
  }, function (e, t) {
    "use strict";

    function o(e, t) {
      r.push({
        selector: e,
        fn: t
      }), !c && a && (c = new a(n), c.observe(i.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      })), n();
    }

    function n() {
      for (var e, t, o = 0, n = r.length; n > o; o++) {
        e = r[o], t = i.querySelectorAll(e.selector);

        for (var a, c = 0, u = t.length; u > c; c++) {
          a = t[c], a.ready || (a.ready = !0, e.fn.call(a, a));
        }
      }
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = window.document,
        a = window.MutationObserver || window.WebKitMutationObserver,
        r = [],
        c = void 0;
    t["default"] = o;
  }, function (e, t) {
    "use strict";

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        i = function () {
      function e() {
        o(this, e);
      }

      return n(e, [{
        key: "phone",
        value: function value() {
          var e = !1;
          return function (t) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
          }(navigator.userAgent || navigator.vendor || window.opera), e;
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = !1;
          return function (t) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
          }(navigator.userAgent || navigator.vendor || window.opera), e;
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new i();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = function o(e, t, _o) {
      var n = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof n && ("false" === n || !_o && "true" !== n) && e.node.classList.remove("aos-animate");
    },
        n = function n(e, t) {
      var n = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, a) {
        o(e, i + n, t);
      });
    };

    t["default"] = n;
  }, function (e, t, o) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = o(11),
        a = n(i),
        r = function r(e, t) {
      return e.forEach(function (e, o) {
        e.node.classList.add("aos-init"), e.position = (0, a["default"])(e.node, t.offset);
      }), e;
    };

    t["default"] = r;
  }, function (e, t, o) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = o(12),
        a = n(i),
        r = function r(e, t) {
      var o = 0,
          n = 0,
          i = window.innerHeight,
          r = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), o = (0, a["default"])(e).top, r.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          o += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          o += e.offsetHeight;
          break;

        case "top-center":
          o += i / 2;
          break;

        case "bottom-center":
          o += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          o += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          o += i;
          break;

        case "bottom-top":
          o += e.offsetHeight + i;
          break;

        case "center-top":
          o += e.offsetHeight / 2 + i;
      }

      return r.anchorPlacement || r.offset || isNaN(t) || (n = t), o + n;
    };

    t["default"] = r;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = function o(e) {
      for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: o,
        left: t
      };
    };

    t["default"] = o;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var o = function o(e) {
      e = e || document.querySelectorAll("[data-aos]");
      var t = [];
      return [].forEach.call(e, function (e, o) {
        t.push({
          node: e
        });
      }), t;
    };

    t["default"] = o;
  }]);
});
/*! Lity - v1.6.6 - 2016-04-22
* http://sorgalla.com/lity/
* Copyright (c) 2016 Jan Sorgalla; Licensed MIT */

!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c) {
    return b(a, c);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";

  function c() {
    o[p > 0 ? "addClass" : "removeClass"]("lity-active");
  }

  function d(a) {
    var c = b.Deferred();
    return w ? (a.one(w, c.resolve), setTimeout(c.resolve, 500)) : c.resolve(), c.promise();
  }

  function e(a, c, d) {
    if (1 === arguments.length) return b.extend({}, a);

    if ("string" == typeof c) {
      if ("undefined" == typeof d) return "undefined" == typeof a[c] ? null : a[c];
      a[c] = d;
    } else b.extend(a, c);

    return this;
  }

  function f(a) {
    for (var b, c = decodeURI(a).split("&"), d = {}, e = 0, f = c.length; f > e; e++) {
      c[e] && (b = c[e].split("="), d[b[0]] = b[1]);
    }

    return d;
  }

  function g(a, c) {
    return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c);
  }

  function h(a) {
    return b('<span class="lity-error"/>').append(a);
  }

  function i(a) {
    if (!q.test(a)) return !1;

    var c = b('<img src="' + a + '">'),
        d = b.Deferred(),
        e = function e() {
      d.reject(h("Failed loading image"));
    };

    return c.on("load", function () {
      return 0 === this.naturalWidth ? e() : void d.resolve(c);
    }).on("error", e), d.promise();
  }

  function j(a) {
    var c;

    try {
      c = b(a);
    } catch (d) {
      return !1;
    }

    if (!c.length) return !1;
    var e = b('<span style="display:none !important" class="lity-inline-placeholder"/>');
    return c.after(e).on("lity:ready", function (a, b) {
      b.one("lity:remove", function () {
        e.before(c.addClass("lity-hide")).remove();
      });
    });
  }

  function k(a) {
    var c,
        d = a;
    return c = r.exec(a), c && (d = g("https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4], b.extend({
      autoplay: 1
    }, f(c[5] || "")))), c = s.exec(a), c && (d = g("https://player.vimeo.com/video/" + c[3], b.extend({
      autoplay: 1
    }, f(c[4] || "")))), c = t.exec(a), c && (d = g("https://www.google." + c[3] + "/maps?" + c[6], {
      output: c[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
    })), '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + d + '"></iframe></div>';
  }

  function l(a) {
    function f(a) {
      27 === a.keyCode && k();
    }

    function g() {
      var a = m.documentElement.clientHeight ? m.documentElement.clientHeight : Math.round(n.height());
      q.css("max-height", Math.floor(a) + "px").trigger("lity:resize", [o]);
    }

    function h(a, c) {
      o && (q = b(c), n.on("resize", g), g(), o.find(".lity-loader").each(function () {
        var a = b(this);
        d(a).always(function () {
          a.remove();
        });
      }), o.removeClass("lity-loading").find(".lity-content").empty().append(q), q.removeClass("lity-hide").trigger("lity:ready", [o, a]), t.resolve());
    }

    function i(a, d, e, g) {
      t = b.Deferred(), p++, c(), o = b(e.template).addClass("lity-loading").appendTo("body"), e.esc && n.on("keyup", f), setTimeout(function () {
        o.addClass("lity-opened lity-" + a).on("click", "[data-lity-close]", function (a) {
          b(a.target).is("[data-lity-close]") && k();
        }).trigger("lity:open", [o, g]), b.when(d).always(b.proxy(h, null, g));
      }, 0);
    }

    function j(a, c, d) {
      var e,
          f,
          g = b.extend({}, u, s);
      if (c = b.extend({}, v, r, c), c.handler && g[c.handler]) f = g[c.handler](a, l), e = c.handler;else {
        var h = {};
        b.each(["inline", "iframe"], function (a, b) {
          g[b] && (h[b] = g[b]), delete g[b];
        });

        var j = function j(b, c) {
          return c ? (f = c(a, l), f ? (e = b, !1) : void 0) : !0;
        };

        b.each(g, j), e || b.each(h, j);
      }
      return f && b.when(k()).done(b.proxy(i, null, e, f, c, d)), !!f;
    }

    function k() {
      if (o) {
        var a = b.Deferred();
        return t.done(function () {
          p--, c(), n.off("resize", g).off("keyup", f), q.trigger("lity:close", [o]), o.removeClass("lity-opened").addClass("lity-closed");
          var b = o,
              e = q;
          o = null, q = null, d(e.add(b)).always(function () {
            e.trigger("lity:remove", [b]), b.remove(), a.resolve();
          });
        }), a.promise();
      }
    }

    function l(a) {
      if (!a.preventDefault) return l.open(a);
      var c = b(this),
          d = c.data("lity-target") || c.attr("href") || c.attr("src");

      if (d) {
        var e = c.data("lity-options") || c.data("lity");
        j(d, e, c) && (c.blur(), a.preventDefault());
      }
    }

    var o,
        q,
        r = {},
        s = {},
        t = b.Deferred().resolve();
    return l.handlers = b.proxy(e, l, s), l.options = b.proxy(e, l, r), l.open = function (a, b, c) {
      return j(a, b, c), l;
    }, l.close = function () {
      return k(), l;
    }, l.options(a);
  }

  var m = a.document,
      n = b(a),
      o = b("html"),
      p = 0,
      q = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
      r = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
      s = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
      t = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
      u = {
    image: i,
    inline: j,
    iframe: k
  },
      v = {
    esc: !0,
    handler: null,
    template: '<div class="lity" tabindex="-1"><div class="lity-wrap" data-lity-close><div class="lity-loader">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" title="Close (Esc)" data-lity-close>×</button></div></div></div>'
  },
      w = function () {
    var a = m.createElement("div"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return b[c];
    }

    return !1;
  }();

  return l.version = "1.6.6", l.handlers = b.proxy(e, l, u), l.options = b.proxy(e, l, v), b(m).on("click", "[data-lity]", l()), l;
});
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */

!function e(t, n, o) {
  function i(a, s) {
    if (!n[a]) {
      if (!t[a]) {
        var l = "function" == typeof require && require;
        if (!s && l) return require(a, !0);
        if (r) return r(a, !0);
        var d = new Error("Cannot find module '" + a + "'");
        throw d.code = "MODULE_NOT_FOUND", d;
      }

      var u = n[a] = {
        exports: {}
      };
      t[a][0].call(u.exports, function (e) {
        var n = t[a][1][e];
        return i(n || e);
      }, u, u.exports, e, t, n, o);
    }

    return n[a].exports;
  }

  for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) {
    i(o[a]);
  }

  return i;
}({
  1: [function (e, t, n) {}, {}],
  2: [function (e, t, n) {
    (function (n) {
      var o,
          i = void 0 !== n ? n : "undefined" != typeof window ? window : {},
          r = e(1);
      "undefined" != typeof document ? o = document : (o = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (o = i["__GLOBAL_DOCUMENT_CACHE@4"] = r), t.exports = o;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {
    1: 1
  }],
  3: [function (e, t, n) {
    (function (e) {
      var n;
      n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  4: [function (e, t, n) {
    !function (e) {
      function n() {}

      function o(e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }

      function i(e) {
        if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this);
      }

      function r(e, t) {
        for (; 3 === e._state;) {
          e = e._value;
        }

        0 !== e._state ? (e._handled = !0, i._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;

          if (null !== n) {
            var o;

            try {
              o = n(e._value);
            } catch (e) {
              return void s(t.promise, e);
            }

            a(t.promise, o);
          } else (1 === e._state ? a : s)(t.promise, e._value);
        })) : e._deferreds.push(t);
      }

      function a(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

          if (t && ("object" == _typeof(t) || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof i) return e._state = 3, e._value = t, void l(e);
            if ("function" == typeof n) return void u(o(n, t), e);
          }

          e._state = 1, e._value = t, l(e);
        } catch (t) {
          s(e, t);
        }
      }

      function s(e, t) {
        e._state = 2, e._value = t, l(e);
      }

      function l(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function () {
          e._handled || i._unhandledRejectionFn(e._value);
        });

        for (var t = 0, n = e._deferreds.length; t < n; t++) {
          r(e, e._deferreds[t]);
        }

        e._deferreds = null;
      }

      function d(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
      }

      function u(e, t) {
        var n = !1;

        try {
          e(function (e) {
            n || (n = !0, a(t, e));
          }, function (e) {
            n || (n = !0, s(t, e));
          });
        } catch (e) {
          if (n) return;
          n = !0, s(t, e);
        }
      }

      var c = setTimeout;
      i.prototype["catch"] = function (e) {
        return this.then(null, e);
      }, i.prototype.then = function (e, t) {
        var o = new this.constructor(n);
        return r(this, new d(e, t, o)), o;
      }, i.all = function (e) {
        var t = Array.prototype.slice.call(e);
        return new i(function (e, n) {
          function o(r, a) {
            try {
              if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                var s = a.then;
                if ("function" == typeof s) return void s.call(a, function (e) {
                  o(r, e);
                }, n);
              }

              t[r] = a, 0 == --i && e(t);
            } catch (e) {
              n(e);
            }
          }

          if (0 === t.length) return e([]);

          for (var i = t.length, r = 0; r < t.length; r++) {
            o(r, t[r]);
          }
        });
      }, i.resolve = function (e) {
        return e && "object" == _typeof(e) && e.constructor === i ? e : new i(function (t) {
          t(e);
        });
      }, i.reject = function (e) {
        return new i(function (t, n) {
          n(e);
        });
      }, i.race = function (e) {
        return new i(function (t, n) {
          for (var o = 0, i = e.length; o < i; o++) {
            e[o].then(t, n);
          }
        });
      }, i._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e);
      } || function (e) {
        c(e, 0);
      }, i._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
      }, i._setImmediateFn = function (e) {
        i._immediateFn = e;
      }, i._setUnhandledRejectionFn = function (e) {
        i._unhandledRejectionFn = e;
      }, void 0 !== t && t.exports ? t.exports = i : e.Promise || (e.Promise = i);
    }(this);
  }, {}],
  5: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        i = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(7)),
        r = e(15),
        a = e(27),
        s = {
      lang: "en",
      en: r.EN
    };

    s.language = function () {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }

      if (null !== t && void 0 !== t && t.length) {
        if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
        if (!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");
        s.lang = t[0], void 0 === s[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) ? t[1] : {}, s[t[0]] = (0, a.isObjectEmpty)(t[1]) ? r.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) && (s[t[0]] = t[1]);
      }

      return s.lang;
    }, s.t = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

      if ("string" == typeof e && e.length) {
        var n = void 0,
            i = void 0,
            r = s.language(),
            l = function l(e, t, n) {
          return "object" !== (void 0 === e ? "undefined" : o(e)) || "number" != typeof t || "number" != typeof n ? e : [function () {
            return arguments.length <= 1 ? void 0 : arguments[1];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2];
          }, function () {
            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2];
          }, function () {
            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3];
          }, function () {
            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5];
          }, function () {
            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4];
          }, function () {
            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4];
          }, function () {
            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2];
          }, function () {
            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4];
          }, function () {
            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3];
          }][n].apply(null, [t].concat(e));
        };

        return void 0 !== s[r] && (n = s[r][e], null !== t && "number" == typeof t && (i = s[r]["mejs.plural-form"], n = l.apply(null, [n, t, i]))), !n && s.en && (n = s.en[e], null !== t && "number" == typeof t && (i = s.en["mejs.plural-form"], n = l.apply(null, [n, t, i]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, a.escapeHTML)(n);
      }

      return e;
    }, i["default"].i18n = s, "undefined" != typeof mejsL10n && i["default"].i18n.language(mejsL10n.language, mejsL10n.strings), n["default"] = s;
  }, {
    15: 15,
    27: 27,
    7: 7
  }],
  6: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        a = o(e(3)),
        s = o(e(2)),
        l = o(e(7)),
        d = e(27),
        u = e(28),
        c = e(8),
        f = e(25),
        p = function e(t, n, o) {
      var p = this;
      i(this, e);
      var m = this;
      o = Array.isArray(o) ? o : null, m.defaults = {
        renderers: [],
        fakeNodeName: "mediaelementwrapper",
        pluginPath: "build/",
        shimScriptAccess: "sameDomain"
      }, n = Object.assign(m.defaults, n), m.mediaElement = s["default"].createElement(n.fakeNodeName);
      var h = t,
          v = !1;
      if ("string" == typeof t ? m.mediaElement.originalNode = s["default"].getElementById(t) : (m.mediaElement.originalNode = t, h = t.id), void 0 === m.mediaElement.originalNode || null === m.mediaElement.originalNode) return null;
      m.mediaElement.options = n, h = h || "mejs_" + Math.random().toString().slice(2), m.mediaElement.originalNode.setAttribute("id", h + "_from_mejs");
      var g = m.mediaElement.originalNode.tagName.toLowerCase();
      ["video", "audio"].indexOf(g) > -1 && !m.mediaElement.originalNode.getAttribute("preload") && m.mediaElement.originalNode.setAttribute("preload", "none"), m.mediaElement.originalNode.parentNode.insertBefore(m.mediaElement, m.mediaElement.originalNode), m.mediaElement.appendChild(m.mediaElement.originalNode);

      var y = function y(e, t) {
        if ("https:" === a["default"].location.protocol && 0 === e.indexOf("http:") && f.IS_IOS && l["default"].html5media.mediaTypes.indexOf(t) > -1) {
          var n = new XMLHttpRequest();
          n.onreadystatechange = function () {
            if (4 === this.readyState && 200 === this.status) {
              var t = (a["default"].URL || a["default"].webkitURL).createObjectURL(this.response);
              return m.mediaElement.originalNode.setAttribute("src", t), t;
            }

            return e;
          }, n.open("GET", e), n.responseType = "blob", n.send();
        }

        return e;
      },
          E = void 0;

      if (null !== o) E = o;else if (null !== m.mediaElement.originalNode) switch (E = [], m.mediaElement.originalNode.nodeName.toLowerCase()) {
        case "iframe":
          E.push({
            type: "",
            src: m.mediaElement.originalNode.getAttribute("src")
          });
          break;

        case "audio":
        case "video":
          var b = m.mediaElement.originalNode.children.length,
              S = m.mediaElement.originalNode.getAttribute("src");

          if (S) {
            var x = m.mediaElement.originalNode,
                w = (0, u.formatType)(S, x.getAttribute("type"));
            E.push({
              type: w,
              src: y(S, w)
            });
          }

          for (var P = 0; P < b; P++) {
            var T = m.mediaElement.originalNode.children[P];

            if ("source" === T.tagName.toLowerCase()) {
              var C = T.getAttribute("src"),
                  k = (0, u.formatType)(C, T.getAttribute("type"));
              E.push({
                type: k,
                src: y(C, k)
              });
            }
          }

      }
      m.mediaElement.id = h, m.mediaElement.renderers = {}, m.mediaElement.events = {}, m.mediaElement.promises = [], m.mediaElement.renderer = null, m.mediaElement.rendererName = null, m.mediaElement.changeRenderer = function (e, t) {
        var n = p,
            o = Object.keys(t[0]).length > 2 ? t[0] : t[0].src;
        if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(o), !0;
        void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
        var i = n.mediaElement.renderers[e],
            r = null;
        if (void 0 !== i && null !== i) return i.show(), i.setSrc(o), n.mediaElement.renderer = i, n.mediaElement.rendererName = e, !0;

        for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : c.renderer.order, s = 0, l = a.length; s < l; s++) {
          var d = a[s];

          if (d === e) {
            r = c.renderer.renderers[d];
            var u = Object.assign(r.options, n.mediaElement.options);
            return i = r.create(n.mediaElement, u, t), i.name = e, n.mediaElement.renderers[r.name] = i, n.mediaElement.renderer = i, n.mediaElement.rendererName = e, i.show(), !0;
          }
        }

        return !1;
      }, m.mediaElement.setSize = function (e, t) {
        void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && m.mediaElement.renderer.setSize(e, t);
      }, m.mediaElement.generateError = function (e, t) {
        e = e || "", t = Array.isArray(t) ? t : [];
        var n = (0, d.createEvent)("error", m.mediaElement);
        n.message = e, n.urls = t, m.mediaElement.dispatchEvent(n), v = !0;
      };

      var _ = l["default"].html5media.properties,
          N = l["default"].html5media.methods,
          A = function A(e, t, n, o) {
        var i = e[t];
        Object.defineProperty(e, t, {
          get: function get() {
            return n.apply(e, [i]);
          },
          set: function set(t) {
            return i = o.apply(e, [t]);
          }
        });
      },
          L = function L() {
        return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer ? m.mediaElement.renderer.getSrc() : null;
      },
          F = function F(e) {
        var t = [];
        if ("string" == typeof e) t.push({
          src: e,
          type: e ? (0, u.getTypeFromFile)(e) : ""
        });else if ("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.src) {
          var n = (0, u.absolutizeUrl)(e.src),
              o = e.type,
              i = Object.assign(e, {
            src: n,
            type: "" !== o && null !== o && void 0 !== o || !n ? o : (0, u.getTypeFromFile)(n)
          });
          t.push(i);
        } else if (Array.isArray(e)) for (var a = 0, s = e.length; a < s; a++) {
          var l = (0, u.absolutizeUrl)(e[a].src),
              f = e[a].type,
              p = Object.assign(e[a], {
            src: l,
            type: "" !== f && null !== f && void 0 !== f || !l ? f : (0, u.getTypeFromFile)(l)
          });
          t.push(p);
        }
        var h = c.renderer.select(t, m.mediaElement.options.renderers.length ? m.mediaElement.options.renderers : []),
            v = void 0;
        if (m.mediaElement.paused || (m.mediaElement.pause(), v = (0, d.createEvent)("pause", m.mediaElement), m.mediaElement.dispatchEvent(v)), m.mediaElement.originalNode.src = t[0].src || "", null !== h || !t[0].src) return t[0].src ? m.mediaElement.changeRenderer(h.rendererName, t) : null;
        m.mediaElement.generateError("No renderer found", t);
      },
          j = function j(e, t) {
        try {
          if ("play" === e && "native_dash" === m.mediaElement.rendererName) {
            var n = m.mediaElement.renderer[e](t);
            n && "function" == typeof n.then && n["catch"](function () {
              m.mediaElement.paused && setTimeout(function () {
                var e = m.mediaElement.renderer.play();
                void 0 !== e && e["catch"](function () {
                  m.mediaElement.renderer.paused || m.mediaElement.renderer.pause();
                });
              }, 150);
            });
          } else m.mediaElement.renderer[e](t);
        } catch (e) {
          m.mediaElement.generateError(e, E);
        }
      };

      A(m.mediaElement, "src", L, F), m.mediaElement.getSrc = L, m.mediaElement.setSrc = F;

      for (var I = 0, M = _.length; I < M; I++) {
        !function (e) {
          if ("src" !== e) {
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                n = function n() {
              return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["get" + t] ? m.mediaElement.renderer["get" + t]() : null;
            },
                o = function o(e) {
              void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["set" + t] && m.mediaElement.renderer["set" + t](e);
            };

            A(m.mediaElement, e, n, o), m.mediaElement["get" + t] = n, m.mediaElement["set" + t] = o;
          }
        }(_[I]);
      }

      for (var O = 0, D = N.length; O < D; O++) {
        !function (e) {
          m.mediaElement[e] = function () {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) {
              n[o] = arguments[o];
            }

            return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer[e] && (m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function () {
              j(e, n);
            })["catch"](function (e) {
              m.mediaElement.generateError(e, E);
            }) : j(e, n)), null;
          };
        }(N[O]);
      }

      return m.mediaElement.addEventListener = function (e, t) {
        m.mediaElement.events[e] = m.mediaElement.events[e] || [], m.mediaElement.events[e].push(t);
      }, m.mediaElement.removeEventListener = function (e, t) {
        if (!e) return m.mediaElement.events = {}, !0;
        var n = m.mediaElement.events[e];
        if (!n) return !0;
        if (!t) return m.mediaElement.events[e] = [], !0;

        for (var o = 0; o < n.length; o++) {
          if (n[o] === t) return m.mediaElement.events[e].splice(o, 1), !0;
        }

        return !1;
      }, m.mediaElement.dispatchEvent = function (e) {
        var t = m.mediaElement.events[e.type];
        if (t) for (var n = 0; n < t.length; n++) {
          t[n].apply(null, [e]);
        }
      }, m.mediaElement.destroy = function () {
        var e = m.mediaElement.originalNode.cloneNode(!0),
            t = m.mediaElement.parentElement;
        e.removeAttribute("id"), e.remove(), m.mediaElement.remove(), t.append(e);
      }, E.length && (m.mediaElement.src = E), m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function () {
        m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode);
      })["catch"](function () {
        v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode);
      }) : (m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode), v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode)), m.mediaElement;
    };

    a["default"].MediaElement = p, l["default"].MediaElement = p, n["default"] = p;
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  7: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var o = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(3)),
        i = {};

    i.version = "4.2.7", i.html5media = {
      properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
      readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
      methods: ["load", "play", "pause", "canPlayType"],
      events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
      mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
    }, o["default"].mejs = i, n["default"] = i;
  }, {
    3: 3
  }],
  8: [function (e, t, n) {
    "use strict";

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.renderer = void 0;

    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        a = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(7)),
        s = function () {
      function e() {
        o(this, e), this.renderers = {}, this.order = [];
      }

      return r(e, [{
        key: "add",
        value: function value(e) {
          if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
          this.renderers[e.name] = e, this.order.push(e.name);
        }
      }, {
        key: "select",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              n = t.length;

          if (t = t.length ? t : this.order, !n) {
            var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                i = function i(e) {
              for (var t = 0, n = o.length; t < n; t++) {
                if (o[t].test(e)) return t;
              }

              return o.length;
            };

            t.sort(function (e, t) {
              return i(e) - i(t);
            });
          }

          for (var r = 0, a = t.length; r < a; r++) {
            var s = t[r],
                l = this.renderers[s];
            if (null !== l && void 0 !== l) for (var d = 0, u = e.length; d < u; d++) {
              if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type)) return {
                rendererName: l.name,
                src: e[d].src
              };
            }
          }

          return null;
        }
      }, {
        key: "order",
        set: function set(e) {
          if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
          this._order = e;
        },
        get: function get() {
          return this._order;
        }
      }, {
        key: "renderers",
        set: function set(e) {
          if (null !== e && "object" !== (void 0 === e ? "undefined" : i(e))) throw new TypeError("renderers must be an array of objects.");
          this._renderers = e;
        },
        get: function get() {
          return this._renderers;
        }
      }]), e;
    }(),
        l = n.renderer = new s();

    a["default"].Renderers = l;
  }, {
    7: 7
  }],
  9: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(3)),
        r = o(e(2)),
        a = o(e(5)),
        s = e(16),
        l = o(s),
        d = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t["default"] = e, t;
    }(e(25)),
        u = e(27),
        c = e(26),
        f = e(28);

    Object.assign(s.config, {
      usePluginFullScreen: !0,
      fullscreenText: null,
      useFakeFullscreen: !1
    }), Object.assign(l["default"].prototype, {
      isFullScreen: !1,
      isNativeFullScreen: !1,
      isInIframe: !1,
      isPluginClickThroughCreated: !1,
      fullscreenMode: "",
      containerSizeTimeout: null,
      buildfullscreen: function buildfullscreen(e) {
        if (e.isVideo) {
          e.isInIframe = i["default"].location !== i["default"].parent.location, e.detectFullscreenMode();
          var t = this,
              n = (0, u.isString)(t.options.fullscreenText) ? t.options.fullscreenText : a["default"].t("mejs.fullscreen"),
              o = r["default"].createElement("div");

          if (o.className = t.options.classPrefix + "button " + t.options.classPrefix + "fullscreen-button", o.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + n + '" aria-label="' + n + '" tabindex="0"></button>', t.addControlElement(o, "fullscreen"), o.addEventListener("click", function () {
            d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen();
          }), e.fullscreenBtn = o, t.options.keyActions.push({
            keys: [70],
            action: function action(e, t, n, o) {
              o.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen());
            }
          }), t.exitFullscreenCallback = function (n) {
            27 === (n.which || n.keyCode || 0) && (d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || t.isFullScreen) && e.exitFullScreen();
          }, t.globalBind("keydown", t.exitFullscreenCallback), t.normalHeight = 0, t.normalWidth = 0, d.HAS_TRUE_NATIVE_FULLSCREEN) {
            e.globalBind(d.FULLSCREEN_EVENT_NAME, function () {
              e.isFullScreen && (d.isFullScreen() ? (e.isNativeFullScreen = !0, e.setControlsSize()) : (e.isNativeFullScreen = !1, e.exitFullScreen()));
            });
          }
        }
      },
      cleanfullscreen: function cleanfullscreen(e) {
        e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback);
      },
      detectFullscreenMode: function detectFullscreenMode() {
        var e = this,
            t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName),
            n = "";
        return d.HAS_TRUE_NATIVE_FULLSCREEN && t ? n = "native-native" : d.HAS_TRUE_NATIVE_FULLSCREEN && !t ? n = "plugin-native" : e.usePluginFullScreen && d.SUPPORT_POINTER_EVENTS && (n = "plugin-click"), e.fullscreenMode = n, n;
      },
      enterFullScreen: function enterFullScreen() {
        var e = this,
            t = null !== e.media.rendererName && /(html5|native)/i.test(e.media.rendererName),
            n = getComputedStyle(e.getElement(e.container));
        if (!1 === e.options.useFakeFullscreen && d.IS_IOS && d.HAS_IOS_FULLSCREEN && "function" == typeof e.media.originalNode.webkitEnterFullscreen && e.media.originalNode.canPlayType((0, f.getTypeFromFile)(e.media.getSrc()))) e.media.originalNode.webkitEnterFullscreen();else {
          if ((0, c.addClass)(r["default"].documentElement, e.options.classPrefix + "fullscreen"), (0, c.addClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"), e.normalHeight = parseFloat(n.height), e.normalWidth = parseFloat(n.width), "native-native" !== e.fullscreenMode && "plugin-native" !== e.fullscreenMode || (d.requestFullScreen(e.getElement(e.container)), e.isInIframe && setTimeout(function t() {
            if (e.isNativeFullScreen) {
              var n = i["default"].innerWidth || r["default"].documentElement.clientWidth || r["default"].body.clientWidth,
                  o = screen.width;
              Math.abs(o - n) > .002 * o ? e.exitFullScreen() : setTimeout(t, 500);
            }
          }, 1e3)), e.getElement(e.container).style.width = "100%", e.getElement(e.container).style.height = "100%", e.containerSizeTimeout = setTimeout(function () {
            e.getElement(e.container).style.width = "100%", e.getElement(e.container).style.height = "100%", e.setControlsSize();
          }, 500), t) e.node.style.width = "100%", e.node.style.height = "100%";else for (var o = e.getElement(e.container).querySelectorAll("embed, object, video"), a = o.length, s = 0; s < a; s++) {
            o[s].style.width = "100%", o[s].style.height = "100%";
          }
          e.options.setDimensions && "function" == typeof e.media.setSize && e.media.setSize(screen.width, screen.height);

          for (var l = e.getElement(e.layers).children, p = l.length, m = 0; m < p; m++) {
            l[m].style.width = "100%", l[m].style.height = "100%";
          }

          e.fullscreenBtn && ((0, c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen"), (0, c.addClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen")), e.setControlsSize(), e.isFullScreen = !0;
          var h = Math.min(screen.width / e.width, screen.height / e.height),
              v = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
          v && (v.style.fontSize = 100 * h + "%", v.style.lineHeight = "normal", e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = (screen.height - e.normalHeight) / 2 - e.getElement(e.controls).offsetHeight / 2 + h + 15 + "px");
          var g = (0, u.createEvent)("enteredfullscreen", e.getElement(e.container));
          e.getElement(e.container).dispatchEvent(g);
        }
      },
      exitFullScreen: function exitFullScreen() {
        var e = this,
            t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);

        if (clearTimeout(e.containerSizeTimeout), d.HAS_TRUE_NATIVE_FULLSCREEN && (d.IS_FULLSCREEN || e.isFullScreen) && d.cancelFullScreen(), (0, c.removeClass)(r["default"].documentElement, e.options.classPrefix + "fullscreen"), (0, c.removeClass)(e.getElement(e.container), e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
          if (e.getElement(e.container).style.width = e.normalWidth + "px", e.getElement(e.container).style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";else for (var n = e.getElement(e.container).querySelectorAll("embed, object, video"), o = n.length, i = 0; i < o; i++) {
            n[i].style.width = e.normalWidth + "px", n[i].style.height = e.normalHeight + "px";
          }
          "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);

          for (var a = e.getElement(e.layers).children, s = a.length, l = 0; l < s; l++) {
            a[l].style.width = e.normalWidth + "px", a[l].style.height = e.normalHeight + "px";
          }
        }

        e.fullscreenBtn && ((0, c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, c.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
        var f = e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-text");
        f && (f.style.fontSize = "", f.style.lineHeight = "", e.getElement(e.container).querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
        var p = (0, u.createEvent)("exitedfullscreen", e.getElement(e.container));
        e.getElement(e.container).dispatchEvent(p);
      }
    });
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    5: 5
  }],
  10: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = e(16),
        a = o(r),
        s = o(e(5)),
        l = e(27),
        d = e(26);
    Object.assign(r.config, {
      playText: null,
      pauseText: null
    }), Object.assign(a["default"].prototype, {
      buildplaypause: function buildplaypause(e, t, n, o) {
        function r(e) {
          "play" === e ? ((0, d.removeClass)(p, a.options.classPrefix + "play"), (0, d.removeClass)(p, a.options.classPrefix + "replay"), (0, d.addClass)(p, a.options.classPrefix + "pause"), m.setAttribute("title", f), m.setAttribute("aria-label", f)) : ((0, d.removeClass)(p, a.options.classPrefix + "pause"), (0, d.removeClass)(p, a.options.classPrefix + "replay"), (0, d.addClass)(p, a.options.classPrefix + "play"), m.setAttribute("title", c), m.setAttribute("aria-label", c));
        }

        var a = this,
            u = a.options,
            c = (0, l.isString)(u.playText) ? u.playText : s["default"].t("mejs.play"),
            f = (0, l.isString)(u.pauseText) ? u.pauseText : s["default"].t("mejs.pause"),
            p = i["default"].createElement("div");
        p.className = a.options.classPrefix + "button " + a.options.classPrefix + "playpause-button " + a.options.classPrefix + "play", p.innerHTML = '<button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + f + '" tabindex="0"></button>', p.addEventListener("click", function () {
          a.paused ? a.play() : a.pause();
        });
        var m = p.querySelector("button");
        a.addControlElement(p, "playpause"), r("pse"), o.addEventListener("loadedmetadata", function () {
          -1 === o.rendererName.indexOf("flash") && r("pse");
        }), o.addEventListener("play", function () {
          r("play");
        }), o.addEventListener("playing", function () {
          r("play");
        }), o.addEventListener("pause", function () {
          r("pse");
        }), o.addEventListener("ended", function () {
          e.options.loop || ((0, d.removeClass)(p, a.options.classPrefix + "pause"), (0, d.removeClass)(p, a.options.classPrefix + "play"), (0, d.addClass)(p, a.options.classPrefix + "replay"), m.setAttribute("title", c), m.setAttribute("aria-label", c));
        });
      }
    });
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    5: 5
  }],
  11: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = e(16),
        a = o(r),
        s = o(e(5)),
        l = e(25),
        d = e(30),
        u = e(26);
    Object.assign(r.config, {
      enableProgressTooltip: !0,
      useSmoothHover: !0,
      forceLive: !1
    }), Object.assign(a["default"].prototype, {
      buildprogress: function buildprogress(e, t, n, o) {
        var a = 0,
            c = !1,
            f = !1,
            p = this,
            m = e.options.autoRewind,
            h = e.options.enableProgressTooltip ? '<span class="' + p.options.classPrefix + 'time-float"><span class="' + p.options.classPrefix + 'time-float-current">00:00</span><span class="' + p.options.classPrefix + 'time-float-corner"></span></span>' : "",
            v = i["default"].createElement("div");
        v.className = p.options.classPrefix + "time-rail", v.innerHTML = '<span class="' + p.options.classPrefix + "time-total " + p.options.classPrefix + 'time-slider"><span class="' + p.options.classPrefix + 'time-buffering"></span><span class="' + p.options.classPrefix + 'time-loaded"></span><span class="' + p.options.classPrefix + 'time-current"></span><span class="' + p.options.classPrefix + 'time-hovered no-hover"></span><span class="' + p.options.classPrefix + 'time-handle"><span class="' + p.options.classPrefix + 'time-handle-content"></span></span>' + h + "</span>", p.addControlElement(v, "progress"), p.options.keyActions.push({
          keys: [37, 227],
          action: function action(e) {
            if (!isNaN(e.duration) && e.duration > 0) {
              e.isVideo && (e.showControls(), e.startControlsTimer()), e.getElement(e.container).querySelector("." + r.config.classPrefix + "time-total").focus();
              var t = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
              e.setCurrentTime(t);
            }
          }
        }, {
          keys: [39, 228],
          action: function action(e) {
            if (!isNaN(e.duration) && e.duration > 0) {
              e.isVideo && (e.showControls(), e.startControlsTimer()), e.getElement(e.container).querySelector("." + r.config.classPrefix + "time-total").focus();
              var t = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
              e.setCurrentTime(t);
            }
          }
        }), p.rail = t.querySelector("." + p.options.classPrefix + "time-rail"), p.total = t.querySelector("." + p.options.classPrefix + "time-total"), p.loaded = t.querySelector("." + p.options.classPrefix + "time-loaded"), p.current = t.querySelector("." + p.options.classPrefix + "time-current"), p.handle = t.querySelector("." + p.options.classPrefix + "time-handle"), p.timefloat = t.querySelector("." + p.options.classPrefix + "time-float"), p.timefloatcurrent = t.querySelector("." + p.options.classPrefix + "time-float-current"), p.slider = t.querySelector("." + p.options.classPrefix + "time-slider"), p.hovered = t.querySelector("." + p.options.classPrefix + "time-hovered"), p.buffer = t.querySelector("." + p.options.classPrefix + "time-buffering"), p.newTime = 0, p.forcedHandlePause = !1, p.setTransformStyle = function (e, t) {
          e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t;
        }, p.buffer.style.display = "none";

        var g = function g(t) {
          var n = getComputedStyle(p.total),
              o = (0, u.offset)(p.total),
              i = p.total.offsetWidth,
              r = void 0 !== n.webkitTransform ? "webkitTransform" : void 0 !== n.mozTransform ? "mozTransform " : void 0 !== n.oTransform ? "oTransform" : void 0 !== n.msTransform ? "msTransform" : "transform",
              a = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
              s = 0,
              f = 0,
              m = 0,
              h = void 0;

          if (h = t.originalEvent && t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.changedTouches ? t.changedTouches[0].pageX : t.pageX, p.getDuration()) {
            if (h < o.left ? h = o.left : h > i + o.left && (h = i + o.left), m = h - o.left, s = m / i, p.newTime = s <= .02 ? 0 : s * p.getDuration(), c && null !== p.getCurrentTime() && p.newTime.toFixed(4) !== p.getCurrentTime().toFixed(4) && (p.setCurrentRailHandle(p.newTime), p.updateCurrent(p.newTime)), !l.IS_IOS && !l.IS_ANDROID) {
              if (m < 0 && (m = 0), p.options.useSmoothHover && null !== a && void 0 !== window[a]) {
                var v = new window[a](getComputedStyle(p.handle)[r]).m41,
                    g = m / parseFloat(getComputedStyle(p.total).width) - v / parseFloat(getComputedStyle(p.total).width);
                p.hovered.style.left = v + "px", p.setTransformStyle(p.hovered, "scaleX(" + g + ")"), p.hovered.setAttribute("pos", m), g >= 0 ? (0, u.removeClass)(p.hovered, "negative") : (0, u.addClass)(p.hovered, "negative");
              }

              if (p.timefloat) {
                var y = p.timefloat.offsetWidth / 2,
                    E = mejs.Utils.offset(p.getElement(p.container)),
                    b = getComputedStyle(p.timefloat);
                f = h - E.left < p.timefloat.offsetWidth ? y : h - E.left >= p.getElement(p.container).offsetWidth - y ? p.total.offsetWidth - y : m, (0, u.hasClass)(p.getElement(p.container), p.options.classPrefix + "long-video") && (f += parseFloat(b.marginLeft) / 2 + p.timefloat.offsetWidth / 2), p.timefloat.style.left = f + "px", p.timefloatcurrent.innerHTML = (0, d.secondsToTimeCode)(p.newTime, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat), p.timefloat.style.display = "block";
              }
            }
          } else l.IS_IOS || l.IS_ANDROID || !p.timefloat || (f = p.timefloat.offsetWidth + i >= p.getElement(p.container).offsetWidth ? p.timefloat.offsetWidth / 2 : 0, p.timefloat.style.left = f + "px", p.timefloat.style.left = f + "px", p.timefloat.style.display = "block");
        },
            y = function y() {
          var t = p.getCurrentTime(),
              n = s["default"].t("mejs.time-slider"),
              i = (0, d.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat),
              r = p.getDuration();
          p.slider.setAttribute("role", "slider"), p.slider.tabIndex = 0, o.paused ? (p.slider.setAttribute("aria-label", n), p.slider.setAttribute("aria-valuemin", 0), p.slider.setAttribute("aria-valuemax", r), p.slider.setAttribute("aria-valuenow", t), p.slider.setAttribute("aria-valuetext", i)) : (p.slider.removeAttribute("aria-label"), p.slider.removeAttribute("aria-valuemin"), p.slider.removeAttribute("aria-valuemax"), p.slider.removeAttribute("aria-valuenow"), p.slider.removeAttribute("aria-valuetext"));
        },
            E = function E() {
          new Date() - a >= 1e3 && p.play();
        },
            b = function b() {
          c && null !== p.getCurrentTime() && p.newTime.toFixed(4) !== p.getCurrentTime().toFixed(4) && (p.setCurrentTime(p.newTime), p.setCurrentRail(), p.updateCurrent(p.newTime)), p.forcedHandlePause && (p.slider.focus(), p.play()), p.forcedHandlePause = !1;
        };

        p.slider.addEventListener("focus", function () {
          e.options.autoRewind = !1;
        }), p.slider.addEventListener("blur", function () {
          e.options.autoRewind = m;
        }), p.slider.addEventListener("keydown", function (t) {
          if (new Date() - a >= 1e3 && (f = p.paused), p.options.keyActions.length) {
            var n = t.which || t.keyCode || 0,
                i = p.getDuration(),
                r = e.options.defaultSeekForwardInterval(o),
                s = e.options.defaultSeekBackwardInterval(o),
                d = p.getCurrentTime(),
                u = p.getElement(p.container).querySelector("." + p.options.classPrefix + "volume-slider");

            if (38 === n || 40 === n) {
              u && (u.style.display = "block"), p.isVideo && (p.showControls(), p.startControlsTimer());
              var c = 38 === n ? Math.min(p.volume + .1, 1) : Math.max(p.volume - .1, 0),
                  m = c <= 0;
              return p.setVolume(c), void p.setMuted(m);
            }

            switch (u && (u.style.display = "none"), n) {
              case 37:
                p.getDuration() !== 1 / 0 && (d -= s);
                break;

              case 39:
                p.getDuration() !== 1 / 0 && (d += r);
                break;

              case 36:
                d = 0;
                break;

              case 35:
                d = i;
                break;

              case 13:
              case 32:
                return void (l.IS_FIREFOX && (p.paused ? p.play() : p.pause()));

              default:
                return;
            }

            d = d < 0 ? 0 : d >= i ? i : Math.floor(d), a = new Date(), f || e.pause(), d < p.getDuration() && !f && setTimeout(E, 1100), p.setCurrentTime(d), e.showControls(), t.preventDefault(), t.stopPropagation();
          }
        });
        var S = ["mousedown", "touchstart"];
        p.slider.addEventListener("dragstart", function () {
          return !1;
        });

        for (var x = 0, w = S.length; x < w; x++) {
          p.slider.addEventListener(S[x], function (e) {
            if (p.forcedHandlePause = !1, p.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
              p.paused || (p.pause(), p.forcedHandlePause = !0), c = !0, g(e);

              for (var t = ["mouseup", "touchend"], n = 0, o = t.length; n < o; n++) {
                p.getElement(p.container).addEventListener(t[n], function (e) {
                  var t = e.target;
                  (t === p.slider || t.closest("." + p.options.classPrefix + "time-slider")) && g(e);
                });
              }

              p.globalBind("mouseup.dur touchend.dur", function () {
                b(), c = !1, p.timefloat && (p.timefloat.style.display = "none");
              });
            }
          }, !(!l.SUPPORT_PASSIVE_EVENT || "touchstart" !== S[x]) && {
            passive: !0
          });
        }

        p.slider.addEventListener("mouseenter", function (e) {
          e.target === p.slider && p.getDuration() !== 1 / 0 && (p.getElement(p.container).addEventListener("mousemove", function (e) {
            var t = e.target;
            (t === p.slider || t.closest("." + p.options.classPrefix + "time-slider")) && g(e);
          }), !p.timefloat || l.IS_IOS || l.IS_ANDROID || (p.timefloat.style.display = "block"), p.hovered && !l.IS_IOS && !l.IS_ANDROID && p.options.useSmoothHover && (0, u.removeClass)(p.hovered, "no-hover"));
        }), p.slider.addEventListener("mouseleave", function () {
          p.getDuration() !== 1 / 0 && (c || (p.timefloat && (p.timefloat.style.display = "none"), p.hovered && p.options.useSmoothHover && (0, u.addClass)(p.hovered, "no-hover")));
        }), p.broadcastCallback = function (n) {
          var o = t.querySelector("." + p.options.classPrefix + "broadcast");

          if (p.options.forceLive || p.getDuration() === 1 / 0) {
            if (!o || p.options.forceLive) {
              var r = i["default"].createElement("span");
              r.className = p.options.classPrefix + "broadcast", r.innerText = s["default"].t("mejs.live-broadcast"), p.slider.style.display = "none", p.rail.appendChild(r);
            }
          } else o && (p.slider.style.display = "", o.remove()), e.setProgressRail(n), p.forcedHandlePause || e.setCurrentRail(n), y();
        }, o.addEventListener("progress", p.broadcastCallback), o.addEventListener("timeupdate", p.broadcastCallback), o.addEventListener("play", function () {
          p.buffer.style.display = "none";
        }), o.addEventListener("playing", function () {
          p.buffer.style.display = "none";
        }), o.addEventListener("seeking", function () {
          p.buffer.style.display = "";
        }), o.addEventListener("seeked", function () {
          p.buffer.style.display = "none";
        }), o.addEventListener("pause", function () {
          p.buffer.style.display = "none";
        }), o.addEventListener("waiting", function () {
          p.buffer.style.display = "";
        }), o.addEventListener("loadeddata", function () {
          p.buffer.style.display = "";
        }), o.addEventListener("canplay", function () {
          p.buffer.style.display = "none";
        }), o.addEventListener("error", function () {
          p.buffer.style.display = "none";
        }), p.getElement(p.container).addEventListener("controlsresize", function (t) {
          p.getDuration() !== 1 / 0 && (e.setProgressRail(t), p.forcedHandlePause || e.setCurrentRail(t));
        });
      },
      cleanprogress: function cleanprogress(e, t, n, o) {
        o.removeEventListener("progress", e.broadcastCallback), o.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove();
      },
      setProgressRail: function setProgressRail(e) {
        var t = this,
            n = void 0 !== e ? e.detail.target || e.target : t.media,
            o = null;
        n && n.buffered && n.buffered.length > 0 && n.buffered.end && t.getDuration() ? o = n.buffered.end(n.buffered.length - 1) / t.getDuration() : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? o = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (o = e.loaded / e.total), null !== o && (o = Math.min(1, Math.max(0, o)), t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + o + ")"));
      },
      setCurrentRailHandle: function setCurrentRailHandle(e) {
        var t = this;
        t.setCurrentRailMain(t, e);
      },
      setCurrentRail: function setCurrentRail() {
        var e = this;
        e.setCurrentRailMain(e);
      },
      setCurrentRailMain: function setCurrentRailMain(e, t) {
        if (void 0 !== e.getCurrentTime() && e.getDuration()) {
          var n = void 0 === t ? e.getCurrentTime() : t;

          if (e.total && e.handle) {
            var o = parseFloat(getComputedStyle(e.total).width),
                i = Math.round(o * n / e.getDuration()),
                r = i - Math.round(e.handle.offsetWidth / 2);

            if (r = r < 0 ? 0 : r, e.setTransformStyle(e.current, "scaleX(" + i / o + ")"), e.setTransformStyle(e.handle, "translateX(" + r + "px)"), e.options.useSmoothHover && !(0, u.hasClass)(e.hovered, "no-hover")) {
              var a = parseInt(e.hovered.getAttribute("pos"), 10),
                  s = (a = isNaN(a) ? 0 : a) / o - r / o;
              e.hovered.style.left = r + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), s >= 0 ? (0, u.removeClass)(e.hovered, "negative") : (0, u.addClass)(e.hovered, "negative");
            }
          }
        }
      }
    });
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    30: 30,
    5: 5
  }],
  12: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = e(16),
        a = o(r),
        s = e(30),
        l = e(26);
    Object.assign(r.config, {
      duration: 0,
      timeAndDurationSeparator: "<span> | </span>"
    }), Object.assign(a["default"].prototype, {
      buildcurrent: function buildcurrent(e, t, n, o) {
        var r = this,
            a = i["default"].createElement("div");
        a.className = r.options.classPrefix + "time", a.setAttribute("role", "timer"), a.setAttribute("aria-live", "off"), a.innerHTML = '<span class="' + r.options.classPrefix + 'currenttime">' + (0, s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat) + "</span>", r.addControlElement(a, "current"), e.updateCurrent(), r.updateTimeCallback = function () {
          r.controlsAreVisible && e.updateCurrent();
        }, o.addEventListener("timeupdate", r.updateTimeCallback);
      },
      cleancurrent: function cleancurrent(e, t, n, o) {
        o.removeEventListener("timeupdate", e.updateTimeCallback);
      },
      buildduration: function buildduration(e, t, n, o) {
        var r = this;
        if (t.lastChild.querySelector("." + r.options.classPrefix + "currenttime")) t.querySelector("." + r.options.classPrefix + "time").innerHTML += r.options.timeAndDurationSeparator + '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>";else {
          t.querySelector("." + r.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + r.options.classPrefix + "currenttime").parentNode, r.options.classPrefix + "currenttime-container");
          var a = i["default"].createElement("div");
          a.className = r.options.classPrefix + "time " + r.options.classPrefix + "duration-container", a.innerHTML = '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength, r.options.timeFormat) + "</span>", r.addControlElement(a, "duration");
        }
        r.updateDurationCallback = function () {
          r.controlsAreVisible && e.updateDuration();
        }, o.addEventListener("timeupdate", r.updateDurationCallback);
      },
      cleanduration: function cleanduration(e, t, n, o) {
        o.removeEventListener("timeupdate", e.updateDurationCallback);
      },
      updateCurrent: function updateCurrent() {
        var e = this,
            t = e.getCurrentTime();
        isNaN(t) && (t = 0);
        var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
        n.length > 5 ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime") && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "currenttime").innerText = n);
      },
      updateDuration: function updateDuration() {
        var e = this,
            t = e.getDuration();
        (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), e.options.duration > 0 && (t = e.options.duration);
        var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength, e.options.timeFormat);
        n.length > 5 ? (0, l.addClass)(e.getElement(e.container), e.options.classPrefix + "long-video") : (0, l.removeClass)(e.getElement(e.container), e.options.classPrefix + "long-video"), e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration") && t > 0 && (e.getElement(e.controls).querySelector("." + e.options.classPrefix + "duration").innerHTML = n);
      }
    });
  }, {
    16: 16,
    2: 2,
    26: 26,
    30: 30
  }],
  13: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = o(e(7)),
        a = o(e(5)),
        s = e(16),
        l = o(s),
        d = e(30),
        u = e(27),
        c = e(26);
    Object.assign(s.config, {
      startLanguage: "",
      tracksText: null,
      chaptersText: null,
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: ""
    }), Object.assign(l["default"].prototype, {
      hasChapters: !1,
      buildtracks: function buildtracks(e, t, n, o) {
        if (this.findTracks(), e.tracks.length || e.trackFiles && 0 !== !e.trackFiles.length) {
          var r = this,
              s = r.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
              l = (0, u.isString)(r.options.tracksText) ? r.options.tracksText : a["default"].t("mejs.captions-subtitles"),
              d = (0, u.isString)(r.options.chaptersText) ? r.options.chaptersText : a["default"].t("mejs.captions-chapters"),
              f = null === e.trackFiles ? e.tracks.length : e.trackFiles.length;
          if (r.domNode.textTracks) for (var p = r.domNode.textTracks.length - 1; p >= 0; p--) {
            r.domNode.textTracks[p].mode = "hidden";
          }
          r.cleartracks(e), e.captions = i["default"].createElement("div"), e.captions.className = r.options.classPrefix + "captions-layer " + r.options.classPrefix + "layer", e.captions.innerHTML = '<div class="' + r.options.classPrefix + "captions-position " + r.options.classPrefix + 'captions-position-hover"' + s + '><span class="' + r.options.classPrefix + 'captions-text"></span></div>', e.captions.style.display = "none", n.insertBefore(e.captions, n.firstChild), e.captionsText = e.captions.querySelector("." + r.options.classPrefix + "captions-text"), e.captionsButton = i["default"].createElement("div"), e.captionsButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "captions-button", e.captionsButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + l + '" aria-label="' + l + '" tabindex="0"></button><div class="' + r.options.classPrefix + "captions-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'captions-selector-list"><li class="' + r.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked disabled><label class="' + r.options.classPrefix + "captions-selector-label " + r.options.classPrefix + 'captions-selected" for="' + e.id + '_captions_none">' + a["default"].t("mejs.none") + "</label></li></ul></div>", r.addControlElement(e.captionsButton, "tracks"), e.captionsButton.querySelector("." + r.options.classPrefix + "captions-selector-input").disabled = !1, e.chaptersButton = i["default"].createElement("div"), e.chaptersButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "chapters-button", e.chaptersButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + d + '" aria-label="' + d + '" tabindex="0"></button><div class="' + r.options.classPrefix + "chapters-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'chapters-selector-list"></ul></div>';

          for (var m = 0, h = 0; h < f; h++) {
            var v = e.tracks[h].kind;
            e.tracks[h].src.trim() && ("subtitles" === v || "captions" === v ? m++ : "chapters" !== v || t.querySelector("." + r.options.classPrefix + "chapter-selector") || e.captionsButton.parentNode.insertBefore(e.chaptersButton, e.captionsButton));
          }

          e.trackToLoad = -1, e.selectedTrack = null, e.isLoadingTrack = !1;

          for (var g = 0; g < f; g++) {
            var y = e.tracks[g].kind;
            !e.tracks[g].src.trim() || "subtitles" !== y && "captions" !== y || e.addTrackButton(e.tracks[g].trackId, e.tracks[g].srclang, e.tracks[g].label);
          }

          e.loadNextTrack();
          var E = ["mouseenter", "focusin"],
              b = ["mouseleave", "focusout"];
          if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === m) e.captionsButton.addEventListener("click", function (t) {
            var n = "none";
            null === e.selectedTrack && (n = e.tracks[0].trackId);
            var o = t.keyCode || t.which;
            e.setTrack(n, void 0 !== o);
          });else {
            for (var S = e.captionsButton.querySelectorAll("." + r.options.classPrefix + "captions-selector-label"), x = e.captionsButton.querySelectorAll("input[type=radio]"), w = 0, P = E.length; w < P; w++) {
              e.captionsButton.addEventListener(E[w], function () {
                (0, c.removeClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen");
              });
            }

            for (var T = 0, C = b.length; T < C; T++) {
              e.captionsButton.addEventListener(b[T], function () {
                (0, c.addClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen");
              });
            }

            for (var k = 0, _ = x.length; k < _; k++) {
              x[k].addEventListener("click", function (t) {
                var n = t.keyCode || t.which;
                e.setTrack(this.value, void 0 !== n);
              });
            }

            for (var N = 0, A = S.length; N < A; N++) {
              S[N].addEventListener("click", function (e) {
                var t = (0, c.siblings)(this, function (e) {
                  return "INPUT" === e.tagName;
                })[0],
                    n = (0, u.createEvent)("click", t);
                t.dispatchEvent(n), e.preventDefault();
              });
            }

            e.captionsButton.addEventListener("keydown", function (e) {
              e.stopPropagation();
            });
          }

          for (var L = 0, F = E.length; L < F; L++) {
            e.chaptersButton.addEventListener(E[L], function () {
              this.querySelector("." + r.options.classPrefix + "chapters-selector-list").children.length && (0, c.removeClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen");
            });
          }

          for (var j = 0, I = b.length; j < I; j++) {
            e.chaptersButton.addEventListener(b[j], function () {
              (0, c.addClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen");
            });
          }

          e.chaptersButton.addEventListener("keydown", function (e) {
            e.stopPropagation();
          }), e.options.alwaysShowControls ? (0, c.addClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover") : (e.getElement(e.container).addEventListener("controlsshown", function () {
            (0, c.addClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover");
          }), e.getElement(e.container).addEventListener("controlshidden", function () {
            o.paused || (0, c.removeClass)(e.getElement(e.container).querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover");
          })), o.addEventListener("timeupdate", function () {
            e.displayCaptions();
          }), "" !== e.options.slidesSelector && (e.slidesContainer = i["default"].querySelectorAll(e.options.slidesSelector), o.addEventListener("timeupdate", function () {
            e.displaySlides();
          }));
        }
      },
      cleartracks: function cleartracks(e) {
        e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove());
      },
      rebuildtracks: function rebuildtracks() {
        var e = this;
        e.findTracks(), e.buildtracks(e, e.getElement(e.controls), e.getElement(e.layers), e.media);
      },
      findTracks: function findTracks() {
        var e = this,
            t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
            n = t.length;
        e.tracks = [];

        for (var o = 0; o < n; o++) {
          var i = t[o],
              r = i.getAttribute("srclang").toLowerCase() || "",
              a = e.id + "_track_" + o + "_" + i.getAttribute("kind") + "_" + r;
          e.tracks.push({
            trackId: a,
            srclang: r,
            src: i.getAttribute("src"),
            kind: i.getAttribute("kind"),
            label: i.getAttribute("label") || "",
            entries: [],
            isLoaded: !1
          });
        }
      },
      setTrack: function setTrack(e, t) {
        for (var n = this, o = n.captionsButton.querySelectorAll('input[type="radio"]'), i = n.captionsButton.querySelectorAll("." + n.options.classPrefix + "captions-selected"), r = n.captionsButton.querySelector('input[value="' + e + '"]'), a = 0, s = o.length; a < s; a++) {
          o[a].checked = !1;
        }

        for (var l = 0, d = i.length; l < d; l++) {
          (0, c.removeClass)(i[l], n.options.classPrefix + "captions-selected");
        }

        r.checked = !0;

        for (var f = (0, c.siblings)(r, function (e) {
          return (0, c.hasClass)(e, n.options.classPrefix + "captions-selector-label");
        }), p = 0, m = f.length; p < m; p++) {
          (0, c.addClass)(f[p], n.options.classPrefix + "captions-selected");
        }

        if ("none" === e) n.selectedTrack = null, (0, c.removeClass)(n.captionsButton, n.options.classPrefix + "captions-enabled");else for (var h = 0, v = n.tracks.length; h < v; h++) {
          var g = n.tracks[h];

          if (g.trackId === e) {
            null === n.selectedTrack && (0, c.addClass)(n.captionsButton, n.options.classPrefix + "captions-enabled"), n.selectedTrack = g, n.captions.setAttribute("lang", n.selectedTrack.srclang), n.displayCaptions();
            break;
          }
        }
        var y = (0, u.createEvent)("captionschange", n.media);
        y.detail.caption = n.selectedTrack, n.media.dispatchEvent(y), t || setTimeout(function () {
          n.getElement(n.container).focus();
        }, 500);
      },
      loadNextTrack: function loadNextTrack() {
        var e = this;
        e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks());
      },
      loadTrack: function loadTrack(e) {
        var t = this,
            n = t.tracks[e];
        void 0 === n || void 0 === n.src && "" === n.src || (0, c.ajax)(n.src, "text", function (e) {
          n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? r["default"].TrackFormatParser.dfxp.parse(e) : r["default"].TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0);
        }, function () {
          t.removeTrackButton(n.trackId), t.loadNextTrack();
        });
      },
      enableTrackButton: function enableTrackButton(e) {
        var t = this,
            n = e.srclang,
            o = i["default"].getElementById("" + e.trackId);

        if (o) {
          var s = e.label;
          "" === s && (s = a["default"].t(r["default"].language.codes[n]) || n), o.disabled = !1;

          for (var l = (0, c.siblings)(o, function (e) {
            return (0, c.hasClass)(e, t.options.classPrefix + "captions-selector-label");
          }), d = 0, f = l.length; d < f; d++) {
            l[d].innerHTML = s;
          }

          if (t.options.startLanguage === n) {
            o.checked = !0;
            var p = (0, u.createEvent)("click", o);
            o.dispatchEvent(p);
          }
        }
      },
      removeTrackButton: function removeTrackButton(e) {
        var t = i["default"].getElementById("" + e);

        if (t) {
          var n = t.closest("li");
          n && n.remove();
        }
      },
      addTrackButton: function addTrackButton(e, t, n) {
        var o = this;
        "" === n && (n = a["default"].t(r["default"].language.codes[t]) || t), o.captionsButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + o.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>";
      },
      checkForTracks: function checkForTracks() {
        var e = this,
            t = !1;

        if (e.options.hideCaptionsButtonWhenEmpty) {
          for (var n = 0, o = e.tracks.length; n < o; n++) {
            var i = e.tracks[n].kind;

            if (("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
              t = !0;
              break;
            }
          }

          e.captionsButton.style.display = t ? "" : "none", e.setControlsSize();
        }
      },
      displayCaptions: function displayCaptions() {
        if (void 0 !== this.tracks) {
          var e = this,
              t = e.selectedTrack;

          if (null !== t && t.isLoaded) {
            var n = e.searchTrackPosition(t.entries, e.media.currentTime);
            if (n > -1) return e.captionsText.innerHTML = function (e) {
              var t = i["default"].createElement("div");
              t.innerHTML = e;

              for (var n = t.getElementsByTagName("script"), o = n.length; o--;) {
                n[o].remove();
              }

              for (var r = t.getElementsByTagName("*"), a = 0, s = r.length; a < s; a++) {
                for (var l = r[a].attributes, d = Array.prototype.slice.call(l), u = 0, c = d.length; u < c; u++) {
                  d[u].name.startsWith("on") || d[u].value.startsWith("javascript") ? r[a].remove() : "style" === d[u].name && r[a].removeAttribute(d[u].name);
                }
              }

              return t.innerHTML;
            }(t.entries[n].text), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void (e.captions.style.height = "0px");
            e.captions.style.display = "none";
          } else e.captions.style.display = "none";
        }
      },
      setupSlides: function setupSlides(e) {
        var t = this;
        t.slides = e, t.slides.entries.imgs = [t.slides.entries.length], t.showSlide(0);
      },
      showSlide: function showSlide(e) {
        var t = this,
            n = this;

        if (void 0 !== n.tracks && void 0 !== n.slidesContainer) {
          var o = n.slides.entries[e].text,
              r = n.slides.entries[e].imgs;

          if (void 0 === r || void 0 === r.fadeIn) {
            var a = i["default"].createElement("img");
            a.src = o, a.addEventListener("load", function () {
              var e = t,
                  o = (0, c.siblings)(e, function (e) {
                return o(e);
              });
              e.style.display = "none", n.slidesContainer.innerHTML += e.innerHTML, (0, c.fadeIn)(n.slidesContainer.querySelector(a));

              for (var i = 0, r = o.length; i < r; i++) {
                (0, c.fadeOut)(o[i], 400);
              }
            }), n.slides.entries[e].imgs = r = a;
          } else if (!(0, c.visible)(r)) {
            var s = (0, c.siblings)(self, function (e) {
              return s(e);
            });
            (0, c.fadeIn)(n.slidesContainer.querySelector(r));

            for (var l = 0, d = s.length; l < d; l++) {
              (0, c.fadeOut)(s[l]);
            }
          }
        }
      },
      displaySlides: function displaySlides() {
        var e = this;

        if (void 0 !== this.slides) {
          var t = e.slides,
              n = e.searchTrackPosition(t.entries, e.media.currentTime);
          n > -1 && e.showSlide(n);
        }
      },
      drawChapters: function drawChapters(e) {
        var t = this,
            n = e.entries.length;

        if (n) {
          t.chaptersButton.querySelector("ul").innerHTML = "";

          for (var o = 0; o < n; o++) {
            t.chaptersButton.querySelector("ul").innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" name="' + t.id + '_chapters" id="' + t.id + "_chapters_" + o + '" value="' + e.entries[o].start + '" disabled><label class="' + t.options.classPrefix + 'chapters-selector-label"for="' + t.id + "_chapters_" + o + '">' + e.entries[o].text + "</label></li>";
          }

          for (var i = t.chaptersButton.querySelectorAll('input[type="radio"]'), r = t.chaptersButton.querySelectorAll("." + t.options.classPrefix + "chapters-selector-label"), a = 0, s = i.length; a < s; a++) {
            i[a].disabled = !1, i[a].checked = !1, i[a].addEventListener("click", function (e) {
              var n = this,
                  o = t.chaptersButton.querySelectorAll("li"),
                  i = (0, c.siblings)(n, function (e) {
                return (0, c.hasClass)(e, t.options.classPrefix + "chapters-selector-label");
              })[0];
              n.checked = !0, n.parentNode.setAttribute("aria-checked", !0), (0, c.addClass)(i, t.options.classPrefix + "chapters-selected"), (0, c.removeClass)(t.chaptersButton.querySelector("." + t.options.classPrefix + "chapters-selected"), t.options.classPrefix + "chapters-selected");

              for (var r = 0, a = o.length; r < a; r++) {
                o[r].setAttribute("aria-checked", !1);
              }

              void 0 === (e.keyCode || e.which) && setTimeout(function () {
                t.getElement(t.container).focus();
              }, 500), t.media.setCurrentTime(parseFloat(n.value)), t.media.paused && t.media.play();
            });
          }

          for (var l = 0, d = r.length; l < d; l++) {
            r[l].addEventListener("click", function (e) {
              var t = (0, c.siblings)(this, function (e) {
                return "INPUT" === e.tagName;
              })[0],
                  n = (0, u.createEvent)("click", t);
              t.dispatchEvent(n), e.preventDefault();
            });
          }
        }
      },
      searchTrackPosition: function searchTrackPosition(e, t) {
        for (var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0; n <= o;) {
          if (i = n + o >> 1, r = e[i].start, a = e[i].stop, t >= r && t < a) return i;
          r < t ? n = i + 1 : r > t && (o = i - 1);
        }

        return -1;
      }
    }), r["default"].language = {
      codes: {
        af: "mejs.afrikaans",
        sq: "mejs.albanian",
        ar: "mejs.arabic",
        be: "mejs.belarusian",
        bg: "mejs.bulgarian",
        ca: "mejs.catalan",
        zh: "mejs.chinese",
        "zh-cn": "mejs.chinese-simplified",
        "zh-tw": "mejs.chines-traditional",
        hr: "mejs.croatian",
        cs: "mejs.czech",
        da: "mejs.danish",
        nl: "mejs.dutch",
        en: "mejs.english",
        et: "mejs.estonian",
        fl: "mejs.filipino",
        fi: "mejs.finnish",
        fr: "mejs.french",
        gl: "mejs.galician",
        de: "mejs.german",
        el: "mejs.greek",
        ht: "mejs.haitian-creole",
        iw: "mejs.hebrew",
        hi: "mejs.hindi",
        hu: "mejs.hungarian",
        is: "mejs.icelandic",
        id: "mejs.indonesian",
        ga: "mejs.irish",
        it: "mejs.italian",
        ja: "mejs.japanese",
        ko: "mejs.korean",
        lv: "mejs.latvian",
        lt: "mejs.lithuanian",
        mk: "mejs.macedonian",
        ms: "mejs.malay",
        mt: "mejs.maltese",
        no: "mejs.norwegian",
        fa: "mejs.persian",
        pl: "mejs.polish",
        pt: "mejs.portuguese",
        ro: "mejs.romanian",
        ru: "mejs.russian",
        sr: "mejs.serbian",
        sk: "mejs.slovak",
        sl: "mejs.slovenian",
        es: "mejs.spanish",
        sw: "mejs.swahili",
        sv: "mejs.swedish",
        tl: "mejs.tagalog",
        th: "mejs.thai",
        tr: "mejs.turkish",
        uk: "mejs.ukrainian",
        vi: "mejs.vietnamese",
        cy: "mejs.welsh",
        yi: "mejs.yiddish"
      }
    }, r["default"].TrackFormatParser = {
      webvtt: {
        pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        parse: function parse(e) {
          for (var t = e.split(/\r?\n/), n = [], o = void 0, i = void 0, r = void 0, a = 0, s = t.length; a < s; a++) {
            if ((o = this.pattern.exec(t[a])) && a < t.length) {
              for (a - 1 >= 0 && "" !== t[a - 1] && (r = t[a - 1]), i = t[++a], a++; "" !== t[a] && a < t.length;) {
                i = i + "\n" + t[a], a++;
              }

              i = i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
                identifier: r,
                start: 0 === (0, d.convertSMPTEtoSeconds)(o[1]) ? .2 : (0, d.convertSMPTEtoSeconds)(o[1]),
                stop: (0, d.convertSMPTEtoSeconds)(o[3]),
                text: i,
                settings: o[5]
              });
            }

            r = "";
          }

          return n;
        }
      },
      dfxp: {
        parse: function parse(e) {
          var t = (e = $(e).filter("tt")).firstChild,
              n = t.querySelectorAll("p"),
              o = e.getElementById("" + t.attr("style")),
              i = [],
              r = void 0;

          if (o.length) {
            o.removeAttribute("id");
            var a = o.attributes;

            if (a.length) {
              r = {};

              for (var s = 0, l = a.length; s < l; s++) {
                r[a[s].name.split(":")[1]] = a[s].value;
              }
            }
          }

          for (var u = 0, c = n.length; u < c; u++) {
            var f = void 0,
                p = {
              start: null,
              stop: null,
              style: null,
              text: null
            };

            if (n.eq(u).attr("begin") && (p.start = (0, d.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))), !p.start && n.eq(u - 1).attr("end") && (p.start = (0, d.convertSMPTEtoSeconds)(n.eq(u - 1).attr("end"))), n.eq(u).attr("end") && (p.stop = (0, d.convertSMPTEtoSeconds)(n.eq(u).attr("end"))), !p.stop && n.eq(u + 1).attr("begin") && (p.stop = (0, d.convertSMPTEtoSeconds)(n.eq(u + 1).attr("begin"))), r) {
              f = "";

              for (var m in r) {
                f += m + ":" + r[m] + ";";
              }
            }

            f && (p.style = f), 0 === p.start && (p.start = .2), p.text = n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.push(p);
          }

          return i;
        }
      }
    };
  }, {
    16: 16,
    2: 2,
    26: 26,
    27: 27,
    30: 30,
    5: 5,
    7: 7
  }],
  14: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = e(16),
        a = o(r),
        s = o(e(5)),
        l = e(25),
        d = e(27),
        u = e(26);
    Object.assign(r.config, {
      muteText: null,
      unmuteText: null,
      allyVolumeControlText: null,
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical",
      startVolume: .8
    }), Object.assign(a["default"].prototype, {
      buildvolume: function buildvolume(e, t, n, o) {
        if (!l.IS_ANDROID && !l.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
          var a = this,
              c = a.isVideo ? a.options.videoVolume : a.options.audioVolume,
              f = (0, d.isString)(a.options.muteText) ? a.options.muteText : s["default"].t("mejs.mute"),
              p = (0, d.isString)(a.options.unmuteText) ? a.options.unmuteText : s["default"].t("mejs.unmute"),
              m = (0, d.isString)(a.options.allyVolumeControlText) ? a.options.allyVolumeControlText : s["default"].t("mejs.volume-help-text"),
              h = i["default"].createElement("div");

          if (h.className = a.options.classPrefix + "button " + a.options.classPrefix + "volume-button " + a.options.classPrefix + "mute", h.innerHTML = "horizontal" === c ? '<button type="button" aria-controls="' + a.id + '" title="' + f + '" aria-label="' + f + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + a.id + '" title="' + f + '" aria-label="' + f + '" tabindex="0"></button><a href="javascript:void(0);" class="' + a.options.classPrefix + 'volume-slider" aria-label="' + s["default"].t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + a.options.classPrefix + 'offscreen">' + m + '</span><div class="' + a.options.classPrefix + 'volume-total"><div class="' + a.options.classPrefix + 'volume-current"></div><div class="' + a.options.classPrefix + 'volume-handle"></div></div></a>', a.addControlElement(h, "volume"), a.options.keyActions.push({
            keys: [38],
            action: function action(e) {
              var t = e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider");
              (t || e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider").matches(":focus")) && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
              var n = Math.min(e.volume + .1, 1);
              e.setVolume(n), n > 0 && e.setMuted(!1);
            }
          }, {
            keys: [40],
            action: function action(e) {
              var t = e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider");
              t && (t.style.display = "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
              var n = Math.max(e.volume - .1, 0);
              e.setVolume(n), n <= .1 && e.setMuted(!0);
            }
          }, {
            keys: [77],
            action: function action(e) {
              e.getElement(e.container).querySelector("." + r.config.classPrefix + "volume-slider").style.display = "block", e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
            }
          }), "horizontal" === c) {
            var v = i["default"].createElement("a");
            v.className = a.options.classPrefix + "horizontal-volume-slider", v.href = "javascript:void(0);", v.setAttribute("aria-label", s["default"].t("mejs.volume-slider")), v.setAttribute("aria-valuemin", 0), v.setAttribute("aria-valuemax", 100), v.setAttribute("role", "slider"), v.innerHTML += '<span class="' + a.options.classPrefix + 'offscreen">' + m + '</span><div class="' + a.options.classPrefix + 'horizontal-volume-total"><div class="' + a.options.classPrefix + 'horizontal-volume-current"></div><div class="' + a.options.classPrefix + 'horizontal-volume-handle"></div></div>', h.parentNode.insertBefore(v, h.nextSibling);
          }

          var g = !1,
              y = !1,
              E = !1,
              b = function b() {
            var e = Math.floor(100 * o.volume);
            S.setAttribute("aria-valuenow", e), S.setAttribute("aria-valuetext", e + "%");
          },
              S = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-slider") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-slider"),
              x = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-total") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-total"),
              w = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-current") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-current"),
              P = "vertical" === c ? a.getElement(a.container).querySelector("." + a.options.classPrefix + "volume-handle") : a.getElement(a.container).querySelector("." + a.options.classPrefix + "horizontal-volume-handle"),
              T = function T(e) {
            if (null !== e && !isNaN(e) && void 0 !== e) {
              if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                (0, u.removeClass)(h, a.options.classPrefix + "mute"), (0, u.addClass)(h, a.options.classPrefix + "unmute");
                var t = h.firstElementChild;
                t.setAttribute("title", p), t.setAttribute("aria-label", p);
              } else {
                (0, u.removeClass)(h, a.options.classPrefix + "unmute"), (0, u.addClass)(h, a.options.classPrefix + "mute");
                var n = h.firstElementChild;
                n.setAttribute("title", f), n.setAttribute("aria-label", f);
              }

              var o = 100 * e + "%",
                  i = getComputedStyle(P);
              "vertical" === c ? (w.style.bottom = 0, w.style.height = o, P.style.bottom = o, P.style.marginBottom = -parseFloat(i.height) / 2 + "px") : (w.style.left = 0, w.style.width = o, P.style.left = o, P.style.marginLeft = -parseFloat(i.width) / 2 + "px");
            }
          },
              C = function C(e) {
            var t = (0, u.offset)(x),
                n = getComputedStyle(x);
            E = !0;
            var o = null;

            if ("vertical" === c) {
              var i = parseFloat(n.height);
              if (o = (i - (e.pageY - t.top)) / i, 0 === t.top || 0 === t.left) return;
            } else {
              var r = parseFloat(n.width);
              o = (e.pageX - t.left) / r;
            }

            o = Math.max(0, o), o = Math.min(o, 1), T(o), a.setMuted(0 === o), a.setVolume(o), e.preventDefault(), e.stopPropagation();
          },
              k = function k() {
            a.muted ? (T(0), (0, u.removeClass)(h, a.options.classPrefix + "mute"), (0, u.addClass)(h, a.options.classPrefix + "unmute")) : (T(o.volume), (0, u.removeClass)(h, a.options.classPrefix + "unmute"), (0, u.addClass)(h, a.options.classPrefix + "mute"));
          };

          e.getElement(e.container).addEventListener("keydown", function (e) {
            !!e.target.closest("." + a.options.classPrefix + "container") || "vertical" !== c || (S.style.display = "none");
          }), h.addEventListener("mouseenter", function (e) {
            e.target === h && (S.style.display = "block", y = !0, e.preventDefault(), e.stopPropagation());
          }), h.addEventListener("focusin", function () {
            S.style.display = "block", y = !0;
          }), h.addEventListener("focusout", function (e) {
            e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + a.options.classPrefix + "volume-slider")) || "vertical" !== c || (S.style.display = "none");
          }), h.addEventListener("mouseleave", function () {
            y = !1, g || "vertical" !== c || (S.style.display = "none");
          }), h.addEventListener("focusout", function () {
            y = !1;
          }), h.addEventListener("keydown", function (e) {
            if (a.options.keyActions.length) {
              var t = e.which || e.keyCode || 0,
                  n = o.volume;

              switch (t) {
                case 38:
                  n = Math.min(n + .1, 1);
                  break;

                case 40:
                  n = Math.max(0, n - .1);
                  break;

                default:
                  return !0;
              }

              g = !1, T(n), o.setVolume(n), e.preventDefault(), e.stopPropagation();
            }
          }), h.querySelector("button").addEventListener("click", function () {
            o.setMuted(!o.muted);
            var e = (0, d.createEvent)("volumechange", o);
            o.dispatchEvent(e);
          }), S.addEventListener("dragstart", function () {
            return !1;
          }), S.addEventListener("mouseover", function () {
            y = !0;
          }), S.addEventListener("focusin", function () {
            S.style.display = "block", y = !0;
          }), S.addEventListener("focusout", function () {
            y = !1, g || "vertical" !== c || (S.style.display = "none");
          }), S.addEventListener("mousedown", function (e) {
            C(e), a.globalBind("mousemove.vol", function (e) {
              var t = e.target;
              g && (t === S || t.closest("vertical" === c ? "." + a.options.classPrefix + "volume-slider" : "." + a.options.classPrefix + "horizontal-volume-slider")) && C(e);
            }), a.globalBind("mouseup.vol", function () {
              g = !1, y || "vertical" !== c || (S.style.display = "none");
            }), g = !0, e.preventDefault(), e.stopPropagation();
          }), o.addEventListener("volumechange", function (e) {
            g || k(), b();
          });

          var _ = !1;

          o.addEventListener("rendererready", function () {
            E || setTimeout(function () {
              _ = !0, (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), a.setControlsSize();
            }, 250);
          }), o.addEventListener("loadedmetadata", function () {
            setTimeout(function () {
              E || _ || ((0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), a.setControlsSize()), _ = !1;
            }, 250);
          }), (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0, k()), a.getElement(a.container).addEventListener("controlsresize", function () {
            k();
          });
        }
      }
    });
  }, {
    16: 16,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    5: 5
  }],
  15: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    n.EN = {
      "mejs.plural-form": 1,
      "mejs.download-file": "Download File",
      "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
      "mejs.fullscreen": "Fullscreen",
      "mejs.play": "Play",
      "mejs.pause": "Pause",
      "mejs.time-slider": "Time Slider",
      "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
      "mejs.live-broadcast": "Live Broadcast",
      "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
      "mejs.unmute": "Unmute",
      "mejs.mute": "Mute",
      "mejs.volume-slider": "Volume Slider",
      "mejs.video-player": "Video Player",
      "mejs.audio-player": "Audio Player",
      "mejs.captions-subtitles": "Captions/Subtitles",
      "mejs.captions-chapters": "Chapters",
      "mejs.none": "None",
      "mejs.afrikaans": "Afrikaans",
      "mejs.albanian": "Albanian",
      "mejs.arabic": "Arabic",
      "mejs.belarusian": "Belarusian",
      "mejs.bulgarian": "Bulgarian",
      "mejs.catalan": "Catalan",
      "mejs.chinese": "Chinese",
      "mejs.chinese-simplified": "Chinese (Simplified)",
      "mejs.chinese-traditional": "Chinese (Traditional)",
      "mejs.croatian": "Croatian",
      "mejs.czech": "Czech",
      "mejs.danish": "Danish",
      "mejs.dutch": "Dutch",
      "mejs.english": "English",
      "mejs.estonian": "Estonian",
      "mejs.filipino": "Filipino",
      "mejs.finnish": "Finnish",
      "mejs.french": "French",
      "mejs.galician": "Galician",
      "mejs.german": "German",
      "mejs.greek": "Greek",
      "mejs.haitian-creole": "Haitian Creole",
      "mejs.hebrew": "Hebrew",
      "mejs.hindi": "Hindi",
      "mejs.hungarian": "Hungarian",
      "mejs.icelandic": "Icelandic",
      "mejs.indonesian": "Indonesian",
      "mejs.irish": "Irish",
      "mejs.italian": "Italian",
      "mejs.japanese": "Japanese",
      "mejs.korean": "Korean",
      "mejs.latvian": "Latvian",
      "mejs.lithuanian": "Lithuanian",
      "mejs.macedonian": "Macedonian",
      "mejs.malay": "Malay",
      "mejs.maltese": "Maltese",
      "mejs.norwegian": "Norwegian",
      "mejs.persian": "Persian",
      "mejs.polish": "Polish",
      "mejs.portuguese": "Portuguese",
      "mejs.romanian": "Romanian",
      "mejs.russian": "Russian",
      "mejs.serbian": "Serbian",
      "mejs.slovak": "Slovak",
      "mejs.slovenian": "Slovenian",
      "mejs.spanish": "Spanish",
      "mejs.swahili": "Swahili",
      "mejs.swedish": "Swedish",
      "mejs.tagalog": "Tagalog",
      "mejs.thai": "Thai",
      "mejs.turkish": "Turkish",
      "mejs.ukrainian": "Ukrainian",
      "mejs.vietnamese": "Vietnamese",
      "mejs.welsh": "Welsh",
      "mejs.yiddish": "Yiddish"
    };
  }, {}],
  16: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.config = void 0;

    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        s = o(e(3)),
        l = o(e(2)),
        d = o(e(7)),
        u = o(e(6)),
        c = o(e(17)),
        f = o(e(5)),
        p = e(25),
        m = e(27),
        h = e(30),
        v = e(28),
        g = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t["default"] = e, t;
    }(e(26));

    d["default"].mepIndex = 0, d["default"].players = {};
    var y = n.config = {
      poster: "",
      showPosterWhenEnded: !1,
      showPosterWhenPaused: !1,
      defaultVideoWidth: 480,
      defaultVideoHeight: 270,
      videoWidth: -1,
      videoHeight: -1,
      defaultAudioWidth: 400,
      defaultAudioHeight: 40,
      defaultSeekBackwardInterval: function defaultSeekBackwardInterval(e) {
        return .05 * e.getDuration();
      },
      defaultSeekForwardInterval: function defaultSeekForwardInterval(e) {
        return .05 * e.getDuration();
      },
      setDimensions: !0,
      audioWidth: -1,
      audioHeight: -1,
      loop: !1,
      autoRewind: !0,
      enableAutosize: !0,
      timeFormat: "",
      alwaysShowHours: !1,
      showTimecodeFrameCount: !1,
      framesPerSecond: 25,
      alwaysShowControls: !1,
      hideVideoControlsOnLoad: !1,
      hideVideoControlsOnPause: !1,
      clickToPlayPause: !0,
      controlsTimeoutDefault: 1500,
      controlsTimeoutMouseEnter: 2500,
      controlsTimeoutMouseLeave: 1e3,
      iPadUseNativeControls: !1,
      iPhoneUseNativeControls: !1,
      AndroidUseNativeControls: !1,
      features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
      useDefaultControls: !1,
      isVideo: !0,
      stretching: "auto",
      classPrefix: "mejs__",
      enableKeyboard: !0,
      pauseOtherPlayers: !0,
      secondsDecimalLength: 0,
      customError: null,
      keyActions: [{
        keys: [32, 179],
        action: function action(e) {
          p.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause());
        }
      }]
    };
    d["default"].MepDefaults = y;

    var E = function () {
      function e(t, n) {
        i(this, e);
        var o = this,
            r = "string" == typeof t ? l["default"].getElementById(t) : t;
        if (!(o instanceof e)) return new e(r, n);

        if (o.node = o.media = r, o.node) {
          if (o.media.player) return o.media.player;

          if (o.hasFocus = !1, o.controlsAreVisible = !0, o.controlsEnabled = !0, o.controlsTimer = null, o.currentMediaTime = 0, o.proxy = null, void 0 === n) {
            var a = o.node.getAttribute("data-mejsoptions");
            n = a ? JSON.parse(a) : {};
          }

          return o.options = Object.assign({}, y, n), o.options.loop && !o.media.getAttribute("loop") ? (o.media.loop = !0, o.node.loop = !0) : o.media.loop && (o.options.loop = !0), o.options.timeFormat || (o.options.timeFormat = "mm:ss", o.options.alwaysShowHours && (o.options.timeFormat = "hh:mm:ss"), o.options.showTimecodeFrameCount && (o.options.timeFormat += ":ff")), (0, h.calculateTimeFormat)(0, o.options, o.options.framesPerSecond || 25), o.id = "mep_" + d["default"].mepIndex++, d["default"].players[o.id] = o, o.init(), o;
        }
      }

      return a(e, [{
        key: "getElement",
        value: function value(e) {
          return e;
        }
      }, {
        key: "init",
        value: function value() {
          var e = this,
              t = Object.assign({}, e.options, {
            success: function success(t, n) {
              e._meReady(t, n);
            },
            error: function error(t) {
              e._handleError(t);
            }
          }),
              n = e.node.tagName.toLowerCase();
          if (e.isDynamic = "audio" !== n && "video" !== n && "iframe" !== n, e.isVideo = e.isDynamic ? e.options.isVideo : "audio" !== n && e.options.isVideo, e.mediaFiles = null, e.trackFiles = null, p.IS_IPAD && e.options.iPadUseNativeControls || p.IS_IPHONE && e.options.iPhoneUseNativeControls) e.node.setAttribute("controls", !0), p.IS_IPAD && e.node.getAttribute("autoplay") && e.play();else if (!e.isVideo && (e.isVideo || !e.options.features.length && !e.options.useDefaultControls) || p.IS_ANDROID && e.options.AndroidUseNativeControls) e.isVideo || e.options.features.length || e.options.useDefaultControls || (e.node.style.display = "none");else {
            e.node.removeAttribute("controls");
            var o = e.isVideo ? f["default"].t("mejs.video-player") : f["default"].t("mejs.audio-player"),
                i = l["default"].createElement("span");

            if (i.className = e.options.classPrefix + "offscreen", i.innerText = o, e.media.parentNode.insertBefore(i, e.media), e.container = l["default"].createElement("div"), e.getElement(e.container).id = e.id, e.getElement(e.container).className = e.options.classPrefix + "container " + e.options.classPrefix + "container-keyboard-inactive " + e.media.className, e.getElement(e.container).tabIndex = 0, e.getElement(e.container).setAttribute("role", "application"), e.getElement(e.container).setAttribute("aria-label", o), e.getElement(e.container).innerHTML = '<div class="' + e.options.classPrefix + 'inner"><div class="' + e.options.classPrefix + 'mediaelement"></div><div class="' + e.options.classPrefix + 'layers"></div><div class="' + e.options.classPrefix + 'controls"></div></div>', e.getElement(e.container).addEventListener("focus", function (t) {
              if (!e.controlsAreVisible && !e.hasFocus && e.controlsEnabled) {
                e.showControls(!0);
                var n = (0, m.isNodeAfter)(t.relatedTarget, e.getElement(e.container)) ? "." + e.options.classPrefix + "controls ." + e.options.classPrefix + "button:last-child > button" : "." + e.options.classPrefix + "playpause-button > button";
                e.getElement(e.container).querySelector(n).focus();
              }
            }), e.node.parentNode.insertBefore(e.getElement(e.container), e.node), e.options.features.length || e.options.useDefaultControls || (e.getElement(e.container).style.background = "transparent", e.getElement(e.container).querySelector("." + e.options.classPrefix + "controls").style.display = "none"), e.isVideo && "fill" === e.options.stretching && !g.hasClass(e.getElement(e.container).parentNode, e.options.classPrefix + "fill-container")) {
              e.outerContainer = e.media.parentNode;
              var r = l["default"].createElement("div");
              r.className = e.options.classPrefix + "fill-container", e.getElement(e.container).parentNode.insertBefore(r, e.getElement(e.container)), r.appendChild(e.getElement(e.container));
            }

            if (p.IS_ANDROID && g.addClass(e.getElement(e.container), e.options.classPrefix + "android"), p.IS_IOS && g.addClass(e.getElement(e.container), e.options.classPrefix + "ios"), p.IS_IPAD && g.addClass(e.getElement(e.container), e.options.classPrefix + "ipad"), p.IS_IPHONE && g.addClass(e.getElement(e.container), e.options.classPrefix + "iphone"), g.addClass(e.getElement(e.container), e.isVideo ? e.options.classPrefix + "video" : e.options.classPrefix + "audio"), p.IS_SAFARI && !p.IS_IOS) {
              g.addClass(e.getElement(e.container), e.options.classPrefix + "hide-cues");

              for (var a = e.node.cloneNode(), s = e.node.children, c = [], h = [], y = 0, E = s.length; y < E; y++) {
                var b = s[y];
                !function () {
                  switch (b.tagName.toLowerCase()) {
                    case "source":
                      var e = {};
                      Array.prototype.slice.call(b.attributes).forEach(function (t) {
                        e[t.name] = t.value;
                      }), e.type = (0, v.formatType)(e.src, e.type), c.push(e);
                      break;

                    case "track":
                      b.mode = "hidden", h.push(b);
                      break;

                    default:
                      a.appendChild(b);
                  }
                }();
              }

              e.node.remove(), e.node = e.media = a, c.length && (e.mediaFiles = c), h.length && (e.trackFiles = h);
            }

            e.getElement(e.container).querySelector("." + e.options.classPrefix + "mediaelement").appendChild(e.node), e.media.player = e, e.controls = e.getElement(e.container).querySelector("." + e.options.classPrefix + "controls"), e.layers = e.getElement(e.container).querySelector("." + e.options.classPrefix + "layers");
            var S = e.isVideo ? "video" : "audio",
                x = S.substring(0, 1).toUpperCase() + S.substring(1);
            e.options[S + "Width"] > 0 || e.options[S + "Width"].toString().indexOf("%") > -1 ? e.width = e.options[S + "Width"] : "" !== e.node.style.width && null !== e.node.style.width ? e.width = e.node.style.width : e.node.getAttribute("width") ? e.width = e.node.getAttribute("width") : e.width = e.options["default" + x + "Width"], e.options[S + "Height"] > 0 || e.options[S + "Height"].toString().indexOf("%") > -1 ? e.height = e.options[S + "Height"] : "" !== e.node.style.height && null !== e.node.style.height ? e.height = e.node.style.height : e.node.getAttribute("height") ? e.height = e.node.getAttribute("height") : e.height = e.options["default" + x + "Height"], e.initialAspectRatio = e.height >= e.width ? e.width / e.height : e.height / e.width, e.setPlayerSize(e.width, e.height), t.pluginWidth = e.width, t.pluginHeight = e.height;
          }

          if (d["default"].MepDefaults = t, new u["default"](e.media, t, e.mediaFiles), void 0 !== e.getElement(e.container) && e.options.features.length && e.controlsAreVisible && !e.options.hideVideoControlsOnLoad) {
            var w = (0, m.createEvent)("controlsshown", e.getElement(e.container));
            e.getElement(e.container).dispatchEvent(w);
          }
        }
      }, {
        key: "showControls",
        value: function value(e) {
          var t = this;

          if (e = void 0 === e || e, !t.controlsAreVisible && t.isVideo) {
            if (e) !function () {
              g.fadeIn(t.getElement(t.controls), 200, function () {
                g.removeClass(t.getElement(t.controls), t.options.classPrefix + "offscreen");
                var e = (0, m.createEvent)("controlsshown", t.getElement(t.container));
                t.getElement(t.container).dispatchEvent(e);
              });

              for (var e = t.getElement(t.container).querySelectorAll("." + t.options.classPrefix + "control"), n = 0, o = e.length; n < o; n++) {
                !function (n, o) {
                  g.fadeIn(e[n], 200, function () {
                    g.removeClass(e[n], t.options.classPrefix + "offscreen");
                  });
                }(n);
              }
            }();else {
              g.removeClass(t.getElement(t.controls), t.options.classPrefix + "offscreen"), t.getElement(t.controls).style.display = "", t.getElement(t.controls).style.opacity = 1;

              for (var n = t.getElement(t.container).querySelectorAll("." + t.options.classPrefix + "control"), o = 0, i = n.length; o < i; o++) {
                g.removeClass(n[o], t.options.classPrefix + "offscreen"), n[o].style.display = "";
              }

              var r = (0, m.createEvent)("controlsshown", t.getElement(t.container));
              t.getElement(t.container).dispatchEvent(r);
            }
            t.controlsAreVisible = !0, t.setControlsSize();
          }
        }
      }, {
        key: "hideControls",
        value: function value(e, t) {
          var n = this;

          if (e = void 0 === e || e, !0 === t || !(!n.controlsAreVisible || n.options.alwaysShowControls || n.paused && 4 === n.readyState && (!n.options.hideVideoControlsOnLoad && n.currentTime <= 0 || !n.options.hideVideoControlsOnPause && n.currentTime > 0) || n.isVideo && !n.options.hideVideoControlsOnLoad && !n.readyState || n.ended)) {
            if (e) !function () {
              g.fadeOut(n.getElement(n.controls), 200, function () {
                g.addClass(n.getElement(n.controls), n.options.classPrefix + "offscreen"), n.getElement(n.controls).style.display = "";
                var e = (0, m.createEvent)("controlshidden", n.getElement(n.container));
                n.getElement(n.container).dispatchEvent(e);
              });

              for (var e = n.getElement(n.container).querySelectorAll("." + n.options.classPrefix + "control"), t = 0, o = e.length; t < o; t++) {
                !function (t, o) {
                  g.fadeOut(e[t], 200, function () {
                    g.addClass(e[t], n.options.classPrefix + "offscreen"), e[t].style.display = "";
                  });
                }(t);
              }
            }();else {
              g.addClass(n.getElement(n.controls), n.options.classPrefix + "offscreen"), n.getElement(n.controls).style.display = "", n.getElement(n.controls).style.opacity = 0;

              for (var o = n.getElement(n.container).querySelectorAll("." + n.options.classPrefix + "control"), i = 0, r = o.length; i < r; i++) {
                g.addClass(o[i], n.options.classPrefix + "offscreen"), o[i].style.display = "";
              }

              var a = (0, m.createEvent)("controlshidden", n.getElement(n.container));
              n.getElement(n.container).dispatchEvent(a);
            }
            n.controlsAreVisible = !1;
          }
        }
      }, {
        key: "startControlsTimer",
        value: function value(e) {
          var t = this;
          e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function () {
            t.hideControls(), t.killControlsTimer("hide");
          }, e);
        }
      }, {
        key: "killControlsTimer",
        value: function value() {
          var e = this;
          null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null);
        }
      }, {
        key: "disableControls",
        value: function value() {
          var e = this;
          e.killControlsTimer(), e.controlsEnabled = !1, e.hideControls(!1, !0);
        }
      }, {
        key: "enableControls",
        value: function value() {
          var e = this;
          e.controlsEnabled = !0, e.showControls(!1);
        }
      }, {
        key: "_setDefaultPlayer",
        value: function value() {
          var e = this;
          e.proxy && e.proxy.pause(), e.proxy = new c["default"](e), e.media.addEventListener("loadedmetadata", function () {
            e.getCurrentTime() > 0 && e.currentMediaTime > 0 && (e.setCurrentTime(e.currentMediaTime), p.IS_IOS || p.IS_ANDROID || e.play());
          });
        }
      }, {
        key: "_meReady",
        value: function value(e, t) {
          var n = this,
              o = t.getAttribute("autoplay"),
              i = !(void 0 === o || null === o || "false" === o),
              r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);

          if (n.getElement(n.controls) && n.enableControls(), n.getElement(n.container) && n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play") && (n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
            if (n.created = !0, n.media = e, n.domNode = t, !(p.IS_ANDROID && n.options.AndroidUseNativeControls || p.IS_IPAD && n.options.iPadUseNativeControls || p.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
              if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls) return i && r && n.play(), void (n.options.success && ("string" == typeof n.options.success ? s["default"][n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));

              if (n.featurePosition = {}, n._setDefaultPlayer(), n.buildposter(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildkeyboard(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.buildoverlays(n, n.getElement(n.controls), n.getElement(n.layers), n.media), n.options.useDefaultControls) {
                var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
                n.options.features = a.concat(n.options.features.filter(function (e) {
                  return -1 === a.indexOf(e);
                }));
              }

              n.buildfeatures(n, n.getElement(n.controls), n.getElement(n.layers), n.media);
              var u = (0, m.createEvent)("controlsready", n.getElement(n.container));
              n.getElement(n.container).dispatchEvent(u), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function () {
                if (n.options.clickToPlayPause) {
                  var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-button"),
                      t = e.getAttribute("aria-pressed");
                  n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t), n.getElement(n.container).focus();
                }
              }, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !p.IS_ANDROID && !p.IS_IOS || n.options.alwaysShowControls ? (n.getElement(n.container).addEventListener("mouseenter", function () {
                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)));
              }), n.getElement(n.container).addEventListener("mousemove", function () {
                n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter));
              }), n.getElement(n.container).addEventListener("mouseleave", function () {
                n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave));
              })) : n.node.addEventListener("touchstart", function () {
                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1);
              }, !!p.SUPPORT_PASSIVE_EVENT && {
                passive: !0
              }), n.options.hideVideoControlsOnLoad && n.hideControls(!1), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function (e) {
                var t = void 0 !== e ? e.detail.target || e.target : n.media;
                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && !n.domNode.style.height && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight), n.setControlsSize(), n.media.setSize(t.videoWidth, t.videoHeight));
              })), n.media.addEventListener("play", function () {
                n.hasFocus = !0;

                for (var e in d["default"].players) {
                  if (d["default"].players.hasOwnProperty(e)) {
                    var t = d["default"].players[e];
                    t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(), t.hasFocus = !1);
                  }
                }

                p.IS_ANDROID || p.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls();
              }), n.media.addEventListener("ended", function () {
                if (n.options.autoRewind) try {
                  n.setCurrentTime(0), setTimeout(function () {
                    var e = n.getElement(n.container).querySelector("." + n.options.classPrefix + "overlay-loading");
                    e && e.parentNode && (e.parentNode.style.display = "none");
                  }, 20);
                } catch (e) {}
                "function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls();
              }), n.media.addEventListener("loadedmetadata", function () {
                (0, h.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize());
              });
              var c = null;
              n.media.addEventListener("timeupdate", function () {
                isNaN(n.getDuration()) || c === n.getDuration() || (c = n.getDuration(), (0, h.calculateTimeFormat)(c, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize());
              }), n.getElement(n.container).addEventListener("click", function (e) {
                g.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive");
              }), n.getElement(n.container).addEventListener("focusin", function (e) {
                g.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), !n.isVideo || p.IS_ANDROID || p.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter));
              }), n.getElement(n.container).addEventListener("focusout", function (e) {
                setTimeout(function () {
                  e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave));
                }, 0);
              }), setTimeout(function () {
                n.setPlayerSize(n.width, n.height), n.setControlsSize();
              }, 0), n.globalResizeCallback = function () {
                n.isFullScreen || p.HAS_TRUE_NATIVE_FULLSCREEN && l["default"].webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize();
              }, n.globalBind("resize", n.globalResizeCallback);
            }

            i && r && n.play(), n.options.success && ("string" == typeof n.options.success ? s["default"][n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n));
          }
        }
      }, {
        key: "_handleError",
        value: function value(e, t, n) {
          var o = this,
              i = o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-play");
          i && (i.style.display = "none"), o.options.error && o.options.error(e, t, n), o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay") && o.getElement(o.container).querySelector("." + o.options.classPrefix + "cannotplay").remove();
          var r = l["default"].createElement("div");
          r.className = o.options.classPrefix + "cannotplay", r.style.width = "100%", r.style.height = "100%";
          var a = "function" == typeof o.options.customError ? o.options.customError(o.media, o.media.originalNode) : o.options.customError,
              s = "";

          if (!a) {
            var u = o.media.originalNode.getAttribute("poster");
            if (u && (s = '<img src="' + u + '" alt="' + d["default"].i18n.t("mejs.download-file") + '">'), e.message && (a = "<p>" + e.message + "</p>"), e.urls) for (var c = 0, f = e.urls.length; c < f; c++) {
              var p = e.urls[c];
              a += '<a href="' + p.src + '" data-type="' + p.type + '"><span>' + d["default"].i18n.t("mejs.download-file") + ": " + p.src + "</span></a>";
            }
          }

          a && o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error") && (r.innerHTML = a, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = "" + s + r.outerHTML, o.getElement(o.layers).querySelector("." + o.options.classPrefix + "overlay-error").parentNode.style.display = "block"), o.controlsEnabled && o.disableControls();
        }
      }, {
        key: "setPlayerSize",
        value: function value(e, t) {
          var n = this;
          if (!n.options.setDimensions) return !1;

          switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
            case "fill":
              n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
              break;

            case "responsive":
              n.setResponsiveMode();
              break;

            case "none":
              n.setDimensions(n.width, n.height);
              break;

            default:
              !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height);
          }
        }
      }, {
        key: "hasFluidMode",
        value: function value() {
          var e = this;
          return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth;
        }
      }, {
        key: "setResponsiveMode",
        value: function value() {
          var e = this,
              t = function () {
            for (var t = void 0, n = e.getElement(e.container); n;) {
              try {
                if (p.IS_FIREFOX && "html" === n.tagName.toLowerCase() && s["default"].self !== s["default"].top && null !== s["default"].frameElement) return s["default"].frameElement;
                t = n.parentElement;
              } catch (e) {
                t = n.parentElement;
              }

              if (t && g.visible(t)) return t;
              n = t;
            }

            return null;
          }(),
              n = t ? getComputedStyle(t, null) : getComputedStyle(l["default"].body, null),
              o = e.isVideo ? e.node.videoWidth && e.node.videoWidth > 0 ? e.node.videoWidth : e.node.getAttribute("width") ? e.node.getAttribute("width") : e.options.defaultVideoWidth : e.options.defaultAudioWidth,
              i = e.isVideo ? e.node.videoHeight && e.node.videoHeight > 0 ? e.node.videoHeight : e.node.getAttribute("height") ? e.node.getAttribute("height") : e.options.defaultVideoHeight : e.options.defaultAudioHeight,
              r = function () {
            var t = 1;
            return e.isVideo ? (t = e.node.videoWidth && e.node.videoWidth > 0 && e.node.videoHeight && e.node.videoHeight > 0 ? e.height >= e.width ? e.node.videoWidth / e.node.videoHeight : e.node.videoHeight / e.node.videoWidth : e.initialAspectRatio, (isNaN(t) || t < .01 || t > 100) && (t = 1), t) : t;
          }(),
              a = parseFloat(n.height),
              d = void 0,
              u = parseFloat(n.width);

          if (d = e.isVideo ? "100%" === e.height ? parseFloat(u * i / o, 10) : e.height >= e.width ? parseFloat(u / r, 10) : parseFloat(u * r, 10) : i, isNaN(d) && (d = a), e.getElement(e.container).parentNode.length > 0 && "body" === e.getElement(e.container).parentNode.tagName.toLowerCase() && (u = s["default"].innerWidth || l["default"].documentElement.clientWidth || l["default"].body.clientWidth, d = s["default"].innerHeight || l["default"].documentElement.clientHeight || l["default"].body.clientHeight), d && u) {
            e.getElement(e.container).style.width = u + "px", e.getElement(e.container).style.height = d + "px", e.node.style.width = "100%", e.node.style.height = "100%", e.isVideo && e.media.setSize && e.media.setSize(u, d);

            for (var c = e.getElement(e.layers).children, f = 0, m = c.length; f < m; f++) {
              c[f].style.width = "100%", c[f].style.height = "100%";
            }
          }
        }
      }, {
        key: "setFillMode",
        value: function value() {
          var e = this,
              t = s["default"].self !== s["default"].top && null !== s["default"].frameElement,
              n = function () {
            for (var t = void 0, n = e.getElement(e.container); n;) {
              try {
                if (p.IS_FIREFOX && "html" === n.tagName.toLowerCase() && s["default"].self !== s["default"].top && null !== s["default"].frameElement) return s["default"].frameElement;
                t = n.parentElement;
              } catch (e) {
                t = n.parentElement;
              }

              if (t && g.visible(t)) return t;
              n = t;
            }

            return null;
          }(),
              o = n ? getComputedStyle(n, null) : getComputedStyle(l["default"].body, null);

          "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), t || parseFloat(o.width) || (n.style.width = e.media.offsetWidth + "px"), t || parseFloat(o.height) || (n.style.height = e.media.offsetHeight + "px"), o = getComputedStyle(n);
          var i = parseFloat(o.width),
              r = parseFloat(o.height);
          e.setDimensions("100%", "100%");
          var a = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
          a && (a.style.display = "");

          for (var d = e.getElement(e.container).querySelectorAll("object, embed, iframe, video"), u = e.height, c = e.width, f = i, m = u * i / c, h = c * r / u, v = r, y = h > i == !1, E = y ? Math.floor(f) : Math.floor(h), b = y ? Math.floor(m) : Math.floor(v), S = y ? i + "px" : E + "px", x = y ? b + "px" : r + "px", w = 0, P = d.length; w < P; w++) {
            d[w].style.height = x, d[w].style.width = S, e.media.setSize && e.media.setSize(S, x), d[w].style.marginLeft = Math.floor((i - E) / 2) + "px", d[w].style.marginTop = 0;
          }
        }
      }, {
        key: "setDimensions",
        value: function value(e, t) {
          var n = this;
          e = (0, m.isString)(e) && e.indexOf("%") > -1 ? e : parseFloat(e) + "px", t = (0, m.isString)(t) && t.indexOf("%") > -1 ? t : parseFloat(t) + "px", n.getElement(n.container).style.width = e, n.getElement(n.container).style.height = t;

          for (var o = n.getElement(n.layers).children, i = 0, r = o.length; i < r; i++) {
            o[i].style.width = e, o[i].style.height = t;
          }
        }
      }, {
        key: "setControlsSize",
        value: function value() {
          var e = this;
          if (g.visible(e.getElement(e.container))) if (e.rail && g.visible(e.rail)) {
            for (var t = e.total ? getComputedStyle(e.total, null) : null, n = t ? parseFloat(t.marginLeft) + parseFloat(t.marginRight) : 0, o = getComputedStyle(e.rail), i = parseFloat(o.marginLeft) + parseFloat(o.marginRight), r = 0, a = g.siblings(e.rail, function (t) {
              return t !== e.rail;
            }), s = a.length, l = 0; l < s; l++) {
              r += a[l].offsetWidth;
            }

            r += n + (0 === n ? 2 * i : i) + 1, e.getElement(e.container).style.minWidth = r + "px";
            var d = (0, m.createEvent)("controlsresize", e.getElement(e.container));
            e.getElement(e.container).dispatchEvent(d);
          } else {
            for (var u = e.getElement(e.controls).children, c = 0, f = 0, p = u.length; f < p; f++) {
              c += u[f].offsetWidth;
            }

            e.getElement(e.container).style.minWidth = c + "px";
          }
        }
      }, {
        key: "addControlElement",
        value: function value(e, t) {
          var n = this;

          if (void 0 !== n.featurePosition[t]) {
            var o = n.getElement(n.controls).children[n.featurePosition[t] - 1];
            o.parentNode.insertBefore(e, o.nextSibling);
          } else {
            n.getElement(n.controls).appendChild(e);

            for (var i = n.getElement(n.controls).children, r = 0, a = i.length; r < a; r++) {
              if (e === i[r]) {
                n.featurePosition[t] = r;
                break;
              }
            }
          }
        }
      }, {
        key: "createIframeLayer",
        value: function value() {
          var e = this;

          if (e.isVideo && null !== e.media.rendererName && e.media.rendererName.indexOf("iframe") > -1 && !l["default"].getElementById(e.media.id + "-iframe-overlay")) {
            var t = l["default"].createElement("div"),
                n = l["default"].getElementById(e.media.id + "_" + e.media.rendererName);
            t.id = e.media.id + "-iframe-overlay", t.className = e.options.classPrefix + "iframe-overlay", t.addEventListener("click", function (t) {
              e.options.clickToPlayPause && (e.paused ? e.play() : e.pause(), t.preventDefault(), t.stopPropagation());
            }), n.parentNode.insertBefore(t, n);
          }
        }
      }, {
        key: "resetSize",
        value: function value() {
          var e = this;
          setTimeout(function () {
            e.setPlayerSize(e.width, e.height), e.setControlsSize();
          }, 50);
        }
      }, {
        key: "setPoster",
        value: function value(e) {
          var t = this;

          if (t.getElement(t.container)) {
            var n = t.getElement(t.container).querySelector("." + t.options.classPrefix + "poster");
            n || ((n = l["default"].createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.getElement(t.layers).appendChild(n));
            var o = n.querySelector("img");
            !o && e && ((o = l["default"].createElement("img")).className = t.options.classPrefix + "poster-img", o.width = "100%", o.height = "100%", n.style.display = "", n.appendChild(o)), e ? (o.setAttribute("src", e), n.style.backgroundImage = 'url("' + e + '")', n.style.display = "") : o ? (n.style.backgroundImage = "none", n.style.display = "none", o.remove()) : n.style.display = "none";
          } else (p.IS_IPAD && t.options.iPadUseNativeControls || p.IS_IPHONE && t.options.iPhoneUseNativeControls || p.IS_ANDROID && t.options.AndroidUseNativeControls) && (t.media.originalNode.poster = e);
        }
      }, {
        key: "changeSkin",
        value: function value(e) {
          var t = this;
          t.getElement(t.container).className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize();
        }
      }, {
        key: "globalBind",
        value: function value(e, t) {
          var n = this,
              o = n.node ? n.node.ownerDocument : l["default"];
          if ((e = (0, m.splitEvents)(e, n.id)).d) for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++) {
            i[r].split(".").reduce(function (e, n) {
              return o.addEventListener(n, t, !1), n;
            }, "");
          }
          if (e.w) for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++) {
            d[u].split(".").reduce(function (e, n) {
              return s["default"].addEventListener(n, t, !1), n;
            }, "");
          }
        }
      }, {
        key: "globalUnbind",
        value: function value(e, t) {
          var n = this,
              o = n.node ? n.node.ownerDocument : l["default"];
          if ((e = (0, m.splitEvents)(e, n.id)).d) for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++) {
            i[r].split(".").reduce(function (e, n) {
              return o.removeEventListener(n, t, !1), n;
            }, "");
          }
          if (e.w) for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++) {
            d[u].split(".").reduce(function (e, n) {
              return s["default"].removeEventListener(n, t, !1), n;
            }, "");
          }
        }
      }, {
        key: "buildfeatures",
        value: function value(e, t, n, o) {
          for (var i = this, r = 0, a = i.options.features.length; r < a; r++) {
            var s = i.options.features[r];
            if (i["build" + s]) try {
              i["build" + s](e, t, n, o);
            } catch (e) {
              console.error("error building " + s, e);
            }
          }
        }
      }, {
        key: "buildposter",
        value: function value(e, t, n, o) {
          var i = this,
              r = l["default"].createElement("div");
          r.className = i.options.classPrefix + "poster " + i.options.classPrefix + "layer", n.appendChild(r);
          var a = o.originalNode.getAttribute("poster");
          "" !== e.options.poster && (a && p.IS_IOS && o.originalNode.removeAttribute("poster"), a = e.options.poster), a ? i.setPoster(a) : null !== i.media.renderer && "function" == typeof i.media.renderer.getPosterUrl ? i.setPoster(i.media.renderer.getPosterUrl()) : r.style.display = "none", o.addEventListener("play", function () {
            r.style.display = "none";
          }), o.addEventListener("playing", function () {
            r.style.display = "none";
          }), e.options.showPosterWhenEnded && e.options.autoRewind && o.addEventListener("ended", function () {
            r.style.display = "";
          }), o.addEventListener("error", function () {
            r.style.display = "none";
          }), e.options.showPosterWhenPaused && o.addEventListener("pause", function () {
            e.ended || (r.style.display = "");
          });
        }
      }, {
        key: "buildoverlays",
        value: function value(e, t, n, o) {
          if (e.isVideo) {
            var i = this,
                r = l["default"].createElement("div"),
                a = l["default"].createElement("div"),
                s = l["default"].createElement("div");
            r.style.display = "none", r.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", r.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-loading"><span class="' + i.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(r), a.style.display = "none", a.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", a.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-error"></div>', n.appendChild(a), s.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer " + i.options.classPrefix + "overlay-play", s.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + f["default"].t("mejs.play") + '" aria-pressed="false"></div>', s.addEventListener("click", function () {
              if (i.options.clickToPlayPause) {
                var e = i.getElement(i.container).querySelector("." + i.options.classPrefix + "overlay-button"),
                    t = e.getAttribute("aria-pressed");
                i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !!t), i.getElement(i.container).focus();
              }
            }), s.addEventListener("keydown", function (e) {
              var t = e.keyCode || e.which || 0;

              if (13 === t || p.IS_FIREFOX && 32 === t) {
                var n = (0, m.createEvent)("click", s);
                return s.dispatchEvent(n), !1;
              }
            }), n.appendChild(s), null !== i.media.rendererName && (/(youtube|facebook)/i.test(i.media.rendererName) && !(i.media.originalNode.getAttribute("poster") || e.options.poster || "function" == typeof i.media.renderer.getPosterUrl && i.media.renderer.getPosterUrl()) || p.IS_STOCK_ANDROID || i.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
            var d = !1;
            o.addEventListener("play", function () {
              s.style.display = "none", r.style.display = "none", a.style.display = "none", d = !1;
            }), o.addEventListener("playing", function () {
              s.style.display = "none", r.style.display = "none", a.style.display = "none", d = !1;
            }), o.addEventListener("seeking", function () {
              s.style.display = "none", r.style.display = "", d = !1;
            }), o.addEventListener("seeked", function () {
              s.style.display = i.paused && !p.IS_STOCK_ANDROID ? "" : "none", r.style.display = "none", d = !1;
            }), o.addEventListener("pause", function () {
              r.style.display = "none", p.IS_STOCK_ANDROID || d || (s.style.display = ""), d = !1;
            }), o.addEventListener("waiting", function () {
              r.style.display = "", d = !1;
            }), o.addEventListener("loadeddata", function () {
              r.style.display = "", p.IS_ANDROID && (o.canplayTimeout = setTimeout(function () {
                if (l["default"].createEvent) {
                  var e = l["default"].createEvent("HTMLEvents");
                  return e.initEvent("canplay", !0, !0), o.dispatchEvent(e);
                }
              }, 300)), d = !1;
            }), o.addEventListener("canplay", function () {
              r.style.display = "none", clearTimeout(o.canplayTimeout), d = !1;
            }), o.addEventListener("error", function (e) {
              i._handleError(e, i.media, i.node), r.style.display = "none", s.style.display = "none", d = !0;
            }), o.addEventListener("loadedmetadata", function () {
              i.controlsEnabled || i.enableControls();
            }), o.addEventListener("keydown", function (t) {
              i.onkeydown(e, o, t), d = !1;
            });
          }
        }
      }, {
        key: "buildkeyboard",
        value: function value(e, t, n, o) {
          var i = this;
          i.getElement(i.container).addEventListener("keydown", function () {
            i.keyboardAction = !0;
          }), i.globalKeydownCallback = function (t) {
            var n = l["default"].activeElement.closest("." + i.options.classPrefix + "container"),
                r = i.media.closest("." + i.options.classPrefix + "container");
            return i.hasFocus = !(!n || !r || n.id !== r.id), i.onkeydown(e, o, t);
          }, i.globalClickCallback = function (e) {
            i.hasFocus = !!e.target.closest("." + i.options.classPrefix + "container");
          }, i.globalBind("keydown", i.globalKeydownCallback), i.globalBind("click", i.globalClickCallback);
        }
      }, {
        key: "onkeydown",
        value: function value(e, t, n) {
          if (e.hasFocus && e.options.enableKeyboard) for (var o = 0, i = e.options.keyActions.length; o < i; o++) {
            for (var r = e.options.keyActions[o], a = 0, s = r.keys.length; a < s; a++) {
              if (n.keyCode === r.keys[a]) return r.action(e, t, n.keyCode, n), n.preventDefault(), void n.stopPropagation();
            }
          }
          return !0;
        }
      }, {
        key: "play",
        value: function value() {
          this.proxy.play();
        }
      }, {
        key: "pause",
        value: function value() {
          this.proxy.pause();
        }
      }, {
        key: "load",
        value: function value() {
          this.proxy.load();
        }
      }, {
        key: "setCurrentTime",
        value: function value(e) {
          this.proxy.setCurrentTime(e);
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.proxy.currentTime;
        }
      }, {
        key: "getDuration",
        value: function value() {
          return this.proxy.duration;
        }
      }, {
        key: "setVolume",
        value: function value(e) {
          this.proxy.volume = e;
        }
      }, {
        key: "getVolume",
        value: function value() {
          return this.proxy.getVolume();
        }
      }, {
        key: "setMuted",
        value: function value(e) {
          this.proxy.setMuted(e);
        }
      }, {
        key: "setSrc",
        value: function value(e) {
          this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e);
        }
      }, {
        key: "getSrc",
        value: function value() {
          return this.proxy.getSrc();
        }
      }, {
        key: "canPlayType",
        value: function value(e) {
          return this.proxy.canPlayType(e);
        }
      }, {
        key: "remove",
        value: function value() {
          var e = this,
              t = e.media.rendererName,
              n = e.media.originalNode.src;

          for (var o in e.options.features) {
            var i = e.options.features[o];
            if (e["clean" + i]) try {
              e["clean" + i](e, e.getElement(e.layers), e.getElement(e.controls), e.media);
            } catch (e) {
              console.error("error cleaning " + i, e);
            }
          }

          var a = e.node.getAttribute("width"),
              s = e.node.getAttribute("height");
          a ? -1 === a.indexOf("%") && (a += "px") : a = "auto", s ? -1 === s.indexOf("%") && (s += "px") : s = "auto", e.node.style.width = a, e.node.style.height = s, e.setPlayerSize(0, 0), e.isDynamic ? e.getElement(e.container).parentNode.insertBefore(e.node, e.getElement(e.container)) : function () {
            e.node.setAttribute("controls", !0), e.node.setAttribute("id", e.node.getAttribute("id").replace("_" + t, "").replace("_from_mejs", ""));
            var o = e.getElement(e.container).querySelector("." + e.options.classPrefix + "poster>img");
            o && e.node.setAttribute("poster", o.src), delete e.node.autoplay, "" !== e.media.canPlayType((0, v.getTypeFromFile)(n)) && e.node.setAttribute("src", n), ~t.indexOf("iframe") && l["default"].getElementById(e.media.id + "-iframe-overlay").remove();
            var i = e.node.cloneNode();
            if (i.style.display = "", e.getElement(e.container).parentNode.insertBefore(i, e.getElement(e.container)), e.node.remove(), e.mediaFiles) for (var r = 0, a = e.mediaFiles.length; r < a; r++) {
              var s = l["default"].createElement("source");
              s.setAttribute("src", e.mediaFiles[r].src), s.setAttribute("type", e.mediaFiles[r].type), i.appendChild(s);
            }
            if (e.trackFiles) for (var d = 0, u = e.trackFiles.length; d < u; d++) {
              !function (t, n) {
                var o = e.trackFiles[t],
                    r = l["default"].createElement("track");
                r.kind = o.kind, r.label = o.label, r.srclang = o.srclang, r.src = o.src, i.appendChild(r), r.addEventListener("load", function () {
                  this.mode = "showing", i.textTracks[t].mode = "showing";
                });
              }(d);
            }
            delete e.node, delete e.mediaFiles, delete e.trackFiles;
          }(), "function" == typeof e.media.renderer.destroy && e.media.renderer.destroy(), delete d["default"].players[e.id], "object" === r(e.getElement(e.container)) && (e.getElement(e.container).parentNode.querySelector("." + e.options.classPrefix + "offscreen").remove(), e.getElement(e.container).remove()), e.globalUnbind("resize", e.globalResizeCallback), e.globalUnbind("keydown", e.globalKeydownCallback), e.globalUnbind("click", e.globalClickCallback), delete e.media.player;
        }
      }, {
        key: "paused",
        get: function get() {
          return this.proxy.paused;
        }
      }, {
        key: "muted",
        get: function get() {
          return this.proxy.muted;
        },
        set: function set(e) {
          this.setMuted(e);
        }
      }, {
        key: "ended",
        get: function get() {
          return this.proxy.ended;
        }
      }, {
        key: "readyState",
        get: function get() {
          return this.proxy.readyState;
        }
      }, {
        key: "currentTime",
        set: function set(e) {
          this.setCurrentTime(e);
        },
        get: function get() {
          return this.getCurrentTime();
        }
      }, {
        key: "duration",
        get: function get() {
          return this.getDuration();
        }
      }, {
        key: "volume",
        set: function set(e) {
          this.setVolume(e);
        },
        get: function get() {
          return this.getVolume();
        }
      }, {
        key: "src",
        set: function set(e) {
          this.setSrc(e);
        },
        get: function get() {
          return this.getSrc();
        }
      }]), e;
    }();

    s["default"].MediaElementPlayer = E, d["default"].MediaElementPlayer = E, n["default"] = E;
  }, {
    17: 17,
    2: 2,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    30: 30,
    5: 5,
    6: 6,
    7: 7
  }],
  17: [function (e, t, n) {
    "use strict";

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(3)),
        a = function () {
      function e(t) {
        return o(this, e), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function () {
          return t.createIframeLayer();
        }, this.setPoster = function (e) {
          return t.setPoster(e);
        }, this;
      }

      return i(e, [{
        key: "play",
        value: function value() {
          this.media.play();
        }
      }, {
        key: "pause",
        value: function value() {
          this.media.pause();
        }
      }, {
        key: "load",
        value: function value() {
          var e = this;
          e.isLoaded || e.media.load(), e.isLoaded = !0;
        }
      }, {
        key: "setCurrentTime",
        value: function value(e) {
          this.media.setCurrentTime(e);
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.media.currentTime;
        }
      }, {
        key: "getDuration",
        value: function value() {
          return this.media.getDuration();
        }
      }, {
        key: "setVolume",
        value: function value(e) {
          this.media.setVolume(e);
        }
      }, {
        key: "getVolume",
        value: function value() {
          return this.media.getVolume();
        }
      }, {
        key: "setMuted",
        value: function value(e) {
          this.media.setMuted(e);
        }
      }, {
        key: "setSrc",
        value: function value(e) {
          var t = this,
              n = document.getElementById(t.media.id + "-iframe-overlay");
          n && n.remove(), t.media.setSrc(e), t.createIframeLayer(), null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl());
        }
      }, {
        key: "getSrc",
        value: function value() {
          return this.media.getSrc();
        }
      }, {
        key: "canPlayType",
        value: function value(e) {
          return this.media.canPlayType(e);
        }
      }, {
        key: "paused",
        get: function get() {
          return this.media.paused;
        }
      }, {
        key: "muted",
        set: function set(e) {
          this.setMuted(e);
        },
        get: function get() {
          return this.media.muted;
        }
      }, {
        key: "ended",
        get: function get() {
          return this.media.ended;
        }
      }, {
        key: "readyState",
        get: function get() {
          return this.media.readyState;
        }
      }, {
        key: "currentTime",
        set: function set(e) {
          this.setCurrentTime(e);
        },
        get: function get() {
          return this.getCurrentTime();
        }
      }, {
        key: "duration",
        get: function get() {
          return this.getDuration();
        }
      }, {
        key: "volume",
        set: function set(e) {
          this.setVolume(e);
        },
        get: function get() {
          return this.getVolume();
        }
      }, {
        key: "src",
        set: function set(e) {
          this.setSrc(e);
        },
        get: function get() {
          return this.getSrc();
        }
      }]), e;
    }();

    n["default"] = a, r["default"].DefaultPlayer = a;
  }, {
    3: 3
  }],
  18: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(3)),
        r = o(e(7)),
        a = o(e(16));
    "undefined" != typeof jQuery ? r["default"].$ = i["default"].jQuery = i["default"].$ = jQuery : "undefined" != typeof Zepto ? r["default"].$ = i["default"].Zepto = i["default"].$ = Zepto : "undefined" != typeof ender && (r["default"].$ = i["default"].ender = i["default"].$ = ender), function (e) {
      void 0 !== e && (e.fn.mediaelementplayer = function (t) {
        return !1 === t ? this.each(function () {
          var t = e(this).data("mediaelementplayer");
          t && t.remove(), e(this).removeData("mediaelementplayer");
        }) : this.each(function () {
          e(this).data("mediaelementplayer", new a["default"](this, t));
        }), this;
      }, e(document).ready(function () {
        e("." + r["default"].MepDefaults.classPrefix + "player").mediaelementplayer();
      }));
    }(r["default"].$);
  }, {
    16: 16,
    3: 3,
    7: 7
  }],
  19: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        r = o(e(3)),
        a = o(e(7)),
        s = e(8),
        l = e(27),
        d = e(28),
        u = e(25),
        c = e(26),
        f = {
      promise: null,
      load: function load(e) {
        return "undefined" != typeof dashjs ? f.promise = new Promise(function (e) {
          e();
        }).then(function () {
          f._createPlayer(e);
        }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function () {
          f._createPlayer(e);
        })), f.promise;
      },
      _createPlayer: function _createPlayer(e) {
        var t = dashjs.MediaPlayer().create();
        return r["default"]["__ready__" + e.id](t), t;
      }
    },
        p = {
      name: "native_dash",
      options: {
        prefix: "native_dash",
        dash: {
          path: "https://cdn.dashjs.org/latest/dash.all.min.js",
          debug: !1,
          drm: {},
          robustnessLevel: ""
        }
      },
      canPlayType: function canPlayType(e) {
        return u.HAS_MSE && ["application/dash+xml"].indexOf(e.toLowerCase()) > -1;
      },
      create: function create(e, t, n) {
        var o = e.originalNode,
            d = e.id + "_" + t.prefix,
            u = o.autoplay,
            c = o.children,
            p = null,
            m = null;
        o.removeAttribute("type");

        for (var h = 0, v = c.length; h < v; h++) {
          c[h].removeAttribute("type");
        }

        p = o.cloneNode(!0), t = Object.assign(t, e.options);

        for (var g = a["default"].html5media.properties, y = a["default"].html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
          return "error" !== e;
        }), E = function E(t) {
          var n = (0, l.createEvent)(t.type, e);
          e.dispatchEvent(n);
        }, b = 0, S = g.length; b < S; b++) {
          !function (e) {
            var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            p["get" + n] = function () {
              return null !== m ? p[e] : null;
            }, p["set" + n] = function (n) {
              if (-1 === a["default"].html5media.readOnlyProperties.indexOf(e)) if ("src" === e) {
                var o = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n;

                if (p[e] = o, null !== m) {
                  m.reset();

                  for (var r = 0, s = y.length; r < s; r++) {
                    p.removeEventListener(y[r], E);
                  }

                  m = f._createPlayer({
                    options: t.dash,
                    id: d
                  }), n && "object" === (void 0 === n ? "undefined" : i(n)) && "object" === i(n.drm) && (m.setProtectionData(n.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), m.attachSource(o), u && m.play();
                }
              } else p[e] = n;
            };
          }(g[b]);
        }

        if (r["default"]["__ready__" + d] = function (n) {
          e.dashPlayer = m = n;

          for (var o = dashjs.MediaPlayer.events, r = 0, s = y.length; r < s; r++) {
            !function (e) {
              "loadedmetadata" === e && (m.getDebug().setLogToBrowserConsole(t.dash.debug), m.initialize(), m.setScheduleWhilePaused(!1), m.setFastSwitchEnabled(!0), m.attachView(p), m.setAutoPlay(!1), "object" !== i(t.dash.drm) || a["default"].Utils.isObjectEmpty(t.dash.drm) || (m.setProtectionData(t.dash.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), m.attachSource(p.getSrc())), p.addEventListener(e, E);
            }(y[r]);
          }

          var d = function d(t) {
            if ("error" === t.type.toLowerCase()) e.generateError(t.message, p.src), console.error(t);else {
              var n = (0, l.createEvent)(t.type, e);
              n.data = t, e.dispatchEvent(n);
            }
          };

          for (var u in o) {
            o.hasOwnProperty(u) && m.on(o[u], function (e) {
              return d(e);
            });
          }
        }, n && n.length > 0) for (var x = 0, w = n.length; x < w; x++) {
          if (s.renderer.renderers[t.prefix].canPlayType(n[x].type)) {
            p.setAttribute("src", n[x].src), void 0 !== n[x].drm && (t.dash.drm = n[x].drm);
            break;
          }
        }
        p.setAttribute("id", d), o.parentNode.insertBefore(p, o), o.autoplay = !1, o.style.display = "none", p.setSize = function (e, t) {
          return p.style.width = e + "px", p.style.height = t + "px", p;
        }, p.hide = function () {
          return p.pause(), p.style.display = "none", p;
        }, p.show = function () {
          return p.style.display = "", p;
        }, p.destroy = function () {
          null !== m && m.reset();
        };
        var P = (0, l.createEvent)("rendererready", p);
        return e.dispatchEvent(P), e.promises.push(f.load({
          options: t.dash,
          id: d
        })), p;
      }
    };
    d.typeChecks.push(function (e) {
      return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null;
    }), s.renderer.add(p);
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  20: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.PluginDetector = void 0;
    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        r = o(e(3)),
        a = o(e(2)),
        s = o(e(7)),
        l = o(e(5)),
        d = e(8),
        u = e(27),
        c = e(25),
        f = e(28),
        p = n.PluginDetector = {
      plugins: [],
      hasPluginVersion: function hasPluginVersion(e, t) {
        var n = p.plugins[e];
        return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2];
      },
      addPlugin: function addPlugin(e, t, n, o, i) {
        p.plugins[e] = p.detectPlugin(t, n, o, i);
      },
      detectPlugin: function detectPlugin(e, t, n, o) {
        var a = [0, 0, 0],
            s = void 0,
            l = void 0;

        if (null !== c.NAV.plugins && void 0 !== c.NAV.plugins && "object" === i(c.NAV.plugins[e])) {
          if ((s = c.NAV.plugins[e].description) && (void 0 === c.NAV.mimeTypes || !c.NAV.mimeTypes[t] || c.NAV.mimeTypes[t].enabledPlugin)) for (var d = 0, u = (a = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; d < u; d++) {
            a[d] = parseInt(a[d].match(/\d+/), 10);
          }
        } else if (void 0 !== r["default"].ActiveXObject) try {
          (l = new ActiveXObject(n)) && (a = o(l));
        } catch (e) {}

        return a;
      }
    };
    p.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (e) {
      var t = [],
          n = e.GetVariable("$version");
      return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t;
    });
    var m = {
      create: function create(e, t, n) {
        var o = {},
            i = !1;
        o.options = t, o.id = e.id + "_" + o.options.prefix, o.mediaElement = e, o.flashState = {}, o.flashApi = null, o.flashApiStack = [];

        for (var p = s["default"].html5media.properties, m = 0, h = p.length; m < h; m++) {
          !function (e) {
            o.flashState[e] = null;
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            o["get" + t] = function () {
              if (null !== o.flashApi) {
                if ("function" == typeof o.flashApi["get_" + e]) {
                  var t = o.flashApi["get_" + e]();
                  return "buffered" === e ? {
                    start: function start() {
                      return 0;
                    },
                    end: function end() {
                      return t;
                    },
                    length: 1
                  } : t;
                }

                return null;
              }

              return null;
            }, o["set" + t] = function (t) {
              if ("src" === e && (t = (0, f.absolutizeUrl)(t)), null !== o.flashApi && void 0 !== o.flashApi["set_" + e]) try {
                o.flashApi["set_" + e](t);
              } catch (e) {} else o.flashApiStack.push({
                type: "set",
                propName: e,
                value: t
              });
            };
          }(p[m]);
        }

        var v = s["default"].html5media.methods;
        v.push("stop");

        for (var g = 0, y = v.length; g < y; g++) {
          !function (e) {
            o[e] = function () {
              if (i) if (null !== o.flashApi) {
                if (o.flashApi["fire_" + e]) try {
                  o.flashApi["fire_" + e]();
                } catch (e) {}
              } else o.flashApiStack.push({
                type: "call",
                methodName: e
              });
            };
          }(v[g]);
        }

        for (var E = ["rendererready"], b = 0, S = E.length; b < S; b++) {
          var x = (0, u.createEvent)(E[b], o);
          e.dispatchEvent(x);
        }

        r["default"]["__ready__" + o.id] = function () {
          if (o.flashReady = !0, o.flashApi = a["default"].getElementById("__" + o.id), o.flashApiStack.length) for (var e = 0, t = o.flashApiStack.length; e < t; e++) {
            var n = o.flashApiStack[e];

            if ("set" === n.type) {
              var i = n.propName,
                  r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
              o["set" + r](n.value);
            } else "call" === n.type && o[n.methodName]();
          }
        }, r["default"]["__event__" + o.id] = function (e, t) {
          var n = (0, u.createEvent)(e, o);
          if (t) try {
            n.data = JSON.parse(t), n.details.data = JSON.parse(t);
          } catch (e) {
            n.message = t;
          }
          o.mediaElement.dispatchEvent(n);
        }, o.flashWrapper = a["default"].createElement("div"), -1 === ["always", "sameDomain"].indexOf(o.options.shimScriptAccess) && (o.options.shimScriptAccess = "sameDomain");
        var w = e.originalNode.autoplay,
            P = ["uid=" + o.id, "autoplay=" + w, "allowScriptAccess=" + o.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")],
            T = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
            C = T ? e.originalNode.height : 1,
            k = T ? e.originalNode.width : 1;
        e.originalNode.getAttribute("src") && P.push("src=" + e.originalNode.getAttribute("src")), !0 === o.options.enablePseudoStreaming && (P.push("pseudostreamstart=" + o.options.pseudoStreamingStartQueryParam), P.push("pseudostreamtype=" + o.options.pseudoStreamingType)), o.options.streamDelimiter && P.push("streamdelimiter=" + encodeURIComponent(o.options.streamDelimiter)), o.options.proxyType && P.push("proxytype=" + o.options.proxyType), e.appendChild(o.flashWrapper), e.originalNode.style.display = "none";
        var _ = [];

        if (c.IS_IE || c.IS_EDGE) {
          var N = a["default"].createElement("div");
          o.flashWrapper.appendChild(N), _ = c.IS_EDGE ? ['type="application/x-shockwave-flash"', 'data="' + o.options.pluginPath + o.options.filename + '"', 'id="__' + o.id + '"', 'width="' + k + '"', 'height="' + C + "'\""] : ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + o.id + '"', 'width="' + k + '"', 'height="' + C + '"'], T || _.push('style="clip: rect(0 0 0 0); position: absolute;"'), N.outerHTML = "<object " + _.join(" ") + '><param name="movie" value="' + o.options.pluginPath + o.options.filename + "?x=" + new Date() + '" /><param name="flashvars" value="' + P.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + o.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + l["default"].t("mejs.install-flash") + "</div></object>";
        } else _ = ['id="__' + o.id + '"', 'name="__' + o.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + o.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + o.options.pluginPath + o.options.filename + '"', 'flashvars="' + P.join("&") + '"'], T ? (_.push('width="' + k + '"'), _.push('height="' + C + '"')) : _.push('style="position: fixed; left: -9999em; top: -9999em;"'), o.flashWrapper.innerHTML = "<embed " + _.join(" ") + ">";

        if (o.flashNode = o.flashWrapper.lastChild, o.hide = function () {
          i = !1, T && (o.flashNode.style.display = "none");
        }, o.show = function () {
          i = !0, T && (o.flashNode.style.display = "");
        }, o.setSize = function (e, t) {
          o.flashNode.style.width = e + "px", o.flashNode.style.height = t + "px", null !== o.flashApi && "function" == typeof o.flashApi.fire_setSize && o.flashApi.fire_setSize(e, t);
        }, o.destroy = function () {
          o.flashNode.remove();
        }, n && n.length > 0) for (var A = 0, L = n.length; A < L; A++) {
          if (d.renderer.renderers[t.prefix].canPlayType(n[A].type)) {
            o.setSrc(n[A].src);
            break;
          }
        }
        return o;
      }
    };

    if (p.hasPluginVersion("flash", [10, 0, 0])) {
      f.typeChecks.push(function (e) {
        return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null;
      });
      var h = {
        name: "flash_video",
        options: {
          prefix: "flash_video",
          filename: "mediaelement-flash-video.swf",
          enablePseudoStreaming: !1,
          pseudoStreamingStartQueryParam: "start",
          pseudoStreamingType: "byte",
          proxyType: "",
          streamDelimiter: ""
        },
        canPlayType: function canPlayType(e) {
          return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase());
        },
        create: m.create
      };
      d.renderer.add(h);
      var v = {
        name: "flash_hls",
        options: {
          prefix: "flash_hls",
          filename: "mediaelement-flash-video-hls.swf"
        },
        canPlayType: function canPlayType(e) {
          return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase());
        },
        create: m.create
      };
      d.renderer.add(v);
      var g = {
        name: "flash_dash",
        options: {
          prefix: "flash_dash",
          filename: "mediaelement-flash-video-mdash.swf"
        },
        canPlayType: function canPlayType(e) {
          return ~["application/dash+xml"].indexOf(e.toLowerCase());
        },
        create: m.create
      };
      d.renderer.add(g);
      var y = {
        name: "flash_audio",
        options: {
          prefix: "flash_audio",
          filename: "mediaelement-flash-audio.swf"
        },
        canPlayType: function canPlayType(e) {
          return ~["audio/mp3"].indexOf(e.toLowerCase());
        },
        create: m.create
      };
      d.renderer.add(y);
      var E = {
        name: "flash_audio_ogg",
        options: {
          prefix: "flash_audio_ogg",
          filename: "mediaelement-flash-audio-ogg.swf"
        },
        canPlayType: function canPlayType(e) {
          return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase());
        },
        create: m.create
      };
      d.renderer.add(E);
    }
  }, {
    2: 2,
    25: 25,
    27: 27,
    28: 28,
    3: 3,
    5: 5,
    7: 7,
    8: 8
  }],
  21: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        r = o(e(3)),
        a = o(e(7)),
        s = e(8),
        l = e(27),
        d = e(25),
        u = e(28),
        c = e(26),
        f = {
      promise: null,
      load: function load(e) {
        return "undefined" != typeof flvjs ? f.promise = new Promise(function (e) {
          e();
        }).then(function () {
          f._createPlayer(e);
        }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/flv.js@latest", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function () {
          f._createPlayer(e);
        })), f.promise;
      },
      _createPlayer: function _createPlayer(e) {
        flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
        var t = flvjs.createPlayer(e.options, e.configs);
        return r["default"]["__ready__" + e.id](t), t;
      }
    },
        p = {
      name: "native_flv",
      options: {
        prefix: "native_flv",
        flv: {
          path: "https://cdn.jsdelivr.net/npm/flv.js@latest",
          cors: !0,
          debug: !1
        }
      },
      canPlayType: function canPlayType(e) {
        return d.HAS_MSE && ["video/x-flv", "video/flv"].indexOf(e.toLowerCase()) > -1;
      },
      create: function create(e, t, n) {
        var o = e.originalNode,
            d = e.id + "_" + t.prefix,
            u = null,
            c = null;
        u = o.cloneNode(!0), t = Object.assign(t, e.options);

        for (var p = a["default"].html5media.properties, m = a["default"].html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
          return "error" !== e;
        }), h = function h(t) {
          var n = (0, l.createEvent)(t.type, e);
          e.dispatchEvent(n);
        }, v = 0, g = p.length; v < g; v++) {
          !function (e) {
            var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            u["get" + n] = function () {
              return null !== c ? u[e] : null;
            }, u["set" + n] = function (n) {
              if (-1 === a["default"].html5media.readOnlyProperties.indexOf(e)) if ("src" === e) {
                if (u[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n, null !== c) {
                  var o = {};
                  o.type = "flv", o.url = n, o.cors = t.flv.cors, o.debug = t.flv.debug, o.path = t.flv.path;
                  var r = t.flv.configs;
                  c.destroy();

                  for (var s = 0, l = m.length; s < l; s++) {
                    u.removeEventListener(m[s], h);
                  }

                  (c = f._createPlayer({
                    options: o,
                    configs: r,
                    id: d
                  })).attachMediaElement(u), c.load();
                }
              } else u[e] = n;
            };
          }(p[v]);
        }

        if (r["default"]["__ready__" + d] = function (t) {
          e.flvPlayer = c = t;

          for (var n = flvjs.Events, o = 0, i = m.length; o < i; o++) {
            !function (e) {
              "loadedmetadata" === e && (c.unload(), c.detachMediaElement(), c.attachMediaElement(u), c.load()), u.addEventListener(e, h);
            }(m[o]);
          }

          var r = function r(t, n) {
            if ("error" === t) {
              var o = n[0] + ": " + n[1] + " " + n[2].msg;
              e.generateError(o, u.src);
            } else {
              var i = (0, l.createEvent)(t, e);
              i.data = n, e.dispatchEvent(i);
            }
          };

          for (var a in n) {
            !function (e) {
              n.hasOwnProperty(e) && c.on(n[e], function () {
                for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) {
                  o[i] = arguments[i];
                }

                return r(n[e], o);
              });
            }(a);
          }
        }, n && n.length > 0) for (var y = 0, E = n.length; y < E; y++) {
          if (s.renderer.renderers[t.prefix].canPlayType(n[y].type)) {
            u.setAttribute("src", n[y].src);
            break;
          }
        }
        u.setAttribute("id", d), o.parentNode.insertBefore(u, o), o.autoplay = !1, o.style.display = "none";
        var b = {};
        b.type = "flv", b.url = u.src, b.cors = t.flv.cors, b.debug = t.flv.debug, b.path = t.flv.path;
        var S = t.flv.configs;
        u.setSize = function (e, t) {
          return u.style.width = e + "px", u.style.height = t + "px", u;
        }, u.hide = function () {
          return null !== c && c.pause(), u.style.display = "none", u;
        }, u.show = function () {
          return u.style.display = "", u;
        }, u.destroy = function () {
          null !== c && c.destroy();
        };
        var x = (0, l.createEvent)("rendererready", u);
        return e.dispatchEvent(x), e.promises.push(f.load({
          options: b,
          configs: S,
          id: d
        })), u;
      }
    };
    u.typeChecks.push(function (e) {
      return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null;
    }), s.renderer.add(p);
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  22: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        r = o(e(3)),
        a = o(e(7)),
        s = e(8),
        l = e(27),
        d = e(25),
        u = e(28),
        c = e(26),
        f = {
      promise: null,
      load: function load(e) {
        return "undefined" != typeof Hls ? f.promise = new Promise(function (e) {
          e();
        }).then(function () {
          f._createPlayer(e);
        }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.jsdelivr.net/npm/hls.js@latest", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function () {
          f._createPlayer(e);
        })), f.promise;
      },
      _createPlayer: function _createPlayer(e) {
        var t = new Hls(e.options);
        return r["default"]["__ready__" + e.id](t), t;
      }
    },
        p = {
      name: "native_hls",
      options: {
        prefix: "native_hls",
        hls: {
          path: "https://cdn.jsdelivr.net/npm/hls.js@latest",
          autoStartLoad: !1,
          debug: !1
        }
      },
      canPlayType: function canPlayType(e) {
        return d.HAS_MSE && ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) > -1;
      },
      create: function create(e, t, n) {
        var o = e.originalNode,
            d = e.id + "_" + t.prefix,
            u = o.getAttribute("preload"),
            c = o.autoplay,
            p = null,
            m = null,
            h = 0,
            v = n.length;
        m = o.cloneNode(!0), (t = Object.assign(t, e.options)).hls.autoStartLoad = u && "none" !== u || c;

        for (var g = a["default"].html5media.properties, y = a["default"].html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
          return "error" !== e;
        }), E = function E(t) {
          var n = (0, l.createEvent)(t.type, e);
          e.dispatchEvent(n);
        }, b = 0, S = g.length; b < S; b++) {
          !function (e) {
            var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            m["get" + n] = function () {
              return null !== p ? m[e] : null;
            }, m["set" + n] = function (n) {
              if (-1 === a["default"].html5media.readOnlyProperties.indexOf(e)) if ("src" === e) {
                if (m[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n, null !== p) {
                  p.destroy();

                  for (var o = 0, r = y.length; o < r; o++) {
                    m.removeEventListener(y[o], E);
                  }

                  (p = f._createPlayer({
                    options: t.hls,
                    id: d
                  })).loadSource(n), p.attachMedia(m);
                }
              } else m[e] = n;
            };
          }(g[b]);
        }

        if (r["default"]["__ready__" + d] = function (t) {
          e.hlsPlayer = p = t;

          for (var o = Hls.Events, i = 0, r = y.length; i < r; i++) {
            !function (t) {
              if ("loadedmetadata" === t) {
                var n = e.originalNode.src;
                p.detachMedia(), p.loadSource(n), p.attachMedia(m);
              }

              m.addEventListener(t, E);
            }(y[i]);
          }

          var a = void 0,
              s = void 0,
              d = function d(t, o) {
            if ("hlsError" === t) {
              if (console.warn(o), (o = o[1]).fatal) switch (o.type) {
                case "mediaError":
                  var i = new Date().getTime();
                  if (!a || i - a > 3e3) a = new Date().getTime(), p.recoverMediaError();else if (!s || i - s > 3e3) s = new Date().getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), p.swapAudioCodec(), p.recoverMediaError();else {
                    var r = "Cannot recover, last media error recovery failed";
                    e.generateError(r, m.src), console.error(r);
                  }
                  break;

                case "networkError":
                  if ("manifestLoadError" === o.details) {
                    if (h < v && void 0 !== n[h + 1]) m.setSrc(n[h++].src), m.load(), m.play();else {
                      e.generateError("Network error", n), console.error("Network error");
                    }
                  } else {
                    e.generateError("Network error", n), console.error("Network error");
                  }
                  break;

                default:
                  p.destroy();
              }
            } else {
              var d = (0, l.createEvent)(t, e);
              d.data = o, e.dispatchEvent(d);
            }
          };

          for (var u in o) {
            !function (e) {
              o.hasOwnProperty(e) && p.on(o[e], function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) {
                  n[i] = arguments[i];
                }

                return d(o[e], n);
              });
            }(u);
          }
        }, v > 0) for (; h < v; h++) {
          if (s.renderer.renderers[t.prefix].canPlayType(n[h].type)) {
            m.setAttribute("src", n[h].src);
            break;
          }
        }
        "auto" === u || c || (m.addEventListener("play", function () {
          null !== p && p.startLoad();
        }), m.addEventListener("pause", function () {
          null !== p && p.stopLoad();
        })), m.setAttribute("id", d), o.parentNode.insertBefore(m, o), o.autoplay = !1, o.style.display = "none", m.setSize = function (e, t) {
          return m.style.width = e + "px", m.style.height = t + "px", m;
        }, m.hide = function () {
          return m.pause(), m.style.display = "none", m;
        }, m.show = function () {
          return m.style.display = "", m;
        }, m.destroy = function () {
          null !== p && (p.stopLoad(), p.destroy());
        };
        var x = (0, l.createEvent)("rendererready", m);
        return e.dispatchEvent(x), e.promises.push(f.load({
          options: t.hls,
          id: d
        })), m;
      }
    };
    u.typeChecks.push(function (e) {
      return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null;
    }), s.renderer.add(p);
  }, {
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  23: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(3)),
        r = o(e(2)),
        a = o(e(7)),
        s = e(8),
        l = e(27),
        d = e(25),
        u = {
      name: "html5",
      options: {
        prefix: "html5"
      },
      canPlayType: function canPlayType(e) {
        var t = r["default"].createElement("video");
        return d.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && d.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : "";
      },
      create: function create(e, t, n) {
        var o = e.id + "_" + t.prefix,
            i = !1,
            d = null;
        void 0 === e.originalNode || null === e.originalNode ? (d = r["default"].createElement("audio"), e.appendChild(d)) : d = e.originalNode, d.setAttribute("id", o);

        for (var u = a["default"].html5media.properties, c = 0, f = u.length; c < f; c++) {
          !function (e) {
            var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
            d["get" + t] = function () {
              return d[e];
            }, d["set" + t] = function (t) {
              -1 === a["default"].html5media.readOnlyProperties.indexOf(e) && (d[e] = t);
            };
          }(u[c]);
        }

        for (var p = a["default"].html5media.events.concat(["click", "mouseover", "mouseout"]).filter(function (e) {
          return "error" !== e;
        }), m = 0, h = p.length; m < h; m++) {
          !function (t) {
            d.addEventListener(t, function (t) {
              if (i) {
                var n = (0, l.createEvent)(t.type, t.target);
                e.dispatchEvent(n);
              }
            });
          }(p[m]);
        }

        d.setSize = function (e, t) {
          return d.style.width = e + "px", d.style.height = t + "px", d;
        }, d.hide = function () {
          return i = !1, d.style.display = "none", d;
        }, d.show = function () {
          return i = !0, d.style.display = "", d;
        };
        var v = 0,
            g = n.length;
        if (g > 0) for (; v < g; v++) {
          if (s.renderer.renderers[t.prefix].canPlayType(n[v].type)) {
            d.setAttribute("src", n[v].src);
            break;
          }
        }
        d.addEventListener("error", function (t) {
          4 === t.target.error.code && i && (v < g && void 0 !== n[v + 1] ? (d.src = n[v++].src, d.load(), d.play()) : e.generateError("Media error: Format(s) not supported or source(s) not found", n));
        });
        var y = (0, l.createEvent)("rendererready", d);
        return e.dispatchEvent(y), d;
      }
    };
    i["default"].HtmlMediaElement = a["default"].HtmlMediaElement = u, s.renderer.add(u);
  }, {
    2: 2,
    25: 25,
    27: 27,
    3: 3,
    7: 7,
    8: 8
  }],
  24: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(3)),
        r = o(e(2)),
        a = o(e(7)),
        s = e(8),
        l = e(27),
        d = e(28),
        u = e(26),
        c = {
      isIframeStarted: !1,
      isIframeLoaded: !1,
      iframeQueue: [],
      enqueueIframe: function enqueueIframe(e) {
        c.isLoaded = "undefined" != typeof YT && YT.loaded, c.isLoaded ? c.createIframe(e) : (c.loadIframeApi(), c.iframeQueue.push(e));
      },
      loadIframeApi: function loadIframeApi() {
        c.isIframeStarted || ((0, u.loadScript)("https://www.youtube.com/player_api"), c.isIframeStarted = !0);
      },
      iFrameReady: function iFrameReady() {
        for (c.isLoaded = !0, c.isIframeLoaded = !0; c.iframeQueue.length > 0;) {
          var e = c.iframeQueue.pop();
          c.createIframe(e);
        }
      },
      createIframe: function createIframe(e) {
        return new YT.Player(e.containerId, e);
      },
      getYouTubeId: function getYouTubeId(e) {
        var t = "";
        return e.indexOf("?") > 0 ? "" === (t = c.getYouTubeIdFromParam(e)) && (t = c.getYouTubeIdFromUrl(e)) : t = c.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0];
      },
      getYouTubeIdFromParam: function getYouTubeIdFromParam(e) {
        if (void 0 === e || null === e || !e.trim().length) return null;

        for (var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length; o < i; o++) {
          var r = t[o].split("=");

          if ("v" === r[0]) {
            n = r[1];
            break;
          }
        }

        return n;
      },
      getYouTubeIdFromUrl: function getYouTubeIdFromUrl(e) {
        return void 0 !== e && null !== e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null;
      },
      getYouTubeNoCookieUrl: function getYouTubeNoCookieUrl(e) {
        if (void 0 === e || null === e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
        var t = e.split("/");
        return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/");
      }
    },
        f = {
      name: "youtube_iframe",
      options: {
        prefix: "youtube_iframe",
        youtube: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          end: 0,
          loop: 0,
          modestbranding: 0,
          playsinline: 0,
          rel: 0,
          showinfo: 0,
          start: 0,
          iv_load_policy: 3,
          nocookie: !1,
          imageQuality: null
        }
      },
      canPlayType: function canPlayType(e) {
        return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase());
      },
      create: function create(e, t, n) {
        var o = {},
            s = [],
            d = null,
            u = !0,
            f = !1,
            p = null,
            m = 1;
        o.options = t, o.id = e.id + "_" + t.prefix, o.mediaElement = e;

        for (var h = a["default"].html5media.properties, v = 0, g = h.length; v < g; v++) {
          !function (t) {
            var n = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
            o["get" + n] = function () {
              if (null !== d) {
                switch (t) {
                  case "currentTime":
                    return d.getCurrentTime();

                  case "duration":
                    return d.getDuration();

                  case "volume":
                    return m = d.getVolume() / 100;

                  case "paused":
                    return u;

                  case "ended":
                    return f;

                  case "muted":
                    return d.isMuted();

                  case "buffered":
                    var e = d.getVideoLoadedFraction(),
                        n = d.getDuration();
                    return {
                      start: function start() {
                        return 0;
                      },
                      end: function end() {
                        return e * n;
                      },
                      length: 1
                    };

                  case "src":
                    return d.getVideoUrl();

                  case "readyState":
                    return 4;
                }

                return null;
              }

              return null;
            }, o["set" + n] = function (n) {
              if (null !== d) switch (t) {
                case "src":
                  var i = "string" == typeof n ? n : n[0].src,
                      r = c.getYouTubeId(i);
                  e.originalNode.autoplay ? d.loadVideoById(r) : d.cueVideoById(r);
                  break;

                case "currentTime":
                  d.seekTo(n);
                  break;

                case "muted":
                  n ? d.mute() : d.unMute(), setTimeout(function () {
                    var t = (0, l.createEvent)("volumechange", o);
                    e.dispatchEvent(t);
                  }, 50);
                  break;

                case "volume":
                  m = n, d.setVolume(100 * n), setTimeout(function () {
                    var t = (0, l.createEvent)("volumechange", o);
                    e.dispatchEvent(t);
                  }, 50);
                  break;

                case "readyState":
                  var a = (0, l.createEvent)("canplay", o);
                  e.dispatchEvent(a);
              } else s.push({
                type: "set",
                propName: t,
                value: n
              });
            };
          }(h[v]);
        }

        for (var y = a["default"].html5media.methods, E = 0, b = y.length; E < b; E++) {
          !function (e) {
            o[e] = function () {
              if (null !== d) switch (e) {
                case "play":
                  return u = !1, d.playVideo();

                case "pause":
                  return u = !0, d.pauseVideo();

                case "load":
                  return null;
              } else s.push({
                type: "call",
                methodName: e
              });
            };
          }(y[E]);
        }

        var S = function S(t) {
          var o = "";

          switch (t.data) {
            case 2:
              o = "The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";
              break;

            case 5:
              o = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
              break;

            case 100:
              o = "The video requested was not found. Either video has been removed or has been marked as private.";
              break;

            case 101:
            case 105:
              o = "The owner of the requested video does not allow it to be played in embedded players.";
              break;

            default:
              o = "Unknown error.";
          }

          e.generateError("Code " + t.data + ": " + o, n);
        },
            x = r["default"].createElement("div");

        x.id = o.id, o.options.youtube.nocookie && (e.originalNode.src = c.getYouTubeNoCookieUrl(n[0].src)), e.originalNode.parentNode.insertBefore(x, e.originalNode), e.originalNode.style.display = "none";
        var w = "audio" === e.originalNode.tagName.toLowerCase(),
            P = w ? "1" : e.originalNode.height,
            T = w ? "1" : e.originalNode.width,
            C = c.getYouTubeId(n[0].src),
            k = {
          id: o.id,
          containerId: x.id,
          videoId: C,
          height: P,
          width: T,
          playerVars: Object.assign({
            controls: 0,
            rel: 0,
            disablekb: 1,
            showinfo: 0,
            modestbranding: 0,
            html5: 1,
            iv_load_policy: 3
          }, o.options.youtube),
          origin: i["default"].location.host,
          events: {
            onReady: function onReady(t) {
              if (e.youTubeApi = d = t.target, e.youTubeState = {
                paused: !0,
                ended: !1
              }, s.length) for (var n = 0, i = s.length; n < i; n++) {
                var r = s[n];

                if ("set" === r.type) {
                  var a = r.propName,
                      u = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                  o["set" + u](r.value);
                } else "call" === r.type && o[r.methodName]();
              }
              p = d.getIframe(), e.originalNode.muted && d.mute();

              for (var c = ["mouseover", "mouseout"], f = 0, m = c.length; f < m; f++) {
                p.addEventListener(c[f], function (t) {
                  var n = (0, l.createEvent)(t.type, o);
                  e.dispatchEvent(n);
                }, !1);
              }

              for (var h = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], v = 0, g = h.length; v < g; v++) {
                var y = (0, l.createEvent)(h[v], o);
                e.dispatchEvent(y);
              }
            },
            onStateChange: function onStateChange(t) {
              var n = [];

              switch (t.data) {
                case -1:
                  n = ["loadedmetadata"], u = !0, f = !1;
                  break;

                case 0:
                  n = ["ended"], u = !1, f = !o.options.youtube.loop, o.options.youtube.loop || o.stopInterval();
                  break;

                case 1:
                  n = ["play", "playing"], u = !1, f = !1, o.startInterval();
                  break;

                case 2:
                  n = ["pause"], u = !0, f = !1, o.stopInterval();
                  break;

                case 3:
                  n = ["progress"], f = !1;
                  break;

                case 5:
                  n = ["loadeddata", "loadedmetadata", "canplay"], u = !0, f = !1;
              }

              for (var i = 0, r = n.length; i < r; i++) {
                var a = (0, l.createEvent)(n[i], o);
                e.dispatchEvent(a);
              }
            },
            onError: function onError(e) {
              return S(e);
            }
          }
        };
        return (w || e.originalNode.hasAttribute("playsinline")) && (k.playerVars.playsinline = 1), e.originalNode.controls && (k.playerVars.controls = 1), e.originalNode.autoplay && (k.playerVars.autoplay = 1), e.originalNode.loop && (k.playerVars.loop = 1), (k.playerVars.loop && 1 === parseInt(k.playerVars.loop, 10) || e.originalNode.src.indexOf("loop=") > -1) && !k.playerVars.playlist && -1 === e.originalNode.src.indexOf("playlist=") && (k.playerVars.playlist = c.getYouTubeId(e.originalNode.src)), c.enqueueIframe(k), o.onEvent = function (t, n, o) {
          null !== o && void 0 !== o && (e.youTubeState = o);
        }, o.setSize = function (e, t) {
          null !== d && d.setSize(e, t);
        }, o.hide = function () {
          o.stopInterval(), o.pause(), p && (p.style.display = "none");
        }, o.show = function () {
          p && (p.style.display = "");
        }, o.destroy = function () {
          d.destroy();
        }, o.interval = null, o.startInterval = function () {
          o.interval = setInterval(function () {
            var t = (0, l.createEvent)("timeupdate", o);
            e.dispatchEvent(t);
          }, 250);
        }, o.stopInterval = function () {
          o.interval && clearInterval(o.interval);
        }, o.getPosterUrl = function () {
          var n = t.youtube.imageQuality,
              o = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"],
              i = c.getYouTubeId(e.originalNode.src);
          return n && o.indexOf(n) > -1 && i ? "https://img.youtube.com/vi/" + i + "/" + n + ".jpg" : "";
        }, o;
      }
    };
    i["default"].onYouTubePlayerAPIReady = function () {
      c.iFrameReady();
    }, d.typeChecks.push(function (e) {
      return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null;
    }), s.renderer.add(f);
  }, {
    2: 2,
    26: 26,
    27: 27,
    28: 28,
    3: 3,
    7: 7,
    8: 8
  }],
  25: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_PASSIVE_EVENT = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;

    for (var i = o(e(3)), r = o(e(2)), a = o(e(7)), s = n.NAV = i["default"].navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !i["default"].MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !i["default"].MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !i["default"].MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i["default"].MSStream, n.IS_ANDROID = /android/i.test(l)), p = n.IS_IE = /(trident|microsoft)/i.test(s.appName), m = n.IS_EDGE = ("msLaunchUri" in s) && !("documentMode" in r["default"]), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), g = n.IS_SAFARI = /safari/i.test(l) && !h, y = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), E = n.HAS_MSE = ("MediaSource" in i["default"]), b = n.SUPPORT_POINTER_EVENTS = function () {
      var e = r["default"].createElement("x"),
          t = r["default"].documentElement,
          n = i["default"].getComputedStyle;
      if (!("pointerEvents" in e.style)) return !1;
      e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
      var o = n && "auto" === n(e, "").pointerEvents;
      return e.remove(), !!o;
    }(), S = n.SUPPORT_PASSIVE_EVENT = function () {
      var e = !1;

      try {
        var t = Object.defineProperty({}, "passive", {
          get: function get() {
            e = !0;
          }
        });
        i["default"].addEventListener("test", null, t);
      } catch (e) {}

      return e;
    }(), x = ["source", "track", "audio", "video"], w = void 0, P = 0, T = x.length; P < T; P++) {
      w = r["default"].createElement(x[P]);
    }

    var C = n.SUPPORTS_NATIVE_HLS = g || f && (h || y) || p && /edge/i.test(l),
        k = void 0 !== w.webkitEnterFullscreen,
        _ = void 0 !== w.requestFullscreen;

    k && /mac os x 10_5/i.test(l) && (_ = !1, k = !1);
    var N = void 0 !== w.webkitRequestFullScreen,
        A = void 0 !== w.mozRequestFullScreen,
        L = void 0 !== w.msRequestFullscreen,
        F = N || A || L,
        j = F,
        I = "",
        M = void 0,
        O = void 0,
        D = void 0;
    A ? j = r["default"].mozFullScreenEnabled : L && (j = r["default"].msFullscreenEnabled), h && (k = !1), F && (N ? I = "webkitfullscreenchange" : A ? I = "mozfullscreenchange" : L && (I = "MSFullscreenChange"), n.isFullScreen = M = function M() {
      return A ? r["default"].mozFullScreen : N ? r["default"].webkitIsFullScreen : L ? null !== r["default"].msFullscreenElement : void 0;
    }, n.requestFullScreen = O = function O(e) {
      N ? e.webkitRequestFullScreen() : A ? e.mozRequestFullScreen() : L && e.msRequestFullscreen();
    }, n.cancelFullScreen = D = function D() {
      N ? r["default"].webkitCancelFullScreen() : A ? r["default"].mozCancelFullScreen() : L && r["default"].msExitFullscreen();
    });
    var V = n.HAS_NATIVE_FULLSCREEN = _,
        R = n.HAS_WEBKIT_NATIVE_FULLSCREEN = N,
        H = n.HAS_MOZ_NATIVE_FULLSCREEN = A,
        U = n.HAS_MS_NATIVE_FULLSCREEN = L,
        q = n.HAS_IOS_FULLSCREEN = k,
        B = n.HAS_TRUE_NATIVE_FULLSCREEN = F,
        z = n.HAS_NATIVE_FULLSCREEN_ENABLED = j,
        W = n.FULLSCREEN_EVENT_NAME = I;
    n.isFullScreen = M, n.requestFullScreen = O, n.cancelFullScreen = D, a["default"].Features = a["default"].Features || {}, a["default"].Features.isiPad = d, a["default"].Features.isiPod = c, a["default"].Features.isiPhone = u, a["default"].Features.isiOS = a["default"].Features.isiPhone || a["default"].Features.isiPad, a["default"].Features.isAndroid = f, a["default"].Features.isIE = p, a["default"].Features.isEdge = m, a["default"].Features.isChrome = h, a["default"].Features.isFirefox = v, a["default"].Features.isSafari = g, a["default"].Features.isStockAndroid = y, a["default"].Features.hasMSE = E, a["default"].Features.supportsNativeHLS = C, a["default"].Features.supportsPointerEvents = b, a["default"].Features.supportsPassiveEvent = S, a["default"].Features.hasiOSFullScreen = q, a["default"].Features.hasNativeFullscreen = V, a["default"].Features.hasWebkitNativeFullScreen = R, a["default"].Features.hasMozNativeFullScreen = H, a["default"].Features.hasMsNativeFullScreen = U, a["default"].Features.hasTrueNativeFullScreen = B, a["default"].Features.nativeFullScreenEnabled = z, a["default"].Features.fullScreenEventName = W, a["default"].Features.isFullScreen = M, a["default"].Features.requestFullScreen = O, a["default"].Features.cancelFullScreen = D;
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  26: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function i(e) {
      return new Promise(function (t, n) {
        var o = p["default"].createElement("script");
        o.src = e, o.async = !0, o.onload = function () {
          o.remove(), t();
        }, o.onerror = function () {
          o.remove(), n();
        }, p["default"].head.appendChild(o);
      });
    }

    function r(e) {
      var t = e.getBoundingClientRect(),
          n = f["default"].pageXOffset || p["default"].documentElement.scrollLeft,
          o = f["default"].pageYOffset || p["default"].documentElement.scrollTop;
      return {
        top: t.top + o,
        left: t.left + n
      };
    }

    function a(e, t) {
      y(e, t) ? b(e, t) : E(e, t);
    }

    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
          n = arguments[2];
      e.style.opacity || (e.style.opacity = 1);
      var o = null;
      f["default"].requestAnimationFrame(function i(r) {
        var a = r - (o = o || r),
            s = parseFloat(1 - a / t, 2);
        e.style.opacity = s < 0 ? 0 : s, a > t ? n && "function" == typeof n && n() : f["default"].requestAnimationFrame(i);
      });
    }

    function l(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
          n = arguments[2];
      e.style.opacity || (e.style.opacity = 0);
      var o = null;
      f["default"].requestAnimationFrame(function i(r) {
        var a = r - (o = o || r),
            s = parseFloat(a / t, 2);
        e.style.opacity = s > 1 ? 1 : s, a > t ? n && "function" == typeof n && n() : f["default"].requestAnimationFrame(i);
      });
    }

    function d(e, t) {
      var n = [];
      e = e.parentNode.firstChild;

      do {
        t && !t(e) || n.push(e);
      } while (e = e.nextSibling);

      return n;
    }

    function u(e) {
      return void 0 !== e.getClientRects && "function" === e.getClientRects ? !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) : !(!e.offsetWidth && !e.offsetHeight);
    }

    function c(e, t, n, o) {
      var i = f["default"].XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
          r = "application/x-www-form-urlencoded; charset=UTF-8",
          a = !1,
          s = "*/".concat("*");

      switch (t) {
        case "text":
          r = "text/plain";
          break;

        case "json":
          r = "application/json, text/javascript";
          break;

        case "html":
          r = "text/html";
          break;

        case "xml":
          r = "application/xml, text/xml";
      }

      "application/x-www-form-urlencoded" !== r && (s = r + ", */*; q=0.01"), i && (i.open("GET", e, !0), i.setRequestHeader("Accept", s), i.onreadystatechange = function () {
        if (!a && 4 === i.readyState) if (200 === i.status) {
          a = !0;
          var e = void 0;

          switch (t) {
            case "json":
              e = JSON.parse(i.responseText);
              break;

            case "xml":
              e = i.responseXML;
              break;

            default:
              e = i.responseText;
          }

          n(e);
        } else "function" == typeof o && o(i.status);
      }, i.send());
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = i, n.offset = r, n.toggleClass = a, n.fadeOut = s, n.fadeIn = l, n.siblings = d, n.visible = u, n.ajax = c;
    var f = o(e(3)),
        p = o(e(2)),
        m = o(e(7)),
        h = void 0,
        v = void 0,
        g = void 0;
    "classList" in p["default"].documentElement ? (h = function h(e, t) {
      return void 0 !== e.classList && e.classList.contains(t);
    }, v = function v(e, t) {
      return e.classList.add(t);
    }, g = function g(e, t) {
      return e.classList.remove(t);
    }) : (h = function h(e, t) {
      return new RegExp("\\b" + t + "\\b").test(e.className);
    }, v = function v(e, t) {
      y(e, t) || (e.className += " " + t);
    }, g = function g(e, t) {
      e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "");
    });
    var y = n.hasClass = h,
        E = n.addClass = v,
        b = n.removeClass = g;
    m["default"].Utils = m["default"].Utils || {}, m["default"].Utils.offset = r, m["default"].Utils.hasClass = y, m["default"].Utils.addClass = E, m["default"].Utils.removeClass = b, m["default"].Utils.toggleClass = a, m["default"].Utils.fadeIn = l, m["default"].Utils.fadeOut = s, m["default"].Utils.siblings = d, m["default"].Utils.visible = u, m["default"].Utils.ajax = c, m["default"].Utils.loadScript = i;
  }, {
    2: 2,
    3: 3,
    7: 7
  }],
  27: [function (e, t, n) {
    "use strict";

    function o(e) {
      if ("string" != typeof e) throw new Error("Argument passed must be a string");
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      return e.replace(/[&<>"]/g, function (e) {
        return t[e];
      });
    }

    function i(e, t) {
      var n = this,
          o = arguments,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ("function" != typeof e) throw new Error("First argument must be a function");
      if ("number" != typeof t) throw new Error("Second argument must be a numeric value");
      var r = void 0;
      return function () {
        var a = n,
            s = o,
            l = i && !r;
        clearTimeout(r), r = setTimeout(function () {
          r = null, i || e.apply(a, s);
        }, t), l && e.apply(a, s);
      };
    }

    function r(e) {
      return Object.getOwnPropertyNames(e).length <= 0;
    }

    function a(e, t) {
      var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
          o = {
        d: [],
        w: []
      };
      return (e || "").split(" ").forEach(function (e) {
        var i = e + (t ? "." + t : "");
        i.startsWith(".") ? (o.d.push(i), o.w.push(i)) : o[n.test(e) ? "w" : "d"].push(i);
      }), o.d = o.d.join(" "), o.w = o.w.join(" "), o;
    }

    function s(e, t) {
      if ("string" != typeof e) throw new Error("Event name must be a string");
      var n = e.match(/([a-z]+\.([a-z]+))/i),
          o = {
        target: t
      };
      return null !== n && (e = n[1], o.namespace = n[2]), new window.CustomEvent(e, {
        detail: o
      });
    }

    function l(e, t) {
      return !!(e && t && 2 & e.compareDocumentPosition(t));
    }

    function d(e) {
      return "string" == typeof e;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.escapeHTML = o, n.debounce = i, n.isObjectEmpty = r, n.splitEvents = a, n.createEvent = s, n.isNodeAfter = l, n.isString = d;

    var u = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(7));

    u["default"].Utils = u["default"].Utils || {}, u["default"].Utils.escapeHTML = o, u["default"].Utils.debounce = i, u["default"].Utils.isObjectEmpty = r, u["default"].Utils.splitEvents = a, u["default"].Utils.createEvent = s, u["default"].Utils.isNodeAfter = l, u["default"].Utils.isString = d;
  }, {
    7: 7
  }],
  28: [function (e, t, n) {
    "use strict";

    function o(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = document.createElement("div");
      return t.innerHTML = '<a href="' + (0, u.escapeHTML)(e) + '">x</a>', t.firstChild.href;
    }

    function i(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return e && !t ? a(e) : t;
    }

    function r(e) {
      if ("string" != typeof e) throw new Error("`type` argument must be a string");
      return e && e.indexOf(";") > -1 ? e.substr(0, e.indexOf(";")) : e;
    }

    function a(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");

      for (var t = 0, n = c.length; t < n; t++) {
        var o = c[t](e);
        if (o) return o;
      }

      var i = l(s(e)),
          r = "video/mp4";
      return i && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(i) ? r = "video/" + i : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) && (r = "audio/" + i)), r;
    }

    function s(e) {
      if ("string" != typeof e) throw new Error("`url` argument must be a string");
      var t = e.split("?")[0].split("\\").pop().split("/").pop();
      return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : "";
    }

    function l(e) {
      if ("string" != typeof e) throw new Error("`extension` argument must be a string");

      switch (e) {
        case "mp4":
        case "m4v":
          return "mp4";

        case "webm":
        case "webma":
        case "webmv":
          return "webm";

        case "ogg":
        case "oga":
        case "ogv":
          return "ogg";

        default:
          return e;
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.typeChecks = void 0, n.absolutizeUrl = o, n.formatType = i, n.getMimeFromType = r, n.getTypeFromFile = a, n.getExtension = s, n.normalizeExtension = l;

    var d = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(7)),
        u = e(27),
        c = n.typeChecks = [];

    d["default"].Utils = d["default"].Utils || {}, d["default"].Utils.typeChecks = c, d["default"].Utils.absolutizeUrl = o, d["default"].Utils.formatType = i, d["default"].Utils.getMimeFromType = r, d["default"].Utils.getTypeFromFile = a, d["default"].Utils.getExtension = s, d["default"].Utils.normalizeExtension = l;
  }, {
    27: 27,
    7: 7
  }],
  29: [function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = o(e(2)),
        r = o(e(4));

    if ([Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
      e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function value() {
          this.parentNode.removeChild(this);
        }
      });
    }), function () {
      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = i["default"].createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      }

      if ("function" == typeof window.CustomEvent) return !1;
      e.prototype = window.Event.prototype, window.CustomEvent = e;
    }(), "function" != typeof Object.assign && (Object.assign = function (e) {
      if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");

      for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
        var i = arguments[n];
        if (null !== i) for (var r in i) {
          Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
      }

      return t;
    }), String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
      return t = t || 0, this.substr(t, e.length) === e;
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; --n >= 0 && t.item(n) !== this;) {
        ;
      }

      return n > -1;
    }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
      var t = (this.document || this.ownerDocument).querySelectorAll(e),
          n = void 0,
          o = this;

      do {
        for (n = t.length; --n >= 0 && t.item(n) !== o;) {
          ;
        }
      } while (n < 0 && (o = o.parentElement));

      return o;
    }), function () {
      for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
      }

      window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        var n = new Date().getTime(),
            o = Math.max(0, 16 - (n - e)),
            i = window.setTimeout(function () {
          t(n + o);
        }, o);
        return e = n + o, i;
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e);
      });
    }(), /firefox/i.test(navigator.userAgent)) {
      var a = window.getComputedStyle;

      window.getComputedStyle = function (e, t) {
        var n = a(e, t);
        return null === n ? {
          getPropertyValue: function getPropertyValue() {}
        } : n;
      };
    }

    window.Promise || (window.Promise = r["default"]), function (e) {
      e && e.prototype && null === e.prototype.children && Object.defineProperty(e.prototype, "children", {
        get: function get() {
          for (var e = 0, t = void 0, n = this.childNodes, o = []; t = n[e++];) {
            1 === t.nodeType && o.push(t);
          }

          return o;
        }
      });
    }(window.Node || window.Element);
  }, {
    2: 2,
    4: 4
  }],
  30: [function (e, t, n) {
    "use strict";

    function o() {
      return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0);
    }

    function i(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
          r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "hh:mm:ss";
      e = !e || "number" != typeof e || e < 0 ? 0 : e;
      var s = Math.round(.066666 * i),
          l = Math.round(i),
          d = 24 * Math.round(3600 * i),
          u = Math.round(600 * i),
          c = o(i) ? ";" : ":",
          f = void 0,
          p = void 0,
          m = void 0,
          h = void 0,
          v = Math.round(e * i);

      if (o(i)) {
        v < 0 && (v = d + v);
        var g = (v %= d) % u;
        v += 9 * s * Math.floor(v / u), g > s && (v += s * Math.floor((g - s) / Math.round(60 * l - s)));
        var y = Math.floor(v / l);
        f = Math.floor(Math.floor(y / 60) / 60), p = Math.floor(y / 60) % 60, m = n ? y % 60 : Math.floor(v / l % 60).toFixed(r);
      } else f = Math.floor(e / 3600) % 24, p = Math.floor(e / 60) % 60, m = n ? Math.floor(e % 60) : Math.floor(e % 60).toFixed(r);

      f = f <= 0 ? 0 : f, p = p <= 0 ? 0 : p, m = 60 === (m = m <= 0 ? 0 : m) ? 0 : m, p = 60 === p ? 0 : p;

      for (var E = a.split(":"), b = {}, S = 0, x = E.length; S < x; ++S) {
        for (var w = "", P = 0, T = E[S].length; P < T; P++) {
          w.indexOf(E[S][P]) < 0 && (w += E[S][P]);
        }

        ~["f", "s", "m", "h"].indexOf(w) && (b[w] = E[S].length);
      }

      var C = t || f > 0 ? (f < 10 && b.h > 1 ? "0" + f : f) + ":" : "";
      return C += (p < 10 && b.m > 1 ? "0" + p : p) + ":", C += "" + (m < 10 && b.s > 1 ? "0" + m : m), n && (C += (h = (h = (v % l).toFixed(0)) <= 0 ? 0 : h) < 10 && b.f ? c + "0" + h : "" + c + h), C;
    }

    function r(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
      if ("string" != typeof e) throw new TypeError("Time must be a string");
      if (e.indexOf(";") > 0 && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
      var n = e.split(":"),
          i = void 0,
          r = 0,
          a = 0,
          s = 0,
          l = 0,
          d = 0,
          u = Math.round(.066666 * t),
          c = Math.round(t),
          f = 3600 * c,
          p = 60 * c;

      switch (n.length) {
        default:
        case 1:
          s = parseInt(n[0], 10);
          break;

        case 2:
          a = parseInt(n[0], 10), s = parseInt(n[1], 10);
          break;

        case 3:
          r = parseInt(n[0], 10), a = parseInt(n[1], 10), s = parseInt(n[2], 10);
          break;

        case 4:
          r = parseInt(n[0], 10), a = parseInt(n[1], 10), s = parseInt(n[2], 10), l = parseInt(n[3], 10);
      }

      return i = o(t) ? f * r + p * a + c * s + l - u * ((d = 60 * r + a) - Math.floor(d / 10)) : (f * r + p * a + t * s + l) / t, parseFloat(i.toFixed(3));
    }

    function a(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
      e = !e || "number" != typeof e || e < 0 ? 0 : e;

      for (var o = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [[Math.floor((e % 1 * n).toFixed(3)), "f"], [r, "s"], [i, "m"], [o, "h"]], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = a.length; p < m; p++) {
        if (~s.indexOf(a[p][1])) f = !0;else if (f) {
          for (var h = !1, v = p; v < m; v++) {
            if (a[v][0] > 0) {
              h = !0;
              break;
            }
          }

          if (!h) break;
          l || (s = c + s), s = a[p][1] + u + s, l && (s = a[p][1] + s), c = a[p][1];
        }
      }

      t.timeFormat = s;
    }

    function s(e) {
      if ("string" != typeof e) throw new TypeError("Argument must be a string value");

      for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, o = 1, i = 0, r = (e = e.split(":").reverse()).length; i < r; i++) {
        o = 1, i > 0 && (o = Math.pow(60, i)), n += Number(e[i]) * o;
      }

      return Number(n.toFixed(t));
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.isDropFrame = o, n.secondsToTimeCode = i, n.timeCodeToSeconds = r, n.calculateTimeFormat = a, n.convertSMPTEtoSeconds = s;

    var l = function (e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }(e(7));

    l["default"].Utils = l["default"].Utils || {}, l["default"].Utils.secondsToTimeCode = i, l["default"].Utils.timeCodeToSeconds = r, l["default"].Utils.calculateTimeFormat = a, l["default"].Utils.convertSMPTEtoSeconds = s;
  }, {
    7: 7
  }]
}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/js/plugins.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\projects\hillel\blog\resources\js\main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! D:\projects\hillel\blog\resources\js\plugins.js */"./resources/js/plugins.js");


/***/ })

/******/ });