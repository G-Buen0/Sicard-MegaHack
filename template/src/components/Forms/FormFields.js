import React from 'react'
import { DropContainer, UploadMessage } from './styles'
//import './styles.scss'
import Dropzone from 'react-dropzone'

function FormFields(props) {
    //const { handleChange, title, description, onUpload, brand, year, storage, audio, empty} = props
    const { 
      condicao, 
      titulo, 
      tituloPlus, 
      cor, 
      sectionTitle1, 
      sectionParagraph1, 
      sectionTitle2, 
      sectionParagraph2, 
      sectionTitle3, 
      sectionParagraph3, 
      imgProductPrincipal, 
      imgProduct1, 
      imgProduct2, 
      imgProduct3,
      onUpload,
      audio,
      empty,
      handleChange
      } = props

    function renderDragMessage(isDragActive, isDragReject){
        if(! isDragActive){
            return <UploadMessage type="default">Arraste arquivos aqui...</UploadMessage>
        }
    
        if(isDragReject){
            return <UploadMessage type="success">Arquivo não suportado</UploadMessage>
        }
    
        return <UploadMessage type="error">Solte os arquivos aqui</UploadMessage>
    }
  
    return(
        <div className="form">
            <form >
                <div className="title">
                    <label htmlFor="título">Título:</label>
                    <input type="text" name="title" value={titulo} onChange={handleChange}/>
                </div>

                <div className="description">
                    <label htmlFor="Descrição">Descrição:</label>
                    <textarea name="description" value={cor} onChange={handleChange}></textarea>
                </div>
            </form>

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
            
            <form>
                <legend>Características</legend>
                <div className="brand">
                    <input type="text"/>
                    <input type="text" name="brand" value={cor} onChange={handleChange}/>
                </div>

                <div className="year">
                    <input type="text"/>
                    <input type="text" name="year" value={cor} onChange={handleChange}/>
                </div>

                <div className="audio">
                    <input type="text" />
                    <input type="text" name="audio" value={cor} onChange={handleChange}/>
                </div>

                <div className="storage">
                    <input type="text" />
                    <input type="text" name="storage" value={cor} onChange={handleChange}/>
                </div>

                <div className="empty">
                    <input type="text" />
                    <input type="text" name="empty" value={empty} onChange={handleChange}/>
                </div>
            </form>
            
        </div>

    )
}

export default FormFields