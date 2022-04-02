function locate() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const coordinates = "You were last spotted at " + position.coords.latitude + " lat, " + position.coords.longitude +" long.";

            document.getElementById("button").innerHTML = coordinates;

        }
    );    
}
