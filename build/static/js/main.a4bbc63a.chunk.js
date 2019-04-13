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
        o = (t(24), t(5)),
        i = t(6),
        r = t(8),
        c = t(7),
        l = t(9),
        s = t(2),
        u = t(3),
        d = t(33),
        f = t(34),
        m = t(35);
      function h() {
        var n = Object(s.a)([
          "\n  background-color: #000000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      var p = u.a.div(h()),
        g = function(n) {
          return a.d.createElement(p, null, n.children);
        };
      function b() {
        var n = Object(s.a)([
          '\n  @keyframes move-background {\n    from {\n      transform: scale(1) rotate(0);\n    }\n    to {\n      transform: scale(1.33) rotate(360deg);\n    }\n  }\n  @keyframes fadeinout {\n    0% {\n      opacity: 0;\n    }\n    10% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  * {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-position: center;\n  }\n  .moving {\n  background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    animation: move-background 400s linear infinite,\n      fadeinout 35s linear infinite;\n    transform-origin: 50% 50%;\n    opacity: 0;\n  }\n  .static-stars {\n    background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    transform: scaleX(-1);\n  }\n'
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      var v = u.a.div(b(), "/build", "/build"),
        y = function() {
          return a.d.createElement(
            v,
            null,
            a.d.createElement("div", { class: "moving" }),
            a.d.createElement("div", { class: "static-stars" })
          );
        };
      function k() {
        var n = Object(s.a)([
          '\n  @keyframes scroll-right {\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(200%);\n    }\n  }\n  .cloud {\n  background: transparent url("',
          '/img/clouds.png");\n  background-repeat: no-repeat;\n    z-index: 3;\n    position: absolute;\n    background-size: contain;\n    top: 20%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    animation: scroll-right 1000s linear infinite;\n  }\n'
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      var w = u.a.div(k(), "/build"),
        E = function() {
          return a.d.createElement(
            w,
            null,
            a.d.createElement("div", { class: "cloud" })
          );
        };
      function x() {
        var n = Object(s.a)([
          "\n  position: fixed;\n  bottom: 1rem;\n  left: 0;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  font-size: 1.4rem;\n"
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      var j = u.a.div(x()),
        O = (function(n) {
          function e(n) {
            var t;
            return (
              Object(o.a)(this, e),
              ((t = Object(r.a)(this, Object(c.a)(e).call(this, n))).state = {
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
            Object(i.a)(e, [
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
                    j,
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
        z = t(32);
      function M() {
        var n = Object(s.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  font-size: 1.6rem;\n  display: flex;\n  z-index: 1001;\n  padding: 1rem 0;\n\n  a {\n    flex: 1;\n    color: #ffffff;\n    text-decoration: underline;\n  }\n\n  a:hover,\n  a:active {\n    text-decoration: none;\n    color: #ffffff;\n  }\n"
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      var _ = u.a.nav(M()),
        q = (function(n) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    _,
                    null,
                    a.d.createElement(z.a, { to: "/" }, "Home"),
                    a.d.createElement(z.a, { to: "/ask" }, "AskMo"),
                    a.d.createElement(z.a, { to: "/gallery" }, "Gallery"),
                    a.d.createElement(z.a, { to: "/about" }, "About"),
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
        var n = Object(s.a)([
          "\n  opacity: 0;\n\n  svg {\n    height: 80px;\n    width: 300px;\n    /* margin-bottom: -8px; */\n  }\n"
        ]);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      var I = u.a.div(N()),
        S = function() {
          return a.d.createElement(
            I,
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
        A = (function(n) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
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
      function W() {
        var n = Object(s.a)([
          "\n  position: fixed;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  top: 1rem;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  .ask {\n    opacity: 0;\n  }\n  .ask__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n  }\n  .ask__tagline {\n    animation: fadein 2s ease-in 1.5s;\n    animation-fill-mode: forwards;\n  }\n  .ask__form {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n  }\n"
        ]);
        return (
          (W = function() {
            return n;
          }),
          n
        );
      }
      var C = [
          {
            question: "Why are you asking this question again?",
            choices: null
          },
          { question: "What's your sex?", choices: ["Male", "Female"] },
          {
            question: "So are you sure want Mo to answer?",
            choices: ["Yes, I'm sure", "Acutally, maybe not"]
          },
          {
            question: "Before we continue, click this button",
            choices: ["Just a harmless button"]
          },
          {
            question: "What was the last thing you saw before this question?",
            choices: null
          },
          {
            question: "What was the last thing you ate?  Just checking",
            choices: null
          }
        ],
        X = u.a.div(W()),
        D = (function(n) {
          function e(n) {
            var t;
            return (
              Object(o.a)(this, e),
              ((t = Object(r.a)(this, Object(c.a)(e).call(this, n))).state = {
                index: 0,
                questions: C
              }),
              t
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  (document.title = "Ask - Infinite Mo"),
                    this.setState({
                      questions: (function(n) {
                        for (var e, t, a = n.length; 0 !== a; )
                          (t = Math.floor(Math.random() * a)),
                            (e = n[(a -= 1)]),
                            (n[a] = n[t]),
                            (n[t] = e);
                        return n;
                      })(this.state.questions)
                    });
                }
              },
              {
                key: "generateQuestion",
                value: function(n) {
                  var e = this;
                  n.preventDefault();
                  var t = this.state.questions[this.state.index];
                  return a.d.createElement(
                    "div",
                    null,
                    a.d.createElement(
                      "label",
                      null,
                      t.question,
                      t.choices
                        ? t.choices.map(function(n) {
                            return a.d.createElement(
                              "button",
                              {
                                onClick: function() {
                                  return e.generateQuestion();
                                },
                                type: "button",
                                className: ""
                              },
                              n
                            );
                          })
                        : a.d.createElement("input", {
                            type: "text",
                            className: ""
                          })
                    )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this;
                  return a.d.createElement(
                    X,
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
                        onSubmit: function(e) {
                          return n.generateQuestion(e);
                        }
                      },
                      a.d.createElement(
                        "label",
                        null,
                        "Your query:",
                        a.d.createElement("textarea", null)
                      ),
                      a.d.createElement("button", { type: "submit" }, "Submit")
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function L() {
        var n = Object(s.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  font-size: 1.4rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .article__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n\n  .article__body {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n"
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      var Q = u.a.div(L()),
        Y = (function(n) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
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
      function B() {
        var n = Object(s.a)([
          "\n  @media screen and (min-width: 768px) {\n    height: 617px;\n    width: 450px;\n  }\n\n  height: 320px;\n  width: 233px;\n  overflow: hidden;\n"
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      function J() {
        var n = Object(s.a)([
          "\n  @keyframes zoom {\n    from {\n      transform: scale(1) translateX(0);\n    }\n    to {\n      transform: perspective(200px) scale(40) translateX(62.5px)\n        translateY(5.25px);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    @keyframes zoom {\n      from {\n        transform: scale(1) translateX(0);\n      }\n      to {\n        transform: scale(40) translateX(120.5px) translateY(10px);\n      }\n    }\n  }\n\n  position: relative;\n  z-index: 1001;\n  margin-top: 6rem;\n  display: flex;\n  font-size: 1.4rem;\n  opacity: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: auto;\n  animation: fadein 1s ease-in;\n  animation-fill-mode: forwards;\n\n  button {\n    padding: 2rem;\n    border: 0.3rem solid transparent;\n    border-radius: 5px;\n    font-size: 2rem;\n  }\n  button:hover,\n  button:focus,\n  button:active {\n    border: 0.3rem solid red;\n  }\n\n  img.zoom {\n    animation: zoom 0.75s ease-in;\n    animation-fill-mode: forwards;\n  }\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var H = u.a.div(J()),
        R = u.a.div(B()),
        T = (function(n) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Gallery - Infinite Mo";
                }
              },
              {
                key: "animateZoom",
                value: function() {
                  var n = this;
                  this.setState({ zooming: !0 }),
                    setTimeout(function() {
                      n.setState({ zooming: !1 });
                    }, 800);
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this;
                  return a.d.createElement(
                    H,
                    null,
                    a.d.createElement(
                      R,
                      null,
                      a.d.createElement("img", {
                        className: this.state.zooming ? "zoom" : "",
                        src: "".concat("/build", "/img/mo-warp.png")
                      })
                    ),
                    a.d.createElement(
                      "button",
                      {
                        onClick: function() {
                          return n.animateZoom();
                        },
                        type: "button"
                      },
                      "Next"
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function U() {
        var n = Object(s.a)([
          "\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 2rem;\n  left: 0;\n"
        ]);
        return (
          (U = function() {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = Object(s.a)([
          "\n    @keyframes fadein{\n    from {\n      opacity: 0;\n    }\n    to{\n      opacity: 1;\n    }\n  }\n  \n  color: #ffffff;\n  text-align: center;\n\n\n  .container{\n    display: flex;\n    position: relative;\n  }\n\n  header{\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    h1,h2{\n      color: #ffffff;\n      position: relative;\n      margin: 0;\n      opacity: 0;\n      font-family: 'Aldrich', sans-serif;\n    }\n    .fadein-logo{\n      animation: fadein 2s ease-in 1.5s;\n      animation-fill-mode: forwards; \n    }\n    }\n    h1{\n      font-size: 3rem;\n      animation: fadein 2s ease-in;\n      animation-fill-mode: forwards;\n\n    }\n    h2{\n      font-size: 2rem;\n      animation: fadein 2s ease-in 3s;\n      animation-fill-mode: forwards;\n\n    }\n  }\n"
        ]);
        return (
          (G = function() {
            return n;
          }),
          n
        );
      }
      var Z = u.a.div(G()),
        F = u.a.main(U()),
        P = (function(n) {
          function e() {
            return (
              Object(o.a)(this, e),
              Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, n),
            Object(i.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    Z,
                    null,
                    a.d.createElement(
                      g,
                      null,
                      a.d.createElement(y, null),
                      a.d.createElement(E, null)
                    ),
                    a.d.createElement(
                      d.a,
                      null,
                      a.d.createElement(
                        "div",
                        { className: "container" },
                        a.d.createElement(q, null),
                        a.d.createElement(
                          F,
                          null,
                          a.d.createElement(
                            f.a,
                            null,
                            a.d.createElement(m.a, {
                              exact: !0,
                              path: "/",
                              component: A
                            }),
                            a.d.createElement(m.a, {
                              path: "/about",
                              component: Y
                            }),
                            a.d.createElement(m.a, {
                              path: "/ask",
                              component: D
                            }),
                            a.d.createElement(m.a, {
                              path: "/gallery",
                              component: T
                            })
                          )
                        ),
                        a.d.createElement(O, null)
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a),
        $ = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function K(n, e) {
        navigator.serviceWorker
          .register(n)
          .then(function(n) {
            n.onupdatefound = function() {
              var t = n.installing;
              t.onstatechange = function() {
                "installed" === t.state &&
                  (navigator.serviceWorker.controller
                    ? (console.log("New content is available; please refresh."),
                      e.onUpdate && e.onUpdate(n))
                    : (console.log("Content is cached for offline use."),
                      e.onSuccess && e.onSuccess(n)));
              };
            };
          })
          .catch(function(n) {
            console.error("Error during service worker registration:", n);
          });
      }
      a.d.render(a.d.createElement(P, null), document.getElementById("root")),
        (function(n) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("/build", window.location).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var e = "".concat("/build", "/service-worker.js");
              $
                ? ((function(n, e) {
                    fetch(n)
                      .then(function(t) {
                        404 === t.status ||
                        -1 ===
                          t.headers.get("content-type").indexOf("javascript")
                          ? navigator.serviceWorker.ready.then(function(n) {
                              n.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : K(n, e);
                      })
                      .catch(function() {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(e, n),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ"
                    );
                  }))
                : K(e, n);
            });
          }
        })();
    }
  },
  [[21, 2, 1]]
]);
//# sourceMappingURL=main.a4bbc63a.chunk.js.map
