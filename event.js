function tambah() {
    var a = document.getElementById("satu").value;
    var b = document.getElementById("dua").value;
    var c = document.getElementById("tiga").value;
    

    var tabel = document.getElementById("table");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    

    if (a != "" && b != "" && c != "" ) {
        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = c;
        selectedRowToInput()
 
    }
}

        function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {

                      rIndex = this.rowIndex;
                      document.getElementById("satu").value = this.cells[0].innerHTML;
                      document.getElementById("dua").value = this.cells[1].innerHTML;
                      document.getElementById("tiga").value = this.cells[2].innerHTML;
                    };
                }
            }
            selectedRowToInput();

            function edit()
            {
                var satu = document.getElementById("satu").value,
                    dua = document.getElementById("dua").value,
                    tiga = document.getElementById("tiga").value;
               {
                table.rows[rIndex].cells[0].innerHTML = satu;
                table.rows[rIndex].cells[1].innerHTML = dua;
                table.rows[rIndex].cells[2].innerHTML = tiga;
              }
            }
            
            function hapus()
            {
                table.deleteRow(rIndex);
                document.getElementById("satu").value = "";
                document.getElementById("dua").value = "";
                document.getElementById("tiga").value = "";
            }