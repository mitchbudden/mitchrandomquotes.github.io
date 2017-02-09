$(document).ready(function(){
  
  var theQuote = '';
  var theAuthor = '';
   
  $('#getQuote').on("click", function() {
    generateQuote();
  });

  function generateQuote() {
    var output = $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        theQuote = data[0].content;
        theAuthor = data[0].title;
      
        document.getElementById('quoteText').innerHTML = "<i>" + theQuote + "</i>";
        document.getElementById('quoteAuthor').innerHTML = "- " + theAuthor ;
      },
      error: function(err) {
        var quotes = {
          1: ['The Dude abides', 'The dude'],
          2: ['When you\'re in a hole, you just have to keep digging', 'Loyd Christmas'],
        };
        var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

        $('#quote').text(quotes[randomQuoteNumber][0]);
        $('#author').text(quotes[randomQuoteNumber][1]);

      },
    });
  }
});