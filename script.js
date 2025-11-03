// Menunggu sampai seluruh halaman (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
            
    // Memilih semua tombol navigasi dan semua slide
    const navButtons = document.querySelectorAll('.nav-button');
    const slides = document.querySelectorAll('.slide');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Fungsi untuk mengganti slide
    function switchSlide(event) {
        // 1. Dapatkan slide target dari atribut 'data-slide' tombol yang diklik
        const targetSlideId = event.currentTarget.getAttribute('data-slide');

        // 2. Hapus kelas 'active' dari semua tombol
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        // Tambahkan kelas 'active' HANYA ke tombol yang diklik
        event.currentTarget.classList.add('active');

        // 3. Hapus kelas 'active' dari semua slide (menyembunyikan semuanya)
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // 4. Cari slide yang cocok dan tambahkan kelas 'active' (menampilkannya)
        const targetSlide = document.getElementById(targetSlideId);
        if (targetSlide) {
            targetSlide.classList.add('active');
        }
        
        // 5. Scroll area konten kembali ke atas
        contentWrapper.scrollTo(0, 0);
    }

    // 6. Tambahkan 'event listener' ke setiap tombol
    // Saat tombol diklik, jalankan fungsi switchSlide
    navButtons.forEach(button => {
        button.addEventListener('click', switchSlide);
    });

});