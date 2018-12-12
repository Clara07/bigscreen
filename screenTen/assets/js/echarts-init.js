function publicEduAdd() {
    var dom = document.getElementById("publicEduAdd");
    var myChart = echarts.init(dom);
    var xName = ['2012年', '2013年', '2014年', '2015年'];
    var yName = ['支出', '收入'];
    var data = [
        [20, 32, 24, 10],
        [50, 12, 34, 90],

    ];
    option = {

        color: ['#8ce500', '#ffd800'],
        tooltip: {
            trigger: 'axis',
            // formatter: "{b}<br>{a}: {c}%<br>{a1}: {c1}%"
        },

        legend: {
            data: yName,
            x: 'right',
            y: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '14%',
            containLabel: true
        },

        xAxis: {

            type: 'category',
            axisTick: {
                show: false
            },
            boundaryGap: true,
            data: xName,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        yAxis: {
            name: '金额',
            type: 'value',
            max: '120',
            axisLabel: {
                formatter: function (value) {
                    return value + '%';
                }
            },

            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        series: [{
                name: yName[0],
                symbol: 'circle',
                smooth: true,
                type: 'line',
                data: data[0],
                symbolSize: '10',
            },
            {
                name: yName[1],
                smooth: true,
                type: 'line',
                symbol: 'circle',
                data: data[1],
                symbolSize: '10',
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
}

function publicFceAdd() {
    var dom = document.getElementById("publicFceAdd");
    var myChart = echarts.init(dom);
    var xName = ['2011年', '2012年', '2013年', '2014年', '2015年'];
    var yName = ['幼儿园', '普通小学', '普通初中', '普通高中', '职业高中', '中等职业', '高等学校'];
    var data = [
        [10, 2, 11, 14, 19],
        [2, 1, 10, 14, 9],
        [12, 4, 2, 11, 10],
        [3, 11, 6, 13, 20],
        [10, 12, 4, 14, 9]
    ];
    option = {
        color: ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', '#fb8bff'],
        tooltip: {
            trigger: 'axis',
            //formatter: "{b} <br> 合格率: {c}%"
        },

        legend: {
            data: yName,
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            boundaryGap: false,
            data: xName,
            splitLine: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#75bbd5',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        yAxis: {
            type: 'value',
            max: '21',
            splitNumber: 7,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    // width: , //这里是坐标轴的宽度
                }
            },
            axisLabel: {
                formatter: function (value) {
                    return value + "万";
                },
            },
        },
        series: [{
                name: yName[0],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[0],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[1],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[1],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[2],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[2],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[3],
                type: 'line',
                symbol: 'circle',
                symbolSize: '2',
                smooth: true,
                data: data[3],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            }, {
                name: yName[4],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[4],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[4],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[4],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[5],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[5],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[6],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[6],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
}

function publicFcePay() {
    var dom = document.getElementById("publicFcePay");
    var myChart = echarts.init(dom);
    var xName = ['2011年', '2012年', '2013年', '2014年', '2015年'];
    var yName = ['幼儿园', '普通小学', '普通初中', '普通高中', '职业高中', '中等职业', '高等学校'];
    var data = [
        [10, 2, 11, 14, 19],
        [2, 1, 10, 14, 9],
        [12, 4, 2, 11, 10],
        [3, 11, 6, 13, 20],
        [10, 12, 4, 14, 9]
    ];
    option = {
        color: ['#1a9bfc', '#99da69', '#e32f46', '#7049f0', '#fa704d', '#01babc', '#fb8bff'],
        tooltip: {
            trigger: 'axis',
            //formatter: "{b} <br> 合格率: {c}%"
        },

        legend: {
            data: yName,
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            boundaryGap: false,
            data: xName,
            splitLine: {
                show: true,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#75bbd5',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        yAxis: {
            type: 'value',
            max: '21',
            splitNumber: 7,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    // width: , //这里是坐标轴的宽度
                }
            },
            axisLabel: {
                formatter: function (value) {
                    return value + "万";
                },
            },
        },
        series: [{
                name: yName[0],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[0],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[1],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[1],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[2],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[2],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[3],
                type: 'line',
                symbol: 'circle',
                symbolSize: '2',
                smooth: true,
                data: data[3],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            }, {
                name: yName[4],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[4],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[4],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[4],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[5],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[5],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
            {
                name: yName[6],
                symbol: 'circle',
                symbolSize: '2',
                type: 'line',
                smooth: true,
                data: data[6],
                areaStyle: {
                    normal: {
                        opacity: "0.1",
                    }
                },
            },
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
}

function publicDoubleAdd() {
    var dom = document.getElementById("publicDoubleAdd");
    var myChart = echarts.init(dom);
    var xName = ['2012年', '2013年', '2014年', '2015年'];
    var yName = ['GDP比例', '教育支持占预算支出比例'];
    var data = [
        [20, 32, 24, 10],
        [50, 12, 34, 90],

    ];
    option = {

        color: ['#00cce5', '#00ff8f'],
        tooltip: {
            trigger: 'axis',
            // formatter: "{b}<br>{a}: {c}%<br>{a1}: {c1}%"
        },

        legend: {
            data: yName,
            x: 'right',
            y: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '14%',
            containLabel: true
        },

        xAxis: {

            type: 'category',
            axisTick: {
                show: false
            },
            boundaryGap: true,
            data: xName,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        yAxis: {
            name: '金额',
            type: 'value',
            max: '120',
            // axisLabel: {
            //     formatter: function (value) {
            //         return value + '%';
            //     }
            // },

            axisLabel: {
                formatter: '{value} %'
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        series: [{
                name: yName[0],
                symbol: 'circle',
                smooth: false,
                type: 'line',
                data: data[0],
                symbolSize: '10',
            },
            {
                name: yName[1],
                smooth: true,
                type: 'line',
                symbol: 'circle',
                data: data[1],
                symbolSize: '10',
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
}

function qingdaoMap() {


    var qingdaoMap = echarts.init(document.getElementById('qingdaoMap'));
    var qdmapdata = [{
            name: "市北区",
            value: 124
        }, {
            name: "市南区",
            value: 211
        }, {
            name: "李沧区",
            value: 111
        },
        {
            name: "崂山区",
            value: 113
        }, {
            name: "城阳区",
            value: 241
        }, {
            name: "黄岛区",
            value: 300
        },
        {
            name: "胶州市",
            value: 113
        }, {
            name: "即墨市",
            value: 211
        }, {
            name: "平度市",
            value: 316
        },
        {
            name: "莱西市",
            value: 111
        }
    ];
    option1 = {
            title: {
                text: name,
                x: 'left',
                y: 'top',
                textStyle: {
                    color: '#fffd51',
                    fontSize: 13
                }
            },


            tooltip: {
                // trigger: 'item'
                formatter: "{a}{b}<br>: {c}亿"
            },
            visualMap: {
                show: false,
                type: 'piecewise',
                // min: 0,
                // max: 120,
                // splitNumber: 4,
                left: '0',
                //orient: 'horizontal',
                top: '30px',
                calculable: true,
                precision: 0,
                textStyle: {
                    color: "#fff"
                },
                pieces: [{
                        min: 0,
                        max: 100,
                        color: "#cafdfe"
                    },
                    {
                        min: 101,
                        max: 200,
                        color: "#00ccff"
                    },
                    {
                        min: 201,
                        max: 300,
                        color: "#00eaff"
                    },
                    {
                        min: 301,
                        max: 400,
                        color: "#00aeff"
                    }
                ],
                // inRange: {
                //     color: ['#cafdfe', '#68e4fe', '#00ceff','#00a8ff']
                // }
            },
            series: [{
                type: 'map',
                mapType: "qingdao",
                left: "18%",
                zoom: "1.2",
                // name: "",
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#333'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#fff500',
                        borderWidth: 0
                    }
                },
                animation: false,

                data: qdmapdata
            }],
        },
        // 使用刚指定的配置项和数据显示图表。
        qingdaoMap.setOption(option1);

};

function publicExpenditure() {
    var dom = document.getElementById("publicExpenditure");
    var xName = ['小学', '初中', '高中', '中职'];
    var xData = ['市本级', '市南区', '市北区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市'];
    var data = [{
            name: '小学',
            value: [8220, 1112, 13100, 6334, 6100, 12000, 1200, 3000, 3400, 1311]
        },
        {
            name: '初中',
            value: [1220, 6112, 3100, 1334, 8100, 1000, 11200, 1000, 9400, 9311]
        },
        {
            name: '高中',
            value: [7220, 7112, 6100, 3334, 3100, 9000, 7200, 6000, 8400, 8311]
        },
        {
            name: '中职',
            value: [4220, 1112, 9100, 9334, 1100, 4000, 8200, 9000, 11400, 4311]
        }
    ];
    var myChart = echarts.init(dom);
    option = {
        color: ['#50bcff', '#efca00', '#77db64', '#ff3535'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: xName,
            align: 'right',
            right: 10,
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisLabel: {
                interval: '0'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            name: '金额',
            // axisLabel: {
            //     formatter: '{value}'
            // },
            max: '12000',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: data[0].name,
            type: 'bar',
            data: data[0].value,
        }, {
            name: data[1].name,
            type: 'bar',
            data: data[1].value,
        }, {
            name: data[2].name,
            type: 'bar',
            data: data[2].value,
        }, {
            name: data[3].name,
            type: 'bar',
            data: data[3].value,
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
};

function eduOperatingSpend() {
    var dom = document.getElementById("eduOperatingSpend");
    var xName = ['小学', '初中', '高中', '中职'];
    var xData = ['市本级', '市南区', '市北区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市'];
    var data = [{
            name: '小学',
            value: [8220, 1112, 13100, 6334, 6100, 12000, 1200, 3000, 3400, 1311]
        },
        {
            name: '初中',
            value: [1220, 6112, 3100, 1334, 8100, 1000, 11200, 1000, 9400, 9311]
        },
        {
            name: '高中',
            value: [7220, 7112, 6100, 3334, 3100, 9000, 7200, 6000, 8400, 8311]
        },
        {
            name: '中职',
            value: [4220, 1112, 9100, 9334, 1100, 4000, 8200, 9000, 11400, 4311]
        }
    ];
    var myChart = echarts.init(dom);
    option = {
        color: ['#50bcff', '#efca00', '#77db64', '#ff3535'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: xName,
            align: 'right',
            right: 10,
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisLabel: {
                interval: '0',
                rotate: '21'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            name: '金额',
            // axisLabel: {
            //     formatter: '{value}'
            // },
            max: '12000',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: data[0].name,
            type: 'bar',
            data: data[0].value,
        }, {
            name: data[1].name,
            type: 'bar',
            data: data[1].value,
        }, {
            name: data[2].name,
            type: 'bar',
            data: data[2].value,
        }, {
            name: data[3].name,
            type: 'bar',
            data: data[3].value,
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
};

function eduEarn() {
    var dom = document.getElementById("eduEarn");
    var xData = ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年'];
    var earnData = {
        name: '收入',
        value: [100, 141, 210, 220, 230, 270, 175],
    };
    var myChart = echarts.init(dom);
    option = {
        color: ['#00a0e9', '#ffff00'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        legend: {
            data: ['降水量', '平均温度'],
            textStyle: {
                color: '#fff',
            }
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        }],
        yAxis: [{
                type: 'value',
                name: '金额',
                min: 0,
                max: 300,
                interval: 50,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 2, //这里是坐标轴的宽度
                    }
                },
            },
            {
                type: 'value',
                name: '增长率',
                axisLabel: {
                    formatter: '{value}%',
                },
                min: 0,
                max: 120,
                // interval: 5,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                        width: 2, //这里是坐标轴的宽度
                    }
                },
            }
        ],
        series: [

            {

                name: earnData.name,
                type: 'bar',
                data: earnData.value,
                barWidth: '16',
            },
            {
                name: '增长率    ',
                type: 'line',
                symbol: 'circle',
                symbolSize: '10',
                yAxisIndex: 1,
                data: [50, 100, 70, 40, 30, 42, 26],
                smooth: true,
                showAllSymbol: true
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
};

function eduCNYmln() {
    var dom = document.getElementById("eduCNYmln");
    var myChart = echarts.init(dom);
    option = {
        backgroundColor: '#0a1235',
        tooltip: {
            trigger: 'item',
            // formatter: "{a} <br/>{b} : {c}千万元"
        },
        // legend: {
        //     show:false,
        //     x: 'center',
        //     y: '15%',
        //     data: ['高等教育', '中等职业教育', '普通教育', '义务教育', '特殊教育', '学前教育'],
        //     icon: 'circle',
        //     textStyle: {
        //         color: '#fff',
        //     }
        // },
        calculable: false,
        series: [{
            name: '教育经费收入构成',
            type: 'pie',
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['30%', '120%'],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ['52%', '10%'],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: 'area',
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{b} '
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 12,
                    length2: 5,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 600.58,
                    name: '高等教育',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 1100.58,
                    name: '中等职业教育',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200.58,
                    name: '普通教育',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300.58,
                    name: '义务教育',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400.58,
                    name: '特殊教育',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 1500.58,
                    name: '学前教育',
                    itemStyle: {
                        normal: {
                            color: '#45dbf7'
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
};

function eduBudgetSpend() {
    var dom = document.getElementById("eduBudgetSpend");
    var myChart = echarts.init(dom);
    var xName = ['2011年','2012年', '2013年', '2014年', '2015年','2016年'];
    var yName = ['支出', '收入'];
    var data = [
        [60,40, 32, 24, 10,60],
        [70,50, 12, 34, 50,70],

    ];
    option = {

        color: ['#00dd9b', '#e9f00f'],
        tooltip: {
            trigger: 'axis',
            // formatter: "{b}<br>{a}: {c}%<br>{a1}: {c1}%"
        },

        legend: {
            show:false,
            data: yName,
            x: 'right',
            y: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '14%',
            containLabel: true
        },

        xAxis: {

            type: 'category',
            axisTick: {
                show: false
            },
            boundaryGap: true,
            data: xName,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        yAxis: {
            name: '金额',
            type: 'value',
            max: '120',
            axisLabel: {
                formatter: function (value) {
                    return value + '%';
                }
            },

            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 2, //这里是坐标轴的宽度
                }
            },
        },
        series: [{
                name: yName[0],
                symbol: 'circle',
                smooth: false,
                type: 'line',
                data: data[0],
                symbolSize: '1',
                areaStyle: {
                    normal: {
                        opacity: "0.6",
                    }
                },
            },
            {
                name: yName[1],
                smooth: false,
                type: 'line',
                symbol: 'circle',
                data: data[1],
                symbolSize: '1',
                areaStyle: {
                    normal: {
                        opacity: "0.6",
                    }
                },
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
}