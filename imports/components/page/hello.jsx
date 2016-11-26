import React from 'react'

export const Hello = ({ params, location }) => (
    <h3>Howdy, {params.name}! You like {location.query.food}.</h3>
)

// http://localhost:4000/hello/rashina?food=french fries