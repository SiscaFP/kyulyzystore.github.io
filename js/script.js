  /*====================== scroll sections active link ======================*/
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
                    });
                };
            });
        };
/*====================== toggle icon navbar ======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

    /*====================== sticky navbar ======================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

      /*====================== remove toggle icon and navbar when click navbar link ======================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

        /*====================== scroll sections active link ======================*/


        /*====================== Ngitung ======================*/
        function hitungKeuntungan() {
            let followers = document.getElementById("followers").value;
            if (followers < 3500) {
                document.getElementById("warning").innerHTML = "Jumlah followers harus minimal 3500!";
                return;
            }
            let hargaModal = 14;
            let laba = (hargaModal * 0.2);
            let totalHarga = followers * hargaModal + laba;
            document.getElementById("hasil").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        function hitung() {
            let likes = document.getElementById("likes").value;
            if (likes < 3000) {
                document.getElementById("warning").innerHTML = "Jumlah likes harus minimal 3000!";
                return;
            }
            let hargaModal = 7;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-like-tt").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        function hitun() {
            let likes = document.getElementById("views").value;
            if (likes < 2100) {
                document.getElementById("warning").innerHTML = "Jumlah views harus minimal 2100!";
                return;
            }
            let hargaModal = 6;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-views-tt").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        function hitu() {
            let likes = document.getElementById("subs").value;
            if (likes < 1900) {
                document.getElementById("warning").innerHTML = "Jumlah subscribers harus minimal 1900!";
                return;
            }
            let hargaModal = 45;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-subs").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        function hituu() {
            let likes = document.getElementById("vie").value;
            if (likes < 2000) {
                document.getElementById("warning").innerHTML = "Jumlah views harus minimal 2000!";
                return;
            }
            let hargaModal = 21;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-vie").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }
        
        function hituuu() {
            let likes = document.getElementById("vie").value;
            if (likes < 2000) {
                document.getElementById("warning").innerHTML = "Jumlah views harus minimal 2000!";
                return;
            }
            let hargaModal = 21;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-viee").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        function hi() {
            let likes = document.getElementById("fol").value;
            if (likes < 1850) {
                document.getElementById("warning").innerHTML = "Jumlah views harus minimal 1850!";
                return;
            }
            let hargaModal = 10;
            let laba = (hargaModal * 0.2);
            let totalHarga = likes * hargaModal + laba;
            document.getElementById("hasil-fol").innerHTML = "Jumlah Total Harga: Rp. " + totalHarga.toLocaleString();
        }

        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function hitunggest() {
    var nilaiAwal = document.getElementById("inputNilai").value;
    var hasil = nilaiAwal - nilaiAwal * 0.10;
    document.getElementById("hasilnya").textContent = hasil;
  }

function hitunggestun() {
    var nilaiAwal = document.getElementById("nilaiBl").value;
    var hasil = nilaiAwal - nilaiAwal * 0.10;
    document.getElementById("hsl").textContent = hasil;
  }

function hitungp() {
    var nilaiAwal = document.getElementById("inputNilaip").value;
    var hasil = nilaiAwal + nilaiAwal * 0.20;
    document.getElementById("hhh").textContent = hasil;
  }

  function hitungDanTampilkan() {
    var inputNominal = document.getElementById("inputNominal").value;
    var nominal = parseFloat(inputNominal);
    var tambahan20Persen = nominal * 0.2;
    var uangHarusDikembalikan = nominal + tambahan20Persen;
    document.getElementById("hasilPerhitungan").innerText = uangHarusDikembalikan;
  }

  function hitungDanTampilkann() {
    var inputNominal = document.getElementById("inputNominall").value;
    var nominal = parseFloat(inputNominal);
    var tambahan35Persen = nominal * 0.35;
    var uangHarusDikembalikan = nominal + tambahan35Persen;
    document.getElementById("hasilPerhitungann").innerText = uangHarusDikembalikan;
  }

  function hitungDanTampilkannn() {
    var inputNominal = document.getElementById("inputNominalll").value;
    var nominal = parseFloat(inputNominal);
    var tambahan40Persen = nominal * 0.40;
    var uangHarusDikembalikan = nominal + tambahan40Persen;
    document.getElementById("hasilPerhitungannn").innerText = uangHarusDikembalikan;
  }

  function hitungDanTampilkannnn() {
    var inputNominal = document.getElementById("inputNominallll").value;
    var nominal = parseFloat(inputNominal);
    var tambahan55Persen = nominal * 0.55;
    var uangHarusDikembalikan = nominal + tambahan55Persen;
    document.getElementById("hasilPerhitungannnn").innerText = uangHarusDikembalikan;
  }