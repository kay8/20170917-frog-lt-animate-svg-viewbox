const map = document.getElementById("map");

// interaction
function zoomIn(country) {
// zooming in part
var currentCountry = document.getElementById(country),
    s = currentCountry.getBBox(),
    newView = "" + s.x + " " + s.y + " " + (s.width + 200) + " " + s.height,
    group1 = [".text-" + country, ".x-out"],
    tl = new TimelineMax();

    tl.add("zIn");
    tl.fromTo(map, 1.5, {
      attr: { viewBox: "0 0 1282.95 1243.58"}
    }, {
      attr: { viewBox: newView }
    }, "zIn");
    tl.to(".text-" + country, 0.1, {
      display: "block"
    }, "zIn");
    tl.fromTo(group2, 0.25, {
      opacity: 1
    }, {
      opacity: 0,
      ease: Circ.easeIn
    }, "zIn");
    tl.fromTo(currentCountry, 0.35, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Circ.easeOut
    }, "zIn+=0.5");
    tl.fromTo(group1, 0.5, {
      opacity: 0
    }, {
      opacity: 0.65,
      ease: Sine.easeOut
    }, "zIn+=1");
}

function zoomOut(geo) {
//zooming out part
var currentArea = document.getElementById(geo),
    group3 = [".text-" + geo, ".x-out"],
    tl = new TimelineMax();

    tl.add("zOut");
    tl.to(group3, 0.5, {
      opacity: 0,
      ease: Sine.easeIn
    }, "zOut");
    tl.to(map, 1, {
      attr: { viewBox: "0 0 1282.95 1243.58"}
    }, "zOut");
    tl.to(group2, 0.25, {
      opacity: 1,
      ease: Sine.easeOut
    }, "zOut+=1");
    tl.to(".text-" + geo, 0.1, {
      display: "none"
    }, "zOut+=2");
    tl.to(currentArea, 1, {
      opacity: 0,
      ease: Sine.easeIn
    }, "zOut+=0.4");

}

var el = document.getElementById("CA-BC");
el.addEventListener("click", callback, false);

var close = document.getElementById("close");
close.addEventListener("click", callback2, false);

function callback() {
  zoomIn("CA-BC");
}
function callback2() {
  zoomOut("aaa");
}
