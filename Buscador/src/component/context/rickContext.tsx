import React from "react";

import "./style-context.css"

interface FilterContext {
filter: string;
  setFilter: (value: string) => void;
}

export const RickFilterContext = React.createContext<FilterContext>({
  filter: "",
   setFilter: (value) => {
    console.log("MyContext missing privder in APP?");
  }
});

export const RickProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [filter, setFilter] = React.useState<string>("");

  return (
    <RickFilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </RickFilterContext.Provider>
  );
};



export const RickSearch: React.FC = () => {
    const {filter, setFilter} = React.useContext(RickFilterContext)
    

    const handlechange = (e) => {
        setFilter(e.target.value)
    }
    return (
      <div className="members-search">
        <form>
            <input 
            type="text"
            value={filter}
            onChange={handlechange}/>


        </form>
    </div> 
    )
}