//First image and it's paragraph
//Variable(kintamasis) siuo atveju yra firstImage, o cont, kad ateityje neleistu pakeisti
//Pradzioje suranda pagal id parasyta html faile, o veliau jau js faile rasomos funkcijos pagal const arba let varda
const firstImgage = document.getElementById("first");
const firstParagrah = document.getElementById("firstP");
//Second element and it's paragraph
const secondImage = document.getElementById("second");
const secondParagraph = document.getElementById("secondP");
//Third element and it's paragraph
const thirdImage = document.getElementById("third");
const thirdParagraph = document.getElementById("thirdP");
//Forth element and it's paragraph
const forthImage = document.getElementById("forth");
const forthParagraph = document.getElementById("forthP");
//Fifth element and it's paragraph
const fifthImage = document.getElementById("fifth");
const fifthParagraph = document.getElementById("fifthP");

// funkcijos skliaustuose yra argumentai()
// toggleParagraph yra musu sugalvota funkcija
// .addEventListener jau yra metodas, kuri turi elementai
//melyni () reiskia, kad kai paspaudziu yra vykdoma kita funkcija
// toggleParagraph ir manageElement yra pacio sukurta funkcija
function toggleParagraph() {
  firstImgage.addEventListener("click", () => {
    manageElement(firstParagrah, firstImgage);
  });
  secondImage.addEventListener("click", () => {
    manageElement(secondParagraph, secondImage);
  });
  thirdImage.addEventListener("click", () => {
    manageElement(thirdParagraph, thirdImage);
  });
  forthImage.addEventListener("click", () => {
    manageElement(forthParagraph, forthImage);
  });
  fifthImage.addEventListener("click", () => {
    manageElement(fifthParagraph, fifthImage);
  });
}

/*manageElement pacio sukurta funkcija. Si funkcija priima du argumentus: 
paragraph ir image (paties sugalvoti pavadinimai).JEI paragraph argumentus turi
klase "hidden", tuomet ja pasaliname nuo sio argumento (tada pasimato paslepta paragraph dalis)
ir + paveiksliuko vietoje atsiranda - paveiksliukas
KITU ATVEJU priesingai viskas vyksta, t.y. pridedame "hidden" klase, t.y. uzslepiame paragraph ir - pavirsta + 
*/

function manageElement(paragrah, image) {
  if (paragrah.classList.contains("hidden")) {
    paragrah.classList.remove("hidden");
    image.src = "./assets/section-toggle/minus.svg";
  } else {
    paragrah.classList.add("hidden");
    image.src = "./assets/section-toggle/plus.svg";
  }
}
