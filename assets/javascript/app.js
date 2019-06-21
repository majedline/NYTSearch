function searchArticles(){

    var term = $("#search-term").val().trim();
    var numberRecords = $("#number-of-records").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();

    var apiKey = "Dd1H4kApNLQLde9FMmEGHBaBG92kcTrn";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+term+"&api-key="+apiKey+"&count="+numberRecords+"&begin_date="+startYear+"&end_date="+endYear;
    
    $.ajax({
        
        url: queryURL,
        method: "GET"

    }).then(result=>{
        var content = $("#content");
        

    });
}


function clearResults(){
    $("#content").empty();
}

$(document).ready(function(){

    $("#search-button").click(searchArticles);
    $("#clear-results-button").click(clearResults);
});

