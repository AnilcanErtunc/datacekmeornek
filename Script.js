const cheerio = require("cheerio");
const rp = require("request-promise");

// function cek()
//{


    var url = "https://www.hepsiburada.com/samsung-galaxy-a70-2019-128-gb-samsung-turkiye-garantili-pm-HB00000JGNUE-yorumlari";
    rp(url).then((html)=>
    {
        var $ = cheerio.load(html);
        console.log 
        (
            $(".review-text").text()
            
        );
       // var deger =  $(".review-text").text();
        //return deger;
        
    })
//}