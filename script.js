const mahasiswa = [
    "Bagas",
    "Muhammad Maulana Yusuf",
    "Muhammad Bashir Abdullah",
    "Muhammad Nabil Abdillah",
    "Firyal Luthfiyah"
];

const mataKuliah = [
    "Studi Agama",
    "Matematika Ekonomi",
    "Bahasa Arab",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Manajemen",
    "Pancasila",
    "Ushul Fiqh",
    "Fiqih Muamalah",
    "Ekonomi Islam",
    "Ekonomi Micro Syariah",
    "Statistika Ekonomi",
    "Akuntasi",
    "Bisnis",
    "Kewarganegaraan"
];

// === ISI TABEL ABSEN ===
const absenBody = document.querySelector("#absenTable tbody");
mahasiswa.forEach((nama, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${nama}</td>
        <td>
            <select>
                ${mataKuliah.map(mk => `<option>${mk}</option>`).join('')}
            </select>
        </td>
        <td>
            <select class="status">
                <option>Hadir</option>
                <option>Izin</option>
                <option>Sakit</option>
                <option>Alpa</option>
            </select>
        </td>
    `;
    absenBody.appendChild(row);
});

// === SIMPAN ABSEN ===
document.querySelector("#simpanAbsen").addEventListener("click", () => {
    const rows = document.querySelectorAll("#absenTable tbody tr");
    let hasil = [];
    rows.forEach(row => {
        const nama = row.children[1].textContent;
        const matkul = row.children[2].querySelector("select").value;
        const status = row.children[3].querySelector("select").value;
        hasil.push({ nama, matkul, status });
    });
    alert("✅ Absen berhasil disimpan!");
    console.table(hasil);
});

// === FORM TUGAS ===
const namaSelect = document.querySelector("#namaMahasiswa");
const mkSelect = document.querySelector("#mataKuliah");
mahasiswa.forEach(nama => {
    const opt = document.createElement("option");
    opt.textContent = nama;
    namaSelect.appendChild(opt);
});
mataKuliah.forEach(mk => {
    const opt = document.createElement("option");
    opt.textContent = mk;
    mkSelect.appendChild(opt);
});

// === SIMPAN TUGAS ===
const tugasForm = document.querySelector("#tugasForm");
const listTugas = document.querySelector("#listTugas");

tugasForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = namaSelect.value;
    const mk = mkSelect.value;
    const file = document.querySelector("#fileTugas").files[0];

    if (file) {
        const li = document.createElement("li");
        li.textContent = `${nama} - ${mk} (${file.name}) ✅`;
        listTugas.appendChild(li);
        tugasForm.reset();
    } else {
        alert("Mohon pilih file tugas!");
    }
});
