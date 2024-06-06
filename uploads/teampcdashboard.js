//tạo mẫu thống kê vào #content
function pcteamdashboard(){
$("#main-container").html(`<h4 class="py-3 mb-4"><span class="text-muted fw-light">Dev Team /</span> Menu config</h4>`);
$('#main-container').append(`<div class="row">
<div class="col-lg-8 mb-4 order-0">
  <div class="card">
    <div class="d-flex align-items-end row">
      <div class="col-sm-7">
        <div class="card-body">
          <h5 class="card-title text-primary">Congratulations John! 🎉</h5>
          <p class="mb-4">You have done <span class="fw-medium">72%</span> more sales today. Check your new badge in your profile.</p>

          <a href="javascript:;" class="btn btn-sm btn-label-primary">View Badges</a>
        </div>
      </div>
      <div class="col-sm-5 text-center text-sm-left">
        <div class="card-body pb-0 px-0 px-md-4">
          <img src="../../assets/img/illustrations/man-with-laptop-dark.png" height="140" alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png">
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-4 col-md-4 order-1">
  <div class="row">
    <div class="col-lg-6 col-md-12 col-6 mb-4">
      <div class="card">
        <div class="card-body pb-0">
          <span class="d-block fw-medium mb-1">Order</span>
          <h3 class="card-title mb-1">276k</h3>
        </div>
        <div id="orderChart" class="mb-3" style="min-height: 80px;"><div id="apexchartsqxcj94lh" class="apexcharts-canvas apexchartsqxcj94lh apexcharts-theme-light" style="width: 273px; height: 80px;"><svg id="SvgjsSvg1417" width="273" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1419" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1418"><clipPath id="gridRectMaskqxcj94lh"><rect id="SvgjsRect1424" width="271" height="82" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskqxcj94lh"></clipPath><clipPath id="nonForecastMaskqxcj94lh"></clipPath><clipPath id="gridRectMarkerMaskqxcj94lh"><rect id="SvgjsRect1425" width="293" height="108" x="-14" y="-14" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1443" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1444" stop-opacity="0.8" stop-color="rgba(113,221,55,0.8)" offset="0"></stop><stop id="SvgjsStop1445" stop-opacity="0.25" stop-color="rgba(227,248,215,0.25)" offset="0.85"></stop><stop id="SvgjsStop1446" stop-opacity="0.25" stop-color="rgba(227,248,215,0.25)" offset="1"></stop></linearGradient></defs><line id="SvgjsLine1423" x1="0" y1="0" x2="0" y2="80" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="80" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1449" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1450" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1459" class="apexcharts-grid"><g id="SvgjsG1460" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1462" x1="0" y1="0" x2="265" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1463" x1="0" y1="16" x2="265" y2="16" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1464" x1="0" y1="32" x2="265" y2="32" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1465" x1="0" y1="48" x2="265" y2="48" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1466" x1="0" y1="64" x2="265" y2="64" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1467" x1="0" y1="80" x2="265" y2="80" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1461" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1469" x1="0" y1="80" x2="265" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1468" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1426" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1427" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1447" d="M 0 80L 0 56C 15.458333333333334 56 28.708333333333336 58 44.16666666666667 58C 59.62500000000001 58 72.87500000000001 18 88.33333333333334 18C 103.79166666666667 18 117.04166666666667 72 132.5 72C 147.95833333333334 72 161.20833333333334 46 176.66666666666669 46C 192.125 46 205.375 52 220.83333333333334 52C 236.29166666666669 52 249.54166666666669 10 265 10C 265 10 265 10 265 80M 265 10z" fill="url(#SvgjsLinearGradient1443)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskqxcj94lh)" pathTo="M 0 80L 0 56C 15.458333333333334 56 28.708333333333336 58 44.16666666666667 58C 59.62500000000001 58 72.87500000000001 18 88.33333333333334 18C 103.79166666666667 18 117.04166666666667 72 132.5 72C 147.95833333333334 72 161.20833333333334 46 176.66666666666669 46C 192.125 46 205.375 52 220.83333333333334 52C 236.29166666666669 52 249.54166666666669 10 265 10C 265 10 265 10 265 80M 265 10z" pathFrom="M -1 128L -1 128L 44.16666666666667 128L 88.33333333333334 128L 132.5 128L 176.66666666666669 128L 220.83333333333334 128L 265 128"></path><path id="SvgjsPath1448" d="M 0 56C 15.458333333333334 56 28.708333333333336 58 44.16666666666667 58C 59.62500000000001 58 72.87500000000001 18 88.33333333333334 18C 103.79166666666667 18 117.04166666666667 72 132.5 72C 147.95833333333334 72 161.20833333333334 46 176.66666666666669 46C 192.125 46 205.375 52 220.83333333333334 52C 236.29166666666669 52 249.54166666666669 10 265 10" fill="none" fill-opacity="1" stroke="#71dd37" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMaskqxcj94lh)" pathTo="M 0 56C 15.458333333333334 56 28.708333333333336 58 44.16666666666667 58C 59.62500000000001 58 72.87500000000001 18 88.33333333333334 18C 103.79166666666667 18 117.04166666666667 72 132.5 72C 147.95833333333334 72 161.20833333333334 46 176.66666666666669 46C 192.125 46 205.375 52 220.83333333333334 52C 236.29166666666669 52 249.54166666666669 10 265 10" pathFrom="M -1 128L -1 128L 44.16666666666667 128L 88.33333333333334 128L 132.5 128L 176.66666666666669 128L 220.83333333333334 128L 265 128"></path><g id="SvgjsG1428" class="apexcharts-series-markers-wrap" data:realIndex="0"><g id="SvgjsG1430" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1431" r="6" cx="0" cy="56" class="apexcharts-marker no-pointer-events wg1vv5jri" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="0" j="0" index="0" default-marker-size="6"></circle><circle id="SvgjsCircle1432" r="6" cx="44.16666666666667" cy="58" class="apexcharts-marker no-pointer-events wg3vp53b5" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="1" j="1" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1433" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1434" r="6" cx="88.33333333333334" cy="18" class="apexcharts-marker no-pointer-events wz9l65b5d" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="2" j="2" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1435" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1436" r="6" cx="132.5" cy="72" class="apexcharts-marker no-pointer-events wq3urqhj7l" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="3" j="3" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1437" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1438" r="6" cx="176.66666666666669" cy="46" class="apexcharts-marker no-pointer-events wmtrkpae8" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="4" j="4" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1439" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1440" r="6" cx="220.83333333333334" cy="52" class="apexcharts-marker no-pointer-events w57zsr1ivl" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="5" j="5" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1441" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskqxcj94lh)"><circle id="SvgjsCircle1442" r="6" cx="265" cy="10" class="apexcharts-marker no-pointer-events wsrefqd53k" stroke="#71dd37" fill="#ffffff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="6" j="6" index="0" default-marker-size="6"></circle></g></g></g><g id="SvgjsG1429" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1470" x1="0" y1="0" x2="265" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1471" x1="0" y1="0" x2="265" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1472" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1473" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1474" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1422" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1458" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1420" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 40px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(113, 221, 55);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
      <div class="resize-triggers"><div class="expand-trigger"><div style="width: 274px; height: 181px;"></div></div><div class="contract-trigger"></div></div></div>
    </div>
    <div class="col-lg-6 col-md-12 col-6 mb-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex align-items-start justify-content-between">
            <div class="avatar flex-shrink-0">
              <img src="../../assets/img/icons/unicons/wallet-info.png" alt="Credit Card" class="rounded">
            </div>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
              </div>
            </div>
          </div>
          <span>Sales</span>
          <h3 class="card-title text-nowrap mb-1">$4,679</h3>
          <small class="text-success fw-medium"><i class="bx bx-up-arrow-alt"></i> +28.42%</small>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Total Revenue -->
<div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
  <div class="card">
    <div class="row row-bordered g-0">
      <div class="col-md-8">
        <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
        <div id="totalRevenueChart" class="px-2" style="min-height: 315px;"><div id="apexcharts2106eufw" class="apexcharts-canvas apexcharts2106eufw apexcharts-theme-light" style="width: 764px; height: 300px;"><svg id="SvgjsSvg1475" width="764" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><foreignObject x="0" y="0" width="764" height="300"><div class="apexcharts-legend apexcharts-align-left apx-legend-position-top" xmlns="http://www.w3.org/1999/xhtml" style="right: 0px; position: absolute; left: 0px; top: 4px; max-height: 150px;"><div class="apexcharts-legend-series" rel="1" seriesname="2021" data:collapsed="false" style="margin: 2px 10px;"><span class="apexcharts-legend-marker" rel="1" data:collapsed="false" style="background: rgb(105, 108, 255) !important; color: rgb(105, 108, 255); height: 8px; width: 8px; left: -3px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span class="apexcharts-legend-text" rel="1" i="0" data:default-text="2021" data:collapsed="false" style="color: rgb(163, 164, 204); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">2021</span></div><div class="apexcharts-legend-series" rel="2" seriesname="2020" data:collapsed="false" style="margin: 2px 10px;"><span class="apexcharts-legend-marker" rel="2" data:collapsed="false" style="background: rgb(3, 195, 236) !important; color: rgb(3, 195, 236); height: 8px; width: 8px; left: -3px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 12px;"></span><span class="apexcharts-legend-text" rel="2" i="1" data:default-text="2020" data:collapsed="false" style="color: rgb(163, 164, 204); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">2020</span></div></div><style type="text/css">	
      
    .apexcharts-legend {	
      display: flex;	
      overflow: auto;	
      padding: 0 10px;	
    }	
    .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
      flex-wrap: wrap	
    }	
    .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
      flex-direction: column;	
      bottom: 0;	
    }	
    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
      justify-content: flex-start;	
    }	
    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
      justify-content: center;  	
    }	
    .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
      justify-content: flex-end;	
    }	
    .apexcharts-legend-series {	
      cursor: pointer;	
      line-height: normal;	
    }	
    .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
      display: flex;	
      align-items: center;	
    }	
    .apexcharts-legend-text {	
      position: relative;	
      font-size: 14px;	
    }	
    .apexcharts-legend-text *, .apexcharts-legend-marker * {	
      pointer-events: none;	
    }	
    .apexcharts-legend-marker {	
      position: relative;	
      display: inline-block;	
      cursor: pointer;	
      margin-right: 3px;	
      border-style: solid;
    }	
        
    .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
      display: inline-block;	
    }	
    .apexcharts-legend-series.apexcharts-no-click {	
      cursor: auto;	
    }	
    .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
      display: none !important;	
    }	
    .apexcharts-inactive-legend {	
      opacity: 0.45;	
    }</style></foreignObject><g id="SvgjsG1477" class="apexcharts-inner apexcharts-graphical" transform="translate(53.796875, 51)"><defs id="SvgjsDefs1476"><linearGradient id="SvgjsLinearGradient1481" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1482" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop1483" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop1484" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMask2106eufw"><rect id="SvgjsRect1486" width="700.203125" height="223.73" x="-5" y="-3" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask2106eufw"></clipPath><clipPath id="nonForecastMask2106eufw"></clipPath><clipPath id="gridRectMarkerMask2106eufw"><rect id="SvgjsRect1487" width="694.203125" height="221.73" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><rect id="SvgjsRect1485" width="32.538147321428575" height="217.73" x="125.3995533970424" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1481)" class="apexcharts-xcrosshairs" y2="217.73" filter="none" fill-opacity="0.9" x1="125.3995533970424" x2="125.3995533970424"></rect><g id="SvgjsG1507" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1508" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1510" font-family="Helvetica, Arial, sans-serif" x="49.300223214285715" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1511">Jan</tspan><title>Jan</title></text><text id="SvgjsText1513" font-family="Helvetica, Arial, sans-serif" x="147.90066964285714" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1514">Feb</tspan><title>Feb</title></text><text id="SvgjsText1516" font-family="Helvetica, Arial, sans-serif" x="246.50111607142856" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1517">Mar</tspan><title>Mar</title></text><text id="SvgjsText1519" font-family="Helvetica, Arial, sans-serif" x="345.1015625" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1520">Apr</tspan><title>Apr</title></text><text id="SvgjsText1522" font-family="Helvetica, Arial, sans-serif" x="443.70200892857144" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1523">May</tspan><title>May</title></text><text id="SvgjsText1525" font-family="Helvetica, Arial, sans-serif" x="542.3024553571429" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1526">Jun</tspan><title>Jun</title></text><text id="SvgjsText1528" font-family="Helvetica, Arial, sans-serif" x="640.9029017857143" y="246.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1529">Jul</tspan><title>Jul</title></text></g></g><g id="SvgjsG1544" class="apexcharts-grid"><g id="SvgjsG1545" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1547" x1="0" y1="0" x2="690.203125" y2="0" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1548" x1="0" y1="43.546" x2="690.203125" y2="43.546" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1549" x1="0" y1="87.092" x2="690.203125" y2="87.092" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1550" x1="0" y1="130.638" x2="690.203125" y2="130.638" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1551" x1="0" y1="174.184" x2="690.203125" y2="174.184" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1552" x1="0" y1="217.73" x2="690.203125" y2="217.73" stroke="#444564" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1546" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1554" x1="0" y1="217.73" x2="690.203125" y2="217.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1553" x1="0" y1="1" x2="0" y2="217.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1488" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1489" class="apexcharts-series" seriesName="2021" rel="1" data:realIndex="0"><path id="SvgjsPath1491" d="M 33.031149553571424 118.638L 33.031149553571424 64.25520000000002Q 33.031149553571424 52.255200000000016 45.031149553571424 52.255200000000016L 47.56929687499999 52.255200000000016Q 59.56929687499999 52.255200000000016 59.56929687499999 64.25520000000002L 59.56929687499999 64.25520000000002L 59.56929687499999 118.638Q 59.56929687499999 130.638 47.56929687499999 130.638L 45.031149553571424 130.638Q 33.031149553571424 130.638 33.031149553571424 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 33.031149553571424 118.638L 33.031149553571424 64.25520000000002Q 33.031149553571424 52.255200000000016 45.031149553571424 52.255200000000016L 47.56929687499999 52.255200000000016Q 59.56929687499999 52.255200000000016 59.56929687499999 64.25520000000002L 59.56929687499999 64.25520000000002L 59.56929687499999 118.638Q 59.56929687499999 130.638 47.56929687499999 130.638L 45.031149553571424 130.638Q 33.031149553571424 130.638 33.031149553571424 118.638z" pathFrom="M 33.031149553571424 118.638L 33.031149553571424 118.638L 59.56929687499999 118.638L 59.56929687499999 118.638L 59.56929687499999 118.638L 59.56929687499999 118.638L 59.56929687499999 118.638L 33.031149553571424 118.638" cy="52.255200000000016" cx="128.63159598214287" j="0" val="18" barHeight="78.38279999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1492" d="M 131.63159598214287 118.638L 131.63159598214287 112.15580000000001Q 131.63159598214287 100.15580000000001 143.63159598214287 100.15580000000001L 146.16974330357144 100.15580000000001Q 158.16974330357144 100.15580000000001 158.16974330357144 112.15580000000001L 158.16974330357144 112.15580000000001L 158.16974330357144 118.638Q 158.16974330357144 130.638 146.16974330357144 130.638L 143.63159598214287 130.638Q 131.63159598214287 130.638 131.63159598214287 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 131.63159598214287 118.638L 131.63159598214287 112.15580000000001Q 131.63159598214287 100.15580000000001 143.63159598214287 100.15580000000001L 146.16974330357144 100.15580000000001Q 158.16974330357144 100.15580000000001 158.16974330357144 112.15580000000001L 158.16974330357144 112.15580000000001L 158.16974330357144 118.638Q 158.16974330357144 130.638 146.16974330357144 130.638L 143.63159598214287 130.638Q 131.63159598214287 130.638 131.63159598214287 118.638z" pathFrom="M 131.63159598214287 118.638L 131.63159598214287 118.638L 158.16974330357144 118.638L 158.16974330357144 118.638L 158.16974330357144 118.638L 158.16974330357144 118.638L 158.16974330357144 118.638L 131.63159598214287 118.638" cy="100.15580000000001" cx="227.2320424107143" j="1" val="7" barHeight="30.482199999999995" barWidth="32.538147321428575"></path><path id="SvgjsPath1493" d="M 230.2320424107143 118.638L 230.2320424107143 77.31900000000002Q 230.2320424107143 65.31900000000002 242.2320424107143 65.31900000000002L 244.7701897321429 65.31900000000002Q 256.7701897321429 65.31900000000002 256.7701897321429 77.31900000000002L 256.7701897321429 77.31900000000002L 256.7701897321429 118.638Q 256.7701897321429 130.638 244.7701897321429 130.638L 242.2320424107143 130.638Q 230.2320424107143 130.638 230.2320424107143 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 230.2320424107143 118.638L 230.2320424107143 77.31900000000002Q 230.2320424107143 65.31900000000002 242.2320424107143 65.31900000000002L 244.7701897321429 65.31900000000002Q 256.7701897321429 65.31900000000002 256.7701897321429 77.31900000000002L 256.7701897321429 77.31900000000002L 256.7701897321429 118.638Q 256.7701897321429 130.638 244.7701897321429 130.638L 242.2320424107143 130.638Q 230.2320424107143 130.638 230.2320424107143 118.638z" pathFrom="M 230.2320424107143 118.638L 230.2320424107143 118.638L 256.7701897321429 118.638L 256.7701897321429 118.638L 256.7701897321429 118.638L 256.7701897321429 118.638L 256.7701897321429 118.638L 230.2320424107143 118.638" cy="65.31900000000002" cx="325.83248883928576" j="2" val="15" barHeight="65.31899999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1494" d="M 328.83248883928576 118.638L 328.83248883928576 16.35460000000002Q 328.83248883928576 4.354600000000019 340.83248883928576 4.354600000000019L 343.37063616071435 4.354600000000019Q 355.37063616071435 4.354600000000019 355.37063616071435 16.35460000000002L 355.37063616071435 16.35460000000002L 355.37063616071435 118.638Q 355.37063616071435 130.638 343.37063616071435 130.638L 340.83248883928576 130.638Q 328.83248883928576 130.638 328.83248883928576 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 328.83248883928576 118.638L 328.83248883928576 16.35460000000002Q 328.83248883928576 4.354600000000019 340.83248883928576 4.354600000000019L 343.37063616071435 4.354600000000019Q 355.37063616071435 4.354600000000019 355.37063616071435 16.35460000000002L 355.37063616071435 16.35460000000002L 355.37063616071435 118.638Q 355.37063616071435 130.638 343.37063616071435 130.638L 340.83248883928576 130.638Q 328.83248883928576 130.638 328.83248883928576 118.638z" pathFrom="M 328.83248883928576 118.638L 328.83248883928576 118.638L 355.37063616071435 118.638L 355.37063616071435 118.638L 355.37063616071435 118.638L 355.37063616071435 118.638L 355.37063616071435 118.638L 328.83248883928576 118.638" cy="4.354600000000019" cx="424.4329352678572" j="3" val="29" barHeight="126.28339999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1495" d="M 427.4329352678572 118.638L 427.4329352678572 64.25520000000002Q 427.4329352678572 52.255200000000016 439.4329352678572 52.255200000000016L 441.9710825892858 52.255200000000016Q 453.9710825892858 52.255200000000016 453.9710825892858 64.25520000000002L 453.9710825892858 64.25520000000002L 453.9710825892858 118.638Q 453.9710825892858 130.638 441.9710825892858 130.638L 439.4329352678572 130.638Q 427.4329352678572 130.638 427.4329352678572 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 427.4329352678572 118.638L 427.4329352678572 64.25520000000002Q 427.4329352678572 52.255200000000016 439.4329352678572 52.255200000000016L 441.9710825892858 52.255200000000016Q 453.9710825892858 52.255200000000016 453.9710825892858 64.25520000000002L 453.9710825892858 64.25520000000002L 453.9710825892858 118.638Q 453.9710825892858 130.638 441.9710825892858 130.638L 439.4329352678572 130.638Q 427.4329352678572 130.638 427.4329352678572 118.638z" pathFrom="M 427.4329352678572 118.638L 427.4329352678572 118.638L 453.9710825892858 118.638L 453.9710825892858 118.638L 453.9710825892858 118.638L 453.9710825892858 118.638L 453.9710825892858 118.638L 427.4329352678572 118.638" cy="52.255200000000016" cx="523.0333816964286" j="4" val="18" barHeight="78.38279999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1496" d="M 526.0333816964286 118.638L 526.0333816964286 90.3828Q 526.0333816964286 78.3828 538.0333816964286 78.3828L 540.5715290178572 78.3828Q 552.5715290178572 78.3828 552.5715290178572 90.3828L 552.5715290178572 90.3828L 552.5715290178572 118.638Q 552.5715290178572 130.638 540.5715290178572 130.638L 538.0333816964286 130.638Q 526.0333816964286 130.638 526.0333816964286 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 526.0333816964286 118.638L 526.0333816964286 90.3828Q 526.0333816964286 78.3828 538.0333816964286 78.3828L 540.5715290178572 78.3828Q 552.5715290178572 78.3828 552.5715290178572 90.3828L 552.5715290178572 90.3828L 552.5715290178572 118.638Q 552.5715290178572 130.638 540.5715290178572 130.638L 538.0333816964286 130.638Q 526.0333816964286 130.638 526.0333816964286 118.638z" pathFrom="M 526.0333816964286 118.638L 526.0333816964286 118.638L 552.5715290178572 118.638L 552.5715290178572 118.638L 552.5715290178572 118.638L 552.5715290178572 118.638L 552.5715290178572 118.638L 526.0333816964286 118.638" cy="78.3828" cx="621.633828125" j="5" val="12" barHeight="52.255199999999995" barWidth="32.538147321428575"></path><path id="SvgjsPath1497" d="M 624.633828125 118.638L 624.633828125 103.44660000000002Q 624.633828125 91.44660000000002 636.633828125 91.44660000000002L 639.1719754464286 91.44660000000002Q 651.1719754464286 91.44660000000002 651.1719754464286 103.44660000000002L 651.1719754464286 103.44660000000002L 651.1719754464286 118.638Q 651.1719754464286 130.638 639.1719754464286 130.638L 636.633828125 130.638Q 624.633828125 130.638 624.633828125 118.638z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask2106eufw)" pathTo="M 624.633828125 118.638L 624.633828125 103.44660000000002Q 624.633828125 91.44660000000002 636.633828125 91.44660000000002L 639.1719754464286 91.44660000000002Q 651.1719754464286 91.44660000000002 651.1719754464286 103.44660000000002L 651.1719754464286 103.44660000000002L 651.1719754464286 118.638Q 651.1719754464286 130.638 639.1719754464286 130.638L 636.633828125 130.638Q 624.633828125 130.638 624.633828125 118.638z" pathFrom="M 624.633828125 118.638L 624.633828125 118.638L 651.1719754464286 118.638L 651.1719754464286 118.638L 651.1719754464286 118.638L 651.1719754464286 118.638L 651.1719754464286 118.638L 624.633828125 118.638" cy="91.44660000000002" cx="720.2342745535715" j="6" val="9" barHeight="39.191399999999994" barWidth="32.538147321428575"></path></g><g id="SvgjsG1498" class="apexcharts-series" seriesName="2020" rel="2" data:realIndex="1"><path id="SvgjsPath1500" d="M 33.031149553571424 154.638L 33.031149553571424 187.24779999999998Q 33.031149553571424 199.24779999999998 45.031149553571424 199.24779999999998L 47.56929687499999 199.24779999999998Q 59.56929687499999 199.24779999999998 59.56929687499999 187.24779999999998L 59.56929687499999 187.24779999999998L 59.56929687499999 154.638Q 59.56929687499999 142.638 47.56929687499999 142.638L 45.031149553571424 142.638Q 33.031149553571424 142.638 33.031149553571424 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 33.031149553571424 154.638L 33.031149553571424 187.24779999999998Q 33.031149553571424 199.24779999999998 45.031149553571424 199.24779999999998L 47.56929687499999 199.24779999999998Q 59.56929687499999 199.24779999999998 59.56929687499999 187.24779999999998L 59.56929687499999 187.24779999999998L 59.56929687499999 154.638Q 59.56929687499999 142.638 47.56929687499999 142.638L 45.031149553571424 142.638Q 33.031149553571424 142.638 33.031149553571424 154.638z" pathFrom="M 33.031149553571424 154.638L 33.031149553571424 154.638L 59.56929687499999 154.638L 59.56929687499999 154.638L 59.56929687499999 154.638L 59.56929687499999 154.638L 59.56929687499999 154.638L 33.031149553571424 154.638" cy="175.24779999999998" cx="128.63159598214287" j="0" val="-13" barHeight="-56.60979999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1501" d="M 131.63159598214287 154.638L 131.63159598214287 209.0208Q 131.63159598214287 221.0208 143.63159598214287 221.0208L 146.16974330357144 221.0208Q 158.16974330357144 221.0208 158.16974330357144 209.0208L 158.16974330357144 209.0208L 158.16974330357144 154.638Q 158.16974330357144 142.638 146.16974330357144 142.638L 143.63159598214287 142.638Q 131.63159598214287 142.638 131.63159598214287 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 131.63159598214287 154.638L 131.63159598214287 209.0208Q 131.63159598214287 221.0208 143.63159598214287 221.0208L 146.16974330357144 221.0208Q 158.16974330357144 221.0208 158.16974330357144 209.0208L 158.16974330357144 209.0208L 158.16974330357144 154.638Q 158.16974330357144 142.638 146.16974330357144 142.638L 143.63159598214287 142.638Q 131.63159598214287 142.638 131.63159598214287 154.638z" pathFrom="M 131.63159598214287 154.638L 131.63159598214287 154.638L 158.16974330357144 154.638L 158.16974330357144 154.638L 158.16974330357144 154.638L 158.16974330357144 154.638L 158.16974330357144 154.638L 131.63159598214287 154.638" cy="197.0208" cx="227.2320424107143" j="1" val="-18" barHeight="-78.38279999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1502" d="M 230.2320424107143 154.638L 230.2320424107143 169.8294Q 230.2320424107143 181.8294 242.2320424107143 181.8294L 244.7701897321429 181.8294Q 256.7701897321429 181.8294 256.7701897321429 169.8294L 256.7701897321429 169.8294L 256.7701897321429 154.638Q 256.7701897321429 142.638 244.7701897321429 142.638L 242.2320424107143 142.638Q 230.2320424107143 142.638 230.2320424107143 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 230.2320424107143 154.638L 230.2320424107143 169.8294Q 230.2320424107143 181.8294 242.2320424107143 181.8294L 244.7701897321429 181.8294Q 256.7701897321429 181.8294 256.7701897321429 169.8294L 256.7701897321429 169.8294L 256.7701897321429 154.638Q 256.7701897321429 142.638 244.7701897321429 142.638L 242.2320424107143 142.638Q 230.2320424107143 142.638 230.2320424107143 154.638z" pathFrom="M 230.2320424107143 154.638L 230.2320424107143 154.638L 256.7701897321429 154.638L 256.7701897321429 154.638L 256.7701897321429 154.638L 256.7701897321429 154.638L 256.7701897321429 154.638L 230.2320424107143 154.638" cy="157.8294" cx="325.83248883928576" j="2" val="-9" barHeight="-39.191399999999994" barWidth="32.538147321428575"></path><path id="SvgjsPath1503" d="M 328.83248883928576 154.638L 328.83248883928576 191.6024Q 328.83248883928576 203.6024 340.83248883928576 203.6024L 343.37063616071435 203.6024Q 355.37063616071435 203.6024 355.37063616071435 191.6024L 355.37063616071435 191.6024L 355.37063616071435 154.638Q 355.37063616071435 142.638 343.37063616071435 142.638L 340.83248883928576 142.638Q 328.83248883928576 142.638 328.83248883928576 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 328.83248883928576 154.638L 328.83248883928576 191.6024Q 328.83248883928576 203.6024 340.83248883928576 203.6024L 343.37063616071435 203.6024Q 355.37063616071435 203.6024 355.37063616071435 191.6024L 355.37063616071435 191.6024L 355.37063616071435 154.638Q 355.37063616071435 142.638 343.37063616071435 142.638L 340.83248883928576 142.638Q 328.83248883928576 142.638 328.83248883928576 154.638z" pathFrom="M 328.83248883928576 154.638L 328.83248883928576 154.638L 355.37063616071435 154.638L 355.37063616071435 154.638L 355.37063616071435 154.638L 355.37063616071435 154.638L 355.37063616071435 154.638L 328.83248883928576 154.638" cy="179.6024" cx="424.4329352678572" j="3" val="-14" barHeight="-60.96439999999999" barWidth="32.538147321428575"></path><path id="SvgjsPath1504" d="M 427.4329352678572 154.638L 427.4329352678572 152.411Q 427.4329352678572 164.411 439.4329352678572 164.411L 441.9710825892858 164.411Q 453.9710825892858 164.411 453.9710825892858 152.411L 453.9710825892858 152.411L 453.9710825892858 154.638Q 453.9710825892858 142.638 441.9710825892858 142.638L 439.4329352678572 142.638Q 427.4329352678572 142.638 427.4329352678572 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 427.4329352678572 154.638L 427.4329352678572 152.411Q 427.4329352678572 164.411 439.4329352678572 164.411L 441.9710825892858 164.411Q 453.9710825892858 164.411 453.9710825892858 152.411L 453.9710825892858 152.411L 453.9710825892858 154.638Q 453.9710825892858 142.638 441.9710825892858 142.638L 439.4329352678572 142.638Q 427.4329352678572 142.638 427.4329352678572 154.638z" pathFrom="M 427.4329352678572 154.638L 427.4329352678572 154.638L 453.9710825892858 154.638L 453.9710825892858 154.638L 453.9710825892858 154.638L 453.9710825892858 154.638L 453.9710825892858 154.638L 427.4329352678572 154.638" cy="140.411" cx="523.0333816964286" j="4" val="-5" barHeight="-21.772999999999996" barWidth="32.538147321428575"></path><path id="SvgjsPath1505" d="M 526.0333816964286 154.638L 526.0333816964286 204.6662Q 526.0333816964286 216.6662 538.0333816964286 216.6662L 540.5715290178572 216.6662Q 552.5715290178572 216.6662 552.5715290178572 204.6662L 552.5715290178572 204.6662L 552.5715290178572 154.638Q 552.5715290178572 142.638 540.5715290178572 142.638L 538.0333816964286 142.638Q 526.0333816964286 142.638 526.0333816964286 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 526.0333816964286 154.638L 526.0333816964286 204.6662Q 526.0333816964286 216.6662 538.0333816964286 216.6662L 540.5715290178572 216.6662Q 552.5715290178572 216.6662 552.5715290178572 204.6662L 552.5715290178572 204.6662L 552.5715290178572 154.638Q 552.5715290178572 142.638 540.5715290178572 142.638L 538.0333816964286 142.638Q 526.0333816964286 142.638 526.0333816964286 154.638z" pathFrom="M 526.0333816964286 154.638L 526.0333816964286 154.638L 552.5715290178572 154.638L 552.5715290178572 154.638L 552.5715290178572 154.638L 552.5715290178572 154.638L 552.5715290178572 154.638L 526.0333816964286 154.638" cy="192.6662" cx="621.633828125" j="5" val="-17" barHeight="-74.0282" barWidth="32.538147321428575"></path><path id="SvgjsPath1506" d="M 624.633828125 154.638L 624.633828125 195.957Q 624.633828125 207.957 636.633828125 207.957L 639.1719754464286 207.957Q 651.1719754464286 207.957 651.1719754464286 195.957L 651.1719754464286 195.957L 651.1719754464286 154.638Q 651.1719754464286 142.638 639.1719754464286 142.638L 636.633828125 142.638Q 624.633828125 142.638 624.633828125 154.638z" fill="rgba(3,195,236,0.85)" fill-opacity="1" stroke="#2b2c40" stroke-opacity="1" stroke-linecap="round" stroke-width="6" stroke-dasharray="0" class="apexcharts-bar-area" index="1" clip-path="url(#gridRectMask2106eufw)" pathTo="M 624.633828125 154.638L 624.633828125 195.957Q 624.633828125 207.957 636.633828125 207.957L 639.1719754464286 207.957Q 651.1719754464286 207.957 651.1719754464286 195.957L 651.1719754464286 195.957L 651.1719754464286 154.638Q 651.1719754464286 142.638 639.1719754464286 142.638L 636.633828125 142.638Q 624.633828125 142.638 624.633828125 154.638z" pathFrom="M 624.633828125 154.638L 624.633828125 154.638L 651.1719754464286 154.638L 651.1719754464286 154.638L 651.1719754464286 154.638L 651.1719754464286 154.638L 651.1719754464286 154.638L 624.633828125 154.638" cy="183.957" cx="720.2342745535715" j="6" val="-15" barHeight="-65.31899999999999" barWidth="32.538147321428575"></path></g><g id="SvgjsG1490" class="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1499" class="apexcharts-datalabels" data:realIndex="1"></g></g><line id="SvgjsLine1555" x1="0" y1="0" x2="690.203125" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1556" x1="0" y1="0" x2="690.203125" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1557" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1558" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1559" class="apexcharts-point-annotations"></g></g><g id="SvgjsG1530" class="apexcharts-yaxis" rel="0" transform="translate(15.796875, 0)"><g id="SvgjsG1531" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1532" font-family="Helvetica, Arial, sans-serif" x="20" y="52.5" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1533">30</tspan><title>30</title></text><text id="SvgjsText1534" font-family="Helvetica, Arial, sans-serif" x="20" y="96.04599999999999" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1535">20</tspan><title>20</title></text><text id="SvgjsText1536" font-family="Helvetica, Arial, sans-serif" x="20" y="139.59199999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1537">10</tspan><title>10</title></text><text id="SvgjsText1538" font-family="Helvetica, Arial, sans-serif" x="20" y="183.13799999999998" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1539">0</tspan><title>0</title></text><text id="SvgjsText1540" font-family="Helvetica, Arial, sans-serif" x="20" y="226.68399999999997" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1541">-10</tspan><title>-10</title></text><text id="SvgjsText1542" font-family="Helvetica, Arial, sans-serif" x="20" y="270.22999999999996" text-anchor="end" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1543">-20</tspan><title>-20</title></text></g></g><g id="SvgjsG1478" class="apexcharts-annotations"></g></svg><div class="apexcharts-tooltip apexcharts-theme-light" style="left: 195.466px; top: 198.011px;"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">Feb</div><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgba(3, 195, 236, 0.85);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">2020: </span><span class="apexcharts-tooltip-text-y-value">-18</span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 2; display: none;"><span class="apexcharts-tooltip-marker" style="background-color: rgba(3, 195, 236, 0.85);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label">2020: </span><span class="apexcharts-tooltip-text-y-value">-18</span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
      <div class="resize-triggers"><div class="expand-trigger"><div style="width: 781px; height: 377px;"></div></div><div class="contract-trigger"></div></div></div>
      <div class="col-md-4">
        <div class="card-body">
          <div class="text-center">
            <div class="dropdown">
              <button class="btn btn-sm btn-label-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                2022
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                <a class="dropdown-item" href="javascript:void(0);">2021</a>
                <a class="dropdown-item" href="javascript:void(0);">2020</a>
                <a class="dropdown-item" href="javascript:void(0);">2019</a>
              </div>
            </div>
          </div>
        </div>
        <div id="growthChart" style="min-height: 154.875px;"><div id="apexcharts8khbqbkr" class="apexcharts-canvas apexcharts8khbqbkr apexcharts-theme-light" style="width: 390px; height: 154.875px;"><svg id="SvgjsSvg1560" width="390" height="154.875" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1562" class="apexcharts-inner apexcharts-graphical" transform="translate(88, -25)"><defs id="SvgjsDefs1561"><clipPath id="gridRectMask8khbqbkr"><rect id="SvgjsRect1564" width="222" height="285" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask8khbqbkr"></clipPath><clipPath id="nonForecastMask8khbqbkr"></clipPath><clipPath id="gridRectMarkerMask8khbqbkr"><rect id="SvgjsRect1565" width="220" height="287" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1570" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1571" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3"></stop><stop id="SvgjsStop1572" stop-opacity="0.6" stop-color="rgba(43,44,64,0.6)" offset="0.7"></stop><stop id="SvgjsStop1573" stop-opacity="0.6" stop-color="rgba(43,44,64,0.6)" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1581" x1="1" y1="0" x2="0" y2="1"><stop id="SvgjsStop1582" stop-opacity="1" stop-color="rgba(105,108,255,1)" offset="0.3"></stop><stop id="SvgjsStop1583" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="0.7"></stop><stop id="SvgjsStop1584" stop-opacity="0.6" stop-color="rgba(105,108,255,0.6)" offset="1"></stop></linearGradient></defs><g id="SvgjsG1566" class="apexcharts-radialbar"><g id="SvgjsG1567"><g id="SvgjsG1568" class="apexcharts-tracks"><g id="SvgjsG1569" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656" fill="none" fill-opacity="1" stroke="rgba(43,44,64,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 142.16493902439026 167.17541022773656"></path></g></g><g id="SvgjsG1575"><g id="SvgjsG1580" class="apexcharts-series apexcharts-radial-series" seriesName="Growth" rel="1" data:realIndex="0"><path id="SvgjsPath1585" d="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481" fill="none" fill-opacity="0.85" stroke="url(#SvgjsLinearGradient1581)" stroke-opacity="1" stroke-linecap="butt" stroke-width="17.357317073170734" stroke-dasharray="5" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="234" data:value="78" index="0" j="0" data:pathOrig="M 73.83506097560974 167.17541022773656 A 68.32987804878049 68.32987804878049 0 1 1 175.95555982735613 100.85758285229481"></path></g><circle id="SvgjsCircle1576" r="54.65121951219512" cx="108" cy="108" class="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1577" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText1578" font-family="Public Sans" x="108" y="123" text-anchor="middle" dominant-baseline="auto" font-size="15px" font-weight="500" fill="#a3a4cc" class="apexcharts-text apexcharts-datalabel-label" style="font-family: &quot;Public Sans&quot;;">Growth</text><text id="SvgjsText1579" font-family="Public Sans" x="108" y="99" text-anchor="middle" dominant-baseline="auto" font-size="22px" font-weight="500" fill="#cbcbe2" class="apexcharts-text apexcharts-datalabel-value" style="font-family: &quot;Public Sans&quot;;">78%</text></g></g></g></g><line id="SvgjsLine1586" x1="0" y1="0" x2="216" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1587" x1="0" y1="0" x2="216" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1563" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div>
        <div class="text-center fw-medium pt-3 mb-2">62% Company Growth</div>

        <div class="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
          <div class="d-flex">
            <div class="me-2">
              <span class="badge bg-label-primary p-2"><i class="bx bx-dollar text-primary"></i></span>
            </div>
            <div class="d-flex flex-column">
              <small>2022</small>
              <h6 class="mb-0">$32.5k</h6>
            </div>
          </div>
          <div class="d-flex">
            <div class="me-2">
              <span class="badge bg-label-info p-2"><i class="bx bx-wallet text-info"></i></span>
            </div>
            <div class="d-flex flex-column">
              <small>2021</small>
              <h6 class="mb-0">$41.2k</h6>
            </div>
          </div>
        </div>
      <div class="resize-triggers"><div class="expand-trigger"><div style="width: 391px; height: 377px;"></div></div><div class="contract-trigger"></div></div></div>
    </div>
  </div>
</div>
<!--/ Total Revenue -->
<div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
  <div class="row">
    <div class="col-6 mb-4">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex align-items-start justify-content-between">
            <div class="avatar flex-shrink-0">
              <img src="../../assets/img/icons/unicons/paypal.png" alt="Credit Card" class="rounded">
            </div>
            <div class="dropdown">
              <button class="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-dots-vertical-rounded"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                <a class="dropdown-item" href="javascript:void(0);">View More</a>
                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
              </div>
            </div>
          </div>
          <span class="d-block mb-1">Payments</span>
          <h3 class="card-title text-nowrap mb-2">$2,456</h3>
          <small class="text-danger fw-medium"><i class="bx bx-down-arrow-alt"></i> -14.82%</small>
        </div>
      </div>
    </div>
    <div class="col-6 mb-4">
      <div class="card">
        <div class="card-body pb-2" style="position: relative;">
          <span class="d-block fw-medium mb-1">Revenue</span>
          <h3 class="card-title mb-1">425k</h3>
          <div id="revenueChart" style="min-height: 95px;"><div id="apexchartski12bo19" class="apexcharts-canvas apexchartski12bo19 apexcharts-theme-light" style="width: 225px; height: 80px;"><svg id="SvgjsSvg1588" width="225" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1590" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 10)"><defs id="SvgjsDefs1589"><linearGradient id="SvgjsLinearGradient1593" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1594" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop1595" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop1596" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMaskki12bo19"><rect id="SvgjsRect1598" width="229" height="42.73" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskki12bo19"></clipPath><clipPath id="nonForecastMaskki12bo19"></clipPath><clipPath id="gridRectMarkerMaskki12bo19"><rect id="SvgjsRect1599" width="229" height="46.73" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><rect id="SvgjsRect1597" width="24.107142857142858" height="42.73" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke-dasharray="3" fill="url(#SvgjsLinearGradient1593)" class="apexcharts-xcrosshairs" y2="42.73" filter="none" fill-opacity="0.9"></rect><g id="SvgjsG1618" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1619" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1621" font-family="Helvetica, Arial, sans-serif" x="16.071428571428573" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1622">M</tspan><title>M</title></text><text id="SvgjsText1624" font-family="Helvetica, Arial, sans-serif" x="48.21428571428572" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1625">T</tspan><title>T</title></text><text id="SvgjsText1627" font-family="Helvetica, Arial, sans-serif" x="80.35714285714288" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1628">W</tspan><title>W</title></text><text id="SvgjsText1630" font-family="Helvetica, Arial, sans-serif" x="112.50000000000001" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1631">T</tspan><title>T</title></text><text id="SvgjsText1633" font-family="Helvetica, Arial, sans-serif" x="144.64285714285714" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1634">F</tspan><title>F</title></text><text id="SvgjsText1636" font-family="Helvetica, Arial, sans-serif" x="176.78571428571428" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1637">S</tspan><title>S</title></text><text id="SvgjsText1639" font-family="Helvetica, Arial, sans-serif" x="208.92857142857142" y="71.72999999999999" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1640">S</tspan><title>S</title></text></g></g><g id="SvgjsG1643" class="apexcharts-grid"><g id="SvgjsG1644" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1646" x1="0" y1="0" x2="225" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1647" x1="0" y1="8.546" x2="225" y2="8.546" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1648" x1="0" y1="17.092" x2="225" y2="17.092" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1649" x1="0" y1="25.637999999999998" x2="225" y2="25.637999999999998" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1650" x1="0" y1="34.184" x2="225" y2="34.184" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1651" x1="0" y1="42.73" x2="225" y2="42.73" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1645" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1653" x1="0" y1="42.73" x2="225" y2="42.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1652" x1="0" y1="1" x2="0" y2="42.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1600" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1601" class="apexcharts-series" rel="1" seriesName="seriesx1" data:realIndex="0"><path id="SvgjsPath1605" d="M 4.017857142857144 40.73L 4.017857142857144 27.637999999999998Q 4.017857142857144 25.637999999999998 6.017857142857144 25.637999999999998L 26.125 25.637999999999998Q 28.125 25.637999999999998 28.125 27.637999999999998L 28.125 27.637999999999998L 28.125 40.73Q 28.125 42.73 26.125 42.73L 6.017857142857144 42.73Q 4.017857142857144 42.73 4.017857142857144 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 4.017857142857144 40.73L 4.017857142857144 27.637999999999998Q 4.017857142857144 25.637999999999998 6.017857142857144 25.637999999999998L 26.125 25.637999999999998Q 28.125 25.637999999999998 28.125 27.637999999999998L 28.125 27.637999999999998L 28.125 40.73Q 28.125 42.73 26.125 42.73L 6.017857142857144 42.73Q 4.017857142857144 42.73 4.017857142857144 40.73z" pathFrom="M 4.017857142857144 40.73L 4.017857142857144 40.73L 28.125 40.73L 28.125 40.73L 28.125 40.73L 28.125 40.73L 28.125 40.73L 4.017857142857144 40.73" cy="25.637999999999998" cx="36.16071428571429" j="0" val="40" barHeight="17.092" barWidth="24.107142857142858"></path><path id="SvgjsPath1607" d="M 36.16071428571429 40.73L 36.16071428571429 4.136499999999998Q 36.16071428571429 2.136499999999998 38.16071428571429 2.136499999999998L 58.26785714285715 2.136499999999998Q 60.26785714285715 2.136499999999998 60.26785714285715 4.136499999999998L 60.26785714285715 4.136499999999998L 60.26785714285715 40.73Q 60.26785714285715 42.73 58.26785714285715 42.73L 38.16071428571429 42.73Q 36.16071428571429 42.73 36.16071428571429 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 36.16071428571429 40.73L 36.16071428571429 4.136499999999998Q 36.16071428571429 2.136499999999998 38.16071428571429 2.136499999999998L 58.26785714285715 2.136499999999998Q 60.26785714285715 2.136499999999998 60.26785714285715 4.136499999999998L 60.26785714285715 4.136499999999998L 60.26785714285715 40.73Q 60.26785714285715 42.73 58.26785714285715 42.73L 38.16071428571429 42.73Q 36.16071428571429 42.73 36.16071428571429 40.73z" pathFrom="M 36.16071428571429 40.73L 36.16071428571429 40.73L 60.26785714285715 40.73L 60.26785714285715 40.73L 60.26785714285715 40.73L 60.26785714285715 40.73L 60.26785714285715 40.73L 36.16071428571429 40.73" cy="2.136499999999998" cx="68.30357142857144" j="1" val="95" barHeight="40.5935" barWidth="24.107142857142858"></path><path id="SvgjsPath1609" d="M 68.30357142857144 40.73L 68.30357142857144 19.092Q 68.30357142857144 17.092 70.30357142857144 17.092L 90.4107142857143 17.092Q 92.4107142857143 17.092 92.4107142857143 19.092L 92.4107142857143 19.092L 92.4107142857143 40.73Q 92.4107142857143 42.73 90.4107142857143 42.73L 70.30357142857144 42.73Q 68.30357142857144 42.73 68.30357142857144 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 68.30357142857144 40.73L 68.30357142857144 19.092Q 68.30357142857144 17.092 70.30357142857144 17.092L 90.4107142857143 17.092Q 92.4107142857143 17.092 92.4107142857143 19.092L 92.4107142857143 19.092L 92.4107142857143 40.73Q 92.4107142857143 42.73 90.4107142857143 42.73L 70.30357142857144 42.73Q 68.30357142857144 42.73 68.30357142857144 40.73z" pathFrom="M 68.30357142857144 40.73L 68.30357142857144 40.73L 92.4107142857143 40.73L 92.4107142857143 40.73L 92.4107142857143 40.73L 92.4107142857143 40.73L 92.4107142857143 40.73L 68.30357142857144 40.73" cy="17.092" cx="100.44642857142858" j="2" val="60" barHeight="25.637999999999998" barWidth="24.107142857142858"></path><path id="SvgjsPath1611" d="M 100.44642857142858 40.73L 100.44642857142858 25.5015Q 100.44642857142858 23.5015 102.44642857142858 23.5015L 122.55357142857144 23.5015Q 124.55357142857144 23.5015 124.55357142857144 25.5015L 124.55357142857144 25.5015L 124.55357142857144 40.73Q 124.55357142857144 42.73 122.55357142857144 42.73L 102.44642857142858 42.73Q 100.44642857142858 42.73 100.44642857142858 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 100.44642857142858 40.73L 100.44642857142858 25.5015Q 100.44642857142858 23.5015 102.44642857142858 23.5015L 122.55357142857144 23.5015Q 124.55357142857144 23.5015 124.55357142857144 25.5015L 124.55357142857144 25.5015L 124.55357142857144 40.73Q 124.55357142857144 42.73 122.55357142857144 42.73L 102.44642857142858 42.73Q 100.44642857142858 42.73 100.44642857142858 40.73z" pathFrom="M 100.44642857142858 40.73L 100.44642857142858 40.73L 124.55357142857144 40.73L 124.55357142857144 40.73L 124.55357142857144 40.73L 124.55357142857144 40.73L 124.55357142857144 40.73L 100.44642857142858 40.73" cy="23.5015" cx="132.58928571428572" j="3" val="45" barHeight="19.228499999999997" barWidth="24.107142857142858"></path><path id="SvgjsPath1613" d="M 132.58928571428572 40.73L 132.58928571428572 6.273000000000003Q 132.58928571428572 4.273000000000003 134.58928571428572 4.273000000000003L 154.69642857142858 4.273000000000003Q 156.69642857142858 4.273000000000003 156.69642857142858 6.273000000000003L 156.69642857142858 6.273000000000003L 156.69642857142858 40.73Q 156.69642857142858 42.73 154.69642857142858 42.73L 134.58928571428572 42.73Q 132.58928571428572 42.73 132.58928571428572 40.73z" fill="rgba(105,108,255,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 132.58928571428572 40.73L 132.58928571428572 6.273000000000003Q 132.58928571428572 4.273000000000003 134.58928571428572 4.273000000000003L 154.69642857142858 4.273000000000003Q 156.69642857142858 4.273000000000003 156.69642857142858 6.273000000000003L 156.69642857142858 6.273000000000003L 156.69642857142858 40.73Q 156.69642857142858 42.73 154.69642857142858 42.73L 134.58928571428572 42.73Q 132.58928571428572 42.73 132.58928571428572 40.73z" pathFrom="M 132.58928571428572 40.73L 132.58928571428572 40.73L 156.69642857142858 40.73L 156.69642857142858 40.73L 156.69642857142858 40.73L 156.69642857142858 40.73L 156.69642857142858 40.73L 132.58928571428572 40.73" cy="4.273000000000003" cx="164.73214285714286" j="4" val="90" barHeight="38.456999999999994" barWidth="24.107142857142858"></path><path id="SvgjsPath1615" d="M 164.73214285714286 40.73L 164.73214285714286 23.365Q 164.73214285714286 21.365 166.73214285714286 21.365L 186.83928571428572 21.365Q 188.83928571428572 21.365 188.83928571428572 23.365L 188.83928571428572 23.365L 188.83928571428572 40.73Q 188.83928571428572 42.73 186.83928571428572 42.73L 166.73214285714286 42.73Q 164.73214285714286 42.73 164.73214285714286 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 164.73214285714286 40.73L 164.73214285714286 23.365Q 164.73214285714286 21.365 166.73214285714286 21.365L 186.83928571428572 21.365Q 188.83928571428572 21.365 188.83928571428572 23.365L 188.83928571428572 23.365L 188.83928571428572 40.73Q 188.83928571428572 42.73 186.83928571428572 42.73L 166.73214285714286 42.73Q 164.73214285714286 42.73 164.73214285714286 40.73z" pathFrom="M 164.73214285714286 40.73L 164.73214285714286 40.73L 188.83928571428572 40.73L 188.83928571428572 40.73L 188.83928571428572 40.73L 188.83928571428572 40.73L 188.83928571428572 40.73L 164.73214285714286 40.73" cy="21.365" cx="196.875" j="5" val="50" barHeight="21.365" barWidth="24.107142857142858"></path><path id="SvgjsPath1617" d="M 196.875 40.73L 196.875 12.682499999999997Q 196.875 10.682499999999997 198.875 10.682499999999997L 218.98214285714286 10.682499999999997Q 220.98214285714286 10.682499999999997 220.98214285714286 12.682499999999997L 220.98214285714286 12.682499999999997L 220.98214285714286 40.73Q 220.98214285714286 42.73 218.98214285714286 42.73L 198.875 42.73Q 196.875 42.73 196.875 40.73z" fill="#666ee81a" fill-opacity="1" stroke-opacity="1" stroke-linecap="round" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMaskki12bo19)" pathTo="M 196.875 40.73L 196.875 12.682499999999997Q 196.875 10.682499999999997 198.875 10.682499999999997L 218.98214285714286 10.682499999999997Q 220.98214285714286 10.682499999999997 220.98214285714286 12.682499999999997L 220.98214285714286 12.682499999999997L 220.98214285714286 40.73Q 220.98214285714286 42.73 218.98214285714286 42.73L 198.875 42.73Q 196.875 42.73 196.875 40.73z" pathFrom="M 196.875 40.73L 196.875 40.73L 220.98214285714286 40.73L 220.98214285714286 40.73L 220.98214285714286 40.73L 220.98214285714286 40.73L 220.98214285714286 40.73L 196.875 40.73" cy="10.682499999999997" cx="229.01785714285714" j="6" val="75" barHeight="32.0475" barWidth="24.107142857142858"></path><g id="SvgjsG1603" class="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG1604" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1606" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1608" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1610" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1612" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1614" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1616" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG1602" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1654" x1="0" y1="0" x2="225" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1655" x1="0" y1="0" x2="225" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1656" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1657" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1658" class="apexcharts-point-annotations"></g></g><g id="SvgjsG1641" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)"><g id="SvgjsG1642" class="apexcharts-yaxis-texts-g"></g></g><g id="SvgjsG1591" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 40px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgba(102, 110, 232, 0.1);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
        <div class="resize-triggers"><div class="expand-trigger"><div style="width: 274px; height: 188px;"></div></div><div class="contract-trigger"></div></div></div>
      </div>
    </div>
    <!-- </div>
  <div class="row"> -->
    <div class="col-12 mb-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between flex-sm-row flex-column gap-3" style="position: relative;">
            <div class="d-flex flex-sm-column flex-row align-items-start justify-content-between">
              <div class="card-title">
                <h5 class="text-nowrap mb-2">Profile Report</h5>
                <span class="badge bg-label-warning rounded-pill">Year 2021</span>
              </div>
              <div class="mt-sm-auto">
                <small class="text-success text-nowrap fw-medium"><i class="bx bx-chevron-up"></i> 68.2%</small>
                <h3 class="mb-0">$84,686k</h3>
              </div>
            </div>
            <div id="profileReportChart" style="min-height: 80px;"><div id="apexcharts3cmjcj92" class="apexcharts-canvas apexcharts3cmjcj92 apexcharts-theme-light" style="width: 300px; height: 80px;"><svg id="SvgjsSvg1660" width="300" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1662" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1661"><clipPath id="gridRectMask3cmjcj92"><rect id="SvgjsRect1667" width="301" height="85" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask3cmjcj92"></clipPath><clipPath id="nonForecastMask3cmjcj92"></clipPath><clipPath id="gridRectMarkerMask3cmjcj92"><rect id="SvgjsRect1668" width="296" height="84" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><filter id="SvgjsFilter1674" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1675" flood-color="#ffab00" flood-opacity="0.15" result="SvgjsFeFlood1675Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1676" in="SvgjsFeFlood1675Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1676Out"></feComposite><feOffset id="SvgjsFeOffset1677" dx="5" dy="10" result="SvgjsFeOffset1677Out" in="SvgjsFeComposite1676Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1678" stdDeviation="3 " result="SvgjsFeGaussianBlur1678Out" in="SvgjsFeOffset1677Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1679" result="SvgjsFeMerge1679Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1680" in="SvgjsFeGaussianBlur1678Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1681" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1682" in="SourceGraphic" in2="SvgjsFeMerge1679Out" mode="normal" result="SvgjsFeBlend1682Out"></feBlend></filter></defs><line id="SvgjsLine1666" x1="0" y1="0" x2="0" y2="80" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="80" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1683" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1684" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1692" class="apexcharts-grid"><g id="SvgjsG1693" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1695" x1="0" y1="0" x2="292" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1696" x1="0" y1="20" x2="292" y2="20" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1697" x1="0" y1="40" x2="292" y2="40" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1698" x1="0" y1="60" x2="292" y2="60" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1699" x1="0" y1="80" x2="292" y2="80" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1694" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1701" x1="0" y1="80" x2="292" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1700" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1669" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1670" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1673" d="M 0 76C 20.44 76 37.96000000000001 12 58.400000000000006 12C 78.84 12 96.36000000000001 62 116.80000000000001 62C 137.24 62 154.76000000000002 22 175.20000000000002 22C 195.64000000000001 22 213.16000000000003 38 233.60000000000002 38C 254.04000000000002 38 271.56 6 292 6" fill="none" fill-opacity="1" stroke="rgba(255,171,0,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask3cmjcj92)" filter="url(#SvgjsFilter1674)" pathTo="M 0 76C 20.44 76 37.96000000000001 12 58.400000000000006 12C 78.84 12 96.36000000000001 62 116.80000000000001 62C 137.24 62 154.76000000000002 22 175.20000000000002 22C 195.64000000000001 22 213.16000000000003 38 233.60000000000002 38C 254.04000000000002 38 271.56 6 292 6" pathFrom="M -1 120L -1 120L 58.400000000000006 120L 116.80000000000001 120L 175.20000000000002 120L 233.60000000000002 120L 292 120"></path><g id="SvgjsG1671" class="apexcharts-series-markers-wrap" data:realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1707" r="0" cx="0" cy="0" class="apexcharts-marker wr56mtd4jl no-pointer-events" stroke="#ffffff" fill="#ffab00" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1672" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1702" x1="0" y1="0" x2="292" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1703" x1="0" y1="0" x2="292" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1704" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1705" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1706" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1665" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1691" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1663" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 40px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(255, 171, 0);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
          <div class="resize-triggers"><div class="expand-trigger"><div style="width: 525px; height: 117px;"></div></div><div class="contract-trigger"></div></div></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="row">
<!-- Order Statistics -->
<div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
  <div class="card h-100">
    <div class="card-header d-flex align-items-center justify-content-between pb-0">
      <div class="card-title mb-0">
        <h5 class="m-0 me-2">Order Statistics</h5>
        <small class="text-muted">42.82k Total Sales</small>
      </div>
      <div class="dropdown">
        <button class="btn p-0" type="button" id="orederStatistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bx bx-dots-vertical-rounded"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
          <a class="dropdown-item" href="javascript:void(0);">Select All</a>
          <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
          <a class="dropdown-item" href="javascript:void(0);">Share</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3" style="position: relative;">
        <div class="d-flex flex-column align-items-center gap-1">
          <h2 class="mb-2">8,258</h2>
          <span>Total Orders</span>
        </div>
        <div id="orderStatisticsChart" style="min-height: 137.55px;"><div id="apexchartsdwyutkmsh" class="apexcharts-canvas apexchartsdwyutkmsh apexcharts-theme-light" style="width: 130px; height: 137.55px;"><svg id="SvgjsSvg1708" width="130" height="137.55" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1710" class="apexcharts-inner apexcharts-graphical" transform="translate(-7, 0)"><defs id="SvgjsDefs1709"><clipPath id="gridRectMaskdwyutkmsh"><rect id="SvgjsRect1712" width="150" height="173" x="-4.5" y="-2.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskdwyutkmsh"></clipPath><clipPath id="nonForecastMaskdwyutkmsh"></clipPath><clipPath id="gridRectMarkerMaskdwyutkmsh"><rect id="SvgjsRect1713" width="145" height="172" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1714" class="apexcharts-pie"><g id="SvgjsG1715" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1716" r="44.835365853658544" cx="70.5" cy="70.5" fill="transparent"></circle><g id="SvgjsG1717" class="apexcharts-slices"><g id="SvgjsG1718" class="apexcharts-series apexcharts-pie-series" seriesName="Electronic" rel="1" data:realIndex="0"><path id="SvgjsPath1719" d="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" fill="rgba(105,108,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="153" data:startAngle="0" data:strokeWidth="5" data:value="85" data:pathOrig="M 70.5 10.71951219512195 A 59.78048780487805 59.78048780487805 0 0 1 97.63977353321047 123.7648046533095 L 90.85483014990785 110.44860348998213 A 44.835365853658544 44.835365853658544 0 0 0 70.5 25.664634146341456 L 70.5 10.71951219512195 z" stroke="#2b2c40"></path></g><g id="SvgjsG1720" class="apexcharts-series apexcharts-pie-series" seriesName="Sports" rel="2" data:realIndex="1"><path id="SvgjsPath1721" d="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" fill="rgba(133,146,163,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="27" data:startAngle="153" data:strokeWidth="5" data:value="15" data:pathOrig="M 97.63977353321047 123.7648046533095 A 59.78048780487805 59.78048780487805 0 0 1 70.5 130.28048780487805 L 70.5 115.33536585365854 A 44.835365853658544 44.835365853658544 0 0 0 90.85483014990785 110.44860348998213 L 97.63977353321047 123.7648046533095 z" stroke="#2b2c40"></path></g><g id="SvgjsG1722" class="apexcharts-series apexcharts-pie-series" seriesName="Decor" rel="3" data:realIndex="2"><path id="SvgjsPath1723" d="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" fill="rgba(3,195,236,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="90" data:startAngle="180" data:strokeWidth="5" data:value="50" data:pathOrig="M 70.5 130.28048780487805 A 59.78048780487805 59.78048780487805 0 0 1 10.71951219512195 70.50000000000001 L 25.664634146341456 70.5 A 44.835365853658544 44.835365853658544 0 0 0 70.5 115.33536585365854 L 70.5 130.28048780487805 z" stroke="#2b2c40"></path></g><g id="SvgjsG1724" class="apexcharts-series apexcharts-pie-series" seriesName="Fashion" rel="4" data:realIndex="3"><path id="SvgjsPath1725" d="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" fill="rgba(113,221,55,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="5" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-3" index="0" j="3" data:angle="90" data:startAngle="270" data:strokeWidth="5" data:value="50" data:pathOrig="M 10.71951219512195 70.50000000000001 A 59.78048780487805 59.78048780487805 0 0 1 70.48956633664653 10.719513105630845 L 70.4921747524849 25.664634829223125 A 44.835365853658544 44.835365853658544 0 0 0 25.664634146341456 70.5 L 10.71951219512195 70.50000000000001 z" stroke="#2b2c40"></path></g></g></g><g id="SvgjsG1726" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)"><text id="SvgjsText1727" font-family="Helvetica, Arial, sans-serif" x="70.5" y="90.5" text-anchor="middle" dominant-baseline="auto" font-size="0.8125rem" font-weight="400" fill="#a3a4cc" class="apexcharts-text apexcharts-datalabel-label" style="font-family: Helvetica, Arial, sans-serif;">Weekly</text><text id="SvgjsText1728" font-family="Public Sans" x="70.5" y="71.5" text-anchor="middle" dominant-baseline="auto" font-size="1.5rem" font-weight="400" fill="#cbcbe2" class="apexcharts-text apexcharts-datalabel-value" style="font-family: &quot;Public Sans&quot;;">38%</text></g></g><line id="SvgjsLine1729" x1="0" y1="0" x2="141" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1730" x1="0" y1="0" x2="141" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1711" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(105, 108, 255);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 2;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(133, 146, 163);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 3;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(3, 195, 236);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style="order: 4;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(113, 221, 55);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
      <div class="resize-triggers"><div class="expand-trigger"><div style="width: 525px; height: 139px;"></div></div><div class="contract-trigger"></div></div></div>
      <ul class="p-0 m-0">
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-mobile-alt"></i></span>
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <h6 class="mb-0">Electronic</h6>
              <small class="text-muted">Mobile, Earbuds, TV</small>
            </div>
            <div class="user-progress">
              <small class="fw-medium">82.5k</small>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <span class="avatar-initial rounded bg-label-success"><i class="bx bx-closet"></i></span>
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <h6 class="mb-0">Fashion</h6>
              <small class="text-muted">T-shirt, Jeans, Shoes</small>
            </div>
            <div class="user-progress">
              <small class="fw-medium">23.8k</small>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <span class="avatar-initial rounded bg-label-info"><i class="bx bx-home-alt"></i></span>
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <h6 class="mb-0">Decor</h6>
              <small class="text-muted">Fine Art, Dining</small>
            </div>
            <div class="user-progress">
              <small class="fw-medium">849k</small>
            </div>
          </div>
        </li>
        <li class="d-flex">
          <div class="avatar flex-shrink-0 me-3">
            <span class="avatar-initial rounded bg-label-secondary"><i class="bx bx-football"></i></span>
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <h6 class="mb-0">Sports</h6>
              <small class="text-muted">Football, Cricket Kit</small>
            </div>
            <div class="user-progress">
              <small class="fw-medium">99</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<!--/ Order Statistics -->

<!-- Expense Overview -->
<div class="col-md-6 col-lg-4 order-1 mb-4">
  <div class="card h-100">
    <div class="card-header">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-tabs-line-card-income" aria-controls="navs-tabs-line-card-income" aria-selected="true">Income</button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link" role="tab" aria-selected="false" tabindex="-1">Expenses</button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link" role="tab" aria-selected="false" tabindex="-1">Profit</button>
        </li>
      </ul>
    </div>
    <div class="card-body px-0">
      <div class="tab-content p-0">
        <div class="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel" style="position: relative;">
          <div class="d-flex p-4 pt-3">
            <div class="avatar flex-shrink-0 me-3">
              <img src="../../assets/img/icons/unicons/wallet.png" alt="User">
            </div>
            <div>
              <small class="text-muted d-block">Total Balance</small>
              <div class="d-flex align-items-center">
                <h6 class="mb-0 me-1">$459.10</h6>
                <small class="text-success fw-medium">
                  <i class="bx bx-chevron-up"></i>
                  42.9%
                </small>
              </div>
            </div>
          </div>
          <div id="incomeChart" style="min-height: 215px;"><div id="apexcharts3v9e7nauf" class="apexcharts-canvas apexcharts3v9e7nauf apexcharts-theme-light" style="width: 572px; height: 215px;"><svg id="SvgjsSvg1731" width="572" height="215" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1733" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 10)"><defs id="SvgjsDefs1732"><clipPath id="gridRectMask3v9e7nauf"><rect id="SvgjsRect1738" width="560.635009765625" height="175.73" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask3v9e7nauf"></clipPath><clipPath id="nonForecastMask3v9e7nauf"></clipPath><clipPath id="gridRectMarkerMask3v9e7nauf"><rect id="SvgjsRect1739" width="582.635009765625" height="201.73" x="-14" y="-14" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1759" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1760" stop-opacity="0.5" stop-color="rgba(105,108,255,0.5)" offset="0"></stop><stop id="SvgjsStop1761" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="0.95"></stop><stop id="SvgjsStop1762" stop-opacity="0.25" stop-color="rgba(195,196,255,0.25)" offset="1"></stop></linearGradient></defs><line id="SvgjsLine1737" x1="0" y1="0" x2="0" y2="173.73" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="173.73" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1765" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1766" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1768" font-family="Helvetica, Arial, sans-serif" x="0" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1769"></tspan><title></title></text><text id="SvgjsText1771" font-family="Helvetica, Arial, sans-serif" x="79.2335728236607" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1772">Jan</tspan><title>Jan</title></text><text id="SvgjsText1774" font-family="Helvetica, Arial, sans-serif" x="158.46714564732142" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1775">Feb</tspan><title>Feb</title></text><text id="SvgjsText1777" font-family="Helvetica, Arial, sans-serif" x="237.70071847098214" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1778">Mar</tspan><title>Mar</title></text><text id="SvgjsText1780" font-family="Helvetica, Arial, sans-serif" x="316.9342912946429" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1781">Apr</tspan><title>Apr</title></text><text id="SvgjsText1783" font-family="Helvetica, Arial, sans-serif" x="396.1678641183036" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1784">May</tspan><title>May</title></text><text id="SvgjsText1786" font-family="Helvetica, Arial, sans-serif" x="475.4014369419643" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1787">Jun</tspan><title>Jun</title></text><text id="SvgjsText1789" font-family="Helvetica, Arial, sans-serif" x="554.6350097656249" y="202.73" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#7071a4" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1790">Jul</tspan><title>Jul</title></text></g></g><g id="SvgjsG1793" class="apexcharts-grid"><g id="SvgjsG1794" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1796" x1="0" y1="0" x2="554.635009765625" y2="0" stroke="#444564" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1797" x1="0" y1="43.4325" x2="554.635009765625" y2="43.4325" stroke="#444564" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1798" x1="0" y1="86.865" x2="554.635009765625" y2="86.865" stroke="#444564" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1799" x1="0" y1="130.29749999999999" x2="554.635009765625" y2="130.29749999999999" stroke="#444564" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1800" x1="0" y1="173.73" x2="554.635009765625" y2="173.73" stroke="#444564" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1795" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1802" x1="0" y1="173.73" x2="554.635009765625" y2="173.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1801" x1="0" y1="1" x2="0" y2="173.73" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1740" class="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1741" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1763" d="M 0 173.73L 0 112.92450000000001C 27.731750488281246 112.92450000000001 51.50182233537946 125.95425 79.23357282366071 125.95425C 106.96532331194196 125.95425 130.73539515904017 86.86500000000001 158.46714564732142 86.86500000000001C 186.19889613560267 86.86500000000001 209.9689679827009 121.611 237.70071847098214 121.611C 265.43246895926336 121.611 289.2025408063616 34.74600000000001 316.93429129464283 34.74600000000001C 344.6660417829241 34.74600000000001 368.4361136300223 104.238 396.16786411830356 104.238C 423.8996146065848 104.238 447.669686453683 65.14875 475.4014369419643 65.14875C 503.1331874302455 65.14875 526.9032592773438 91.20825 554.635009765625 91.20825C 554.635009765625 91.20825 554.635009765625 91.20825 554.635009765625 173.73M 554.635009765625 91.20825z" fill="url(#SvgjsLinearGradient1759)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMask3v9e7nauf)" pathTo="M 0 173.73L 0 112.92450000000001C 27.731750488281246 112.92450000000001 51.50182233537946 125.95425 79.23357282366071 125.95425C 106.96532331194196 125.95425 130.73539515904017 86.86500000000001 158.46714564732142 86.86500000000001C 186.19889613560267 86.86500000000001 209.9689679827009 121.611 237.70071847098214 121.611C 265.43246895926336 121.611 289.2025408063616 34.74600000000001 316.93429129464283 34.74600000000001C 344.6660417829241 34.74600000000001 368.4361136300223 104.238 396.16786411830356 104.238C 423.8996146065848 104.238 447.669686453683 65.14875 475.4014369419643 65.14875C 503.1331874302455 65.14875 526.9032592773438 91.20825 554.635009765625 91.20825C 554.635009765625 91.20825 554.635009765625 91.20825 554.635009765625 173.73M 554.635009765625 91.20825z" pathFrom="M -1 217.1625L -1 217.1625L 79.23357282366071 217.1625L 158.46714564732142 217.1625L 237.70071847098214 217.1625L 316.93429129464283 217.1625L 396.16786411830356 217.1625L 475.4014369419643 217.1625L 554.635009765625 217.1625"></path><path id="SvgjsPath1764" d="M 0 112.92450000000001C 27.731750488281246 112.92450000000001 51.50182233537946 125.95425 79.23357282366071 125.95425C 106.96532331194196 125.95425 130.73539515904017 86.86500000000001 158.46714564732142 86.86500000000001C 186.19889613560267 86.86500000000001 209.9689679827009 121.611 237.70071847098214 121.611C 265.43246895926336 121.611 289.2025408063616 34.74600000000001 316.93429129464283 34.74600000000001C 344.6660417829241 34.74600000000001 368.4361136300223 104.238 396.16786411830356 104.238C 423.8996146065848 104.238 447.669686453683 65.14875 475.4014369419643 65.14875C 503.1331874302455 65.14875 526.9032592773438 91.20825 554.635009765625 91.20825" fill="none" fill-opacity="1" stroke="#696cff" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-area" index="0" clip-path="url(#gridRectMask3v9e7nauf)" pathTo="M 0 112.92450000000001C 27.731750488281246 112.92450000000001 51.50182233537946 125.95425 79.23357282366071 125.95425C 106.96532331194196 125.95425 130.73539515904017 86.86500000000001 158.46714564732142 86.86500000000001C 186.19889613560267 86.86500000000001 209.9689679827009 121.611 237.70071847098214 121.611C 265.43246895926336 121.611 289.2025408063616 34.74600000000001 316.93429129464283 34.74600000000001C 344.6660417829241 34.74600000000001 368.4361136300223 104.238 396.16786411830356 104.238C 423.8996146065848 104.238 447.669686453683 65.14875 475.4014369419643 65.14875C 503.1331874302455 65.14875 526.9032592773438 91.20825 554.635009765625 91.20825" pathFrom="M -1 217.1625L -1 217.1625L 79.23357282366071 217.1625L 158.46714564732142 217.1625L 237.70071847098214 217.1625L 316.93429129464283 217.1625L 396.16786411830356 217.1625L 475.4014369419643 217.1625L 554.635009765625 217.1625"></path><g id="SvgjsG1742" class="apexcharts-series-markers-wrap" data:realIndex="0"><g id="SvgjsG1744" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1745" r="6" cx="0" cy="112.92450000000001" class="apexcharts-marker no-pointer-events wee1zlm7j" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="0" j="0" index="0" default-marker-size="6"></circle><circle id="SvgjsCircle1746" r="6" cx="79.23357282366071" cy="125.95425" class="apexcharts-marker no-pointer-events wdwj9bffdh" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="1" j="1" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1747" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1748" r="6" cx="158.46714564732142" cy="86.86500000000001" class="apexcharts-marker no-pointer-events wvdb4jkbg" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="2" j="2" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1749" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1750" r="6" cx="237.70071847098214" cy="121.611" class="apexcharts-marker no-pointer-events w0n0ci8s9" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="3" j="3" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1751" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1752" r="6" cx="316.93429129464283" cy="34.74600000000001" class="apexcharts-marker no-pointer-events wey7tsgop" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="4" j="4" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1753" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1754" r="6" cx="396.16786411830356" cy="104.238" class="apexcharts-marker no-pointer-events wi6yi5h9e" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="5" j="5" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1755" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1756" r="6" cx="475.4014369419643" cy="65.14875" class="apexcharts-marker no-pointer-events wne5ewyd4" stroke="transparent" fill="transparent" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="6" j="6" index="0" default-marker-size="6"></circle></g><g id="SvgjsG1757" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMask3v9e7nauf)"><circle id="SvgjsCircle1758" r="6" cx="554.635009765625" cy="91.20825" class="apexcharts-marker no-pointer-events w3xlgxbej" stroke="#696cff" fill="#ffffff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" rel="7" j="7" index="0" default-marker-size="6"></circle></g></g></g><g id="SvgjsG1743" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1803" x1="0" y1="0" x2="554.635009765625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1804" x1="0" y1="0" x2="554.635009765625" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1805" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1806" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1807" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1808" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1809" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g><rect id="SvgjsRect1736" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1791" class="apexcharts-yaxis" rel="0" transform="translate(-8, 0)"><g id="SvgjsG1792" class="apexcharts-yaxis-texts-g"></g></g><g id="SvgjsG1734" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 107.5px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(105, 108, 255);"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div class="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
          <div class="d-flex justify-content-center pt-4 gap-2">
            <div class="flex-shrink-0" style="position: relative;">
              <div id="expensesOfWeek" style="min-height: 57.7px;"><div id="apexcharts50d30mm2" class="apexcharts-canvas apexcharts50d30mm2 apexcharts-theme-light" style="width: 60px; height: 57.7px;"><svg id="SvgjsSvg1810" width="60" height="57.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1812" class="apexcharts-inner apexcharts-graphical" transform="translate(-10, -10)"><defs id="SvgjsDefs1811"><clipPath id="gridRectMask50d30mm2"><rect id="SvgjsRect1814" width="86" height="87" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask50d30mm2"></clipPath><clipPath id="nonForecastMask50d30mm2"></clipPath><clipPath id="gridRectMarkerMask50d30mm2"><rect id="SvgjsRect1815" width="84" height="89" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1816" class="apexcharts-radialbar"><g id="SvgjsG1817"><g id="SvgjsG1818" class="apexcharts-tracks"><g id="SvgjsG1819" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247" fill="none" fill-opacity="1" stroke="rgba(68,69,100,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2.0408536585365864" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 39.99617740968999 18.098171065291247"></path></g></g><g id="SvgjsG1821"><g id="SvgjsG1825" class="apexcharts-series apexcharts-radial-series" seriesName="seriesx1" rel="1" data:realIndex="0"><path id="SvgjsPath1826" d="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095" fill="none" fill-opacity="0.85" stroke="rgba(105,108,255,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="4.081707317073173" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="234" data:value="65" index="0" j="0" data:pathOrig="M 40 18.098170731707313 A 21.901829268292687 21.901829268292687 0 1 1 22.2810479140526 52.873572242130095"></path></g><circle id="SvgjsCircle1822" r="18.881402439024395" cx="40" cy="40" class="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1823" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText1824" font-family="Helvetica, Arial, sans-serif" x="40" y="45" text-anchor="middle" dominant-baseline="auto" font-size="13px" font-weight="400" fill="#697a8d" class="apexcharts-text apexcharts-datalabel-value" style="font-family: Helvetica, Arial, sans-serif;">$65</text></g></g></g></g><line id="SvgjsLine1827" x1="0" y1="0" x2="80" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1828" x1="0" y1="0" x2="80" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1813" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div>
            <div class="resize-triggers"><div class="expand-trigger"><div style="width: 61px; height: 59px;"></div></div><div class="contract-trigger"></div></div></div>
            <div>
              <p class="mb-n1 mt-1">Expenses This Week</p>
              <small class="text-muted">$39 less than last week</small>
            </div>
          </div>
        <div class="resize-triggers"><div class="expand-trigger"><div style="width: 573px; height: 377px;"></div></div><div class="contract-trigger"></div></div></div>
      </div>
    </div>
  </div>
</div>
<!--/ Expense Overview -->

<!-- Transactions -->
<div class="col-md-6 col-lg-4 order-2 mb-4">
  <div class="card h-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="card-title m-0 me-2">Transactions</h5>
      <div class="dropdown">
        <button class="btn p-0" type="button" id="transactionID" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bx bx-dots-vertical-rounded"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
          <a class="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
          <a class="dropdown-item" href="javascript:void(0);">Last Month</a>
          <a class="dropdown-item" href="javascript:void(0);">Last Year</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <ul class="p-0 m-0">
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/paypal.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Paypal</small>
              <h6 class="mb-0">Send money</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">+82.6</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/wallet.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Wallet</small>
              <h6 class="mb-0">Mac'D</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">+270.69</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/chart.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Transfer</small>
              <h6 class="mb-0">Refund</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">+637.91</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/cc-success.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Credit Card</small>
              <h6 class="mb-0">Ordered Food</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">-838.71</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
        <li class="d-flex mb-4 pb-1">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/wallet.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Wallet</small>
              <h6 class="mb-0">Starbucks</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">+203.33</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
        <li class="d-flex">
          <div class="avatar flex-shrink-0 me-3">
            <img src="../../assets/img/icons/unicons/cc-warning.png" alt="User" class="rounded">
          </div>
          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
            <div class="me-2">
              <small class="text-muted d-block mb-1">Mastercard</small>
              <h6 class="mb-0">Ordered Food</h6>
            </div>
            <div class="user-progress d-flex align-items-center gap-1">
              <h6 class="mb-0">-92.45</h6> <span class="text-muted">USD</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<!--/ Transactions -->
<!-- Activity Timeline -->
<div class="col-md-12 col-lg-6 order-4 order-lg-3 ">
  <div class="card">
    <div class="card-header d-flex align-items-center justify-content-between">
      <h5 class="card-title m-0 me-2">Activity Timeline</h5>
      <div class="dropdown">
        <button class="btn p-0" type="button" id="timelineWapper" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="bx bx-dots-vertical-rounded"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="timelineWapper">
          <a class="dropdown-item" href="javascript:void(0);">Select All</a>
          <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
          <a class="dropdown-item" href="javascript:void(0);">Share</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <!-- Activity Timeline -->
      <ul class="timeline">
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point-wrapper"><span class="timeline-point timeline-point-primary"></span></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">12 Invoices have been paid</h6>
              <small class="text-muted">12 min ago</small>
            </div>
            <p class="mb-2">Invoices have been paid to the company</p>
            <div class="d-flex">
              <a href="javascript:void(0)" class="d-flex align-items-center me-3">
                <img src="../../assets/img/icons/misc/pdf.png" alt="PDF image" width="23" class="me-2">
                <h6 class="mb-0">invoices.pdf</h6>
              </a>
            </div>
          </div>
        </li>
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point-wrapper"><span class="timeline-point timeline-point-warning"></span></span>
          <div class="timeline-event">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">Client Meeting</h6>
              <small class="text-muted">45 min ago</small>
            </div>
            <p class="mb-2">Project meeting with john @10:15am</p>
            <div class="d-flex flex-wrap">
              <div class="avatar me-3">
                <img src="../../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle">
              </div>
              <div>
                <h6 class="mb-0">Lester McCarthy (Client)</h6>
                <span>CEO of ThemeSelection</span>
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-item timeline-item-transparent">
          <span class="timeline-point-wrapper"><span class="timeline-point timeline-point-info"></span></span>
          <div class="timeline-event pb-0">
            <div class="timeline-header mb-1">
              <h6 class="mb-0">Create a new project for client</h6>
              <small class="text-muted">2 Day Ago</small>
            </div>
            <p class="mb-2">5 team members in a project</p>
            <div class="d-flex align-items-center avatar-group">
              <div class="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Vinnie Mostowy" data-bs-original-title="Vinnie Mostowy">
                <img src="../../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
              </div>
              <div class="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Marrie Patty" data-bs-original-title="Marrie Patty">
                <img src="../../assets/img/avatars/12.png" alt="Avatar" class="rounded-circle">
              </div>
              <div class="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Jimmy Jackson" data-bs-original-title="Jimmy Jackson">
                <img src="../../assets/img/avatars/9.png" alt="Avatar" class="rounded-circle">
              </div>
              <div class="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Kristine Gill" data-bs-original-title="Kristine Gill">
                <img src="../../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
              </div>
              <div class="avatar pull-up" data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Nelson Wilson" data-bs-original-title="Nelson Wilson">
                <img src="../../assets/img/avatars/14.png" alt="Avatar" class="rounded-circle">
              </div>
            </div>
          </div>
        </li>
        <li class="timeline-end-indicator">
          <i class="bx bx-check-circle"></i>
        </li>
      </ul>
      <!-- /Activity Timeline -->
    </div>
  </div>
</div>
<!--/ Activity Timeline -->
<!-- pill table -->
<div class="col-md-6 order-3 order-lg-4 mb-4 mb-lg-0">
  <div class="card text-center">
    <div class="card-header py-3">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-browser" aria-controls="navs-pills-browser" aria-selected="true">Browser</button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-os" aria-controls="navs-pills-os" aria-selected="false" tabindex="-1">Operating System</button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-country" aria-controls="navs-pills-country" aria-selected="false" tabindex="-1">Country</button>
        </li>
      </ul>
    </div>
    <div class="tab-content pt-0">
      <div class="tab-pane fade show active" id="navs-pills-browser" role="tabpanel">
        <div class="table-responsive text-start">
          <table class="table table-borderless text-nowrap">
            <thead>
              <tr>
                <th>No</th>
                <th>Browser</th>
                <th>Visits</th>
                <th class="w-50">Data In Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/chrome.png" alt="Chrome" height="24" class="me-2">
                    <span>Chrome</span>
                  </div>
                </td>
                <td>8.92k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 84.75%" aria-valuenow="84.75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">84.75%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/safari.png" alt="Safari" height="24" class="me-2">
                    <span>Safari</span>
                  </div>
                </td>
                <td>7.29k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 72.43%" aria-valuenow="72.43" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">72.43%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/firefox.png" alt="Firefox" height="24" class="me-2">
                    <span>Firefox</span>
                  </div>
                </td>
                <td>6.11k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 67.37%" aria-valuenow="67.37" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">67.37%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/edge.png" alt="Edge" height="24" class="me-2">
                    <span>Edge</span>
                  </div>
                </td>
                <td>5.08k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 60.12%" aria-valuenow="60.12" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">60.12%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/opera.png" alt="Opera" height="24" class="me-2">
                    <span>Opera</span>
                  </div>
                </td>
                <td>3.93k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 51.94%" aria-valuenow="51.94" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">51.94%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/brave.png" alt="Brave" height="24" class="me-2">
                    <span>Brave</span>
                  </div>
                </td>
                <td>3.19k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">39.94%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/vivaldi.png" alt="Vivaldi" height="24" class="me-2">
                    <span>Vivaldi</span>
                  </div>
                </td>
                <td>1.29k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 28.43%" aria-valuenow="28.43" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">18.43%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/uc.png" alt="UC Browser" height="24" class="me-2">
                    <span>UC Browser</span>
                  </div>
                </td>
                <td>328</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 20.14%" aria-valuenow="20.14" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">20.14%</small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-pane fade" id="navs-pills-os" role="tabpanel">
        <div class="table-responsive text-start">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>No</th>
                <th>System</th>
                <th>Visits</th>
                <th class="w-50">Data In Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/windows.png" alt="Windows" height="24" class="me-2">
                    <span>Windows</span>
                  </div>
                </td>
                <td>875.24k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 71.50%" aria-valuenow="71.50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">71.50%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/mac.png" alt="Mac" height="24" class="me-2">
                    <span>Mac</span>
                  </div>
                </td>
                <td>89.68k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 66.67%" aria-valuenow="66.67" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">66.67%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/ubuntu.png" alt="Ubuntu" height="24" class="me-2">
                    <span>Ubuntu</span>
                  </div>
                </td>
                <td>37.68k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 62.82%" aria-valuenow="62.82" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">62.82%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/chrome.png" alt="Chrome" height="24" class="me-2">
                    <span>Chrome</span>
                  </div>
                </td>
                <td>35.34k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 56.25%" aria-valuenow="56.25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">56.25%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/cent.png" alt="Cent" height="24" class="me-2">
                    <span>Cent</span>
                  </div>
                </td>
                <td>32.25k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 42.76%" aria-valuenow="42.76" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">42.76%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/linux.png" alt="Linux" height="24" class="me-2">
                    <span>Linux</span>
                  </div>
                </td>
                <td>22.15k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 37.77%" aria-valuenow="37.77" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">37.77%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/fedora.png" alt="Fedora" height="24" class="me-2">
                    <span>Fedora</span>
                  </div>
                </td>
                <td>1.13k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 29.16%" aria-valuenow="29.16" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">29.16%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div class="d-flex align-items-center">
                    <img src="../../assets/img/icons/brands/vivaldi-os.png" alt="Vivaldi" height="24" class="me-2">
                    <span>Vivaldi</span>
                  </div>
                </td>
                <td>1.09k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 26.26%" aria-valuenow="26.26" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">26.26%</small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-pane fade" id="navs-pills-country" role="tabpanel">
        <div class="table-responsive text-start">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th>No</th>
                <th>Country</th>
                <th>Visits</th>
                <th class="w-50">Data In Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-us rounded-circle fs-3 me-2"></i>
                    <span>USA</span>
                  </div>
                </td>
                <td>87.24k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 89.12%" aria-valuenow="89.12" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">89.12%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-br rounded-circle fs-3 me-2"></i>
                    <span>Brazil</span>
                  </div>
                </td>
                <td>62.68k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 78.23%" aria-valuenow="78.23" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">78.23%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-in rounded-circle fs-3 me-2"></i>
                    <span>India</span>
                  </div>
                </td>
                <td>52.58k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 69.82%" aria-valuenow="69.82" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">69.82%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-au rounded-circle fs-3 me-2"></i>
                    <span>Australia</span>
                  </div>
                </td>
                <td>44.13k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 59.90%" aria-valuenow="59.90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">59.90%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-de rounded-circle fs-3 me-2"></i>
                    <span>Germany</span>
                  </div>
                </td>
                <td>32.21k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 57.11%" aria-valuenow="57.11" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">57.11%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-fr rounded-circle fs-3 me-2"></i>
                    <span>France</span>
                  </div>
                </td>
                <td>37.87k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 41.23%" aria-valuenow="41.23" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">41.23%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-pt rounded-circle fs-3 me-2"></i>
                    <span>Portugal</span>
                  </div>
                </td>
                <td>20.29k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 37.11%" aria-valuenow="37.11" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">37.11%</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="fis fi fi-cn rounded-circle fs-3 me-2"></i>
                    <span>China</span>
                  </div>
                </td>
                <td>12.21k</td>
                <td>
                  <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="progress w-100" style="height:10px;">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 17.61%" aria-valuenow="17.61" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small class="fw-medium">17.61%</small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/ pill table -->
</div>`);}