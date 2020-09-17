import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';

const BASE_URL = 'http://localhost:8080';

const Records = () => {
    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    console.log(recordsResponse);
    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12`) // contatenacao de string
        .then((response) =>setRecordsResponse(response.data))}, []);
    

  


    return  (
        <div className="page-container">
           <table className="records-table" cellPadding="0" cellSpacing="0">
               <thead>
                   <tr>
                       <th>INSTANTE</th>
                       <th>NOME</th>
                       <th>IDADE</th>
                       <th>PLATAFORMA</th>
                       <th>GÊNERO</th>
                       <th>TITULO DO GAME</th>
    
                   </tr>
               </thead>
               <tbody>
               {recordsResponse?.content.map((record )=>(
                      <tr key={record.id}>
                      <td>20/08/2010 15:35</td>
                      <td>{record.name}</td>
                      <td>25</td>
                      <td>XBOX</td>
                      <td>AÇÃO</td>
                      <td>The Last of US</td>
                  </tr>
                   ))}
               </tbody>
            </table> 
        </div>
    );
    
}

export default Records;