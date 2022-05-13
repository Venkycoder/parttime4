var arr=new CustomArray();

    function CustomArray(){
Object.defineProperty(this,'length',{
    enumerable:false,
    writable:true,
});

for( let index=0; index<arguments.length; index++){
        this[index]=arguments[index];
    }
    this.length=arguments.length;

    }
    

CustomArray.prototype.push= function(item){
    let index=this.length;
    this[index]=item;
    this.length++;
};
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
console.log(arr);
CustomArray.prototype.pop=function(){
    let index=this.length-1;
    var d = this[index];
    delete this[index];
    this.length--;
    return d;
};

CustomArray.prototype.top=function(){
    let index=this.length-1;
    var d = this[index];
    return d;
};

CustomArray.prototype.printed=function(){
    var arr1=[];
    var len=this.length;
    for(let i=0; i<len; i++){
        arr1.push(this[i]);
    }
return arr1;
};

CustomArray.prototype.printedRev=function(){
    var arr2=[];
    var len=this.length-1;
    for(let i=len; i>=0; i--){
        arr2.push(this[i]);
    }
return arr2;
};

CustomArray.prototype.size=function(){
   return this.length;
};
var deleted=arr.pop();
var topElm=arr.top();
console.log(deleted);
console.log(topElm);
var printarr=arr.printed();
console.log(printarr);
var printarr2=arr.printedRev();
console.log(printarr2);
console.log(arr.size());
