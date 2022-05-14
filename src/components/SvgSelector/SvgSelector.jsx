import React from 'react'

export const SvgSelector = ({ id }) => {
    switch (id) {
        case 'inst':
            return (
                <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>
            )
        case 'vk':
            return (
                <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="64px"
                    height="64px">
                    <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M42.323,43 c-1.219-3.804-4.257-6.747-8.275-7.147V43h-0.62C22.496,43,16.26,35.492,16,23h5.477c0.18,9.169,4.217,13.053,7.415,13.854V23 h5.157v7.908c3.158-0.34,6.476-3.944,7.595-7.908h5.157c-0.859,4.885-4.457,8.488-7.016,9.97C42.343,34.171,46.441,37.314,48,43 H42.323z" />
                </svg>
            )
        case 'instBlack':
            return (
                <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>
            )
        case 'vkBlack':
            return (
                <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="64px"
                    height="64px">
                    <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M42.323,43 c-1.219-3.804-4.257-6.747-8.275-7.147V43h-0.62C22.496,43,16.26,35.492,16,23h5.477c0.18,9.169,4.217,13.053,7.415,13.854V23 h5.157v7.908c3.158-0.34,6.476-3.944,7.595-7.908h5.157c-0.859,4.885-4.457,8.488-7.016,9.97C42.343,34.171,46.441,37.314,48,43 H42.323z" />
                </svg>
            )

        default:
            break
    }
}