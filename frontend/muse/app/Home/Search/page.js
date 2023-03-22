"use client";
import PeopleCard from "../../../ui/PeopleCard";
import React, { useEffect, useState } from "react";
import { Button, Stack,Row,Nav, Form , Card, Container} from 'react-bootstrap' ;
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Multiselect from 'multiselect-react-dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] });

export default function page() {
  const [musicians, setMusicians] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [data, setData] = useState({});
  const [nameFilter, setnameFilter] = useState("");
  const [options, setOptions] = useState(['pop','metal','jazz','country','edm','classic']);
  const [specialFilter, setspecialFilter] = useState([]);
  const [placeholder, setPlaceholder] = useState("specialization");


  //effect when press filter
  useEffect(() => {
    // get all musician with filter condition
    const getMusicians = async () => {
      const queryParams = new URLSearchParams({
        p: 0,
        m: 7,
        ...data
      }).toString();
      console.log(queryParams);
      const respone = await fetch(
        "http://localhost:4000/api/musician?" + queryParams,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await respone.json();
      if (!respone.ok) {
        alert(result.error);
      } else {
        setMusicians(result.result);
      }
    };

    if (isFilter) {
      console.log(data);
      getMusicians();
    }
    setIsFilter(false);

  }, [isFilter]);

    //effect when press select specialiazation
  useEffect(() => {
    // get all musician with filter condition
    if(specialFilter.length == 0){
      console.log("blank") ;
      setPlaceholder("specialization")
    } else {
      setPlaceholder("")
    }
    console.log(specialFilter) ;
  }, [specialFilter]);

  const filterHandler = (e) => {
    e.preventDefault(); // prevent form submission
  }

  return (
    <div>
    <h1>This is head</h1>
    <Nav style={{marginBottom:"50px"}}>
    <Form.Group className="d-flex" onSubmit={filterHandler}>
            <Form.Control
              name="name"
              type="text"
              placeholder="name"
              className="me-2"
              aria-label="Search"
              value={nameFilter}
              onChange={(e) => setnameFilter(e.target.value)}
            />
        
      </Form.Group>

      <Button type="submit" onClick={() => {
              console.log(specialFilter) ;
              setData({name: nameFilter,specialization: specialFilter}) ;
              console.log(data) ;
              setIsFilter(true)}} 
              variant="outline-success">Filter
        </Button>
      <div className="text-dark d-flex" style={{backgroundColor: "white"}}><Multiselect
        isObject ={false}
        options ={options}
        placeholder = {placeholder}
        showCheckbox
        displayValue="try"
        onRemove={e => setspecialFilter([].slice.call(e).map(item => item))}
        onSelect={e => setspecialFilter([].slice.call(e).map(item => item))}
      /></div>
      

    </Nav>
    <Container fluid style={{}}>
      <Row><PeopleCard musicians={musicians}/></Row>
    </Container>
    
    </div>
  );
}
