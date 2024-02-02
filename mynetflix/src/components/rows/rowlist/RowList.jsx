import React from 'react'
import Row from '../row/row'
import requests from '../../../utilis/request'

function RowList() {
  return (
    <>
  <Row title="NETFLIXORIGINAL" fetchurl={requests.fetchNetflixorginals} isLargeRow={true}/>
  <Row title="romance"  fetchurl={requests.fetchRomance} />
  <Row  title="Toprated" fetchurl={requests.fetchedToprated}/>
  <Row title="Comedy"  fetchurl={requests.fetchComedy}/>
  <Row  title="Horrors"  fetchurl={requests.fetchHorrors}/>
    
  <Row   title="Documentary" fetchurl={requests.fetchDocumentary}/>

    
</>



  )

}

export default RowList