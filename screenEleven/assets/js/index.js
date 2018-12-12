$(function(){
    //每天用水量滚动条
	$(".waterused-list-bd").slimscroll({
        height: 175,
        size: "5px",
        color: "#02cbfb",
        distance: "2px",
        wheelStep: "12px",
        railVisible: true,
        railColor: "#041e26",
        railOpacity: 1,
        allowPageScroll: false				
    });
    //初始化图表
    renderWaterUsedWeek();//每周用水量统计
    renderWaterUsedMouth();//每月用水量统计
    renderLightUsedWeek();//每周用电量统计
    renderLightUsedMouth();//每月用电量统计
    /*
    **屏幕改变时重新加载图表
    */
    window.onresize = function () {
        renderWaterUsedWeek();
        renderWaterUsedMouth();
        renderLightUsedWeek();
        renderLightUsedMouth();
    }
    $(".middle-select>div").click(function(){
        $(".modal-middle").fadeIn();
        renderModalChart();
    })
    $(".modal-title span").click(function(){
        $(".modal-middle").fadeOut();
    })
})
//每周用水量统计
function renderWaterUsedWeek(){
    var WaterUsedWeek=echarts.init(document.getElementById("waterused-week-lineCharts"));
    option={        
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            top: '12%',
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['5号','6号','7号','8号','9号','10号',"11号"],
                axisLabel:{
                    textStyle:{
                        color:'#fff',
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: 'transparent',
                        type:"solid"
                    }
                },
                axisLabel:{                    
                    textStyle:{
                        color:'#fff',
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#507270'],
                    }
                }
            }
        ],
        series : [
            {
                name:'',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {
                    color:new echarts.graphic.LinearGradient(
                            0,0,0,1,[{
                                offset: 0, color: 'rgba(0,255,255,.6)' // 0% 处的颜色
                            },{
                                offset:.3, color:'rgba(6,119,246,.4)'
                            },{
                                offset:.6, color:'rgba(6,119,246,.2)'
                            },{
                                offset: 1, color:'rgba(6,119,246,.0)' // 100% 处的颜色
                            }]
                    )
                },
                },
                lineStyle: {
                    normal: {
                        color: '#02a1ed'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#02d4f6',
                        borderWidth:4,
                    },
                },
                data:[110, 322, 191, 384, 280,26,11]
            }
        ]
    };
    WaterUsedWeek.setOption(option);
}
//每月用水量统计
function renderWaterUsedMouth(){

    var XData=["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    var yData=[];
    XData.map(function(){
        yData.push((Math.random()*1000+100).toFixed(0))
    })
    var dataMin=parseInt(Math.min.apply(null, yData)/2);
    var WaterUsedMouth=echarts.init(document.getElementById("waterused-mouth-barCharts"));
    option = {
        xAxis: {
            axisTick: {
                show: false
            },
            data: XData,
            axisLabel: {
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 2; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                },
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            top: '10%',
            left: '0%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#507270'
                }
            },
            splitArea: {
                show: false
            },
            min: dataMin,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
          trigger: "item",
          textStyl: {
            fontSize: 12
          },
          formatter: "{b}<br>用水量:{c0}(立方米)"
        },
        series: {
            type:"bar",
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
                            color: '#1bc6b7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1c88c6' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: 15,
                }
            },
            barWidth: 7,
            data: yData
        }
    };
    WaterUsedMouth.setOption(option);
}
//每周用电量统计
function renderLightUsedWeek(){
    var lightUsedWeek=echarts.init(document.getElementById("lightused-week-lineCharts"));
    option={        
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            top: '12%',
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['5号','6号','7号','8号','9号','10号',"11号"],

                axisLabel:{
                    textStyle:{
                        color:'#fff',
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: 'transparent',
                        type:"solid"
                    }
                },
                axisLabel:{                    
                    textStyle:{
                        color:'#fff',
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#507270'],
                    }
                }
            }
        ],
        series : [
            {
                name:'',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {
                    color:new echarts.graphic.LinearGradient(
                            0,0,0,1,[{
                                offset: 0, color: 'rgba(183,113,59,.9)' // 0% 处的颜色
                            },{
                                offset: 1, color:'rgba(27,27,27,1)' // 100% 处的颜色
                            }]
                    )
                },
                },
                lineStyle: {
                    normal: {
                        color: '#d57e41'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#d57e41',
                        borderWidth:4,
                    },
                },
                data:[110, 322, 191, 384, 280,26,11]
            }
        ]
    };
    lightUsedWeek.setOption(option);
}
//每月用电量统计
function renderLightUsedMouth(){

    var XData=["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    var yData=[];
    XData.map(function(){
        yData.push((Math.random()*1000+100).toFixed(0))
    })
    var dataMin=parseInt(Math.min.apply(null, yData)/2);
    var lightUsedMouth=echarts.init(document.getElementById("lightused-mouth-barCharts"));
    option = {
        xAxis: {
            axisTick: {
                show: false
            },
            data: XData,
            axisLabel: {
                formatter: function(value) {
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 2; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                },
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            top: '10%',
            left: '0%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#507270'
                }
            },
            splitArea: {
                show: false
            },
            min: dataMin,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        tooltip: {
          trigger: "item",
          textStyl: {
            fontSize: 12
          },
          formatter: "{b}<br>用水量:{c0}(立方米)"
        },
        series: {
            type:"bar",
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
                            color: '#1bc6b7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1c88c6' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: 15,
                }
            },
            barWidth: 7,
            data: yData
        }
    };
    lightUsedMouth.setOption(option);
}
function renderModalChart(){
    var ModalChart=echarts.init(document.getElementById("list-con-charts"));
    option = {
        textStyle: {
          fontSize: 12,
          height:80,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            backgroundColor: 'rgba(255,255,255,0.8)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: '#fff',
            },
        },
        grid: {
            top: '100',
            left: '3%',
            right: '4%',
            bottom: '60',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['8.20', '8.21', '8.22', '8.23', '8.24', '8.25', '8.26'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //rotate:-30,
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                }
            },
            axisLine: { //坐标轴轴线相关设置
                lineStyle: {
                    color: '#fff',
                    opacity: 1
                }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
            }
        }],
        yAxis: [{
            name: '交易量（万个）',
            type: 'value',

            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }

        }, {
            name: '交易数（笔）',
            type: 'value',
            position: 'right',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            }
        }],
        series: [{
            'name': '交易量',
            'type': 'bar',
            // barWidth: 15,
            'data': [12318, 15360, 11760, 11447, 7325, 15696, 10590],
            itemStyle: {
                normal: {
                    //barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#229aff'
                            },
                            {
                                offset: 1,
                                color: '#13bfe8'
                            }
                        ]
                    )
                }
            }
        }, {
            name: '交易数',
            yAxisIndex: 1,
            type: 'line',
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 14,
            data: [1061, 992, 1244, 4020, 818, 1032, 2092],
            itemStyle: {
                normal: {
                    color: '#fdb94e'
                },
            },
        }]
        
    };
    ModalChart.setOption(option);
}