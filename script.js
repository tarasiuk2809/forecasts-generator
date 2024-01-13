function getPredictionNumber() {
    const max = 5;
    return Math.floor(Math.random() * max);
}

function generatrePercentage() {
    const max = 101;
    return Math.floor(Math.random() * max);
}

function makeForecast(currentForecast, currentForecastPer) {
    let predictionNumber = getPredictionNumber();
    let predictionText;
    switch (predictionNumber) {
        case 0: predictionText = 'Если Вы проявите инициативу, успех не заставит себя ждать.';
            break;
        case 1: predictionText = 'Ваши надежды и планы сбудутся сверх всяких ожиданий.';
            break;
        case 2: predictionText = 'Иди вперед к своей удаче! И будет сердце пусть горячим!';
            break;
        case 3: predictionText = 'Скоро в твоей жизни появится новый верный друг!';
            break;
        case 4: predictionText = 'Не оставляйте усилий и получите желаемое';
            break;
    }
    let predictionPercentage = generatrePercentage();
    currentForecast.textContent = predictionText;
    currentForecastPer.textContent = predictionPercentage + '%';
}

const makePrediction = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast h1');
const currentForecastPer = document.querySelector('.current-forecast p');
const forecasts = document.querySelector('.forecasts');
let template = document.querySelector('#forecast-item');
let h3 = template.content.querySelector('h3');
let p = template.content.querySelector('p');


makePrediction.addEventListener('click', function () {

    if (currentForecast.textContent == '') {
        makeForecast(currentForecast, currentForecastPer);
    }
    else {

        h3.textContent = currentForecast.textContent;
        p.textContent = currentForecastPer.textContent;
        var clone = template.content.cloneNode(true);
        forecasts.prepend(clone);
        currentForecast.textConten = '';
        currentForecastPer.textContent = '';

        makeForecast(currentForecast, currentForecastPer);
    }
})




