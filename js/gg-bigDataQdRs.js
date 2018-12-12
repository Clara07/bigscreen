var xqyrMapChart;
var school = [],teachersumbystage = [],fulltimeteacherbystage = [],newstubystage = [],oldstubystage = [],gradustubystage = [];
$(document).ready(function(){
    school = [25,57,62,231,772,2221,12];
    teachersumbystage = [2.95,0.83,3.80,3.47,2.58,0.06];
    fulltimeteacherbystage = [1.96,0.65,1.07,2.23,3.45,1.73,0.05];
    newstubystage = [10.77,3.22,3.80,7.32,9.17,8.88,0.02];
    oldstubystage = [36.19,8.89,11.67,23.87,53.65,23.26,0.16];
    gradustubystage = [9.08,3.56,4.11,7.65,7.38,7.75,0.02];
    //初始数据
    getMapChartJysytj();

});

function getMapChartJysytj(){
    xqyrMapChart = echarts.init(document.getElementById('qdMapChart'),'macarons');
    var xqyrMapChartOption = {
        title : {
            text : "",
            left : 'center'
        },
        tooltip : {
            show : true,
            trigger : 'item',
            formatter : function(params, ticket, callback) {
                var res = '<div align="left" style="font-size:12px">所选地区：'
                    + params.name + '<br/>';
                var ele = params.data;
                if(valueCkeck(ele.value) && ele.value != 0 && ele.value != '-'){
                    res += '学校总数：'
                        + (ele.schoolsum == undefined ? 0
                            : ele.schoolsum) + ' 所<br/>';
                    res += '教职工数量：'
                        + (ele.teachersum == undefined ? 0
                            : ele.teachersum) + ' 万人<br/>';
                    res += '专任教师数量：'
                        + (ele.fulltimeteachersum == undefined ? 0
                            : ele.fulltimeteachersum) + ' 万人<br/>';
                    res += '招生数量：'
                        + (ele.newstu == undefined ? 0
                            : ele.newstu) + ' 万人<br/>';
                    res += '在校生数量：'
                        + (ele.oldstu == undefined ? 0
                            : ele.oldstu) + ' 万人<br/></div>';
                    res += '毕业数量：'
                        + (ele.gradustu == undefined ? 0
                            : ele.gradustu) + ' 万人<br/></div>';
                }

                setTimeout(function() {
                    callback(ticket, res);
                }, 100);
                return '加载中';
            }
        },
        toolbox : {
            show : false,
            orient : 'vertical',
            x : 'left',
            top : 'center',
            feature : {
                dataView : {
                    readOnly : false
                },
                restore : {},
                saveAsImage : {}
            }
        },
        dataRange: {
            min: 100,
            max: 600,
            x: 'right',
            y: '480',
            calculable : true,
            text:['高','低'],           // 文本，默认为数值文本
            color:[
                '#2BA3DF','#CEE3FF'
            ],
            textStyle: {
                color: '#fff'                                // 值域文字颜色
            }
        },
        series : [ {
            name : '青岛',
            type : 'map',
            roam : true,
            mapType : 'qingdao',
            zoom : "1.20",
            aspectScale: 0.75,
            top : "100",
            left : "30%",
            bottom : "20%",
            selectedMode : 'single',
            label : {
                normal : {
                    show : true,
                    textStyle : {
                        color : '#823e44'
                    }
                },
                emphasis : {
                    textStyle : {
                        color : '#fff'
                    }
                }
            },
            itemStyle : {
                normal : {
                    borderColor : '#389BB7',
                    areaColor : '#0081cb'
                },
                emphasis : {
                    areaColor : '#ffee00',
                    borderWidth : 0
                }
            },
            animation : false,
            data :[{"xzqhbm":"370202","ssb":"1:13","zrjss":3632,"jss":4055,"value":90,"name":"市南区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370203","ssb":"1:13.1","zrjss":7150,"jss":8033,"value":214,"name":"市北区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370211","ssb":"1:11.7","zrjss":16464,"jss":17684,"value":510,"name":"黄岛区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370212","ssb":"1:10.4","zrjss":3977,"jss":4384,"value":146,"name":"崂山区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370213","ssb":"1:13.4","zrjss":4249,"jss":4990,"value":99,"name":"李沧区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370214","ssb":"1:14.3","zrjss":7358,"jss":7821,"value":222,"name":"城阳区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370281","ssb":"1:15.9","zrjss":8317,"jss":8538,"value":507,"name":"胶州市","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370282","ssb":"1:12.6","zrjss":13600,"jss":13929,"value":567,"name":"即墨区","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370283","ssb":"1:12.6","zrjss":12798,"jss":13183,"value":637,"name":"平度市","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}},{"xzqhbm":"370285","ssb":"1:10.5","zrjss":8003,"jss":8376,"value":262,"name":"莱西市","schoolsum":3380,"teachersum":13.7,"fulltimeteachersum":11.12,"newstu":43.19,"oldstu":157.69,"gradustu":39.55,"school":{"s1":0,"s2":0,"s3":0,"s4":0,"s5":0,"s6":0,"s7":0},"teachersumbystage":{"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"t7":0},"fulltimeteacherbystage":{"f1":0,"f2":0,"f3":0,"f4":0,"f5":0,"f6":0,"f7":0},"newstubystage":{"n1":0,"n2":0,"n3":0,"n4":0,"n5":0,"n6":0,"n7":0},"oldstubystage":{"o1":0,"o2":0,"o3":0,"o4":0,"o5":0,"o6":0,"o7":0},"gradustubystage":{"g1":0,"g2":0,"g3":0,"g4":0,"g5":0,"g6":0,"g7":0}}]
        }
        ]
    }
    xqyrMapChart.setOption(xqyrMapChartOption)
    window.onresize = xqyrMapChart.resize;
}




/***值校验(如果为空返回false，不为空为true)***/
function valueCkeck(value){
    if(value==null||value=="undefined"||value=="")
        return false;
    return true;
}