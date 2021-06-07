// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // Logic goes here
  //create a new dictionary to transfer 2 numbers into 1 character, each unique code includes the storeid, transaction id, shop month and shop year.
  //
    var dicTransfer={
    0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",
     6:"g",7:"h",8:"i",9:"j",10:"k",
     11:"l",12:"m",13:"n",14:"o",15:"p",
     16:"q",17:"r",18:"s",19:"t"
     
  };
   var s1=dicTransfer[parseInt(storeId/10)];
   var s2=storeId%10;
var t1=parseInt(transactionId/1000);
var t2=parseInt(transactionId/100)%10;
  var t3=parseInt(transactionId/10)%10;
  var t4=transactionId%10;
  var shopDate=new Date();
  var sd1=dicTransfer[shopDate.getMonth()];
  var sd2=shopDate.getDate();
    return s1+s2+t1+t2+t3+t4+sd1+sd2;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Logic goes here
  //decode the code with information of storeid,transaction id, day and month.
    var dicTransfer={
    "a":0,"b":1,"c":2,"d":3,"e":4,"f":5,
     "g":6,"h":7,"i":8,"j":9,"k":10,
     "l":11,"m":12,"n":13,"o":14,"p":15,
     "q":16,"r":17,"s":18,"t":19
     
  };
  var schar=shortCode.split(""); storeid=dicTransfer[schar[0]]*10+parseInt(schar[1])
  var tranid=parseInt(schar[2]+schar[3]+schar[4]+schar[5])
  var sMonth=dicTransfer[schar[6]]
  var sDay=schar[7]*10+parseInt(schar[8])
  console.log(schar[7])
  var shopdate=new Date(2021,sMonth,sDay)
    return {
        storeId: storeid, // store id goes here,
        shopDate: shopdate, // the date the customer shopped,
        transactionId: tranid, // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}