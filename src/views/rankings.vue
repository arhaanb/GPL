<template>
  <div class="container">
    <div class="left_box">
      <h1>Live Data</h1>
        <div class="left_box_inside"> <h2>  <span class="dot"></span> Live</h2>
        <table>
          <tr> 
          <th> Jetha Ke Jaanbaaz</th>
          <td>205/5</td>
          </tr>
          <th>Mehta Ke Marathi</th>
          <td>205/5</td>
          </tr>
        </table>
        </div>
        <div class="left_box_inside2"> <h3>Recent</h3>
        <table>
          <tr> 
            <th>Blaster Babita</th>
          <td>205/5</td>
          </tr>
          <th>Dandiya Devils</th>
          <td>205/5</td>
          </tr>
        </table>
        </div>
                <div class="left_box_inside2"> <h3>Upcoming</h3>
        <table >
          <tr> 
            <th>Jetha Ke Jaanbaaz</th>
          <td>205/5</td>
          </tr>
          <th>Dandiya Devils</th>
          <td>205/5</td>
          </tr>
        </table>
        </div>
       
      </div>
      
     <div class="featured_match"><h4>Rankings</h4>
     <div class="right_box_inside">
      <table class="ranking" cellspacing="2" cellpadding="1">
      <thead>
        <tr>

          <th>
            <h5>Team Name</h5>
          </th>
          <th>
            <h5>Played</h5>
          </th>
          <th>
            <h5>Won</h5>
          </th>
          <th>
            <h5>Lost</h5>
          </th>
            <th>
            <h5>Points</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
         
          <td>Jetha Ke Jaanbaaz</td>

          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
         
        </tr>
        <tr>
         
          <td>Mehta Ke Marathi</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        <tr>
      
          <td>Blaster Babita</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
          <td>1</td>
        </tr>
        <tr>
      
          <td>Dandiya Devils</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        
        </tr>
        
      </tbody>
    </table>
     </div>
     </div>
  </div>
</template>
<style scoped>
.left_box {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  border-radius: 15px;
  background: #0d1012;
  margin-bottom: 2%;
  margin-top: 3%;
  padding: 2%;
  margin-left: 7%;
  color: white;
        font-family: 'Raleway', sans-serif;
  font-style: normal;
}

.left_box h1{
    font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 3ex;
 
}
.left_box_inside{
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 15px;
  background: #23292f;
  margin-bottom: 2%;
  margin-top: 3%;
  padding: 2%;
  margin-left: 3%;
  color: white;
}
.left_box_inside h2{
   margin-left: 1ex;
}
.left_box_inside2 h3{
   margin-left: 1ex;
}

.dot {
  height: 13px;
  width: 13px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 0.1em;
}
.left_box_inside th{
   padding-left: 1ex;
  padding-top: 0ex;
  padding-bottom: 1ex;

  text-align: right;
}
.left_box_inside td{
  padding-left: 4ex;
}
.left_box_inside2{
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 15px;
  background: #23292f;
  margin-bottom: 2%;
  margin-top: 12%;
  padding: 2%;
  margin-left: 3%;
  color: white;
}

.left_box_inside2 th{
   padding-left: 1ex;
  padding-top: 0ex;
  padding-bottom: 1ex;

  text-align: right;
}
.left_box_inside2 td{
  padding-left: 4ex;
}
h3 {
      font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 3ex;
}
h2 {
      font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 3ex;
}
.featured_match{
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 55%;
  border-radius: 15px;
  background: #0d1012;
  margin-bottom: 2%;
  margin-top: -47%;
  padding: 2%;
  margin-left: 35%;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
}
h4{
  font-weight: 900;
  font-size: 3ex;
}
.right_box_inside{
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 15px;
  background: #23292f;
  margin-bottom: 2%;
  margin-top: 5%;
  padding: 2%;
  margin-left: 3%;
  color: white;
}
.right_box_inside th{
  font-weight: 600;
  font-size: 1.5em;
  padding-left: 0.5em;
  width: 5%;
  text-align: left;
  height: 10%;
  background-color: #181c20;

}
.right_box_inside td {
  background-color: #181c20;
 
}
tbody>tr>:nth-child(1){
  width: 15%;
  padding: 2ex;
}
tbody>tr>:nth-child(2){
  width: 5%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(3){
  width: 5%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(4){
  width: 5%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(5){
  width: 5%;
  padding: 2ex;
  
}

@media (max-width: 500px) {
  .left_box {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 15px;
  background: #0d1012;
  margin-bottom: 2%;
  margin-top: 3%;
  padding: 2%;
  margin-left: 8%;
  color: white;
        font-family: 'Raleway', sans-serif;
  font-style: normal;
}
.featured_match{

  width: 80%;

  margin-bottom: 2%;
  margin-top: 8%;
  padding: 2%;
  margin-left: 8%;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-size: 1.5ex;

}
.right_box_inside{
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 15px;
  background: #23292f;
  margin-bottom: 2%;
  margin-top: 5%;
  padding: 2%;
  margin-left: 3%;
  color: white;
}
.right_box_inside th{
  font-weight: 600;
  font-size: 1.5em;
  padding-left: 0.5em;
  width: 4%;
  text-align: left;
  height: 10%;
  background-color: #181c20;

}
.right_box_inside td {
  background-color: #181c20;
 
}
tbody>tr>:nth-child(1){
  width: 15%;
  padding: 2ex;
}
tbody>tr>:nth-child(2){
  width: 2%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(3){
  width: 5%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(4){
  width: 5%;
  padding: 2ex;
  
}
tbody>tr>:nth-child(5){
  width: 5%;
  padding: 2ex;
  
}
}
</style>