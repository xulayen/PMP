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
    }
}

export  { common}