$(function () {
    // 获取主体内容的高度
    var conHeight=$(".main-content").outerHeight(true);
    $("body").height(conHeight);

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
            formatter: "{b} : {c}人 ({d}%)"
        },
        series : [
            {
                type: 'pie',
                radius : '70%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'正常'},
                    {value:310, name:'过轻'},
                    {value:234, name:'免测'},
                    {value:135, name:'肥胖'},
                    {value:100, name:'非常肥胖'},
                    {value:210, name:'超重'}
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
            text:'预计明年退休教师数:8人,其中男6人,女2人',
            textStyle:{
                color:'#eee',
                fontSize:12

            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:'12%',
            left: '-1%',
            right: '3%',
            bottom: '3%',
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
                    rotate:45,
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
                data : ['<=24岁','25~29岁','30~34岁','35~39岁','40~44岁','45~49岁',
                    '50~54岁','55~59岁','60~64岁','>=65岁'],

            }
        ],

        series : [
            {
                name:'总人数',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[2, 10, 65, 76, 150, 98, 22,34,3,1]
            },
            {
                name:'男教师',
                type:'bar',
                stack: '人数',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[1, 2, 30, 26, 75, 40, 12,24,3,1]
            },
            {
                name:'女教师',
                type:'bar',
                stack: '人数',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:function(v){return Math.abs(v.data)}
                    },


                },
                data:[-1, -8, -35, -50, -75, -58, -10,10,0,0]
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
                            fontSize: '13',
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
                    {value:13,name:'博士 0.02%'},
                    {value:3780,name:'硕士 5.15%'},
                    {value:60999,name:'本科 83.05%'},
                    {value:7685,name:'专科 10.46%'},
                    {value:961,name:'高中1.31%'},
                    {value:12,name:'初中 0.02%'},
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
                radius: [0, '25%'],

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
                    {value:335, name:'教师数', selected:true},
                    {value:1903, name:'学生数'},

                ]
            },
            {
                name:'各年级段生师比',
                type:'pie',
                radius: ['40%', '50%'],
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
            formatter: "{a} <br/>{b} : {c} ({d}%)"
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
                    {value:184, name:'政治'},
                    {value:277, name:'历史'},
                    {value:391, name:'地理'},
                    {value:290, name:'物理'},
                    {value:339, name:'化学'},
                    {value:406, name:'生物'},
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
            formatter: "{a} <br/>{b} : {c} ({d}%)"
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
                    {value:11, name:'政治'},
                    {value:12, name:'历史'},
                    {value:10, name:'地理'},
                    {value:15, name:'物理'},
                    {value:15, name:'化学'},
                    {value:14, name:'生物'},

                ]
            }
        ]
    }
    ssEduDataPieChartFive.setOption(ssEduDataPieChartFiveOption,true)
    window.resize = ssEduDataPieChartFive.resize;

    //实时用电量监测

    var ssEduDataLineChartOne = echarts.init(document.getElementById('ssEduDataLineChartOne'),'macarons');
    var wdData = [5.1, 5.4, 5.5, 5.7, 2.7, 5.1, 5.2, 5.8, 2.5, 2.3, 2.1, 5];
    setInterval(function () {
        sub_wd = randomNum(25, 105) / 10;
        wdData.shift();
        wdData.push(sub_wd);
        axisData = (new Date()).Format("h:mm:ss");
        //实时用电
        ssEduDataLineChartOneOption.xAxis[0].data.shift();
        ssEduDataLineChartOneOption.xAxis[0].data.push(axisData);
        ssEduDataLineChartOne.setOption(ssEduDataLineChartOneOption);
        //实时互联网
        ssEduDataLineChartTwoOption.xAxis[0].data.shift();
        ssEduDataLineChartTwoOption.xAxis[0].data.push(axisData);
        ssEduDataLineChartTwo.setOption(ssEduDataLineChartTwoOption);
        //实时城域网
        ssEduDataLineChartThreeOption.xAxis[0].data.shift();
        ssEduDataLineChartThreeOption.xAxis[0].data.push(axisData);
        ssEduDataLineChartThree.setOption(ssEduDataLineChartThreeOption);
    }, 2000)
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    var ssEduDataLineChartOneOption = {
        title: {
            text: '耗电实时曲线（kwh）',
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
            top:'18%',
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
                rotate: 25,
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
            data: (function () {
                var now = new Date();
                var res = [];
                var len = 12; //显示个数
                while (len--) {
                    //res.unshift(now.toLocaleTimeString().replace(/^\D*/, '').substring(0,5));
                    // res.unshift(now.Format("yyyy-M-d h:m:s.S"));
                    //   res.unshift(now.Format("hh:m:s"));
                    res.push(now.Format("h:mm:ss"));
                    now = new Date(now - 5000);//间隔5秒
                }
                return res;
            })(),
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
            data: wdData
        }]
    };
    ssEduDataLineChartOne.setOption(ssEduDataLineChartOneOption,true);
    window.resize = ssEduDataLineChartOne.resize;

    //互联网流量监控
    var ssEduDataLineChartTwo = echarts.init(document.getElementById('ssEduDataLineChartTwo'),'macarons');
    var ssEduDataLineChartTwoOption={
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top:'18%',
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
                rotate: 25,
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
            data: (function () {
                var now = new Date();
                var res = [];
                var len = 12; //显示个数
                while (len--) {
                    res.push(now.Format("h:mm:ss"));
                    now = new Date(now - 5000);//间隔5秒
                }
                return res;
            })(),
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
                    color: '#27d89b',

                }
            },
            data: wdData
        }]
    };
    ssEduDataLineChartTwo.setOption(ssEduDataLineChartTwoOption,true);
    window.resize = ssEduDataLineChartTwo.resize;
    //城域网流量监控
    var ssEduDataLineChartThree = echarts.init(document.getElementById('ssEduDataLineChartThree'),'macarons');
    var ssEduDataLineChartThreeOption={
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top:'18%',
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
                rotate: 25,
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
            data: (function () {
                var now = new Date();
                var res = [];
                var len = 12; //显示个数
                while (len--) {
                    res.push(now.Format("h:mm:ss"));
                    now = new Date(now - 5000);//间隔5秒
                }
                return res;
            })(),
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
                    color: '#069ad8',

                }
            },
            data: wdData
        }]
    }
    ssEduDataLineChartThree.setOption(ssEduDataLineChartThreeOption,true);
    window.resize = ssEduDataLineChartThree.resize;

});
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
        default:
            return 0;
    }
}