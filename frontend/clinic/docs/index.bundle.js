(() => {
  "use strict";

  var e = {
      136: () => {
        window.addEventListener("DOMContentLoaded", () => {
          document.querySelectorAll(".dropdown").forEach(e => {
            e.addEventListener("click", t => {
              t.preventDefault(), e.classList.contains("cliniks") ? (e.after(document.querySelector(".cliniks__location")), Boolean(e.dataset.active) ? (document.querySelector(".cliniks__location").style = "display: block", e.children[1].src = "./img/svg/up.svg", e.dataset.active = "") : (document.querySelector(".cliniks__location").style = "display: none", e.children[1].src = "./img/svg/down.svg", e.dataset.active = "1")) : (document.querySelectorAll(".links__list>.link").forEach(e => {
                parseInt(t.target.dataset.number) !== parseInt(e.dataset.number) ? (e.lastElementChild.style = "display: none;", e.style = "color: #000") : (t.target.lastElementChild.style = "display: flex", e.style = "color: #028ECE");
              }), document.querySelectorAll(".dropdownContent").forEach(e => {
                console.log(e), parseInt(t.target.dataset.number) === parseInt(e.dataset.number) ? e.style = "display: flex;left:0;top:0" : e.style = "display: none";
              }));
            });
          });
        });
      },
      561: () => {
        window.addEventListener("DOMContentLoaded", () => {
          const e = document.querySelector(".slider__items");
          document.querySelectorAll(".slider>.slider__arrow").forEach(t => {
            t.addEventListener("click", t => {
              const n = Array.from(e.children);
              n.forEach(e => {
                if (t.target.classList.contains("left")) {
                  let t = parseInt(getComputedStyle(e).order);
                  --t, e.style.order = t < 1 ? n.length : t;
                } else if (t.target.classList.contains("right")) {
                  let t = parseInt(getComputedStyle(e).order);
                  ++t, t > n.length ? e.style.order = 1 : e.style.order = t;
                }
              });
            });
          });
        });
      },
      735: () => {
        const e = [{
          fullname: "Ламбина Татьяна Александровна",
          post: "Врач-офтальмолог",
          experience: "3 лет",
          about: "Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,\n                основатель центра зрения «Доктор Линз» (Новосибирск) \n                и «Центра зрения доктора Нагорского» (Кемерово)",
          photo: "./img/doctor.png"
        }, {
          fullname: "Ламбина Юлия Александровна",
          post: "Главный врач, офтальмолог",
          experience: "5 лет",
          about: "Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,\n                основатель центра зрения «Доктор Линз» (Новосибирск) \n                и «Центра зрения доктора Нагорского» (Кемерово)",
          photo: "./img/doctor.png"
        }, {
          fullname: "Ламбина Светлана Александровна",
          post: "Врач-офтальмолог",
          experience: "4 лет",
          about: "Врач-офтальмолог высшей категории, кандидат медицинских наук, главный врач,\n                основатель центра зрения «Доктор Линз» (Новосибирск) \n                и «Центра зрения доктора Нагорского» (Кемерово)",
          photo: "./img/doctor.png"
        }];
        window.addEventListener("DOMContentLoaded", () => {
          const t = document.createElement("ul");
          let n = "",
            r = 1;
          e.forEach(e => {
            n += `<li data-number=${r++}>\n                <div class="photo">\n                    <img src=${e.photo} alt="doctor">\n                </div>\n                <div class="fullname">\n                    <p>${e.fullname}</p>\n                    <p>${e.post}</p>\n                </div>\n            </li>`;
          }), r = 0, t.innerHTML = n, document.querySelector(".doctors__list>.list>.arrow_up").after(t), t.firstChild.classList.add("active"), r = parseInt(t.querySelector(".active").dataset.number) - 1;
          const o = document.querySelector(".doctors>.container>.doctors__list>.about__doctor").children;
          o[0].firstElementChild.src = e[r].photo, o[1].children[0].firstElementChild.textContent = e[r].fullname, o[1].children[0].lastElementChild.textContent = e[r].post, o[1].children[2].lastElementChild.textContent = e[r].about, document.querySelectorAll(".doctors>.container>.doctors__list>.list>.arrow").forEach(n => {
            n.addEventListener("click", n => {
              r = parseInt(t.querySelector(".active").dataset.number) - 1, t.children[r].classList.remove("active"), n.target.classList.contains("arrow_up") ? r = r - 1 < 0 ? t.children.length - 1 : r - 1 : n.target.classList.contains("arrow_down") && (r = r + 1 > t.children.length - 1 ? 0 : r + 1), t.children[r].classList.add("active"), o[0].firstElementChild.src = e[r].photo, o[1].children[0].firstElementChild.textContent = e[r].fullname, o[1].children[0].lastElementChild.textContent = e[r].post, o[1].children[2].lastElementChild.textContent = e[r].about;
            });
          });
        });
      },
      467: () => {
        window.addEventListener("DOMContentLoaded", () => {
          const e = document.querySelector(".form");
          e.addEventListener("submit", t => {
            t.preventDefault();
            const n = {
              name: e.querySelector(".top").firstElementChild.value,
              lastName: e.querySelector(".top").lastElementChild.value,
              service: e.querySelector(".service").value,
              date: e.querySelector(".date").value
            };
            try {
              (async e => await fetch("http://localhost:8000/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
              }))(n).then(e => {
                e.ok ? alert("success") : alert("SOMETHING WRONG!");
              });
            } catch {
              alert("SOMETHING WRONG!");
            }
          });
        });
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var l = t[r] = {
      exports: {}
    };
    return e[r](l, l.exports, n), l.exports;
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {
      a: t
    }), t;
  }, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    });
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n(136), n(561), n(735), n(467);
})();