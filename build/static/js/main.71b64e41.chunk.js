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
        s = t(9),
        l = t(2),
        u = t(3),
        d = t(33),
        f = t(34),
        m = t(35),
        h = null,
        p = function(n) {
          h = n;
        };
      function v() {
        var n = Object(l.a)([
          "\n  background-color: #000000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      var g = u.a.div(v()),
        b = function(n) {
          return a.d.createElement(g, null, n.children);
        };
      function y() {
        var n = Object(l.a)([
          '\n  @keyframes move-background {\n    from {\n      transform: scale(1) rotate(0);\n    }\n    to {\n      transform: scale(1.33) rotate(360deg);\n    }\n  }\n  @keyframes fadeinout {\n    0% {\n      opacity: 0;\n    }\n    10% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n  * {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-position: center;\n  }\n  .moving {\n  background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    animation: move-background 400s linear infinite,\n      fadeinout 35s linear infinite;\n    transform-origin: 50% 50%;\n    opacity: 0;\n  }\n  .static-stars {\n    background: transparent url("',
          '/img/stars.png");\n    background-repeat: no-repeat;\n    background-size: cover;\n    transform: scaleX(-1);\n  }\n'
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      var w = u.a.div(y(), "/build", "/build"),
        k = function() {
          return a.d.createElement(
            w,
            null,
            a.d.createElement("div", { class: "moving" }),
            a.d.createElement("div", { class: "static-stars" })
          );
        };
      function x() {
        var n = Object(l.a)([
          '\n  @keyframes scroll-right {\n    from {\n      transform: translateX(-100%);\n    }\n    to {\n      transform: translateX(200%);\n    }\n  }\n  .cloud {\n  background: transparent url("',
          '/img/clouds.png");\n  background-repeat: no-repeat;\n    z-index: 3;\n    position: absolute;\n    background-size: contain;\n    top: 20%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    animation: scroll-right 1000s linear infinite;\n  }\n'
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      var E = u.a.div(x(), "/build"),
        j = function() {
          return a.d.createElement(
            E,
            null,
            a.d.createElement("div", { class: "cloud" })
          );
        };
      function O() {
        var n = Object(l.a)([
          "\n  position: fixed;\n  bottom: 1rem;\n  left: 0;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  font-size: 1.4rem;\n"
        ]);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      var z = u.a.div(O()),
        _ = (function(n) {
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
            Object(s.a)(e, n),
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
                    z,
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
        q = t(32);
      function M() {
        var n = Object(l.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  font-size: 1.6rem;\n  display: flex;\n  z-index: 1001;\n  padding: 1rem 0;\n\n  a {\n    flex: 1;\n    color: #ffffff;\n    text-decoration: underline;\n  }\n\n  a:hover,\n  a:active {\n    text-decoration: none;\n    color: #ffffff;\n  }\n"
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      var S = u.a.nav(M()),
        I = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, n),
            Object(r.a)(e, [
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    S,
                    null,
                    a.d.createElement(q.a, { to: "/" }, "Home"),
                    a.d.createElement(q.a, { to: "/ask" }, "AskMo"),
                    a.d.createElement(q.a, { to: "/gallery" }, "Gallery"),
                    a.d.createElement(q.a, { to: "/about" }, "About")
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function A() {
        var n = Object(l.a)([
          "\n  opacity: 0;\n\n  svg {\n    height: 80px;\n    width: 300px;\n    /* margin-bottom: -8px; */\n  }\n"
        ]);
        return (
          (A = function() {
            return n;
          }),
          n
        );
      }
      var N = u.a.div(A()),
        C = function() {
          return a.d.createElement(
            N,
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
        };
      function Q() {
        var n = Object(l.a)([
          '\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n\n  button {\n    padding: 2rem 4rem;\n    border: 0.3rem solid transparent;\n    border-radius: 5px;\n    font-size: 2.4rem;\n    font-family: "Aldrich", sans-serif;\n    cursor: pointer;\n    opacity: 0;\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n  }\n\n  button:hover,\n  button:focus,\n  button:active {\n    border: 0.3rem solid red;\n  }\n'
        ]);
        return (
          (Q = function() {
            return n;
          }),
          n
        );
      }
      var W = u.a.div(Q()),
        D = (function(n) {
          function e(n) {
            var t;
            return (
              Object(i.a)(this, e),
              ((t = Object(o.a)(this, Object(c.a)(e).call(this, n))).state = {
                entered: "true" === sessionStorage.getItem("mo-entered")
              }),
              t
            );
          }
          return (
            Object(s.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Infinite Mo";
                }
              },
              {
                key: "handleEnter",
                value: function() {
                  sessionStorage.setItem("mo-entered", "true"),
                    (function() {
                      if (h) {
                        var n = h.play();
                        void 0 !== n && n.catch(function() {});
                      }
                    })(),
                    this.setState({ entered: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this;
                  return this.state.entered
                    ? a.d.createElement(
                        "header",
                        null,
                        a.d.createElement(C, null),
                        a.d.createElement("h1", null, "Infinite Mo"),
                        a.d.createElement("h2", null, "there's only one")
                      )
                    : a.d.createElement(
                        W,
                        null,
                        a.d.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: function() {
                              return n.handleEnter();
                            }
                          },
                          "Enter"
                        )
                      );
                }
              }
            ]),
            e
          );
        })(a.a);
      function R() {
        var n = Object(l.a)([
          '\n  position: fixed;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  top: 1rem;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n\n  .ask {\n    opacity: 0;\n  }\n  .ask__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n  }\n  .ask__tagline {\n    animation: fadein 2s ease-in 1.5s;\n    animation-fill-mode: forwards;\n  }\n  .ask__form {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n  }\n\n  .ask__question {\n    animation: fadein 1s ease-in;\n    animation-fill-mode: forwards;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    max-width: 90%;\n  }\n\n  .ask__choices {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n\n  button {\n    padding: 1rem 2rem;\n    border: 0.3rem solid transparent;\n    border-radius: 5px;\n    font-size: 1.4rem;\n    cursor: pointer;\n  }\n\n  button:hover,\n  button:focus,\n  button:active {\n    border: 0.3rem solid red;\n  }\n\n  textarea,\n  input[type="text"] {\n    width: 100%;\n    min-width: 250px;\n    min-height: 80px;\n    font-size: 1.4rem;\n    padding: 0.5rem;\n  }\n\n  input[type="text"] {\n    min-height: auto;\n  }\n'
        ]);
        return (
          (R = function() {
            return n;
          }),
          n
        );
      }
      var L = [
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
        B = u.a.div(R()),
        H = (function(n) {
          function e(n) {
            var t;
            return (
              Object(i.a)(this, e),
              ((t = Object(o.a)(this, Object(c.a)(e).call(this, n))).state = {
                phase: "query",
                query: "",
                index: 0,
                answer: "",
                questions: L
              }),
              t
            );
          }
          return (
            Object(s.a)(e, n),
            Object(r.a)(e, [
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
                      })(L.concat())
                    });
                }
              },
              {
                key: "handleQuerySubmit",
                value: function(n) {
                  n.preventDefault(),
                    this.state.query.trim() &&
                      this.setState({ phase: "wizard", index: 0, answer: "" });
                }
              },
              {
                key: "advanceQuestion",
                value: function() {
                  var n = this.state.index + 1;
                  n >= this.state.questions.length
                    ? this.setState({ phase: "done", index: n, answer: "" })
                    : this.setState({ index: n, answer: "" });
                }
              },
              {
                key: "handleChoice",
                value: function(n) {
                  this.advanceQuestion();
                }
              },
              {
                key: "handleTextAnswer",
                value: function(n) {
                  n.preventDefault(),
                    this.state.answer.trim() && this.advanceQuestion();
                }
              },
              {
                key: "renderQueryForm",
                value: function() {
                  var n = this;
                  return a.d.createElement(
                    "form",
                    {
                      className: "ask ask__form",
                      onSubmit: function(e) {
                        return n.handleQuerySubmit(e);
                      }
                    },
                    a.d.createElement(
                      "label",
                      null,
                      "Your query:",
                      a.d.createElement("textarea", {
                        value: this.state.query,
                        onChange: function(e) {
                          return n.setState({ query: e.target.value });
                        }
                      })
                    ),
                    a.d.createElement("button", { type: "submit" }, "Submit")
                  );
                }
              },
              {
                key: "renderWizardQuestion",
                value: function() {
                  var n = this,
                    e = this.state.questions[this.state.index];
                  return a.d.createElement(
                    "div",
                    { className: "ask ask__question" },
                    a.d.createElement("p", null, e.question),
                    e.choices
                      ? a.d.createElement(
                          "div",
                          { className: "ask__choices" },
                          e.choices.map(function(e) {
                            return a.d.createElement(
                              "button",
                              {
                                key: e,
                                onClick: function() {
                                  return n.handleChoice(e);
                                },
                                type: "button"
                              },
                              e
                            );
                          })
                        )
                      : a.d.createElement(
                          "form",
                          {
                            onSubmit: function(e) {
                              return n.handleTextAnswer(e);
                            }
                          },
                          a.d.createElement("input", {
                            type: "text",
                            value: this.state.answer,
                            onChange: function(e) {
                              return n.setState({ answer: e.target.value });
                            }
                          }),
                          a.d.createElement(
                            "button",
                            { type: "submit" },
                            "Next"
                          )
                        )
                  );
                }
              },
              {
                key: "renderDone",
                value: function() {
                  return a.d.createElement(
                    "div",
                    { className: "ask ask__question" },
                    a.d.createElement(
                      "p",
                      null,
                      "Mo has received your question: \u201c",
                      this.state.query,
                      "\u201d"
                    ),
                    a.d.createElement("p", null, "He shall answer in kind.")
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    B,
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
                    "query" === this.state.phase && this.renderQueryForm(),
                    "wizard" === this.state.phase &&
                      this.renderWizardQuestion(),
                    "done" === this.state.phase && this.renderDone()
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function J() {
        var n = Object(l.a)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  margin-top: 1rem;\n  display: flex;\n  font-size: 1.4rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .article__title {\n    animation: fadein 2s ease-in;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n\n  .article__body {\n    animation: fadein 2s ease-in 1s;\n    animation-fill-mode: forwards;\n    opacity: 0;\n  }\n"
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var T = u.a.div(J()),
        F = (function(n) {
          function e() {
            return (
              Object(i.a)(this, e),
              Object(o.a)(this, Object(c.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(e, n),
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
                    T,
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
      function U() {
        var n = Object(l.a)([
          "\n  width: 100%;\n  height: 100%;\n  transform-origin: 8% 32%;\n  transition: transform 0.75s ease-in;\n\n  &.zoomed {\n    transform: scale(18);\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    max-width: none;\n    display: block;\n  }\n"
        ]);
        return (
          (U = function() {
            return n;
          }),
          n
        );
      }
      function X() {
        var n = Object(l.a)([
          "\n  transform: rotate(90deg);\n  transform-origin: center center;\n\n  @media screen and (min-width: 768px) {\n    width: 450px;\n    height: 617px;\n  }\n\n  width: 233px;\n  height: 320px;\n"
        ]);
        return (
          (X = function() {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(l.a)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    height: 450px;\n    width: 617px;\n  }\n\n  height: 233px;\n  width: 320px;\n"
        ]);
        return (
          (Y = function() {
            return n;
          }),
          n
        );
      }
      function Z() {
        var n = Object(l.a)([
          "\n  position: relative;\n  z-index: 1001;\n  margin-top: 6rem;\n  display: flex;\n  font-size: 1.4rem;\n  opacity: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: auto;\n  animation: fadein 1s ease-in;\n  animation-fill-mode: forwards;\n\n  button {\n    padding: 2rem;\n    border: 0.3rem solid transparent;\n    border-radius: 5px;\n    font-size: 2rem;\n    cursor: pointer;\n  }\n  button:hover,\n  button:focus,\n  button:active {\n    border: 0.3rem solid red;\n  }\n"
        ]);
        return (
          (Z = function() {
            return n;
          }),
          n
        );
      }
      var G = u.a.div(Z()),
        $ = u.a.div(Y()),
        K = u.a.div(X()),
        P = u.a.div(U()),
        V = (function(n) {
          function e(n) {
            var t;
            return (
              Object(i.a)(this, e),
              ((t = Object(o.a)(this, Object(c.a)(e).call(this, n))).state = {
                zoomed: !1
              }),
              t
            );
          }
          return (
            Object(s.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  document.title = "Gallery - Infinite Mo";
                }
              },
              {
                key: "animateZoom",
                value: function() {
                  this.setState({ zoomed: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this;
                  return a.d.createElement(
                    G,
                    null,
                    a.d.createElement(
                      $,
                      null,
                      a.d.createElement(
                        K,
                        null,
                        a.d.createElement(
                          P,
                          { className: this.state.zoomed ? "zoomed" : "" },
                          a.d.createElement("img", {
                            src: "".concat("/build", "/img/mo-warp.png"),
                            alt: "Mo with refrigerator in background"
                          })
                        )
                      )
                    ),
                    a.d.createElement(
                      "button",
                      {
                        onClick: function() {
                          return n.animateZoom();
                        },
                        type: "button"
                      },
                      "Zoom"
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a);
      function nn() {
        var n = Object(l.a)([
          "\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 2rem;\n  left: 0;\n"
        ]);
        return (
          (nn = function() {
            return n;
          }),
          n
        );
      }
      function en() {
        var n = Object(l.a)([
          "\n    @keyframes fadein{\n    from {\n      opacity: 0;\n    }\n    to{\n      opacity: 1;\n    }\n  }\n  \n  color: #ffffff;\n  text-align: center;\n\n\n  .container{\n    display: flex;\n    position: relative;\n  }\n\n  header{\n    z-index: 100;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    h1,h2{\n      color: #ffffff;\n      position: relative;\n      margin: 0;\n      opacity: 0;\n      font-family: 'Aldrich', sans-serif;\n    }\n    .fadein-logo{\n      animation: fadein 2s ease-in 1.5s;\n      animation-fill-mode: forwards; \n    }\n    }\n    h1{\n      font-size: 3rem;\n      animation: fadein 2s ease-in;\n      animation-fill-mode: forwards;\n\n    }\n    h2{\n      font-size: 2rem;\n      animation: fadein 2s ease-in 3s;\n      animation-fill-mode: forwards;\n\n    }\n  }\n"
        ]);
        return (
          (en = function() {
            return n;
          }),
          n
        );
      }
      var tn = u.a.div(en()),
        an = u.a.main(nn()),
        rn = (function(n) {
          function e() {
            var n, t;
            Object(i.a)(this, e);
            for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
              r[s] = arguments[s];
            return (
              ((t = Object(o.a)(
                this,
                (n = Object(c.a)(e)).call.apply(n, [this].concat(r))
              )).setAudioRef = function(n) {
                (t.audioRef = n), n && p(n);
              }),
              t
            );
          }
          return (
            Object(s.a)(e, n),
            Object(r.a)(e, [
              {
                key: "componentDidMount",
                value: function() {
                  this.audioRef &&
                    (p(this.audioRef),
                    "true" === sessionStorage.getItem("mo-entered") &&
                      this.audioRef.play().catch(function() {}));
                }
              },
              {
                key: "render",
                value: function() {
                  return a.d.createElement(
                    tn,
                    null,
                    a.d.createElement(
                      "audio",
                      { ref: this.setAudioRef, loop: !0 },
                      a.d.createElement("source", {
                        src: "".concat("/build", "/echo.mp3"),
                        type: "audio/mpeg"
                      }),
                      "Your browser does not support the audio tag."
                    ),
                    a.d.createElement(
                      b,
                      null,
                      a.d.createElement(k, null),
                      a.d.createElement(j, null)
                    ),
                    a.d.createElement(
                      d.a,
                      null,
                      a.d.createElement(
                        "div",
                        { className: "container" },
                        a.d.createElement(I, null),
                        a.d.createElement(
                          an,
                          null,
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
                              component: F
                            }),
                            a.d.createElement(m.a, {
                              path: "/ask",
                              component: H
                            }),
                            a.d.createElement(m.a, {
                              path: "/gallery",
                              component: V
                            })
                          )
                        ),
                        a.d.createElement(_, null)
                      )
                    )
                  );
                }
              }
            ]),
            e
          );
        })(a.a),
        on = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function cn(n, e) {
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
      a.d.render(a.d.createElement(rn, null), document.getElementById("root")),
        (function(n) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("/build", window.location).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function() {
              var e = "".concat("/build", "/service-worker.js");
              on
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
                          : cn(n, e);
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
                : cn(e, n);
            });
          }
        })();
    }
  },
  [[21, 2, 1]]
]);
//# sourceMappingURL=main.71b64e41.chunk.js.map
