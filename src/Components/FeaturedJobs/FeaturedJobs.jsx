import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    //Load show all data. First 4 ta data dekhabe. Erpor onclick e setData te jobs.length dile shob dekhabe
    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            {/* Show all dile button hide hobe */}
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;