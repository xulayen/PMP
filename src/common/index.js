var common={
    getRouteName:function(){
        let _c;
        if (window.location.hash) {
            _c = window.location.hash;
            _c = _c.substr(_c.indexOf('#') + 1)
        } else {

            _c = window.location.pathname;
        }
        return _c;
    },
    isMobile:function(){
        var sUserAgent=navigator.userAgent;
        var mobileAgents=['Android','iPhone','Symbian','WindowsPhone','iPod','BlackBerry','Windows CE'];

        for( var i=0;i<mobileAgents.length;i++){

            if(sUserAgent.indexOf(mobileAgents[i]) > -1){
                return true;
            }
        }
        return false;
    }
}

export { common}