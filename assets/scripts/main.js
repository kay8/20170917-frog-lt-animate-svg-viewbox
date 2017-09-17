(function() {

const map = document.getElementById("map");
const originalView = "0 0 1282.92 1243.61";

function zoomIn(province) {
  const s = province.getBBox();
  const newView = `${s.x} ${s.y} ${s.width} ${s.height}`;
  const tl = new TimelineMax();

  tl.add("zIn");
  tl.fromTo(map, 1, {
    attr: { viewBox: originalView}
  }, {
    attr: { viewBox: newView }
  }, "zIn");
}

function zoomOut() {
  const tl = new TimelineMax();

  tl.add("zOut");
  tl.to(map, 1, {
    attr: { viewBox: originalView}
  }, "zOut");
}

const close = document.getElementById("close");
const hotspots = document.querySelectorAll(".hotspot");
const titleProvince = document.querySelector(".title__province");

Array.from(hotspots).forEach(hotspot => {
  hotspot.addEventListener("click", function() {
    const hotspotData = this.dataset;
    const currentProvince = document.getElementById(hotspotData.parent);
    zoomIn(currentProvince);

    //show and hide
    currentProvince.classList.add("is-active-area");
    titleProvince.innerHTML = `- ${hotspotData.info}`;
    const img = document.getElementById(`${hotspotData.parent}-img`);
    img.classList.add("is-active");
    close.classList.remove("is-hidden");
  }, false);
});

close.addEventListener("click", function() {
  zoomOut();

  //show and hide
  close.classList.add("is-hidden");
  titleProvince.innerHTML = "";
  document.querySelector("img.is-active").classList.remove("is-active");
  document.querySelector(".is-active-area").classList.remove("is-active-area");
}, false);

})();