// 切换内容显示
function changeContent(sectionId) {
    // 隐藏所有内容
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // 显示对应的内容
    var activeSection = document.getElementById(sectionId);
    if (activeSection) { // 确保目标 section 存在
        activeSection.classList.add('active');
    } else {
        console.error('Invalid sectionId:', sectionId);
    }
}

// 初始化显示第一个内容
document.addEventListener('DOMContentLoaded', function () {
    changeContent('section1');
});



/*setion2*/
const teacherData = {
    teacherId: "20210001",
    name: "张三",
    gender: "male",
    birthdate: "2000-01-01",
    college: "计算机学院",
    major: "信息与软件工程"
};

// 在页面加载时填充表单内容
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("teacherID").value = teacherData.teacherId;
    document.getElementById("names").value = teacherData.name;
    document.getElementById("gender").value = teacherData.gender;
    document.getElementById("birthdate").value = teacherData.birthdate;
    document.getElementById("colleges").value = teacherData.college;
    document.getElementById("majors").value = teacherData.major;
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
/*section2*/

/*section3*/

// 检查表单项是否填写完整
// const form = document.getElementById('uForm');
// const submitButton = document.getElementById('submitButton');

// form.addEventListener('input', checkForm); // 监听每个输入框变化
// form.addEventListener('change', checkForm); // 监听下拉菜单变化

// function checkForm() {
//     // 获取所有表单项
//     const classname = document.getElementById('classname').value;
//     const day = document.getElementById('day').value;
//     const period = document.getElementById('period').value;
//     const duration = document.getElementById('duration').value;
//     const position = document.getElementById('position').value;

//     // 如果所有项都填写了，启用保存按钮
//     if (classname && day && period && duration && position) {
//         submitButton.disabled = false;
//     } else {
//         submitButton.disabled = true;
//     }
// }

// // 提交表单
// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // 防止表单默认提交

//     // 获取表单数据
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });

//     // 使用fetch将数据传给后端
//     fetch('/your-backend-endpoint', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data), // 将数据转为JSON格式发送
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('成功:', data);
//             // 保存成功后弹窗提示
//             alert('保存成功！'); // 使用浏览器默认的alert弹窗
//             // 可以在此添加成功后的一些操作，比如清空表单或显示提示
//             form.reset();  // 可选：成功后清空表单
//         })
//         .catch(error => {
//             console.error('错误:', error);
//             alert('保存失败，请稍后再试。'); // 如果保存失败，显示错误提示
//         });
// });
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('uForm');

// 已有课程数据
const coursess = [
    { "name": "网页设计原理基础", "day": "周一", "period": 1, "duration": 2, "position": "二教103", "time": "1-15" },
    { "name": "计算机网络原理", "day": "周三", "period": 1, "duration": 2, "position": "二教104", "time": "3-15" },
    { "name": "网页设计原理基础", "day": "周一", "period": 3, "duration": 3, "position": "二教206", "time": "3-15" },
    { "name": "孵化创业", "day": "周二", "period": 3, "duration": 2, "position": "二教107", "time": "3-15" },
    { "name": "计算机网络原理", "day": "周三", "period": 3, "duration": 3, "position": "二教212", "time": "3-15" },
    { "name": "JavaScript", "day": "周五", "period": 3, "duration": 2, "position": "二教403", "time": "3-15" },
    { "name": "JavaScript", "day": "周五", "period": 5, "duration": 2, "position": "信软楼315", "time": "3-15" },
    { "name": "数据结构基础", "day": "周一", "period": 9, "duration": 2, "position": "二教108", "time": "3-15" },
    { "name": "班会", "day": "周四", "period": 9, "duration": 2, "position": "二教208" }
];

form.addEventListener('input', checkForm); // 监听每个输入框变化
form.addEventListener('change', checkForm); // 监听下拉菜单变化

function checkForm() {
    // 获取所有表单项
    const classname = document.getElementById('classname').value;
    const day = document.getElementById('day').value;
    const period = parseInt(document.getElementById('period').value);
    const duration = parseInt(document.getElementById('duration').value);
    const position = document.getElementById('position').value;

    // 如果所有项都填写了，启用保存按钮
    if (classname && day && period && duration && position) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault(); // 防止表单默认提交

    // 获取表单数据
    const classname = document.getElementById('classname').value;
    const day = document.getElementById('day').value;
    const period = parseInt(document.getElementById('period').value);
    const duration = parseInt(document.getElementById('duration').value);

    // 检查是否与已有课程冲突
    const isConflict = checkScheduleConflict(day, period, duration);

    if (isConflict) {
        alert('课程时间冲突，请重新选择时间');
        return;
    }

    // 提交数据到后端
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // 将数据转为JSON格式发送
    })
        .then(response => response.json())
        .then(data => {
            console.log('成功:', data);
            alert('保存成功！');
            form.reset();  // 清空表单
        })
        .catch(error => {
            console.error('错误:', error);
            alert('保存失败，请稍后再试。');
        });
});

// 检查新课程是否与已有课程时间冲突
function checkScheduleConflict(day, period, duration) {
    return courses.some(course => {
        if (course.day === day) {
            const courseEndPeriod = course.period + course.duration - 1;
            const newCourseEndPeriod = period + duration - 1;
            // 如果课程时间重叠，则认为有冲突
            return (period >= course.period && period <= courseEndPeriod) ||
                (newCourseEndPeriod >= course.period && newCourseEndPeriod <= courseEndPeriod);
        }
        return false;
    });
}
/*section3*/


/*section4*/
const courses = [
    { "name": "网页设计原理基础", "day": "周一", "period": 1, "duration": 2, "position": "二教103", "time": "1-15", "id": "" },
    { "name": "计算机网络原理", "day": "周三", "period": 1, "duration": 2, "position": "二教104", "time": "3-15", "id": "" },
    { "name": "计算机网络原理", "day": "周三", "period": 1, "duration": 2, "position": "二教104", "time": "3-15", "id": "" },
    { "name": "网页设计原理基础", "day": "周一", "period": 3, "duration": 3, "position": "二教206", "time": "3-15", "id": "" },
    { "name": "孵化创业", "day": "周二", "period": 3, "duration": 2, "position": "二教107", "time": "3-15", "id": "" },
    { "name": "计算机网络原理", "day": "周三", "period": 3, "duration": 3, "position": "二教212", "time": "3-15", "id": "" },
    { "name": "JavaScript", "day": "周五", "period": 3, "duration": 2, "position": "二教403", "time": "3-15", "id": "" },
    { "name": "JavaScript", "day": "周五", "period": 5, "duration": 2, "position": "信软楼315", "time": "3-15", "id": "" },
    { "name": "数据结构基础", "day": "周一", "period": 9, "duration": 2, "position": "二教108", "time": "3-15", "id": "" },
    { "name": "班会", "day": "周四", "period": 9, "duration": 2, "position": "二教208" }
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
        cell.dataset.courseInfo = `${course.name}\n\n第${course.time}周\n课程编号:${course.id}\n时间: ${course.day} ${course.period}-${course.period + course.duration - 1}节\n教室:${course.position}`;
        cell.dataset.period = course.period; // 添加起始节
        cell.dataset.position = course.position; // 添加教室
    }
});


// 处理重复课程合并（防止不同时间段或地点的课程误合并）
for (let j = 2; j <= 8; j++) {
    let classname = 'f' + j;
    var arr = []; // 保存唯一课程信息
    var elements = document.getElementsByClassName(classname);

    for (let i = 0; i < elements.length; i++) {
        const currentCell = elements[i];
        const courseInfo = currentCell.innerHTML.trim();
        const period = currentCell.dataset.period; // 获取当前单元格的起始节
        const position = currentCell.dataset.position; // 获取当前单元格的教室

        // 构造唯一标识
        const uniqueKey = `${courseInfo}_${period}_${position}`;

        // 判断是否需要合并
        if (arr.indexOf(uniqueKey) === -1 && courseInfo !== "") {
            arr.push(uniqueKey); // 记录该课程为已处理
            var index = i; // 保存当前单元格索引
            currentCell.style.borderBottom = "0px"; // 去掉底边框
        } else if (courseInfo !== "") {
            currentCell.style.display = "none"; // 隐藏重复的课程
            elements[index].rowSpan += 1; // 给第一个元素增加 rowSpan
        }
    }
}

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
/*section4*/

/*section5*/
const courseInput = document.getElementById('course');
const examDateSelect = document.getElementById('examDate');
const submButton = document.getElementById('submitButton');
const studentsTable = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
const saveButton = document.getElementById('saveButton');
const courseForm = document.getElementById('courseForm');

// 模拟不同课程的学生数据
const studentData = {
    "计算机科学": ["学生1", "学生2", "学生3", "学生4", "学生5", "学生6", "学生7", "学生8", "学生9", "学生10", "学生11", "学生12", "学生13", "学生14", "学生15"],
    "数据结构": ["学生5", "学生6", "学生7", "学生8"],
    "人工智能": ["学生9", "学生10", "学生11", "学生12"]
};

let selectedCourse = "";
let selectedExamDate = "";

// 生成学生名单
submitButton.addEventListener('click', function () {
    selectedCourse = courseInput.value.trim();
    selectedExamDate = examDateSelect.value;

    if (!selectedCourse || !selectedExamDate) {
        alert('请填写完整课程名称和考试时间');
        return;
    }

    // 获取课程对应的学生列表
    const students = studentData[selectedCourse];

    if (!students) {
        alert('未找到该课程的学生名单，请确认课程名称是否正确');
        return;
    }

    // 清空表格内容
    studentsTable.innerHTML = '';

    // 生成学生表格
    students.forEach(student => {
        const row = studentsTable.insertRow();
        row.insertCell(0).textContent = selectedCourse; // 课程
        row.insertCell(1).textContent = selectedExamDate; // 考试时间
        const nameCell = row.insertCell(2);
        nameCell.textContent = student; // 学生姓名
        const scoreCell = row.insertCell(3);
        const scoreInput = document.createElement('input');
        scoreInput.type = 'number';
        scoreInput.min = '0';
        scoreInput.max = '100';
        scoreCell.appendChild(scoreInput); // 成绩输入框
    });

    // 启用保存按钮
    checkFormCompletion();
});

// 检查表单是否可以提交
function checkFormCompletion() {
    const course = courseInput.value.trim();
    const examDate = examDateSelect.value;
    // 如果课程、考试时间填写完毕，且每个学生的成绩输入框都有值，启用保存按钮
    saveButton.disabled = !(course && examDate && Array.from(studentsTable.rows).every(row => {
        const scoreInput = row.cells[3].querySelector('input');
        return scoreInput && scoreInput.value; // 确保每个成绩输入框都有值
    }));
}

// 监听学生成绩输入框变化
studentsTable.addEventListener('input', checkFormCompletion);

// 保存成绩
saveButton.addEventListener('click', function () {
    const course = courseInput.value.trim();
    const examDate = examDateSelect.value;
    const scores = [];

    Array.from(studentsTable.rows).forEach(row => {
        const studentName = row.cells[2].textContent;
        const score = row.cells[3].querySelector('input').value;
        scores.push({ name: studentName, score: score });
    });

    const data = {
        course: course,
        examDate: examDate,
        scores: scores
    };

    // 提交数据到后端
    fetch('/submit-scores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('成绩保存成功！');
                courseForm.reset(); // 清空表单
                studentsTable.innerHTML = ''; // 清空表格
                saveButton.disabled = true; // 禁用保存按钮
            } else {
                alert('成绩保存失败，请稍后再试。');
            }
        })
        .catch(error => {
            console.error('保存错误:', error);
            alert('保存失败，请稍后再试。');
        });
});
/*section5*/
/*section6*/
// const dataFromBackend = {
//     scores: [50, 70, 80, 90, 60, 85, 76, 65, 55, 90, 72, 88, 94] // 模拟成绩数据
// };

// // 获取输入框、按钮和柱形图画布
// const courseNameInput = document.getElementById('courseName');
// const passingScoreInput = document.getElementById('passingScore');
// const goodScoreInput = document.getElementById('goodScore');
// const excellentScoreInput = document.getElementById('excellentScore');
// const generateChartBtn = document.getElementById('generateChartBtn');
// const ctx = document.getElementById('myBarChart').getContext('2d');

// // 初始化柱形图
// let myChart;

// function generateChart() {
//     // 获取输入框中的值
//     const courseName = courseNameInput.value || "未命名课程";
//     const passingScore = parseInt(passingScoreInput.value, 10) || 60;
//     const goodScore = parseInt(goodScoreInput.value, 10) || 75;
//     const excellentScore = parseInt(excellentScoreInput.value, 10) || 90;

//     // 计算及格、良好、优秀的人数
//     const passing = dataFromBackend.scores.filter(score => score >= passingScore).length;
//     const good = dataFromBackend.scores.filter(score => score >= goodScore && score < excellentScore).length;
//     const excellent = dataFromBackend.scores.filter(score => score >= excellentScore).length;

//     // 准备柱形图数据
//     const chartData = {
//         labels: ['及格', '良好', '优秀'],
//         datasets: [{
//             label: `${courseName} 成绩分布`, // 使用反引号模板字符串
//             data: [passing, good, excellent],
//             backgroundColor: [
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(255, 99, 132, 1)'
//             ],
//             borderWidth: 1
//         }]
//     };

//     // 如果已有图表，销毁后重建
//     if (myChart) {
//         myChart.destroy();
//     }

//     myChart = new Chart(ctx, {
//         type: 'bar',
//         data: chartData,
//         options: {
//             responsive: true,
//             scales: {
//                 y: {
//                     beginAtZero: true // Y轴从0开始
//                 }
//             }
//         }
//     });
// }

// // 给按钮绑定点击事件
// generateChartBtn.addEventListener('click', generateChart);



const dataFromBackend = {
    scores: [50, 70, 80, 90, 60, 85, 76, 65, 55, 90, 72, 88, 94] // 模拟成绩数据
};

// 获取输入框、按钮和柱形图画布
const courseNameInput = document.getElementById('courseName');
const passingScoreInput = document.getElementById('passingScore');
const goodScoreInput = document.getElementById('goodScore');
const excellentScoreInput = document.getElementById('excellentScore');
const generateChartBtn = document.getElementById('generateChartBtn');
const ctx = document.getElementById('myBarChart').getContext('2d');

// 初始化空柱形图数据
const initialData = {
    labels: ['及格', '良好', '优秀'], // X轴标签
    datasets: [{
        label: '成绩分布', // 初始图表标题
        data: [0, 0, 0], // 空数据
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// 初始化柱形图
let myChart = new Chart(ctx, {
    type: 'bar',
    data: initialData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Y轴从0开始
            }
        }
    }
});

// 生成柱形图的函数
function generateChart() {
    // 获取输入框中的值
    const courseName = courseNameInput.value || "未命名课程";
    const passingScore = parseInt(passingScoreInput.value, 10) || 60;
    const goodScore = parseInt(goodScoreInput.value, 10) || 75;
    const excellentScore = parseInt(excellentScoreInput.value, 10) || 90;

    // 计算及格、良好、优秀的人数
    const passing = dataFromBackend.scores.filter(score => score >= passingScore).length;
    const good = dataFromBackend.scores.filter(score => score >= goodScore && score < excellentScore).length;
    const excellent = dataFromBackend.scores.filter(score => score >= excellentScore).length;

    // 更新柱形图数据
    myChart.data.datasets[0].label = `${courseName} 成绩分布`;
    myChart.data.datasets[0].data = [passing, good, excellent];
    myChart.update(); // 更新图表
}

// 给按钮绑定点击事件
generateChartBtn.addEventListener('click', generateChart);

/*section6*/
