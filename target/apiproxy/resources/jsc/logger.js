if (response !== undefined) 
{
    var resObj = response.content.asJSON;
    
var ReslogMessage = {
    type: "response",
    message: resObj
}
context.setVariable("ReslogMessage",JSON.stringify(ReslogMessage));
}
   
   if (error !== undefined) 
{
    var resObj = error.content.asJSON;
    
var errorMessage = {
    type: "errror",
    message: resObj
}
context.setVariable("ReslogMessage",JSON.stringify(errorMessage));
}
   