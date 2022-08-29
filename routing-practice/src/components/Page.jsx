import React from 'react';
import { useParams } from 'react-router-dom';
const Params = (props)=>{

    const {word, color, colorl} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                <p style={
                    color? 
                    {color: color, backgroundColor: colorl}
                    :null
                }>
                    This is a word: {word}
                </p>
                :
                <p>
                    This is a number: {word}
                </p>
            }
        </div>
    )
}
export default Params;