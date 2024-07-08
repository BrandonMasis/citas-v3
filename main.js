(() => {
  'use strict';
  function t(t, e) {
    if (e.length < t)
      throw new TypeError(
        t +
          ' argument' +
          (t > 1 ? 's' : '') +
          ' required, but only ' +
          e.length +
          ' present'
      );
  }
  function e(t) {
    return (
      (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
      e(t)
    );
  }
  function n(n) {
    t(1, arguments);
    var o = Object.prototype.toString.call(n);
    return n instanceof Date || ('object' === e(n) && '[object Date]' === o)
      ? new Date(n.getTime())
      : 'number' == typeof n || '[object Number]' === o
      ? new Date(n)
      : (('string' != typeof n && '[object String]' !== o) ||
          'undefined' == typeof console ||
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function o(e) {
    t(1, arguments);
    var o = n(e),
      r = o.getMonth();
    return r;
  }
  function r(e) {
    return t(1, arguments), n(e).getFullYear();
  }
  function a(e) {
    t(1, arguments);
    var o = n(e),
      r = o.getMonth();
    return (
      o.setFullYear(o.getFullYear(), r + 1, 0), o.setHours(23, 59, 59, 999), o
    );
  }
  function c(e) {
    t(1, arguments);
    var o = n(e),
      r = o.getDate();
    return r;
  }
  const s = [
      'ene.',
      'feb.',
      'mar.',
      'abr.',
      'may.',
      'jun.',
      'jul.',
      'ago.',
      'sep.',
      'oct.',
      'nov.',
      'dec.',
    ],
    l = new Date();
  let i = s[o(l)],
    u = r(a(l)) - 2e3,
    d = c(a(l));
  const m = document.querySelector('#datesDisplay'),
    f = document.querySelector('#reset-btn');
  let g = localStorage.getItem('appointments')
    ? JSON.parse(localStorage.getItem('appointments'))
    : {};
  if (!localStorage.getItem('appointments'))
    for (let t = 1; t <= d; t++) g[t] = { a: !1, b: !1, c: !1, d: !1, e: !1 };
  function p(t) {
    return s.findIndex((e) => e === t);
  }
  function y() {
    (m.innerHTML = ''),
      (function (t, e) {
        const n = document.querySelector('#datesDisplay'),
          o = c(a(new Date(u + 2e3, p(e))));
        for (let t = 0; t < o; t++) {
          let o = document.createElement('tr');
          o.setAttribute('data-date', t + 1), o.classList.add('visible');
          let r = document.createElement('th');
          (r.textContent = `${t + 1} ${e} ${u}`),
            o.appendChild(r),
            new Date(u + 2e3, p(e), t + 1).getDay();
          const a = ['9:00am', '9:00am', '2:00pm', '2:00pm', '5:00pm'];
          for (let e = 0; e < a.length; e++) {
            let n = document.createElement('td');
            (n.textContent = a[e]),
              n.setAttribute('data-value', String.fromCharCode(97 + e)),
              g[`${t + 1}`] &&
              !0 === g[`${t + 1}`][`${n.getAttribute('data-value')}`]
                ? n.classList.add('marked')
                : n.classList.remove('marked'),
              o.appendChild(n);
          }
          n.appendChild(o);
        }
      })(0, i),
      document.querySelectorAll('td').forEach((t) => {
        t.addEventListener('click', (t) => {
          const e = t.target.parentElement.getAttribute('data-date'),
            n = t.target.getAttribute('data-value');
          (g[e][n] = !g[e][n]), b();
        });
      }),
      document.querySelectorAll('th').forEach((t) => {
        t.addEventListener('click', (t) => {
          const e = g[t.target.parentElement.getAttribute('data-date')],
            n = Object.values(e).every((t) => !0 === t);
          Object.keys(e).forEach((t) => {
            e[t] = !n;
          }),
            b();
        });
      });
  }
  function b() {
    localStorage.setItem('appointments', JSON.stringify(g)), y();
  }
  f.addEventListener('click', function () {
    Object.keys(g).forEach((t) => {
      Object.keys(g[t]).forEach((e) => {
        g[t][e] = !1;
      });
    }),
      localStorage.removeItem('appointments'),
      b();
  }),
    y();
  const S = document.querySelector('#previous-month'),
    h = document.querySelector('#next-month');
  function v() {
    const t = s[o(l)],
      e = r(a(l)) - 2e3,
      n = c(a(l));
    (i = t),
      (u = e),
      (d = n),
      y(),
      (function () {
        const t = { month: i, year: u };
        localStorage.setItem('calendarState', JSON.stringify(t));
      })();
  }
  S.addEventListener('click', () => {
    l.setMonth(l.getMonth() - 1), v();
  }),
    h.addEventListener('click', () => {
      l.setMonth(l.getMonth() + 1), v();
    }),
    (function () {
      const t = localStorage.getItem('calendarState');
      if (t) {
        const e = JSON.parse(t);
        (i = e.month), (u = e.year), y();
      } else {
        const t = s[o(l)],
          e = r(a(l)) - 2e3;
        (i = t), (u = e), y();
      }
    })();
})();
