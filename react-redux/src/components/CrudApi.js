import React, { useState, useEffect } from 'react';
import { CRUDForm } from '../components/CRUDForm';
import { CRUDTable } from '../components/CRUDTable';
import helpHttp from '../helpers/helpHttp';
import Loader from '../components/Loader';
import MessageErr from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { createChampion, deleteChampion, noData, readData, updateChampion } from '../actions/crudActions';
import { post } from '../helpers/crudHttp';

export default function CrudApi() {
    const [dataToEdit, setDataToEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch()
    const state = useSelector(state => state.crud)
    let {db} = state
    
    let api = helpHttp();
    let url = "http://localhost:5000/champions";
    useEffect(() => {
      setLoading(true);
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            dispatch(readData(res))
            setError(null);
          } else {
            dispatch(noData())
            setError(res);
          }
  
          setLoading(false);
        });
    }, []);


    const createData = (data) => {
      data.id = Date.now();

      let options = {
        body: data,
      }
      console.log(data)
      post(url, options).then((res)=>{
        console.log(res)
        return typeof res === "object"
        ? dispatch(createChampion(res))
        : console.log("error")
      })
    };


    const updateData = (data) => {
      let options = {
        body: data,
        headers: {"content-type" : "application/json"}
      }
      let endpoint = `${url}/${data.id}`;

      api.put(endpoint, options).then((res)=>{
        if (!res.err) {
         dispatch(updateChampion(data))
        } else {
          setError(res)
        }
      })

    };


    const deleteData = (id, name) => {
      let isDelete = window.confirm(
        `Are you sure eliminate the champion ${name}? `
      );

      if (isDelete) {
        let options = {
          headers: {"content-type" : "application/json"},
          method: "DE"
        }
        let endpoint = `${url}/${id}`;
        
        api.delet(endpoint, options).then((res)=>{
          if (!res.err) {
            dispatch(deleteChampion(id))
          } else {
              setError(res)
          }
        })
      }

    };
    
    return (
      <div>
        <h2>CRUD API</h2>
        <article className="grid-1-2">
          <CRUDForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          ></CRUDForm>
          {loading && <Loader></Loader>}
          {error && (
            <MessageErr
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            ></MessageErr>
          )}
          {db && (
            <CRUDTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            ></CRUDTable>
          )}
        </article>
      </div>
    );
  } 