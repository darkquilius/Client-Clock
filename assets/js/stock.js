// Stock ticker information from Alpha Vantage

var APIKey = "O63WTSMAPRHTKN7N";

function stockInfo(inputVal) {

    // // Sample URL: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
    var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + inputVal + "&apikey=" + APIKey;

    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Response is all objects. Thus, to access data, must use property name for current date
        // TODO: Some stocks may not have current date. Need to handle this case
        var currentDate = moment().format('YYYY-MM-DD');
        // console.log(currentDate);
        // console.log(response);
        // console.log(parseInt(response["Time Series (Daily)"][currentDate]["2. high"]).toFixed(2));

        $('#stockSymbol').text(inputVal);

        $('#dailyHigh').text(parseInt(response["Time Series (Daily)"][currentDate]["2. high"]).toFixed(2));
        $('#dailyLow').text(parseInt(response["Time Series (Daily)"][currentDate]["3. low"]).toFixed(2));

    });
};