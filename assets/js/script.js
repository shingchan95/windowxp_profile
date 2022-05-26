var submitbutton= document.getElementById("url-submit")
var iframe_html = document.getElementById("iframe-page")
var url_input = document.getElementById("url_input")
var home_button = document.getElementById("home_button")


    url_input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {

      submitbutton.click();
    }
  });

    submitbutton.addEventListener("click", function() {
    url_link= url_input.value
    if(url_link.slice(0,8)!="https://"||url_link.slice(0,7)!="http://"){
        iframe_html.src="http://" + url_link
        url_input.value= iframe_html.src
    }else{
        return
    }
  });

    home_button.addEventListener("click", function() {
        url_input.value="https://shingchan95.github.io/week2-coursework/"
        iframe_html.src="https://shingchan95.github.io/week2-coursework/"

  });




