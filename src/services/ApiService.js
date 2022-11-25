const ApiService = {
   serverUrl: 'https://api.dopamineads.com/wp-json',

   fetch:async function (method,url, data) {


      var request={
         method: method,
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
      };
    
      if(method === "POST")
      {
         request.body=JSON.stringify(data);
      }

      return fetch(ApiService.serverUrl + url,request).then(async (response) => {

         if(response.status === 401)
         {
            const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
               resolutionFunc({Status:401});
           });

           return promiseA;
         }

         return response.json();
      })
      .catch((error) => {
         console.log(error.message);
      });
   },
   getFetch: function (url, data) {
      return ApiService.fetch("GET",url,data)
   },
   deleteFetch: function (url, data) {
      return ApiService.fetch("DELETE",url,data)
   },
   postFetch: function (url, data) {
      return ApiService.fetch("POST",url,data)
   },
 };
 
 export { ApiService as default };
