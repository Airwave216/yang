/*section1*/
const username = document.getElementById('username');
const Name = document.getElementById('name');
const gender = document.getElementById('gender')
const birthDate = document.getElementById('birthDate');
const college = document.getElementById('college');
const major = document.getElementById('major');
// 切换内容显示
function changeContent(sectionId) {
    // 隐藏所有内容
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // 显示对应的内容
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// 发送 POST 请求
// fetch('http://localhost:8080/api/student/getAllStudent', {
//     method: 'GET',
//     headers: {
//         mode: 'cors',
//         'Content-Type': 'application/json',
//         'Authorization': localStorage.getItem('token')  // 将 token 添加到 Authorization 头部
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if (data.code == 0) {
//             error_message.textContent = data.message;
//         } else {
//             username.textContent = data.data.username;
//             Name.textContent = data.data.name;
//             gender.textContent = data.data.gender;
//             if (data.data.gender == 'f') {
//                 gender.textContent = '女'
//             } else {
//                 gender.textContent = '男'
//             }
//             birthDate.textContent = data.data.birthDate;
//             college.textContent = data.data.college;
//             major.textContent = data.data.major;
//         }
//     })
//     .catch(error => console.error('Error:', error));

/*section1*/
/*section2*/
function filterResults() {
    const courseSearch = document.getElementById('courseSearch').value.toLowerCase();
    const table = document.getElementById('gradeTable');
    const rows = table.getElementsByTagName('tr');

    // 遍历所有行（跳过表头行）
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const courseName = cells[1].textContent.toLowerCase();

        // 检查课程名称是否包含输入的搜索值
        if (courseName.includes(courseSearch)) {
            rows[i].style.display = ''; // 显示匹配行
        } else {
            rows[i].style.display = 'none'; // 隐藏不匹配行
        }
    }
}
/*section2*/
/*section3*/
const courses = [
    { "name": "网页设计原理基础", "day": "周一", "period": 1, "duration": 2, "teacher": "杨老师", "position": "二教103", "time": "3-15" },
    { "name": "大学英语三", "day": "周三", "period": 1, "duration": 2, "teacher": "杨老师", "position": "二教104", "time": "3-15" },
    { "name": "JavaScript", "day": "周一", "period": 3, "duration": 3, "teacher": "杨老师", "position": "二教206", "time": "3-15" },
    { "name": "孵化创业", "day": "周二", "period": 3, "duration": 2, "teacher": "杨老师", "position": "二教107", "time": "3-15" },
    { "name": "网络互联", "day": "周三", "period": 3, "duration": 3, "teacher": "杨老师", "position": "二教212", "time": "3-15" },
    { "name": "计算机网络原理", "day": "周五", "period": 3, "duration": 2, "teacher": "杨老师", "position": "二教403", "time": "3-15" },
    { "name": "计算机网络原理2", "day": "周五", "period": 5, "duration": 2, "teacher": "杨老师", "position": "信软楼315", "time": "3-15" },
    { "name": "数据结构基础", "day": "周一", "period": 9, "duration": 2, "teacher": "杨老师", "position": "二教108", "time": "3-15" },
    { "name": "班会", "day": "周四", "period": 9, "duration": 2, "teacher": "杨老师", "position": "二教208", "time": "3-15" }
]
const colors = ["#ffe0e0", "#b0e0e6", "#e0ffe0", "#ffffb0"]
let i = 0;
courses.forEach(
    course => {
        course.color = colors[i % 4];
        i++;
    }
)
i = 0;
// 构建表格行

const table = document.getElementById("timetable");
const daysMap = { "周一": 1, "周二": 2, "周三": 3, "周四": 4, "周五": 5, "周六": 6, "周日": 7 };

// 按课程数据填充表格
courses.forEach(course => {
    const dayIndex = daysMap[course.day]; // 获取对应的列索引
    const startRow = course.period; // 获取对应的行索引
    let cell = table.rows[startRow].cells[dayIndex];
    for (let i = 0; i < course.duration; i++) {
        cell = table.rows[startRow + i].cells[dayIndex];
        cell.style.backgroundColor = course.color;
        cell.textContent = course.name;
        cell.classList.add("course");  // 添加class方便后续选择
        // 确保 data-course-info 正确设置
        cell.dataset.courseInfo = `${course.name}\n\n第${course.time}周\n时间: ${course.day} ${course.period}-${course.period + course.duration - 1}节\n老师: ${course.teacher}\n教室:${course.position}`;
    }
});


// 处理重复课程合并
for (let j = 2; j <= 8; j++) {
    let classname = 'f' + j;
    var arr = [];
    var f1 = document.getElementsByClassName(classname);

    for (let i = 0; i < f1.length; i++) {
        if (arr.indexOf(f1[i].innerHTML.trim()) === -1 && f1[i].innerHTML.trim() !== "") {
            arr.push(f1[i].innerHTML.trim());
            var index = i;
            f1[i].style.borderBottom = "0px"; // 设置没有底边框
        } else if (f1[i].innerHTML.trim() !== "") {
            f1[i].style.display = "none"; // 隐藏重复的课程
            f1[index].rowSpan += 1; // 给第一个元素增加 rowSpan
        }
    }
}

// 弹窗功能
// document.addEventListener("click", function (event) {
//     if (event.target.classList.contains("course")) {
//         const courseInfo = event.target.dataset.courseInfo;
//         document.getElementById("popup-info").textContent = courseInfo;
//         document.getElementById("popup").style.display = "flex"; // 显示弹窗
//     }
// });

// // 关闭弹窗
// document.querySelector(".close").addEventListener("click", function () {
//     document.getElementById("popup").style.display = "none"; // 隐藏弹窗
// });

// // 点击弹窗外部区域关闭弹窗
// window.addEventListener("click", function (event) {
//     if (event.target === document.getElementById("popup")) {
//         document.getElementById("popup").style.display = "none"; // 隐藏弹窗
//     }
// });

// 弹窗功能
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("course")) {
        const courseInfo = event.target.dataset.courseInfo;  // 获取课程信息
        console.log(courseInfo);  // 检查课程信息是否正确获取
        document.getElementById("popup-info").textContent = courseInfo;
        document.getElementById("popup").style.display = "flex"; // 显示弹窗
    }
});

// 关闭弹窗
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none"; // 隐藏弹窗
});

// 点击弹窗外部区域关闭弹窗
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none"; // 隐藏弹窗
    }
});
// 初始化课程表

/*section3*/
/*section4*/
// 模拟从后端获取的数据
const studentData = {
    studentId: "20210001",
    name: "张三",
    gender: "male",
    birthdate: "2000-01-01",
    college: "计算机学院",
    major: "信息与软件工程"
};

// 在页面加载时填充表单内容
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("studentId").value = studentData.studentId;
    document.getElementById("names").value = studentData.name;
    document.getElementById("gender").value = studentData.gender;
    document.getElementById("birthdate").value = studentData.birthdate;
    document.getElementById("colleges").value = studentData.college;
    document.getElementById("majors").value = studentData.major;
});

// 表单提交处理
document.getElementById("updateForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 防止表单默认提交

    // 获取表单中的数据
    const formData = new FormData(this);
    let updatedData = {};

    formData.forEach((value, key) => {
        updatedData[key] = value;
    });

    console.log('提交的修改数据:', updatedData);
    alert('信息已保存！');
});

// 重置按钮：重新加载初始数据
// document.getElementById("resetBtn").addEventListener('click', function () {
//     // 重新填充默认数据
//     document.getElementById("studentId").value = studentData.studentId;
//     document.getElementById("names").value = studentData.name;
//     document.getElementById("gender").value = studentData.gender;
//     document.getElementById("birthdate").value = studentData.birthdate;
//     document.getElementById("colleges").value = studentData.college;
//     document.getElementById("majors").value = studentData.major;

//     console.log('表单已重新加载默认数据');
// });
// 重置按钮：刷新页面
document.getElementById("resetBtn").addEventListener('click', function () {
    // 刷新页面以恢复到默认状态
    window.location.reload(); // 刷新页面
    alert('信息已恢复默认数据');
});
/*section4*/