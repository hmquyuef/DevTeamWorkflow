// const account = async () => {
//     $("#main-container").html(`<h4 class="py-3 mb-4"><span class="text-muted fw-light">Dev Team /</span> Accounts</h4>`);
//     $('#main-container').append(`<div class="row" id="func-account">
//                                     <div class="col mb-4">
//                                         <a href="javascript:createAccount()" class="btn btn-primary">Create Account</a>
//                                     </div>
//                                 </div>`);
//     $('#main-container').append(`<div class="row px-3" id="table-account"></div>`);
//     await renderTableAccount();
// }

const account = async () => {
    $("#main-container").html(`<h4 class="py-3 mb-4"><span class="text-muted fw-light">Dev Team /</span> Accounts</h4>`);
    $('#main-container').append(`<div class="card">
    <h5 class="card-header">Bordered Table</h5>
    <div class="card-body">
      <div class="table-responsive text-nowrap">
        <table class="table table-bordered">
          <thead>
            <tr class="text-center">
                <td class="w-px-20"><input class="form-check-input checkbox-all" type="checkbox"/></td>
                <th>Username</th>
                <th>Password</th>
                <th>Roles</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input class="form-check-input checkbox-item" type="checkbox" /></td>
              <td>Jerry Milton</td>
              <td>
                <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Lilian Fuller" data-bs-original-title="Lilian Fuller">
                    <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Sophia Wilkerson" data-bs-original-title="Sophia Wilkerson">
                    <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                  </li>
                  <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Christina Parker" data-bs-original-title="Christina Parker">
                    <img src="../../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                  </li>
                </ul>
              </td>
              <td><span class="badge bg-label-warning me-1">Pending</span></td>
              <td>
                <div class="dropdown">
                  <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                    <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`);
}
const addRaw = async () => {
    $('.card-body-item').append(`<div class="row">
    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
      <label class="form-label" for="form-repeater-4-9">Username</label>
      <input type="text" id="form-repeater-4-9" class="form-control" placeholder="john.doe">
    </div>
    <div class="mb-3 col-lg-6 col-xl-3 col-12 mb-0">
      <label class="form-label" for="form-repeater-4-10">Password</label>
      <input type="password" id="form-repeater-4-10" class="form-control" placeholder="············">
    </div>
    <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
      <label class="form-label" for="form-repeater-4-11">Gender</label>
      <select id="form-repeater-4-11" class="form-select">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div class="mb-3 col-lg-6 col-xl-2 col-12 mb-0">
      <label class="form-label" for="form-repeater-4-12">Profession</label>
      <select id="form-repeater-4-12" class="form-select">
        <option value="Designer">Designer</option>
        <option value="Developer">Developer</option>
        <option value="Tester">Tester</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
    <div class="mb-3 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
      <button class="btn btn-label-danger mt-4" onclick="removeRaw(this)">
        <i class="bx bx-x me-1"></i>
        <span class="align-middle">Delete</span>
      </button>
    </div>
  </div>`);
}

const removeRaw = async (e) => {
    $(e).parent().parent().remove();
}

//create function createAccount with modal
const createAccount = async () => {
    $('#main-container').append(`<div class="modal" id="modal-create-account">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create Account</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="form-create-account">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                        <div class="mb-3">
                            <label for="role" class="form-label">Role</label>
                            <select class="form-select" id="role" name="role">
                                <option value="basic">Basic</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`);
    $('#modal-create-account').modal('show');
};

//create function submit form create account
$('#main-container').on('submit', '#form-create-account', async (e) => {
    e.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    const role = $('#role').val();
    try {
        //using ajax
        $.ajax({
            url: '/api/users/register',
            type: 'POST',
            data: { username, password, role },
            success: function (response) {
                $('#modal-create-account').modal('hide');
                toastr.success('Thêm mới tài khoản thành công!');
                renderTableAccount();
            },
            error: function (xhr, status, error) {
                //using toastr
                toastr.error('Error creating account');
            }
        });
    } catch (error) {
        console.error('Error creating account:', error);
    }
});

const renderTableAccount = async () => {
    try {
        //call ajax to server to get data
        $.ajax({
            url: "/api/users/all",
            type: "GET",
            success: function (response) {
                //create table
                $('#table-account').html(`<table class="table table-bordered table-striped">
                <thead>
                    <tr class="text-center">
                        <th>#</th>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="table-account-body"></tbody>
            </table>`);
                //loop data to add to table
                response.map((item, index) => {
                    $('#table-account-body').append(`<tr>
                    <td class="text-center">${index + 1}</td>
                    <td>${item._id}</td>
                    <td>${item.username}</td>
                    <td>${item.password}</td>
                    <td class="text-center">${item.roles}</td>
                    <td class="text-center">
                        <a class="text-danger" href="javascript:deleteAccount('${item._id}')"><i class='bx bx-trash-alt'></i></a>
                    </td>
                </tr>`);
                });
            },
            error: function (xhr, status, error) {
                console.error("Error fetching data:", error);
            },
        });
    } catch (error) {
        console.error('Error loading account:', error);
    }
};


//create funtion deleteAccount
const deleteAccount = async (id) => {
    try {
        $.ajax({
            url: '/api/users/' + id,
            type: 'DELETE',
            success: function (response) {
                toastr.success(`Xóa thành công: ${response.deleted} tài khoản!`);
                renderTableAccount();
            },
            error: function (xhr, status, error) {
                //using toastr
                toastr.error('Error deleting account');
            }
        });
    } catch (error) {
        console.error('Error deleting account:', error);
    }
};