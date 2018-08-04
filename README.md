# Friend-Man

This app allows users to find friends by comparing scores they submitted on a survey and suggesting them the person with similar scores to them. 

The way the app works is after the user submits their survey, the page send a POST request to the server of the info the client put in. The server, then calculates by comparing each score on every question to every other user on the site. 

The app is not limited to 10 questions, but if it is changed, all users should be removed. This is because the POST request will try to compare all the scores by using parseINT() and it cannot be used on something that is undefined.

