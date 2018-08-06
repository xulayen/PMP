/**gitalk评论系统  */
module.exports = {
    gitalk: {
        clientID: '468914a2f6df58fa9486',
        clientSecret: 'a395496e467f9c0677c098a6c092cf8932bf1d39',
        repo: 'PMP',
        owner: 'xulayen',
        admin: 'xulayen',
        id: window.location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    }
};