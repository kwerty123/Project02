$( document ).ready(function() {
    console.log( "ready!" );

    // $('#search-field').on('change', () => {
    //   console.log('input was changed!');
    // });

    // $('#search-field').change(() => {
    //   console.log('input was changed!');
    // });

    $('.dropdown').click(function(){
      $('.menu-item').toggle();
    });

/*$('#search-button').click(function(){
  $('#search-icon').animate({
    padding: '+=50px'
  })
  });
*/
    $('#search-button').on('click', () => {
      // console.log('i was clicked');
      // console.log($('#search-field').val());
      let searchTerm = $('#search-field').val();

      console.log(searchTerm);

      let url = "https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=" + searchTerm;


      // jquery way of doin it
      $.get(url, function(giphyResponse) {
        // console.log(giphyResponse);
        // console.log('giphyData', giphyResponse.data)
        // console.log('giphyData result 0 (1st result)', giphyResponse.data[0]);
        // console.log('giphyData result 0 (1st result) - all images list', giphyResponse.data[0].images);
        // console.log('giphyData result 0 (1st result) - all images list - original image', giphyResponse.data[0].images.original);

        // console.log('giphyData result 0 (1st result) - all images list - original image - url', giphyResponse.data[0].images.original.url);
// 

        let resultsHtml = '';


        // for(let image of response.images){
        //   resultsHtml = resultsHtml + `<img src=${image.images.original.url} />`
        // }

        // $('#results').thml(resultsHtml)


        for (let image of giphyResponse.data) {                
          //let imgHtml = `<img src=${image.images.original.url} class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 col-span-12 sm:col-span-6 md:col-span-4 "/>`
          let imgHtml = `<img src=${image.images.original.url} />`
          resultsHtml = resultsHtml + imgHtml;          
        }

        console.log(resultsHtml);

        $('#search-results').html(resultsHtml);


      });


    })



});