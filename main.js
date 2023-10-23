const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".feature-item");
const panes = $$(".feature-section");
const line = $(".feature-line");
const tabActive = $(".feature-item.active");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".feature-item.active").classList.remove("active");
    $(".feature-section.active").classList.remove("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth;
    this.classList.add("active");
    pane.classList.add("active");
  };
});
