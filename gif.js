var topics = ["lipstick", "eyeshadow", "blush", "eyeliner", "mascara", "eyebrows", "foundation"];

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");
        a.addClass("topics");
        a.attr("data-cosmetic", topics[i]);
        a.text(topics[i]);

        $("#buttons-view").append(a);
    }
}
$("#add-product").on("click", function (event) {
    event.preventDefault();

    var player = $("#cosmetic-input").val().trim();
    topics.push(player);
    renderButtons();
});
renderButtons();

$("button").on("click", function () {
    var person = $(this).attr("data-cosmetic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cosmetic + "&api_key=VjEjZM7yFJ333FD63MEBN9uNkYFZKU7r&limit=10";
    console.log(this) 
})