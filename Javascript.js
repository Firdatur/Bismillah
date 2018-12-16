function terimainput() {
    var a = document.getElementById("nama").value;
    var b = document.getElementById("NIM").value;
    var c = document.getElementById("TTL").value;
    var d = document.getElementById("jeniskelamin").value;
    var e = document.getElementById("email").value;
    var f = document.getElementById("ormawa").value;
    var g = document.getElementById("telepon").value;
    var h = document.getElementById("alamat").value;

    var tabel = document.getElementById("inputan");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "") {
        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = c;
        cell4.innerHTML = d;
        cell5.innerHTML = e;
        cell6.innerHTML = f;
        cell7.innerHTML = g;
        cell8.innerHTML = h;
        alert("Data berhasil diinputkan")
    } else {
        alert("Maaf Semua Data tidak boleh kosong !");
    }
}