$(document).ready(function() {
  console.log('up and running!');

  getCats();

  $("#catForm").on("submit", postCat);

  function getCats() {
    $.ajax({
      type: 'GET',
      url: '/cats',
      success: function (data) {
        appendCats(data)
      }
    });
  }

  function appendCats(cats) {
      $('#catBox').empty();

      for (var i = 0; i < cats.length; i++) {
        $('#catBox').append('<div><h2>' + cats[i].name + '</h2><p>' + cats[i].temperament + '</p></div>');
      }
  }

  function postCat(event) {
    event.preventDefault();
    var newCat = {};

    $.each($('#catForm').serializeArray(), function(i, field) {
      newCat[field.name] = field.value;
    });

    $.ajax({
      type: 'POST',
      url: '/cats',
      data: newCat,
      success: function (res) {
        console.log(res)
        getCats();
      }
    });
  }

});
