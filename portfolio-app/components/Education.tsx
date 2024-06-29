import React from 'react'

const Education = () => {
  return (
    <section id="education">
    <div className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Educational</span> Qualifications
      </h1>
      <div className='mt-20'>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <time className="text-3xl font-mono italic">2015 - 2019</time>
            <div className="text-2xl font-black text-amber-400">B.E. in Computer Science and Engineering</div>
            <div className="text-xl font-black">Graduated from <span className='text-red-400'>Jadavpur University, India </span> 
            with <br></br><span className='text-purple'>8.37(/10) CGPA </span>  
            and <span className='text-purple'>Honours First Class</span> 
            </div>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="h-8 w-8">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-end mb-10">
            <time className="text-3xl font-mono italic">2021 - 2022</time>
            <div className="text-2xl font-black text-amber-400">M.S. in Computer Science </div>
            <div className="text-xl font-black">Graduated from <span className='text-red-400'>Northeastern University, Boston </span> 
            with <br></br><span className='text-purple'>3.67 GPA </span>
            </div>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8">
                <path
                fillRule="inherit"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <time className="text-3xl font-mono italic">2023</time>
            <div className="text-2xl font-black">Currently pursuing <span className='text-amber-400'>Ph.D. in Computing and Information Sciences</span> </div>
            <div className="text-xl font-black text-red-400">@Rochester Insitute of Technology, Rochester
            </div>
            </div>
            <hr />
        </li>
        </ul>
        </div>
    </div>
    </section>
  )
}

export default Education