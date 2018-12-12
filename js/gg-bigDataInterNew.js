$(function () {
    //普通中小学外籍学生国别地区分布
    var interBarChartOne = echarts.init(document.getElementById('interBarChartOne'),'macarons');
    var interBarChartOneOption ={
        color: ['#3398DB'],
        title:{
            text:'学生国别及地图分布',
            textStyle:{
                color: '#dfebf2',
                fontSize: '14',
                verticalAlign:'top'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '28%',
            left: '3%',
            right: '6%',
            bottom: '0%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLabel: {
                    interval:0,
                    rotate:0
                },
                data : ['日本', '德国', '韩国', '美国', '英国', '其他'],
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
                data:[10, 52, 200, 334, 390, 330],
                barWidth: 16,
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
    interBarChartOne.setOption(interBarChartOneOption);
    //普通中小学外籍学生学段分布
    var interPieChartOne = echarts.init(document.getElementById('interPieChartOne'),'macarons');
    var interPieChartOneOption ={
        title : {
            text: '学生学段分布',
            subtext: '(合计12000人)',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '学段',
                type: 'pie',
                radius : '55%',
                center: ['50%', '70%'],
                data:[
                    {value:102, name:'幼儿园'},
                    {value:335, name:'小学'},
                    {value:310, name:'初中'},
                    {value:234, name:'中职'},
                    {value:135, name:'高中'},
                    {value:1548, name:'大学'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    interPieChartOne.setOption(interPieChartOneOption);
    //普通中小学外籍学生区市分布
    var interBarChartTwo = echarts.init(document.getElementById('interBarChartTwo'),'macarons');
    var interBarChartTwoOption ={
        title : {
            text: '普通中小学外籍学生入学区市分布',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:'20%',
            left: '1%',
            right:'10%',
            bottom: '0%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                interval:0,
                rotate:0
            },
            data: ['市直属','市南区','市北区','崂山区','李沧区','城阳区','西海岸新区','即墨区','胶州市','平度市','莱西市']
        },
        series: [
            {
                name: '幼儿园',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320, 334, 390, 330, 320]
            },
            {
                name: '小学',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210,134, 90, 230, 210]
            },
            {
                name: '初中',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234]
            },
            {
                name: '中职',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410, 201, 154, 190, 330]
            },
            {
                name: '高中',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320,901, 934, 1290, 1330]
            },
            {
                name:'大学',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234]
            }
        ]
    };
    interBarChartTwo.setOption(interBarChartTwoOption);
    //外籍学生教师世界分布地图
    var interMapChart = echarts.init(document.getElementById('interMapChart'),'macarons');
    /*
    图中相关城市经纬度,根据你的需求添加数据
    关于国家的经纬度，可以用首都的经纬度或者其他城市的经纬度
*/
    var geoCoordMap = {
        '南宁': [108.479, 23.1152],
        '广州': [113.5107, 23.2196],
        '重庆': [107.7539, 30.1904],
        '芬兰': [24.909912, 60.169095],
        '美国': [-100.696295, 33.679979],
        '日本': [139.710164, 35.706962],
        '韩国': [126.979208, 37.53875],
        '瑞士': [7.445147, 46.956241],
        '东南亚': [117.53244, 5.300343],
        '澳大利亚': [135.193845, -25.304039],
        '德国': [13.402393, 52.518569],
        '英国': [-0.126608, 51.208425],
        '加拿大': [-102.646409, 59.994255]
    }
    /*
    记录下起点城市和终点城市的名称，以及权重
    数组第一位为终点城市，数组第二位为起点城市，以及该城市的权重，就是图上圆圈的大小
 */

// 重庆
    var CQData = [
        [{name: '重庆'}, {name: "芬兰",value: 30}],
        [{name: '重庆'}, {name: "德国",value: 90}],
        [{name: '重庆'}, {name: "英国",value: 30}],
        [{name: '重庆'}, {name: "韩国",value: 30}]
    ];

// 广州
    var GZData = [
        [{name: '广州'}, {name: "日本",value: 30}],
        [{name: '广州'}, {name: "东南亚",value: 30}]
    ];

// 南宁
    var NNData = [
        [{name: '南宁'}, {name: "加拿大",value: 30}],
        [{name: '南宁'}, {name: "美国",value: 100}],
        [{name: '南宁'}, {name: "澳大利亚",value: 95}],
        [{name: '南宁'}, {name: "瑞士",value: 30}]
    ];

// 小飞机的图标，可以用其他图形替换
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 获取地图中起点和终点的坐标，以数组形式保存下来
    var convertData = function(data) {
        var res = [];
        for(var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if(fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord // 起点坐标
                }, {
                    coord: toCoord // 终点坐标
                }])
            }
        }
        return res;
    }

    var color  = ['#9ae5fc', '#dcbf71'];    // 自定义图中要用到的颜色
    var series = [];                        // 用来存储地图数据

    /*
        图中一共用到三种效果，分别为航线特效图、飞机航线图以及城市图标涟漪图。
        要用到setOption中的series属性，并且对每个城市都要进行三次设置。
    */
    [['重庆', CQData],['广州', GZData],['南宁', NNData]].forEach(function(item, i) {
        series.push({
            // 白色航线特效图
            type: 'lines',
            zlevel: 1,                    // 用于分层，z-index的效果
            effect: {
                show: true,               // 动效是否显示
                period: 6,                // 特效动画时间
                trailLength: 0.7,         // 特效尾迹的长度
                color: '#fff',            // 特效颜色
                symbolSize: 3             // 特效大小
            },
            lineStyle: {
                normal: {                 // 正常情况下的线条样式
                    color: color[0],
                    width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                    curveness: -0.2       // 线条曲度
                }
            },
            data: convertData(item[1])    // 特效的起始、终点位置
        }, {  // 小飞机航线效果
            type: 'lines',
            zlevel: 2,
            //symbol: ['none', 'arrow'],   // 用于设置箭头
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,         // 特效形状，可以用其他svg pathdata路径代替
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 1,
                    opacity: 0.6,
                    curveness: -0.2
                }
            },
            data: convertData(item[1])     // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
        }, { // 散点效果
            type: 'effectScatter',
            coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'        // 波纹绘制效果
            },
            label: {
                normal: {                  // 默认的文本标签显示样式
                    show: true,
                    position: 'left',      // 标签显示的位置
                    formatter: '{b}'       // 标签内容格式器
                }
            },
            itemStyle: {
                normal: {
                    color: color[0]
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name],  // 起点的位置
                    symbolSize: dataItem[1].value / 8,  // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
                };
            })
        });
    });

// 显示终点位置,类似于上面最后一个效果，放在外面写，是为了防止被循环执行多次
    series.push({
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'left',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[1]
            }
        },
        data: [{
            // 这里面的数据，由于一开始就知道终点位置是什么，所以直接写死，如果通过ajax来获取数据的话，还要进行相应的处理
            name: "重庆",
            value: [107.7539, 30.1904, 30],
            label: {
                normal: {
                    position: 'top'
                }
            }
        }, {
            name: '广州',
            value: [113.5107, 23.2196, 30],
            label: {
                normal: {
                    position: 'right'
                }
            }
        }, {
            name: '南宁',
            value: [108.479, 23.1152, 30]
        }]
    });

    var interMapChartOption ={
        title: {
            text: '外籍学生2000人 外籍教师100人 港澳台学生70人',
            textStyle: {
                color: '#fff',
                fontSize: '16'
            },
        },
        geo: {
            map: 'world',       // 与引用进来的地图js名字一致
            roam: false,        // 禁止缩放平移
            itemStyle: {        // 每个区域的样式
                normal: {
                    areaColor: '#b0a077'
                },
                emphasis: {
                    areaColor: '#b0a077'
                }
            },
            regions: [{        // 选中的区域
                name: 'China',
                selected: true,
                itemStyle: {   // 高亮时候的样式
                    emphasis: {
                        areaColor: '#ef9033'
                    }
                },
                label: {    // 高亮的时候不显示标签
                    emphasis: {
                        show: false
                    }
                }
            }]
        },
        series: series,   // 将之前处理的数据放到这里
        textStyle: {
            fontSize: 12
        }
    };
    interMapChart.setOption(interMapChartOption);
    //外籍教师学生国别情况
    var interBarChartThree = echarts.init(document.getElementById('interBarChartThree'),'macarons');
    var interBarChartThreeOption ={
        title : {
            text: '外籍教师,学生国别情况',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            top: '28%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        legend: {
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            },
            data:['外籍教师','外籍学生']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                axisLabel: {
                    interval:0,
                    rotate:0
                },
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
                barWidth: 16,
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
                barWidth: 16,
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
    interBarChartThree.setOption(interBarChartThreeOption);
    //国际学校外籍教师,学生情况
    var interBarChartFour = echarts.init(document.getElementById('interBarChartFour'),'macarons');
    var interBarChartFourOption ={
        color:['#ffde96','#4997d3'],
        title : {
            text: '国际学校外籍教师,学生国别情况',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            top: '28%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },
        legend: {
            top:'10%',
            textStyle:{
                color: '#dfebf2',
              fontSize: '12',
            },
            data:['外籍教师','外籍学生']
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                axisLabel: {
                    interval:0,
                    rotate:0
                },
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
                barWidth: 16,
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
                barWidth: 16,
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
    interBarChartFour.setOption(interBarChartFourOption);
    //国际学校外籍教师国别分布
    var interPieChartTwo = echarts.init(document.getElementById('interPieChartTwo'),'macarons');
    var interPieChartTwoOption ={
        title : {
            text: '国际学校外籍教师国别分布',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '国家',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:102, name:'日本'},
                    {value:335, name:'德国'},
                    {value:310, name:'美国'},
                    {value:234, name:'英国'},
                    {value:135, name:'法国'},
                    {value:1548, name:'其他'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    interPieChartTwo.setOption(interPieChartTwoOption);
    //国际学校学生国别分布
    var interPieChartThree = echarts.init(document.getElementById('interPieChartThree'),'macarons');
    var interPieChartThreeOption ={
        title : {
            text: '国际学校学生国别分布',
            textStyle:{
                color: '#dfebf2',
              fontSize: '14',
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '国家',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:102, name:'日本'},
                    {value:335, name:'德国'},
                    {value:310, name:'美国'},
                    {value:234, name:'英国'},
                    {value:135, name:'法国'},
                    {value:1548, name:'其他'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    interPieChartThree.setOption(interPieChartThreeOption);

    //echarts根据窗口变化自适应大小监听事件
    window.addEventListener('resize',function(){
        window.onresize = interBarChartOne.resize; //普通中小学外籍学生国别地区分布
        window.onresize = interPieChartOne.resize; //普通中小学外籍学生学段分布
        window.onresize = interBarChartTwo.resize; //普通中小学外籍学生区市分布
        window.onresize = interMapChart.resize; //外籍学生教师世界分布地图
        window.onresize = interBarChartThree.resize; //外籍教师学生国别情况
        window.onresize = interBarChartFour.resize; //国际学校外籍教师,学生情况
        window.onresize = interPieChartTwo.resize; //国际学校外籍教师国别分布
        window.onresize = interPieChartThree.resize; //国际学校学生国别分布
    });


});