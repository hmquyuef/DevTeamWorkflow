document.addEventListener("DOMContentLoaded", function () {
    $('#password').keypress(function (e) {
        if (e.which == 13) {
            login();
        }
    });
    $('#username').keypress(function (e) {
        if (e.which == 13) {
            login();
        }
    });
});

const login = () => {
    var username = $('#username').val();
    var password = $('#password').val();
    //check value of username and password
    if (username == '' || password == '') {
        toastr.error('Vui lòng nhập đầy đủ thông tin!');
        return;
    } else {
        //convert data to JSON
        var jsonData = JSON.stringify({
            username: username,
            password: password
        });
        //call ajax to login with async
        $.ajax({
            url: '/api/users/login',
            type: 'POST',
            contentType: 'application/json',
            processData: false,
            data: jsonData ,
            success: function (data) {
                console.log(data);
                window.location.href = '/';
            },
            error: function (error) {
                toastr.error("Đăng nhập thất bại!");
            }
        });
    }
};