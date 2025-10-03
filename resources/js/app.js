import "./bootstrap";
import.meta.glob([
    '../images/**',
]);

import { customSelectV2 } from "./helper/select2";

$(() => {
    async function loadTabScript(tabId) {
        console.log(tabId);

        switch (tabId) {
            case 'home-tab':
                const { initHome } = await import('./tabs/home.js');
                initHome();
                break;
            case 'dashboard-tab':
                const { initDashboard } = await import('./tabs/dashboard.js');
                initDashboard();
                break;
            case 'transaction-tab':
                const { initTransaction } = await import('./tabs/transaction.js');
                initTransaction();
                break;
            case 'employee-tab':
                const { initEmployee } = await import('./tabs/employee.js');
                initEmployee();
                break;
            case 'quotation-tab':
                const { initQuotation } = await import('./tabs/quotation.js');
                initQuotation();
                break;
            case 'order-tab':
                const { initOrder } = await import('./tabs/order.js');
                initOrder();
                break;
            case 'report-tab':
                const { initReport} = await import('./tabs/report.js');
                initReport();
                break;

        }
    }


    let activeTab = $('.nav-link.active').attr('id');

    if (activeTab) {
        loadTabScript(activeTab);
    }

    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        let newTabId = $(e.target).attr('id');
        loadTabScript(newTabId);
    });

    customSelectV2();

});
