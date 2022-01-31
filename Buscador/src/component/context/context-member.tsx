import React, { useState } from 'react'
import { FilterContext } from '../interfaces/member.entity';
import "./style-context.css"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const MyFilterContext = React.createContext<FilterContext>({
    newFilter: "",
    setNewFilter: (value) =>{
        console.log("My Context missing provider in App?")
    }
})
export const MyfilterContextProvider: React.FC = (props) => {
    const [newFilter, setNewFilter] = React.useState("Lemoncode");
    const {children} = props
    return (
      <MyFilterContext.Provider
        value={{ newFilter, setNewFilter }}
      >
        {children}
      </MyFilterContext.Provider>
    );
  };

export const MemberSearch: React.FC = () => {
    const { newFilter, setNewFilter} = React.useContext(MyFilterContext);
    const [ filter, setFilter] = useState(newFilter)


const handleFilter = (e) => {
    e.preventDefault();
    setNewFilter(filter);
}

return (

<>
<form onSubmit={handleFilter}>
<div className="members-search">
    <input 
    type="text"
    value= {filter}
    onChange={(e) => setFilter(e.target.value)}></input>

<Stack spacing={2} direction="row">
    <Button  size="medium" variant="contained" type="submit">Buscar</Button>
      
      </Stack>

</div>
</form>


</>
)
}