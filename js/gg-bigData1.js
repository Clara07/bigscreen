/**
 * Created by Clara Guo 2018-10-09
 **/
$(function () {
   //左侧第一个饼状图
    var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    var pieChartOne =echarts.init(document.getElementById('pieChartOne'), 'macarons');
    var pieChartOneOption = {
        color:['#00f0ff','#ef7567','#f5d663'],
        tooltip : {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            top:'top',
            right:'right',
            itemGap:12,
            textStyle:{
                color:'#c7deeb',
                fontSize:'10'
            },
            data:['68%基教处','29%职教处','3%国际教育']
        },
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                center:['30%','50%'],
                radius : [60, 70],
                itemStyle : dataStyle,
                data:[
                    {
                        value:68,
                        name:'68%基教处'
                    },
                    {
                        value:32,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'2',
                type:'pie',
                clockWise:false,
                center:['30%','50%'],
                radius : [40, 50],
                itemStyle : dataStyle,
                data:[
                    {
                        value:69,
                        name:'29%职教处'
                    },
                    {
                        value:71,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'3',
                type:'pie',
                clockWise:false,
                center:['30%','50%'],
                radius : [20, 30],
                itemStyle : dataStyle,
                data:[
                    {
                        value:55,
                        name:'3%国际教育'
                    },
                    {
                        value:97,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };
    pieChartOne.setOption(pieChartOneOption);
   //左侧雷达图
    var radaChart = echarts.init(document.getElementById('radaChart'), 'macarons');
    var radaChartOption ={
        title:{
            text:'部门分布',
            textStyle:{
                color: '#dfebf2',
                fontSize: '14'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        radar: [
            {
                indicator: [
                    {text: '基教处', max: 100},
                    {text: '职教处', max: 100},
                    {text: '教育局', max: 100},
                    {text: '装备中心', max: 100},
                    {text: '国际教育', max: 100},
                    {text: '信息中心', max: 100}
                ],
                center: ['50%','55%'],
                radius: 80
            }
        ],
        series: [
            {
                type: 'radar',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                    {
                        name: '降水量',
                        value: [20,59,90,26.4,70,30],
                    },
                    {
                        name:'蒸发量',
                        value:[32.6,20,60.4,33,25,89]
                    }
                ]
            }
        ]
    };
    radaChart.setOption(radaChartOption);

    //左侧柱状图
    var barChartOne = echarts.init(document.getElementById('barChartOne'),'macarons');
    var barChartOneOption = {
        title:{
            text:'数据采集',
            textStyle:{
                color: '#dfebf2',
                fontSize: '14'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
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
                name:'数据量',
                type:'bar',
                data:[10, 52, 200, 334, 390, 330, 220],
                barWidth: 14,
                itemStyle: {
                    emphasis: {
                        barBorderRadius:7
                    },
                    normal:{
                        barBorderRadius:7,
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0,
                            [
                                {offset: 0, color: '#0fc0c6'},
                                {offset:0.6,color:'#29cdb7'},
                                {offset: 1, color: '#84f985'}
                            ]
                        )
                    }
                }
            }
        ]
    }
    barChartOne.setOption(barChartOneOption);

    //右侧南丁格尔玫瑰图
    var pieChartTwo = echarts.init(document.getElementById('pieChartTwo'),'macarons');
    var pieChartTwoOption = {
        title : {
            text: '信息状态',
            x:'left',
            textStyle:{
                color: '#dfebf2',
                fontSize: '14'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : false,
        },
        calculable : true,
        series : [
            {
                name:'总量',
                type:'pie',
                radius : [60, 90],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'注册'},
                    {value:5, name:'发布'},
                    {value:15, name:'提交'},
                    {value:25, name:'审核'}

                ]
            }
        ]
    };
    pieChartTwo.setOption(pieChartTwoOption);

    //中间折线图
    var lineChartOne = echarts.init(document.getElementById('lineChartOne'),'macarons');
    var lineChartOneOption ={
        tooltip : {
            trigger: 'axis'
        },
        grid:{
            x:40,
            y:45,
            x2:10,
            y2:20,
            borderWidth:1
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'换入',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[10, 12, 21, 54, 260, 830, 710,100,878,300,31,80]
            },
            {
                name:'换出',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[30, 182, 434, 791, 390, 30, 10,90,110,230,250,210]
            },
        ]
    };
    lineChartOne.setOption(lineChartOneOption);

    //中间环状图
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'top',
                    fontSize:'24'
                }
            },
            labelLine : {
                show : false
            }
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                show : true,
                textStyle: {
                    baseline : 'bottom',
                    fontSize:'12'
                }
            }
        },
    }
    var labelBottom = {
        normal : {
            color: '#204663',
            label : {
                show : true,
                position : 'center',
                textStyle:{
                    color:'#d3dee5'
                }
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = [50, 60];
    var pieChartThree = echarts.init(document.getElementById('pieChartThree'));
    var pieChartThreeOption={
        color:['#f5d663','#00f0ff','#ef7567',],
        legend: {
            show:false,
            x : 'center',
            y : 'center',
            data:[
                'GoogleMaps','Facebook','Youtube' ]
        },
        series : [
            {
                type : 'pie',
                center : ['20%', '50%'],
                radius : radius,
                itemStyle : labelFromatter,
                data : [
                    {name:'75%', value:75, itemStyle : labelTop},
                    {name:'成功', value:25,itemStyle :labelBottom }
                ]
            },
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : radius,
                itemStyle : labelFromatter,
                data : [
                    {name:'55%', value:55, itemStyle : labelTop},
                    {name:'失败', value:45,itemStyle : labelBottom}
                ]
            },
            {
                type : 'pie',
                center : ['80%', '50%'],
                radius : radius,
                itemStyle : labelFromatter,
                data : [
                    {name:'37%', value:37, itemStyle : labelTop},
                    {name:'交换中', value:63,itemStyle : labelBottom}
                ]
            }

        ]
    }
    pieChartThree.setOption(pieChartThreeOption);

    //echarts根据窗口变化自适应大小监听事件
    window.onresize = pieChartOne.resize;//左侧环形图
    window.onresize = radaChart.resize;//左侧雷达图
    window.onresize = barChartOne.resize;//左侧统计图
    window.onresize = pieChartTwo.resize;//右侧玫瑰图
    window.onresize = lineChartOne.resize;//中间折线图
    window.onresize = pieChartThree.resize//中间环形图
});
