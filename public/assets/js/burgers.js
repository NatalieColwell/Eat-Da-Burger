$(function() {
    $(".devoured").on("click", function(event) {
        console.log(this);
        var id = $(this).data("id");
        var newBurger = $(this).data("devourburger");
        console.log(newBurger);
        var devourState = {
            devoured: newBurger
        };
        console.log(" changed devoured state: ", devourState)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(function() {
            console.log("new burger", newBurger)

            location.reload();  
        });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgType").val().trim(),
        devoured: $("[name=burger1]:checked").val().trim()
    };

    console.log();

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("New Burger: ", newBurger)
        location.reload();
    });

    // $.post("/api/burgers", newBurger).then(function(data) {
       
    // });
    
});
});