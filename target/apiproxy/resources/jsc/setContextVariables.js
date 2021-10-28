 var reqObj = request.content.asJSON;
context.setVariable("appId", reqObj.applicationId);
context.setVariable("referenceId", reqObj.referenceId);

//print("appId:" +context.getVariable("appId") );
//print("referenceId:" +context.getVariable("referenceId"));