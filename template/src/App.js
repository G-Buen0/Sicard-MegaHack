import React, { useState, useEffect } from 'react';
import Form from './components/Forms/FormProductRegister';
import api from './services/api';
import { uniqueId } from 'lodash';
//import FileList from './components/FileList/Index';
import CardTemplate from './components/Card/Card';


import {
  Col,
  Card
} from "reactstrap";


function App() {
  const [state, setState]  = React.useState({
    state:"", 
    title:"", 
    titlePlus:"", 
    color:"", 
    sectionTitle1:"", 
    sectionParagraph1:"", 
    sectionTitle2:"", 
    sectionParagraph2:"", 
    sectionTitle3:"", 
    sectionParagraph3:"", 
  })

  const [uploadedFiles, setUploadedFiles] = useState([])
  
  
  useEffect(() =>{
    api.get('posts'
    ).then(response => {
      setUploadedFiles(response.data.map(file => ({
        id: file._id,
        name: file.name,
        preview: file.url,
        uploaded: true
      })))
    })
  })

  function handleUpload(files) {
    
    const upFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error:false        
    }))
    
    setUploadedFiles(uploadedFiles.concat(upFiles))
    
    upFiles.forEach(processUpload)
  }

  function updateFile(id, data){
    setUploadedFiles({
      uploadedFiles: uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id ? { ...uploadedFile, ...data} : uploadedFile;
      })
    })
  }

  function processUpload(fileUp) {
    const data = new FormData()

    data.append('file', fileUp.file, fileUp.name)

    api.post('posts', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round(e.loaded * 100 / e.total))
        console.log(progress)
        updateFile(fileUp.id, {
          progress,
        })
      }
    }).then( (response) => {
       updateFile(fileUp.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        })
        
    }).catch((error) => {
        updateFile(fileUp.id, {
          error: true
        })
        console.log(error)
    })
}

  const handleChange = (e) =>{
    const value = e.target.value
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  async function handleDelete (id) {
    await api.delete(`posts/${id}`)
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id))
    uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
  }

  return (
    <div id="App" className="container">
      <div className="row">

        <Col lg="5">
          
          <Form className="col"
            handleChange={handleChange}
            onDelete={handleDelete}
            onUpload={handleUpload}         
            state={state.state}
            title={state.title} 
            titlePlus={state.titlePlus}
            color={state.color} 
            sectionTitle1={state.sectionTitle1}
            sectionParagraph1={state.sectionParagraph1}
            sectionTitle2={state.sectionTitle2}
            sectionParagraph2={state.sectionParagraph2}
            sectionTitle3={state.sectionTitle3}
            sectionParagraph3={state.sectionParagraph3}
            files={uploadedFiles}
          />
        </Col>
        {console.log(uploadedFiles)}
        <Col lg="7" className="shadow border-0">
          <CardTemplate className="col" 
            title={state.title} 
            state={state.state}
            titlePlus={state.titlePlus}
            color={state.color} 
            sectionTitle1={state.sectionTitle1}
            sectionParagraph1={state.sectionParagraph1}
            sectionTitle2={state.sectionTitle2}
            sectionParagraph2={state.sectionParagraph2}
            sectionTitle3={state.sectionTitle3}
            sectionParagraph3={state.sectionParagraph3}
            files={uploadedFiles}
          />
        </Col>

      </div>
    </div>
  );
}

export default App;
