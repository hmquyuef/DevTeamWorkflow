document.addEventListener("DOMContentLoaded", function () {
  profileView();
  getUsername();
  loadFooter();
  generateMenu();
});

function loadFooter() {
  $("#page-footer").html(
    `<div class="container-fluid d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column"><div class="mb-2 mb-md-0">© ${new Date().getFullYear()}, <a href="https://themeselection.com" target="_blank" class="footer-link fw-medium">sneat</a> mode by DEV Team</div></div>`
  );
}

function taskBoard() {
  $("#main-container").html(`
        <div id="todo-lists-basic-demo"></div>
    `);

  Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
    size: "mini",
    delay: false,
    position: "right top",
  });

  $.ajax({
    url: "/getalltask",
    type: "GET",
    success: function (data) {
      $("#todo-lists-basic-demo").lobiList({
        lists: data, // Use data received from the server
        onSingleLine: false,
        finishTitleEditing: function () {
          $.ajax({
            url: "/createtaskList",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(list), // Send list data as JSON
            success: function (response) {
              console.log("List created successfully:", response);
            },
            error: function (xhr, status, error) {
              console.error("Error creating list:", error);
            },
          });
        },
      });
    },
    error: function (xhr, status, error) {
      console.error("Error fetching data:", error);
    },
  });
}

function site() {
  const list = [
    "https://lib.uef.edu.vn/",
    "https://proofman.uef.edu.vn/",
    "https://dspace.uef.edu.vn/",
    "https://student.uef.edu.vn/",
    "https://portal.uef.edu.vn/",
    "https://lms.uef.edu.vn/",
    "https://daotao.uef.edu.vn/",
    "https://www.uef.edu.vn/",
    "https://qrcode.uef.edu.vn/",
    "https://qrcode.uef.edu.vn/",
  ];

  var cardcontainer = $(`<div class="row"></div>`);

  list.forEach((link) => {
    cardcontainer.append(`
            <div class="col-md-3 mb-3">
                <a class="card h-100" href="${link}" target="_blank">
                    <div class="card-body">
                        <span class="card-text">${link}</span>
                        <iframe style="width:100%" src="${link}" title="lms"></iframe>
                    </div>
                </a>
            </div>
        `);
  });

  $("#main-container").append(cardcontainer);
}

function generateMenu() {
  $.ajax({
    url: "/api/sitesettings/all",
    type: "GET",
    success: function (data) {
      console.log(data);
      var tempmenu = $("<div></div>");
      var isFirstItem = true;
      menuData = data[0].menu;

      const menuItem = (item) => {
        if (item.type === "menu-header") {
          return $('<li class="menu-header small text-uppercase"></li>').append(
            $(
              `<span class="menu-header-text" data-i18n="${item.label}">${item.label}</span>`
            )
          );
        } else {
          var submenu = [];
          if (item.items && item.items.length) {
            item.items.forEach((sItem) => {
              submenu.push(menuItem(sItem));
            });
          }
          var activeItem = isFirstItem ? "active" : "";
          if (isFirstItem) isFirstItem = false;
          var menuLink = $(
            `<a href="${item.url ? item.url : "javascript:void(0)"
            }" class="menu-link ${item.items && item.items.length ? "menu-toggle" : ""
            }"></a>`
          );

          if (item.code && item.code.length) {
            console.log(item.code);
            //append thẻ script vào head bằng jquery
            $("head").append($(`<script src="../../uploads/${item.code}"></script>`));
          }
          if (item.icon) {
            menuLink.append($(`<i class="menu-icon ${item.icon}"></i>`));
          }
          menuLink.append(
            $(
              `<div class="text-truncate" data-i18n="${item.label}">${item.label}</div>`
            )
          );
          var menuItemElement = $('<li class="menu-item"></li>')
            .addClass(activeItem)
            .append(menuLink);
          menuItemElement.on("click", function () {
            $(".menu-item").removeClass("active");
            $(this).addClass("active");
          });
          if (item.items && item.items.length) {
            menuItemElement.append(
              $('<ul class="menu-sub"></ul>').append(submenu)
            );
          }
          return menuItemElement;
        }
      };

      menuData.forEach((item) => {
        tempmenu.append(menuItem(item));
      });
      tempmenu.append(
        menuItem({
          type: "menu-item",
          label: "Cài đặt MENU",
          icon: "bx bx-code-alt",
          url: "javascript:menuView()",
          code: "menucontroller.js",
        })
      );
      $("#page-menu").empty().append(tempmenu.children());
    },
    error: function (xhr, status, error) {
      console.error("Error fetching data:", error);
    },
  });
}

//#region Profile
const profileView = () => {
  $("#menu-profile").append(`<li>
                                <a class="dropdown-item" href="pages-account-settings-account.html">
                                  <div class="d-flex">
                                      <div class="flex-shrink-0 me-3">
                                        <div class="avatar avatar-online">
                                            <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle">
                                        </div>
                                      </div>
                                      <div class="flex-grow-1">
                                        <span id="dev-username" class="fw-medium d-block">John Doe</span>
                                        <small id="dev-role" class="text-muted">Admin</small>
                                      </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <div class="dropdown-divider"></div>
                              </li>
                              <li>
                                <a class="dropdown-item" href="javascript:logout();">
                                <i class="bx bx-power-off me-2"></i>
                                <span class="align-middle">Log Out</span>
                                </a>
                              </li>`);
}

function getUsername() {
  $.ajax({
    url: "/api/users/info",
    type: "GET",
    success: function (data) {
      $('#dev-username').text(data.username);
      $('#dev-role').text(data.role);
    },
    error: function (error) {
      console.error("Get username failed!");
    },
  });
}
//#endregion


//#region Logout
function logout() {
  $.ajax({
    url: "/api/users/logout",
    type: "GET",
    success: function (data) {
      window.location.href = "/login";
    },
    error: function (error) {
      console.error("Logout failed!");
    },
  });
}
//#endregion