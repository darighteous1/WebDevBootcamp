// Check Off Specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

// Click on the X to delete Todo
// "on" adds listener for all future elements
// note: an event listener can be added only on a currently existing element
// so we add the listener to the parent (in this case the "ul")
// and then we add a second argument to the on() event
// that specifies which child element should trigger the event
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) { // Enter
        // Grab new todo text from input
        var todoText = $(this).val();

        // clear input value
        $(this).val("");
        
        // create new li and add to ul
        $("ul").append(createTodoItem(todoText));


    }
});

function createTodoItem(text) {
    return "<li><span>X</span> " + text + "</li>";
}