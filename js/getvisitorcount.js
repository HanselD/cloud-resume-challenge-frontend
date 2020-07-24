$.ajax({
    url: "https://cda8dhds65.execute-api.us-east-1.amazonaws.com/Prod/count",
    method: 'POST',
    contentType: 'application/json',
    success: function(response) {
        $('#count').append(response.count)
    }   
  });