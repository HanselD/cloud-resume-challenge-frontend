$.ajax({
    url: "https://srbogtrqw6.execute-api.us-east-1.amazonaws.com/Prod/count",
    method: 'POST',
    contentType: 'application/json',
    success: function(response) {
        $('#count').append(response.count)
    }   
  });