import axios from 'axios';
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import './style-component.css'

           


export const EvoEnergy = () => {
  const [generate, setGenerate] = React.useState([])
  const [options, setOptions] = React.useState({})
 
 
   React.useEffect(() => {
     const typeEnergy=[]
     const valueEnergy=[]
     axios.get(`https://apidatos.ree.es/es/datos/generacion/evolucion-renovable-no-renovable?start_date=2021-01-01T00:00&end_date=2021-12-31T23:59&time_trunc=year
     `)
     .then((rest) => {
         rest.data.included.map(item => {
         typeEnergy.push(item.type)
         const max = (item.attributes.values.map((valores) => valores.value))
         for (var i = 0; i < max.length; i++) {
           valueEnergy.push(max[i]);
         }
         
         setOptions({
          chart: {
            type: 'bar',
          },
          theme: {
            mode: 'light', 
            palette: 'palette5', 
            
        },
        fill: {
          
      opacity: 0.8,
      type: 'solid',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      },
      
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },

        
      

          labels: [ ...typeEnergy ],
          
     })
        setGenerate([{
            name: 'Energía Utilizada',
            data: [...valueEnergy]}],
  )
         
       })  
       })
     
   }, []);
 
 
 
     return (
       <div id="chart">
       <h2 className="title">Generación de Energía en España en 2021</h2> 
         <ReactApexChart options={options} series={generate} type="bar" width={600} height={600} />
       </div>
  
     )
 }
 
