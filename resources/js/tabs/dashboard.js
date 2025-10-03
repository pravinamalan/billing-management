import ApexCharts from "apexcharts";
let initialized = false;

function setup() {
    console.log("Dashboard setup() → runs once");
     var serviceRevenueOptions = {
        series: [1200, 1900, 3000, 500, 1000],
        labels: ["Earthmover", "Crane", "JCB", "Water Boring", "Other"],
        chart: {
            type: "donut",
            height: 350,
        },
        colors: ["#7267ef", "#8980f2", "#a098f4", "#b7b1f7", "#d5d2fa"],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "12px",
                fontFamily: "Arial",
                colors: ["#fff"],
            },
            background: {
                enabled: true,
                foreColor: "#7267ef",
                borderColor: "transparent",
                padding: 4,
                borderRadius: 2,
                opacity: 1,
            },
            formatter: function (val, opts) {
                return " $" + opts.w.globals.series[opts.seriesIndex];
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "14px",
                            fontFamily: "Arial",
                            color: "#7267ef",
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: "20px",
                            fontFamily: "Arial",
                            color: "#7267ef",
                            offsetY: 5,
                            formatter: function (val) {
                                return "$" + val;
                            },
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: "Total Revenue",
                            color: "#7267ef",
                            fontSize: "14px",
                            fontFamily: "Arial",
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0);
                            },
                        },
                    },
                },
            },
        },
        stroke: {
            width: 2,
            colors: ["#fff"],
        },
        legend: {
            position: "right",
            horizontalAlign: "center",
            fontSize: "16px",
            fontFamily: "Arial",
            labels: {
                colors: "#7267ef",
                useSeriesColors: false,
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                fillColors: [
                    "#7267ef",
                    "#8980f2",
                    "#a098f4",
                    "#b7b1f7",
                    "#d5d2fa",
                ],
            },
        },
        tooltip: {
            y: {
                formatter: function (val, opts) {
                    const total = opts.w.globals.seriesTotals.reduce(
                        (a, b) => a + b,
                        0
                    );
                    const percentage = ((val / total) * 100).toFixed(1);
                    return `$${val} (${percentage}%)`;
                },
            },
            style: {
                fontSize: "12px",
                fontFamily: "Arial",
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 300,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    var serviceRevenueChart = new ApexCharts(
        document.querySelector("#serviceWiseRevenue"),
        serviceRevenueOptions
    );
    serviceRevenueChart.render();

    // Dynamic data calculation for past 6 months
    function getPastSixMonths() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const currentMonth = new Date().getMonth();
        const pastSixMonths = [];

        for (let i = 5; i >= 0; i--) {
            const monthIndex = (currentMonth - i + 12) % 12;
            pastSixMonths.push(months[monthIndex]);
        }

        return pastSixMonths;
    }

    // Sample data - replace with your actual data
    const currentYearData = {
        Jan: 45,
        Feb: 52,
        Mar: 38,
        Apr: 60,
        May: 48,
        Jun: 52,
        Jul: 55,
        Aug: 42,
        Sep: 58,
        Oct: 50,
        Nov: 47,
        Dec: 53,
    };

    const previousYearData = {
        Jan: 35,
        Feb: 41,
        Mar: 32,
        Apr: 48,
        May: 40,
        Jun: 45,
        Jul: 42,
        Aug: 38,
        Sep: 46,
        Oct: 39,
        Nov: 36,
        Dec: 44,
    };

    const pastSixMonths = getPastSixMonths();
    const currentYearOrders = pastSixMonths.map(
        (month) => currentYearData[month] || 0
    );
    const previousYearOrders = pastSixMonths.map(
        (month) => previousYearData[month] || 0
    );

    var dynamicOrderComparisonOptions = {
        series: [
            {
                name: "Current Year Orders",
                type: "column",
                data: currentYearOrders,
            },
            {
                name: "Previous Year Orders",
                type: "line",
                data: previousYearOrders,
            },
        ],
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            toolbar: { show: true },
        },
        stroke: {
            width: [0, 3],
            curve: "smooth",
            colors: ["#7267ef", "#8980f2"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%",
                borderRadius: 4,
            },
        },
        colors: ["#7267ef", "#8980f2"],
        dataLabels: { enabled: false },
        fill: { opacity: [0.85, 1] },
        markers: {
            size: 5,
            colors: ["#8980f2"],
            strokeColors: "#fff",
            strokeWidth: 2,
        },
        xaxis: {
            categories: pastSixMonths,
            labels: { style: { colors: "#7267ef", fontSize: "12px" } },
            axisBorder: { color: "#7267ef" },
            axisTicks: { color: "#7267ef" },
        },
        yaxis: {
            title: { text: "Number of Orders", style: { color: "#7267ef" } },
            labels: { style: { colors: "#7267ef", fontSize: "12px" } },
            min: 0,
        },
        grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " orders";
                },
            },
            theme: "light",
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            labels: { colors: "#7267ef" },
            markers: { fillColors: ["#7267ef", "#8980f2"] },
            itemMargin: { horizontal: 15, vertical: 8 },
            offsetY: 5,
        },
    };

    var dynamicOrderComparisonChart = new ApexCharts(
        document.querySelector("#recentOrders"),
        dynamicOrderComparisonOptions
    );
    dynamicOrderComparisonChart.render();

    var options = {
        series: [
            {
                name: "Monthly Income",
                type: "column",
                data: [
                    12000, 13500, 15000, 8000, 16000, 17500, 18000, 10000,
                    20000, 21000, 22000, 10000,
                ],
                color: "#7267ef",
            },
            {
                name: "Monthly Expense",
                type: "line",
                data: [
                    8000, 15000, 9000, 8800, 19000, 10000, 10500, 11000, 1000,
                    12000, 12500, 15000,
                ],
                color: "rgb(199, 217, 255)",
            },
        ],
        chart: {
            height: 350,
            type: "line",
            stacked: false,
            toolbar: {
                show: true,
            },
        },
        stroke: {
            width: [0, 3],
            curve: "smooth",
            colors: ["#7267ef", "rgb(199, 217, 255)"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 4,
                colors: {
                    backgroundBarColors: ["transparent"],
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: [0.85, 1],
            colors: ["#7267ef", "transparent"],
            gradient: {
                inverseColors: false,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 5,
            colors: ["rgb(199, 217, 255)"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            labels: {
                style: {
                    colors: "#7267ef",
                    fontSize: "12px",
                    fontFamily: "Arial",
                },
            },
            axisBorder: {
                color: "#7267ef",
            },
            axisTicks: {
                color: "#7267ef",
            },
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
                style: {
                    color: "#7267ef",
                },
            },
            labels: {
                style: {
                    colors: "#7267ef",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 3,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
            theme: "light",
            style: {
                fontSize: "12px",
            },
        },
        legend: {
            labels: {
                colors: "#7267ef",
                useSeriesColors: false,
            },
            markers: {
                fillColors: ["#7267ef", "rgb(199, 217, 255)"],
            },
        },
    };

    var chart = new ApexCharts(
        document.querySelector("#monthlyIncomeExpenseChart"),
        options
    );
    chart.render();
}

function render() {
    console.log("Dashboard render() → runs every time");

}

export function initDashboard() {

    if (!initialized) {
        setup();
        initialized = true;
    }

    render();
}
