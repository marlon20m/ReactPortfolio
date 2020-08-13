$("#about").click(function () {
  footer.scrollIntoView();
});

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelectorAll(".materialboxed");
  M.Materialboxed.init(gallery, {});
});
