import { observable, action } from 'mobx';

class PagesStore {
    @observable pageNumber;
    @observable numPages;
    @observable pdfName;

    constructor() {
        this.pageNumber =1;
        this.numPages = 0;
    }

    @action pre = () => {
        if (parseInt(this.pageNumber) > 1) {
            --this.pageNumber;
        }
    }
    @action next = () => {
        if (parseInt(this.pageNumber) < parseInt(this.numPages)) {
            ++this.pageNumber;
        }
    }
    @action change = (value) => {
        if (!isNaN(value) && value && value != '0') {
            this.pageNumber = parseInt(value);
        }
        if (parseInt(this.pageNumber) >= parseInt(this.numPages)) {
            this.pageNumber = this.numPages;
        }
        if (value == "") {
            this.pageNumber = 1;
        }

        if (!/^\d+$/.test(value)) {
            this.pageNumber = 1;
        }
    }
    @action setnumPages = (value) => {
        this.numPages = value;
    }
    
}

const pageStore = new PagesStore();

export default pageStore;
export { PagesStore };
