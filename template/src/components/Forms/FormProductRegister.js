import React from "react";
import { DropContainer, UploadMessage, Box, FileInfo, Preview } from './styles'
import './style.scss'
import Dropzone from 'react-dropzone'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


function FormProductRegister(props) {
      //const { handleChange, title, description, onUpload, brand, year, storage, audio, empty} = props
      const { 
        state, 
        title, 
        titlePlus, 
        color, 
        sectionTitle1, 
        sectionParagraph1, 
        sectionTitle2, 
        sectionParagraph2, 
        sectionTitle3, 
        sectionParagraph3, 
        onUpload,
        handleChange,
        files,
        onDelete
        } = props
        {console.log(files)}
        
  
      function renderDragMessage(isDragActive, isDragReject){
          if(! isDragActive){
              return <UploadMessage type="default">Arraste as imagens do seu produto aqui...</UploadMessage>
          }
      
          if(isDragReject){
              return <UploadMessage type="success">Formato não suportado</UploadMessage>
          }
      
          return <UploadMessage type="error">Solte as imagens aqui</UploadMessage>
      }
    
      return(
          <div className="card shadow-sm border-1">
     
            <div className="">
                  <div className="px-lg-5 py-lg-5 card-body">
                        <div className="text-left text-muted mb-4"><small>Preencha os dados do produto</small></div>
                        <form role="form" className="">
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Nome do Produto" name="title" value={title} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Estado" name="state" value={state} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Cor" name="color" value={color} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Cabeçalho principal" name="sectionTitle1" value={sectionTitle1} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Parágrafo do cabeçalho principal" name="sectionParagraph1" value={sectionParagraph1} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Cabeçalho 1" name="sectionTitle2" value={sectionTitle2} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Parágrafo 1" name="sectionParagraph2" value={sectionParagraph2} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Cabeçalho 2" name="sectionTitle3" value={sectionTitle3} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                              <div className="form-group">
                              <div className=" mb-4 input-group">
                                    <div className="input-group-prepend"><span className=""></span></div>
                                    <input placeholder="Parágrafo 2" name="sectionParagraph3" value={sectionParagraph3} onChange={handleChange} type="text" className="form-control"/>
                              </div>
                              </div>
                        
                              <div className="text-muted"><small><span className="text-success font-weight-500">Selecione as imagens do produto abaixo:</span></small></div>
                              <div className="my-4 row">
                              <div className="col-12"></div>
                              </div>


                                    
                              <Dropzone accept="image/*" onDropAccepted={onUpload}>
                                    { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                                    <DropContainer 
                                          {...getRootProps()}
                                          isDragActive={isDragActive}
                                          isDragReject={isDragReject}
                                          >
                                          <input {...getInputProps()}/>
                                          {renderDragMessage(isDragActive, isDragReject)}
                                    </DropContainer>
                                    ) }
                  
                              </Dropzone>
                              
                              <Box>
                              { !! files.length && (
                                    files.map(uploadedFile => (
                                          <li key={uploadedFile.id}>
                                                <FileInfo>
                                                      <Preview src={uploadedFile.preview}/>
                                                      <div>
                                                            <button>Definir foto de capa</button>
                                                            <button onClick={() => onDelete(uploadedFile.id)}>Remover Foto</button>
                                                      </div>
                                                </FileInfo>
                                          </li>
                                    ))
                              )}
                              </Box>
                              
                              <div className="text-center">
                              <button type="button" className="mt-4 btn btn-lg w-100 btn-primary">Cadastrar produto</button>
                              </div>
            
                        </form>
                  </div>
            </div>
             
              
          </div>
  
      )
  }
  
export default FormProductRegister
