/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


// ************************* Currency Convertor *************************





function myJsFunction(){

     text=document.getElementById('amount').value;
      result = document.getElementById('result');

     console.log(text);
         result.innerHTML=text;

 }
 var result = "";
 var text = "";

var http = new XMLHttpRequest();


http.onreadystatechange = (e) => {


     var amount = document.getElementById('amount').value;
     var from = document.getElementById('from');
     var result = document.getElementById('result');

    var getvalue = http.responseText
    var responseJSON = JSON.parse(getvalue);
    var data = responseJSON.quotes;
    var keys = Object.keys(data);
    var result = "";


    text=document.getElementById('amount').value;

    console.log(text);

    keys.forEach((element) =>{
        result = text+ " USD is equivalent to " + data[element]*text+" EUR"+ "<br>";

        });

        document.getElementById('result').innerHTML = result ;

}

const url =
'http://data.fixer.io/api/latest?access_key=d42999275b2414296ebe89b334b8a6e0=';
http.open("GET", url);
http.send();
