$(function () {
    //各年级学生数量以及性别构成
    var ssEduDataBarChartOne = echarts.init(document.getElementById('ssEduDataBarChartOne'))
    var ssEduDataBarChartOneOption={
        title : {
            text: '各年级学生数量以及性别构成',
            x: 'center',
            textStyle:{
                color:'#eee',
                fontSize:13
            }
        },
        grid: {
            top:'23%',
            left: '3%',
            right: '0%',
            bottom: '20%',
            containLabel: true
        },
        color:['#34a6dd','#fa757f'],
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['男生','女生'],
            y:'bottom',
            textStyle:{
                color:'#eee',
                fontSize:10
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['高中一年级','高中二年级','高中三年级'],
                axisLabel: {
                    interval:0,
                    rotate:30,
                    textStyle: {
                        color: '#eee',//坐标值得具体的颜色
                        fontSize:10
                    }
                },
                axisLine:{
                    lineStyle:{color:'#eee'}  //y轴坐标轴颜色
                },

                axisTick:{
                    lineStyle:{color:'#eee' }  //y轴坐标刻度颜色
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#eee',//坐标值得具体的颜色
                    }
                },
                axisLine:{
                    lineStyle:{color:'#eee'}  //y轴坐标轴颜色
                },

                axisTick:{
                    lineStyle:{color:'#eee' }  //y轴坐标刻度颜色
                },
            }
        ],
        series : [
            {
                name:'男生',
                type:'bar',
                data:[272,258,273],
            },
            {
                name:'女生',
                type:'bar',
                data:[373,373,353],
            }
        ]
    }
    ssEduDataBarChartOne.setOption(ssEduDataBarChartOneOption,true)
    window.onresize = ssEduDataBarChartOne.resize;
    //生源地户籍地图
    var ssEduDataMapChart = echarts.init(document.getElementById('ssEduDataMapChart'));
    var geoCoordMap = {
        '市南': [120.384787,36.071352],
        '市北': [120.379109,36.104368],
        '崂山': [120.635953,36.1784],
        '李沧': [120.436153,36.152425],
        '城阳': [120.401379,36.31335],
        '青西新区': [120.198227,35.965917],
        '平度': [119.99211,36.785467],
        '胶州': [120.032058,36.271744],
        '莱西': [120.526279,36.895804],
        '即墨':[120.455421,36.395202]
    }
    // 市南
    var SNData = [
        [{name: '城阳'}, {name: "市南",value: 424}],
        [{name: '城阳'}, {name: "外市",value: 412}],
        [{name: '城阳'}, {name: "市北",value: 451}],
        [{name: '城阳'}, {name: "崂山",value: 91}],
        [{name: '城阳'}, {name: "李沧",value: 201}],
        [{name: '城阳'}, {name: "城阳",value: 238}],
        [{name: '城阳'}, {name: "青西",value: 12}],
        [{name: '城阳'}, {name: "即墨",value: 27}],
        [{name: '城阳'}, {name: "胶州",value: 12}],
        [{name: '城阳'}, {name: "莱西",value: 9}],
        [{name: '城阳'}, {name: "平度",value: 22}],
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
                res.push({
                    fromName : dataItem[0].name,
                    toName : dataItem[1].name,
                    coords : [ fromCoord, toCoord ],
                    value : dataItem[1].value
                })
            }
        }
        return res;
    }

    var color = [ '#a6c84c', '#ffa022', '#46bee9', '#FFB6C1', '#ffa022', '#FFC0CB', '#DC143C', '#FFF0F5', '#DB7093',
        '#DDA0DD' ];  // 自定义图中要用到的颜色
    var series = [];                        // 用来存储地图数据

    /*
        图中一共用到三种效果，分别为航线特效图、飞机航线图以及城市图标涟漪图。
        要用到setOption中的series属性，并且对每个城市都要进行三次设置。
    */
    [['城阳', SNData]].forEach(function(item, i) {
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
                    color: color[1]
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
                position: 'center',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: color[3]
            }
        },
        data: [{
            // 这里面的数据，由于一开始就知道终点位置是什么，所以直接写死，如果通过ajax来获取数据的话，还要进行相应的处理
            name: "城阳",
            value: [120.451972,36.335122],
            label: {
                normal: {
                    position: 'top'
                }
            }
        }]
    });

    var ssEduDataMapChartOption ={
        geo: {
            map : 'qingdao',
            label : {
                emphasis : {
                    show : true
                }
            },
            zoom:1.6,
            left : '30%',
            top:'20%',
            roam : true,
            itemStyle : {
                normal : {
                    areaColor : '#1a4ba4',
                    borderColor : '#00185c',
                    borderWidth : "1"
                },
                emphasis : {
                    areaColor : '#032989'
                }
            }
        },
        series: series,   // 将之前处理的数据放到这里
        textStyle: {
            fontSize: 12
        }
    };
    ssEduDataMapChart.setOption(ssEduDataMapChartOption,true);
    window.onresize = ssEduDataMapChart.resize;
    //学生体质BMI情况
    var ssEduDataPieChartTwo = echarts.init(document.getElementById('ssEduDataPieChartTwo'),'macarons');
    var ssEduDataPieChartTwoOption ={
        tooltip : {
            trigger: 'item',
            formatter: "{b}"
        },
        series : [
            {
                type: 'pie',
                radius : '70%',
                center: ['50%', '50%'],
                data:[
                    {value:1226, name:'正常 1226人 (64.43%)'},
                    {value:137, name:'低体重 137人 (7.20%)'},
                    {value:197, name:'超重 197人 (10.35%)'},
                    {value:178, name:'免测 178人 (9.35%)'},
                    {value:165, name:'肥胖 165人 (8.67%)'},

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
    }
    ssEduDataPieChartTwo.setOption(ssEduDataPieChartTwoOption,true);
    window.resize = ssEduDataPieChartTwo.resize;

    //教师年龄分布
    var ssEduDataBarChartTwo = echarts.init(document.getElementById('ssEduDataBarChartTwo'),'macarons')
    var ssEduDataBarChartTwoOption={
        title:{
            text:'预计明年退休教师数:7人,其中男1人,女6人',
            textStyle:{
                color:'#eee',
                fontSize:12
            }
        },
        color:['#34a6dd','#fa757f'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' ,       // 默认为直线，可选为：'line' | 'shadow'
            },

        },

        /*       legend: {
                         orient:'vertical',
                      top: '0%',
                      left: 'right',
                      textStyle:{
                          color:'#eee',
                          fontSize:10

                      },
                    data:['男教师', '女教师']
                },
        */        grid: {
            top:'12%',
            left: '-1%',
            right: '3%',
            bottom: '4%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value',
                axisLabel:{
                    textStyle: {
                        color: '#eee',//坐标值得具体的颜色
                        fontSize:10
                    },
                    formatter:function(v){return Math.abs(v)}
                },
                axisLine:{
                    lineStyle:{color:'#eee'}  //y轴坐标轴颜色
                },

                axisTick:{
                    lineStyle:{color:'#eee' }  //y轴坐标刻度颜色
                },
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                axisLabel:{
                    interval:0,
                    rotate:20,
                    textStyle: {
                        color: '#eee',//坐标值得具体的颜色
                        fontSize:10
                    },
                },
                axisLine:{
                    lineStyle:{color:'#eee'}  //y轴坐标轴颜色
                },
                axisTick:{
                    lineStyle:{color:'#eee' }  //y轴坐标刻度颜色
                },
                data : ['0~24岁','25~29岁','30~34岁','35~39岁','40~44岁','45~49岁',
                    '50~54岁','55~59岁','60~64岁','>=65岁'],

            }
        ],

        series : [
            {
                name:'男教师',
                type:'bar',
                stack: '人数',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data:[0, 3, 3, 2, 12,7,7,5,3,0]
            },
            {
                name:'女教师',
                type:'bar',
                stack: '人数',
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        formatter:function(v){return Math.abs(v.data)}
                    },
                },
                data:[-0, -1,-10, -31, -18, -20, -26, -11,-0,-0,]
            }
        ]
    };
    ssEduDataBarChartTwo.setOption(ssEduDataBarChartTwoOption,true)
    window.onresize = ssEduDataBarChartTwo.resize;
//教师学历分布占比
    var ssEduDataPieChartOne = echarts.init(document.getElementById('ssEduDataPieChartOne'),'macarons');
    var ssEduDataPieChartOneOption = {
        series: [
            {
                name:'教师学历占比',
                type:'pie',
                label:{
                    normal:{
                        show:false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight:'bold'
                        }
                    }
                },
                labelLine:{
                    normal:{
                        show:false
                    }

                },
                radius: ['60%', '90%'],
                data:[
                    {value:0,name:'博士 0%'},
                    {value:58,name:'硕士 36.5%'},
                    {value:95,name:'本科 59.7%'},
                    {value:4,name:'专科 2.5%'},
                    {value:2,name:'高中 1.3%'},
                    {value:0,name:'高中及以下'},
                ]
            }
        ]
    };
    ssEduDataPieChartOne.setOption(ssEduDataPieChartOneOption);
    window.onresize = ssEduDataPieChartOne.resize;

    //生师比
    var ssEduDataPieChartThree = echarts.init(document.getElementById('ssEduDataPieChartThree'),'macarons');
    var ssEduDataPieChartThreeOption ={
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'总人数',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '45%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:159, name:'教师数', selected:true},
                    {value:1903, name:'学生数'},

                ]
            },
            {
                name:'各年级段人数',
                type:'pie',
                radius: ['60%', '80%'],
                label: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#194065',
                    borderColor: '#194065',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#eee',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 22
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#777',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                },
                labelLine:{
                    normal:{
                        length:1
                    }
                },
                data:[
                    {value:645, name:'高一'},
                    {value:632, name:'高二'},
                    {value:626, name:'高三'},

                ]
            }
        ]
    }
    ssEduDataPieChartThree.setOption(ssEduDataPieChartThreeOption,true)
    window.resize = ssEduDataPieChartThree.resize;

    //新高考选课师资配置
    var ssEduDataPieChartFour = echarts.init(document.getElementById('ssEduDataPieChartFour'),'macarons');
    var ssEduDataPieChartFourOption ={
        title:{
            text:'学生6门选课比例',
            x:'center',
            textStyle:{
                color:'#eee',
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b}"
        },
        calculable : true,
        series : [
            {
                name:'学生选课比例',
                type:'pie',
                radius : [20, 60],
                center : ['50%', '65%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:0
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {value:184, name:'政治 184人(9.75%)'},
                    {value:277, name:'历史 277人(14.68%)'},
                    {value:391, name:'地理 391人(20.72%)'},
                    {value:290, name:'物理 290人(15.37%)'},
                    {value:339, name:'化学 339人(17.96%)'},
                    {value:406, name:'生物 406人(21.52%)'},
                ]
            },
        ]
    }
    ssEduDataPieChartFour.setOption(ssEduDataPieChartFourOption,true)
    window.resize = ssEduDataPieChartFour.resize;

    var ssEduDataPieChartFive = echarts.init(document.getElementById('ssEduDataPieChartFive'),'macarons');
    var ssEduDataPieChartFiveOption ={
        title:{
            text:'6门课程教师数量比例',
            x:'center',
            textStyle:{
                color:'#eee',
                fontSize:14
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} "
        },
        calculable : true,
        series : [
            {
                name:'相应学科的教师数量比例',
                type:'pie',
                radius : [20, 60],
                center : ['50%', '60%'],
                roseType : 'area',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length:0
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {value:11, name:'政治 11人(14.29%)'},
                    {value:12, name:'历史 12人(15.58%)'},
                    {value:10, name:'地理 10人(12.99%)'},
                    {value:15, name:'物理 15人(19.48%)'},
                    {value:15, name:'化学 15人(19.48%)'},
                    {value:14, name:'生物 14(18.18%)'},

                ]
            }
        ]
    }
    ssEduDataPieChartFive.setOption(ssEduDataPieChartFiveOption,true)
    window.resize = ssEduDataPieChartFive.resize;

    //实时用电量监测

    var ssEduDataLineChartOne = echarts.init(document.getElementById('ssEduDataLineChartOne'),'macarons');
    var ssEduDataLineChartOneOption = {
        title: {
            text: '今日耗电曲线（kwh）',
            show: true,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 12,
                color: '#eee'
            },
            left: 'center',
            top: '3%',
        },
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top:'20%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 0,
                verticalAlign: 'top',
                fontSize: 10,
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        }],
        yAxis: [{
            type: 'value',
            name: '',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 10
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        }],
        series: [{
            name: '',
            type: 'line',
            smooth: false,
            showSymbol: false,
            showAllSymbol: false,
            symbol: 'emptyCircle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    width: 4
                }
            },
            areaStyle: {
                normal: {
                    color: '#141d22',

                }
            },
            itemStyle: {
                normal: {
                    color: '#d8c034',

                }
            },
            data: [10,29,30,4,30,4,20,30,30,4,30,4,20,30,56,32,33]
        }]
    };
    ssEduDataLineChartOne.setOption(ssEduDataLineChartOneOption,true);
    window.resize = ssEduDataLineChartOne.resize;
    //绘制互联网流量图表

    //互联网流量监控
    var ssEduDataLineChartTwo = echarts.init(document.getElementById('ssEduDataLineChartTwo'),'macarons');
    var XIwfData=['2018-12-04 06:15:56',"2018-12-04 06:25:56","2018-12-04 06:30:56","2018-12-04 06:35:56","2018-12-04 06:40:56","2018-12-04 06:45:56","2018-12-04 06:50:56","2018-12-04 06:55:56","2018-12-04 07:00:56","2018-12-04 07:05:56","2018-12-04 07:10:56"]
    var YIwfData=[1.5,2.3,4.5,2.4,6,4.3,4.6,8.9,5.8,8.6,5.6,7.8]
    var ssEduDataLineChartTwoOption={
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top:'18%',
            left: '2%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        dataZoom: [
            { //Y轴固定,让内容滚动
                type: 'slider',
                show: false,
                xAxisIndex: [0],
                start: 1,
                end: 60,//设置X轴刻度之间的间隔(根据数据量来调整)
                zoomLock: true, //锁定区域禁止缩放(鼠标滚动会缩放,所以禁止)
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 60,
                zoomLock: true, //锁定区域禁止缩放
            },

        ],
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 10,
                verticalAlign: 'top',
                fontSize: 10,
            },
            axisTick: {
                inside: true,
                lignWithLabel: true //这两行代码可以让刻度正对刻度名
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisPointer: {
                lineStyle: {
                    width: 0 //隐藏指示线的线条
                },
                show: true,
                snap: true,
                status: 'show'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#eee'
                }
            },
            data:XIwfData,
        }],
        yAxis: [{
            type: 'value',
            name: '',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 10
                }
            },
            axisTick: {
                // show:true,//是否显示Y轴的刻度
                inside: false //改变刻度的朝向
            },
            splitLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        }],
        series: [{
            name: '',
            type: 'line',
            smooth: false,
            showSymbol: false,
            showAllSymbol: false,
            symbol: 'emptyCircle',
            symbolSize: 1,
            lineStyle: {
                normal: {
                    width: 4
                }
            },
            areaStyle: {
                normal: {
                    color: '#141d22',

                }
            },
            itemStyle: {
                normal: {
                    color: '#27d89b',

                }
            },
            data: YIwfData
        }]
    };
    ssEduDataLineChartTwo.setOption(ssEduDataLineChartTwoOption,true);
    window.resize = ssEduDataLineChartTwo.resize;
});








