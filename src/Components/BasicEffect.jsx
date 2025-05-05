import React from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log('useEffect called')
    }, []);
  return (
    <section>
      <h1>check console</h1>
    </section>
  )
};

export default BasicEffect
