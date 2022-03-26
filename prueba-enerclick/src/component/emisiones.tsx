import axios from 'axios';
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

           


export const NoRenovables = () => {
  const [emissions, setEmissions] = React.useState([])
  const [energy, setEnergy] = React.useState({})
 
 
   React.useEffect(() => {
     const typeEnergy=[]
     const emissionsEnergy=[]
     axios.get(`https://apidatos.ree.es/es/datos/generacion/no-renovables-detalle-emisiones-CO2?start_date=2021-01-01T00:00&end_date=2021-12-31T23:59&time_trunc=year`)
     .then((rest) => {
         rest.data.included.map(item => {
         typeEnergy.push(item.type)
         const max = (item.attributes.values.map((valores) => valores.value))
         for (var i = 0; i < max.length; i++) {
          emissionsEnergy.push(max[i]);
          
           }
 
        setEnergy({
           chart: {
             type: 'donut',
           },
           labels: [ ...typeEnergy ],
           responsive: [{
            breakpoint: 800,
            options: {
              chart: {
                width: 400
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
         ,
      })
        setEmissions([ ...emissionsEnergy])
       })  
       })
     
   }, []);
 
 
 
     return (
       <div id="chart">
       <h2 className="title">Emisiones de Energia no renovables</h2>
         <ReactApexChart options={energy} series={emissions} type="donut" width={600} height={900} />
      </div>
     )
 }

