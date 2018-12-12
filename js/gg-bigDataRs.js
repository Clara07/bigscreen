$(function(){
    //教师性别占比
    var rsPieChartOne = echarts.init(document.getElementById('rsPieChartOne'));
    var rsPieChartOneOption = {
        color:['#f9777e','#2cabd3'],
        series: [
            {
                name:'教师性别占比',
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '13',
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:68304,name:'女 67.87%'},
                    {value:32333,name:'男 32.13%'},

                ]
            }
        ]
    };
    rsPieChartOne.setOption(rsPieChartOneOption);
    //教师类型占比
    var rsPieChartTwo = echarts.init(document.getElementById('rsPieChartTwo'));
    var rsPieChartTwoOption = {
        color:['#14a4dc','#e7c22e'],
        series: [
            {
                name:'教师类型占比',
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
                radius: ['50%', '70%'],
                data:[
                    {value:93862,name:'专项 93.27%'},
                    {value:6775,name:'其他 6.73%'},

                ]
            }
        ]
    };
    rsPieChartTwo.setOption(rsPieChartTwoOption);
    //教师学历分布占比
    var rsPieChartThree = echarts.init(document.getElementById('rsPieChartThree'),'macarons');
    var rsPieChartThreeOption = {
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
                radius: ['50%', '70%'],
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
    rsPieChartThree.setOption(rsPieChartThreeOption);

    //教师岗位类别分布
    var rsPieChartFour = echarts.init(document.getElementById('rsPieChartFour'));
    var rsPieChartFourOption = {
        color:['#8dccf2','#34a6dd','#f9767f','#90a5b3','#addaf7'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '岗位分布',
                type: 'pie',
                radius : '75%',
                center: ['45%', '48%'],
                data:[
                    {value:335, name:'管理'},
                    {value:310, name:'教其他专业技术'},
                    {value:234, name:'其他'},
                    {value:135, name:'工勤技能'},
                    {value:1548, name:'教师'}
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
    rsPieChartFour.setOption(rsPieChartFourOption);
    //教师政治面貌分布
    var rsPieChartFive = echarts.init(document.getElementById('rsPieChartFive'));
    var rsPieChartFiveOption = {
        color:['#34a6dd','#92a8b8','#eebd2f'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '政治面貌分布',
                type: 'pie',
                radius : '75%',
                center: ['45%', '48%'],
                data:[
                    {value:335, name:'共产党员'},
                    {value:310, name:'群众'},
                    {value:234, name:'共青团员'},

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
    rsPieChartFive.setOption(rsPieChartFiveOption);
    //教职工专业技术职业分布
    var rsPieChartSix = echarts.init(document.getElementById('rsPieChartSix'));
    var rsPieChartSixOption = {
        color:['#8fccf3','#34a6dd','#fa757f','#a2b7c5','#aedbf8'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '专业技术职业分布',
                type: 'pie',
                radius : '55%',
                center: ['50%', '48%'],
                data:[
                    {value:335, name:'正高级'},
                    {value:210, name:'副高级'},
                    {value:234, name:'中级'},
                    {value:112, name:'初级'},
                    {value:292, name:'未定职级'},

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
    rsPieChartSix.setOption(rsPieChartSixOption);
    //教职工年龄分布
    var rsBarChartOne = echarts.init(document.getElementById('rsBarChartOne'));
    var rsBarChartOneOption = {
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
            bottom: '10%',
            containLabel: true
        },

        xAxis : [
            {
                type : 'category',
                data : ['<=24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁','50-54岁','55-59岁','>=65岁'],
                axisTick: {
                    show:false,
                    alignWithLabel: true
                },
                axisLabel: {
                    interval:0,
                    rotate:30,
                    textStyle: {
                        color: '#f4feff'
                    }
                },

            }
        ],
        yAxis : [
            {
                show : false,
                type : 'value'
            }
        ],
        series : [
            {
                name:'教职工年龄',
                type:'bar',
                barWidth: '50%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#f4feff'
                        }
                    }
                },
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#56addb','#eebd2f'];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data:[5004, 14007, 12784, 15590, 15069, 16753, 12577,6915,1913]
            }
        ]
    };
    rsBarChartOne.setOption(rsBarChartOneOption);
    //教职工少数民族占比
    var rsPieChartSeven = echarts.init(document.getElementById('rsPieChartSeven'));
    var rsPieChartSevenOption = {
        color:['#14a4dc','#e7c22e'],
        series: [
            {
                name:'少数民族占比',
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
                radius: ['80%', '100%'],
                data:[
                    {value:93862,name:'汉族 93.27%'},
                    {value:6775,name:'少数民族 6.73%'},
                ]
            }
        ]
    };
    rsPieChartSeven.setOption(rsPieChartSevenOption);
    //教职工城乡分布
    var rsPieChartEight = echarts.init(document.getElementById('rsPieChartEight'));
    var rsPieChartEightOption = {
        color:['#addaf7','#fa757f'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '城乡分布',
                type: 'pie',
                radius : '65%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'城市'},
                    {value:210, name:'农村'},
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
    rsPieChartEight.setOption(rsPieChartEightOption);
    //各地区教职工总数
    var rsBarChartTwo = echarts.init(document.getElementById('rsBarChartTwo'));
    var rsBarChartTwoOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:'10%',
            left: '0%',
            right: '8%',
            bottom: '10%',
            containLabel: true
        },

        xAxis : [
            {
                type : 'category',
                data : ['市直属', '市南区', '市北区', '黄岛区', '崂山区', '李沧区','城阳区','胶州市','即墨市','平度市','莱西市'],
                axisTick: {
                    show:false,
                    alignWithLabel: true
                },
                axisLabel: {
                    interval:0,
                    rotate:30,
                    textStyle: {
                        color: '#f4feff'
                    }
                },

            }
        ],
        yAxis : [
            {
                show : false,
                type : 'value'
            }
        ],
        series : [
            {
                name:'各地区教职工总数',
                type:'bar',
                barWidth: '50%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#f4feff'
                        }
                    }
                },
                itemStyle: {
                    //通常情况下：
                    normal:{
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#8ecdeb','#54aedd'];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data:[7436, 4025, 7652, 18692, 3978, 4698, 9234,9336,13424,13768,8373]
            }
        ]
    };
    rsBarChartTwo.setOption(rsBarChartTwoOption);



    //echarts根据窗口变化自适应大小监听事件
        window.onresize = rsPieChartOne.resize; //教师性别占比
        window.onresize = rsPieChartTwo.resize;//教师类型占比
        window.onresize = rsPieChartThree.resize;//教师类型占比
        window.onresize = rsPieChartFour.resize;//教师岗位类别分布
        window.onresize = rsPieChartFive.resize;//政治面貌分布
        window.onresize = rsPieChartSix.resize;//教职工专业技术职业分布
        window.onresize = rsBarChartOne.resize;//教职工年龄分布
        window.onresize = rsPieChartSeven.resize;//教职工少数民族占比
        window.onresize = rsPieChartEight.resize;//教职工城乡分布
        window.onresize = rsBarChartTwo.resize;//各地区教职工总数
});