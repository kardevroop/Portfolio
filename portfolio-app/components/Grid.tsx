import React from 'react'
import {gridItems} from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
        <BentoGrid>
            {gridItems.map(({id, title, description, className,
                img, imgClassName, titleClassName, spareImg
            }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
            ))}
        </BentoGrid>
  )
}

export default Grid