const nama = "niki fanggidae";
let usia = "20";

const biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia< 20) {
        //kondisi jika terpenuhi
       generasi = "anda masih bocil"
    } 
    else {
        //kondisi jika tidak terpenuhi
       generasi = "sudah dewasa"
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();