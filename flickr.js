
// js file for flickr photo stream 
// by Sulochana Bhujel Thapa Magar
    
    // showPhotos fuction for showing photos
    function showPhotos()
    {
   
    

    var listPhotos  = [];  // elements for unordered list of images
    // add element to listPhotos

    // add photos to list
    var addPhotos = function (item) {
        var img = (item.media.m);
        
        var the_arr = item.link.split('/');
             the_arr.pop();
        var authorlink = the_arr.slice(0, -1).join('/')+'/';
        
        authorfinal = item.author.split('"');
        var list = '<div class="col-6 col-md-4" ><div class="thumbnail"><a href="' + item.link + '" target="_blank">';
        	list += '<img src="' + img + '" title="'+ item.title + '"/>';
        	list += '</a><div class="caption center-block"><p><h4><a href="' + item.link+ '"target="_blank">' + item.title + '</a></h4><h5>by<a href="' + authorlink + '"target="_blank"> ' + authorfinal[1] + '</a></h5><p>Published on:'+ item.published +'</p><h6>Tags: '+ item.tags +'</h6></div></div></div>';
        	listPhotos.push(list);
    }

    // callback to display returned image data
        var display = function (data) {
         data.items.forEach(addPhotos);
         var ul = '<ul>' + listPhotos.join('') + '</ul>'
         $('#images').html(ul);
    }


    // retrieving data from http://api.flickr.com/services/feeds/photos_public.gne. Here, we only use available public data.

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=80565168@N03&lang=en-us&format=json&jsoncallback=?", display);

    }


    // For Navigation

     function myNavigation1(){

        var listPhotos  = [];  // elements for unordered list of images

    // add element to listPhotos
     // add photos to list
    var addPhotos = function (item) {
        var img = (item.media.m);
        var the_arr = item.link.split('/');
             the_arr.pop();
        var authorlink = the_arr.slice(0, -1).join('/')+'/';
        authorfinal = item.author.split('"');
        var list = '<div class="col-6 col-md-4" ><div class="thumbnail"><a href="' + item.link + '" target="_blank">';
            list += '<img src="' + img + '" title="'+ item.title + '"/>';
            list += '</a><div class="caption center-block"><p><h4><a href="' + item.link+ '"target="_blank">' + item.title + '</a></h4><h5>by<a href="' + authorlink + '"target="_blank"> ' + authorfinal[1] + '</a></h5><p>Published on:'+ item.published +'</p><h6>Tags: '+ item.tags +'</h6></div></div></div>';
            listPhotos.push(list);
    }

    // callback to display returned image data
        var display = function (data) {
         data.items.forEach(addPhotos);
         var ul = '<ul>' + listPhotos.join('') + '</ul>'
         $('#images').html(ul);
    }

    // retrieving data from http://api.flickr.com/services/feeds/photos_public.gne. Here, we only use available public data.

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=80565168@N03&lang=en-us&format=json&jsoncallback=?", display);


    }

    // fuction for Navigation 2

    function myNavigation2(){

        var listPhotos  = [];  // elements for unordered list of images

    // add element to listPhotos
    var addPhotos = function (item) {
        var img = (item.media.m);
        var the_arr = item.link.split('/');
             the_arr.pop();
        var authorlink = the_arr.slice(0, -1).join('/')+'/';
        authorfinal = item.author.split('"');
        var list = '<div class="col-6 col-md-4" ><div class="thumbnail"><a href="' + item.link + '" target="_blank">';
            list += '<img src="' + img + '" title="'+ item.title + '"/>';
            list += '</a><div class="caption center-block"><p><h4><a href="' + item.link+ '"target="_blank">' + item.title + '</a></h4><h5>by<a href="' + authorlink + '"target="_blank"> ' + authorfinal[1] + '</a></h5><p>Published on:'+ item.published +'</p><h6>Tags: '+ item.tags +'</h6></div></div></div>';
            listPhotos.push(list);
    }

    // callback to display returned image data
        var display = function (data) {
         data.items.forEach(addPhotos);
         var ul = '<ul>' + listPhotos.join('') + '</ul>'
         $('#images').html(ul);
    }

    // retrieving data from http://api.flickr.com/services/feeds/photos_public.gne. Here, we only use available public data.

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=91423489@N04&lang=en-us&format=json&jsoncallback=?", display);


    }


    // function for Navigation 3
    function myNavigation3(){

        var listPhotos  = [];  // elements for unordered list of images

    // add element to listPhotos

    var addPhotos = function (item) {
        var img = (item.media.m);
        var the_arr = item.link.split('/');
             the_arr.pop();
        var authorlink = the_arr.slice(0, -1).join('/')+'/';
        authorfinal = item.author.split('"');
        var list = '<div class="col-6 col-md-4" ><div class="thumbnail"><a href="' + item.link + '" target="_blank">';
            list += '<img src="' + img + '" title="'+ item.title + '"/>';
            list += '</a><div class="caption center-block"><p><h4><a href="' + item.link+ '"target="_blank">' + item.title + '</a></h4><h5>by<a href="' + authorlink + '"target="_blank"> ' + authorfinal[1] + '</a></h5><p>Published on:'+ item.published +'</p><h6>Tags: '+ item.tags +'</h6></div></div></div>';
            listPhotos.push(list);
    }

    // callback to display returned image data
        var display = function (data) {
         data.items.forEach(addPhotos);
         var ul = '<ul>' + listPhotos.join('') + '</ul>'
         $('#images').html(ul);
    }

    // retrieving data from http://api.flickr.com/services/feeds/photos_public.gne. Here, we only use available public data.

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=57810730@N03&lang=en-us&format=json&jsoncallback=?", display);


    }

     // function for navigation 4
    function myNavigation4(){

        var listPhotos  = [];  // elements for unordered list of images

    // add element to listPhotos

    var addPhotos = function (item) {
        var img = (item.media.m);
        var the_arr = item.link.split('/');
             the_arr.pop();
        var authorlink = the_arr.slice(0, -1).join('/')+'/';
        authorfinal = item.author.split('"');
        var list = '<div class="col-6 col-md-4" ><div class="thumbnail"><a href="' + item.link + '" target="_blank">';
            list += '<img src="' + img + '" title="'+ item.title + '"/>';
            list += '</a><div class="caption center-block"><p><h4><a href="' + item.link+ '"target="_blank">' + item.title + '</a></h4><h5>by<a href="' + authorlink + '"target="_blank"> ' + authorfinal[1] + '</a></h5><p>Published on:'+ item.published +'</p><h6>Tags: '+ item.tags +'</h6></div></div></div>';
            listPhotos.push(list);
    }

    // callback to display returned image data
        var display = function (data) {
         data.items.forEach(addPhotos);
         var ul = '<ul>' + listPhotos.join('') + '</ul>'
         $('#images').html(ul);
    }

    // retrieving data from http://api.flickr.com/services/feeds/photos_public.gne. Here, we only use available public data.

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=58457330@N05&lang=en-us&format=json&jsoncallback=?", display);


    }
   
  // for showing data and manage navigations      
    $(document).ready( function() {
        showPhotos();

        function showActive(this_li){
            activelength = $('.nav-pills').find('li').hasClass('active');
            console.log(activelength);
            if(activelength){
                $('.nav-pills').find('li').removeClass('active');
            }
            this_li.addClass('active');
        }
        $("#nav1").click(function(){
            showActive($(this));
            myNavigation1();
        });

        $("#nav2").click(function(){
            showActive($(this));
            myNavigation2();
        });

        $("#nav3").click(function(){
            showActive($(this));
            myNavigation3();
        });

        $("#nav4").click(function(){
            showActive($(this));
            myNavigation4();
        });
    });


// for search
 function searchPhotos(){
        alert("Search function is not enable now! Please try later.")
    }