import React from 'react'
import './Blog.scss'

export const Blog = () => {
    let a = [1, 2, 3, 4]
    let sum = 0

    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)

    let b = a.reduce((prev, item, index) => prev + item, 10)
    console.log(b)

    return <div>Blog</div>
}
