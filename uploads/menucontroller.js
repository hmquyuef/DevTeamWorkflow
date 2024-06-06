function iconSelectCheck() {
  function isValidIconInput(input) {
    // Biểu thức chính quy để kiểm tra input
    const regex = /<i\s+class=['"][\w\s-]+['"]><\/i>|[\w\s-]+/;
    return regex.test(input);
  }

  var input = $("#iconhtml").val();
  if (isValidIconInput(input)) {
    // Thêm tham số 'input' vào hàm isValidIconInput
    $("#btn-chon-icon").prop("disabled", false); // Sử dụng .prop('disabled', false) để bật thuộc tính disabled
    $("#btn-chon-icon").html(
      `Dùng icon  ${
        input.startsWith("<i") && input.endsWith("</i>")
          ? `${input}`
          : `<i class='${input}'></i>`
      }`
    );
  } else {
    $("#btn-chon-icon").prop("disabled", true); // Sử dụng .prop('disabled', true) để tắt thuộc tính disabled
    $("#btn-chon-icon").html(`Chọn`);
  }
}

function menuView() {
  $.ajax({
    url: "/api/sitesettings/all",
    type: "GET",
    success: function (data) {
      console.log(data);
      $("#main-container").html(`<h4 class="py-3 mb-4"><span class="text-muted fw-light">Dev Team /</span> Menu config</h4>`);
      $("#main-container").append(`<div class="card mb-3"><h5 class="card-header">Cài đặt menu</h5><div class="table-responsive text-nowrap"><table class="table table-hover"><thead><tr><th></th><th>Label</th><th>Type</th><th>Icon</th><th>URL</th><th><i class='bx bx-code-block'></i></th><th>Parent node</th><th class="p-0"></th></tr></thead><tbody class="table-border-bottom-0" id="menulistitem"></tbody></table></div></div>`);

      const menuData = data[0].menu;

      const RawMenuItem = (item, level, index, parent, parentNode) => {
        var id = "rowId-" + level + "-" + index;
        const tbr = $(`<tr id="${id}" level="${level}" idx="${index}" ${parent ? `parent="${parent}"` : ""}></tr>`);
        const Arrow = $(`<td class="ps-${level * 2} pe-0" style="width: 1px">${item.items&&item.items.length?`<i class='bx bxs-chevron-down'></i>`:`<i class='bx bxs-chevron-right'></i>`}</td>`);
        const tdLabel = $(`<td class="label-cell" style="width: 250px"><span>${item.label}</span></td>`);
        const tdType = $(`<td style="width: 250px"><span>${item.type}</span></td>`);
        const tdIcon = $(`<td style="width: 80px"><span>${item.icon ? `<i class="${item.icon}"></i>` : ""}</span></td>`);
        const tdUrl = $(`<td>${item.url ? `${item.url}` : ""}</td>`);
        const tdcode = $(`<td class="p-0" style="width: 250px"><input type="text" class="form-control" value="${item.code ? `${item.code}` : ""}"></input></td>`);
        const tdParent = $(`<td class="p-0 ps-2" style="width: 250px"><select class="form-select menu-label">${parentNode?`<option>${parentNode.label}</option>`:""}<option></option></select></td>`);
        const tdRemove = $(`<td class="py-0" style="width: 50px"><button type="button" class="btn btn-icon rounded-pill btn-sm btn-outline-danger"><i class='bx bx-trash'></i></button></td>`);
        tdLabel.one("click", function () {const input = $('<input type="text" class="form-control">').val(item.label);$(this).empty().append(input);$(this).addClass("py-0");input.on("blur", function () {menuEditFinish();});});
        tdUrl.one("click", function () { const input = $('<input type="text" class="form-control">').val(item.url); $(this).empty().append(input); $(this).addClass("py-0"); input.on("blur", function () { menuEditFinish(); }); });
        tdType.one("click", function () { const select = $('<select class="form-select"><option value="menu-item">menu-item</option><option value="menu-item-toggle">menu-item-toggle</option><option value="menu-header">menu-header</option></select>').val(item.type); $(this).empty().append(select); $(this).addClass("py-0"); select.on("blur", function () { menuEditFinish(); }); });
        tdIcon.on("click", function () {
          $("#modalIconPicker").remove();
          const iconNames = ["bxs-plus-circle", "bx-shield-minus", "bx-shield-plus", "bx-math", "bx-qr", "bx-qr-scan", "bx-bug-alt", "bx-code-alt", "bx-check-shield", "bx-code-curly", "bx-code", "bx-bug", "bx-terminal", "bx-data", "bx-git-branch", "bx-git-commit", "bx-git-compare", "bx-git-merge", "bx-git-pull-request", "bx-git-repo-forked", "bx-command", "bx-code-block", "bx-bracket", "bx-shield-x"];
          const iconHTML = iconNames.map((iconName) => `<div class="col my-2"><button type="button" class="btn btn-secondary btn-chon-icon text-nowrap d-inline-block w-100 h-100"><i class="bx ${iconName}"></i></button></div>`).join("");
          $("#main-container").append(`<div class="modal modal-top fade" id="modalIconPicker"><div class="modal-dialog"><form class="modal-content"><div class="modal-header"><h5 class="modal-title">Chọn Icon</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row"><div class="col mb-3"><label for="nameSlideTop" class="form-label">Icon hiện tại: ${item.icon ? `<i class="${item.icon}"></i>` : ""}</label></div></div><div class="row g-2"><div class="col mb-0"><label for="iconhtml" class="form-label">Nhập Icon</label><input type="text" id="iconhtml" class="form-control" spellcheck="false" placeholder="dạng <i class='bx bx-code-alt'></i> hoặc 'bx bx-code-alt'" onkeyup="iconSelectCheck()"></div></div><div class="row g-2"><div class="col mb-0"><label>Hoặc chọn Icon có sẵn</label><div class="row">${iconHTML}</div></div></div><div class="form-text">APP sử dụng Icon từ <a href="https://boxicons.com/" target="_blank">boxicons</a> hoặc <a href="https://fontawesome.com/" target="_blank">fontawesome</a></div></div><div class="modal-footer"><button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Hủy</button><button type="button" id="btn-chon-icon" class="btn btn-primary" disabled="disabled">Chọn</button></div></form></div></div>`);
          $("#modalIconPicker").modal("show");
          $("#btn-chon-icon").on("click", function () { const selectedIcon = $("#iconhtml").val(); tdIcon.html(selectedIcon); $("#modalIconPicker").modal("hide"); });
          $(".btn-chon-icon").on("click", function () { tdIcon.html($(this).html()); $("#modalIconPicker").modal("hide"); });
        });
        tdcode.on("click", function () {
          $("#modalCodePicker").remove();
          $("#main-container").append(`<div class="modal modal-top fade" id="modalCodePicker"><div class="modal-dialog"><form class="modal-content"><div class="modal-header"><h5 class="modal-title">Chọn code cho chức năng</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row"><div class="col mb-3"><label for="nameSlideTop" class="form-label">Code hiện tại: ${item.code ? `${item.code}` : ""}</label></div></div><div class="row g-2"><div class="col mb-0"><label for="filepiker" class="form-label">chọn file</label><input type="file" id="filepicker" class="form-control"></div></div><div class="form-text">APP sử dụng file code <a href="javascript:void(0)" target="_blank">javascript.</a></div></div><div class="modal-footer"><button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Hủy</button><button type="button" id="btn-chon-file" class="btn btn-primary">Chọn</button></div></form></div></div>`);
          $("#modalCodePicker").modal("show");
          $("#btn-chon-file").on("click", function () { uploadFile(tdcode); });
        });
        menuData.forEach((item) => { if (!parentNode || (parentNode && parentNode.label !== item.label)) { tdParent.find('select').append(`<option value="${``}">${item.label}</option>`); } });
        tdParent.find('select').on("change", function () { console.log($(this).val()); if(tdParent.find('select').val() === "" || tdParent.find('select')==='undefine')  $(this).closest('tr').removeAttr('parent'); else { var targetparent = $('.label-cell>span:contains(' + $(this).val() + ')').parent().parent().attr('id'); $(this).closest('tr').attr('parent', targetparent);} menuEditFinish(); });
        tdRemove.find("button").on("click", function () {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: config.colors.info,
            cancelButtonColor: config.colors.danger,
            confirmButtonText: "Yes, remove it!",
          }).then((result) => {
            if (result.isConfirmed) {
              $(this).closest("tr").remove();
              menuEditFinish();
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
        });
        $("#menulistitem").append(tbr.append(Arrow, tdLabel, tdType, tdIcon, tdUrl, tdcode,tdParent, tdRemove));

        if (item.items && item.items.length) {
          item.items.forEach((sItem, index) => {
            RawMenuItem(sItem, level + 1, index, id, item);
          });
        }
      };

      menuData.forEach((item, index) => {
        RawMenuItem(item, 1, index, null);
      });

      // Thêm nút thêm dòng mới
      const addButton = $('<button class="btn btn-primary me-3">Thêm dòng mới</button>');
      addButton.click(function () {
        const newItem = { label: "", type: "menu-item", icon: "", url: "" };
        RawMenuItem(newItem, 1, $("#menulistitem tr").length, null);
      });
      $("#main-container").append(addButton);

      // Thêm nút lưu
      const saveButton = $('<button class="btn btn-success me-3">Lưu</button>');
      saveButton.click(menuEditFinish);
      $("#main-container").append(saveButton);

      

      const tableBody = document.getElementById("menulistitem");
      const sortable = new Sortable(tableBody, {
        animation: 150, // Hoạt ảnh khi kéo và thả
        handle: ".label-cell", // Đối tượng nào có thể kéo (thêm lớp 'label-cell' vào cột bạn muốn cho phép kéo)
        onEnd: function (evt) {
            const oldIndex = evt.oldIndex; // Chỉ số cũ của hàng
            const newIndex = evt.newIndex; // Chỉ số mới của hàng
            console.log("Hàng đã được kéo từ", oldIndex, "đến", newIndex);
            // Xử lý thêm nếu cần, chẳng hạn như cập nhật cơ sở dữ liệu
        },
    });
    },
    error: function (xhr, status, error) {
      console.error("Error fetching data:", error);
    },
  });
}

function getValueOrDefault(element, defaultValue = "") {
  return element ? element.trim() : defaultValue;
}

function menuEditFinish() {
  const menuItems = [];
  const submenuMap = {}; // Sử dụng để theo dõi mục cha của các mục submenu

  $("#menulistitem tr").each(function () {
    const menuItem = {};

    // Lấy dữ liệu từ mỗi ô và gán cho các thuộc tính của menuItem
    menuItem.label = getValueOrDefault(
      $(this).find("td:nth-child(2) input").val(),
      $(this).find("td:nth-child(2) span").text()
    );
    menuItem.type = getValueOrDefault(
      $(this).find("td:nth-child(3) select").val(),
      $(this).find("td:nth-child(3) span").text()
    );
    menuItem.icon = $(this).find("td:nth-child(4) i").attr("class")
      ? $(this).find("td:nth-child(4) i").attr("class").replace("menu-icon", "")
      : "";
    menuItem.url = getValueOrDefault(
      $(this).find("td:nth-child(5) input").val(),
      $(this).find("td:nth-child(5)").text()
    );
    menuItem.code = getValueOrDefault(
      $(this).find("td:nth-child(6) input").val(),
      ""
    );
    const parentId = $(this).attr("parent");
    if (parentId) {
      // Nếu dòng này là submenu, thêm vào mục items của mục cha tương ứng
      const parentItem = submenuMap[parentId];
      if (parentItem) {
        if (!parentItem.items) {
          parentItem.items = [];
        }
        parentItem.items.push(menuItem);
      }
    } else {
      // Nếu dòng này không phải là submenu, thêm vào mảng chính
      menuItems.push(menuItem);
      // Lưu mục cha của submenu (nếu có) vào map
      submenuMap[$(this).attr("id")] = menuItem;
    }
  });

  const jsonData = { _id: "6621f2cb19dfda5f7b6f7d3b", menu: menuItems };
  //console.log(jsonData);
  $.ajax({
    url: "/api/sitesettings/update",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(jsonData),
    success: function (response) {
      console.log("Data updated successfully:", response);
      generateMenu();
      menuView(); // Thực hiện các hành động sau khi cập nhật thành công nếu cần
      toastr.success("Menu đã được cập nhật");
    },
    error: function (xhr, status, error) {
      console.error("Error updating data:", error);
      // Xử lý lỗi nếu có
    },
  });
}

//upload file lên thư mục uploads
function uploadFile(tdcode) {
  const fileInput = document.getElementById("filepicker");
  const file = fileInput.files[0];

  if (!file) {
    console.error("No file selected.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  $.ajax({
    url: "/api/files/upload",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: (data) => {
      toastr.success("code đã được cập nhật");
      $(tdcode).find("input").val(data);
      $("#modalCodePicker").modal("hide");
      menuEditFinish();
    },
    error: (xhr, status, error) => {
      console.error("Error uploading file:", error);
    },
  });
}
