/*! NewWall  - background.js
Copyright (c) 2020 AmMedia. All rights reserved.

All portions of this file are the confidential and proprietary
intellectual property of AmMedia - NewWall.

created by : Abhijeet mallick
Email : abhijeetmallick29@gmail.com
*/
const Domstring = {
    img1: document.querySelector(".image1"),
    img2: document.querySelector(".image2"),
    img3: document.querySelector(".image3"),
    background: document.querySelector(".background__image--img"),
    Imageview: document.querySelector(".main3__imagecatalouge__button"),
    ImageCatalouge: document.querySelector(".main3__imagecatalouge__imagelist"),
    Imagetext: document.querySelector(".main3__imagecatalouge__text"),
    Todo: document.querySelector(".main1__input"),
    Todocontainer: document.querySelector(".main1__todocontainer"),
    TodoAdd: document.querySelector(".main1__add"),
    TodoHead: document.querySelector(".main1__todohead"),
    TodoHeading: document.querySelector(".main1__heading"),
    Body: document.querySelector("body"),
    Weather: document.querySelector(".main3__weather--main"),
    WeatherSecond: document.querySelector(".main3__weather--second"),
    LocationButton: document.querySelector(".main1__setting--location"),
    Preloader: document.getElementById("loading"),
    NameBlock: document.querySelector(".main2--center--nameblock"),
    Welcome: document.querySelector(".main2--center--welcome"),
    Name: document.querySelector(".main2--center--name"),
    QuoteName: document.querySelector(".main2--center--qname"),
    Input: document.querySelector(".main2--center--input"),
    Reset: document.querySelector(".main1__setting--reset"),
    Quote: document.querySelector(".main2--center--quote"),
    NameButton: document.querySelector(".main1__setting--name"),
    QuoteSpan: document.querySelector(".main2--center--qquote"),
    NameHead: document.querySelector(".main2--center--head"),
    BigQuote: document.querySelector(".main2--bottom--heading"),
    BigQuoteCredits: document.querySelector(".main2--bottom--credits"),
    Time: document.querySelector(".main2--center--time"),
    Date: document.querySelector(".main2--center--date"),
    FactText: document.querySelector(".main2--bottom--facttext"),
    Top: document.querySelector(".main2__top"),
    Attribute: document.querySelector(".main2__top--attribute"),
    Attribute1: document.querySelector(".attribute1"),
    Attribute2: document.querySelector(".attribute2"),
    Attribute3: document.querySelector(".attribute3"),
    UnsplashCredits: document.querySelector(".main2__top--unsplash"),
    Setting: document.querySelector(".main1__setting"),
    SettingsItems: document.querySelector(".main1__setting--items"),
    FillForm: document.querySelector(".main2--center--fill"),
    Cleardiv: document.querySelector(".main2--center--cleardiv"),
    Clear: document.querySelector(".main2--center--clear"),
    Answer1: document.getElementById("answer1"),
    Answer2: document.getElementById("answer2"),
    Answer3: document.getElementById("answer3"),
    ThumbsUp1: document.querySelector(".ione"),
    ThumbsUp2: document.querySelector(".itwo"),
    ThumbsUp3: document.querySelector(".ithree"),
  },
  Events = () => {
    Fill(),
      Domstring.Imageview.addEventListener("click", () => {
        var e = Domstring.ImageCatalouge,
          t = Domstring.Imagetext;
        "hidden" === e.style.visibility
          ? ((e.style.visibility = "visible"), (t.style.visibility = "visible"))
          : ((e.style.visibility = "hidden"), (t.style.visibility = "hidden"));
      }),
      Domstring.ImageCatalouge.addEventListener("click", (e) => {
        if ("main3__imagecatalouge__image" === e.target.classList[0]) {
          if ("image1" === e.target.classList[1])
            var t = JSON.parse(localStorage.getItem("image1"));
          else if ("image2" === e.target.classList[1])
            t = JSON.parse(localStorage.getItem("image2"));
          else if ("image3" === e.target.classList[1])
            t = JSON.parse(localStorage.getItem("image3"));
          (Domstring.Attribute.href = `https://unsplash.com/@${t.user.username}?utm_source=Newwall&utm_medium=referral`),
            (Domstring.Attribute.textContent =
              t.user.first_name + " " + t.user.last_name),
            localStorage.setItem("background", JSON.stringify(t)),
            (Domstring.background.src = t.urls.raw + "&w=1500&dpr=2&q=90");
        }
      }),
      Domstring.TodoAdd.addEventListener("click", enter),
      Domstring.TodoHead.addEventListener("keyup", () => {
        13 === event.keyCode && enter();
      }),
      Domstring.Todocontainer.addEventListener("click", (e) => {
        const t = e.target.classList[1];
        var a = e.target.parentNode.parentNode.id;
        "fa-times-circle" === t && e.target.parentNode.parentNode.remove(),
          localStorage.removeItem(`${a}`);
        for (
          var r = JSON.parse(localStorage.getItem("array")), n = 0;
          n < r.length;
          n++
        )
          r[n] == a &&
            (r.splice(n, 1), localStorage.setItem("array", JSON.stringify(r)));
      }),
      Domstring.TodoHeading.addEventListener("click", (e) => {
        const t = Domstring.Todocontainer;
        "visible" === t.style.visibility
          ? (t.style.visibility = "hidden")
          : (t.style.visibility = "visible");
      }),
      window.addEventListener("click", (e) => {
        e.target.classList.toString().includes("main2") &&
          ((Domstring.Todocontainer.style.visibility = "hidden"),
          (document.querySelector(".main3__weather--second").style.opacity =
            "0"),
          (Domstring.ImageCatalouge.style.visibility = "hidden"),
          (Domstring.Imagetext.style.visibility = "hidden"),
          (Domstring.SettingsItems.style.visibility = "hidden"));
      }),
      Domstring.Weather.closest(".main3__weather--main").addEventListener(
        "click",
        (e) => {
          var t = Domstring.WeatherSecond;
          "1" === t.style.opacity
            ? (t.style.opacity = "0")
            : (t.style.opacity = "1");
        }
      ),
      Domstring.LocationButton.addEventListener("click", () => {
        var e = prompt("Enter Your City/State Name");
        e &&
          null != e &&
          (localStorage.setItem("city", JSON.stringify(e)), location.reload());
      }),
      Domstring.NameButton.addEventListener("click", () => {
        var e = prompt("Enter Your Name");
        e &&
          null != e &&
          "" !== e &&
          (localStorage.setItem("name", JSON.stringify(e)), location.reload());
      }),
      Domstring.Reset.addEventListener("click", (e) => {
        localStorage.clear(), location.reload();
      }),
      Domstring.Setting.addEventListener("click", (e) => {
        "fa-cog" === e.target.classList[1] &&
          ("hidden" === Domstring.SettingsItems.style.visibility
            ? (Domstring.SettingsItems.style.visibility = "visible")
            : (Domstring.SettingsItems.style.visibility = "hidden"));
      });
  },
  Unsplash = () => {
    const e = new Date().getMonth();
    var t = new Date().getDate();
    t = t > 29 ? 31 - t : t;
    const a = new Date().getDay();
    if (
      (console.log(t),
      JSON.parse(localStorage.getItem("month")) === e &&
        "undefined" != localStorage.getItem("unsplash") &&
        "null" != localStorage.getItem("unsplash"))
    ) {
      const e = JSON.parse(localStorage.getItem("unsplash"));
      "undefined" != e &&
        ((Domstring.img1.src =
          e[t > 0 ? t - 1 : t].urls.raw + "&w=1500&dpr=2&q=90"),
        (Domstring.Attribute1.href = `https://unsplash.com/@${
          e[t > 0 ? t - 1 : t].user.username
        }?utm_source=Newwall&utm_medium=referral`),
        (Domstring.Attribute1.textContent = `${
          e[t > 0 ? t - 1 : t].user.first_name
        } ${
          e[t > 0 ? t - 1 : t].user.last_name
            ? e[t > 0 ? t - 1 : t].user.last_name
            : ""
        }`),
        localStorage.setItem("image1", JSON.stringify(e[t > 0 ? t - 1 : t])),
        (Domstring.img2.src =
          e[`${t > 15 ? a : 29 - a}`].urls.raw + "&w=1500&dpr=2&q=90"),
        (Domstring.Attribute2.href = `https://unsplash.com/@${
          e[t > 15 ? a : 29 - a].user.username
        }?utm_source=Newwall&utm_medium=referral`),
        (Domstring.Attribute2.textContent = `${
          e[t > 15 ? a : 29 - a].user.first_name
        } ${
          e[t > 15 ? a : 29 - a].user.last_name
            ? e[t > 15 ? a : 29 - a].user.last_name
            : ""
        }`),
        localStorage.setItem("image2", JSON.stringify(e[t > 15 ? a : 29 - a])),
        (Domstring.img3.src =
          e[t > 15 ? 10 - a : 10 + a].urls.raw + "&w=1500&dpr=2&q=90"),
        (Domstring.Attribute3.href = `https://unsplash.com/@${
          e[t > 15 ? 10 - a : 10 + a].user.username
        }?utm_source=Newwall&utm_medium=referral`),
        (Domstring.Attribute3.textContent = `${
          e[t > 15 ? 10 - a : 10 + a].user.first_name
        } ${
          e[t > 15 ? 10 - a : 10 + a].user.last_name
            ? e[t > 15 ? 10 - a : 10 + a].user.last_name
            : ""
        }`),
        localStorage.setItem(
          "image3",
          JSON.stringify(e[t > 15 ? 10 - a : 10 + a])
        ));
    } else
      (async function () {
        try {
          const t = "7ve6n7ituKOdcrC0fHVbU1lQx37d1ZIKoOyv4mF5IFM",
            a = await fetch(
              `https://api.unsplash.com/search/photos?client_id=${t}&query=landscape&orientation=landscape&order_by=latest&per_page=30&page=${e}}`
            ),
            r = await a.json(),
            n = await r.results;
          return localStorage.setItem("unsplash", JSON.stringify(n)), r.results;
        } catch (e) {
          console.log(e);
        }
      })().then((r) => {
        localStorage.setItem("month", JSON.stringify(e)),
          localStorage.setItem("unsplash", JSON.stringify(r)),
          (Domstring.background.src =
            r[t > 0 ? t - 1 : t].urls.raw + "&w=1500&dpr=2&q=90"),
          (Domstring.Attribute.href = `https://unsplash.com/@${
            r[t > 0 ? t - 1 : t].user.username
          }?utm_source=Newwall&utm_medium=referral`),
          (Domstring.Attribute.textContent = `${
            r[t > 0 ? t - 1 : t].user.first_name
          } ${
            r[t > 0 ? t - 1 : t].user.last_name
              ? r[t > 0 ? t - 1 : t].user.last_name
              : ""
          }`),
          localStorage.setItem(
            "background",
            JSON.stringify(r[t > 0 ? t - 1 : t])
          ),
          (Domstring.img1.src =
            r[t > 0 ? t - 1 : t].urls.raw + "&w=1500&dpr=2&q=90"),
          (Domstring.Attribute1.href = `https://unsplash.com/@${
            r[t > 0 ? t - 1 : t].user.username
          }?utm_source=Newwall&utm_medium=referral`),
          (Domstring.Attribute1.textContent = `${
            r[t > 0 ? t - 1 : t].user.first_name
          } ${
            r[t > 0 ? t - 1 : t].user.last_name
              ? r[t > 0 ? t - 1 : t].user.last_name
              : ""
          }`),
          localStorage.setItem("image1", JSON.stringify(r[t > 0 ? t - 1 : t])),
          (Domstring.img2.src =
            r[`${t > 15 ? a : 29 - a}`].urls.raw + "&w=1500&dpr=2&q=90"),
          (Domstring.Attribute2.href = `https://unsplash.com/@${
            r[t > 15 ? a : 29 - a].user.username
          }?utm_source=Newwall&utm_medium=referral`),
          (Domstring.Attribute2.textContent = `${
            r[t > 15 ? a : 29 - a].user.first_name
          } ${
            r[t > 15 ? a : 29 - a].user.last_name
              ? r[t > 15 ? a : 29 - a].user.last_name
              : ""
          }`),
          localStorage.setItem(
            "image2",
            JSON.stringify(r[t > 15 ? a : 29 - a])
          ),
          (Domstring.img3.src =
            r[`${t > 15 ? 10 - a : 10 + a}`].urls.raw + "&w=1500&dpr=2&q=90"),
          (Domstring.Attribute3.href = `https://unsplash.com/@${
            r[t > 15 ? 10 - a : 10 + a].user.username
          }?utm_source=Newwall&utm_medium=referral`),
          (Domstring.Attribute3.textContent = `${
            r[t > 15 ? 10 - a : 10 + a].user.first_name
          } ${r[t > 15 ? 10 - a : 10 + a].user.last_name}`),
          localStorage.setItem(
            "image3",
            JSON.stringify(r[t > 15 ? 10 - a : 10 + a])
          );
      });
  },
  TodoList = () => {
    if (
      null != localStorage.getItem("array") &&
      null != localStorage.getItem("array")
    )
      JSON.parse(localStorage.getItem("array"));
    else;
    null != localStorage.getItem("array") &&
      null != localStorage.getItem("array") &&
      JSON.parse(localStorage.getItem("array")).forEach((e) => {
        const t = `\n    <div class="main1__item" id="${e}">\n      <p class="main1__para">${JSON.parse(
          localStorage.getItem(JSON.stringify(e))
        )}</p>\n      <span class="main1__cross"\n        ><i class="far fa-times-circle"></i\n      ></span>\n    </div>\n    `;
        Domstring.Todocontainer.insertAdjacentHTML("beforeend", t);
      });
    Domstring.Todocontainer.style.visibility = "hidden";
  },
  weatherRun = () => {
    if (
      localStorage.getItem("latitude") &&
      localStorage.getItem("longitude") &&
      !localStorage.getItem("city")
    ) {
      function e(e) {
        var t = new Date(1e3 * e);
        return [
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][t.getDay()],
          t.getDate(),
          t.getMonth(),
        ];
      }
      (async () => {
        try {
          var e = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${JSON.parse(
              localStorage.getItem("latitude")
            )}&lon=${JSON.parse(
              localStorage.getItem("longitude")
            )}&exclude=current,minutely&appid=abe2db783fbe76f7287b043abd64b2cc&units=metric`
          );
          return await e.json();
        } catch (e) {
          console.log(e);
        }
      })().then((t) => {
        var a = t,
          r = a.daily.slice(0, 7);
        const n = `\n    <div class="main3__weather--mainicon"><img src="http://openweathermap.org/img/wn/${
          r[0].weather[0].icon
        }@2x.png" alt=""></div>\n    <div class="main3__weather--mainweather">\n      <h1 class="main3__weather--temp">${Math.round(
          (r[0].temp.min + r[0].temp.max) / 2
        )}<span>&deg;C</span></h1>\n      <h3 class="main3__weather--location">${
          a.timezone
        }</h3>\n    </div>\n    `;
        document
          .querySelector(".main3__weather--main")
          .insertAdjacentHTML("beforeend", n),
          r.forEach((t) => {
            const a = `\n    <div class="main3__weather--seconditem">\n      <div class="main3__weather--secondimage"><img src="http://openweathermap.org/img/wn/${
              t.weather[0].icon
            }@2x.png" alt=""></div>\n      <div class="main3__weather--secondminmax">\n        ${Math.round(
              t.temp.min
            )}&deg;C / ${Math.round(
              t.temp.max
            )}&deg;C\n      </div>\n      <div class="main3__weather--secondday">${
              e(t.dt)[0]
            } ${
              e(t.dt)[1]
            }</div>\n      <div class="main3__weather--secondtemp">${Math.round(
              (t.temp.min + t.temp.max) / 2
            )}&deg;C</div>\n      <div class="main3__weather--secondwtype">${
              t.weather[0].description
            }</div>\n    </div> \n    `;
            document
              .querySelector(".main3__weather--second")
              .insertAdjacentHTML("afterbegin", a);
          });
      });
    } else
      navigator.geolocation.getCurrentPosition((e, t) => {
        if (e) {
          const t = e.coords.latitude,
            a = e.coords.longitude;
          localStorage.setItem("latitude", JSON.stringify(t)),
            localStorage.setItem("longitude", JSON.stringify(a)),
            location.reload();
        }
        if (t && void 0 !== t) {
          var a = prompt("Enter city / state name");
          a &&
            null != a &&
            (localStorage.setItem("city", JSON.stringify(a)),
            location.reload());
        }
      });
  },
  weather2 = () => {
    function e(e) {
      var t = new Date(1e3 * e);
      return [
        [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][t.getDay()],
        t.getDate(),
        t.getMonth(),
      ];
    }
    (async () => {
      const e = "abe2db783fbe76f7287b043abd64b2cc";
      try {
        var t = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${JSON.parse(
              localStorage.getItem("city")
            )}&appid=${e}`
          ),
          a = await t.json(),
          r = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${a.coord.lat}&lon=${a.coord.lon}&exclude=current,minutely&appid=${e}&units=metric`
          );
        return await r.json();
      } catch (e) {
        console.log(e);
      }
    })().then((t) => {
      var a = t.daily.slice(0, 7);
      const r = `\n    <div class="main3__weather--mainicon"><img src="http://openweathermap.org/img/wn/${
        a[0].weather[0].icon
      }@2x.png" alt=""></div>\n    <div class="main3__weather--mainweather">\n      <h1 class="main3__weather--temp">${Math.round(
        (a[0].temp.min + a[0].temp.max) / 2
      )}<span>&deg;C</span></h1>\n      <h3 class="main3__weather--location">${JSON.parse(
        localStorage.getItem("city")
      )}</h3>\n    </div>\n    `;
      document
        .querySelector(".main3__weather--main")
        .insertAdjacentHTML("beforeend", r),
        a.forEach((t) => {
          const a = `\n    <div class="main3__weather--seconditem">\n      <div class="main3__weather--secondimage"><img src="http://openweathermap.org/img/wn/${
            t.weather[0].icon
          }@2x.png" alt=""></div>\n      <div class="main3__weather--secondminmax">\n        ${Math.round(
            t.temp.min
          )}&deg;C / ${Math.round(
            t.temp.max
          )}&deg;C\n      </div>\n      <div class="main3__weather--secondday">${
            e(t.dt)[0]
          } ${
            e(t.dt)[1]
          }</div>\n      <div class="main3__weather--secondtemp">${Math.round(
            (t.temp.min + t.temp.max) / 2
          )}&deg;C</div>\n      <div class="main3__weather--secondwtype">${
            t.weather[0].description
          }</div>\n    </div> \n    `;
          document
            .querySelector(".main3__weather--second")
            .insertAdjacentHTML("afterbegin", a);
        });
    });
  };
function CurrentTime() {
  var e = new Date().getHours(),
    t = new Date().getMinutes(),
    a = new Date().getSeconds(),
    r = new Date().getMonth(),
    n = new Date().getDate(),
    i = new Date().getFullYear();
  (Domstring.Time.textContent = `${e >= 10 ? e : "0" + e}:${
    t >= 10 ? t : "0" + t
  }:${a >= 10 ? a : "0" + a}`),
    (Domstring.Date.textContent = `${n} ${
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][r]
    } ${i}`);
}
const Quote_display = async () => {
    const e = 31 * (new Date().getMonth() + 1) + new Date().getDate();
    var t = await fetch("https://type.fit/api/quotes"),
      a = await t.json();
    (Domstring.BigQuote.textContent = `" ${a[e].text} "`),
      (Domstring.BigQuoteCredits.textContent = `By : ${a[e].author}`);
  },
  funFact = () => {
    var e = new Date().getMonth() + 1,
      t = new Date().getDate();
    (innerFact = async () => {
      try {
        var a = await fetch(`http://numbersapi.com/${e}/${t}/date?json`);
        return await a.json();
      } catch (e) {
        console.log(e);
      }
    }),
      innerFact().then((e) => {
        Domstring.FactText.textContent = e.text;
      });
  },
  Nameset = () => {
    if (
      localStorage.getItem("name") &&
      void 0 !== localStorage.getItem("name") &&
      null !== localStorage.getItem("name") &&
      "''" !== localStorage.getItem("name")
    ) {
      var e = Math.floor(10 * Math.random()) + 1;
      e % 2 != 0 ? NameSet2() : NameSet1();
    } else NameSet1();
  },
  NameSet1 = () => {
    localStorage.getItem("name") &&
    void 0 !== localStorage.getItem("name") &&
    null !== localStorage.getItem("name") &&
    "''" !== localStorage.getItem("name")
      ? ((Domstring.Quote.style.display = "none"),
        (Domstring.NameBlock.style.display = "none"),
        (Domstring.Welcome.style.display = "block"),
        (Domstring.Name.textContent = JSON.parse(localStorage.getItem("name"))))
      : ((Domstring.Quote.style.display = "none"),
        (Domstring.Welcome.style.display = "none"),
        (Domstring.NameBlock.style.display = "block"),
        (Domstring.NameHead.style.display = "block"),
        Domstring.Input.addEventListener("keyup", (e) => {
          if (13 === event.keyCode) {
            var t = Domstring.Input.value;
            localStorage.setItem("name", JSON.stringify(t)), location.reload();
          }
        }));
  },
  NameSet2 = () => {
    const e = new Date().getDate();
    (Domstring.Quote.style.display = "block"),
      (Domstring.NameBlock.style.display = "none"),
      (Domstring.Welcome.style.display = "none"),
      (Domstring.QuoteSpan.textContent = [
        "Aim high",
        "Amplify hope",
        "Be yourself",
        "Cherish today",
        "Chill out",
        "Enjoy life",
        "Enjoy today",
        "Everything counts",
        "Hakuna Matata",
        "Keep calm",
        "Keep smiling",
        "Keep going",
        "Laugh today",
        "Laughter heals",
        "Shine on",
        "Aim high",
        "Amplify hope",
        "Be yourself",
        "Cherish today",
        "Chill out",
        "Enjoy life",
        "Enjoy today",
        "Everything counts",
        "Hakuna Matata",
        "Keep calm",
        "Keep smiling",
        "Keep going",
        "Laugh today",
        "Laughter heals",
        "Shine on",
        "Spread your wings",
      ][e]),
      (Domstring.QuoteName.textContent = JSON.parse(
        localStorage.getItem("name")
      ));
  },
  Fill = () => {
    Domstring.Answer1.addEventListener("keyup", (e) => {
      if (13 === event.keyCode && "" !== Domstring.Answer1.value) {
        var t = Domstring.Answer1.value;
        (Domstring.Answer1.value = t),
          localStorage.setItem("answer1", JSON.stringify(t)),
          (Domstring.ThumbsUp1.style.color = "white");
      }
    }),
      Domstring.Answer2.addEventListener("keyup", (e) => {
        if (13 === event.keyCode && "" !== Domstring.Answer2.value) {
          var t = Domstring.Answer2.value;
          (Domstring.Answer2.value = t),
            localStorage.setItem("answer2", JSON.stringify(t)),
            (Domstring.ThumbsUp2.style.color = "white");
        }
      }),
      Domstring.Answer3.addEventListener("keyup", (e) => {
        if (13 === event.keyCode && "" !== Domstring.Answer3.value) {
          var t = Domstring.Answer3.value;
          (Domstring.Answer3.value = t),
            localStorage.setItem("answer3", JSON.stringify(t)),
            (Domstring.ThumbsUp3.style.color = "white");
        }
      });
  },
  FillUp = () => {
    localStorage.getItem("answer1") &&
      (Domstring.Answer1.value = JSON.parse(localStorage.getItem("answer1"))),
      localStorage.getItem("answer2") &&
        (Domstring.Answer2.value = JSON.parse(localStorage.getItem("answer2"))),
      localStorage.getItem("answer3") &&
        (Domstring.Answer3.value = JSON.parse(localStorage.getItem("answer3")));
  };
function ClearDiv() {
  localStorage.getItem("answer1") ||
  localStorage.getItem("answer2") ||
  localStorage.getItem("answer3")
    ? ((Domstring.Cleardiv.style.visibility = "visible"),
      (Domstring.Clear.style.visibility = "visible"))
    : ((Domstring.Cleardiv.style.visibility = "hidden"),
      (Domstring.Clear.style.visibility = "hidden"));
}
const load = () => {
  const e = new Date().getDate();
  if (
    localStorage.getItem("background") &&
    localStorage.getItem("today") &&
    e === JSON.parse(localStorage.getItem("today"))
  )
    a((t = JSON.parse(localStorage.getItem("background"))));
  else if (
    localStorage.getItem("background") &&
    localStorage.getItem("today") &&
    e !== JSON.parse(localStorage.getItem("today"))
  ) {
    var t;
    localStorage.removeItem("background"),
      a((t = JSON.parse(localStorage.getItem("image1")))),
      localStorage.setItem("today", JSON.stringify(e)),
      localStorage.setItem("background", JSON.stringify(t));
  } else localStorage.setItem("today", JSON.stringify(e));
  function a(e) {
    (Domstring.background.src = e.urls.raw + "&w=1500&dpr=2&q=90"),
      (Domstring.Attribute.href = `https://unsplash.com/@${e.user.username}?utm_source=Newwall&utm_medium=referral`),
      (Domstring.Attribute.textContent = `${e.user.first_name} ${
        e.user.last_name ? e.user.last_name : ""
      }`);
  }
  (Domstring.ImageCatalouge.style.visibility = "hidden"),
    (Domstring.Imagetext.style.visibility = "hidden"),
    localStorage.getItem("name")
      ? ((Domstring.FillForm.style.visibility = "visible"),
        (Domstring.Clear.style.visibility = "visible"))
      : ((Domstring.FillForm.style.visibility = "hidden"),
        (Domstring.Clear.style.visibility = "hidden")),
    CurrentTime();
  setInterval(CurrentTime, 1e3);
  Domstring.Clear.closest(".main2--center--cleardiv").addEventListener(
    "click",
    (e) => {
      localStorage.getItem("answer1") &&
        (localStorage.removeItem("answer1"),
        (Domstring.Answer1.value = ""),
        (Domstring.ThumbsUp1.style.color = "transparent")),
        localStorage.getItem("answer2") &&
          (localStorage.removeItem("answer2"),
          (Domstring.Answer2.value = ""),
          (Domstring.ThumbsUp2.style.color = "transparent")),
        localStorage.getItem("answer3") &&
          (localStorage.removeItem("answer3"),
          (Domstring.Answer3.value = ""),
          (Domstring.ThumbsUp3.style.color = "transparent"));
    }
  );
  setInterval(ClearDiv, 1e3);
};
Domstring.SettingsItems.style.visibility = "hidden";
const Readystate = () => {
  "complete" !== document.readyState &&
  "complete" !== Domstring.background.readyState
    ? ((Domstring.Body.style.visibility = "hidden"),
      (Domstring.Body.style.opacity = "0"))
    : ((Domstring.Body.style.visibility = "visible"),
      (Domstring.Body.style.opacity = "1"));
};
function enter() {
  if (
    null != localStorage.getItem("array") &&
    null != localStorage.getItem("array")
  )
    var e = JSON.parse(localStorage.getItem("array"));
  else e = [];
  const t = Domstring.Todo.value;
  if (t) {
    const r = Date.now();
    localStorage.setItem(JSON.stringify(r), `"${t}"`),
      e.push(r),
      localStorage.setItem("array", JSON.stringify(e));
    var a = JSON.parse(localStorage.getItem("array"));
    const n = `\n    <div class="main1__item" id="${
      a[a.length - 1]
    }">\n      <p class="main1__para">${t}</p>\n      <span class="main1__cross"\n        ><i class="far fa-times-circle"></i\n      ></span>\n    </div>\n    `;
    Domstring.Todocontainer.insertAdjacentHTML("beforeend", n),
      (Domstring.Todo.value = "");
  }
}
window.addEventListener("load", () => {
  (Domstring.Body.style.opacity = "0"),
    (Domstring.Preloader.style.visibility = "visible"),
    (async () => {
      await Readystate();
    })(),
    Fill(),
    Domstring.Imageview.addEventListener("click", () => {
      var e = Domstring.ImageCatalouge,
        t = Domstring.Imagetext;
      "hidden" === e.style.visibility
        ? ((e.style.visibility = "visible"), (t.style.visibility = "visible"))
        : ((e.style.visibility = "hidden"), (t.style.visibility = "hidden"));
    }),
    Domstring.ImageCatalouge.addEventListener("click", (e) => {
      if ("main3__imagecatalouge__image" === e.target.classList[0]) {
        if ("image1" === e.target.classList[1])
          var t = JSON.parse(localStorage.getItem("image1"));
        else
          "image2" === e.target.classList[1]
            ? (t = JSON.parse(localStorage.getItem("image2")))
            : "image3" === e.target.classList[1] &&
              (t = JSON.parse(localStorage.getItem("image3")));
        (Domstring.Attribute.href = `https://unsplash.com/@${t.user.username}?utm_source=Newwall&utm_medium=referral`),
          (Domstring.Attribute.textContent =
            t.user.first_name + " " + t.user.last_name),
          localStorage.setItem("background", JSON.stringify(t)),
          (Domstring.background.src = t.urls.raw + "&w=1500&dpr=2&q=90");
      }
    }),
    Domstring.TodoAdd.addEventListener("click", enter),
    Domstring.TodoHead.addEventListener("keyup", () => {
      13 === event.keyCode && enter();
    }),
    Domstring.Todocontainer.addEventListener("click", (e) => {
      const t = e.target.classList[1];
      var a = e.target.parentNode.parentNode.id;
      "fa-times-circle" === t && e.target.parentNode.parentNode.remove(),
        localStorage.removeItem(`${a}`);
      for (
        var r = JSON.parse(localStorage.getItem("array")), n = 0;
        n < r.length;
        n++
      )
        r[n] == a &&
          (r.splice(n, 1), localStorage.setItem("array", JSON.stringify(r)));
    }),
    Domstring.TodoHeading.addEventListener("click", (e) => {
      const t = Domstring.Todocontainer;
      "visible" === t.style.visibility
        ? (t.style.visibility = "hidden")
        : (t.style.visibility = "visible");
    }),
    window.addEventListener("click", (e) => {
      e.target.classList.toString().includes("main2") &&
        ((Domstring.Todocontainer.style.visibility = "hidden"),
        (document.querySelector(".main3__weather--second").style.opacity = "0"),
        (Domstring.ImageCatalouge.style.visibility = "hidden"),
        (Domstring.Imagetext.style.visibility = "hidden"),
        (Domstring.SettingsItems.style.visibility = "hidden"));
    }),
    Domstring.Weather.closest(".main3__weather--main").addEventListener(
      "click",
      (e) => {
        var t = Domstring.WeatherSecond;
        "1" === t.style.opacity
          ? (t.style.opacity = "0")
          : (t.style.opacity = "1");
      }
    ),
    Domstring.LocationButton.addEventListener("click", () => {
      var e = prompt("Enter Your City/State Name");
      e &&
        null != e &&
        (localStorage.setItem("city", JSON.stringify(e)), location.reload());
    }),
    Domstring.NameButton.addEventListener("click", () => {
      var e = prompt("Enter Your Name");
      e &&
        null != e &&
        "" !== e &&
        (localStorage.setItem("name", JSON.stringify(e)), location.reload());
    }),
    Domstring.Reset.addEventListener("click", (e) => {
      localStorage.clear(), location.reload();
    }),
    Domstring.Setting.addEventListener("click", (e) => {
      "fa-cog" === e.target.classList[1] &&
        ("hidden" === Domstring.SettingsItems.style.visibility
          ? (Domstring.SettingsItems.style.visibility = "visible")
          : (Domstring.SettingsItems.style.visibility = "hidden"));
    }),
    TodoList(),
    localStorage.getItem("answer1") &&
      (Domstring.Answer1.value = JSON.parse(localStorage.getItem("answer1"))),
    localStorage.getItem("answer2") &&
      (Domstring.Answer2.value = JSON.parse(localStorage.getItem("answer2"))),
    localStorage.getItem("answer3") &&
      (Domstring.Answer3.value = JSON.parse(localStorage.getItem("answer3"))),
    (async () => {
      await Unsplash();
    })(),
    load(),
    localStorage.getItem("city")
      ? (async () => {
          await weather2();
        })()
      : (async () => {
          await weatherRun();
        })(),
    (async () => {
      await Quote_display();
    })(),
    Nameset();
  setInterval(Nameset, 6e4);
  (async () => {
    await funFact();
  })(),
    (async () => {
      await Readystate();
    })(),
    (Domstring.Preloader.style.visibility = "hidden"),
    (Domstring.Body.style.opacity = "1");
});
