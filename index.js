// Write your solution in this file!
let driver = {name:'john',age:21,carName:'jeep'};
function updateDriverWithKeyAndValue(obj,key,value){
 let newobj = Object.assign({}, obj, { [key]: value });
 return newobj;
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
   obj[key] = value;
 
  return obj;
}
function deleteFromDriverByKey(obj,key,value){
 let newobj = Object.assign({}, obj, { [key]: value });
  delete newobj[key];
  return newobj;
    
}
function destructivelyDeleteFromDriverByKey(obj,key){
 delete obj[key];
  return obj;
}