
const onListEl = document.querySelectorAll(".item");
console.log(`Number of categories:` + `${onListEl.length}`);

const onTitle = onListEl.forEach(element => {
  const result = element.firstElementChild.textContent;
  const result2 = element.querySelectorAll("li").length;
  console.log(`Category:` + `${result }`);
  console.log(`Elements:` + `${result2}`);
 
});
