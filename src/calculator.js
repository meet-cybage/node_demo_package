
export class Calculator{
    constructor(val1, val2){
        this.val1 = val1;
        this.val2 = val2;
    }
    add(){
        return this.val1 + this.val2
    }
    sub(){
        return this.val1 - this.val2
    }
    mul(){
        return this.val1 * this.val2
    }
    div(){
        return this.val1 / this.val2
    }
}