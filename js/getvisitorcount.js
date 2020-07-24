$.ajax({
    url: "https://srbogtrqw6.execute-api.us-east-1.amazonaws.com/Prod/count",
    type: 'POST',
    contentType: 'application/json'    
  }).done(function(data) {
    $('#monitor_data').append(data.body.message)
  });