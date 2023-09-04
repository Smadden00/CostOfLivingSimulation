'use client'

export default function NextDescription({description}) {

    console.log(description);

    return (
        <div className='nextDescriptionContainter'>
            {'Adding another credit:\n'}{description}
        </div>
  )}
  