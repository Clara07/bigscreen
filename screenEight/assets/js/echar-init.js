(function container1() {
    {
        var schoolDom = document.getElementById("container1");
        var data = [
            {
                value: 40,
                name: '网络设置'
            },
            {
                value: 10,
                name: '存储设置'
            },
            {
                value: 50,
                name: '计算机设备'
            }
        ]
        var serverData = [{
            value: 1893,
            name: '交换机',
        },
            {
                value: 985,
                name: '防火墙',
            },
            {
                value: 1536,
                name: '磁盘阵列',
            },
            {
                value: 4372,
                name: '光纤交换机',
            },
            {
                value: 168,
                name: 'Dell服务器',
            },
            {
                value: 168,
                name: '华为服务器',
            },
            {
                value: 2168,
                name: '浪潮服务器',
            }
        ];
        var schoolChart = echarts.init(schoolDom);
        schoolOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '在网设备检测系统',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '26%'],

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
                    data: data
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '48%'],
                    avoidLabelOverlap: true,
                    data: serverData
                }
            ],
            color: ["#f4c724", '#64c64e', '#8d25f6', '#d9f424', '#26b8f4', '#4780c1']
        };
    }

    if (schoolOption && typeof schoolOption === "object") {
        schoolChart.setOption(schoolOption, true);
    }
})();
(function container2() {

    var dom = document.getElementById("container2");
    var chart = echarts.init(dom);
    var wdData = [5.1, 5.4, 5.5, 5.7, 2.7, 5.1, 5.2, 5.8, 2.5, 2.3, 2.1, 5];
    setInterval(function () {
        sub_wd = randomNum(25, 105) / 10;

        wdData.shift();
        wdData.push(sub_wd);

        axisData = (new Date()).Format("h:mm:ss");

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);

        chart.setOption(option);
    }, 2000)

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

    option = {
        backgroundColor: '#020e26',
        title: {
            text: '教育城域网互联网出口实时流量（Gbps）',
            show: true,
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff'
            },
            left: 'center',
            top: '3%',

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#1F5376'
                }
            }

        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 45,
                verticalAlign: 'top',
                fontSize: 14,
            },
            axisLine: {
                lineStyle: {
                    color: '#1F5376'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F5376'
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

            max: 12,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#1F5376'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#1F5376'
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
                    color: '#26a60e',

                }
            },
            data: wdData
        }]
    };


    if (option && typeof option === "object") {
        chart.setOption(option, true);
    }
})();
