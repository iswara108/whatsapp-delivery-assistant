const button = document.querySelector("button");

button.addEventListener("click", filter);

function filter() {
  const listA = document.querySelector("textarea#a").value.split("\n");
  const listB = document.querySelector("textarea#b").value.split("\n");
  const result = document.querySelector("textarea#c");

  result.value = listA
    .filter((a) => listB.includes(a.match(/^\d+/)?.[0]))
    .join("\n");
}
