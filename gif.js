$( document ).ready(function() {
    var topics = ["Lashes", "Mascara", "Blush", "Lipstick", "Eyeshadow", "Bronzer", "Eyeliner"];
    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("makeup");
            a.attr("data-info", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
        }
    }
    $("#add-makeup").on("click", function (event) {
        event.preventDefault();
        var makeup = $("#makeup-input").val().trim();
        topics.push(makeup);
        renderButtons();
    });
    renderButtons();
    $(document).on("click", "button", function () {
        var makeup = $(this).attr("data-info");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            makeup + "&api_key=2NcrbDVTlazOxu1yBpZiqA9cbr04c74K&limit=10";
            $.ajax({
           url:queryURL,
           method: "GET"
       })
       .then(function(response) {
           var results = response.data;
           for (var i = 0; i < results.length; i++) {
               var gifDiv = $("<div>");
               var rating = results[i].rating;
               var p = $("<p>").text("Rating: " + rating);
               var makeupImage = $("<img>");
               makeupImage.attr("src", results[i].images.fixed_height.url);

               var imageName = ["img1", "img2", "img1", "img2","img1", "img2", "img1", "img2", "img1", "img2"]
               makeupImage.addClass(imageName[i]);

               gifDiv.prepend(p);
               gifDiv.prepend(makeupImage);
               $("#gifs-appear-here").prepend(gifDiv);
           }
       })
    });
});