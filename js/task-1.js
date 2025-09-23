const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.querySelectorAll("li.item").length}`);

categories.querySelectorAll("li.item").forEach(category => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);

});
