// Hàm tiện ích để lấy đối tượng danh sách ul
function getList() {
    return document.getElementById("webNodeList");
}

function addNode() {
    let content = document.getElementById("txtAddContent").value.trim();
    let posStr = document.getElementById("txtAddPos").value.trim();
    let list = getList();
    
    if (content === "") {
        alert("Vui lòng nhập Content để thêm Node!");
        return;
    }
    let newNode = document.createElement("li");
    newNode.textContent = content;

    let children = list.children;
    
    if (posStr === "") {
        list.appendChild(newNode);
    } else {
        let pos = parseInt(posStr);
        if (pos <= 0) {
            alert("Position phải lớn hơn 0!");
            return;
        }
        
        if (pos > children.length) {
            list.appendChild(newNode);
        } else {
            list.insertBefore(newNode, children[pos - 1]);
        }
    }
    document.getElementById("txtAddContent").value = "";
    document.getElementById("txtAddPos").value = "";
}

function removeNode() {
    let posStr = document.getElementById("txtRemovePos").value.trim();
    let list = getList();
    let children = list.children;

    if (posStr === "") {
        alert("Vui lòng nhập Position cần xóa!");
        return;
    }

    let pos = parseInt(posStr);
    
    if (pos <= 0 || pos > children.length) {
        alert("Position không tồn tại!");
        return;
    }

    list.removeChild(children[pos - 1]);
    
    document.getElementById("txtRemovePos").value = "";
}

function modifyNode() {
    let newContent = document.getElementById("txtModifyContent").value.trim();
    let posStr = document.getElementById("txtModifyPos").value.trim();
    let list = getList();
    let children = list.children;

    if (newContent === "" || posStr === "") {
        alert("Vui lòng nhập đủ New Content và Position cần thay thế!");
        return;
    }

    let pos = parseInt(posStr);
    if (pos <= 0 || pos > children.length) {
        alert("Position không tồn tại!");
        return;
    }

    // Tạo một thẻ li thay thế
    let newNode = document.createElement("li");
    newNode.textContent = newContent;

    // Thay thế nút cũ bằng nút mới
    list.replaceChild(newNode, children[pos - 1]);
    
    document.getElementById("txtModifyContent").value = "";
    document.getElementById("txtModifyPos").value = "";
}