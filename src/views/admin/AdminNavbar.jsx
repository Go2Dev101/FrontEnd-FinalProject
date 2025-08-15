import React, { useState } from "react";


export function AdminNavbar() {
  const [open, setOpen] = useState({ orders: true, menu: true });

  const nav = (page) => () => {
    if (window?.renderMain) window.renderMain(page);
  };


  return (
    <nav className="space-y-2 h-screen bg-amber-50 w-50">
      <section id="adminDashboard" className="flex flex-col gap-1 items-left">
        {/* <button
          onClick={nav("dashboard", "admin")}
          className="text-left block p-2 rounded hover:bg-blue-100"
          id="dashboardId"
        >
          Dashboard
        </button> */}

        <div>
          <button
            onClick={() => setOpen((s) => ({ ...s, orders: !s.orders }))}
            className="w-full text-left p-2 rounded hover:bg-blue-100 font-semibold"
            aria-expanded={open.orders}
            aria-controls="ordersSubmenu"
          >
            My Orders ▾
          </button>
          {open.orders && (
            <div id="ordersSubmenu" className="ml-4 mt-1">
              <button
                onClick={nav("adminManageOrder", "admin")}
                className="block text-left w-full p-2 rounded hover:bg-blue-100"
                id="allOrders"
              >
                All Orders
              </button>
              <button
                onClick={nav("adminOrderDetails", "admin")}
                className="block text-left w-full p-2 rounded hover:bg-blue-100"
                id="order_detail"
              >
                Orders Details
              </button>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setOpen((s) => ({ ...s, menu: !s.menu }))}
            className="w-full text-left p-2 rounded hover:bg-blue-100 font-semibold"
            aria-expanded={open.menu}
            aria-controls="menuSubmenu"
          >
            Manage Menu ▾
          </button>
          {open.menu && (
            <div id="menuSubmenu" className="ml-4 mt-1">
              <button
                onClick={nav("adminManageMenu", "admin")}
                className="block text-left w-full p-2 rounded hover:bg-blue-100"
                id="manageMenu"
              >
                Manage Menu
              </button>
              <button
                onClick={nav("adminAddMenu", "admin")}
                className="block text-left w-full p-2 rounded hover:bg-blue-100"
                id="AddMenu"
              >
                Add Menu
              </button>
            </div>
          )}
        </div>

        <button
          onClick={nav("adminManageMember", "admin")}
          className="block text-left w-full p-2 rounded hover:bg-blue-100"
          id="ManageMember"
        >
          Manage Memberships
        </button>
      </section>
    </nav>
  );
}
