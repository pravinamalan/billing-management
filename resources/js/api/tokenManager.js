let temporaryToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.TESTING_ACCESS_TOKEN.DUMMY12345';
/**
 * Get Access token from local storage
 * @returns
 */
export const getAccessToken = () =>{
    let getAccessToken = window.localStorage.getItem('access_token');

    let accessToken = (getAccessToken != null && getAccessToken != undefined) ? getAccessToken : temporaryToken;

    return accessToken;

}

/**
* Set Access Token
* @param {Object} Request
*/
export const setAccessToken = request => {
    var authorizationToken = request.getResponseHeader('Authorization');
    if(authorizationToken != null && authorizationToken.length > 0) {
        window.localStorage.setItem('access_token', authorizationToken);

        let accessToken = document.querySelector('meta[name="access-token"]');
        accessToken.setAttribute('content', authorizationToken);
    }else{
        window.localStorage.setItem('access_token', temporaryToken);
    }
}
