window.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Toggle active class for buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");

      // show/hide gallery itemsbased on the selected category
      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || category === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// перестали испольовать this после измены функции на стрелочный
// document.addEventListener("DOMContentLoaded", () => {
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const galleryItems = document.querySelectorAll(".gallery-item");

//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const category = button.getAttribute("data-category");

//       // Toggle active class for buttons
//       filterButtons.forEach((btn) => btn.classList.remove("active"));
//       button.classList.add("active");

//       // Show/hide gallery items based on the selected category
//       galleryItems.forEach((item) => {
//         const itemCategory = item.getAttribute("data-category");
//         if (category === "all" || category === itemCategory) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }
//       });
//     });
//   });
// });
