import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/userFolder'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'
import Navbar from './Navbar'

export default function Dashboard() {

    const {folder, childFolders} = useFolder("2FQYMVlOTEERQXp28yrsM8")
    console.log(folder)
  
    return (
        <>
          <Navbar/>
            <Container fluid>
                <AddFolderButton currentFolder={folder}/>
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                          {childFolders.map(childFolder => {
                              <div key={childFolder.id} style={{maxWidth : '250px'}}
                                    className="p-2">
                                        <Folder folder={childFolder}/>
                              </div>
                          })}  
                    </div>
                )}
            </Container>

       
        </>
    )
}
