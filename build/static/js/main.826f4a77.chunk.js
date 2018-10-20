(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    21: function(n, e, t) {
      n.exports = t(31);
    },
    24: function(n, e, t) {},
    31: function(n, e, t) {
      "use strict";
      t.r(e);
      var a = t(0),
        i = (t(24), t(5)),
        r = t(6),
        o = t(8),
        c = t(7),
        l = t(9),
        u = t(2),
        s = t(3),
        d = t(33),
        f = t(35),
        m = t(34);
      function p() {
        var n = Object(u.a)([
          "\n  background-color: #000000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      var h = s.a.div(p()),
        b = function(n) {
          return a.d.createElement(h, null, n.children);
        };
      function v() {
        var n = Object(u.a)([
          '\n  @keyframes move-background {\n    from {\n      transform: scale(1) rotate(0);\n    }\n    to {\n      transform: scale(1.33) rotate(360deg);\n    }\n  }\n  @keyframes fadeinout {\n    0% {\n      opacity: 0;\n    }\n    10% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  * {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-position: center;\n  }\n  .moving {\n  background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    animation: move-background 400s linear infinite,\n      fadeinout 35s linear infinite;\n    transform-origin: 50% 50%;\n    opacity: 0;\n  }\n  .static-stars {\n    background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    transform: scaleX(-1);\n  }\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      var g = s.a.div(v(), "/build", "/build"),
        y = function() {
          return a.d.createElement(
            g,
            null,
            a.d.createElement("div", { class: "moving" }),
            a.d.createElement("div", { class: "static-stars" })
          );
        };
      function k() {
        var n = Object(u.a)([
          '\n  @keyframes scroll-right {\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(200%);\n    }\n  }\n  .cloud {\n  background: transparent url("',
          '/img/clouds.png") no-repeat;\n    z-index: 3;\n    position: absolute;\n    background-size: contain;\n    top: 20%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    animation: scroll-right 1000s linear infinite;\n  }\n'
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      var E = s.a.div(k(), "/build"),
        j = function() {
          return a.d.createElement(
            E,
            null,
            a.d.createElement("div", { class: "cloud" })
          );
        };
      function O() {
        var n = Object(u.a)([
          "\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  font-size: 1.4rem;\n"
        ]);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      var w = s.a.div(O()),
        x = (function(n) {
          function e(n) {
            var t;
            return (
              Object(i.a)(this, e),
              ((t = Object(o.a)(this, Object(c.a)(e).call(this, n))).state = {
                count: parseInt(
                  localStorage.getItem("mo-counter") ||
                    t.getRandomInt(5e9, 9999999999)
                )
              }),
              t.count(),
              t
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "getRandomInt",
                value: function(n, e) {
                  return Math.floor(Math.random() * (e - n + 1)) + n;
                }
              },
              {
                key: "count",
                value: function() {
                  var n = this;
                  setInterval(function() {
                    n.setState({ count: n.state.count + 1 }, function() {
                      localStorage.setItem("mo-counter", n.state.count);
                    });
                  }, 1200);
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    w,
                    null,
                    "Mo has answered ",
                    this.state.count,
                    " questions"
                  );
                }
              }
            ]),
            e
          );
        })(a.a),
        _ = t(32);
      function z() {
        var n = Object(u.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  font-size: 1.6rem;\n  display: flex;\n  z-index: 1001;\n\n  a {\n    flex: 1;\n    color: #ffffff;\n    text-decoration: underline;\n  }\n\n  a:hover,\n  a:active {\n    text-decoration: none;\n    color: #ffffff;\n  }\n"
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      var M = s.a.nav(z()),
        I = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    M,
                    null,
                    a.d.createElement(_.a, { to: "/" }, "Home"),
                    a.d.createElement(_.a, { to: "/ask" }, "AskMo"),
                    a.d.createElement(_.a, { to: "/gallery" }, "Gallery"),
                    a.d.createElement(_.a, { to: "/about" }, "About"),
                    a.d.createElement(
                      "audio",
                      { autoPlay: !0, loop: !0 },
                      a.d.createElement("source", {
                        src: "".concat("/build", "/echo.mp3"),
                        type: "audio/mpeg"
                      }),
                      "Your browser does not support the audio tag."
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function N() {
        var n = Object(u.a)([
          "\n  opacity: 0;\n\n  svg {\n    height: 80px;\n    width: 300px;\n    /* margin-bottom: -8px; */\n  }\n"
        ]);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      var A = s.a.div(N()),
        S = function() {
          return a.d.createElement(
            A,
            { className: "fadein-logo" },
            a.d.createElement(
              "svg",
              {
                class: "logo-header-canvas",
                style: "background:transparent;position:relative;",
                viewBox: "0 0 100 100"
              },
              a.d.createElement(
                "g",
                {
                  style: "stroke:#fff;stroke-opacity:1;fill:#fff;fill-opacity:1"
                },
                a.d.createElement("path", {
                  class: "logo-header-path",
                  d:
                    "M39.213,35.87c-7.814-7.814-20.53-7.814-28.343,0C7.085,39.654,5,44.688,5,50.041s2.085,10.387,5.87,14.171  c3.785,3.785,8.818,5.87,14.172,5.87c5.353,0,10.386-2.085,14.171-5.87L64.04,39.385l0.136-0.128  c5.945-5.945,15.62-5.944,21.565,0.001c2.88,2.881,4.466,6.71,4.466,10.783c0,4.072-1.586,7.903-4.466,10.783  c-2.879,2.879-6.71,4.465-10.782,4.465c-4.074,0-7.902-1.586-10.781-4.465l-5.671-5.653c-0.938-0.937-2.454-0.937-3.392,0  c-0.936,0.938-0.936,2.454,0,3.393l6.067,6.043l0.011-0.001c3.733,3.536,8.603,5.477,13.766,5.477c5.354,0,10.387-2.085,14.171-5.87  C92.916,60.428,95,55.395,95,50.041s-2.084-10.387-5.87-14.171C85.346,32.084,80.313,30,74.959,30c-4.995,0-9.714,1.816-13.352,5.09  l-0.026-0.024L35.824,60.824c-2.881,2.879-6.71,4.465-10.783,4.465c-4.073,0-7.903-1.586-10.783-4.465  c-2.879-2.88-4.466-6.711-4.466-10.785c0-4.073,1.585-7.903,4.466-10.783c5.946-5.945,15.621-5.944,21.566,0.001l5.713,5.722  c0.938,0.935,2.453,0.935,3.392-0.001c0.937-0.937,0.937-2.453,0-3.391L39.213,35.87z"
                })
              )
            )
          );
        },
        D = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Infinite Mo";
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    "header",
                    null,
                    a.d.createElement(S, null),
                    a.d.createElement("h1", null, "Infinite Mo"),
                    a.d.createElement("h2", null, "there's only one")
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function B() {
        var n = Object(u.a)([
          "\n  position: fixed;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  top: 1rem;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  .ask {\n    opacity: 0;\n  }\n  .ask__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n  }\n  .ask__tagline {\n    animation: fadein 2s ease-in 1.5s;\n    animation-fill-mode: forwards;\n  }\n  .ask__form {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n  }\n"
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      var C = s.a.div(B()),
        H = (function(n) {
          function e(n) {
            var t;
            return (
              Object(i.a)(this, e),
              ((t = Object(o.a)(this, Object(c.a)(e).call(this, n))).state = {
                index: 0
              }),
              t
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Ask - Infinite Mo";
                }
              },
              {
                key: "generateQuestion",
                value: function() {
                  return a.d.createElement(
                    "label",
                    null,
                    this.lines[this.state.index],
                    a.d.createElement("input", { type: "text", value: "" })
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this;
                  return a.d.createElement(
                    C,
                    null,
                    a.d.createElement(
                      "h2",
                      { className: "ask ask__title" },
                      "Ask Mo a Question"
                    ),
                    a.d.createElement(
                      "p",
                      { className: "ask ask__tagline" },
                      "He shall answer in kind"
                    ),
                    a.d.createElement(
                      "form",
                      {
                        className: "ask ask__form",
                        onSubmit: function() {
                          return n.generateNewQuestion();
                        }
                      },
                      a.d.createElement(
                        "label",
                        null,
                        "Your query:",
                        a.d.createElement("textarea", null)
                      ),
                      a.d.createElement("button", null, "Submit")
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function L() {
        var n = Object(u.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  font-size: 1.4rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .article__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n\n  .article__body {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n"
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      var Q = s.a.div(L()),
        X = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "About - Infinite Mo";
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    Q,
                    null,
                    a.d.createElement(
                      "article",
                      { className: "article" },
                      a.d.createElement(
                        "h2",
                        { className: "article__title" },
                        "About Mo"
                      ),
                      a.d.createElement(
                        "div",
                        { className: "article__body" },
                        a.d.createElement("p", null, "Mo is all knowing."),
                        a.d.createElement(
                          "p",
                          null,
                          "He has answered many and has answers to all."
                        )
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function q() {
        var n = Object(u.a)([
          "\n  position: relative;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  font-size: 1.4rem;\n"
        ]);
        return (
          (q = function() {
            return n;
          }),
          n
        );
      }
      var G = s.a.div(q()),
        J = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Gallery - Infinite Mo";
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    G,
                    null,
                    a.d.createElement("img", { src: "img/mo.jpg" })
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function R() {
        var n = Object(u.a)([
          "\n    @keyframes fadein{\n    from {\n      opacity: 0;\n    }\n    to{\n      opacity: 1;\n    }\n  }\n  \n  color: #ffffff;\n  text-align: center;\n\n\n  .container{\n    display: flex;\n  }\n\n  header{\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    h1,h2{\n      color: #ffffff;\n      position: relative;\n      margin: 0;\n      opacity: 0;\n      font-family: 'Aldrich', sans-serif;\n    }\n    .fadein-logo{\n      animation: fadein 2s ease-in 1.5s;\n      animation-fill-mode: forwards; \n    }\n    }\n    h1{\n      font-size: 3rem;\n      animation: fadein 2s ease-in;\n      animation-fill-mode: forwards;\n\n    }\n    h2{\n      font-size: 2rem;\n      animation: fadein 2s ease-in 3s;\n      animation-fill-mode: forwards;\n\n    }\n  }\n"
        ]);
        return (
          (R = function() {
            return n;
          }),
          n
        );
      }
      var W = s.a.div(R()),
        Y = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(r.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    W,
                    null,
                    a.d.createElement(
                      b,
                      null,
                      a.d.createElement(y, null),
                      a.d.createElement(j, null)
                    ),
                    a.d.createElement(
                      d.a,
                      null,
                      a.d.createElement(
                        "div",
                        { className: "container" },
                        a.d.createElement(
                          "div",
                          null,
                          a.d.createElement(I, null),
                          a.d.createElement(
                            f.a,
                            null,
                            a.d.createElement(m.a, {
                              exact: !0,
                              path: "/",
                              component: D
                            }),
                            a.d.createElement(m.a, {
                              path: "/about",
                              component: X
                            }),
                            a.d.createElement(m.a, {
                              path: "/ask",
                              component: H
                            }),
                            a.d.createElement(m.a, {
                              path: "/gallery",
                              component: J
                            })
                          )
                        ),
                        a.d.createElement(x, null)
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a.d.render(a.d.createElement(Y, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(n) {
            n.unregister();
          });
    }
  },
  [[21, 2, 1]]
]);
//# sourceMappingURL=main.826f4a77.chunk.js.map
