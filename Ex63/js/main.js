// Gọi hàm nạp dữ liệu ngày tháng năm ngay khi trang vừa load xong
window.onload = function() {
    loadDateData();
};

function loadDateData() {
    let selDay = document.getElementById("selDay");
    let selMonth = document.getElementById("selMonth");
    let selYear = document.getElementById("selYear");

    for (let i = 1; i <= 31; i++) {
        let text = i < 10 ? "0" + i : i; // Thêm số 0 ở trước nếu < 10
        selDay.add(new Option(text, text));
    }

    // Load Months (1 - 12)
    for (let i = 1; i <= 12; i++) {
        let text = i < 10 ? "0" + i : i;
        selMonth.add(new Option(text, text));
    }

    // Load Years (1970 - năm hiện tại)
    let currentYear = new Date().getFullYear();
    for (let i = 1970; i <= currentYear; i++) {
        selYear.add(new Option(i, i));
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleSignUp() {
    // Lấy dữ liệu từ Form
    let name = document.getElementById("txtName").value.trim();
    let email = document.getElementById("txtEmail").value.trim();
    let day = document.getElementById("selDay").value;
    let month = document.getElementById("selMonth").value;
    let year = document.getElementById("selYear").value;

    // Validate (Bắt lỗi)
    if (name === "") {
        alert("Name cannot be left blank!");
        document.getElementById("txtName").focus();
        return;
    }
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address!");
        document.getElementById("txtEmail").focus();
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Lấy sở thích (Hobbies)
    let hobbyCheckboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    let hobbiesArray = [];
    for (let i = 0; i < hobbyCheckboxes.length; i++) {
        hobbiesArray.push(hobbyCheckboxes[i].value);
    }
    let hobbiesStr = hobbiesArray.join(", ");

    let color = document.querySelector('input[name="color"]:checked').value;

    let birthday = `${day}/${month}/${year}`;

    addMemberToTable(name, email, gender, birthday, hobbiesStr, color);
}

function addMemberToTable(name, email, gender, birthday, hobbies, color) {
    let tbody = document.getElementById("memberBody");
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${birthday}</td>
        <td>${hobbies}</td>
        <td>${color}</td>
    `;

    tr.onmouseover = function() {
        this.style.backgroundColor = "yellow";
    };
    tr.onmouseout = function() {
        this.style.backgroundColor = "white";
    };

    tbody.appendChild(tr);
}

function handleReset() {
    document.getElementById("registerForm").reset();
    
    document.getElementById("txtName").focus();
}