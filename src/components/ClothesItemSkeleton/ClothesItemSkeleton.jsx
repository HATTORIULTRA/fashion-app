import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
   <ContentLoader
      style={{margin: '20px'}}
      speed={2}
      width={400}
      height={600}
      viewBox="0 0 400 600"
      backgroundColor="#a1a1a1"
      foregroundColor="#4a4a4a"
   >
      <rect x="1" y="-3" rx="40" ry="40" width="398" height="392" />
      <rect x="30" y="417" rx="9" ry="9" width="339" height="39" />
      <rect x="17" y="478" rx="15" ry="15" width="372" height="78" />
   </ContentLoader>
)

export default MyLoader