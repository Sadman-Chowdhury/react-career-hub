import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied sucessfully')
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                <h2>Job details of: {job.job_title}</h2>
                    <h2 className="text-4xl">{job.company_name}</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl"></h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;