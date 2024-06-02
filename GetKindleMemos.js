javascript:(
  function(){
    bookImgUrl = document.querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a > span > img").src;
    bookUrl = document.querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a").href;
    bookTitle = document.querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > h3").innerText;

    bookMemos = document.getElementById("kp-notebook-annotations").children;
    showText = "";

    for (var i = 0; i < bookMemos.length; i++){
      bookMemo = bookMemos[i].getElementsByClassName("a-size-base-plus a-color-base");
      memoPosition = bookMemos[i].getElementsByClassName("a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata");
      if (bookMemo.length){
        if (bookMemo.note.innerText != ""){
          let newstr = bookMemo.note.innerText.replace('■', '## ');
          showText += newstr + "\n" + memoPosition[1].innerText + "\n\n";
        }
      }
    }
    prompt("Please copy text.", `${bookTitle}\n\n![](${bookImgUrl})\n\n` + bookUrl + "\n\n" + showText);
  }
)();
