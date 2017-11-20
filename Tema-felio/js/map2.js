$(window).on("load", function() {
      /*================== Map =====================*/
      var myLatlng = new google.maps.LatLng(51.5015588, -0.1276913);
      var mapOptions ={
      zoom:15,
      disableDefaultUI:true,
      scrollwheel:false,
      center:myLatlng
      }
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var image = '';
      var myLatLng = new google.maps.LatLng(51.5015588, -0.1276913);
      var beachMarker = new google.maps.Marker({
        position:myLatLng,
        map:map,
        icon:image
      });
});