/* CSS HEX 
--royal-blue-dark: #16265fff;
--maximum-purple: #7e2c8fff;
--ruby: #d81159ff;
--orange-pantone: #ff600bff;
--maximum-yellow-red: #ffbc42ff;
--teal: #218380ff;
--sky-blue-crayola: #73d2deff;*/

//BAR CHART - SACRE QUÉBÉCOIS

const svg_bar = () =>{
    bar = new RGraph.SVG.Bar({
        id: 'svg_bar_chart',
        data: [10,9,8,7,6,4,2],
        options: {
            colorsStroke: 'black',
            colors: ['#16265fff','#7e2c8fff','#d81159ff', '#ff600bff','#ffbc42ff','#218380ff','#73d2deff'],
            colorsSequential: true,
            marginTop: 30,
            marginLeft: 45,
            marginBottom: 80,
            xaxisLabels: ['Tabarnak','Calisse','Crisse','Osti','Ciboire','Calvaire','Maudit'],
            xaxisTickmarks: false,
            backgroundGridDashed: true,
            yaxisTickmarks: false,
            shadow: true,
            backgroundGridColor: 'black',
            title: 'Degré de sévérité des sacres québécois',
            marginInner: 10
        }
    }).wave();
}

//PIE CHART - HOMMES CÉLIBATAIRES

const pie = () => {
    new RGraph.Pie({
        id: 'pieChart',
        data: [2,2,2,2,92],
        options: {
            textSize: 14,
            variant: 'donut',
            labels: ['1','2','3','4','5'],
            colors:['#FFBC42','#D81159','#ff600bff','#218380','#73D2DE'],
            colorsStroke: 'transparent',
            exploded: 3,
            shadow: true
        }
    }).roundRobin({'radius': false,'frames':60});
}


//SKETCH CHART 

const sketch = () =>{
    new RGraph.Bar({
        id: 'sketchChart',
        data: [50,40,20,-10,-30,-45],
        options: {
            colors: ['black'],
            yaxis: false,
            yaxisLabelsSpecific: ['Approprié', 'Inapproprié'],
            marginLeft: 100,
            marginBottom: 115,
            marginTop: 75,
            variant: 'sketch',
            
            /// You can uncomment this if you don't want the inner vertical
            // lines
            variantSketchVerticals: false,

            // The font that's used for the text on the chart is set to
            // Comic sans MS. This style of font fits well with the
            // sketchy drawing style.
            textFont: 'Comic sans MS',

            linewidth: 1,
            backgroundGrid: false,
            title: 'Animaux appropriés pour les enfants',
            
            // The labelsAbove labels serve as the labels for the chart
            labelsAbove: true,
            labelsAboveOffsety: 10,
            labelsAboveSpecific: ['Chat', 'Chien', 'Hamster', 'Cobra', 'Tigre', 'Dragon']
        }
    }).draw().responsive([
        {maxWidth: null, width:600,height: 250,options: {titleY:25,textSize: 12,marginInner: 15,marginBottom:100,titleSize: 20},parentCss:{'float':'right',textAlign:'none'}},
        {maxWidth: 800,width:400,height: 200,options: {titleY: 10,textSize: 8,marginInner: 5,marginBottom:65,titleSize: 15},parentCss:{'float':'none',textAlign:'center'}}
    ]);
}

/*{maxWidth: null,width:600,height: 250,options: {titleY:25,textSize: 12,marginInner: 15,marginBottom:100,titleSize: 20},parentCss:{'float':'right',textAlign:'none'}},
        {maxWidth: 800,width:400,height: 200,options: {titleY: 10,textSize: 8,marginInner: 5,marginBottom:65,titleSize: 15},parentCss:{'float':'none',textAlign:'center'}}*/

//FUEL CHART

const fuel = () =>{
    var data = [4,8,6,3,1,2,5,8,9];

    var fuel = new RGraph.Fuel({
        id: 'fuelChart',
        min: 0,
        max: 100,
        value: 50,
        options: {
            colors: ['#218380'],
            needleColor:'#d81159ff',
            needleRadiusOffset: 80,
            labelsEmpty: 'Vide',
            labelsFull: 'Plein',
        }
    }).grow();
    
    setTimeout(function ()
    {
        fuel.value = 25;
        fuel.grow();
    }, 3500);
}

//LINE CHART

const svg_line = () => {
    var data = [0,0,0,0,0,0,0,0,0,0,0.8,2.2,1.5,0.3,13.2,5.3,0,0.4,0,0,0,0,0,4.3,0,0.4,2.1,0,0,0,0,0,0,0,0,0,0,0,0,0,1.8,4.5,0,0,0,2.3,5.2,0.4,0.2,0,0,0.6,0,0,0.2,0,0,5.1,0,0,0.2,0,0,0,0.8,2.2,0.4,0,3,5,0.8,0,10.8,14.3,0,0,7.7,4.2,2.1,0,0.3,0,0.2,0,0,4.5,4.9,0,0,7.1,0.9];

    var line = new RGraph.SVG.Line({
        id: 'lineChart',
        data: data,
        options: {
            colors: ['#218380ff'],
            linewidth: 2,
            backgroundGridColor: '#eefafb',
            backgroundGridVlinesCount: 15,
            backgroundColor: '#bdeaef',
            xaxis: false,
            xaxisTickmarks:false,
            xaxisLabels: [
                'Novembre',
                'Décembre',
                'Janvier',

            ],
            xaxisLabelsPosition: 'section',
            yaxisTickmarks:false,
            yaxis: false,
            spline: true,
            filled: true,
            filledColors: ['Gradient(rgba(33,131,128,0.95):rgba(33,131,128,0.75):rgba(33,131,128,0))']
        }
    }).trace();
    
    line.svg.style.borderTopLeftRadius = '25px';
    line.svg.style.borderBottomRightRadius = '25px';
}

//RADAR

const svg_radar = ()=>{
    data = [
        [7,5,4,9],
        [6,9,8,3],
        [8,3,8,9],
        [5,9,8,1]
    ];

    radar = new RGraph.SVG.Radar({
        id: 'radarChart',
        data: data,
        options: {
            backgroundGridColor: '#ddd',
            colors: ['#D81159','#73D2DE', '#16265fff', '#ff600bff'],
            linewidth: 2,
            labels: ['Gryffondor', 'Poufsouffle', 'Serdaigle', 'Serpentard'],
            tickmarksStyle: 'filledcircle',
            tickmarksSize: 5
        }
    }).trace();
}


//CALL FUNCTIONS

fuel();
sketch();
pie();
svg_bar();
svg_line();
svg_radar();