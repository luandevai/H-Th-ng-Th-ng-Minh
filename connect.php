<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$database = "karid";

// Kết nối đến cơ sở dữ liệu MySQL
$conn = new mysqli($servername, $username, $password, $database, 3306);
// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Hàm đăng ký
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['phone'])) {
    // Lấy thông tin từ form đăng ký
    $username = $_POST['username'];
    $password = $_POST['password'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Gọi hàm đăng ký
    $result = register(
        $username,
        $password,
        $address,
        $phone,
        $email
    );

    // Kiểm tra kết quả đăng ký
    if ($result === true) {
        echo "Đăng ký thành công!";
    } else {
        echo "Đăng ký thất bại: $result";
    }
}

function register($username, $password, $address, $phone, $email)
{

    global $conn;


    // Kiểm tra xem tên người dùng đã tồn tại chưa
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($query);
    if ($result->num_rows > 0) {
        return "Người dùng đã tồn tại.";
    }

    // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Thêm người dùng vào cơ sở dữ liệu
    $query = "INSERT INTO users (username, password, address, phone, email) VALUES (
        '$username',
        '$hashedPassword',
        '$address',
        '$phone',
        '$email'
    )";
    if ($conn->query($query) === TRUE) {
        return true;
    } else {
        return "Lỗi đăng ký: " . $conn->error;
    }
}

// Hàm đăng nhập
if (isset($_GET['logout'])) {
    logout();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    // Lấy thông tin từ form đăng nhập
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Gọi hàm đăng nhập
    $result = login($email, $password);

    // Kiểm tra kết quả đăng nhập
    if ($result === true) {
        echo "Đăng nhập thành công!";
    } else {
        echo "Đăng nhập thất bại: $result";
    }
}

function login($email, $password)
{
    global $conn;
    // echo '<script>alert("Đây là thông báo JavaScript!");</script>';

    // Lấy thông tin người dùng từ cơ sở dữ liệu
    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($query);
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        // Kiểm tra mật khẩu
        if (password_verify($password, $user['password'])) {
            // Lưu thông tin đăng nhập vào phiên làm việc
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            return true;
        } else {
            return "Mật khẩu không đúng.";
        }
    } elseif ($result->num_rows == 0) {
        return "Người dùng không tồn tại.";
    } else {
        return "Lỗi đăng nhập.";
    }
}

// Hàm kiểm tra đăng nhập
function isLoggedIn()
{
    return isset($_SESSION['user_id']);
}

// Hàm đăng xuất
function logout()
{
    // Xóa các biến phiên làm việc
    session_unset();

    // Hủy phiên làm việc
    session_destroy();

    return "Đăng xuất thành công.";
}
