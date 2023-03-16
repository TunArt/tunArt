import React from 'react'

interface DetailProps {
    id: number,
    title: string,
    href: string,
    img: string,
    date: string,
    datetime: string,
    category: any,
    author:any
  }
const Detailimg :React.FC<DetailProps>= (props:any) => {
  return (
      <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"/>
                {/* <a href={props.href}>
                  <span className="absolute inset-0" />
                  {props.title}
                </a> */}
                </div>
  )
}

export default Detailimg;