/**
 * @file Tableau custom utility functions.
 *
 * @namespace Tabia.util
 */
/* eslint-disable */

var Tabia = window.Tabia || {};

/**
 * Tabia.util namespace, passed as argument below and named "util"
 * defined as an IIFE. Protects against global pollution, etc.
 */
(function (util) {

  // Private variables.
  var ua = window.UAParser();

  // Tabia.util.log is deprecated.
  util.log = function () {
    throw new Error('Tabia.util.log is deprecated. Use Tabia.log instead.');
  };

  /**
   * Wait for the result of test; call then or onTimeout
   * - If {function} test returns truthy, run {function} then
   * - On timeout, run {function} onTimeout
   *
   * @memberof Tabia.util
   *
   * @param {function} test
   * @param {function} then
   * @param {function} onTimeout
   * @param {object} options
   *   - waitInterval {number} milliseconds between test calls
   *   - waitTimeout {number} milliseconds before timing out
   */
  util.waitFor = function (test, then, onTimeout, options) {
    var _this = this,
      expired;

    // Provide default options
    options = _.extend({
      waitInterval: 250,
      waitTimeout: 10000
    }, options);

    test.startedAt = test.startedAt || new Date().getTime();
    expired = new Date().getTime() - test.startedAt > options.waitTimeout;

    window.clearTimeout(test.timeoutId);

    if (expired) {
      if (onTimeout) {
        onTimeout.call(_this);
      }
    }
    else if (test()) {
      then.call(_this);
    }
    else {
      test.timeoutId = window.setTimeout(function () {
        _this.waitFor(test, then, onTimeout, options);
      }, options.waitInterval);
    }
  };

  /**
   * Get a shorter string with ellipses if necessary.
   *
   * @memberof Tabia.util
   *
   * @param {string} stringVal
   *   String to operate on.
   * @param {int} lengthNum
   *   Numer of max characters.
   *
   * @return string
   *   Shorter string.
   */
  util.substringNice = function (stringVal, lengthNum) {
    return (stringVal.length > lengthNum) ? stringVal.substr(0, lengthNum - 1) + '...' : stringVal;
  };


  /**
   * Given a Brightcove video object, return a sorted list of downloadable
   * (non-streaming) renditions, sorted from largest filesize to smallest.
   *
   * @memberof Tabia.util
   *
   * @param {object} video
   *   Brightcove video object
   *
   * @return {array}
   *   Sorted array of rendition objects
   */
  util.brightcoveSortRenditions = function (video) {
    var sources = video.sources,
      renditions = [];

    // Handle rendition sorting.
    for (var i = 0, len = sources.length; i < len; i++) {
      if (sources[i].container === 'MP4' && sources[i].src) {
        renditions.push(sources[i]);
      }
    }

    renditions.sort(function (a, b) {
      return b.size - a.size;
    });

    return renditions;
  };


  /**
   * Given a Brightcove video object, return a video length string compatible
   * with what we use in Drupal, of HMS format.
   *
   * @memberof Tabia.util
   *
   * @param {object} video
   *   Brightcove video object
   *
   * @param {format} string
   *   HMS string format
   *
   * @return {string}
   *   HMS field formatted string.
   */
  util.brightcoveVideoLength = function (video, format) {
    var length,
      hours = 0,
      minutes,
      seconds;

    // Duration in seconds.
    length = video.duration;
    // In minutes
    minutes = Math.floor(length / 60);

    // Account for hours
    if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      minutes = (minutes - (60 * hours));
    }
    seconds = Math.floor(length - ((hours * 3600) + (minutes * 60)));

    // Append a leading 0 to minutes and seconds if necessary
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    if (!format) {
      length = String(hours) + ':' + String(minutes) + ':' + String(seconds);
    }

    switch (format) {
      case 'h:mm:ss':
        length = String(hours) + ':' + String(minutes) + ':' + String(seconds);
        break;
      case 'h:mm':
        length = String(hours) + ':' + String(minutes);
        break;
    }

    return length;
  };


  /**
   * Handle URLs in JS.
   * This does not depend on jQuery so it is not namespaced.
   *
   * @memberof Tabia.util
   */
  util.parseUrl = function (url) {
    var a = document.createElement('a');
    a.href = url || window.location;
    return {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function () {
        var ret = {},
          seg = a.search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split('=');
          ret[s[0]] = s[1];
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash.replace('#', ''),
      path: a.pathname.replace(/^([^\/])/, '/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
      segments: a.pathname.replace(/^\//, '').split('/')
    };
  };


  /**
   * Test a string for just alphanumeric with a few special characters.
   *
   * @memberof Tabia.util
   *
   * @param {string} theString
   *
   * @return {boolean}
   */
  util.isAlphaPlus = function (theString) {
    var regExp = /^[ A-Za-z0-9_.-]*$/;
    return (theString.match(regExp));
  };


  /**
   * Check if the value is numeric.
   *
   * Copied from: http://phpjs.org/functions/is_numeric
   * Obsolete as of jQuery 3.0
   *
   * @memberof Tabia.util
   */
  util.isNumeric = function (mixed) {
    return (typeof mixed === 'number' || typeof mixed === 'string') && mixed !== '' && !isNaN(mixed);
  };


  /**
   * Borrowing Google's async js for inserting js libraries.
   *
   * @memberof Tabia.util
   */
  util.insertScriptEl = function (scriptUri) {
    var tag = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = scriptUri;
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };


  /**
   * Return URL parameter value or null.
   *
   * @memberof Tabia.util
   *
   * @param {string} name
   * @param {string} url (Optional)
   *
   * @return {string|null}
   */
  util.getUrlParameter = function (name, url) {
    url = (typeof url !== 'undefined') ? url : location.href;
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null;
  };


  /**
   * Compare semantic verions.
   * https://gist.github.com/cowboy/566233
   *
   * @memberof Tabia.util
   */
  util.isSemVer = (function () {
    var a = /^(<|>|[=!<>]=)?\s*(\d+(?:\.\d+){0,2})([a-z][a-z0-9\-]*)?$/i;

    function b(e, c) {
      var d = (e + "").match(a);
      return d ? (c ? (d[1] || "==") : "") + '"' + (d[2] + ".0.0").match(/\d+(?:\.\d+){0,2}/)[0].replace(/(?:^|\.)(\d+)/g, function (g, f) {
        return Array(9 - f.length).join(0) + f
      }) + (d[3] || "~") + '"' : (c ? "==0" : 1)
    }

    return function (e) {
      e = b(e);
      for (var c, d = 1; c = arguments[d++];) {
        if (!(new Function("return " + e + b(c, 1)))()) {
          return false
        }
      }
      return true
    }
  })();


  /**
   * Creates a random hash value with a small numeric seed.
   *
   * @memberof Tabia.util
   *
   * @param {number} s
   *
   * @return {string}
   */
  util.quickHash = function (s) {
    if (typeof(s) === 'number' && s === parseInt(s, 10)) {
      s = Array(s + 1).join('x');
    }
    return s.replace(/x/g, function () {
      var n = Math.round(Math.random() * 61) + 48;
      n = n > 57 ? (n + 7 > 90 ? n + 13 : n + 7) : n;
      return String.fromCharCode(n);
    });
  };


  /**
   * Given a number or string, parses out the number and creates a "pretty"
   * rounded version.
   *
   * @memberof Tabia.util
   *
   * @param {number|string}
   *   Raw string or number to parse
   *
   * @return {bbject}
   *   Information about the passed number. Includes...
   *   {number} number - cleaned up integer.
   *   {string} pretty - "pretty" formated number.
   *   {number} digits - number of digets.
   */
  util.parseCount = function (raw) {
    var number = parseInt(raw, 10) > 0 ? parseInt(raw, 10) : 0,
      count = {
        number: number,
        pretty: number.toString(),
        digits: number.toString().length
      };

    if (count.digits > 3 && count.digits < 7) {
      count.pretty = Math.floor(number / 100) / 10 + 'k';
    } else if (count.digits >= 7) {
      count.pretty = Math.floor(number / 100000) / 10 + 'm';
    }
    return count;
  };


  /**
   * Case insensitive string comparison.
   *
   * @memberof Tabia.util
   *
   * @param {string} a
   * @param {string} b
   *
   * @return {boolean}
   */
  util.textEqual = function (a, b) {
    return a.toUpperCase() === b.toUpperCase();
  };


  /**
   * Access an object property by string.
   *
   * @memberof Tabia.util
   *
   * @param  {object} obj
   * @param  {string} lineage
   *
   * @return {mixed}
   *   Property referred to in string.
   */
  util.stringProperty = function (obj, lineage) {
    var arr = lineage.split('.'), p;
    while (arr.length) {
      p = arr.shift();
      // @note IE8 doesn't provide `hasOwnProperty` for host objects, e.g.,
      //     `window`. This method works around that limitation and provides
      //     cross-browser support.
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
        obj = obj[p];
      }
      else {
        return false;
      }
    }
    return obj;
  };


  /**
   * Set selected option.
   *
   * @memberof Tabia.util
   *
   * @param {Element} $element
   *   jQuery DOM element <select> to set.
   * @param {string} value
   *   Text value to look for.
   *
   * @return {boolean}
   */
  util.setMatchedSelect = function (element, value) {
    var selectedElm = _.find(element.querySelectorAll('option'), function (optionElm) {
      // Check for matching option (both text and value).
      return Tabia.util.textEqual(optionElm.text, value) || Tabia.util.textEqual(optionElm.value, value);
    });
    if (selectedElm) {
      // Set correct option.
      element.value = selectedElm.value;
      // Return match success.
      if (selectedElm.value !== '_none' && selectedElm.value !== '') {
        return true;
      }
    }
    // Few ways to fail.
    return false;
  };


  /**
   * Checks whether a given element is visible in the viewport.
   *
   * @memberof Tabia.util
   *
   * @param {Element} $element
   *   jQuery DOM element to check.
   *
   * @return {boolean}
   */
  util.isElementInViewPort = function (element) {
    var bounds,
      rect,
      visible;

    // Break out early if element does not exist.
    if (!element.length) {
      return false;
    }

    bounds = element[0].getBoundingClientRect();
    rect = {
      left: bounds.left,
      top: bounds.top,
      right: bounds.right,
      bottom: bounds.bottom,
      width: "width" in bounds ? bounds.width : bounds.right - bounds.left,
      height: "height" in bounds ? bounds.height : bounds.bottom - bounds.top
    };
    visible = element.is(":visible");

    return (
      visible &&
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };


  /**
   * Get language of page with default fallback.
   *
   * @memberof Tabia.util
   *
   * @param {boolean} langCode
   *   Return language code not URL prefix.
   *
   * @return {string}
   */
  util.pageLang = function (langCode) {
    var settings = Drupal.settings.dataLayer,
      prefix = Drupal.settings.pathPrefix,
      thisLang;

    // Portable sanity.
    if (!settings) return '';

    // Find language code from prefix.
    if (langCode) {
      thisLang = _.findWhere(settings.languages, {prefix: prefix});
      return thisLang ? thisLang.language : '';
    }

    return prefix.length ? prefix.replace('/', '') : 'en-us';
  };


  /**
   * GA tracking.
   *
   * @memberof Tabia.util
   *
   * @param {string} type
   *   Category of tracking, eg: video, personalize.
   * @param {string} action
   *   User interaction or name of experient.
   * @param {string} variation
   *   Event label or experiment variation.
   * @param {boolean} nonInteractive
   *   Passive events must pass true.
   */
  util.trackGA = function (type, action, label, nonInteractive) {
    var option = {};

    if (nonInteractive) {
      option.nonInteraction = true;
    }

    if (typeof ga === 'function') {
      ga('send', 'event', type, action, label, false, option);
    }
    else {
      Tabia.warning('Event tracking not added');
    }
  };


  /**
   * Reach nested data object properties via string (Derpal JSON).
   *
   * https://gist.github.com/doublejosh/f63e28a24ba9a9d9d787b46a6d19e834
   *
   * @memberof Tabia.util
   *
   * @param {object} obj
   * @param {string} desc
   *
   * @return {mixed}
   */
  util.strProp = function (obj, desc) {
    var arr = desc.split('.');
    while (arr.length && (obj = obj[arr.shift()])) ;
    return obj;
  };


  /**
   * Try properties against object and use first available value.
   *
   * @memberof Tabia.util
   *
   * @param {array} properties
   * @param {object} obj
   *
   * @return {string|boolean}
   */
  util.firstObj = function (properties, obj) {
    var prop = _.first(_.intersection(properties, _.keys(obj)));
    return (prop in obj) ? obj[prop] : false;
  };


  /**
   * Allow client-side object overrides via cookie, eg: db_company.
   *
   * @memberof Tabia.util
   *
   * @param {object} object
   * @param {string} cookie_name
   */
  util.cookieOverride = function (object, cookieName) {
    var cookie;
    if (typeof $.cookie !== 'function') {
      return;
    }
    try {
      cookie = cookie = $.cookie(cookieName);
      if (cookie) {
        Tabia.debug('Cookie override in effect: ' + cookieName, {data: cookie});
        $.extend(object, JSON.parse(cookie));
      }
    }
    catch (error) {
      Tabia.debug('error getting ' + cookieName + ' cookie (as JSON)', {data: {error: error}});
    }
  };


  /**
   * Base64 encoder function.
   * http://phpjs.org/functions/base64_encode/
   *
   * @memberof Tabia.util
   */
  util.base64Encode = function (data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];
    if (!data) {
      return data
    }
    do {
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
    } while (i < data.length);
    enc = tmp_arr.join('');
    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
  };

  /**
   * Set a Drupal-style message on the client-side.
   *
   * @memberof Tabia.util
   *
   * @param {string} message
   * @param {object} options
   */
  util.setMessage = function (message, options) {
    var $messagesElement = $('<div class="messages"><div class="content-container"><ul></ul></div></div>'),
      modifierClass,
      $element;

    // Fill in some default options.
    options = _.extend({type: 'notice'}, options);

    // Get the messages element by its CSS modifier class.
    modifierClass = 'messages--' + options.type;
    $element = $('.' + modifierClass);

    // Grab existing messages container or create a new one and append to DOM.
    if (!$element.length) {
      $element = $messagesElement.addClass(modifierClass).insertAfter($('#main-content'));
    }

    // Append the message if it doesn't already exist.
    if ($element.html().indexOf(message) === -1) {
      $element.find('ul').append($('<li>').html(message));
    }
  };

  /**
   * Test for 32-bit user.
   */
  util.is32bit = function () {
    return !util.is64bit() && !util.isMac() && !util.isLinux();
  };

  /**
   * Test for 64-bit user. NOTE: Macs don't send CPU.
   *
   * @memberof Tabia.util
   *
   * @return {boolean}
   *   If detected UA is 64-bit
   */
  util.is64bit = function () {
    var cpuList = ['amd64', 'ia64', 'irix64', 'mips64', 'sparc64'];
    if ((typeof ua.cpu.architecture === 'string') && _.contains(cpuList, ua.cpu.architecture)) return true;
    else return false;
  };


  /**
   * Test for mac user.
   *
   * @memberof Tabia.util
   *
   * @return {boolean}
   *   If detected UA is Mac OS X
   */
  util.isMac = function () {
    var osList = ['Mac OS', 'Mac OS X'];
    return _.isString(ua.os.name) && _.contains(osList, ua.os.name);
  };

  /**
   * Test for linux user.
   *
   * @memberof Tabia.util
   *
   * @return {boolean}
   *   If detected UA is of a Linux based or derivative operating system.
   */
  util.isLinux = function () {
    // See https://github.com/faisalman/ua-parser-js for full list of values.
    var osList = ['Arch', 'CentOS', 'Fedora', 'FreeBSD', 'Debian', 'DragonFly', 'Gentoo', 'GNU',
      'Linux', 'Mageia', 'Mandriva', 'Mint', 'NetBSD', 'OpenBSD', 'PC-BSD', 'PCLinuxOS', 'RedHat',
      'Slackware', 'SUSE', 'Ubuntu', 'VectorLinux', 'Zenwalk'];
    return _.isString(ua.os.name) && _.contains(osList, ua.os.name);
  };

  /**
   * Mimic using remote sources by resolving value via promise, via mapper.
   *
   * @param {string} value
   *   Value to resolve via Promise, though callback.
   * @param {Function} callback
   *   Mapping callback must be synchronous and return a value (optional).
   *
   * @return {Promise}
   */
  util.mapResolve = function (value, callback) {
    var def = $.Deferred();
    callback = callback || _.identity;
    def.resolve(callback(value));
    return def.promise();
  };


  /**
   * Find the path without a language prefix (includes root slash).
   *
   * @param {string} url
   *   Optional URL param, default is current.
   *
   * @return {string}
   */
  util.neutralPath = function (url) {
    var langPrefix = Drupal.settings.pathPrefix,
      path = Tabia.util.parseUrl(url).path;

    // Strip off the language prefix if present.
    return (langPrefix) ? '/' + path.split(langPrefix)[1] : path;
  };

  /**
   * Load HTML using $.ajax() and return a jQuery Deferred which resolves to an
   * UnderscoreJS Template.
   *
   * @param url
   *
   * @return {object} Deferred
   */
  util.getUnderscoreTemplate = function (url) {
    var deferred = new $.Deferred();

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'html',
      success: function (html) {
        deferred.resolve(_.template(html));
      },
      error: function (jqXHR, textStatus) {
        deferred.reject(textStatus);
      }
    });

    return deferred;
  };

  /**
   * Retrieve the Google Analytics tracker clientId of the configured tracker.
   *
   * @param callback
   *   A callback function that is called with the clientId as a single param.
   */
  util.getGoogleAnalyticsClientId = function (callback) {
    // Wait until the getAll method on the global ga object is available.
    Tabia.util.waitFor(
      // waitFor tester.
      function waitForGaGetAllMethod() {
        return (typeof window.ga !== 'undefined' && typeof window.ga.getAll === 'function');
      },
      // On success, then...
      function attachGoogleAnalyticsFormInfo() {
        var trackers = ga.getAll(),
          configuredTrackerId = Drupal.settings.tableauEloqua.gaTrackId,
          i;

        if (!trackers.length || !configuredTrackerId) {
          return '';
        }

        // We may have multiple trackers sending information to various properties, we only care about
        // the configured one via admin settings.
        for (i = 0; i < trackers.length; i++) {
          if (trackers[i].get('trackingId') === configuredTrackerId) {
            callback(trackers[i].get('clientId'));
            break;
          }
        }
      },
      // On timeout.
      function noGaGetAllMethod() {
        Tabia.warning('GA Client ID populate fail');
      },
      // Timing settings
      {
        'waitTimeout': 20000
      }
    );
  };

  /**
   * Compare product versions.
   *
   * @param a
   *   A version number to compare of the type MAJOR.MINOR.PATCH.
   * @param b
   *   A version number to compare against of the type MAJOR.MINOR.PATCH.
   * @return number
   *   0: versions are equal
   *   1: b > a
   *   -1: a < b
   */
  util.compareSemVer = function (a, b) {
    // Split our semantic version numbers.
    var pa = a.split('.'),
      pb = b.split('.'),
      na, nb;

    for (var i = 0; i < 3; i++) {
      // Convert to numbers.
      na = Number(pa[i]);
      nb = Number(pb[i]);

      if (na > nb) {
        return 1;
      }
      if (nb > na) {
        return -1;
      }
      if (!isNaN(na) && isNaN(nb)) {
        return 1;
      }
      if (isNaN(na) && !isNaN(nb)) {
        return -1;
      }
    }

    return 0;
  };

})(Tabia.util = {});
