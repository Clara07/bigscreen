// created by py
// 根据内容高度给body赋值
$(function () {
    // 获取头部的高度
    var topHeight=$(".top-show").outerHeight(true);
    // 获取主体内容的高度
    var conHeight=$(".main-content").outerHeight(true);
    $("body").height(topHeight + conHeight);
});


// 2017年财政投入资金(按学段)
// 基于准备好的dom，初始化echarts实例
var leftContainer1 = echarts.init(document.getElementById('leftContainer1'));
option = {
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#005eec',
                fontSize: '14'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#061f5e', '#014ec8', '#061f5e', '#014ec8'],
                shadowColor: 'rgba(233,216, 8, 0.3)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0059e1'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#0059e1'
            }
        },
        indicator: [
            { name: '学前教育', max: 6500 },
            { name: '义务教育', max: 16000 },
            { name: '普通高中', max: 30000 },
            { name: '中职教育', max: 38000 },
            { name: '高等教育', max: 52000 }
        ]
    },
    series: [{
        type: 'radar',
        data: [
            {
                value: [5000, 14000, 28000, 31000, 42000],
                // name: '数据',
                itemStyle: {
                    normal: {
                        color: '#ffea00',
                        
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#ffea00'
                    }
                }
            }
        ]
    }]
}
// 使用刚指定的配置项和数据显示图表。
leftContainer1.setOption(option);

// 2015 - 2017年财政投入资助资金
// 基于准备好的dom，初始化echarts实例
var leftContainer2 = echarts.init(document.getElementById('leftContainer2'));
var data = [44011.69, 44014.57, 44959.39];
var xdata = ['2015年', '2016年', '2017年'];
var option = {
    backgroundColor: 'transparent',
    grid: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 20,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xdata,
        triggerEvent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#0066fe'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#0066fe',
            fontSize: 14,
            fontWeight: 'bold',
        }
    },
    yAxis: {
         name: '单位（万元）',
        nameTextStyle: {
            show:'false',
            color: '#0066fe',
            fontSize: 14,
        },
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#0066fe'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#0066fe'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            color: '#0066fe',
            fontSize: 13,
        }
    },
    series: [{
        data: data,
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        color: '#ff7676',
        lineStyle: {
            color: "#00e2fd"
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#00e4ff',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        areaStyle: {
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#00fcff' // 0% 处的颜色
                }, {
                    offset: 1, color: '#062064' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 fals
            }
            
        }
    }, {
        type: 'bar',
        animation: true,
        barWidth: 3,
        hoverAnimation: false,
        data: data,
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#00e4ff' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0366a7' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                label: {
                    show: false
                }
            }
        }
    }]
}
// 使用刚指定的配置项和数据显示图表。
leftContainer2.setOption(option);


// 2015-2017年青岛市学前教育政府资助人数与资金
// 基于准备好的dom，初始化echarts实例
var leftContainer3 = echarts.init(document.getElementById('leftContainer3'));

option = {
    color: ['#085aff', '#00eddb'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['资助人数', '资助资金'],
        textStyle:{
            color:"#fff"
        }
    },
    xAxis: [{
        type: 'category',
        data: ['2015年', '2016年', '2017年'],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            color: '#1b44ff',
            fontSize:14
        },
        axisLine: {
            lineStyle: {
                color: '#1b44ff'
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        // name: '资助人数',
        min: 0,
        max: 80,
        interval: 20,
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}',
            color: '#2a9cf9',
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
                color: '#1b44ff'
            }
        }
    },
    {
        show: false,
        type: 'value',
        name: '资助资金',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
            formatter: '{value}'
        },


    }
    ],
    series: [{
        name: '资助人数',
        type: 'bar',
        data: [20.0, 40.9, 70.0]
    },
    {
        name: '资助资金',
        type: 'bar',
        yAxisIndex: 1,
        data: [20.6, 50.9, 90.0]
    }
    ]
};
// 使用刚指定的配置项和数据显示图表。
leftContainer3.setOption(option);


// 2017年青岛市学前教育政府资助资金区域分布
// 基于准备好的dom，初始化echarts实例
var qdmap = echarts.init(document.getElementById('qdmap'));
option = {
    visualMap: {
        min: 0,
        max: 1000,
        right: '2%',
        top: 'bottom',
        text: ['万元', ''],
        calculable: true,
        colorLightness: [0.2, 100],
        color: ['#ff6c38', '#ffd202', '#87dd00','#00ccff'],
        dimension: 0,
        textStyle:{
            color:'#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name +':'+ '\n' + params.value+'万元';
        }
    },
    grid:{
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    series: [{
        type: 'map',
        mapType: 'qingdao',
        zoom:1.2,
        itemStyle: {
            normal:{
                label: {
                    show: true,
                    color: '#fff'
                },
                borderColor: '#005eec'
            },
            emphasis: {
                label: {
                    show: true
                }
            },

        },
        data: [{
            name: '莱西市',
            value:345,
            itemStyle: {
                normal: {
                    // color: '#ff6c38',
                }
            },
            
        }, {
            name: '平度市',
                value: 545,
            itemStyle: {
                normal: {
                    // color: '#ffd202',
                }
            }
        }, {
            name: '即墨区',
                value: 245,
            itemStyle: {
                normal: {
                    // color: '#00ccff',
                }
            }
        }, {
            name: '胶州市',
                value: 645,
            itemStyle: {
                normal: {
                    // color: '#87dd00',
                }
            }
        }, {
            name: '城阳区',
                value: 745,
            itemStyle: {
                normal: {
                    // color: '#ffd202',
                }
            }
        }, {
            name: '崂山区',
                value: 945,
            itemStyle: {
                normal: {
                    // color: '#87dd00',
                }
            }
        }, {
            name: '李沧区',
                value: 845,
            itemStyle: {
                normal: {
                    // color: '#ffd202',
                }
            }
        }, {
            name: '市北区',
                value: 145,
            itemStyle: {
                normal: {
                    // color: '#87dd00',
                }
            }
        }, {
            name: '市南区',
                value: 845,
            itemStyle: {
                normal: {
                    // color: '#ff6c38',
                }
            }
        }, {
            name: '黄岛区',
                value: 395,
            itemStyle: {
                normal: {
                    // color: '#00ccff',
                }
            }
        }]
    }]
}

// 使用刚指定的配置项和数据显示图表。
qdmap.setOption(option);

// 2017年青岛市业务教育政府资助资金区域分布
// 基于准备好的dom，初始化echarts实例
var middleContainer = echarts.init(document.getElementById('middleContainer'));
var data = [
    {
    "name": "市南区",
    "value": 80
}, {
    "name": "市北区",
    "value": 87.8
}, {
    "name": "李沧区",
    "value": 71
}, {
    "name": "崂山区",
    "value": 80
}, {
    "name": "城阳区",
    "value": 66
}, {
    "name": "高新区",
    "value": 80
}, {
    "name": "青西新区",
    "value": 80
    }, {
        "name": "即墨区",
        "value": 80
    }, {
        "name": "胶州市",
        "value": 80
    }, {
        "name": "平度市",
        "value": 80
    }, {
        "name": "莱西市",
        "value": 80
    }

];
var xData = [],
    yData = [];
var min = 50;
data.map(function (a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor: "transparent",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function (params) {
            return params.name + ':' + '\n' + params.value + '万元';
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0066fe'
            }
        },
        axisLabel: {
            show: true,
            color: '#0066fe',
            fontSize: 14,
            interval: 0,
            rotate:30,
            fontSize:14
        }
    }],
    yAxis: [{
        type: 'value',
        name:'万元',
        gridIndex: 0,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0066fe'
            }
        },
        axisLabel: {
            color: '#0066fe',
            fontSize: 14
        }
    },
    {
        type: 'value',
        gridIndex: 0,
        min: min,
        max: 100,
        splitNumber: 12,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
            }
        }
    }
    ],
    series: [{
        name: '合格率',
        type: 'bar',
        barWidth: '30%',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00feff'
                    },
                    {
                        offset: 0.5,
                        color: '#027eff'
                    },
                    {
                        offset: 1,
                        color: '#0286ff'
                    }
                    ]
                )
            }
        },
        data: yData,
        zlevel: 11

    },
    {
        name: '背景',
        type: 'bar',
        barWidth: '50%',
        xAxisIndex: 0,
        yAxisIndex: 1,
        barGap: '-135%',
        data: [100, 100, 100, 100, 100, 100, 100,100,100,100,100],
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        zlevel: 9
    },

    ]
};
// 使用刚指定的配置项和数据显示图表。
middleContainer.setOption(option);

//  2017年青岛市义务教育政府资助三级财政投入
// 基于准备好的dom，初始化echarts实例
var rightContainer1 = echarts.init(document.getElementById('rightContainer1'));
function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = obj[attr];
    }
    return newobj;
}
var xData = [],
    yData = [];
var data = [{
    name: "中央财政",
    value: 1895457,
    itemStyle:{
        normal:{
            color:'#ff7272'
        }
    }
}, {
    name: "市财政",
    value: 722232,
        itemStyle: {
            normal: {
                color: '#ffc600'
            }
        }
}, {
    name: "区市财政",
    value: 1723130,
        itemStyle: {
            normal: {
                color: '#00a2ff'
            }
        }
}]
data.map((a, b) => {
    xData.push(a.name);
    yData.push(a.value);
});
var startColor = ['#ff7272', '#ffc600', '#00a2ff'];
var endColor = ['#ff7272', '#ffc600', '#00a2ff'];
var borderStartColor = ['#9a8169', '#915872', '#3077b7'];
var borderEndColor = ['#9a8169', '#915872', '#3077b7'];
var RealData = [];
var borderData = [];
data.map((item, index) => {
    var newobj = deepCopy(item);
    var newobj1 = deepCopy(item);
    RealData.push(newobj);
    borderData.push(newobj1);
});
borderData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: borderStartColor[index] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: borderEndColor[index] // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
});
option = {
    backgroundColor: "transparent",
    series: [
        // 主要展示层的
        {
            radius: ['33%', '61%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    // color: '#fff',
                    formatter :'{b}'+'\n'+'{d}'+'%'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: RealData,
            tooltip: {
                formatter: "{a}:<br/>{b}: {c}人"
            }
        },
        // 边框的设置
        {
            radius: ['31%', '34%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: borderData
        },
        // 中心的圆圈
        {
            radius: ['26%', '31%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                    }
                }
            }],
            animation: false
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
rightContainer1.setOption(option);

// 2017年青岛市高校学生资助资金分布
// 基于准备好的dom，初始化echarts实例
var rightContainer2 = echarts.init(document.getElementById('rightContainer2'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    color: ['#ddef01', '#0067ff', '#51ffae', '#00c1ff'],
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        left: 'center',
        top: 40,
        //x2: 80,
        bottom: 20,
        width: '70%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'inside'
            },
            emphasis: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    color:'#06226b'
    
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#06226b',
                borderWidth: 1
            }
        },
        data: [{
            value: 64.75,
            name: '财政资金',

        }, {
            value: 26.26,
            name: '高校资金'
        }, {
            value: 14.32,
            name: '国家助学贷款'
        }, {
            value: 100,
            name: '社会资金'
        }]
    }]
};
// 使用刚指定的配置项和数据显示图表。
rightContainer2.setOption(option);

// 2015 - 2017年青岛市普通高中资助资金数
// 基于准备好的dom，初始化echarts实例
var rightContainer3 = echarts.init(document.getElementById('rightContainer3'));
var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [

    {
        offset: 0,
        color: '#26c0d0'
    },

    {
        offset: 0.2,
        color: '#0fdeed'
    },

    {
        offset: 0.4,
        color: '#24b4d4'
    },

    {
        offset: 0.6,
        color: '#0646d4'
    },

    {
        offset: 0.8,
        color: '#5a36ee'
    },

    {
        offset: 1,
        color: '#3039e1'
    }
]);

var option = {
    series: [
        {
            name: '2017年',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '65%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 12,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                offsetCenter: [0, 18],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 16
                }
            },
            detail: {
                offsetCenter: [0, -20],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#e2f000',
                    fontSize:14
                },
                formatter: function (value) {
                    return value;
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",
                }
            },
            data: [{
                value: 24332,
                name: '2017年'
            }]
        },
        {
            name: '',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '55%',
            axisLine: {            // 坐标轴线
                show: false,
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 0,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                show: true,
                length: 10,
                lineStyle: {
                    width: 3,
                    color: 'rgb(53,93,100)'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            }
        },
        {
            name: '2015年',
            type: 'gauge',
            center: ['20%', '55%'], // 默认全局居中
            endAngle: 25,
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 6,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                offsetCenter: [0, 18],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 14
                }
            },
            detail: {
                offsetCenter: [0, -20],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#06f675',
                    fontSize: 14
                },
                formatter: function (value) {
                    return value;
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",
                }
            },
            data: [{
                value: 13188,
                name: '2015年'
            }]
        },
        {
            name: '',
            type: 'gauge',
            center: ['20%', '55%'], // 默认全局居中
            endAngle: 25,
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 6,
            radius: '35%',
            axisLine: {            // 坐标轴线
                show: false,
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 0,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                show: true,
                length: 10,
                lineStyle: {
                    width: 3,
                    color: 'rgb(53,93,100)'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            }
        },
        {
            name: '2016年',
            type: 'gauge',
            center: ['80%', '55%'], // 默认全局居中
            startAngle: 160,
            endAngle: -45,
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 6,
            radius: '45%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                offsetCenter: [0, 18],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 14
                }
            },
            detail: {
                offsetCenter: [0, -20],
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#ff8808',
                    fontSize: 14
                },
                formatter: function (value) {
                    return value;
                },
            },
            itemStyle: {
                normal: {
                    color: "#00CAFC",
                }
            },
            data: [{
                value: 188,
                name: '2016年'
            }]
        },
        {
            name: '',
            type: 'gauge',
            center: ['80%', '55%'], // 默认全局居中
            startAngle: 160,
            endAngle: -45,
            z: 2,
            min: 0,
            max: 100,
            splitNumber: 6,
            radius: '35%',
            axisLine: {            // 坐标轴线
                show: false,
                lineStyle: {       // 属性lineStyle控制线条样式
                    width:0,
                    color: [
                        [1, axislineColor]
                    ],
                }
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            axisTick: {
                show: true,
                length: 10,
                lineStyle: {
                    width: 3,
                    color: 'rgb(53,93,100)'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
rightContainer3.setOption(option);