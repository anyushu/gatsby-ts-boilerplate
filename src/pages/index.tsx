import * as React from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>TopPage</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-2xl">Hello World !!</h1>
      </div>
    </>
  )
}

export default IndexPage
