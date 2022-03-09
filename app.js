var showingList = document.getElementById("fileList")
var url = window.location.pathname.split("index")[0]+"/test";


fetch(url).then(function (response) {
  return response.text();
}).then(function (html) {

  // Convert the HTML string into a document object
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');

  //get all a in the list #files
  var list = doc.querySelectorAll("ul#files li a");;


  // create a array of paths 
  var paths = [];
  list.forEach(element => {
    if (element.getAttribute("href") != "/PathTest")//the first element is the parent directory
      paths.push(element.getAttribute("href"))
  });

  console.log(paths);

  paths.forEach(element => {
    var li = `<li><a href="${element}"><img src="${element}" alt=""></a></li>`;
    showingList.innerHTML += li;
  });

}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});


