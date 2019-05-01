
$(document).ready(function() {    
    var apiKey = "813f912fb4ffba99eda7d8526fb7f66e"        
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key){
        var state_obj = state_info[key]
        var state_init = '#' + (key);
        var latitude = state_obj.lat;
        var longitude = state_obj.lng;
        
       var url = `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;
        
        //var url = `https://api.darksky.net/forecast/813f912fb4ffba99eda7d8526fb7f66e/`+ latitude + ',' + longitude;
        
    
        $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                
            console.log(data)
            var temp = data.currently.temperature;
            console.log(temp)

            //TODO 
            // Default color gray
            // Create a series of if else blocks to set the color for the state based on the temperature
            // Less than equal to 10 should be blue
            // Between 11 and 30 should be cyan
            // Between 31 and 50 should be green
            // Between 51 and 80 should be orange
            // Greater than 80 should be red

            if(temp <= 10){
                $(state_init).css('fill', "blue");
            }
            else if(temp >= 11 && temp <= 30){
                $(state_init).css('fill', "cyan");
            }
            else if(temp >= 31 && temp <= 50){
                $(state_init).css('fill', "green");
            }
            else if(temp >= 51 && temp <= 80){
                $(state_init).css('fill', "orange");
            }
            else if(temp > 80){
                $(state_init).css('fill', "red");
            }
            else {
                $(state_init).css('fill', "gray");
            }
            
        });
    });  
});