var axios = require('axios');


function callUrl(url){
    var config = {
        method: 'get',
        url: url,
        headers: { 
          'authority': 'www.pmlm.ir', 
          'upgrade-insecure-requests': '1', 
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
          'sec-fetch-site': 'none', 
          'sec-fetch-mode': 'navigate', 
          'sec-fetch-user': '?1', 
          'sec-fetch-dest': 'document', 
          'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
          'sec-ch-ua-mobile': '?0', 
          'accept-language': 'en-US,en;q=0.9,fa;q=0.8,ar;q=0.7,ru;q=0.6'
        }
      };
      
      axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

