//this is for creating the JOB CARDS
//this has the API code at the end

import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { FaHourglassHalf } from 'react-icons/fa';

const Data = [
  {
    id: 1,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 2,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 3,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 4,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 5,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 6,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 7,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 8,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 9,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 10,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 11,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 12,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 13,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 14,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 15,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 16,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 17,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 18,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 19,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 20,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 21,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 22,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 23,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 24,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 25,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 26,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 27,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 28,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 29,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  },
  {
    id: 30,
    title: 'Web Developer',
    time: 'posted 9 hours ago',
    location: 'Bengaluru',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto dolores necessitatibus voluptates dolorem praesentium accusantium rerum dolore aspernatur corporis fuga ut commodi aliquid, a repellendus soluta laboriosam amet repudiandae.',
    company: 'Delete Me',
    salary: 'Estimated salary: 10LPA-16LPA',
    minExp: '8 years'
  }
];

const Job = () => {
  const [visibleData, setVisibleData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleData((prevData) => {
        const lastLoadedIndex = prevData.length;
        const newData = Data.slice(lastLoadedIndex, lastLoadedIndex + 4);
        setLoading(false);
        return [...prevData, ...newData].map(item => ({ ...item, expanded: false }));
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!loading && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  const toggleDescription = (id) => {
    setVisibleData(prevData => prevData.map(item => {
      if (item.id === id) {
        return { ...item, expanded: !item.expanded };
      }
      return item;
    }));
  };

  return (
    <div>
      <Grid container spacing={3} justify="center">
        {visibleData.map(({ id, title, time, location, desc, company, salary, expanded, minExp }) => (
          <Grid key={id} item xs={12} sm={6} md={4}>
            <div className="card border border-gray-200 p-4 rounded-md transition duration-300 ease-in-out hover:ring-4 hover:ring-blue-500">
              <span className="flex items-center text-[#ccc] gap-1 border-[1px] w-[80%] rounded-[10px]">
                <FaHourglassHalf /> {time}
              </span>
              <div className="company flex items-center gap-2">
                <span className="text-[16px] text-textColor hover:underline cursor-pointer"> {company} </span>
              </div>
              <Typography variant="h6" className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</Typography>
              <Typography className="text-[#ccc]">{location}</Typography>
              <Typography className="text-[12px]">{salary} </Typography>
              <Typography className="text-[13px] text-[#95959] border-t-[2px] mt-[20px] group-hover:text-white">
                {expanded ? desc : `${desc.slice(0, 150)}...`}
                {desc.length > 150 && (
                  <Button className="text-blue-500 hover:underline" onClick={() => toggleDescription(id)}>
                    {expanded ? 'Read Less' : 'View Job'}
                  </Button>
                )}
              </Typography>
              <h6 style={{ fontSize: '12px' }}>Minimum Experience</h6>
              <h6 style={{ fontSize: '12px' }}>{minExp}</h6>

              <Button variant="contained" style={{ backgroundColor: 'rgb(85, 239, 196)', color: 'white' }} className="mt-2 w-full">
                Easy Apply
              </Button>
              <Button variant="contained" style={{ backgroundColor: 'rgb(73, 67, 218)', color: 'white', marginTop:'10px' }} className="mt-6 w-full ">
                Ask For Referral
              </Button>
            </div>
          </Grid>
        ))}
        <Grid item xs={12}>
          {loading && <p>Loading...</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Job;


//LOOKS LIKE THE API IS NOT WORKING.
//TRIED IF THE API WAS FETCHING ANY DATA USING POSTMAN AS WELL, BUT IT WAS ME 404 NOT FOUND ERROR AND THE SAME IN NETWORK TAB AS WELL.
//I TRIED USING REDUX BY CREATING ACTION, REDUCER AND STORE BY USING THE useDispatch hook to fetch the data from API but that also didn't work.

// import React, { useState, useEffect } from 'react';
// import { Grid, Button, Typography } from '@material-ui/core';
// import { FaHourglassHalf } from 'react-icons/fa';

// const Job = () => {
//   const [jobData, setJobData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchJobData();
//   }, []); // Fetch data when the component mounts

//   const fetchJobData = () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const body = JSON.stringify({
//       "limit": 10,
//       "offset": 0
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body
//     };

//     fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
//       .then((response) => response.json()) // Parse response as JSON
//       .then((data) => {
//         setJobData(data.jobs); // Update state with fetched job data
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   };
