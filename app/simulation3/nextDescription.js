'use client'

export default function NextDescription({borderColor, description}) {

    console.log(description);

    return (
        <div className='nextDescriptionContainter' >
            {'Adding another credit:\n'}{description}
        </div>
  )}
  