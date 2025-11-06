let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');
const error_message = document.getElementById('error_message');
const success_message = document.getElementById('success_message');
window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});
// 设置一个简单的 ID 和密码验证
const validId = "user";  // 预设 ID
const validPassword = "123";  // 预设密码

// 处理表单提交
function handleFormSubmit() {
    // 获取表单中的 ID 和密码
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    // 验证 ID 和密码
    if (id !== validId || password !== validPassword) {
        alert("ID或密码错误,请重新输入！");
        return false;  // 阻止表单提交
    }

    // 获取选择的角色
    const role = document.getElementById("role").value;


    // 根据选择的角色跳转到不同的页面
    if (role === "student") {
        window.location.href = "student.html";  // 学生页面
    } else if (role === "teacher") {
        window.location.href = "teacher.html";  // 老师页面
    } else if (role === "admin") {
        window.location.href = "admin.html";  // 管理员页面
    }

    // 发送 POST 请求
    // fetch('http://localhost:8080/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ 
    //         "username": id,
    //         "password": password
    //      })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     if(data.code == 0){
    //         error_message.textContent = data.message;
    //         error_message.style.display = 'block';
    //         success_message.style.display = 'none'
    //     }else{
    //         success_message.textContent = data.message;
    //         success_message.style.display = 'block';
    //         error_message.style.display = 'none';
    //         localStorage.setItem('token', data.data.token);

    //         const role = data.data.role;
    //         if (role === "STUDENT") {
    //             window.location.href = "student.html";  // 学生页面
    //         } else if (role === "TEACHER") {
    //             window.location.href = "teacher.html";  // 老师页面
    //         } else if (role === "ADMIN") {
    //             window.location.href = "admin.html";  // 管理员页面
    //         }
    //     }
    // })
    // .catch(error => console.error('Error:', error));


    return false;  // 阻止表单的默认提交行为
}