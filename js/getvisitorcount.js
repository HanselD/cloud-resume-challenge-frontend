$.ajax({
    url: "https://srbogtrqw6.execute-api.us-east-1.amazonaws.com/Prod/count",    
  }).done(function(data) {
    $('#monitor_data').append(JSON.stringify(data))
  });