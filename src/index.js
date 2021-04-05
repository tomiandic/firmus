import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
const setJobSelected = (category, subcategory) => {
  let jobList = {...jobs};
  let selectedList = [...jobList[category]]; 
  jobList[category].forEach((item, index) => {
     if(item.jobName === subcategory){
         let selChecked = {...selectedList[index]};
         selChecked.checked = !selChecked.checked;
         selectedList[index] = selChecked;
      };
  }); 
  jobList[category] = selectedList;
  setJobs(jobList);
} */

{/* <div className={classes.formChips}>

{Object.keys(jobs).map(item=>(
    jobs[item].map(job=>{
        if(job.checked)return <Chip color="primary" onDelete={() => setJobSelected(item, job.jobName)} style={{fontSize: 11, marginRight:8}} size="small" label={job.jobName} />
    })))}
</div> */}