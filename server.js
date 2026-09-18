const express = require('express');
const path = require('path');
const app = express();

// Middleware untuk membaca format JSON
app.use(express.json());

// Menyajikan file statis (index.html) dari folder yang sama
app.use(express.static(__dirname));

// Endpoint Login SFA Kanvas
app.post('/api/login', (req, res) => {
    const { username, pin } = req.body;

    // Data akun login sementara
    if ((username === 'admin' && pin === 'admin123') || (username === 'sales01' && pin === '1234')) {
        res.json({
            success: true,
            role: username === 'admin' ? 'admin' : 'sales',
            message: 'Login berhasil'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Username atau PIN salah.'
        });
    }
});

// Menggunakan Port dari Railway atau port 5000 secara otomatis
const PORT = process.env.PORT || 5000;

// WAJIB menggunakan '0.0.0.0' agar bisa diakses secara online oleh Railway
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server SFA aktif dan berjalan di port ${PORT}`);
});