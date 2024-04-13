const { json } = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();

// Thông tin kết nối MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'karid',
    port: 3306
});

// Kết nối tới MySQL
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL: ' + err.stack);
        return;
    }

    console.log('Đã kết nối thành công tới MySQL');
});

// Định nghĩa các route và xử lý yêu cầu
app.get('/', (req, res) => {
    // Truy vấn để lấy data
    const query = 'SELECT * FROM cars';

    // Thực thi truy vấn
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Lỗi truy vấn MySQL: ' + error.stack);
            return;
        }


        // Chuyển đổi mảng thành chuỗi duy nhất
        var mangPhongPhuString = JSON.stringify(results);

        res.setHeader('Content-Type', 'application/json');
        res.send({ key: mangPhongPhuString });
    });
});

// Khởi động server
const port = 3009;
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});