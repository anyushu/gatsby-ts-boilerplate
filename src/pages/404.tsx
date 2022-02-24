import * as React from 'react'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-2xl">Page NotFound !</h1>
      </div>
    </>
  )
}

export default NotFoundPage
