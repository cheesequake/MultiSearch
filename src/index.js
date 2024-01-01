// Get the input field
var input = document.getElementById("searchbar");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search").click();
  }
}); 

input.addEventListener("input", logochange)

logosDict = {
    "youtube": "../media/Logoyt.png",
    "google": "../media/Logog.png",
    "wikipedia": "../media/Logowiki.png",
    "docs": "../media/Logodoc.png",
    "bing": "../media/Logobing.png",
    "spotify": "../media/Logospot.png",
    "myntra": "../media/Logomyntra.png",
    "flipkart": "../media/Logoflipkart.png",
    "yahoo": "../media/Logoyahoo.png",
    "netflix": "../media/Logonetflix.png",
    "reddit": "../media/Logoreddit.png",
    "linkedin": "../media/Logolinkedin.png",
    "sheets": "../media/Logosheets.png",
    "slides": "../media/Logoslides.png",
}

joinDict = {
    "youtube": "+",
    "google": "+",
    "wikipedia": "+",
    "docs": "%20",
    "bing": "+",
    "spotify": "%20",
    "myntra": "-",
    "flipkart": "%20",
    "yahoo": "+",
    "netflix": "%20",
    "reddit": "%20",
    "linkedin": "%20",
    "sheets": "%20",
    "slides": "%20",
}

urlDict = {
    "youtube": "https://www.youtube.com/results?search_query=",
    "google": "https://www.google.com/search?q=",
    "wikipedia": "https://en.wikipedia.org/wiki/Special:Search?go=Go&search=",
    "docs": "https://docs.google.com/document/u/0/?tgif=d&q=",
    "bing": "https://www.bing.com/search?q=",
    "spotify": "https://open.spotify.com/search/",
    "myntra": "https://www.myntra.com/",
    "flipkart": "https://www.flipkart.com/search?q=",
    "yahoo": "https://in.search.yahoo.com/search?p=",
    "netflix": "https://www.netflix.com/search?q=",
    "reddit": "https://www.reddit.com/search/?q=",
    "linkedin": "https://www.linkedin.com/search/results/all/?keywords=",
    "sheets": "https://docs.google.com/spreadsheets/u/0/?q=",
    "slides": "https://docs.google.com/presentation/u/0/?q=",
}

function logochange() {
    var x = document.getElementById("searchbar").value;
    var L = x.split(" ");
    var y = L[0].toLowerCase();
    var image = document.getElementById("logo");
    if (logosDict[y] != null)
    {
        image.src = logosDict[y];
    }
    else
    {
        image.src = "../media/Logo.png";
    }
}

document.getElementById("search").addEventListener("click", search);

function search() {
    var x = document.getElementById("searchbar").value;
    var L = x.split(" ");
    var y = L[0].toLowerCase();
    if (urlDict[y] != null)
    {
        L.splice(0,1);
        let str = L.join(joinDict[y]);
        window.open(urlDict[y] + str, "_blank")
    }
    else
    {
        let str = L.join("+");
        window.open("https://www.google.com/search?q=" + str, "_blank");
    }
}