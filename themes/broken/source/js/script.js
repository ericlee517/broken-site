
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown > a');  // 获取所有下拉按钮
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');            // 获取所有下拉菜单

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function (event) {
        const dropdownMenu = this.nextElementSibling;  // 获取相邻的下拉菜单

        // 判断当前菜单是否已经展开，如果是，则收起；如果没有展开，则展开
        if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');  // 收起菜单
        } else {
          // 先收起所有已展开的菜单
          dropdownMenus.forEach(menu => menu.classList.remove('show'));
          
          // 展开当前点击的菜单
          dropdownMenu.classList.add('show');
        }

        // 阻止点击事件的默认行为（防止页面跳转）
        event.preventDefault();
      });
    });

    // 点击页面其他地方时，自动收起所有展开的菜单
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.dropdown')) {
        dropdownMenus.forEach(menu => menu.classList.remove('show'));
      }
    });
  });
