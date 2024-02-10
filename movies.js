$("form").on('submit', function(e){
    e.preventDefault();

    let movieTitle = $(".movie").eq(0).val();
    let movieRating = $(".movie").eq(1).val();
    
    if(movieTitle.length<2){
        alert("Please input at least 2 characters.");
    }
    let newMovie = $("<li>")
    newMovie.text(movieTitle + ": " + movieRating);
    let removeBtn = $("<button>");
    removeBtn.text('Remove');
    removeBtn.addClass("remove");
    newMovie.append(removeBtn);

    $("ul").append(newMovie);
    
    $(".movie").eq(0).val("");
    $(".movie").eq(1).val("");
})


$(document).on('click', '.remove', function(){
    $(this).parent().remove();
})