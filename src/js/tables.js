export const TablesFadeIn = () => {
  var tabFadeNew = document.getElementById("new");
  var tabFadeList = document.getElementById("list");

  if (tabFadeNew.classList.contains("active")) {
    tabFadeNew.classList.remove("active");
    tabFadeList.classList.add("active");
    tabFadeList.classList.add("in");
  } else {
    tabFadeNew.classList.add("active");
    tabFadeList.classList.remove("active");
  }
};
