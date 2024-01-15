function getPredictionNumber() {
    const max = 5;
    return Math.floor(Math.random() * max);
}

function generatrePercentage() {
    const max = 101;
    return Math.floor(Math.random() * max);
}

function makeForecast(currentForecast, currentForecastPer) {
    const predictionNumber = getPredictionNumber();
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
    const predictionPercentage = generatrePercentage();
    currentForecast.textContent = predictionText;
    currentForecastPer.textContent = predictionPercentage + '%';
}

function forecastsGenerator(currentForecast,currentForecastPer){
    const template = document.querySelector('#forecast-item');
    let forecastsPrediction = template.content.querySelector('h3');
    let forecastsPercentage = template.content.querySelector('p');
    const forecasts = document.querySelector('.forecasts');

    if (currentForecast.textContent == '') {
        makeForecast(currentForecast, currentForecastPer);
    }
    else {

        forecastsPrediction.textContent = currentForecast.textContent;
        forecastsPercentage.textContent = currentForecastPer.textContent;
        const clone = template.content.cloneNode(true);
        forecasts.prepend(clone);
        currentForecast.textConten = '';
        currentForecastPer.textContent = '';

        makeForecast(currentForecast, currentForecastPer);
    }
}

const makePredictionBtn = document.querySelector('.forecast-btn');
const currentForecast = document.querySelector('.current-forecast h1');
const currentForecastPer = document.querySelector('.current-forecast p');

makePredictionBtn.addEventListener('click', () => forecastsGenerator(currentForecast, currentForecastPer));
