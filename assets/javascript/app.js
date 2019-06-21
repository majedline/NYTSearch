function searchArticles(){
    event.preventDefault();
    var term = $("#search-term").val().trim();
    var numberRecords = $("#number-of-records").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
    var nextYear = (new Date()).getFullYear() + 1;

    var queryParams = {"q": term, "api-key": "Dd1H4kApNLQLde9FMmEGHBaBG92kcTrn"};

    if(startYear !== "" && endYear !== ""){
        queryParams.fq = "pub_year:[" + startYear + " TO " + endYear + "]"; 
    }
    else if(startYear !== ""){
        queryParams.fq = "pub_year:[" + startYear + " TO " + nextYear + "]"; 
    }
    else if(endYear !== ""){
        queryParams.fq = "pub_year:[1900 TO " + endYear + "]"; 
    }
    else
        queryParams.fq = "";
    
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $.param(queryParams);
    
    
    $.ajax({
        
        url: queryURL,
        method: "GET"

    }).then(result=>{
        var content = $("#content");
        result.response.docs.forEach(item => {
            var title = $("<h1>").text(item.abstract);   
            content.append(title); 
        });
        
        console.log(result);

    });
}


function clearResults(){
    $("#content").empty();
}

$(document).ready(function(){

    $("#search-button").click(searchArticles);
    $("#clear-results-button").click(clearResults);
});

