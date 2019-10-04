
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/icon.css">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="js/materialize.min.js"></script>

    <script src="js/angular.min.js"></script>
     <script src="js/app.js"></script>
            
</head>
<body ng-app="chrome_app" ng-controller="popup_ctrl">
<div class="container widthfix" id="containerID">
         <style type="text/css">
         .green{
          background-color: #44bd32!important;
         }
                  .lightgreen{
          background-color: #2ecc71!important;
         }

                  .lightblue{
          background-color: #00a8ff!important;
         }
	 
	  .widthfix{
          width:96%!important;
         }
	 	 
	  #container{
          	  max-width:70%!important;
         }

         </style>
         <div class="" id="mainID">
            <div id="page0">
               <div class="row">
                  <div class="card-panel  col s12 l6 offset-l3 center-align">
                     <span class="white-text">
                        <h5 id="title" style="color:#607d8b;"><strong>Freelancing Platform Calculator</strong></h5>
                     </span>
                  </div>
               </div>
               <div id="page1" class="">
                  <div class="row">
                     <div class="col s12 l6 offset-l3 bbs" id="form1" name="form1">
<!--  -->               
                        <a ng-click="upwork()" class=" btn-large green">Upwork</a>
                        <a ng-click="fiverr()" class="  btn-large lightgreen">Fiverr</a>
                         <a ng-click="freelancer()" class="btn-large lightblue">Freelancer</a>

                        <div id="container_fiverr" ng-show="mode==1">
                        <h4>  Fiverr Income Aim Calculator</h4>
                          <div class="row rm">
                           <div class="input-field">

                             <h5 for="f1" class="active">Minimum aim per month in USD</h5>
                              <input placeholder="0" id="f1" name="f1" type="number" class="validate" ng-model="aimpermonth" ng-change="change()">
                             
                           </div>
                        </div>


                        <div class="row rm">
                           <div class="input-field">
                                                          <h5 for="f1" class="active">Platform Fees(Percentage)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="platformfees" >

                           </div>
                        </div>

                        <div class="row rm">
                           <div class="input-field">
                                                          <h5 for="f1" class="active">Minimum Charge Per Month(Earnings+Platform Fees)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="minchargepermonth">

                           </div>
                        </div>

                                                <div class="row rm">
                           <div class="input-field">
                                                          <h5 for="f1" class="active">Minimum Charge Per Week(Earnings+Platform Fees)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="minchargeperweek">

                           </div>
                        </div>


                          <div class="row rm">
                           <div class="input-field">
                                                          <h5 for="f1" class="active">Minimum Charge Per Day(Earnings+Platform Fees)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="minchargeperday">

                           </div>
                        </div>
                   </div>





                  <div id="container_upwork" ng-show="mode==2">
                   <h4>Upwork Project Earnings Calculator</h4>

                          <div class="row rm">
                           <div class="input-field">
                             <h5  class="active">How much have you billed this specific client for previous projects in total</h5>
                            


                                    <select style="display:block!important" class="input-field" ng-model="client_billed" ng-change="feechange()">
                                      <option ng-selected value="1">Less than 500USD</option>
                                      <option value="2">More than 500USD Less Than 10 000USD</option>
                                      <option value="3">More than 10 000USD</option>
                                    </select>
                           </div>
                        </div>



                          <div class="row rm">
                           <div class="input-field">
                             <h5  class="active">How much do you want to earn(net) from the project</h5>
                              <input placeholder="0" id="f1" name="f1" type="number" class="validate" ng-model="projectaim" ng-change="upwork_change()">
                             
                           </div>
                        </div>


                        <div class="row rm">
                           <div class="input-field">
                              <h5  class="active">Platform Fees(Percentage)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="platformfees" >

                           </div>
                        </div>

                        <div class="row rm">
                           <div class="input-field">
                              <h5 for="f1" class="active">How much you should charge client(Your Earnings+Platform Fees)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="charge_upwork">

                           </div>
                        </div>
                   </div>






                                     <div id="container_upwork" ng-show="mode==3">
                   <h4>Freelancer Project Earnings Calculator</h4>
                          <div class="row rm">
                           <div class="input-field">
                             <h5 for="f1" class="active">How much do you want to earn(net) from the project</h5>
                              <input placeholder="0" id="f1" name="f1" type="number" class="validate" ng-model="projectaim" ng-change="freelancer_change()">
                             
                           </div>
                        </div>


                        <div class="row rm">
                           <div class="input-field">
                              <h5 for="f1" class="active">Platform Fees(Percentage)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="platformfees" >

                           </div>
                        </div>

                        <div class="row rm">
                           <div class="input-field">
                              <h5 for="f1" class="active">How much you should charge client(Your Earnings+Platform Fees)</h5>
                              <input placeholder="0" id="f1" disabled name="f1" type="number" class="validate" ng-model="charge_freelancer">

                           </div>
                        </div>
                   </div>




                        <br>
                        <div class="row rm">
                           <div class=" right-align">
                            <!--   <button class="btn waves-effect waves-light  btn-large  teal lighten-2 " type="button" id="b1" name="b1"><b>Submit</b> </button> -->
                           </div>
                        </div>
                     </div>
                  </div>
                  <br>
               </div>
              
            </div>
            <br>    
         </div>
      </div>
      <script src="js/jquery.min.js">  </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"> </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
</body>
</html>
