$(document).ready(function(){

  var members = [
    num1 = ["Name", "Characters", "Host Y/N", "Leave Y/N"],
    num2 = ["Name2", "Characters", "Host Y/N", "Leave Y/N"],
    num3 = ["Name3", "Characters", "Host Y/N", "Leave Y/N"],
    num4 = ["Name4", "Characters", "Host Y/N", "Leave Y/N"]
  ];

  function getMemberTable() {
    var x ="", i;
    var hold = "";
    for (i=0; i<members.length; i++) {
      x = x + "<tr>";
      for(y=0; y<4;y++){
        hold = members[i][y].toString();
        x = x + "<td>"+hold+"</td>";
      }
      x = x + "</tr>";
    }
    document.getElementById("test").innerHTML = x;
  }

});
