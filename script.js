// Kode JavaScript untuk menarik data cuaca dari BMKG
async function fetchWeatherData() {
    try {
        // Ganti "31.71.01.1001" dengan kode wilayah yang sesuai
        const apiUrl = 'https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=31.71.01.1001';
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY', // Jika diperlukan API Key
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        // Menampilkan data cuaca saat ini di halaman
        const temp = data.data[0].cuaca[0].t;  // Suhu
        const condition = data.data[0].cuaca[0].weather_desc; // Kondisi cuaca
        const humidity = data.data[0].cuaca[0].hu;  // Kelembapan
        const windSpeed = data.data[0].cuaca[0].ws;  // Kecepatan angin
        const windDirection = data.data[0].cuaca[0].wd;  // Arah angin

        // Menampilkan data cuaca saat ini di elemen HTML
        document.querySelector('.temperature').textContent = `${temp}°`;
        document.querySelector('.condition').textContent = condition;
        document.querySelector('.additional-info').innerHTML = `
            <div><strong>Kelembapan:</strong> ${humidity}%</div>
            <div><strong>Angin:</strong> ${windSpeed} km/h (${windDirection}°)</div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
fetchWeatherData();
