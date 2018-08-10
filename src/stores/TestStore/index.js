import { observable, action } from 'mobx';
import md5 from 'md5';

class TestStore {
    @observable username;
    @observable password;
    @observable imgcode;

    constructor() {
        this.username = '';
        this.password = '';
        this.imgcode='';
    }

    @action changeUsername = (value) => {
        this.username = value;
    }
    @action changePassword = (value) => {
        this.password = md5(value);
    }
    @action changeImgcode = (value) => {
        this.imgcode = value;
    }
}

const testStore = new TestStore();

export default testStore;
export { TestStore };


/****
 * 
 * 用法：
 * import {observer, inject} from 'mobx-react';
 * import { observable, action } from 'mobx';
 * 1、在class上注入需要的仓库
 * @inject(['testStore'])  
   @observer

   2、使用
   this.props.loginStore
 * 
 * 
 */