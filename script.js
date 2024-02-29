if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init());
} else {
  init();
}

function init() {
  const yearElement = document.querySelector(".year");
  const todayYear = new Date().getFullYear();
  yearElement.textContent = todayYear;

  listenToNameCompany();
}

function listenToNameCompany() {
  let name = "";
  let company = "";
  
  document.querySelector('#name').addEventListener('keyup', (event) => {
    name = event.target.value.trim();
  } );

  document.querySelector('#company').addEventListener('keyup', (event) => {
    company = event.target.value.trim();
  });

  document.querySelector("#sendContact").addEventListener('click', (event) => {
    const link = `mailto:leo@cmunit.com?subject=Connection for company ${company}&body=My name is ${name}.%0D%0AI am contacting you about connection needs for expanding our business.`;
    // event.preventDefault();
    event.target.href = link;
  });
}