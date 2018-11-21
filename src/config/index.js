/**gitalk评论系统  */
module.exports = {
    gitalk: {
        clientID: '',
        clientSecret: '',
        repo: '',
        owner: '',
        admin: '',
        id: window.location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    }
};
