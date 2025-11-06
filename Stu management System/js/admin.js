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

/*section1*/
/*section2*/
const adminData = {
    adminId: "20210001",
    name: "张三",
    gender: "male",
    birthdate: "2000-01-01",
    college: "计算机学院",
    major: "信息与软件工程"
};

// 在页面加载时填充表单内容
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adminID").value = adminData.adminId;
    document.getElementById("names").value = adminData.name;
    document.getElementById("gender").value = adminData.gender;
    document.getElementById("birthdate").value = adminData.birthdate;
    document.getElementById("colleges").value = adminData.college;
    document.getElementById("majors").value = adminData.major;
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
const userTypeSelect = document.getElementById('user-type');
const studentFields = document.getElementById('student-fields');
const teacherFields = document.getElementById('teacher-fields');

// 切换用户类型显示
userTypeSelect.addEventListener('change', () => {
    const userType = userTypeSelect.value;
    if (userType === 'student') {
        studentFields.style.display = 'block';
        teacherFields.style.display = 'none';
    } else {
        studentFields.style.display = 'none';
        teacherFields.style.display = 'block';
    }
});
/*section3*/
/*section4*/
new Vue({
    el: '#app',
    data() {
        return {
            searchQuery: '', // 搜索关键字
            tableData: [
                { ID: '20160503', name: '王小虎', birthdate: '1995-08-12', gender: '男', college: '计算机学院', major: '软件工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160504', name: '李小龙', birthdate: '1996-01-15', gender: '男', college: '电子信息学院', major: '通信工程' },
                { ID: '20160505', name: '张三', birthdate: '1997-07-20', gender: '女', college: '数学学院', major: '应用数学' },
                { ID: '20160506', name: '李四', birthdate: '1998-02-28', gender: '男', college: '物理学院', major: '应用物理' }
            ],
            filteredData: [], // 用于显示的过滤数据
            dialogVisible: false,
            rowToDelete: null // 临时保存需要删除的行
        };
    },
    created() {
        this.filteredData = this.tableData; // 初始化时显示所有数据
    },
    methods: {
        // 搜索过滤表格
        filterTable() {
            if (this.searchQuery.trim()) {
                // 搜索时忽略大小写，并检查是否包含关键字
                this.filteredData = this.tableData.filter(row =>
                    row.ID.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
                );
            } else {
                // 搜索框为空时显示所有数据
                this.filteredData = this.tableData;
            }
        },
        // 显示弹窗
        showDialog(row) {
            this.rowToDelete = row;
            this.dialogVisible = true;
        },
        // 删除行
        deleteRow() {
            const index = this.tableData.indexOf(this.rowToDelete);
            if (index > -1) {
                this.tableData.splice(index, 1);
                this.filterTable(); // 删除后重新过滤
            }
            this.dialogVisible = false; // 关闭弹窗
        }
    }
});
/*section4*/
