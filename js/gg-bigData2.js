/**
 * Created by Clara Guo 2018-10-12
 **/
$(function(){
    //漏斗图
    var btFunnelChart = echarts.init(document.getElementById('btFunnelChart'),'macarons');
    var btFunnelChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            textStyle:{
                color: '#eee',
                fontSize:14
            },
            data: ['展现','点击','访问','咨询','订单']
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        calculable: true,
        series: [
            {
                name:'漏斗图',
                type:'funnel',
                sort: 'none',
                left: '30%',
                top: 60,
                bottom: 60,
                width: '50%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',

                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length:70,
                        lineStyle: {
                            width: 1,
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#eee',
                        borderWidth: 1
                    }
                },
                data: [
                    {value: 50, name: '访问'},
                    {value: 30, name: '咨询'},
                    {value: 12, name: '订单'},
                    {value: 70, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            }
        ]
    };
    btFunnelChart.setOption(btFunnelChartOption);
    //仪表盘
    var btMeterChart = echarts.init(document.getElementById('btMeterChart'));
    var btMeterChartOption={
        title:{
            text:'仪表盘',
            x:'left',
            textStyle:{
                color:'#eee',
                fontSize:14,
                fontWeight: 'normal'
            }
        },
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        series : [
            {
                name:'速度',
                type:'gauge',
                min:0,
                max:220,
                splitNumber:11,
                radius: '100%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                        width: 1,
                        shadowColor : '#eee', //默认透明
                        shadowBlur: 8
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#eee',
                        shadowColor : '#eee', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#eee', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length :8,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:1,
                        color: '#eee',
                        shadowColor : '#eee', //默认透明
                        shadowBlur: 8
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#eee', //默认透明
                    shadowBlur: 5
                },

                detail : {
                    shadowColor : '#eee', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, '30%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#37dbef',
                        fontSize: 20
                    }
                },
                data:[{value: 160}]
            }

        ]
    };
    setInterval(function () {
        btMeterChartOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        btMeterChart.setOption(btMeterChartOption, true);
    },2000);
    //折线柱状图
    var btLineBarChart = echarts.init(document.getElementById('btLineBarChart'),'macarons');
    var btLineBarChartOption = {
        title:{
            text:'指标分析',
            x:'left',
            textStyle:{
                color:'#eee',
                fontSize:14,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        legend: {
            textStyle:{
                color: '#eee',
                fontSize:14
            },
            data:['进店浏览数','总单数','转换率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name:'进店浏览数',
                type:'bar',
                barWidth: 16,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                    }
                },
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'总单数',
                type:'bar',
                barWidth: 16,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                    }
                },
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'转换率',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    btLineBarChart.setOption(btLineBarChartOption);
    //中间折线图
    var btLineChartOne = echarts.init(document.getElementById('btLineChartOne'),'macarons');
    var btLineChartOneOption ={
        title: {
            top:0,
            left: 'left',
            text: '示例',
            textStyle:{
                color: '#eee',
                fontSize:14
            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '25%',
            left: '3%',
            right: '4%',
            bottom: '0%',
            containLabel: true
        },
        containLabel: true,
        dataZoom: [{
            type: 'inside',
            throttle: 50
        }],
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        }]
    };
    btLineChartOne.setOption(btLineChartOneOption);
    //底部柱形图1
    var btBarChartOne = echarts.init(document.getElementById('btBarChartOne'),'macarons');
    var btBarChartOneOption ={
        color: ['#37dcef'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:'10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220],
                barWidth: 14,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                    }
                }
            }
        ]
    };
    btBarChartOne.setOption(btBarChartOneOption);
    //底部环状图1
    var fontSizeTwenty={
        normal : {
            label : {
                textStyle: {
                    fontSize:18
                }
            }
        },
    }
    var btPieChartOne = echarts.init(document.getElementById('btPieChartOne'),'macarons');
    var btPieChartOneOption ={
        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                hoverAnimation:false,
                radius : [50, 65],
                itemStyle : fontSizeTwenty,
                data : [
                    {
                        name:'',
                        value:6,
                        itemStyle :  {
                            normal : {
                                color: '#16384f',
                                label : {
                                    show : false,
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    },
                    {
                        value:94,
                        itemStyle : {
                            normal : {
                                color: '#f9fe35',
                                label : {
                                    show : true,
                                    position : 'center',
                                    itemStyle:{
                                        baseline:'center',
                                        fontSize:18
                                    },
                                    formatter : function (params){
                                        return params.value + '%'
                                    },
                                },
                                labelLine : {
                                    show : false
                                }
                            }
                        }
                    }
                ]
            },
        ]
    };
    btPieChartOne.setOption(btPieChartOneOption);
    //底部环状图2
    var btPieChartTwo = echarts.init(document.getElementById('btPieChartTwo'),'macarons');
    var btPieChartTwoOption ={
        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                hoverAnimation:false,
                radius : [50, 65],
                itemStyle : fontSizeTwenty,
                data : [
                    {
                        name:'',
                        value:46,
                        itemStyle :  {
                            normal : {
                                color: '#16384f',
                                label : {
                                    show : false,
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    },
                    {
                        value:54,
                        itemStyle : {
                            normal : {
                                color: '#8483fa',
                                label : {
                                    show : true,
                                    position : 'center',
                                    itemStyle:{
                                        baseline:'center',
                                    },
                                    formatter : function (params){
                                        return params.value + '%'
                                    },
                                },
                                labelLine : {
                                    show : false
                                }
                            }
                        }
                    }
                ]
            },
        ]
    };
    btPieChartTwo.setOption(btPieChartTwoOption);
    // 底部环状图3
    var btPieChartThree = echarts.init(document.getElementById('btPieChartThree'),'macarons');
    var btPieChartThreeOption ={
        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                hoverAnimation:false,
                radius : [50, 65],
                itemStyle : fontSizeTwenty,
                data : [
                    {
                        name:'',
                        value:66,
                        itemStyle :  {
                            normal : {
                                color: '#16384f',
                                label : {
                                    show : false,
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    },
                    {
                        value:34,
                        itemStyle : {
                            normal : {
                                color: '#37dbef',
                                label : {
                                    show : true,
                                    position : 'center',
                                    itemStyle:{
                                        baseline:'center',
                                        fontSize:18
                                    },
                                    formatter : function (params){
                                        return params.value + '%'
                                    },
                                },
                                labelLine : {
                                    show : false
                                }
                            }
                        }
                    }
                ]
            },
        ]
    };
    btPieChartThree.setOption(btPieChartThreeOption);
    //底部柱形图2
    var btBarChartTwo = echarts.init(document.getElementById('btBarChartTwo'),'macarons');
    var btBarChartTwoOption ={
        color:['#37dcef','#f9fe35'],
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['日本','德国','韩国','美国','英国','其他']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'外籍教师',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
                barWidth: 14,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                    }
                }
            },
            {
                name:'外籍学生',
                type:'bar',
                data:[ 9.0, 26.4, 28.7, 70.7, 48.7, 18.8],
                barWidth: 14,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                    }
                }

            }
        ]
    };
    btBarChartTwo.setOption(btBarChartTwoOption);

    //echarts根据窗口变化自适应大小监听事件
    window.onresize = btFunnelChart.resize;//漏斗图
    window.onresize = btMeterChart.resize;//仪表盘
    window.onresize = btLineBarChart.resize;//柱状折线图
    window.onresize = btLineChartOne.resize//中间折线图
    window.onresize = btBarChartOne.resize;//底部柱形图1
    window.onresize = btPieChartOne.resize;//底部环形图1
    window.onresize = btPieChartTwo.resize;//底部环形图2
    window.onresize = btPieChartThree.resize;//底部环形图3
    window.onresize = btBarChartTwo.resize;//底部柱形图2


});