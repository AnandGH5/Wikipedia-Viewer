function wikisearch()
{
   $("#content").empty();
  if($("#searchitem").val()=="")
    {
      alert("Please enter a query!");
      $("#last").delete();
    }
  var searchitem=$("#searchitem").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchitem +"&format=json&callback=?"; 
  
 $.getJSON(url, function (data) {
   $("#content").append("<hr id=\"last\">");
   for(var i=0;i<10;i++)
    {
      if(data[1][i]!==undefined)
        {
     $("#content").append( "<p><a href="+data[3][i]+"><span id=\"head\">"+data[1][i]+"</span><br>"+data[2][i]+"</a></p>" ); 
      if(i==9)
         $("#content").append("<hr>");
    }
      else
        {
          if(i==0)
          $("#content").append("<span>Sorry! No valid results found.</span><hr>");
          break;
        }
    }
 });
}

function random()
{
  $("#content").empty();
}