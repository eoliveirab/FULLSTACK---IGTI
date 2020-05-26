window.addEventListener('load', start);

var inputFrequency = null;
var inputRange = null;
var divPodcast = null;





function start() {
    inputFrequency = document.querySelector('#inputFrequency');
    inputRange = document.querySelector('#inputRange');
    divPodcast = document.querySelector('#divPodcast');

   inputRange.addEventListener('input', handleRangeChange);

   handlePodcastsfrom(inputRange.value);
}


function handleRangeChange(event) {
   var currentFrequency = event.target.value;
   inputFrequency.value = currentFrequency;

   handlePodcastsfrom(currentFrequency);
}


function handlePodcastsfrom(frequency) {
    // console.log(realPodcasts);

    var foundPodcast = null;

    for (var i = 0; i < realPodcasts.length; i++) {
        var currentPodcast = realPodcasts[i];

        if (currentPodcast.id === frequency) {
            foundPodcast = currentPodcast;
            break; //para o for
        }
    }

    renderPodcast(founPodcast);
}
    

function renderPodcast(podcast) {
    if (!podcast) {
        divPodcasts.innerHtml = 'Nenhum podcast encontrado';
    } else {
       const img = document.createElement ('img');
       img.src = '../img/' + podcast.img;

       const title = document.createElement('h2');
       title.textContent = podcast.title;

       const description = document.createElement('p');
       description.textContent = podcast.description;

       divPodcasts.innerHtml = '';
       divPodcasts.appendChild(img);
       divPodcasts.appendChild(title);
       divPodcasts.appendChild(description);

    }
}
