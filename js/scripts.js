$(document).ready(function() {
  $("button#cats").click(function() {
    $("ul#catTalk").prepend("<li>Meow!</li>");
    // $("ul#dogTalk").before("<li>Woof!</li>"); //dog will woof back automatically.***
    $("ul#catTalk").children("li").first().click(function() {
    alert('meow');
    $(this).remove();
    });
  });

  $("button#dogs").click(function() {
    $("ul#dogTalk").prepend("<li>Woof!</li>");
    // $("ul#catTalk").prepend("<li>Meow!</li>"); //cat will meow bavk automatically. ***
    $("ul#dogTalk").children("li").first().click(function() {
    alert('woof');
    $(this).remove();
    });
  });
});
