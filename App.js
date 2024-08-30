const DummyData = [
    {id:'d1',value:10,region:'USA'},
    {id:'d2',value:1,region:'China'},
    {id:'d3',value:5,region:'India'},
    {id:'d4',value:12,region:'Spain'},
  ];
  
const container = d3.select('svg')
    .classed('container', true)
    .style('border','1px solid black');

const bars = container
    .selectAll('.bar')
    .data(DummyData)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width',250/DummyData.length+1+"px")
    .style('height',data => (data.value * 15)+'px');
