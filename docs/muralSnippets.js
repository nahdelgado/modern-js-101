

var aFunctionScopedVariable = 42;

const aModernConstant = "Never change Ⓡ";
let aBlockScopedVariable = true;

function anOldStyleFunc(aParam, anotherParam) {
    // It has a specific `this` reference
}

const aGoodLookingArrowFunc = () => {
    // It inherits `this` from the scope
};

var someUtil = require("a-commonjs-module");

import someUtil from "an-es6-module";

module.exports = {
    aCommonJsNamedExport: 1337,
    anotherOneUghh: "I stink :("
};

export default () => { console.log("Such a nice log") };
export const anEs6NamedExport = [1, 2, 3, 14];

var name = "Nahuel";
var age = 30;
var greeting = "Hello, my name is " + name + " and I'm " + age;


const coolName = "Ṉ̵͔̫̖̊͌̈́̑͜ä̴̫͘h̵̯̼̻͐̈́̔̈́͐̀̚̕ũ̵̠̼̹̖̆̄́̀̚ͅe̸̡̖͉̼̝̐̋̾̾͑̇l̸̳̟̐̄̅̔̿̕";
const coolAge = 3̵̭͕̘̜͌̎͛̍͘̚0̶̬̦͙̅̕;
const theCoolestGreeting = `Hello, my name is ${coolName},
I'm ${coolAge},
and I'm so cool I can have multiline strings!`;

var anObj = { aProp: 1, anotherProp: 2, aNestedProp: { damn: 5 } };
var aSum = anObj.aProp + anObj.anotherProp + anObj.aNestedProp.damn;

const sameObj = { aProp: 1, anotherProp: 2, aNestedProp: { damn: 5 } };
const { aProp, anotherProp, aNestedProp: { damn: noCurse } } = sameObj;
const coolSum = aProp + anotherProp + noCurse;

var anArray = [1, 2];
var biggerArray = anArray.concat([3, 4]);

const sameArray = [1, 2];
const coolBigArray = [...sameArray, 3, 4];
